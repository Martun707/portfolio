import icon_design from "../../../assets/images/icon-design.svg";
import icon_dev from "../../../assets/images/icon-dev.svg";
import icon_app from "../../../assets/images/icon-app.png";
import icon_photo from "../../../assets/images/icon-photo.png";
import bootstrap_logo from "../../../assets/images/bootstrap-logo.png";
import jquery from "../../../assets/images/jquery.svg";


function Service(){
    return(
        <>
            <section className="service">

                <h3 className="h3 service-title">My Skills</h3>

                <ul className="service-list">

                    <li className="service-item">

                        <div className="service-icon-box">
                            <img src={icon_design}
                                 alt="design icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">React</h4>

                            <p className="service-item-text">

                            </p>
                        </div>

                    </li>

                    <li className="service-item">

                        <div className="service-icon-box">
                            <img src={icon_dev} alt="Web development icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">JavaScript</h4>

                            <p className="service-item-text">

                            </p>
                        </div>

                    </li>

                    <li className="service-item">

                        <div className="service-icon-box">
                            <img src={icon_app} alt="mobile app icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">HTML5</h4>

                            <p className="service-item-text">

                            </p>
                        </div>

                    </li>

                    <li className="service-item">

                        <div className="service-icon-box">
                            <img src={icon_photo} alt="camera icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">CSS3 </h4>

                            <p className="service-item-text">

                            </p>
                        </div>

                    </li>

                    <li className="service-item">

                        <div className="service-icon-box">
                            <img src={bootstrap_logo} alt="camera icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Bootstrap</h4>

                            <p className="service-item-text">

                            </p>
                        </div>

                    </li>


                    <li className="service-item">

                        <div className="service-icon-box">
                            <img src={jquery} alt="camera icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">jQuery</h4>

                            <p className="service-item-text">

                            </p>
                        </div>

                    </li>


                </ul>

            </section>
        </>
    )
}
export default Service