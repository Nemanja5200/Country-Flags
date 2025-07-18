import "../styles/Header.css";
import { ThemeContext } from '../App';
import { useContext } from "react";

export const Header = () => {
    const { toggleTheme } = useContext(ThemeContext); 
    
    return (
        <div className="header">
            <header>
                <h1> Where in the world?</h1>
            </header>
            <div className="darkmode">
                <button onClick={toggleTheme}>Dark Mode</button> 
            </div>
        </div>
    );
};