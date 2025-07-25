'use client';
import { useState } from 'react';
import Link from 'next/link';

const pricingData = [
  // Hồ Chí Minh
  { region: 'Hồ Chí Minh', destination: 'Sân Bay', time: '1 ngày', km: 10, price: 600000 },
  { region: 'Hồ Chí Minh', destination: 'City tour (4h/50km)', time: '1 ngày', km: 50, price: 1000000 },
  { region: 'Hồ Chí Minh', destination: 'City tour (8h/100km)', time: '1 ngày', km: 100, price: 1400000 },
  { region: 'Hồ Chí Minh', destination: 'Củ Chi', time: '1 ngày', km: 100, price: 1400000 },
  { region: 'Hồ Chí Minh', destination: 'Cần Giờ', time: '1 ngày', km: 130, price: 1600000 },
  
  // Bình Dương
  { region: 'Bình Dương', destination: 'Dĩ An', time: '1 ngày', km: 50, price: 1400000 },
  { region: 'Bình Dương', destination: 'Khu du lịch Thủy Châu', time: '1 ngày', km: 50, price: 1400000 },
  { region: 'Bình Dương', destination: 'TP Thủ Dầu 1', time: '1 ngày', km: 80, price: 1400000 },
  { region: 'Bình Dương', destination: 'KCN VSIP 1 và 2', time: '1 ngày', km: 80, price: 1400000 },
  { region: 'Bình Dương', destination: 'TP mới Bình Dương', time: '1 ngày', km: 80, price: 1400000 },
  { region: 'Bình Dương', destination: 'Khu du lịch Đại Nam', time: '1 ngày', km: 80, price: 1400000 },
  { region: 'Bình Dương', destination: 'Tân Uyên', time: '1 ngày', km: 100, price: 1400000 },
  { region: 'Bình Dương', destination: 'Bến Cát', time: '1 ngày', km: 100, price: 1400000 },
  { region: 'Bình Dương', destination: 'Phú Giáo', time: '1 ngày', km: 130, price: 1500000 },
  { region: 'Bình Dương', destination: 'Bàu Bàng', time: '1 ngày', km: 130, price: 1500000 },
  { region: 'Bình Dương', destination: 'Dầu Tiếng', time: '1 ngày', km: 170, price: 1700000 },
  
  // Bình Phước
  { region: 'Bình Phước', destination: 'Chơn Thành', time: '1 ngày', km: 200, price: 1800000 },
  { region: 'Bình Phước', destination: 'Đồng Xoài', time: '1 ngày', km: 200, price: 1800000 },
  { region: 'Bình Phước', destination: 'Bình Long', time: '1 ngày', km: 250, price: 2000000 },
  { region: 'Bình Phước', destination: 'Lộc Ninh', time: '1 ngày', km: 260, price: 2000000 },
  { region: 'Bình Phước', destination: 'Bù Đăng', time: '1 ngày', km: 300, price: 2100000 },
  { region: 'Bình Phước', destination: 'Phước Long', time: '1 ngày', km: 300, price: 2100000 },
  { region: 'Bình Phước', destination: 'Bù Đốp', time: '1 ngày', km: 350, price: 2200000 },
  { region: 'Bình Phước', destination: 'Bù Gia Mập', time: '1 ngày', km: 400, price: 2500000 },
  
  // Tây Ninh
  { region: 'Tây Ninh', destination: 'Trảng Bàng', time: '1 ngày', km: 100, price: 1400000 },
  { region: 'Tây Ninh', destination: 'Cửa khẩu Mộc Bài', time: '1 ngày', km: 150, price: 1400000 },
  { region: 'Tây Ninh', destination: 'Gò Dầu', time: '1 ngày', km: 150, price: 1400000 },
  { region: 'Tây Ninh', destination: 'TP Tây Ninh', time: '1 ngày', km: 200, price: 1800000 },
  { region: 'Tây Ninh', destination: 'Tòa thánh Tây Ninh', time: '1 ngày', km: 200, price: 1800000 },
  { region: 'Tây Ninh', destination: 'Long Hoa Hòa Thành', time: '1 ngày', km: 200, price: 1800000 },
  { region: 'Tây Ninh', destination: 'Chùa Gò Kén', time: '1 ngày', km: 200, price: 1800000 },
  { region: 'Tây Ninh', destination: 'Dương Minh Châu', time: '1 ngày', km: 200, price: 1800000 },
  { region: 'Tây Ninh', destination: 'Châu thành Tây Ninh', time: '1 ngày', km: 220, price: 1900000 },
  { region: 'Tây Ninh', destination: 'Núi Bà Đen', time: '1 ngày', km: 220, price: 1900000 },
  { region: 'Tây Ninh', destination: 'Tân Châu Đồng Pan', time: '1 ngày', km: 250, price: 2000000 },
  { region: 'Tây Ninh', destination: 'Tân Biên Xa Mát', time: '1 ngày', km: 260, price: 2100000 },
  
  // Đồng Nai
  { region: 'Đồng Nai', destination: 'Biên Hòa', time: '1 ngày', km: 60, price: 1400000 },
  { region: 'Đồng Nai', destination: 'Nhơn Trạch', time: '1 ngày', km: 70, price: 1400000 },
  { region: 'Đồng Nai', destination: 'Làng Tre Việt', time: '1 ngày', km: 75, price: 1400000 },
  { region: 'Đồng Nai', destination: 'Long Thành', time: '1 ngày', km: 80, price: 1400000 },
  { region: 'Đồng Nai', destination: 'Trảng Bom', time: '1 ngày', km: 80, price: 1400000 },
  { region: 'Đồng Nai', destination: 'Trị An', time: '1 ngày', km: 120, price: 1700000 },
  { region: 'Đồng Nai', destination: 'Long Khánh', time: '1 ngày', km: 150, price: 1800000 },
  { region: 'Đồng Nai', destination: 'Thống Nhất', time: '1 ngày', km: 170, price: 1800000 },
  { region: 'Đồng Nai', destination: 'Cẩm Mỹ', time: '1 ngày', km: 180, price: 1800000 },
  { region: 'Đồng Nai', destination: 'Núi Chứa Chan Gia Lào', time: '1 ngày', km: 220, price: 2000000 },
  { region: 'Đồng Nai', destination: 'Xuân Lộc', time: '1 ngày', km: 220, price: 2000000 },
  { region: 'Đồng Nai', destination: 'Định Quán', time: '1 ngày', km: 220, price: 2000000 },
  { region: 'Đồng Nai', destination: 'Tân Phú Phương Lâm', time: '1 ngày', km: 260, price: 1900000 },
  { region: 'Đồng Nai', destination: 'Nam Cát Tiên', time: '1 ngày', km: 300, price: 2200000 },
  
  // Khánh Hòa
  { region: 'Khánh Hòa', destination: 'Cam Ranh', time: '1 ngày', km: 760, price: 4100000 },
  { region: 'Khánh Hòa', destination: 'Đảo Bình Ba', time: '1 ngày', km: 760, price: 4100000 },
  { region: 'Khánh Hòa', destination: 'Đảo Bình Hưng', time: '1 ngày', km: 760, price: 4100000 },
  { region: 'Khánh Hòa', destination: 'Nha Trang', time: '1 ngày', km: 860, price: 4400000 },
  { region: 'Khánh Hòa', destination: 'Ninh Hòa', time: '1 ngày', km: 900, price: 4900000 },
  
  // Ninh Thuận
  { region: 'Ninh Thuận', destination: 'Phan Rang', time: '1 ngày', km: 660, price: 3500000 },
  { region: 'Ninh Thuận', destination: 'Tháp Chàm', time: '1 ngày', km: 660, price: 3500000 },
  { region: 'Ninh Thuận', destination: 'Núi Chúa', time: '1 ngày', km: 720, price: 4000000 },
  
  // Bình Thuận
  { region: 'Bình Thuận', destination: 'Hàm Tân', time: '1 ngày', km: 260, price: 2000000 },
  { region: 'Bình Thuận', destination: 'Lagi Cocobeach Camp', time: '1 ngày', km: 280, price: 2000000 },
  { region: 'Bình Thuận', destination: 'Lagi Biển Cam Bình', time: '1 ngày', km: 280, price: 2000000 },
  { region: 'Bình Thuận', destination: 'Lagi', time: '1 ngày', km: 300, price: 2000000 },
  { region: 'Bình Thuận', destination: 'Dinh Thầy Thím', time: '1 ngày', km: 340, price: 2400000 },
  { region: 'Bình Thuận', destination: 'Tà Cú', time: '1 ngày', km: 360, price: 2400000 },
  { region: 'Bình Thuận', destination: 'Đức Mẹ Tà Pao Tánh Linh', time: '1 ngày', km: 360, price: 2500000 },
  { region: 'Bình Thuận', destination: 'TP Phan Thiết', time: '1 ngày', km: 400, price: 2500000 },
  { region: 'Bình Thuận', destination: 'Hòn Rơm', time: '1 ngày', km: 420, price: 2600000 },
  { region: 'Bình Thuận', destination: 'Mũi Né', time: '1 ngày', km: 420, price: 2600000 },
  { region: 'Bình Thuận', destination: 'Cổ Trạch', time: '1 ngày', km: 550, price: 3400000 },
  
  // Gia Lai
  { region: 'Gia Lai', destination: 'TP Pleiku', time: '1 ngày', km: 1000, price: 6000000 },
  { region: 'Gia Lai', destination: 'Kon Tum', time: '1 ngày', km: 1200, price: 7500000 },
  
  // Đắk Lắk
  { region: 'Đắk Lắk', destination: 'Buôn Ma Thuột', time: '1 ngày', km: 700, price: 3500000 },
  { region: 'Đắk Lắk', destination: 'Buôn Đôn', time: '1 ngày', km: 720, price: 3700000 },
  
  // Lâm Đồng
  { region: 'Lâm Đồng', destination: 'Madagui', time: '1 ngày', km: 300, price: 2200000 },
  { region: 'Lâm Đồng', destination: 'Bảo Lộc', time: '1 ngày', km: 400, price: 2500000 },
  { region: 'Lâm Đồng', destination: 'Di linh', time: '1 ngày', km: 460, price: 2700000 },
  { region: 'Lâm Đồng', destination: 'Đức Trọng', time: '1 ngày', km: 500, price: 2900000 },
  { region: 'Lâm Đồng', destination: 'Đơn Dương', time: '1 ngày', km: 560, price: 3300000 },
  { region: 'Lâm Đồng', destination: 'Đà Lạt', time: '1 ngày', km: 600, price: 3600000 },
  
  // Đắk Nông
  { region: 'Đắk Nông', destination: 'Gia Nghĩa', time: '1 ngày', km: 450, price: 2800000 },
  { region: 'Đắk Nông', destination: 'Đắk Nông', time: '1 ngày', km: 500, price: 2900000 },
  
  // Đà Nẵng
  { region: 'Đà Nẵng', destination: 'TP Đà Nẵng', time: '1 ngày', km: 2000, price: 13000000 },
  
  // Vũng Tàu
  { region: 'Vũng Tàu', destination: 'Phú Mỹ Đại Tòng Lâm', time: '1 ngày', km: 100, price: 1400000 },
  { region: 'Vũng Tàu', destination: 'Tân Thành', time: '1 ngày', km: 130, price: 1400000 },
  { region: 'Vũng Tàu', destination: 'Bà Rịa', time: '1 ngày', km: 170, price: 1500000 },
  { region: 'Vũng Tàu', destination: 'Ngãi Giao Châu Đức', time: '1 ngày', km: 220, price: 1800000 },
  { region: 'Vũng Tàu', destination: 'Long Hải Dinh Cô', time: '1 ngày', km: 220, price: 1800000 },
  { region: 'Vũng Tàu', destination: 'Thành Phố Vũng Tàu', time: '1 ngày', km: 220, price: 1800000 },
  { region: 'Vũng Tàu', destination: 'Hồ Tràm', time: '1 ngày', km: 250, price: 1800000 },
  { region: 'Vũng Tàu', destination: 'Hồ Cốc', time: '1 ngày', km: 250, price: 1800000 },
  { region: 'Vũng Tàu', destination: 'Bình Châu', time: '1 ngày', km: 280, price: 2000000 },
  { region: 'Vũng Tàu', destination: 'Xuyên Mộc', time: '1 ngày', km: 280, price: 2000000 },
  
  // Long An
  { region: 'Long An', destination: 'Bến Lức', time: '1 ngày', km: 60, price: 1400000 },
  { region: 'Long An', destination: 'Đức Hòa Hậu Nghĩa', time: '1 ngày', km: 80, price: 1400000 },
  { region: 'Long An', destination: 'Tân An', time: '1 ngày', km: 100, price: 1400000 },
  { region: 'Long An', destination: 'Đức Huệ', time: '1 ngày', km: 120, price: 1400000 },
  { region: 'Long An', destination: 'Tân Thạnh', time: '1 ngày', km: 200, price: 1700000 },
  { region: 'Long An', destination: 'Mộc Hóa Kiến Tường', time: '1 ngày', km: 240, price: 1900000 },
  { region: 'Long An', destination: 'Vĩnh Hưng', time: '1 ngày', km: 280, price: 2000000 },
  
  // Đồng Tháp
  { region: 'Đồng Tháp', destination: 'Mỹ An Tháp Mười', time: '1 ngày', km: 240, price: 1800000 },
  { region: 'Đồng Tháp', destination: 'Nha Mân', time: '1 ngày', km: 280, price: 2000000 },
  { region: 'Đồng Tháp', destination: 'Sa Đéc', time: '1 ngày', km: 290, price: 2000000 },
  { region: 'Đồng Tháp', destination: 'Cao Lãnh', time: '1 ngày', km: 300, price: 2200000 },
  { region: 'Đồng Tháp', destination: 'Thanh Bình', time: '1 ngày', km: 320, price: 2200000 },
  { region: 'Đồng Tháp', destination: 'Tam Nông', time: '1 ngày', km: 350, price: 2200000 },
  { region: 'Đồng Tháp', destination: 'Hồng Ngự', time: '1 ngày', km: 440, price: 2600000 },
  
  // Tiền Giang
  { region: 'Tiền Giang', destination: 'Gò Công', time: '1 ngày', km: 150, price: 1500000 },
  { region: 'Tiền Giang', destination: 'Thành phố Mỹ Tho', time: '1 ngày', km: 150, price: 1500000 },
  { region: 'Tiền Giang', destination: 'Châu Thành', time: '1 ngày', km: 160, price: 1500000 },
  { region: 'Tiền Giang', destination: 'Chợ Gạo', time: '1 ngày', km: 160, price: 1500000 },
  { region: 'Tiền Giang', destination: 'Cai Lậy', time: '1 ngày', km: 190, price: 1600000 },
  { region: 'Tiền Giang', destination: 'Cái Bè', time: '1 ngày', km: 220, price: 2000000 },
  { region: 'Tiền Giang', destination: 'Mỹ Thuận', time: '1 ngày', km: 250, price: 2000000 },
  
  // Bến Tre
  { region: 'Bến Tre', destination: 'Cồn Phụng', time: '1 ngày', km: 160, price: 1600000 },
  { region: 'Bến Tre', destination: 'Châu Thành', time: '1 ngày', km: 160, price: 1600000 },
  { region: 'Bến Tre', destination: 'TP Bến Tre', time: '1 ngày', km: 180, price: 1700000 },
  { region: 'Bến Tre', destination: 'Giồng Tôm', time: '1 ngày', km: 220, price: 1800000 },
  { region: 'Bến Tre', destination: 'Mỏ Cày Nam', time: '1 ngày', km: 220, price: 1800000 },
  { region: 'Bến Tre', destination: 'Mỏ Cày Bắc', time: '1 ngày', km: 220, price: 1800000 },
  { region: 'Bến Tre', destination: 'Bình Đại', time: '1 ngày', km: 250, price: 1800000 },
  { region: 'Bến Tre', destination: 'Ba Tri', time: '1 ngày', km: 250, price: 1800000 },
  { region: 'Bến Tre', destination: 'Thạch Phú', time: '1 ngày', km: 280, price: 2000000 },
  
  // An Giang
  { region: 'An Giang', destination: 'Long Xuyên', time: '1 ngày', km: 380, price: 2500000 },
  { region: 'An Giang', destination: 'Chợ Mới', time: '1 ngày', km: 400, price: 2500000 },
  { region: 'An Giang', destination: 'Tân Châu', time: '1 ngày', km: 420, price: 2500000 },
  { region: 'An Giang', destination: 'Tri Tôn', time: '1 ngày', km: 500, price: 2700000 },
  { region: 'An Giang', destination: 'Núi Cấm Tịnh Biên', time: '1 ngày', km: 500, price: 2700000 },
  { region: 'An Giang', destination: 'Chùa Bà Châu Đốc', time: '1 ngày', km: 550, price: 2700000 },
  
  // Cần Thơ
  { region: 'Cần Thơ', destination: 'TP Cần Thơ', time: '1 ngày', km: 350, price: 2600000 },
  { region: 'Cần Thơ', destination: 'Ô Môn', time: '1 ngày', km: 380, price: 2700000 },
  { region: 'Cần Thơ', destination: 'Thốt Nốt', time: '1 ngày', km: 440, price: 2800000 },
  { region: 'Cần Thơ', destination: 'Vĩnh Thạch Cần Thơ', time: '1 ngày', km: 450, price: 2800000 },
  { region: 'Cần Thơ', destination: 'Cờ Đỏ', time: '1 ngày', km: 450, price: 2800000 },
  
  // Vĩnh Long
  { region: 'Vĩnh Long', destination: 'TP Vĩnh Long', time: '1 ngày', km: 260, price: 2000000 },
  { region: 'Vĩnh Long', destination: 'Tam Bình', time: '1 ngày', km: 300, price: 2000000 },
  { region: 'Vĩnh Long', destination: 'Mang Thít', time: '1 ngày', km: 300, price: 2000000 },
  { region: 'Vĩnh Long', destination: 'Vũng Liêm', time: '1 ngày', km: 300, price: 2000000 },
  { region: 'Vĩnh Long', destination: 'Trà Ôn', time: '1 ngày', km: 360, price: 2200000 },
  
  // Trà Vinh
  { region: 'Trà Vinh', destination: 'Càng Long', time: '1 ngày', km: 260, price: 2000000 },
  { region: 'Trà Vinh', destination: 'TP Trà Vinh', time: '1 ngày', km: 280, price: 2000000 },
  { region: 'Trà Vinh', destination: 'Tiểu Cần', time: '1 ngày', km: 320, price: 2100000 },
  { region: 'Trà Vinh', destination: 'Trà Cú', time: '1 ngày', km: 350, price: 2100000 },
  { region: 'Trà Vinh', destination: 'Duyên Hải', time: '1 ngày', km: 380, price: 2400000 },
  
  // Kiên Giang
  { region: 'Kiên Giang', destination: 'Tân Hiệp Kiên Giang', time: '1 ngày', km: 450, price: 2900000 },
  { region: 'Kiên Giang', destination: 'TP Rạch Giá', time: '1 ngày', km: 500, price: 3000000 },
  { region: 'Kiên Giang', destination: 'Rạch Sỏi', time: '1 ngày', km: 520, price: 3000000 },
  { region: 'Kiên Giang', destination: 'Hòn Đất', time: '1 ngày', km: 550, price: 3000000 },
  { region: 'Kiên Giang', destination: 'U Minh Thượng', time: '1 ngày', km: 600, price: 3700000 },
  { region: 'Kiên Giang', destination: 'Hà Tiên', time: '1 ngày', km: 650, price: 3700000 },
  
  // Hậu Giang
  { region: 'Hậu Giang', destination: 'Ngã Ba Cái Tắc', time: '1 ngày', km: 380, price: 2400000 },
  { region: 'Hậu Giang', destination: 'Thị Xã Ngã Bảy', time: '1 ngày', km: 400, price: 2400000 },
  { region: 'Hậu Giang', destination: 'Phụng Hiệp Cây Dương', time: '1 ngày', km: 400, price: 2400000 },
  { region: 'Hậu Giang', destination: 'Thị Xã Vị Thanh', time: '1 ngày', km: 420, price: 2600000 },
  { region: 'Hậu Giang', destination: 'Long Mỹ', time: '1 ngày', km: 450, price: 2500000 },
  
  // Sóc Trăng
  { region: 'Sóc Trăng', destination: 'TP Sóc Trăng', time: '1 ngày', km: 440, price: 2600000 },
  { region: 'Sóc Trăng', destination: 'Long Phú', time: '1 ngày', km: 460, price: 2600000 },
  { region: 'Sóc Trăng', destination: 'Thạnh Trị', time: '1 ngày', km: 530, price: 2800000 },
  { region: 'Sóc Trăng', destination: 'Thị xã Vĩnh Châu', time: '1 ngày', km: 540, price: 2800000 },
  
  // Bạc Liêu
  { region: 'Bạc Liêu', destination: 'TP Bạc Liêu', time: '1 ngày', km: 550, price: 2900000 },
  { region: 'Bạc Liêu', destination: 'Nhà Thờ Cha Diệp Tắc Sậy', time: '1 ngày', km: 600, price: 3300000 },
  { region: 'Bạc Liêu', destination: 'Cha Diệp mẹ Nam Hải', time: '1 ngày', km: 680, price: 3300000 },
  
  // Cà Mau
  { region: 'Cà Mau', destination: 'TP Cà Mau', time: '1 ngày', km: 620, price: 3300000 },
  { region: 'Cà Mau', destination: 'Hòn Đá Bạc Sông Đốc', time: '1 ngày', km: 700, price: 4300000 },
  { region: 'Cà Mau', destination: 'Nam Căn', time: '1 ngày', km: 750, price: 4300000 },
  { region: 'Cà Mau', destination: 'Mũi Cà Mau', time: '1 ngày', km: 800, price: 4500000 },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};

