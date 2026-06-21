import { useState } from "react"; // 1. Importiamo useState
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div className="container">

                    <Link className="navbar-brand" to="/" onClick={() => setIsOpen(false)}>
                        <img src="/logo.png" alt="BikeProLab" style={{ height: "15px" }} />
                    </Link>


                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">

                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">

                                <Link className="nav-link text-uppercase fw-bold" to="/" onClick={() => setIsOpen(false)}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase fw-bold" to="/shop" onClick={() => setIsOpen(false)}>
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase fw-bold" to="/revision" onClick={() => setIsOpen(false)}>
                                    Revisione Sospensioni
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;