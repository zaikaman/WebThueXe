import Image from 'next/image';

const PrivateCarRental = () => {
  const carRentalRoutes = [
    {
      id: 1,
      title: "Sài Gòn ⇔ Vũng Tàu",
      price: "850.000đ",
      image: "/vungtau-600x327.jpg",
      description: "Xe riêng 4-7 chỗ",
      link: "/bang-gia-thue-xe-4-cho"
    },
    {
      id: 2,
      title: "Sài Gòn ⇔ Hồ Tràm",
      price: "850.000đ",
      image: "/hotram-768x512.jpg",
      description: "Xe riêng 4-7 chỗ",
      link: "/bang-gia-thue-xe-4-cho"
    },
    {
      id: 3,
      title: "Sài Gòn ⇔ Long Hải",
      price: "850.000đ",
      image: "/longhai-768x432.jpg",
      description: "Xe riêng 4-7 chỗ",
      link: "/bang-gia-thue-xe-4-cho"
    },
    {
      id: 4,
      title: "Sài Gòn ⇔ Bình Châu",
      price: "900.000đ",
      image: "/binhchau-600x432.jpg",
      description: "Xe riêng 4-7 chỗ",
      link: "/bang-gia-thue-xe-4-cho"
    },
    {
      id: 5,
      title: "Sài Gòn ⇔ Đồng Xoài",
      price: "900.000đ",
      image: "/dongxoai-600x400.jpg",
      description: "Xe riêng 4-7 chỗ",
      link: "/bang-gia-thue-xe-4-cho"
    },
    {
      id: 6,
      title: "Sài Gòn ⇔ Đắk Lắk",
      price: "3.000.000đ",
      image: "/daklak-600x450.jpg",
      description: "Xe riêng 4-7 chỗ",
      link: "/bang-gia-thue-xe-4-cho"
    },
    {
      id: 7,
      title: "Sài Gòn ⇔ Mộc Bài",
      price: "850.000đ",
      image: "/mocbai-600x400.jpg",
      description: "Xe riêng 4-7 chỗ",
      link: "/bang-gia-thue-xe-4-cho"
    },
    {
      id: 8,
      title: "Sài Gòn ⇔ An Giang",
      price: "2.900.000đ",
      image: "/angiang-600x382.jpg",
      description: "Xe riêng 4-7 chỗ",
      link: "/bang-gia-thue-xe-4-cho"
    },
    {
      id: 9,
      title: "Sài Gòn ⇔ Đà Lạt",
      price: "2.500.000đ",
      image: "/dalat-600x450.jpg",
      description: "Xe riêng 7 chỗ",
      link: "/bang-gia-thue-xe-7-cho"
    },
    {
      id: 10,
      title: "Sài Gòn ⇔ Mũi Né",
      price: "1.400.000đ",
      image: "/phanthiet-600x338.jpg",
      description: "Xe riêng 7 chỗ",
      link: "/bang-gia-thue-xe-7-cho"
    },
    {
      id: 11,
      title: "Sài Gòn ⇔ Tây Ninh",
      price: "900.000đ",
      image: "/tayninh-600x449.jpg",
      description: "Xe riêng 7 chỗ",
      link: "/bang-gia-thue-xe-7-cho"
    },
    {
      id: 12,
      title: "Sài Gòn ⇔ Cần Thơ",
      price: "1.400.000đ",
      image: "/cantho-600x400.jpg",
      description: "Xe riêng 7 chỗ",
      link: "/bang-gia-thue-xe-7-cho"
    }
  ];

  const busRentalRoutes = [
    {
      id: 1,
      title: "Xe Hợp Đồng 16 Chỗ",
      description: "Phù hợp cho nhóm 10-16 người",
      image: "/anh1.jpg",
      link: "/bang-gia-xe-16-cho"
    },
    {
      id: 2,
      title: "Xe Hợp Đồng 29 Chỗ", 
      description: "Phù hợp cho nhóm 20-29 người",
      image: "/anh3.jpg",
      link: "/bang-gia-xe-29-cho"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            DỊCH VỤ THUÊ XE RIÊNG
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Private Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {carRentalRoutes.map((route) => (
            <div key={route.id} className="group">
              <a href={route.link} className="block">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={route.image}
                      alt={route.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 bg-gray-50">
                    <div className="text-center">
                      <div className="bg-black bg-opacity-60 text-white rounded-lg p-3 mx-1">
                        <h3 className="font-semibold text-sm mb-2">
                          {route.title}
                        </h3>
                        <div className="bg-red-600 text-white px-3 py-2 rounded-lg inline-block">
                          <span className="font-bold text-lg">{route.price}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs mt-2">
                        {route.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Bus Rental Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {busRentalRoutes.map((bus) => (
            <div key={bus.id} className="group">
              <a href={bus.link} className="block">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  <div className="text-center p-4 border-b">
                    <h3 className="text-xl font-bold text-gray-900">
                      {bus.title}
                    </h3>
                  </div>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={bus.image}
                      alt={bus.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-gray-600">{bus.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Tại sao chọn dịch vụ của chúng tôi?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Xe Đời Mới</h4>
              <p className="text-gray-600">Đảm bảo xe đời mới, sạch sẽ và an toàn</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Hỗ Trợ 24/7</h4>
              <p className="text-gray-600">Tư vấn và hỗ trợ khách hàng 24/7</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Giá Tốt Nhất</h4>
              <p className="text-gray-600">Cam kết giá tốt nhất thị trường</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Sẵn sàng khởi hành?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Liên hệ ngay để được báo giá và tư vấn chi tiết
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                                  href="tel:0962229122"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                                  Gọi Ngay: 0962229122
              </a>
              <a
                                  href="https://zalo.me/0962229122"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
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

export default PrivateCarRental; 