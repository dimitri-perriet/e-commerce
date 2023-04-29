<template>
            <el-card class="productCard">
                <img
                    :src="props.product.productPicture"
                    class="image"
                />
                <div style="padding: 14px">
                    <span>{{ props.product.productName }}</span>
                    <div class="bottom">
                        <time class="time">{{ props.product.productPrice*0.01 }}</time>
                        <el-button data-qty="1" :data-id="props.product.productId" :data-price="props.product.productPrice" :data-name="props.product.productName" :data-img="props.product.productPicture" @click="addToCart" type="primary" class="button">Ajouter au panier</el-button>
                    </div>
                </div>
            </el-card>
</template>

<script setup>

import { useCommerceStore} from "@/store/CommerceStore";

const commerceStore = useCommerceStore();

function addToCart(e){
    const item = e.target.dataset
    console.log(item)
    commerceStore.addToCart({id: item.id,name: item.name,img: item.img,price: Number(item.price*0.01),qty:1})
}
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

</script>

<style>
.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    height: 300px;
    margin: 0 auto;
    display: block;
}

.productCard{
    padding: 0;
    margin: 10px 20px;
}
</style>