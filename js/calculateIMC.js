export function calculateIMC(weigth, heigth) {
    return (weigth / ((heigth / 100) ** 2)).toFixed(2)
}