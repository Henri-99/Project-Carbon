<template>
    <section class="register-section section-space-b pt-4 pt-md-5 mt-md-3">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6 mb-lg-0 d-none d-lg-block">
                        <img :src="SectionData.registerData.img" alt="" class="img-fluid">
                    </div><!-- end col-lg-6 -->
                    <div class="col-lg-6 col-md-9">
                        <div class="section-head-sm">
                            <h2 class="mb-2" v-html=" SectionData.registerData.title"></h2>
                            <p>{{ SectionData.registerData.subTitle }}</p>
                        </div>
                        <form action="#">
                           
                        <div class="form-item mb-4">
                           
                            <ul class="row g-4 nav nav-tabs nav-tabs-s2" id="myTab" role="tablist">
                                <li class="nav-item col-6 col-sm-4 col-lg-3" role="presentation" v-for="list in SectionData.selectMethodTabNavTwo" :key="list.id">
                                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">
                                        <em class="ni nav-link-icon" :class="list.icon"></em>
                                        <span class="nav-link-title mt-1 d-block">{{list.title }}</span>
                                    </button>
                                </li>
                            </ul>
                            <div class="tab-content mt-4" id="myTabContent">
                                <div class="tab-pane fade show active" id="fixed-price" role="tabpanel" aria-labelledby="fixed-price-tab">
                                    <div class="form-create-tab-wrap">
                                        <label class="mb-2 form-label">Organisation Name</label>
                                        <input type="text" class="form-control form-control-s1" >
                                    </div><!-- end form-create-tab-wrap -->
                                    <div class="form-create-tab-wrap">
                                        <label class="mb-2 form-label">Wallet address</label>
                                        <input type="text" class="form-control form-control-s1" >
                                    </div><!-- end form-create-tab-wrap -->
                                    <div class="form-create-tab-wrap">
                                        <label class="mb-2 form-label">Project ID</label>
                                        <input type="text" class="form-control form-control-s1" >
                                    </div><!-- end form-create-tab-wrap -->
                                    <div class="form-create-tab-wrap">
                                        <label class="mb-2 form-label">Email</label>
                                        <input type="text" class="form-control form-control-s1" >
                                    </div><!-- end form-create-tab-wrap -->

                                    <div class="item-detail-btns mt-4">
                                        <ul class="btns-group d-flex">
                                         <li class="flex-grow-1">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#placeBidModal" class="btn btn-dark d-block">{{ SectionData.registerData.btnText }}</a>
                                        </li>
                                        <li class="flex-grow-1">
                                        </li>
                                         </ul>
                                    </div><!-- end create seller -btns -->
                                </div><!-- end tab-pane -->

                                <div class="tab-pane fade" id="open-for-bids" role="tabpanel" aria-labelledby="open-for-bids-tab">
                                    
                                        <div class="form-create-tab-wrap">
                                        <label class="mb-2 form-label">Organisation Name</label>
                                        <input type="text" class="form-control form-control-s1" >
                                    </div><!-- end form-create-tab-wrap -->
                                    <div class="form-create-tab-wrap">
                                        <label class="mb-2 form-label">Wallet address</label>
                                        <input type="text" class="form-control form-control-s1" >
                                    </div><!-- end form-create-tab-wrap -->
                                    <div class="form-create-tab-wrap">
                                        <label class="mb-2 form-label">Tax Number</label>
                                        <input type="text" class="form-control form-control-s1" >
                                    </div><!-- end form-create-tab-wrap -->
                                    <div class="form-create-tab-wrap">
                                        <label class="mb-2 form-label">Email</label>
                                        <input type="text" class="form-control form-control-s1" >
                                    </div><!-- end form-create-tab-wrap -->


                                    <div class="item-detail-btns mt-4">
                                        <ul class="btns-group d-flex">
                                         <li class="flex-grow-1">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#placeBidModal" class="btn btn-dark d-block">{{ SectionData.registerData2.btnText }}</a>
                                        </li>
                                        <li class="flex-grow-1">
                                        </li>
                                         </ul>
                                    </div><!-- end create seller -btns -->



                                   

                                    
                                </div><!-- end tab-pane -->

                               

                                
                                
                            </div><!-- end tab-content -->
                        </div><!-- end form-item -->
                      
                        
                            

                        </form>
                    </div><!-- end col-lg-6 -->
                </div><!-- end row -->
            </div><!-- end container -->



<!-- Modal -->
<div class="modal fade" id="placeBidModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ SectionData.placeBidModal.title }}</h4>
                            <button type="submit" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                <em class="ni ni-cross"></em>
                            </button>
                        </div><!-- end modal-header -->
                        <div class="modal-body">
                            <p class="mb-3" v-html="SectionData.placeBidModal.content"></p>
                            
                            <ul class="total-bid-list mb-4">
                                <li v-for="(list, i) in SectionData.placeBidModal.totalBidList" :key="i"><span>{{ list.title }}</span> <span>{{ list.price }}</span></li>
                            </ul>
                           
                        </div><!-- end modal-body -->
                    </div><!-- end modal-content -->
                </div><!-- end modal-dialog -->
            </div><!-- end modal-->

        </section><!-- end register-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'RegisterSection',
  data () {
    return {
      SectionData
    }
  },
  mounted () {
    /*  ======== Show/Hide passoword ======== */
    function showHidePassword(selector){
        let elem = document.querySelectorAll(selector);
        if(elem.length > 0){
            elem.forEach(item => {
            item.addEventListener("click", function(e){
                e.preventDefault();
                let target = document.getElementById(item.getAttribute("href"));
                if(target.type == "password") {
                target.type = "text";
                item.classList.add("is-shown");
                }else{
                target.type = "password";
                item.classList.remove("is-shown");
                }
            });

            });
        }
    }

    showHidePassword(".password-toggle");

    /*==============File upload =============== */
    function fileUpload(selector) {
    let elem = document.querySelectorAll(selector);
    if(elem.length > 0) {
        elem.forEach(item => {
        item.addEventListener("change", function(){
            var target = document.getElementById(item.dataset.target);
            var allowedExtensions  = ["jpg", "png", "gif", "webp", "mp4", "mp3"];
            var fileExtension  = this.value.split(".").pop();
            var lastDot = this.value.lastIndexOf('.');
            var ext = this.value.substring(lastDot + 1);
            var extTxt = target.value = ext;

            if(!allowedExtensions.includes(fileExtension)) {
            alert(extTxt + " file type not allowed, Please upload jpg, png, gif, webp, mp4 or mp3 file");
            target.innerHTML = "Please upload jpg, png, gif, webp, mp4 or mp3 file";
            }else {
            target.innerHTML = item.files[0].name;
            }
        })
        })
    }
    }

    fileUpload(".file-upload-input");

    /*  ============== Unlock once purchased Checkbox switcher ============= */
    function checkboxSwitcher(selector) {
    let elem = document.querySelectorAll(selector);
    if(elem.length > 0) {
        elem.forEach(item => {
        item.addEventListener("change", function(){
            let target = document.getElementById(item.dataset.target);
            if(this.checked) {
            target.classList.add("is-shown");
            }else {
            target.classList.remove("is-shown");
            }
        });
        });
    }
    }

    checkboxSwitcher(".checkbox-switcher");


  },
 

}
</script>