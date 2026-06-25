import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function DetailPage() {
    const { id } = useParams();
    const [suspension, setSuspension] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/suspensions/${id}`)
            .then(response => {

                setSuspension(response.data.data);
            })
            .catch(error => {
                console.error("Errore nel caricamento del prodotto:", error);
            });
    }, [id]);


    if (!suspension) {
        return (
            <div className="container mt-5 text-center">
                <h2>Caricamento prodotto in corso...</h2>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row mt-4">
                <div className="col-md-6 mb-4">
                    <img
                        src={`http://127.0.0.1:8000/storage/${suspension.image}`}
                        alt={suspension.name}
                        className="img-fluid rounded shadow"
                        style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
                    />
                </div>

                <div className="col-md-6">
                    <h6 className="text-muted text-uppercase tracking-wide">{suspension.brand}</h6>
                    <h1 className="fw-bold mb-3">{suspension.name}</h1>
                    <h2 className="text-warning fw-bold mb-4">€{suspension.price}</h2>

                    <p className="lead">{suspension.description}</p>

                    <hr className="my-4" />

                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item bg-transparent px-0">
                            <strong>Categoria:</strong> {suspension.category.name}
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                            <strong>Misura ruota:</strong> {suspension.wheel}
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                            <strong>Materiale:</strong> {suspension.material}
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                            <strong>Colore:</strong> {suspension.color}
                        </li>
                    </ul>

                    <div className="d-grid gap-2">
                        <a href={"mailto:simoxb83@gmail.com"}
                            className="btn btn-warning btn-lg fw-bold text-dark">
                            Contatta il venditore
                        </a>
                        <Link to="/shop" className="btn btn-outline-dark btn-lg">
                            Torna allo Shop
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;