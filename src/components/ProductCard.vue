<template>
            <el-card class="productCard">
                <img
                    :src="props.product.productPicture"
                    class="image"
                />
                <div style="padding: 14px">
                    <span>{{ props.product.productName }}</span>
                    <div class="bottom">
                        <time class="time">{{ props.product.productName }}</time>
                        <el-button type="primary" class="button">Ajouter au panier</el-button>
                    </div>
                </div>
            </el-card>
</template>

<script setup>

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