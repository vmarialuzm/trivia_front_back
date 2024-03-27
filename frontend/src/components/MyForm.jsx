
export const MyForm = ({preguntasAtractivos, preguntasComidas}) => {

    
    const formulario = preguntasAtractivos.map(pregunta => 
      <div key={pregunta.enunciado}>
        <p>{pregunta.enunciado}</p>
        <img src={pregunta.image.url} width={pregunta.image.width} height={pregunta.image.height}/><br/>
  
        <div id="inputsPreguntas1">
                
          <label htmlFor="piura">
            <input type="radio" id="piura" name="pregunta1" defaultValue="piura" required />{pregunta.opcionesRespuesta.opcion1}
          </label>
  
          <label htmlFor="lima">
            <input type="radio" id="lima" name="pregunta1" defaultValue="lima" />{pregunta.opcionesRespuesta.opcion2}
          </label>
  
          <label htmlFor="puno">
            <input type="radio" id="puno" name="pregunta1" defaultValue="puno" />{pregunta.opcionesRespuesta.opcion3}
          </label>
        </div>
      </div>
      );
  
      return (
        <form id="formTrivia">
            {formulario}
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



