import my_avatar from "../../assets/images/my-avatar.jpg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function Contact(){
    return(
        <>
            <aside className="sidebar" >

                <div className="sidebar-info">

                    <figure className="avatar-box">
                        <img src={my_avatar} alt="Martun Rafayelyan" width="80" />
                    </figure>

                    <div className="info-content">
                        <h1 className="name" title="Richard hanrick">Martun Rafayelyan</h1>

                        <p className="title">Web developer</p>
                    </div>

                    <button className="info_more-btn">
                        <span>Show Contacts</span>

                        <ion-icon name="chevron-down"></ion-icon>
                    </button>

                </div>

                <div className="sidebar-info_more">

                    <div className="separator"></div>

                    <ul className="contacts-list">

                        <li className="contact-item">

                            <div className="icon-box">
                                <MailOutlineIcon />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Email</p>

                                <a href="mailto:richard@example.com" className="contact-link">rafayelyan777@mail.ru</a>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <SmartphoneIcon />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Phone</p>

                                <a href="tel:+12133522795" className="contact-link">+(374)-77-17-47-92</a>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <CalendarMonthOutlinedIcon />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>

                                <time >March 26, 1997</time>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <LocationOnOutlinedIcon />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Location</p>

                                <address>Armenia, Erevan</address>
                            </div>

                        </li>

                    </ul>

                    <div className="separator"></div>

                    <ul className="social-list">

                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="#" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </div>

            </aside>
        </>
    )
}
export default Contact