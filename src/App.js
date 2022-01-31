import "./App.css";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import { useContext, useState } from "react";
import { SidebarContext } from "./context/SidebarContext";

function App() {
  const {
    searchShow,
    cartShow,
    toggleCartShow,
    toggleSearchShow,
    setCartShow,
    setSearchShow,
  } = useContext(SidebarContext);

  return (
    <div className="App">
      <div
        className={
          !cartShow && !searchShow ? "app-wrapper" : "app-wrapper sidebar-move"
        }
      >
        <div
          className={!cartShow && !searchShow ? "overlay" : "overlay active"}
          onClick={() => {
            setCartShow(false);
            setSearchShow(false);
          }}
        ></div>

        {/* <button onClick={toggleSearchShow}>Click me</button> */}
        <Header />
        <Footer />

        <div
          className={!searchShow ? "side-nav-search" : "side-nav-search active"}
        >
          <button onClick={toggleSearchShow} className="close">
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <h1>search</h1>
        </div>
        <div className={!cartShow ? "side-nav-cart" : "side-nav-cart active"}>
          <button onClick={toggleCartShow} className="close">
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <h1>cart</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
