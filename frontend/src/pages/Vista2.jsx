import { MyForm } from "../components/MyForm"
import { preguntasAtractivos, preguntasComidas } from "../utils/PreguntasTrivia"
import { useSearchParams } from "react-router-dom"

export const Vista2 = () => {

  const [searchParams] = useSearchParams();
  const params = searchParams.get('type');

  const preguntas = (params === 'atractivos-turisticos') ? preguntasAtractivos : preguntasComidas
  return (
    <>
      <div id="vista2">
        <h1 id="tituloVista2"></h1>

        <MyForm preguntas={preguntas} />
        
      </div>
    </>
  )
}
