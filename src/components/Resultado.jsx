import useCotizador from "../hooks/useCotizador"
import { planes } from "../constants";

const Resultado = () => {
  const { resultado, datos} = useCotizador()
  const {marca,year,plan} = datos;

  // Pasar a number el plan del state porque como viene el form, nos lo da en string
  // Deberia haberlo hecho igual con marca pero en el form en value le puse marca.nombre y no .id
  const [nombrePlan] = planes.filter( p => p.id ===  Number(plan))

  if(resultado===0) return null
  
  return (
    <div className="bg-gray-100 text-center shadow-md mt-5 p-5">
      <h2 className=" text-gray-600 font-bold text-2xl">RESUMEN</h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {marca}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Año del auto: </span>
        {year}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotizacion: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado