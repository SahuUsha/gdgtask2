

import {  createContext,  useEffect, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
  
  useEffect(()=>{
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme' , theme);
    return()=>{
      document.documentElement.classList.remove(theme)
    }
  } , [theme]);

  const toggleTheme=()=>{
    setTheme((prev)=>(prev==='light' ? 'dark' : 'light'));
  };

  return(
    <ThemeContext.Provider value={{theme , toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}