import { Link } from "react-router-dom";

function Footer() {
    return <>
        <footer className="bg-dark text-white pt-5 pb-4 mt-5 border-top border-secondary">
            <div className="container text-md-left">
                <div className="row text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-white">BikeProLab</h5>
                        <p className="text-white-50">
                            Il punto di riferimento per la manutenzione, revisione e personalizzazione delle sospensioni della tua mountain bike. Affidabilità e prestazioni al top.
                        </p>
                    </div>



                    <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-white">Contatti</h5>
                        <p className="me-2 text-white-50">
                            📍  Via dell'Officina, 42 - Nova Siri
                        </p>
                        <p className="me-2 text-white-50">
                            📧 simoxb83@gmail.com
                        </p>
                        <p className="me-2 text-white-50">
                            ☎️ +39 Coming Soon...
                        </p>
                        <Link className="text-white-50 text-decoration-none" to="/chisiamo">👥  Chi Siamo</Link>
                    </div>



                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase text-white">Seguici Su</h5>

                        <div className="d-flex gap-3 mt-4 ms-1">
                            <a href="https://www.instagram.com/bike_prolab?igsh=MTh4NXY2cjEydndqOQ==" target="_blank" className="text-white-50 text-decoration-none">
                                <span className="fa-brands fa-instagram fa-2x transition-all hover-white"></span>
                            </a>
                            <a href="https://youtube.com/@bikeprolab?si=jxcuM65LB1WXesLX" target="_blank" className="text-white-50 text-decoration-none">
                                <span className="fa-brands fa-youtube fa-2x"></span>
                            </a>
                        </div>
                    </div>

                </div>

                <hr className="mb-4 border-secondary" />

                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-white-50 ms-2">
                            © 2026 Copyright:
                            <strong className="text-white">BikeProLab</strong> - Tutti i diritti riservati.
                        </p>
                    </div>
                </div>

            </div>
        </footer >
    </>
}

export default Footer;