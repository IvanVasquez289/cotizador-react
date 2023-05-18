import { createContext, useState} from "react";
import { obtenerDiferenciaYears, calcularMarca , calcularPlan, formatearCantidad} from "../helpers";
const CotizadorContext = createContext()

const CotizadorProvider = ({children})=>{
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)

    const handleChangeDatos = e => {
        setDatos({...datos, [e.target.name]: e.target.value})
    }

    const cotizarSeguro = () => {
        let resultado = 2000;

        // Obtener diferencia de años
        const diferenciaYears = obtenerDiferenciaYears(datos.year)

        // Restar el 3% cada año
        resultado -= ((diferenciaYears*3) * resultado)/100;

        // Americano 15%
        // Europeo 30%
        // Asiatico 5%
        resultado *= calcularMarca(datos.marca)

        // Basico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)
        resultado = formatearCantidad(resultado)
        setResultado(resultado)
    }

    return(
        <CotizadorContext.Provider 
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro,
                resultado
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext