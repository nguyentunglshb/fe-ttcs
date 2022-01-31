import React from "react";
import "./DropDown.scss";

function DropDown() {
  return (
    <div className="dropdown">
      <nav>
        <ul className="cf">
          <li>
            <a className="header-main-link" href="#">
              SNEAKER <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <ul className="sneaker-dropdown">
              <li>
                <a href="#">Sub-menu Item 1</a>
              </li>
              <li>
                <a href="#">Sub-menu Item 2</a>
              </li>
              <li>
                <a href="#">Sub-menu Item 3</a>
              </li>
              <li>
                <a href="#">Sub-menu Item 3</a>
              </li>
              <li>
                <a href="#">Sub-menu Item 3</a>
              </li>
              <li>
                <a href="#">Sub-menu Item 3</a>
              </li>
            </ul>
          </li>

          <li>
            <a className="header-main-link" href="#">
              ACCESSORIES
            </a>
          </li>
          <li>
            <a className="header-main-link" href="#">
              TẤT CẢ SẢN PHẨM
            </a>
          </li>
          <li>
            <a className="header-main-link" href="#">
              SALE
            </a>
          </li>
          <li>
            <a className="header-main-link" href="#">
              GIỚI THIỆU
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DropDown;
