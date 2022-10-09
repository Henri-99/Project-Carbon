<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- create -->
    <section class="create-section bg-gradient-2 section-space-b pt-4 pt-md-2 mt-md-2">
        <div class="container">
            <!-- create -->
            <div class="container">
            <div class="form-create-tab-wrap">
                <h4>Total tokens currently in issue: {{totalCarbCr}}</h4>
                <div class="space"></div>
                <h4>Mint and issue new tokens to the market</h4>
                <div class="space"></div>
              <label class="mb-2 form-label">Member ID</label>
              <input type="text" class="form-control form-control-s1 formWidth">
              <label class="mb-2 form-label">Quantity</label>
              <input type="number" class="form-control form-control-s1 formWidth" v-model="carbonCr">
                </div><!-- end form-create-tab-wrap -->
                <div class="space"></div>
                <div class="space"></div>
                <button class="btn btn-dark w-40" type="submit">{{ SectionData.registerData5.btnText }}</button>
                </div>
                <div class="space"></div>

            
        </div><!-- end container -->
    </section><!-- end create-section -->
    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'Create',
  data () {
    return {
      SectionData,
      ethPrice: 0.04,
      carbonCr: '',
      totalCarbCr: 1,
    }
  }
}
</script>
