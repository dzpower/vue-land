<template>
  <div
    :class="{ active: stageTab }"
    class="tabs-item-figure top-to-bottom"
  >
    <figure>
      <img :src="blotInfo.blot.href" alt="">
    </figure>
    <div
      :class="{ active: showDescription }"
      class="combiner"
    >
      <p class="default-p">{{ blotInfo.blot.text }}</p>
      <p class="default-p description">
        {{ blotInfo.slides[0].content }}
      </p>
      <span class="read-more-btn">Читать дальше</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlotItem',
    props: ['blotInfo', 'showDescription', 'stageTab']
  }
</script>
