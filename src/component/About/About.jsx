import AboutMe from "./AboutMe/AboutMe";
import Service from "./AboutMe/Service";
import TestimonialsModal from "./AboutMe/TestimonialsModal";

function About(){
    return(
        <article className="about  active" data-page="about">
            <AboutMe />
            <Service />
            <TestimonialsModal />

        </article>

    )
}
export default About