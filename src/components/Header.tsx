import "../styles/Header.css";
import { ThemeContext } from "../context/Context";
import { useContext } from "react";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=dark_mode" />
export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <header>
        <h1>Where in the world?</h1>
      </header>
      <div className="darkmode">
        <span className="material-symbols-outlined">
          dark_mode
        </span>
        <button onClick={toggleTheme}>Dark Mode</button>
      </div>
    </div>
  );
};
