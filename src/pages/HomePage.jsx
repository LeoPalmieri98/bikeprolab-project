import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <div className="position-relative w-100 vh-55 bg-dark d-flex align-items-center text-white mb-5">
                <img
                    src="/workshop-bg.jpeg"
                    alt="Il nostro banco da lavoro"
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-50"
                />


                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-1 fw-bold text-uppercase text-warning mb-3">
                                Workshop For Riding
                            </h1>
                            <p className="lead mb-4 text-light-50 lh-base">
                                La tua passione merita il massimo delle prestazioni.
                                Mettiamo precisione tecnica e cura artigianale in ogni singola regolazione.
                                Non lasciare che un ammortizzatore stanco freni la tua voglia di trail.
                                Affida a noi la tua revisione, non importa se tu faccia Downhill, enduro o XC,
                                rigenera le tue sospensioni e torna a dominare ogni sentiero.
                            </p>
                            <Link to="/revision" className="btn btn-primary btn-lg fw-bold px-4 py-2 shadow-lg">
                                Prenota una Revisione
                            </Link>
                        </div>
                    </div>
                </div>

            </div>



            <div className="container mb-5">

                <div className="row align-items-center mb-5 mt-5">
                    <div className="col-md-6 order-2 order-md-1">
                        <img
                            src="/homereact1.jpeg"
                            alt="Fox Rebuild"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0 px-md-5">
                        <h2 className="fw-bold">Manutenzione Completa FOX</h2>
                        <p>
                            Smontaggio totale, pulizia meticolosa e sostituzione dei paraoli originali.
                            Trattiamo i tuoi steli con trattamento Kashima con la massima cura,
                            per garantirti una scorrevolezza impeccabile su ogni tipo di terrain.
                        </p>
                    </div>
                </div>


                <div className="row align-items-center mb-5">
                    <div className="col-md-6 mb-4 mb-md-0 pe-md-5">
                        <h2 className="fw-bold">Centro Specializzato Öhlins</h2>
                        <p>
                            La precisione svedese richiede mani esperte. Analizziamo e calibriamo
                            ogni singola lamella (shim) del tuo ammortizzatore Öhlins.
                            Sostituzione tenute, spurgo con pompa a vuoto e taratura personalizzata
                            in base al tuo peso e stile di guida.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="/homereact2.jpeg"
                            alt="Ohlins Rebuild"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>


                <div className="row align-items-center mb-5">
                    <div className="col-md-6 order-2 order-md-1">
                        <img
                            src="/homereact3.jpeg"
                            alt="RockShox Service"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0 px-md-5">
                        <h2 className="fw-bold">Service Ammortizzatori RockShox</h2>
                        <p>
                            Dalla serie Deluxe ai modelli Super Deluxe, offriamo un servizio rapido ed
                            efficiente per i tuoi ammortizzatori ad aria e a molla. Risolviamo problemi di
                            fondocorsa, perdita di pressione e malfunzionamento dei registri idraulici.
                        </p>
                        <Link to="/shop" className="btn btn-outline-dark mt-2">
                            Scopri lo Shop
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomePage;