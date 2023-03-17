<template>
  <Transition name="pagination__load-transition">
      <div class="pagination__load" v-if="visible == false">
          <div class="pagination__load-content"></div>
      </div>
  </Transition>
</template>

<script>
  export default {
    name: 'PaginationLoad',
    props: {
      visible: {
        type: Boolean, 
        default: false
      }
    }
  }
</script>

<style lang="scss">
  @import '../../sass/_variables.scss';
  .bg-black .pagination__load {
    background-color: $clr-main;
  }
  .pagination__load {
    position: fixed;
    background-color: $clr-white;
    width: 100%;
    inset: 0;
    height: 100%;
    display: block;
    z-index: 1500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bg-black .pagination__load-content {
    border: 5px solid $clr-main;
    border-top-color: $clr-white;
    background-color: $clr-main;
  }
  .pagination__load-content {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid $clr-white;
    border-top-color: $clr-main;
    background-color: $clr-white;
    transform: rotate(0deg);
    animation: anim-pagination__load 1s linear infinite;
  }
  @keyframes anim-pagination__load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .pagination__load-transition-enter-active,
  .pagination__load-transition-leave-active {
    transition: all $transition-default;
  }
  .pagination__load-transition-enter-from,
  .pagination__load-transition-leave-to {
    opacity: 0;
  }
</style>