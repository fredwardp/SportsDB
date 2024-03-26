import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer>
            <p className="footerParagraph">&copy; {year} Sports Database</p>
            <div className="footerLinkBox">
                <div className="footerInnerBox">
                    <Link to={"https://github.com/fredwardp"}>Fred vom Jupiter</Link>
                    <Link to={"https://github.com/SonoraDE"}>Tobel Hobel</Link>
                </div>
                <div className="footerInnerBox">
                    <Link to={"https://github.com/Hkndevit"}>Hakan Kanka</Link>
                    <Link to={"https://github.com/MichaelGee76"}>Mike the Mechanic</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
