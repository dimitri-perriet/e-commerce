import { defineStore } from 'pinia'

export const useCommerceStore = defineStore('commerce', {
    state: () => ({
        cart: [],
        products: [],
    }),
    actions : {
        getProducts(_path){
            fetch(_path)
            .then(res=>res.json())
            .then(data=>this.products=data)
        }
    }
})