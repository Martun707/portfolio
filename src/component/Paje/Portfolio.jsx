import project_1 from "../../assets/images/project-1.png";
import project_2 from "../../assets/images/project-2.png";
import project_3 from "../../assets/images/project-3.png";
import project_4 from "../../assets/images/project-4.png";
import project_5 from "../../assets/images/project-5.png";
import project_6 from "../../assets/images/project-6.png";
import project_7 from "../../assets/images/project-7.png";
import project_8 from "../../assets/images/project-8.png";
import project_9 from "../../assets/images/project-9.png";
import project_10 from "../../assets/images/project-10.png";
function Portfolio(){
    return(
        <>


                <header>
                    <h2 className="h2 article-title">Portfolio</h2>
                </header>

                <section className="projects">

                    <ul className="project-list">

                        <li className="project-item  active" data-filter-item data-category="web development">
                            <a href={'https://martun707.github.io/TourArmenia-website-react/'}>

                                <figure className="project-img">


                                    <img src={project_1}  loading="lazy" />
                                </figure>

                                <h3 className="project-title">TourArmenia</h3>

                                <p className="project-category">website-react</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="web development">
                            <a href={'https://github.com/Martun707/-responsive-shop-website-react'}>

                                <figure className="project-img">

                                    <img src={project_2} loading="lazy" />
                                </figure>

                                <h3 className="project-title">Shop</h3>

                                <p className="project-category">responsive-website</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="web design">
                            <a href={'https://github.com/Martun707/step-registration'}>

                                <figure className="project-img">

                                    <img src={project_3}  loading="lazy" />
                                </figure>

                                <h3 className="project-title">Registration Form</h3>

                                <p className="project-category">step-registration</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="applications">
                            <a href={'https://github.com/Martun707/todo-list'}>

                                <figure className="project-img">


                                    <img src={project_4} loading="lazy" />
                                </figure>

                                <h3 className="project-title">ToDoList</h3>

                                <p className="project-category">ToDoList-js</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="web design">
                            <a href={'https://github.com/Martun707/Webpage-1'}>

                                <figure className="project-img">


                                    <img src={project_5} loading="lazy" />
                                </figure>

                                <h3 className="project-title">Webpage</h3>

                                <p className="project-category">responsive-webpage</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="web design">
                            <a href={'https://github.com/Martun707/text-game'}>

                                <figure className="project-img">


                                    <img src={project_6} loading="lazy" />
                                </figure>

                                <h3 className="project-title">Fruct word scramble</h3>

                                <p className="project-category">game</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="web development">
                            <a href={'https://github.com/Martun707/JS-Quiz-2'}>

                                <figure className="project-img">


                                    <img src={project_7}  loading="lazy" />
                                </figure>

                                <h3 className="project-title">JS-Quiz-2</h3>

                                <p className="project-category">game</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="applications">
                            <a href={'https://github.com/Martun707/Timer'}>

                                <figure className="project-img">

                                    <img src={project_8} loading="lazy" />
                                </figure>

                                <h3 className="project-title">Timer</h3>

                                <p className="project-category">Timer-JS</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="web development">
                            <a href={'https://github.com/Martun707/JS-Quiz'}>

                                <figure className="project-img">


                                    <img src={project_9} loading="lazy" />
                                </figure>

                                <h3 className="project-title">JS-Quiz-1</h3>

                                <p className="project-category">game</p>

                            </a>
                        </li>

                        <li className="project-item  active" data-filter-item data-category="web development">
                            <a href={'https://github.com/Martun707/tic-tac-toe-react'}>

                                <figure className="project-img">


                                    <img src={project_10} loading="lazy" />
                                </figure>

                                <h3 className="project-title">Tik Tak Toe</h3>

                                <p className="project-category">game-react</p>

                            </a>
                        </li>
                    </ul>

                </section>


        </>
    )
}
export default Portfolio