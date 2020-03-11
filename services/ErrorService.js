
class ErrorService {
  handleError (error) {
    // validation error
    if (error.status === 400) {
      return error.data
    }

    // server error
    if (error.status >= 500) {
      this.$store.dispatch('showError', 'Произошла ошибка, попробуйте еще раз позже.')
    } else {
      this.$store.dispatch('showError', error.data.message)
    }
  }
}

export default new ErrorService()
