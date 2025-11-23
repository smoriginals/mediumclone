// AppContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Create Context
const AppContext = createContext();

// 2. Provider Component
export const AppProvider = ({ children }) => {
    const [count, setCount] = useState(65); // global state
    const images = [
        "https://via.placeholder.com/200x150?text=Image+1",
        "https://via.placeholder.com/200x150?text=Image+2",
        "https://via.placeholder.com/200x150?text=Image+3",
        "https://via.placeholder.com/200x150?text=Image+4"
    ];
  const fetchProducts = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();  // API से JSON डेटा
  return data; // अब data बाहर इस्तेमाल कर सकते हो


};
      console.log(fetchProducts())
    return (
        <AppContext.Provider value={{ count, setCount, images ,fetchProducts}}>
            {children}
        </AppContext.Provider>
    );
};

// 3. Custom Hook
export const useApp = () => useContext(AppContext);


