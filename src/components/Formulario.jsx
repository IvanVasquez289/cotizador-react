import { Fragment } from "react"
import { marcas, planes, years } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"
const Formulario = () => {

    const {handleChangeDatos, datos, setError, error} = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
    }

    return (
    <>  
        {error && <Error/>}
        <form onSubmit={handleSubmit}>
            <div className='my-10'>
                <label htmlFor="marca" className=' block mb-3 uppercase text-gray-400'>
                    Marca
                </label>
                <select 
                    name="marca" 
                    id="marca" 
                    className='w-full bg-white border border-gray-200 p-3'
                    value={datos.marca}
                    onChange={ e => handleChangeDatos(e)}
                >
                    <option value="">--Selecciona marca--</option>
                    {marcas.map( marca => (
                        <option key={marca.id} value={marca.nombre}>
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className='my-10'>
                <label htmlFor="year" className=' block mb-3 uppercase text-gray-400'>
                    Año
                </label>
                <select 
                    name="year" 
                    id="year" 
                    className='w-full bg-white border border-gray-200 p-3'
                    value={datos.year}
                    onChange={ e => handleChangeDatos(e)}
                >
                    <option value="">--Selecciona el año--</option>
                    {years.map( year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className='my-10'>
                <label className=' block mb-3 uppercase text-gray-400'>
                    Elige un plan
                </label>
                <div className=" flex gap-3 items-center">
                    {planes.map(plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor={plan.id}>{plan.nombre}</label>
                            <input 
                                type="radio" 
                                name="plan" 
                                value={plan.id} 
                                id={plan.id}
                                onChange={ e => handleChangeDatos(e)}
                                />
                        </Fragment>
                    ))}
                </div>
            </div>
            <input 
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 rounded-lg uppercase font-bold"
                value='Cotizar'
            />
        </form>
    </>
  )
}

export default Formulario