import Script from 'next/script';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

const SEO = ({ 
  title = "Thuê Xe Liên Tỉnh 24H - Đặt Xe Đi Vũng Tàu | 0962229122",
  description = "Dịch vụ thuê xe liên tỉnh và limousine đi Vũng Tàu, Long Hải, Hồ Tràm, Phan Thiết với giá tốt nhất. Đặt xe nhanh chóng, tư vấn miễn phí 24/7. Hotline: 0962229122",
  url = "https://thuexevip24h.com"
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        "name": "Thuê Xe Liên Tỉnh 24H",
        "url": url,
        "sameAs": [
          "https://facebook.com/thue-xe-lien-tinh-24h",
          "https://zalo.me/0962229122"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": `${url}/logo.jpg`,
          "width": 500,
          "height": 196
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+84563572572",
          "contactType": "customer service",
          "availableLanguage": "Vietnamese",
          "areaServed": "VN"
        },
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "32 Đ.Nguyễn Thái Bình, P.Nguyễn Thái Bình",
            "addressLocality": "Quận 1",
            "addressRegion": "Hồ Chí Minh",
            "addressCountry": "VN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "185 Thống Nhất Mới, Phường 8",
            "addressLocality": "Vũng Tàu",
            "addressRegion": "Bà Rịa - Vũng Tàu", 
            "addressCountry": "VN"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        "url": url,
        "name": "Thuê Xe Liên Tỉnh 24H",
        "description": description,
        "publisher": {
          "@id": `${url}/#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        "url": url,
        "name": title,
        "isPartOf": {
          "@id": `${url}/#website`
        },
        "about": {
          "@id": `${url}/#organization`
        },
        "description": description,
        "breadcrumb": {
          "@id": `${url}/#breadcrumb`
        },
        "inLanguage": "vi-VN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang chủ",
            "item": url
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Dịch vụ thuê xe liên tỉnh và limousine",
        "provider": {
          "@id": `${url}/#organization`
        },
        "areaServed": [
          "Hồ Chí Minh",
          "Vũng Tàu", 
          "Long Hải",
          "Hồ Tràm",
          "Phan Thiết",
          "Bình Thuận"
        ],
        "serviceType": "Transportation",
        "offers": [
          {
            "@type": "Offer",
            "name": "Limousine Sài Gòn - Vũng Tàu",
            "price": "200000",
            "priceCurrency": "VND",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer", 
            "name": "Limousine Sài Gòn - Long Hải",
            "price": "220000",
            "priceCurrency": "VND",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Limousine Sài Gòn - Hồ Tràm", 
            "price": "350000",
            "priceCurrency": "VND",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Limousine Sài Gòn - Phan Thiết",
            "price": "450000", 
            "priceCurrency": "VND",
            "availability": "https://schema.org/InStock"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Thuê Xe Liên Tỉnh 24H",
        "image": `${url}/logo.jpg`,
        "@id": `${url}/#localbusiness`,
        "url": url,
        "telephone": "+84563572572",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "32 Đ.Nguyễn Thái Bình, P.Nguyễn Thái Bình",
          "addressLocality": "Quận 1",
          "addressRegion": "Hồ Chí Minh",
          "addressCountry": "VN"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "200000-3000000 VND"
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};

export default SEO; 