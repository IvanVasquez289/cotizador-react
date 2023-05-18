import useCotizador from "../hooks/useCotizador"

const Error = () => {
  const {error} = useCotizador()
  return (
    <div className=" bg-red-100 text-center border-red-400 border p-3 text-red-700">
      <p>{error}</p>
    </div>
  )
}

export default Error