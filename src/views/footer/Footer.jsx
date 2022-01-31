import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo2.jpeg";

function Footer() {
  return (
    <div className="footer grid">
      <div className="footer-wrapper row">
        <div className="footer-link-container col l-3 m-6 c-12">
          <img src={logo} alt="logo" />
          <p className="footer-title">GIỚI THIỆU</p>
          <p className="footer-link">Sneaker</p>
          <p className="footer-link">Accesories</p>
          <p className="footer-link">Tất cả sản phẩm</p>
          <p className="footer-link">Sale</p>
          <p className="footer-link">Giới thiệu</p>
        </div>
        <div className="footer-info col l-3 m-6 c-12">
          <div className="footer-info">
            <p className="footer-title">THE WASTED SHOP - 100% AUTHENTIC</p>
            <p>Địa chỉ: Hà Đông, Hà Nội</p>
            <p>Hotline: 037 670 3212</p>
            <p>Email: thewastedshop@gmail.com</p>
          </div>

          <div className="footer-policy">
            <p className="footer-title">CHÍNH SÁCH</p>
            <p className="footer-link">Chính sách đổi trả</p>
          </div>
        </div>
        <div className="footer-support col l-3 m-6 c-12">
          <p className="footer-title">HỖ TRỢ</p>
          <p>
            Tư vấn 24/7, hiện tại cửa hàng đang sửa chữa mặt bằng nên chỉ bán
            online
          </p>
        </div>
        <div className="footer-connect col l-3 m-6 c-12">
          <p className="footer-title">KẾT NỐI CHÚNG TÔI</p>
          <div className="footer-logo-container">
            <div className="footer-logo">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <div className="footer-logo">
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
            <div className="footer-logo">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
