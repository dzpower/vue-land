<template>
  <v-toolbar class="nav-fixed">
    <v-toolbar-title>
      <nuxt-link to="/" class="logo">
        <logo />
      </nuxt-link>
    </v-toolbar-title>
    <v-toolbar-items
      :class="{ active: showMobileMenu }"
      class="flex-grow-1"
    >
      <nav>
        <nuxt-link to="#">
          Заключить договор
        </nuxt-link>
        <nuxt-link to="#">
          Тарифы и условия
        </nuxt-link>
      </nav>
      <section class="social-bar">
        <nuxt-link to="#" class="social-bar-link">
          <fa :icon="faTelegramPlane" />
        </nuxt-link>
        <nuxt-link to="#" class="social-bar-link">
          <fa :icon="faViber" />
        </nuxt-link>
        <nuxt-link to="#" class="social-bar-link">
          <fa :icon="faFacebookMessenger" />
        </nuxt-link>
      </section>
      <section class="drops-bar">
        <div class="drops-bar-item xs-display-none">
          <button
            @click="showPhoneNumber()"
            class="drops-bar-item-btn rotateY-180"
          >
            <fa :icon="faPhone" />
          </button>
          <a
            v-show="showPhone"
            href="tel:+74951351551"
            class="drops-bar-item-info--tel"
          >
            +7 (495) 135-15-51
          </a>
        </div>
        <div class="drops-bar-item">
          <button
            @click="showSearchField()"
            :class="{ 'orange-color': showSearch }"
            class="drops-bar-item-btn"
          >
            <fa :icon="faSearch"/>
            <span
              v-show="!showSearch"
              class="trakking">
              треккинг
            </span>
          </button>
          <v-text-field
            type="search"
            ref="search"
            v-show="showSearch"
            class="drops-bar-item-info--search-field"
          ></v-text-field>
        </div>
        <a href="tel:+74951351551" class="drops-bar-item xs-display-show user">
          <fa class="rotateY-180" :icon="faPhone" />
          <span class="xs-display-show mobile-text">
            Звонок нам
          </span>
        </a>
        <nuxt-link to="#" class="user">
          <fa :icon="faUser" />
          <span class="xs-display-show mobile-text">
            Личный кабинет
          </span>
        </nuxt-link>
      </section>
      <v-btn class="btn-custom">
        СТАРЫЙ САЙТ
        <fa :icon="faArrowRight" />
      </v-btn>
    </v-toolbar-items>
    <v-btn
      @click="openMenu"
      :class="{ active: showMobileMenu }"
      fab
      x-small
      color="transpatent"
      class="burger-menu"
    >
      <span class="string"></span>
      <span class="string"></span>
      <span class="string"></span>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { faArrowRight } from '@fortawesome/pro-solid-svg-icons'
  import { faPhone } from '@fortawesome/pro-solid-svg-icons'
  import { faSearch } from '@fortawesome/pro-regular-svg-icons'
  import { faUser } from '@fortawesome/pro-regular-svg-icons'
  import { faViber } from '@fortawesome/free-brands-svg-icons'
  import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
  import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
  import logo from '@/static/svg/logo.svg'

  export default {
    name: 'HeaderNav',
    components: {
      logo
    },
    data () {
      return {
        showPhone: false,
        showSearch: false,
        showMobileMenu: false
      }
    },
    methods: {
      showSearchField () {
        this.showPhone = false
        this.showSearch = !this.showSearch
        setTimeout(() => this.$refs.search.focus(), 200)
      },
      showPhoneNumber () {
        this.showSearch = false
        this.showPhone = !this.showPhone
      },
      openMenu () {
        this.showMobileMenu = !this.showMobileMenu
        return this.showMobileMenu
      }
    },
    computed: {
      faArrowRight () {
        return faArrowRight
      },
      faViber () {
        return faViber
      },
      faTelegramPlane () {
        return faTelegramPlane
      },
      faFacebookMessenger () {
        return faFacebookMessenger
      },
      faPhone () {
        return faPhone
      },
      faSearch () {
        return faSearch
      },
      faUser () {
        return faUser
      }
    }
  }
</script>
