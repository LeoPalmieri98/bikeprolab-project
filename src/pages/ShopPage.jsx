import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShopPage() {

    const [suspensions, setSuspensions] = useState(null);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/suspensions')
            .then(response => {

                setSuspensions(response.data.data);
            })
            .catch(error => {
                console.error("Errore durante la chiamata API:", error);
            });
    }, []);

    if (!suspensions) {
        return (
            <div className="container mt-5 text-center">
                <h2>Caricamento prodotto in corso...</h2>
            </div>
        );
    }
    return (
        <div className="container mt-5 mb-5">
            <h1 className="mb-4 fw-bold text-uppercase border-bottom border-warning pb-2">
                Shop Sospensioni
            </h1>

            <div className="row g-4">
                {suspensions.map((item) => (
                    <div key={item.id} className="col-12 col-md-4 col-lg-3">
                        <div className="card h-100 shadow-lg border-0 bg-dark text-white rounded-3">

                            <div className="bg-white rounded-top d-flex align-items-center justify-content-center p-3" style={{ height: '250px' }}>
                                <img
                                    src={`http://127.0.0.1:8000/storage/${item.image}`}
                                    className="img-fluid"
                                    alt={item.name}
                                    style={{ maxHeight: '100%', objectFit: 'contain' }}
                                />
                            </div>

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-uppercase fw-bold text-warning mb-1">{item.name}</h5>
                                <p className="card-text text-light opacity-75 small mb-3">{item.brand}</p>
                                <p className="card-text text-white  small mb-3">{item.category.name}</p>

                                <div className="mt-auto">
                                    <hr className="border-secondary" />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fs-5 fw-bold">€{item.price}</span>
                                        <Link className="btn btn-sm btn-warning text-dark fw-bold px-3" to={`/shop/${item.id}`}>
                                            Dettagli
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default ShopPage;