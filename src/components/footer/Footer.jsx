import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return ( 
        <>
            <footer className="footer">
                <div className="first">
                    <h5>Copyright <i className="fa-regular fa-copyright"></i> 2023 Lasisi Abdulsamad</h5>
                </div>

                <div className="icons">
                    <ul>
                        <li><Link to={'https://github.com/Samkayzeee'}><i className="fa-brands fa-github"></i></Link></li>
                        <li><Link to={'https://www.linkedin.com/in/lasisi-abdulsamad'}><i className="fa-brands fa-linkedin-in"></i></Link></li>
                        <li><Link to={'https://twitter.com/Samkayzee1'}><i className="fa-brands fa-twitter"></i></Link></li>
                        <li><Link to={'https://www.instagram.com/samkayzee/'}><i className="fa-brands fa-instagram"></i></Link></li>
                    </ul>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;