import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

//arrow function declaration for useContext ..
export const useTheme = () => useContext(ThemeContext);

//arr function declaration for theme provider

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    // default const theme = what ever is in the local storage at the time
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    //reference const theme
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
