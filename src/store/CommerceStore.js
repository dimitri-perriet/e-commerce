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
        },
        addToCart(_item){
            const i = this.cart.findIndex(i=>i.id===_item.id)
            i === -1 ? this.cart.push(_item) : this.cart[i].qty++
        },
        deleteItem(_index){
            this.cart.splice(_index, 1)
        }
    }
})