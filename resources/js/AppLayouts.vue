<template>
  <PaginationLoad :visible="createdPage"></PaginationLoad>
  <router-view v-slot="{ Component, route }">
    <Transition name="transition__route" mode="out-in">
      <div :key="route.path">
        <component :is="Component"></component>
      </div>
    </Transition>
  </router-view>
</template>

<script>
  import PaginationLoad from '@/components/PaginationLoad.vue'
  export default {
    components: {
      PaginationLoad
    },
    data() {
      return {
        createdPage: false,
      }
    },
    mounted() {
      this.createdPage = false
      if (localStorage.getItem('bg') == 'true') {
        document.body.classList.add('bg-black')
      }
      setTimeout(() => {
        this.createdPage = true
      }, 500)
      // if (Boolean(localStorage.getItem('bg')) == true) {
      //   console.log('da')
      //   document.body.classList.add('bg-black')
      // }
    }
  }
</script>

<style lang="scss">
  @import '../sass/_variables.scss';
  .transition__route-enter-active,
  .transition__route-leave-active {
    transition: $transition-default;
  }
  .transition__route-enter-from,
  .transition__route-leave-to {
    opacity: 0;
  }
</style>