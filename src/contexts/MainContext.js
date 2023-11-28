import { createContext, useState } from "react";

export let MainContext = createContext();
export function MainContextFun(props) {
  const [loader, setLoader] = useState(true);
  // making variable to carry userToken from local storage
  const userToken = localStorage.getItem("userToken");

  return (
    <MainContext.Provider value={{ setLoader, loader, userToken }}>
      {props.children}
    </MainContext.Provider>
  );
}
