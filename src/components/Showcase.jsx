import React from "react";

const stats = [
  { title: "Experience", value: "6 Months" },
  { title: "Projects Completed", value: "3" },

];

const Showcase = () => {
  return (
    <section className="py-20 bg-black text-white -mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map(({ title, value }, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <span className="text-3xl md:text-3xl font-bold text-[#afbad8] mb-2">
                {value}
              </span>
              <span className="text-lg md:text-xl font-medium text-white/80">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
