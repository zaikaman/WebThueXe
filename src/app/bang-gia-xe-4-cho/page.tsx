import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingTable4Cho from '@/components/PricingTable4Cho';

export const metadata: Metadata = {
  title: "Bảng Giá Thuê Xe 4 Chỗ | Dịch Vụ Thuê Xe Limousine",
  description: "Bảng giá thuê xe 4 chỗ đi khắp Việt Nam cập nhật mới nhất. Giá rẻ, xe đời mới, tài xế kinh nghiệm. Liên hệ 0962229122 để được tư vấn miễn phí.",
  keywords: "thuê xe 4 chỗ, bảng giá xe 4 chỗ, thuê xe du lịch, xe 4 chỗ giá rẻ, dịch vụ thuê xe",
  openGraph: {
    title: "Bảng Giá Thuê Xe 4 Chỗ | Dịch Vụ Thuê Xe Limousine",
    description: "Bảng giá thuê xe 4 chỗ đi khắp Việt Nam cập nhật mới nhất. Giá rẻ, xe đời mới, tài xế kinh nghiệm.",
    type: "website",
  },
};

export default function BangGiaXe4ChoPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Pricing Table */}
      <PricingTable4Cho />

      {/* Footer */}
      <Footer />
    </div>
  );
} 