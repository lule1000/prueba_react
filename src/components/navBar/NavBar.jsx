import './navBar.css';
import CartWidget from './Cart';
import CategoriesItems from './Categories';

const NavBar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="..../public/index.html">Money Converters</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Featured</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <CategoriesItems greeting={'Older'}/>
                                        <CategoriesItems greeting={'BC'}/>
                                        <CategoriesItems greeting={'Century XV'}/>
                                        <CategoriesItems greeting={'Century XVI'}/>
                                        <CategoriesItems greeting={'Century XVII'}/>
                                        <CategoriesItems greeting={'Century XVIII'}/>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">About Us</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-danger" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <CartWidget/>
            </header>
        </>
    );
}

export default NavBar;