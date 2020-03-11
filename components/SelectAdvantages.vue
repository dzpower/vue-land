<template>
  <div
    class="absolute-carousel"
  >
    <span
      @click="$emit('сloseAdvantages')"
      class="back-to-select"
    >
      <fa :icon="faArrowLeft"/>
      Назад к списку
    </span>
    <div class="combiner-blot-carousel">
      <div class="blot">
        <figure>
          <img :src="selected.blot.href" alt="">
        </figure>
        <p class="default-p">{{ selected.blot.text }}</p>
      </div>
      <div class="carousel-custom carousel-custom-fluid">
        <div class="carousel-custom__prev">
          <v-btn
            icon
            @click="moveToPrev()"
          >
            <arrowPrev/>
          </v-btn>
        </div>
        <div class="carousel-custom__next">
          <v-btn
            icon
            @click="sliderMoveFirst++"
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
          transition="fade-transition"
          v-model="sliderMoveFirst"
          height="150"
          width="100%"
          hide-delimiter-background
          delimiter-icon="mdi-dot"
        >
          <v-carousel-item
            v-for="(item, index) in selected.slides"
            :key="index"
          >
            <div class="carousel-item-content">
              <p class="default-p">
                {{ item.content }}
              </p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons'
  import arrowNext from '@/static/svg/arrowNext.svg'
  import arrowPrev from '@/static/svg/arrowPrev.svg'

  export default {
    props: ['selected'],
    name: 'SelectAdvantages',
    components: {
      arrowNext,
      arrowPrev
    },
    data () {
      return {
        sliderMoveFirst: 0
      }
    },
    methods: {
      moveToPrev () {
        if (this.sliderMoveFirst === 0) {
          this.sliderMoveFirst = this.selected.slides.length - 1
        } else {
          this.sliderMoveFirst--
        }
      }
    },
    computed: {
      faArrowLeft () {
        return faArrowLeft
      }
    }
  }
</script>
