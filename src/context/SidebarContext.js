import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
  const [searchShow, setSearchShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);

  const toggleSearchShow = () => {
    setSearchShow(!searchShow);
    // setCartShow(false);
  };

  const toggleCartShow = () => {
    setCartShow(!cartShow);
    // setSearchShow(false);
  };

  const sidebarContextData = {
    searchShow,
    cartShow,
    toggleCartShow,
    toggleSearchShow,
    setSearchShow,
    setCartShow,
  };

  return (
    <SidebarContext.Provider value={sidebarContextData}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
