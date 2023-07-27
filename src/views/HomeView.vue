<script setup lang="ts">
import TheBanner from '@/components/home/TheBanner.vue'
import ThreeColumnIcon from '@/components/common/ThreeColumnIcon.vue'
import CallToAction from '@/components/common/CallToAction.vue'
import BeforeFooter from '@/components/layout/BeforeFooter.vue'
import TwoColumnImageAndText from '@/components/common/TwoColumnImageAndText.vue'
import Slider from '@/components/common/Slider.vue'
</script>

<template>
  <main>
    <TheBanner class="mb-80px" />
    <!-- TODO -->
    <div class="container">
      <div class="row row-cols-1 row-cols-md-6 g-4">
        <div v-for="(item, index) in [1, 2, 3, 4, 5, 6]" class="col">
          <div class="card border-0">
            <img
              src="@/assets/images/icons/bed.svg"
              width="80"
              height="160"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
    <!-- END -->
    <TwoColumnImageAndText class="mb-18" :image-postion="'right'" />
    <TwoColumnImageAndText :image-postion="'left'" />
    <Slider :slider-count="3" />
    <ThreeColumnIcon
      icon-src1="/src/assets/images/icons/outdoor-cafe.svg"
      title1="With Mamun Vai"
      description1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis dolor
          doloremque"
      icon-src2="/src/assets/images/icons/restaurant.svg"
      title2="cum exercitationem minus est tempora"
      description2="consectetur adipisicing elit. Temporibus consequatur ex, perferendis ipsum sit aliquam ipsa facilis doloremque, cum exercitationem minus est tempora"
      icon-src3="/src/assets/images/icons/delivery-van.svg"
      title3="Temporibus consequatur ex, perferendis"
      description3="Temporibus consequatur ex, perferendis ipsum sit aliquam ipsa facilis doloremque, cum exercitationem minus est tempora tempore modi iure, pariatur illo reiciendis quia."
    />
    <CallToAction />
    <BeforeFooter />
  </main>
</template>
