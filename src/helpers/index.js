export const obtenerDiferenciaYears = year => {
    return new Date().getFullYear() - year
}

export const calcularMarca = marca =>{
    let incremento;
    switch (marca) {
        case 'Europeo':
            incremento = 1.3
            break;
        case 'Americano':
            incremento = 1.15
            break;
        case 'Asiatico':
            incremento = 1.5
            break;
    
        default:
            break;
    }

    return incremento;
}

export const calcularPlan = plan => {
    return plan === '1' ? 1.2 : 1.5
}

export const formatearCantidad = cantidad => {
    return cantidad.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
}