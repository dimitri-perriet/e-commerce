import { defineStore } from 'pinia'

export const useCommerceStore = defineStore('commerce', {
    state: () => ({
        cart: [],
        products: [],
    })
})