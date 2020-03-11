<template>
  <v-app dark>
    <div style="margin-top: 400px">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <nuxt-link
        class="default-link"
        to="/"
      >
        Вернуться на главную
      </nuxt-link>
    </div>
  </v-app>
</template>

<script>
  export default {
    layout: 'empty',
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    head () {
      const title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError
      return {
        title
      }
    },
    data () {
      return {
        pageNotFound: '404 Not Found',
        otherError: 'An error occurred'
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
</style>
