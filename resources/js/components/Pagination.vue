<template>
  {{ pagination }}
  <div class="pagination">
    <ul class="pagination__list">
      <li v-if="pagination.current_page !== 1 && btnVisible === true">
        <a class="pagination__item" @click.prevent="getProducts(pagination.current_page - 1)" href="#">prev</a>
      </li>
      <li v-for="link in pagination.links" :key="link">
        <template v-if="Number(link.label) && 
          (pagination.current_page - link.label < 2 && pagination.current_page - link.label > -2) ||
          Number(link.label) === 1 ||
          Number(link.label) === pagination.last_page">
            <a class="pagination__item" @click.prevent="getProducts(link.label)" href="#" :class="{'pagination__link--active': link.active == true}">{{ link.label }}</a>
        </template>
        <template v-if="Number(link.label) && pagination.current_page !== 3 && 
          pagination.current_page - link.label === 2 ||
          Number(link.label) && pagination.current_page !== pagination.last_page - 2 
          && pagination.current_page - link.label === -2
          ">
        <li>...</li>
      </template>
      </li>
        <li v-if="pagination.current_page !== pagination.last_page && btnVisible === true">
          <a class="pagination__item" @click.prevent="getProducts(pagination.current_page + 1)" href="#">next</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'vPagination',
        props: {
            btnVisible: { // Кнопки next-prev
                type: Boolean,
                default: false 
            },
            page: { // Страницы
                type: Number,
                default: 1,
            },
            pagination: {
                type: Array,
            },
        },
        methods: {
            getProducts(page) {
                this.$emit('page', page)
            }
        }
    }
</script>

<style lang="scss">
  @import '../../sass/_variables.scss';
    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .list-enter-active,
    .list-leave-active {
        transition: opacity 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
    }
    .pagination__list {
        display: flex;
        text-align: center;
    }
    .pagination__item {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 25px;
        background: transparent;
        transition: 200ms linear;
        color: $clr-white;
    }
    .pagination__item:hover {
        color: var(--clr-main);
        transition: 200ms linear;
    }
    .pagination__link--active {
        background-color: var(--clr-violet);
        color: var(--clr-white) !important;
        border-radius: 3px;
        text-align: center;
        width: 28px;
    }
</style>