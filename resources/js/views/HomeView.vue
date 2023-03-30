<template>
  <div class="container">
    <vSidebar/>
    <main class="main" :class="{'active': $store.state.menuVisible == true}">
      <vTopBar/>
      <vCardList/>
      <vTest/>
      <!-- <vUserTable/> -->
    </main>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  // import vHeader from '@/components/Header.vue' // Header
  import vSidebar from '@/components/Sidebar.vue' // Aside
  import vTest from '@/components/Test.vue' // Aside
  import vTopBar from '@/components/TopBar.vue' // 
  import vCardList from '@/components/CardList.vue' // 
  import vUserTable from '@/components/UserTable.vue' // 
  // import vFooter from '@/components/Footer.vue' // Footer
  export default {
    // components: {vHeader, vSidebar, vFooter}
    components: {vSidebar, vTopBar, vCardList, vUserTable, vTest},
    mounted() {
      // Запуск функции из VUEX для получения специальностей
      this.GET_SPEC_API()
      // Запуск функции из VUEX для получения специальностей
    },
    methods: {
      // Получение функций из VUEX
      ...mapActions([
          'GET_SPEC_API'
      ]),      
      // Получение функций из VUEX
    }
  }
</script>

<style lang="scss">
  @import '../../sass/_variables.scss';
  .bg-black .main {
    background-color: $clr-main2;
    color: $clr-white;
    transition: $transition-default;
  }
  .main {
    position: absolute;
    overflow-y: auto;
    width: calc(100% - $aside-width);
    left: $aside-width;
    min-height: 100vh;
    padding: 0 175px 0 calc(175px - $aside-padding);
    transition: $transition-default;
    background-color: $clr-white;
    &.active {
      width: calc(100% - $aside-padding);
      left: $aside-padding;
    }
  }
  @media screen and (max-width: 1220px) {
    .main {
      padding: 0 20px;
    }
  }
  @media screen and (max-width: 850px) {
    .main {
      width: 100%;
      height: 100%;
      inset: 0;
    }
  }
</style>
