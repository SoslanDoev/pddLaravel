<template>
  <Transition name="examplegifs-trans" mode="out-in">
    <div class="examplegifs__inner" v-if="show === true" @click.stop='hideDialog'>
      <img :src="require(`@/assets/images/${name}`)" class="examplegifs__image" alt="Сортировка пузырьком">
    </div>
</Transition>
</template>

<script>
  export default {
    name: 'ExampleGifs',
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String,
        default: '',
      }
    },
    methods: {
      hideDialog() {
        this.$emit('update:show', false)
      }
    },
    mounted() {
      let da = this.name
      console.log(da)
    }
  }
</script>

<style lang="scss">
  @import '../../sass/_variables.scss';
  .examplegifs__inner {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 1000;
    height: 100%;
    background-color: $light-primary-color;
  }
  .examplegifs__image {
    width: 90%;
    height: 50%;
    object-fit: contain;
    filter: grayscale(50%);
    border-radius: 20px;
  }
  .bg-black .examplegifs__inner {
    background-color: $dark-secondary-color;
  }
  .examplegifs-trans-leave-active,
  .examplegifs-trans-enter-active {
    transition: $transition-default;
  }
  
  .examplegifs-trans-enter-from,
  .examplegifs-trans-leave-to {
      opacity: 0;
  }
</style>