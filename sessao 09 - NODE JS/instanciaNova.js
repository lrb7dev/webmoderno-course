//uma FACTORY retorna um novo OBJETO
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}