import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div className="container mt-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-uppercase border-bottom border-warning d-inline-block pb-2">
                    Chi Siamo
                </h1>
                <p className="lead mt-4 text-muted mx-auto" style={{ maxWidth: '800px' }}>
                    Bike Pro Lab nasce dalla passione viscerale per il mondo off-road.
                    Siamo partiti da un piccolo e attrezzatissimo laboratorio nel cuore di un paesino del Sud Italia
                    con un unico obiettivo: offrire a ogni rider un'assistenza tecnica di altissimo livello,
                    senza compromessi.
                </p>
            </div>

            <div className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm text-center p-4">
                        <div className="card-body">
                            <h3 className="fw-bold text-warning mb-3">Competenza</h3>
                            <p className="card-text text-muted">
                                Ogni forcella e ammortizzatore viene trattato con la massima precisione,
                                seguendo rigorosamente gli standard di case madri come Fox, RockShox e Öhlins.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow text-center p-4 bg-dark text-white rounded-4">
                        <div className="card-body">
                            <h3 className="fw-bold text-warning mb-3">Passione</h3>
                            <p className="card-text text-light opacity-75">
                                Non siamo solo tecnici, siamo rider. Sappiamo esattamente cosa cerchi
                                dalla tua bici quando il sentiero diventa tecnico e sconnesso.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm text-center p-4">
                        <div className="card-body">
                            <h3 className="fw-bold text-warning mb-3">Trasparenza</h3>
                            <p className="card-text text-muted">
                                Nessun intervento nascosto. Condividiamo con te ogni passaggio della revisione,
                                garantendoti sempre il miglior setup per il tuo stile di guida.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light p-5 rounded-4 shadow-sm">
                <h2 className="text-center fw-bold mb-5 text-uppercase">Il Nostro Team</h2>
                <div className="row text-center g-4">


                    <div className="col">
                        <h4 className="fw-bold text-uppercase">Il Fondatore</h4>
                        <h5>Simone Bellino</h5>
                    </div>

                    <div className="col">
                        <h4 className="fw-bold text-uppercase">Web Developer</h4>
                        <h5>Leo Palmieri</h5>
                    </div>

                </div>
            </div>

            <div className="text-center mt-5 mb-4">
                <h3 className="mb-4 fw-bold">Pronto a dare nuova vita alle tue sospensioni?</h3>
                <Link to="/revisions" className="btn btn-warning btn-lg fw-bold text-dark ">
                    Prenota Subito
                </Link>
            </div>

        </div>
    );
}
export default AboutPage;