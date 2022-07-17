import './navBar.scss';
import CartWidget from './Cart';
import { LinkA } from './linkNav';
const imgLogo = {
    alt: 'Imagen Logo',
    imgUrl: '/imagesNav/simboloArbol.svg'
}

const NavBar = () => {
    return (
        <nav className="sticky-top navbar navbar-expand-md d-flex flex-nowrap navbar-light">
            <div className="container-fluid flex-wrap">
                <a className="a_img navbar-brand" href="..../public/index.html">
                    <img className='logo' src={imgLogo.imgUrl} alt={imgLogo.alt} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <LinkA className="nav-link active" aria-current="page" href="#">Home</LinkA>
                        </li>
                        <li className="nav-item">
                            <LinkA className="nav-link active" href="#">Featured</LinkA>
                        </li>
                        <li className="nav-item dropdown">
                            <LinkA className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </LinkA>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Camping</a></li>
                                <li><a className="dropdown-item" href="#">Hunt</a></li>
                                <li><a className="dropdown-item" href="#">Fishing</a></li>
                                <li><a className="dropdown-item" href="#">Lanterns</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <LinkA className="nav-link active">About Us</LinkA>
                        </li>
                    </ul>
                    <form className="d-flex mb-2 mb-lg-0">
                        <input className="rounded-0 form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                        <button className="rounded-0 btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;