<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  '/src/assets/images/cta.jpg',
  '/src/assets/images/hero_banner.jpg',
  '/src/assets/images/cta.jpg',
  '/src/assets/images/hero_banner.jpg',
  '/src/assets/images/cta.jpg',
  '/src/assets/images/hero_banner.jpg'
])
const sliderLeft = ref(0)

const prev = () => {
  sliderLeft.value = sliderLeft.value >= 0 ? 0 : sliderLeft.value + 100 / props.sliderCount
}
const next = () => {
  sliderLeft.value =
    (sliderLeft.value * -1) / 100 >= items.value.length / props.sliderCount - 1
      ? (items.value.length / props.sliderCount - 1) * -100
      : sliderLeft.value - 100 / props.sliderCount
}

const props = defineProps({
  sliderCount: {
    type: Number,
    default: 1
  }
})
</script>
<template>
  <div class="container-fluid my-20">
    <div class="container">
      <div class="slider-wrap overflow-hidden">
        <TransitionGroup
          name="list"
          tag="ul"
          class="list-unstyled d-flex slider h-100"
          :style="{ left: sliderLeft + '%' }"
        >
          <li
            v-for="item in items"
            :key="item"
            class="flex-shrink-0"
            :style="{
              width: 100 / props.sliderCount + '%'
            }"
          >
            <img :src="item" class="img-fluid h-100 w-100" alt="" />
          </li>
          <!-- <div v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" />
    </div> -->
        </TransitionGroup>
      </div>
      <div class="navigation pt-5">
        <div class="btn btn-primary" @click="prev">Prev</div>
        <div class="btn btn-primary" @click="next">Next</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.slider {
  position: absolute;
  width: 100%;
}

.slider-wrap {
  position: relative;
  height: 200px;
}
</style>
