import './App.css'
import Card from './components/Card'
import { useState } from 'react'
function App() {
    const [form, setForm] = useState({
        nombre: '',
        corredor: '',
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(null)
    const f1Corredores = [
        "max verstappen",
        "sergio pérez",
        "lewis hamilton",
        "george russell",
        "charles leclerc",
        "carlos sainz",
        "lando norris",
        "oscar piastri",
        "fernando alonso",
        "lance stroll",
        "pierre Gasly",
        "esteban ocon",
        "valtteri bottas",
        "guanyu zhou",
        "yuki tsunoda",
        "liam lawson",
        "kevin magnussen",
        "nico hülkenberg",
        "alexander albon",
        "franco colapinto"
    ];
    const handleChange = (e) => {
        //aca agarro el valor el name para saber que input se modifica y asi modificar el state 
        // la key del objeto se llama igual que el name del Input
        //evito codigo repetitivo
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, corredor } = form;
        const trimmedNombre = nombre.trim();
        const trimmedCorredor = corredor.trim().toLowerCase();
        if (trimmedNombre.length < 2) {
            setShow(false);
            setError('El nombre debe tener al menos 2 caracteres');
            return;
        }
        if (trimmedCorredor.length < 6) {
            setShow(false);
            setError('El campo "corredor" debe tener al menos 2 caracteres');
            return;
        }
        if (trimmedCorredor === '') {
            setShow(false);
            setError('El campo "corredor" es obligatorio');
            return;
        }
        if (!f1Corredores.includes(trimmedCorredor)) {
            setShow(false);
            setError('El corredor no existe, prueba con los que están corriendo actualmente');
            return;
        }
        setShow(true);
        setError(null);
        console.log(form);
    };

    const resetForm = () => {
        setForm({
            nombre: '',
            corredor: '',
        })
        setShow(false)
        setError(null)
    }

    return (
        <>
            <div className="App">
                <h1>F1 ENCUESTA</h1>
                {show == false &&
                    <form
                        onSubmit={handleSubmit}
                        className="container mt-4 p-3 border rounded shadow-sm">
                        <div className="mb-3">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                value={form.nombre}
                                onChange={handleChange}
                                placeholder="Nombre"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                value={form.corredor}
                                onChange={handleChange}
                                type="text"
                                name="corredor"
                                className="form-control"
                                placeholder="Corredor favorito actual"
                                required
                            />
                            <label className="text-sm text-gray-600 mt-2 block">
                                *Poner con nombre y apellido al corredor* <br />
                                ej: Max Verstappen
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                }

                {error != null && <div className="alert alert-danger mt-3">{error}</div>}
                {show && <Card nombre={form.nombre} corredor={form.corredor} onClick={resetForm} />}
            </div>
        </>
    )
}

export default App
