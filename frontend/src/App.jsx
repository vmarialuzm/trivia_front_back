import './App.css'

function MyForm() {

  const preguntas = {
    pregunta1: {
      enunciado: '1. ¿A qué departamento pertenece La Ciudad Sagrada de Caral?',
      image : {
        url : 'https://cdn.glitch.global/489bad8f-7a52-4259-9753-3035742c418f/caral.jpg?v=1710797657937',
        width : 200,
        height: 180,
      },
      opcionesRespuesta: {
        opcion1: 'Piura',
        opcion2: 'Lima',
        opcion3: 'Puno',
      }
    },
    pregunta2: {
      enunciado: '2. En que distrito de la Region de Puno se encuentra Cañon de Tinajani?',
      image : {
        url : 'https://cdn.glitch.global/efe017aa-ea09-4d05-9cb4-79b413ec7781/tinajani.jpg?v=1710798002794.jpg',
        width : 200,
        height: 180,
      },
      opcionesRespuesta: {
        opcion1: 'Ayaviri',
        opcion2: 'Ilave',
        opcion3: 'Azangaro',
      }
    },
    pregunta3: {
      enunciado: '3. ¿A qué departamento pertenece el Valle Sagrado de los Incas?',
      image : {
        url : 'https://cdn.glitch.global/489bad8f-7a52-4259-9753-3035742c418f/valle-sagrado-incas.jpg?v=1711037541014',
        width : 200,
        height: 180,
      },
      opcionesRespuesta: {
        opcion1: 'Tacna',
        opcion2: 'Arequipa',
        opcion3: 'Cuzco',
      }
    },
  }
  return (
    <form id="formTrivia">
          
          <p>{preguntas.pregunta1.enunciado}</p>
          <img src={preguntas.pregunta1.image.url} width={preguntas.pregunta1.image.width} height={preguntas.pregunta1.image.height}/><br/>

          <div id="inputsPreguntas1">
            
            <label htmlFor="piura">
              <input type="radio" id="piura" name="pregunta1" defaultValue="piura" required />{preguntas.pregunta1.opcionesRespuesta.opcion1}
            </label>

            <label htmlFor="lima">
              <input type="radio" id="lima" name="pregunta1" defaultValue="lima" />{preguntas.pregunta1.opcionesRespuesta.opcion2}
            </label>

            <label htmlFor="puno">
              <input type="radio" id="puno" name="pregunta1" defaultValue="puno" />{preguntas.pregunta1.opcionesRespuesta.opcion3}
            </label>

          </div>
          <div id="mensaje1"></div>  
          
          <div id="puntaje"></div>

          <br />
          
          <div className="botonesTrivia">
            <button id="botonRegresar">Volver a jugar</button>
            <button type="submit">Ver resultados</button>
          </div>


        </form>
  );
}

function App() {

  return (
    <>
      <div id="vista2">
        <h1 id="tituloVista2"></h1>

        <MyForm />
        
      </div>
    </>
  );
}

export default App;
