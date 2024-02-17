export const Modal = {
    wrapper: document.querySelector('#modal-wrapper'),
    closeButton: document.querySelector('#modal-close-btn'),
    message: document.querySelector('#modal-card h2'),
    open(){
        this.wrapper.classList.add('open')
    },
    close(){
        this.wrapper.classList.remove('open')
    }
}

Modal.closeButton.onclick = () => Modal.close()

window.addEventListener('keydown', (event)=>{
    if(event.key === 'Escape') {
        Modal.close()
    }
})