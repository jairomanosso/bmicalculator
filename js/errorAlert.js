export const errorAlert = {
    alert: document.querySelector('#error-alert'),
    open() {
        this.alert.classList.add('open')
        setTimeout(() => this.close(), 3000)
    },
    close() {
        this.alert.classList.remove('open')
    }
}
