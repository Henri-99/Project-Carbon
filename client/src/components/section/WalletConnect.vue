<template>
<section class="wallet-section section-space-b">
      <div class="container">
        <div id="demo">
            <vue-metamask @onComplete="onComplete" ref="metamask" :initConnect="false"></vue-metamask>
        </div>

        <div class="row g-gs align-items-center justify-content-center">
              <div class="col-sm-6 col-md-9 col-xl-7" v-for="item in SectionData.walletDataTwo" :key="item.id">
                  <router-link :to="item.path" class="card-media card-full card-media-s1 flex-column justify-content-center flex-wrap p-4">
                      <div class="d-flex flex-column align-items-center justify-content-center py-1">
                          <img :src="item.img" alt="logo" class="card-media-img flex-shrink-0 me-0 mb-3">
                          <h6>{{ item.title }}</h6>
                      </div>
                      <div class="card-media-body flex-grow-0 mt-3">
                            <span @click="connect" class="btn btn-sm btn-outline-secondary">Connect</span>
                      </div>
                      <div>
                             <h7>Connected to: {{ myAddr }}</h7>
                      </div>
                  </router-link><!-- end card-media -->
              </div>
          </div>
      </div><!-- .container -->
  </section><!-- end wallet-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import VueMetamask from 'vue-metamask';
var myAddr = "none";

export default {
    name: 'WalletSection',
    components: {
        VueMetamask,
    },
    data () {
      return {
        SectionData,
        msg: "Demo Test",
        myAddr
      }
    },
    methods:{
        connect() {
            this.$refs.metamask.init();
        },
        onComplete(data){
            myAddr = data.metaMaskAddress;
            console.log('data:', data);
        }
    }
}
</script>