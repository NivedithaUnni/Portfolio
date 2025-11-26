import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import TitleHeader from "../components/TitleHeader";

// Auto-fit 3D model
const ComputerModel = () => {
  const { scene } = useGLTF("/models/phone.glb");
  const groupRef = useRef();
  const [scale, setScale] = useState(1);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    if (groupRef.current) {
      // Calculate bounding box
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const size = new THREE.Vector3();
      box.getSize(size);

      // Increase size
      const desiredHeight = 8; // larger than before
      const scaleFactor = desiredHeight / size.y;
      setScale(scaleFactor);

      // Center and ground the model
      const center = new THREE.Vector3();
      box.getCenter(center);
      setYOffset(-center.y * scaleFactor);
    }
  }, []);

  return (
    <group
      ref={groupRef}
      scale={scale}
      position={[0, yOffset, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <primitive object={scene} />
    </group>
  );
};


useGLTF.preload("/models/phone.glb");

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding text-white">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
          {/* Contact Form */}
          <div className="xl:col-span-5">
            <div className="bg-[#111] border border-gray-700 rounded-xl p-10 shadow-lg">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-7"
              >
                <div>
                  <label className="block mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                    className="w-full rounded-md p-3 bg-black border border-gray-600"
                  />
                </div>

                <div>
                  <label className="block mb-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                    className="w-full rounded-md p-3 bg-black border border-gray-600"
                  />
                </div>

                <div>
                  <label className="block mb-1">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full rounded-md p-3 bg-black border border-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* 3D Model */}
          <div className="xl:col-span-7 min-h-[450px]">
            <div className="bg-[#cd7c2e] w-full h-full rounded-3xl overflow-hidden">
      <Canvas
  camera={{ position: [10, 6, 12], fov: 45 }}
  style={{ background: "#cd7c2e" }}
>


                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={2}
                  maxPolarAngle={Math.PI / 2}
                />
                <ComputerModel />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
