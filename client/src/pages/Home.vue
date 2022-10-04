<template>
  <div class="page-wrap">
        <!-- header  -->
        <header class="header-section has-header-main bg-gradient-2">
          <!-- Header main -->
          <HeaderMain isTransparent="is-transparent"></HeaderMain>
          <!-- hero -->
          <HeroTwo></HeroTwo>
        </header>
        <!-- Featured  -->
        <Featured></Featured>
        <!-- product  -->
        
        <!-- Newsletter  -->
        <Newsletter></Newsletter>
        <!-- Footer  -->
        <Footer classname="bg-dark on-dark"></Footer>
  </div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroTwo from '@/components/section/HeroTwo.vue'

export default {
  name: 'Home',
  components: {
    HeroTwo
  },
  data () {
    return {
      SectionData
    }
  }
}
</script>
