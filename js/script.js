import { Modal } from './modal.js'
import { calculateIMC } from './calculateIMC.js'
import { notANumber } from './notANumber.js'
import { errorAlert } from './errorAlert.js'

const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#heigth')

form.onsubmit = (event) => {
    event.preventDefault()

    const weigth = inputWeigth.value
    const heigth = inputHeigth.value
    const showErrorAlert = notANumber(weigth) || notANumber(heigth)

    if(showErrorAlert){
        errorAlert.open()
        return
    }

    const resultIMC = calculateIMC(weigth, heigth)

    Modal.message.innerText = `Seu IMC é de ${resultIMC}`

    Modal.open()
}