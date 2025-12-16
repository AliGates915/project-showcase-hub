import React from "react";
import { useNavigate } from "react-router-dom";
import { companyLogos } from "@/data/companyLogos";

const companies = [
  { name: "Infinity Byte", slug: "infinity-byte" },
  { name: "Core Tech", slug: "core-tech" },
  { name: "Sky Links", slug: "sky-links" },
];

const NewCards = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-blue-600">Companies</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our portfolio of specialized technology companies delivering exceptional digital solutions
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((c) => (
          <div
            key={c.name}
            onClick={() => navigate(`/companies/${c.slug}`)}
            className="group cursor-pointer relative overflow-hidden bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Logo Container */}
            <div className="relative flex justify-center h-28 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative p-4 bg-orange-300 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={companyLogos[c.name]}
                  alt={c.name}
                  className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {c.name}
              </h3>
              <p className="text-gray-500 mb-6">
                Click to view company portfolio
              </p>
              
              {/* CTA Button */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                <span className="text-sm font-semibold text-blue-700">Explore Now</span>
                <svg 
                  className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-200 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-200 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

  
    </div>
  );
};

export default NewCards;