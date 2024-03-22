import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} Die Erdnussbutterhörnchen</p>
      <div className="footerLinkBox">
        <Link to={"https://github.com/fredwardp"}>Fred vom Jupiter</Link>
        <Link to={"https://github.com/SonoraDE"}>Tobel Hobel</Link>
        <Link to={"https://github.com/Hkndevit"}>Hakan Kanka</Link>
        <Link to={"https://github.com/MichaelGee76"}>Mike the Mechanic</Link>
      </div>
    </footer>
  );
};

export default Footer;
