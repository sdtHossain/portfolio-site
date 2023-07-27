<script setup lang="ts">
const props = defineProps({
  iconSrc1: {
    type: String,
    default: '/src/assets/images/icons/bed.svg'
  },
  title1: {
    type: String,
    default: 'Lorem Ipsum dolor sit amet'
  },
  description1: {
    type: String,
    default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis dolor
          doloremque`
  },
  iconSrc2: {
    type: String,
    default: '/src/assets/images/icons/bed.svg'
  },
  title2: {
    type: String,
    default: 'Lorem Ipsum dolor sit amet'
  },
  description2: {
    type: String,
    default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis dolor
          doloremque`
  },
  iconSrc3: {
    type: String,
    default: '/src/assets/images/icons/bed.svg'
  },
  title3: {
    type: String,
    default: 'Lorem Ipsum dolor sit amet'
  },
  description3: {
    type: String,
    default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis dolor
          doloremque`
  }
})
</script>
<template>
  <div class="container section-padding">
    <div class="row">
      <div class="col text-center">
        <img :src="iconSrc1" width="80" height="160" alt="" />
        <h5>{{ title1 }}</h5>
        <p>{{ description1 }}</p>
      </div>
      <div class="col text-center">
        <img :src="iconSrc2" width="80" height="160" alt="" />
        <h5>{{ title2 }}</h5>
        <p>{{ description2 }}</p>
      </div>
      <div class="col text-center">
        <img :src="iconSrc3" width="80" height="160" alt="" />
        <h5>{{ title3 }}</h5>
        <p>{{ description3 }}</p>
      </div>
    </div>
  </div>
</template>
