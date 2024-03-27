import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer>
            <p className="footerParagraph">&copy; {year} Sports Database</p>
            <div className="footerLinkBox montserrat">
                <div className="footerInnerBox montserrat">
                    <Link to={"https://github.com/fredwardp"}>fredwardp</Link>
                    <Link to={"https://github.com/SonoraDE"}>SonoraDE</Link>
                </div>
                <div className="footerInnerBox montserrat">
                    <Link to={"https://github.com/Hkndevit"}>Hkndevit</Link>
                    <Link to={"https://github.com/MichaelGee76"}>MichaelGee76</Link>
                </div>
                <div className="footerInnerBox2 montserrat">
                    <Link to={"/update"}>Updates</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
