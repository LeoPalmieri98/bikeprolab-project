import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div className="container">

                    <Link className="navbar-brand" to="/">
                        <img src="/logo.png" alt="BikeProLab" style={{ height: "15px" }} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" to="/revision">Revisione Sospensioni</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;