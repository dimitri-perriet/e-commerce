<template>
  <div class="home">
      <h1>Découvrez nos produits</h1>
      <el-row class="productRow">
          <el-col :body-style="{ width: '50px' }" :span="12" v-for="product in commerceStore.products" :key="product.productId">
              <ProductCard :product="product"/>
          </el-col>
      </el-row>
  </div>
</template>

<script>

import { useCommerceStore } from "@/store/CommerceStore";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: 'HomeView',
  components: {
      ProductCard
  },
  setup() {
    const commerceStore = useCommerceStore();

    commerceStore.getProducts("/products.json")

    return { commerceStore };
  }
}

</script>

<style>
.productRow {
    margin: 0 auto;
    width: 50%;
}
</style>
