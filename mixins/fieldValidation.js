export const fieldValidation = {
  data: () => ({
    validationErrors: {}
  }),

  methods: {
    clearValidation (fieldName) {
      this.validationErrors[fieldName] = null
    },

    setValidation (validationData) {
      if (!validationData) { return }

      // set errors to state field validationErrors
      const validationErrors = validationData.reduce((prev, cur) => {
        return Object.assign(prev, { [cur.field]: cur.message })
      }, {})

      this.validationErrors = validationErrors
    }
  }
}
