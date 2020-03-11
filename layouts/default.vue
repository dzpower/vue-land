<template>
  <v-app>
    <HeaderNav />
    <nuxt />
  </v-app>
</template>

<script>
  import HeaderNav from '~/components/HeaderNav.vue'

  export default {
    components: {
      HeaderNav
    }
  }
</script>
