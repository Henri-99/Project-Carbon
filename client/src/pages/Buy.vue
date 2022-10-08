<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
        <!-- hero -->
        <HeroFour classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbListTwo.title" :lists="SectionData.breadcrumbData.breadcrumbListTwo.navList"></HeroFour>
      </header>
      <!-- Form -->
      <WalletConnect />
      <div class="container">
          <h5>Current Eth Balance: {{ethPrice*carbonCr}}</h5>
          <h5>Carbon Credit Balance: {{ethPrice*carbonCr}}</h5>
          <div class="space"></div>

          <div class="form-create-tab-wrap align-centre">
                <label class="mb-2 form-label">Amount of Credits to Buy:</label>
                <input type="number" class="form-control form-control-s1 formWidth" v-model="carbonCr">
          </div><!-- end form-create-tab-wrap -->
            <div class="space"></div>
            <h4>Total Eth Cost: {{ethPrice*carbonCr}}</h4>
            <div class="space"></div>
            <button class="btn btn-dark w-40" type="submit">{{ SectionData.registerData3.btnText }}</button>
        </div>
      <div class="space"></div>
    <!-- footer -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import HeroFour from '@/components/section/HeroFour.vue'
import WalletConnect from '../components/section/WalletConnect.vue'

export default {
  name: 'Activity',
  components: {
    HeroFour,
    WalletConnect
  },
  data () {
    return {
      SectionData,
      ethPrice: 0.04,
      carbonCr: ''
    }
  },
}

</script>

<style>
  .space {
    margin-top: 3%;
  }
  .formWidth {
    max-width: 25%;
  }

</style>
