import { MyForm } from "../components/MyForm"
import { preguntasAtractivos, preguntasComidas } from "../utils/PreguntasAtractivosTuristicos"

export const Vista2 = () => {
  return (
    <>
      <div id="vista2">
        <h1 id="tituloVista2"></h1>

        <MyForm preguntasAtractivos={preguntasAtractivos} preguntasComidas={preguntasComidas}/>
        
      </div>
    </>
  )
}
