import { useState } from 'react';
import axios from 'axios';
import { use } from 'react';

function RevisionForm() {

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        brand: '',
        model: '',
        serial_key: '',
        tel_number: '',
        service_interval: '50' // Imposto 50 come valore di default di intervallo.
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [isSendForm, setIsSendForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSendForm(true);


        axios.post('http://127.0.0.1:8000/api/revisions', formData)
            .then(response => {
                setFormData({
                    user_name: '', user_email: '', brand: '', model: '',
                    serial_key: '', tel_number: '', service_interval: '50'
                });
            })
            .catch(error => {
                console.error("Errore di validazione o server:", error);
            });
    };

    return (
        <div className="container mt-5 mb-5">
            <h1 className="mb-4">Richiedi una Revisione</h1>
            <p className="lead mb-4">Compila il modulo sottostante con i dati del tuo componente per prenotare una manutenzione.</p>


            <div className="card shadow-sm p-4">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">


                        <div className="col-md-6">
                            <label className="form-label">Nome e Cognome </label>
                            <input type="text" className="form-control" name="user_name" value={formData.user_name} onChange={handleInputChange} required />
                        </div>


                        <div className="col-md-6">
                            <label className="form-label">Email </label>
                            <input type="email" className="form-control" name="user_email" value={formData.user_email} onChange={handleInputChange} required />
                        </div>


                        <div className="col-md-6">
                            <label className="form-label">Brand (es. Fox, RockShox) </label>
                            <input type="text" className="form-control" name="brand" value={formData.brand} onChange={handleInputChange} required />
                        </div>


                        <div className="col-md-6">
                            <label className="form-label">Modello </label>
                            <input type="text" className="form-control" name="model" value={formData.model} onChange={handleInputChange} />
                        </div>


                        <div className="col-md-6">
                            <label className="form-label">Numero Seriale </label>
                            <input type="text" className="form-control" name="serial_key" value={formData.serial_key} onChange={handleInputChange} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Numero di Telefono </label>
                            <input type="text" className="form-control" name="tel_number" value={formData.tel_number} onChange={handleInputChange} required />
                        </div>


                        <div className="col-md-12">
                            <label className="form-label">Intervallo di Manutenzione Richiesto </label>
                            <select className="form-select" name="service_interval" value={formData.service_interval} onChange={handleInputChange}>
                                <option value="50">50 Ore (Manutenzione Base)</option>
                                <option value="100">100 Ore (Manutenzione Base + Pneumatica)</option>
                                <option value="200">200 Ore (Manutenzione Completa)</option>
                                <option value="altro">Altro</option>
                            </select>
                        </div>


                    </div>

                    <hr className="my-4" />

                    <button type="submit" className="btn btn-warning btn-lg fw-bold w-100">
                        Invia Richiesta di Revisione
                    </button>

                    {isSendForm && (
                        <div className="mt-3 alert alert-success fw-bold text-center mb-4 shadow-sm">
                            ✓ Richiesta inviata! Ti ricontatteremo il prima possibile.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default RevisionForm;