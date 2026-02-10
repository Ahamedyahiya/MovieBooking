import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
      const [search,setSearch]= useState("");
  return (
    <DataContext.Provider value={{ search,setSearch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
