<template>
  <div class="page-wrap">
      <!-- header  -->
      <header class="header-section has-header-main">
          <!-- Header main -->
          <HeaderMain></HeaderMain>
          <!-- hero -->
          <HeroFour classname="hero-title" :title="SectionData.breadcrumbData.breadcrumbListThree.title" :lists="SectionData.breadcrumbData.breadcrumbListThree.navList"></HeroFour>
        </header>
        <!-- Form -->
        <WalletConnect />

        <div class="container">
          <h5>Current Eth Balance: {{ethPrice*carbonCr}}</h5>
          <h5>Carbon Credit Balance: {{ethPrice*carbonCr}}</h5>
          <div class="space"></div>

          <div class="item-detail-btns mt-4">
                              <ul class="btns-group d-flex">
                            <li class="flex-grow-1">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#sellModal" class="btn btn btn-dark w-40">{{ SectionData.registerData4.btnText }}</a>
                           </li>
                         <li class="flex-grow-1">
                          </li>
                       </ul>
                   </div><!-- end create seller -btns -->


                    <!-- Modal -->
        <div class="modal fade" id="sellModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ SectionData.sellModal.title }}</h4>
                            <button type="submit" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                <em class="ni ni-cross"></em>
                            </button>
                        </div><!-- end modal-header -->
                        <div class="modal-body">
                            <p class="mb-3" v-html="SectionData.sellModal.content"></p>
                            
                            <ul class="total-bid-list mb-4">
                                <li v-for="(list, i) in SectionData.sellModal.totalBidList" :key="i"><span>{{ list.title }}</span> <span>{{ list.value }}</span></li>
                            </ul>
                           
                        </div><!-- end modal-body -->
                    </div><!-- end modal-content -->
                </div><!-- end modal-dialog -->
            </div><!-- end modal-->






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
  