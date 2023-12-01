
import icon_quote from "../../../assets/images/icon-quote.svg";
import avatar_1 from "../../../assets/images/avatar-1.png";
function TestimonialsModal(){
    return(
        <>
            <div className="modal-container" >

                <div className="overlay" ></div>

                <section className="testimonials-modal">

                    <button className="modal-close-btn" >
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={avatar_1} alt="Daniel lewis"  />
                        </figure>

                        <img src={icon_quote} alt="quote icon" />
                    </div>

                    <div className="modal-content">

                        <h4 className="h3 modal-title">Daniel lewis</h4>

                        <time >14 June, 2021</time>

                        <div >
                            <p>
                                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                lot of experience
                                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                consectetur adipiscing
                                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                            </p>
                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}
export default TestimonialsModal