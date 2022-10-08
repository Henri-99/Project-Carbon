<template>
    <ul class="menu-list ms-lg-auto">
          <li class="menu-item">
              <a class="menu-item" v-for="nav in SectionData.headerData.menuList.navList" :key="nav.id"><router-link :to="nav.path" class="menu-link">{{ SectionData.headerData.menuList.title }}</router-link></a>
          </li>
          <li class="menu-item">
              <a class="menu-item" v-for="nav in SectionData.headerData.menuList2.navList" :key="nav.id"><router-link :to="nav.path" class="menu-link">{{ SectionData.headerData.menuList2.title }}</router-link></a>
          </li>
          <li class="menu-item has-sub">
              <a class="menu-item" v-for="nav in SectionData.headerData.menuList3.navList" :key="nav.id"><router-link :to="nav.path" class="menu-link">{{ SectionData.headerData.menuList3.title }}</router-link></a>
          </li>
          <li class="menu-item has-sub">
              <a class="menu-item" v-for="nav in SectionData.headerData.menuList4.navList" :key="nav.id"><router-link :to="nav.path" class="menu-link">{{ SectionData.headerData.menuList4.title }}</router-link></a>
          </li>
     </ul>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'MenuList',
  data () {
    return {
      SectionData
    }
  }
}
</script>
