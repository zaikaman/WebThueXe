import Header from '@/components/Header';
import BannerSlider from '@/components/BannerSlider';
import LimousineServices from '@/components/LimousineServices';
import PrivateCarRental from '@/components/PrivateCarRental';
import BookingProcess from '@/components/BookingProcess';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* SEO */}
      <SEO />

      {/* Header */}
      <Header />

      {/* Banner Slider */}
      <BannerSlider />

      {/* Limousine Services */}
      <LimousineServices />

      {/* Private Car Rental */}
      <PrivateCarRental />

      {/* Booking Process */}
      <BookingProcess />

      {/* Footer */}
      <Footer />
    </div>
  );
}
