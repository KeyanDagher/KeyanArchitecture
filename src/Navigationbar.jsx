import react from 'react';

function Navigationbar()
{
    return(
        <>           
            <a className="navbar-brand">
            <img src="https://pm1.narvii.com/6524/e86dbcf605d9d22f1a76f974a30238806720e2a0_hq.jpg" height="100" width="200"/>
            </a>

            <ul className="navbar-nav justify-content-end">
                <li className="nav-item dropdown">
                <a className="nav-link text-white dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    MARIN
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="https://www.stalok.com/product-category/marine/sta-lok-self-fit-terminals/">Sta-Lock Self-Fit Terminals</a>
                    <a className="dropdown-item" href="https://www.stalok.com/product-category/marine/insulators/">Insulators</a>
                    <a className="dropdown-item" href="https://www.stalok.com/product-category/marine/swage-terminals/">Swage Terminals</a>
                </div>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link text-white dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    ARCHITECTURAL SOLUTIONS
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="https://www.stalok.com/product-category/architectural-solutions/cable-solutions/">Cable Solutions</a>
                    <a className="dropdown-item" href="https://www.stalok.com/product-category/architectural-solutions/tensile-structures/">Tensile Structures</a>
                    <a className="dropdown-item" href="https://www.stalok.com/product-category/architectural-solutions/tension-rod-solutions/">Tension Rod Systems</a>
                </div>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link text-white dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    WIRE ROPE
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="https://www.stalok.com/product/1x19-wire-rope/">1x19 Wire Rope</a>
                    <a className="dropdown-item" href="https://www.stalok.com/product/7x19-wire-rope/">7x19 Wire Rope</a>
                    <a className="dropdown-item" href="https://www.stalok.com/product/7x7-wire-rope/">7x7 Wire Rope</a>
                </div>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="https://www.stalok.com/brochures/">BROCHURES</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link text-white dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    ABOUT
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="https://www.stalok.com/case_study/">Case Studies</a>
                    <a className="dropdown-item" href="https://www.stalok.com/news/">News</a>
                </div>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" href="https://www.stalok.com/contact-us/">CONTACT</a>
                </li>
            </ul>
        </>
    );
}

export default Navigationbar;