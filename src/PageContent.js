import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    height: "100vh",
    width: "100vm",
    backgroundColor: isDarkMode ? "black" : "white"
  };
  return <div style={styles}>{props.children}</div>;
}

export default PageContent;
