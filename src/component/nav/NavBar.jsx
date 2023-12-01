import {Link} from "react-router-dom";

function NavBar(){
    return(
        <>
            <nav className="navbar">

                <ul className="navbar-list">

                    <li className="navbar-item">
                        {/*<button className="navbar-link  active" data-nav-link>About</button>*/}
                        <Link to={"/"}><h1 className="colorlink">About</h1></Link>
                    </li>



                    <li className="navbar-item">
                        <Link to={"/portfolio"}><h1 className="colorlink">Portfolio</h1></Link>
                    </li>



                    <li className="navbar-item">

                        <Link to={"/contact"}><h1 className="colorlink">Contact</h1></Link>
                    </li>

                </ul>

            </nav>
        </>
    )
}
export default NavBar