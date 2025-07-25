'use client';

import { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "ĐẶT VÉ NHANH",
      subtitle: "Đặt Vé Limousine Chỉ Từ 200.000đ",
      description: "Tư Vấn Báo Giá Miễn Phí 24/7",
      buttonText: "SÀI GỒN - VŨNG TÀU - LONG HẢI",
      bgImage: "/anh1.jpg"
    },
    {
      id: 2,
      title: "ĐẶT VÉ HỒ CHÍ MINH",
      subtitle: "⇔ HỒ TRÀM",
      description: "Chỉ Từ 380.000đ/vé",
      buttonText: "ĐẶT NHANH - TƯ VẤN MIỄN PHÍ",
      bgImage: "/Noi-that-xe-Limousine-Hai-Van.jpg"
    },
    {
      id: 3,
      title: "ĐẶT VÉ HỒ CHÍ MINH",
      subtitle: "⇔ PHAN THIẾT",
      description: "Chỉ Từ 420.000đ/vé",
      buttonText: "ĐẶT NHANH - TƯ VẤN MIỄN PHÍ",
      bgImage: "/anh3.jpg"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundColor: '#ff0000'
            }}
          >
            {/* DEBUG: No overlay for now */}
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4 md:px-8 max-w-4xl">
              {/* Content Box */}
              <div className="bg-black bg-opacity-60 rounded-3xl border-2 border-white p-6 md:p-8 lg:p-12 mx-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">
                  {slide.description}
                </p>
                
                {/* CTA Button */}
                <a
                  href="tel:0962229122"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 md:px-12 rounded-full text-lg md:text-xl transition-colors duration-200 shadow-lg"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 opacity-90 hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 opacity-90 hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3 bg-black bg-opacity-20 rounded-full px-4 py-2 backdrop-blur-sm">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide 
                ? 'bg-white shadow-lg' 
                : 'bg-transparent border-2 border-white border-opacity-70 hover:border-opacity-100 hover:bg-white hover:bg-opacity-20'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out shadow-sm"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default BannerSlider; 