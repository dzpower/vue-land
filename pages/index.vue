<template>
  <div class="page-container" id="#scroll-target">
    <v-dialog
      max-width="510px"
      v-model="openModalForm"
    >
      <v-card class="modal-default">
        <div class="modal-default-header">
          <logo class="modal-default-header__logo"/>
          <v-btn
            small
            fab
            icon
            class="close-modal"
            @click="openModalForm = false"
          >
            <fa :icon="faTimes" />
          </v-btn>
        </div>
        <v-card-text>
          <p class="default-p black-color">
            Написать директору
          </p>
          <form class="d-flex flex-wrap">
            <v-text-field
              class="field-in-modal"
              v-model="modalData.name"
              label="Имя"
              outlined
              required
            ></v-text-field>
            <v-text-field
              class="field-in-modal"
              v-model="modalData.phone"
              v-mask="mask"
              label="Телефон"
              outlined
              required
              @focus="onPhoneFocusModalPhone()"
              @blur="onPhoneBlurModalPhone()"
            ></v-text-field>
            <v-textarea
              class="field-in-modal__100"
              outlined
              name="message"
              v-model="modalData.message"
              label="Сообщение"
            ></v-textarea>
            <v-btn
              @click="openModalForm = false, openModalSuccess = true"
              class="btn-custom btn-custom-page"
            >
              ОТПРАВИТЬ
              <fa :icon="faArrowRight" />
            </v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      max-width="510px"
      v-model="openModalSuccess"
    >
      <v-card class="modal-default">
        <div class="modal-default-header">
          <logo class="modal-default-header__logo"/>
          <v-btn
            small
            fab
            icon
            class="close-modal"
            @click="openModalSuccess = false"
          >
            <fa :icon="faTimes" />
          </v-btn>
        </div>
        <v-card-text class="director-success">
          <figure class="avatar">
            <img src="/maks.png" alt="">
          </figure>
          <div class="carousel-item-content mt-40">
            <quote
              class="quote"
            />
            <p class="default-p">
              Я получил ваше обращение и обязательно решу вопрос в ближайшие 3 рабочих часа. Дождитесь моего ответа.
            </p>
            <div class="carousel-item-content__author">
              Виталий Андреев
            </div>
            <nuxt-link
              class="default-link"
              to="#"
            >
              директор Курьерист
            </nuxt-link>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page back-header_dots" ref="example">
          <section
            :class="{ active: animateSvg }"
            class="animated-svg"
          >
            <mobileRightVector
              class="modileLeftPositionVector"
            />
            <leftAnimSvg
              :class="{ active: animateSvg }"
            />
            <rightAnimSvg
              class="hidden-mobile"
              :class="{ active: animateSvg }"
            />
            <car
              class="car"
            />
            <cargo
              class="cargo"
            />
            <courier
              class="courier"
            />
            <customer
              class="customer"
            />
          </section>
          <section class="center-section mt-150">
            <h1 class="title-h1 text-center">
              Доставим что угодно
            </h1>
            <p class="sub-title">
              Курьерская служба экспресс доставки
            </p>
            <div class="form-custom">
              <v-text-field
                type="text"
                label="Откуда"
                outlined
              ></v-text-field>
              <v-text-field
                type="text"
                label="Куда"
                outlined
              ></v-text-field>
              <v-text-field
                outlined
                v-model="user.phone"
                v-mask="mask"
                name="phone"
                label="Телефон для связи"
                type="phone"
                required
                @focus="onPhoneFocus()"
                @blur="onPhoneBlur()"
              ></v-text-field>
              <v-btn class="btn-custom btn-custom-page">
                РАСЧИТАТЬ СТОИМОСТЬ
                <fa :icon="faArrowRight" />
              </v-btn>
            </div>
            <div class="tabs-simple">
              <div class="tabs-simple-item">
                <span class="tabs-simple-item-point tabs-simple-item-point__purple"></span>
                <h3 class="tabs-simple-item-title">Постоянные штатные курьеры</h3>
                <p class="tabs-simple-item-description">
                  Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет выполнять
                </p>
              </div>
              <div class="tabs-simple-item">
                <span class="tabs-simple-item-point tabs-simple-item-point__pink"></span>
                <h3 class="tabs-simple-item-title">Хороший рейтинг в Yandex и Yell</h3>
                <p class="tabs-simple-item-description">
                  Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет выполнять
                </p>
              </div>
            </div>
          </section>
        </div>
        <Advantages />
        <div class="page">
          <div class="wrapper-default mt-150">
            <div class="d-flex-custom">
              <div class="services">
                <div class="services-item">
                <span class="services-item-figure">
                  <img src="/yService.png" alt="">
                </span>
                  <div class="services-item-rating">
                    <fullStar/>
                    <fullStar/>
                    <fullStar/>
                    <fullStar/>
                    <emptyStar/>
                  </div>
                  <div class="services-item-rating__count">
                    4,1
                  </div>
                  <nuxt-link
                    class="btn-custom__comments"
                    to="#"
                  >
                  <span class="btn-custom__comments-text">
                    Отзыв
                  </span>
                    <fa :icon="faPlus" />
                  </nuxt-link>
                </div>
                <div class="services-item">
                <span class="services-item-figure">
                  <img src="/yandex.png" alt="">
                </span>
                  <div class="services-item-rating">
                    <fullStar/>
                    <fullStar/>
                    <fullStar/>
                    <fullStar/>
                    <halfStar/>
                  </div>
                  <div class="services-item-rating__count">
                    4,6
                  </div>
                  <nuxt-link
                    class="btn-custom__comments"
                    to="#"
                  >
                  <span class="btn-custom__comments-text">
                    Отзыв
                  </span>
                    <fa :icon="faPlus" />
                  </nuxt-link>
                </div>
                <div class="services-item">
                <span class="services-item-figure">
                  <img src="/google.png" alt="">
                </span>
                  <div class="services-item-rating">
                    <fullStar/>
                    <fullStar/>
                    <fullStar/>
                    <fullStar/>
                    <halfStar/>
                  </div>
                  <div class="services-item-rating__count">
                    4,6
                  </div>
                  <nuxt-link
                    class="btn-custom__comments"
                    to="#"
                  >
                  <span class="btn-custom__comments-text">
                    Отзыв
                  </span>
                    <fa :icon="faPlus" />
                  </nuxt-link>
                </div>
              </div>
              <div class="carousel-custom">
                <div class="carousel-custom__prev">
                  <v-btn
                    icon
                    @click="sliderMovePrev()"
                  >
                    <arrowPrev/>
                  </v-btn>
                </div>
                <div class="carousel-custom__next">
                  <v-btn
                    icon
                    @click="sliderMove++"
                  >
                    <arrowPrev
                      class="xs-display-show"
                    />
                    <arrowNext
                      class="xl-display-show"
                    />
                  </v-btn>
                </div>
                <v-carousel
                  :show-arrows="false"
                  v-model="sliderMove"
                  height="250"
                  hide-delimiters
                >
                  <v-carousel-item
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <div class="carousel-item-content">
                      <quote
                        class="quote"
                      />
                      <p class="default-p">
                        {{ item.content }}
                      </p>
                      <div class="carousel-item-content__author">
                        {{ item.author }}
                      </div>
                      <nuxt-link
                        class="default-link"
                        :to="item.href"
                      >
                        {{ item.link }}
                      </nuxt-link>
                    </div>

                  </v-carousel-item>
                </v-carousel>
              </div>
            </div>
            <div class="download-section">
              <div class="download-section-scroll">
                <nuxt-link class="download-section-item" to="#">
                  <img src="/download.png" alt="">
                </nuxt-link>
                <nuxt-link class="download-section-item" to="#">
                  <img src="/download.png" alt="">
                </nuxt-link>
                <nuxt-link class="download-section-item" to="#">
                  <img src="/download.png" alt="">
                </nuxt-link>
                <nuxt-link class="download-section-item" to="#">
                  <img src="/download.png" alt="">
                </nuxt-link>
                <nuxt-link class="download-section-item" to="#">
                  <img src="/download.png" alt="">
                </nuxt-link>
              </div>
            </div>
            <div class="d-flex justify-center">
              <v-btn
                @click="openModalForm = true"
                class="btn-custom btn-custom-page"
              >
                НАПИСАТЬ ДИРЕКТОРУ
                <fa :icon="faArrowRight" />
              </v-btn>
            </div>
          </div>
        </div>
        <div class="page">
          <div class="wrapper-default mt-150">
            <h2 class="title-h1">
              Курьер по Москве и Подмосковью
            </h2>
            <div class="content-section">
              <p class="default-p">
                Ежедневно совершенно разные люди оказываются в ситуации, когда понимают, что без помощника они не успеют
                сделать что-то важное:
              </p>
              <ul class="list-circle">
                <li>доставить посылку на почту</li>
                <li>заехать к другу, чтобы вернуть ему фотоаппарат</li>
                <li>съездить в аптеку за лекарствами, и т.п.</li>
              </ul>
              <p class="default-p">
                Ежедневно совершенно разные люди оказываются в ситуации, когда понимают, что без помощника они не успеют
                сделать что-то важное:
              </p>
              <ul class="list-circle">
                <li>сдать документы в налоговую инспекцию</li>
                <li>доставить заказанный товар клиенту и получить за него деньги</li>
                <li>получить срочный товар у поставщика, и т.п.</li>
              </ul>
              <span
                v-show="readMore"
                class="read-more"
                @click="readMore = !readMore"
              >
                Читать дальше
              </span>
              <p
                v-show="!readMore"
                class="default-p"
              >
                И к сожалению, быстро найти замену у вас вряд ли получится - большинство курьерских служб установили
                правила, что вызвать курьера можно только заранее, а понятие "срочная доставка" многим вообще не
                знакомо.
                Именно поэтому мы готовы предложить вам курьерские услуги в самых сложных ситуациях - наши курьеры
                изначально ориентированы на выполнение задачи клиента в условиях дефицита времени.
              </p>
              <p
                v-show="!readMore"
                class="default-p"
              >
                Не тратьте своё время в пробках, не толкайтесь в метро и не заставляйте это делать ваших сотрудников -
                наша курьерская служба выполнит вашу задачу точно, вовремя и с улыбкой.
              </p>
            </div>
            <p class="default-p black-color">
              Курьерист – это скорая курьерская помощь. Вы можете на нас положиться!
            </p>
          </div>
        </div>
        <div class="page d-flex">
          <Footer/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mask } from 'vue-the-mask'
  import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons'
  import { faArrowRight } from '@fortawesome/pro-solid-svg-icons'
  import { faTimes } from '@fortawesome/pro-light-svg-icons'
  import { faPlus } from '@fortawesome/pro-regular-svg-icons'
  import logo from '@/static/svg/logo.svg'
  import leftAnimSvg from '@/static/svg/leftAnimSvg.svg'
  import rightAnimSvg from '@/static/svg/rightAnimSvg.svg'
  import car from '@/static/svg/car.svg'
  import cargo from '@/static/svg/cargo.svg'
  import courier from '@/static/svg/courier.svg'
  import customer from '@/static/svg/customer.svg'
  import fullStar from '@/static/svg/fullStar.svg'
  import emptyStar from '@/static/svg/emptyStar.svg'
  import halfStar from '@/static/svg/halfStar.svg'
  import quote from '@/static/svg/quote.svg'
  import Footer from '@/components/Footer.vue'
  import Advantages from '@/components/Advantages.vue'
  import arrowNext from '@/static/svg/arrowNext.svg'
  import arrowPrev from '@/static/svg/arrowPrev.svg'
  import mobileRightVector from '@/static/svg/mobileRightVector.svg'

  export default {
    head: {
      title: 'Главная'
    },
    components: {
      Advantages,
      leftAnimSvg,
      rightAnimSvg,
      mobileRightVector,
      car,
      cargo,
      courier,
      customer,
      Footer,
      fullStar,
      emptyStar,
      halfStar,
      quote,
      arrowNext,
      arrowPrev,
      logo
    },
    directives: {
      mask
    },
    data () {
      return {
        modalData: {
          phone: '',
          name: '',
          message: ''
        },
        openModalSuccess: false,
        openModalForm: false,
        items: [
          {
            content: 'Идейные соображения высшего порядка, а также консультация с широким активом в значительной степени обуславливает создание существенных финансовых и административных условий.',
            author: 'Алексей',
            link: 'facebook',
            href: '#'
          },
          {
            content: 'Идейные соображения высшего порядка, а также консультация с широким активом в значительной степени обуславливает создание существенных финансовых и административных условий.',
            author: 'Дмитрий',
            link: 'telegram',
            href: '#'
          },
          {
            content: 'Идейные соображения высшего порядка, а также консультация с широким активом в значительной степени обуславливает создание существенных финансовых и административных условий.',
            author: 'Василий',
            link: 'telegram',
            href: '#'
          },
          {
            content: 'Идейные соображения высшего порядка, а также консультация с широким активом в значительной степени обуславливает создание существенных финансовых и административных условий.',
            author: 'Ну и куда без Игорька',
            link: 'google',
            href: '#'
          }
        ],
        sliderMove: 0,
        readMore: false,
        opts: {
          start: 0,
          duration: 600,
          disabled: false,
          beforeChange (currentSlideEl, currenIndex, nextIndex) {},
          afterChange (currentSlideEl, currenIndex) {}
        },
        animateSvg: false,
        mask: '+7(###)-###-####',
        user: {
          phone: ''
        }
      }
    },
    computed: {
      faArrowLeft () {
        return faArrowLeft
      },
      faArrowRight () {
        return faArrowRight
      },
      faTimes () {
        return faTimes
      },
      faPlus () {
        return faPlus
      }
    },
    methods: {
      sliderMovePrev () {
        this.sliderMove === 0 ? this.sliderMove = this.items.length - 1 : this.sliderMove--
      },
      onPhoneFocus () {
        if (this.user.phone === '') {
          this.user.phone = '+7'
        }
        return this.user.phone
      },
      onPhoneBlur () {
        if (this.user.phone === '+7') {
          this.user.phone = ''
        }
        return this.user.phone
      },
      onPhoneFocusModalPhone () {
        if (this.modalData.phone === '') {
          this.modalData.phone = '+7'
        }
        return this.modalData.phone
      },
      onPhoneBlurModalPhone () {
        if (this.modalData.phone === '+7') {
          this.modalData.phone = ''
        }
        return this.modalData.phone
      }
    },
    beforeMount () {
      if (screen.width <= 640) {
        this.opts.disabled = true
        this.readMore = true
      }
    },
    mounted () {
      setTimeout(
        () => {
          this.animateSvg = true
        }, 1000
      )
      setTimeout(
        () => {
          const car = document.querySelector('.car')
          const cargo = document.querySelector('.cargo')
          const courier = document.querySelector('.courier')
          const customer = document.querySelector('.customer')
          car.classList.add('show')
          cargo.classList.add('show')
          courier.classList.add('show')
          customer.classList.add('show')
        }, 4000
      )
    }
  }
</script>
