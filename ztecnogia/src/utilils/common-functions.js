export const goBack = (navi) => {
    return navi(-1)
}

export const currencyFormatNumber = (number) => {
    return new Intl.NumberFormat('es-CO', { 
        style: 'currency', 
        currency: 'COP', 
        maximumSignificantDigits: 3, 
    }).format(
        number,
    )
}

export const url = process.env.REACT_APP_API_BASE_URL;
