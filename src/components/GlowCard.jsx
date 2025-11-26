import React from "react";

const GlowCard = ({ title, date, responsibilities, logoPath }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-start gap-4">
      {logoPath && <img src={logoPath} alt={title} className="w-12 h-12 object-contain" />}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <ul className="list-disc list-inside">
        {responsibilities.map((res, idx) => (
          <li key={idx}>{res}</li>
        ))}
      </ul>
    </div>
  );
};

export default GlowCard;
