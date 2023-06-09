import Formulario from './Formulario'
import useCotizador from '../hooks/useCotizador'
import Spinner from './Spinner'
import Resultado from './Resultado'
const AppSeguro = () => {
  const {resultado, cargando} = useCotizador()
  return (
    <>
        <header className='my-10'>
            <h1 className=' text-white text-center text-4xl'>Cotizador de seguros de auto</h1>
        </header>

        <main className=' bg-white shadow-md md:w-2/3 lg:w-1/2 mx-auto p-10 rounded-lg'>
            <Formulario/>

            {cargando ? <Spinner/> : <Resultado/>}
          
        </main>
    </>
  )
}

export default AppSeguro