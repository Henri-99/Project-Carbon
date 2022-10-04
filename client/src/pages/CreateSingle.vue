<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-pattern-3">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- create -->
    <section class="create-section section-space-b pt-4 pt-md-5 mt-md-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-head-sm">
                        
                        <h1 class="mt-2">{{ SectionData.createSingleData.title }}</h1>
                    </div>
                </div><!-- end col -->
                <div class="col-lg-8">
                    <form action="#" class="form-create mb-5 mb-lg-0">
                        
                        
                        <div class="form-item mb-4">
                            <h5 class="mb-1">Project to be issued to</h5>
                            <v-select class="generic-select" v-model="selected" :options="options"></v-select>
                        </div><!-- end form-item -->
                        <div class="form-item mb-4">
                            <div class="mb-4">
                                <label class="mb-2 form-label">Wallet address</label>
                                <input type="text" class="form-control form-control-s1" >
                            </div>
                            <div class="mb-4">
                                <label class="mb-2 form-label">Number of tokens to be issued</label>
                                <input type="text" class="form-control form-control-s1" >
                            </div>
                            
                        </div><!-- end form-item -->
                        <button class="btn btn-dark" type="button">Issue</button>
                    </form>
                </div><!-- endn col -->
            </div><!-- row-->
        </div><!-- container -->
    </section><!-- create-section -->
    <!-- Footer  -->
    <Footer classname="bg-dark on-dark"></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'CreateSingle',
  data () {
    return {
      SectionData,
      selected: 'Select Project',
      options: [
        'Project 1',
        'Project 2',
        'Project 3',
        'Project 4',
        'Project 5',
        'Project 6',
        'Project 7'
      ]
    }
  },
 
}
</script>