export default function PricingTable7Cho() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  // Get unique regions for filter dropdown
  const uniqueRegions = [...new Set(pricingData.map(item => item.region))].sort();

  // Filter data based on search and region selection
  const filteredData = pricingData.filter(item => {
    const matchesSearch = 
      item.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === '' || item.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Bảng Giá Thuê Xe 7 Chỗ</h1>
              <p className="mt-2 text-gray-600">Bảng giá thuê xe 7 chỗ đi khắp Việt Nam - Cập nhật mới nhất</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Link
                href="/bang-gia-xe-4-cho"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Xem giá xe 4 chỗ
              </Link>
              <a
                href="tel:0962229122"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                📞 Gọi ngay
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Tìm kiếm địa điểm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Tất cả tỉnh thành</option>
                {uniqueRegions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tỉnh/Thành
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Địa điểm
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thời gian
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Km
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giá xe 7 chỗ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.destination}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.km} km
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">
                      {formatPrice(item.price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex gap-2">
                        <a
                          href="tel:0962229122"
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs hover:bg-green-200 transition-colors"
                        >
                          Gọi ngay
                        </a>
                        <a
                          href="https://zalo.me/0962229122"
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs hover:bg-blue-200 transition-colors inline-flex items-center gap-1"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"/>
                            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"/>
                          </svg>
                          Chat
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Bảng giá trên đã bao gồm:</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Xe ô tô 7 chỗ đời mới nhất được quý khách tận tay chọn lựa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Bảo hiểm bắt buộc (tai nạn 100 triệu/người, thân vỏ xe, miễn trừ trách nhiệm)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Phí xăng dầu đi đường, bảo dưỡng xe</span>
            </li>
          </ul>
          
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Lưu ý:</strong> Một số hạng mục như thuế VAT 10%, phí qua trạm, tiền lưu trú qua đêm của người lái xe,... 
              sẽ được chúng tôi tư vấn cụ thể, minh bạch khi quý khách liên hệ.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-sm p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Cần tư vấn thêm?</h2>
          <p className="mb-6 text-blue-100">
            Liên hệ ngay với chúng tôi để được báo giá chính xác và tư vấn miễn phí!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0962229122"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              📞 Gọi ngay: 0962 229 122
            </a>
            <a
              href="https://zalo.me/0962229122"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-flex items-center justify-center gap-2"
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
  );
} 