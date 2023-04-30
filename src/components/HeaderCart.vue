<template>
    <nav v-if="this.$route.path === '/'" style="justify-content: flex-end">
        <router-link v-if="this.$route.path !== '/'" to="/"> <el-icon><Back /></el-icon> Nos produits</router-link>
        <el-icon @click.prevent="toggleCart" :size="25">
            <el-badge :value="commerceStore.cart.length" class="cart-icon">
                <shopping-cart/>
            </el-badge>
        </el-icon>
    </nav>
    <nav v-else>
        <router-link v-if="this.$route.path !== '/'" to="/"> <el-icon><Back /></el-icon> Nos produits</router-link>
        <el-icon @click.prevent="toggleCart" :size="25">
            <el-badge :value="commerceStore.cart.length" class="cart-icon">
                <shopping-cart/>
            </el-badge>
        </el-icon>
    </nav>
    <div :class='{open: cart}' id="cart">
        <span @click="toggleCart" class="close"><el-icon><CloseBold /></el-icon></span>
        <div class="container">
            <h2>Mon Panier</h2>
            <div class="content">
                <el-scrollbar height="600px">

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
                                <el-image :src="item.img" fit="contain"></el-image>
                            </div>
                            <div class="title">
                                {{ item.name }}
                            </div>
                            <div class="price">
                                {{ item.price }}€
                            </div>
                            <div class="qty">
                                <el-input-number v-model="item.qty" :min="1" :max="10"/>
                            </div>
                        </div>
                    </template>
                </el-scrollbar>
                <el-divider/>
                <div class="footer">

                    <el-button @click="HandleClick" type="primary" plain>Accéder au panier</el-button>
                        <div class="total">
                    <h3>Total</h3>
                    <el-text size="large">
                        {{ commerceStore.total }} €
                    </el-text>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {useCommerceStore} from "@/store/CommerceStore";
import {ref} from 'vue'
import {Delete, Back, CloseBold, ShoppingCart} from '@element-plus/icons-vue'
import router from "@/router";


const commerceStore = useCommerceStore();
const cart = ref(null)

function toggleCart() {
    cart.value ? cart.value = null : cart.value = 'open'

}

function deleteItem(i) {
    commerceStore.deleteItem(i)
}

function HandleClick() {
    cart.value = null
    router.push('/cart')
}
</script>


<style>

#cart {
    width: 100%;
    max-width: 600px;
    position: fixed;
    height: 100vh;
    right: -100vw;
    z-index: 12;
    top: 0;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    transition: right .5s;
    box-shadow: 0 3px 30px 0 #409eff;
    border-radius: 30px 0 0 30px;
}


#cart.open {
    right: 0;
}


#cart .container {
    margin: 30px;
}

#cart .container .total {
    position: absolute;
    right: 20px;
    bottom: 30px;
}

#cart .close {
    cursor: pointer;
    position: absolute;
    left : 30px;
    top : 60px;
}

#cart .container .content {
    margin-top: 30px;
}

#cart .container .content .item,
#cart .container .content .item .qty {
    display: flex;
}

#cart .container .content .item {
    margin-block: 10px;
}

#cart .container .content .item .qty {
    gap: 10px;
}

#cart .content .item img {
    height: 100px;
    width: 100px;
}

#cart .container .content .item > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.el-popconfirm {
font-family: "Helvetica Neue";
}

.qty {
    width: 100px;
    margin-right: 20px;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav {
    display: flex;
    justify-content: space-between;
}

</style>