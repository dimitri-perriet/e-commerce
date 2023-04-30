<template>
    <div class="container">
        <h2>Mon Panier</h2>
        <div class="content">
            <el-scrollbar height="500px">
                <template v-if="!commerceStore.cart.length">
                    <el-empty description="Votre panier est vide"/>
                </template>
                <template v-else>
                    <div :key="i" v-for="(item, i) in commerceStore.cart" class="item">
                        <div class="del">
                            <el-popconfirm
                                confirm-button-text="Oui"
                                cancel-button-text="Non"
                                :icon="Delete"
                                icon-color="#626AEF"
                                title="Etes-vous sûr ?"
                                @confirm="deleteItem(i)"
                            >
                                <template #reference>
                                    <el-button type="danger" :icon="Delete" circle/>
                                </template>
                            </el-popconfirm>
                        </div>
                        <div class="img">
                            <el-image :src="item.img" fit="contain" style="width: 80px; height: 80px;"></el-image>
                        </div>
                        <div class="title">
                            {{ item.name }}
                        </div>
                        <div class="qty">
                            <el-input-number v-model="item.qty" :min="1" :max="10"/>
                        </div>
                        <div class="price">
                            {{ item.price }}€
                        </div>
                    </div>
                </template>
            </el-scrollbar>
            <el-divider/>
            <div class="total">
                <h3>Total</h3>
                <el-text size="large">{{ commerceStore.total }} €</el-text>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Delete } from "@element-plus/icons-vue";
import { useCommerceStore } from "@/store/CommerceStore";
const commerceStore = useCommerceStore();

function deleteItem(i) {
    commerceStore.deleteItem(i)
}
</script>

<style>
html, body {
    overflow-x: hidden;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.content {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-top: 20px;
    border-top: 1px solid #ccc;
    padding-bottom: 10px;
}

.del {
    margin-right: 10px;
}

.img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    object-fit: cover;
}

.img img{
    object-fit: contain;
}

.title {
    width: 200px;
    margin-right: 10px;
}

.price {
    width: 100px;
    margin-right: 10px;
}

.qty {
    flex: 1;
}

</style>

<style scoped>
 .total {
       display: flex;
       flex-direction: column;
       place-items: flex-end;
    width: 97%;
   }

 .total .el-text {
     place-self: flex-end;
 }

</style>