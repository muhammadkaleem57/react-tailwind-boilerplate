
export const isObject = (value:any) =>{
    try {
        return value && Object.keys(value).length !== 0
    }catch (e) {
        return false
    }
}

export const isArray = (array:any) => {
    try {
        return !!Array.isArray(array)
    }catch (e) {
        return false
    }
}