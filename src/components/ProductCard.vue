<template>
            <el-card class="productCard">
                <el-image style="height: 300px; margin: 0 auto; display: block" :src="props.product.productPicture" fit="contain"></el-image>

                <div style="padding: 14px">
                    <el-text type="info">{{ props.product.productEAN }}</el-text>
                     <br>

                    <span>{{ props.product.productName }}</span>
                </div>
                <div class="bottom">
                    <el-text tag="b">{{ props.product.productPrice/100 }} €
                    </el-text>
                    <el-button data-qty="1" :data-id="props.product.productId" :data-price="props.product.productPrice" :data-name="props.product.productName" :data-img="props.product.productPicture" :data-ean="props.product.productEAN" @click="addToCart" type="primary"  :icon="ShoppingTrolley" circle class="button"/>
                </div>
            </el-card>
</template>

<script setup>

import { useCommerceStore} from "@/store/CommerceStore";
import { ElNotification } from 'element-plus'
import { ShoppingTrolley } from "@element-plus/icons-vue";


const commerceStore = useCommerceStore();

function addToCart(e){
    const item = e.currentTarget.dataset
    ElNotification({
        title: 'Produit ajouté au panier',
        message: 'Votre produit a été ajouté au panier',
        type: 'success',
        customClass: 'notification'

    })
    commerceStore.addToCart({id: item.id, ean: item.ean, name: item.name,img: item.img,price: Number(item.price*0.01),qty:1})
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
    position: absolute;
    bottom: 20px;
    width: 90%;
}

.button {
    padding: 0;
    min-height: auto;
}

.productCard{
    padding: 0;
    margin: 10px 20px;
    height: 470px;
    position: relative;
}

.notification{
    font-family: "Helvetica Neue";
    font-size: 12px;
}
</style>