<template>
  <footer
    class="footer-custom back-footer_dots"
    @mouseenter="activeAnimate"
  >
      <button
        class="go-to-top"
        @click="moveTop()"
      >
        <fa :icon="faArrowUp" />
      </button>
      <nav class="footer-nav">
        <ul class="footer-col">
          <li class="title-nav">
            Вызвать курьера
          </li>
          <li><a href="#">Курьер сегодня</a></li>
          <li><a href="#">Курьер завтра</a></li>
          <li><a href="#">Курьер недорого</a></li>
          <li><a href="#">Доставка по России</a></li>
          <li><a href="#">Аренда курьера</a></li>
        </ul>
        <ul class="footer-col">
          <li class="title-nav">
            Доставка
          </li>
          <li><a href="#">Корпоративным клиентам</a></li>
          <li><a href="#">Интернет-магазинам</a></li>
          <li><a href="#">Частным лицам</a></li>
        </ul>
        <ul class="footer-col">
          <li class="title-nav">
            Условия работы
          </li>
          <li><a href="#">Интернет-магазинам</a></li>
          <li><a href="#">Размещение заказов</a></li>
          <li><a href="#">Способы оплаты</a></li>
          <li><a href="#">Страхование</a></li>
          <li><a href="#">Кассовое обслуживание</a></li>
          <li><a href="#">Документы</a></li>
        </ul>
        <ul class="footer-col">
          <li class="title-nav">
            О компании
          </li>
          <li><a href="#">Интернет-магазинам</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Вакансии</a></li>
          <li><a href="#">Контакты{{offsetTop}} </a></li>

        </ul>
      </nav>
      <footerBack
        :class="{ active: hover}"
        class="svg-back-bottom"
      />
    </footer>
</template>

<script>
  import { faArrowUp } from '@fortawesome/pro-solid-svg-icons'
  import footerBack from '@/static/svg/footerBack.svg'

  export default {
    components: {
      footerBack
    },
    data () {
      return {
        hover: false,
        offsetTop: 0
      }
    },
    methods: {
      activeAnimate () {
        this.hover = true
      },
      moveTop () {
        this.$vuetify.goTo('#__layout')
      }
    },
    computed: {
      faArrowUp () {
        return faArrowUp
      }
    },
    mounted () {
      (() => {
        if (screen.width <= 641) {
          this.hover = true
        }
        return this.hover
      })()
    }
  }
</script>
