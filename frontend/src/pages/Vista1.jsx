import { useNavigate } from 'react-router-dom'

export const Vista1 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/vista2");
    }

    return (
        <>
            <div id="vista1">
                <h1 id="tituloVista1">
                    Trivia Conociendo el Perú
                </h1>
                
                <img id="imagenVista1" src="https://cdn.glitch.global/489bad8f-7a52-4259-9753-3035742c418f/peruano.png?v=1711036913711" width="180" height="150" />
                
                <form id="formNombre">

                    <label htmlFor="nombre">Ingresa tu nombre: </label><br />
                    <input type="text" id="nombre" name="nombre" required />     
                    
                    <br />
                    <div className="botonesTrivia">
                        <button onClick={handleClick} id="atractivos">Sitios turísticos</button>
     
                        <button id="platos">Platos tipicos</button>
          
                    </div>
                    
                </form>
            </div>
        </>
    )
}

