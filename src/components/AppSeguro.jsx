import Formulario from './Formulario'
import { useContext } from 'react'
import CotizadorContext from '../context/CotizadorProvider'
const AppSeguro = () => {

  const {modal} = useContext(CotizadorContext)
  console.log(modal)
  return (
    <>
        <header className='my-10'>
            <h1 className=' text-white text-center text-4xl'>Cotizador de seguros de auto</h1>
        </header>

        <main className=' bg-white shadow-md md:w-2/3 lg:w-1/2 mx-auto p-10 rounded-lg'>
            <Formulario/>
        </main>
    </>
  )
}

export default AppSeguro