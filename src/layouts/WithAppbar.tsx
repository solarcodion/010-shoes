import Footer from "components/Footer";
import Nav from "components/Nav";
import CSS from "csstype";
import { styled } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import { CustomThemeContext } from "contexts/CustomThemeContext";
import { whiteTheme, darkTheme } from "components/theme";

const Root = styled.div`
  min-height: 100vh;
`;

type Props = {
  children?: React.ReactNode;
  theme?: "dark" | "light";
  style?: CSS.Properties;
  linkColor?: string;
};
const WithAppbar: React.FC<Props> = ({
  children,
  theme = "dark",
  style,
  linkColor,
}) => {
  const { setTheme, currentTheme, setCurrentTheme } =
    useContext(CustomThemeContext);

  useEffect(() => {
    if (currentTheme === theme) return;
    if (theme === "light") setTheme(whiteTheme);
    else {
      setTheme(darkTheme);
    }
    setCurrentTheme(theme);
  }, [setTheme, theme, currentTheme, setCurrentTheme]);

  return (
    <Root style={style}>
      <Nav linkColor={linkColor} />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Root>
  );
};

export default WithAppbar;
