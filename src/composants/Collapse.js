import { useState } from "react";
import collapseArrow from "./images/collapse_arrow.png";

function Collapse({ title, text, className }) {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction qui bascule l'état isOpen entre true et false (ouverte ou fermée)
    function toggleCollapse() {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`collapse ${className}`}>
            <div className="collapse_top">
                <h3 className="collapse__title">{title}</h3>
                <img className={`collapse_arrow ${isOpen ? 'rotate' : ''}`} src={collapseArrow} alt='flèche' onClick={toggleCollapse} />
            </div>
            {isOpen && <div className="collapse__content">{text}</div>}
        </div>
    )
}

export default Collapse;
