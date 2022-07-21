import './navBar.scss';
import Cart from '../cartWidget/Cart';
import { Link } from 'react-router-dom';
import Spinner from '../spinnerLoading/Spinner';
import { LinkA } from './linkNav';
const imgLogo = {
    alt: 'Imagen Logo',
    imgUrl: '/imagesNav/simboloArbol.svg'
}

const NavBar = () => {
    return (
        <nav className="sticky-top navbar navbar-expand-md d-flex flex-nowrap navbar-light">
            <div className="container-fluid flex-wrap">
                <Link to={'/'} className="a_img navbar-brand">
                    <img className='logo' src={imgLogo.imgUrl} alt={imgLogo.alt} />
                </Link>
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
                                <Link to={'/category/temperature'} className="dropdown-item">Temperature</Link>
                                <Link to={'/category/footwear'} className="dropdown-item"><li>Footwear</li></Link>
                                <Link to={'/category/sleepingBags'} className="dropdown-item"><li>Sleeping Bags</li></Link>
                                <Link to={'/category/backpacks'} className="dropdown-item"><li>Backpacks</li></Link>
                                <Link to={'/category/tents'} className="dropdown-item"><li>Tents</li></Link>
                                <Link to={'/category/ilumination'} className="dropdown-item"><li>Ilumination</li></Link>
                                <Link to={'/category/fishing'} className="dropdown-item"><li>Fishing</li></Link>
                                <Link to={'/category/hunt'} className="dropdown-item"><li>Hunt</li></Link>
                                <Link to={'/category/clothing'} className="dropdown-item"><li>Clothing</li></Link>
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
            <Cart />
        </nav>
    );
}

export default NavBar;