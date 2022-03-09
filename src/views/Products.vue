<script setup>
import { ref, beforeCreate } from 'vue';
import ProductCard from './components/ProductCard.vue';
import getProducts from './../services/axios.js'
const products = ref(null)

beforeCreate(() => {
    getProducts()
        .then((res) => {
            products.value = res.json()
        })
})

</script>

<template>
    <div>
        <ProductCard v-for="product in products" :product="product" />
    </div>
</template>