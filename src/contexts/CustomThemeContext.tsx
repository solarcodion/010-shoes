import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "components/theme";

type ThemeContextType = {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: any;
  setTheme: (t: any) => void;
};
export const CustomThemeContext = createContext<ThemeContextType>({
  currentTheme: "dark",
  setCurrentTheme: () => {},
  theme: darkTheme,
  setTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <CustomThemeContext.Provider
      value={{ theme, setTheme, currentTheme, setCurrentTheme }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
