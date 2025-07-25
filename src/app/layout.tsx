import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thuê Xe Liên Tỉnh 24H - Đặt Xe Đi Vũng Tàu | 0962229122",
  description: "Dịch vụ thuê xe liên tỉnh và limousine đi Vũng Tàu, Long Hải, Hồ Tràm, Phan Thiết với giá tốt nhất. Đặt xe nhanh chóng, tư vấn miễn phí 24/7. Hotline: 0962229122",
  keywords: "thuê xe liên tỉnh, thuê xe đi vũng tàu, limousine vũng tàu, xe limousine, thuê xe hồ tràm, xe đi long hải",
  authors: [{ name: "Thuê Xe Liên Tỉnh 24H" }],
  creator: "Thuê Xe Liên Tỉnh 24H",
  publisher: "Thuê Xe Liên Tỉnh 24H",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thuexevip24h.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Thuê Xe Liên Tỉnh 24H - Đặt Xe Đi Vũng Tàu",
    description: "Dịch vụ thuê xe liên tỉnh và limousine đi Vũng Tàu, Long Hải, Hồ Tràm, Phan Thiết với giá tốt nhất",
    url: 'https://thuexevip24h.com',
    siteName: 'Thuê Xe Liên Tỉnh 24H',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Thuê Xe Liên Tỉnh 24H - Đặt Xe Đi Vũng Tàu",
    description: "Dịch vụ thuê xe liên tỉnh và limousine đi Vũng Tàu, Long Hải, Hồ Tràm, Phan Thiết với giá tốt nhất",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
        {/* Floating Contact Buttons */}
        <div className="fixed bottom-[33%] left-0 z-50">
          <div className="relative">
            {/* Phone Animation Rings */}
            <div className="absolute w-[60px] h-[60px] top-0 left-[-8px] border-2 border-red-500 rounded-full animate-ping"></div>
            <div className="absolute w-[46px] h-[46px] top-[7px] left-[-1px] border-2 border-red-500 rounded-full animate-pulse"></div>
            
            {/* Phone Button */}
            <div className="absolute w-[30px] h-[30px] top-[15px] left-[7px] bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <a href="tel:0962229122" className="text-white">
                <svg height="18" width="18" viewBox="0 0 20 20" className="fill-current">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>

            {/* Zalo Animation Rings */}
            <div className="absolute w-[60px] h-[60px] top-[65px] left-[-8px] border-2 border-blue-600 rounded-full animate-ping"></div>
            <div className="absolute w-[46px] h-[46px] top-[72px] left-[-1px] border-2 border-blue-600 rounded-full animate-pulse"></div>
            
            {/* Zalo Button */}
            <div className="absolute w-[30px] h-[30px] top-[80px] left-[7px] bg-blue-600 rounded-full flex items-center justify-center animate-bounce">
              <a href="https://zalo.me/0962229122" className="text-white">
                <svg height="16" width="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"/>
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
