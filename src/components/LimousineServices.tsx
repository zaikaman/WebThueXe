import Image from 'next/image';

const LimousineServices = () => {
  const limousineRoutes = [
    {
      id: 1,
      title: "Limo Sài Gòn ⇔ Vũng Tàu",
      price: "200.000đ",
      image: "/1.jpeg",
      description: "Tuyến đường phổ biến nhất",
      link: "/bang-gia-limo-vung-tau"
    },
    {
      id: 2,
      title: "Limo Sài Gòn ⇔ Long Hải",
      price: "220.000đ",
      image: "/Noi-that-xe-Limousine-Hai-Van.jpg",
      description: "Đến bãi biển Long Hải xinh đẹp",
      link: "/bang-gia-limo-vung-tau"
    },
    {
      id: 3,
      title: "Limo Sài Gòn ⇔ Hồ Tràm",
      price: "350.000đ",
      image: "/limousine-9-cho-sapa-ha-noi.webp",
      description: "Resort cao cấp Hồ Tràm",
      link: "/bang-gia-limo-vung-tau"
    },
    {
      id: 4,
      title: "Limo Sài Gòn ⇔ Phan Thiết",
      price: "450.000đ",
      image: "/1.jpeg",
      description: "Khám phá Mũi Né - Phan Thiết",
      link: "/bang-gia-limo-phan-thiet"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            LIMOUSINE CHUYÊN TUYẾN
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {limousineRoutes.map((route) => (
            <div key={route.id} className="group">
              <a href={route.link} className="block">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={route.image}
                      alt={route.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-gray-50">
                    {/* Price Badge */}
                    <div className="text-center mb-4">
                      <div className="bg-black bg-opacity-60 text-white rounded-lg p-3 mx-2">
                        <h3 className="font-semibold text-lg mb-2">
                          {route.title}
                        </h3>
                        <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block">
                          <span className="font-bold text-xl">{route.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-center text-sm">
                      {route.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Đặt vé ngay hôm nay!
            </h3>
            <p className="text-gray-600 mb-6">
              Liên hệ với chúng tôi để được tư vấn và đặt vé với giá tốt nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                                  href="tel:0962229122"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                                  Gọi Ngay: 0962229122
              </a>
              <a
                                  href="https://zalo.me/0962229122"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"/>
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"/>
                </svg>
                Chat Zalo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimousineServices; 