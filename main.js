const app = Vue.createApp({
    template: `
    <div class="card-products products-container" >
    <div class="card"
    v-for="product in productComputed"
    :class="{ cart: product.isCart }"  
    @dblclick="onToggleCart($event,product)"
    >
        <img v-bind:src="product.thumbnail" alt="">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
    </div>

</div>
    `,
    data() {
        return {
            products: [
                {
                    thumbnail: './assets/1.jpg',
                    name: 'Sản phẩm A',
                    price: 1000,
                    isCart: false,
                },
                {
                    thumbnail: './assets/2.jpg',
                    name: 'Sản phẩm B',
                    price: 1200,
                    isCart: true,
                },
                {
                    thumbnail: './assets/3.jpg',
                    name: 'Sản phẩm C',
                    price: 1400,
                    isCart: false,
                },
                {
                    thumbnail: './assets/4.jpg',
                    name: 'Sản phẩm D',
                    price: 1600,
                    isCart: false,
                },
            ],
        }
    },
    methods: {
        onToggleCart(event, product) {
            product.isCart = !product.isCart;
        }
    },
    computed: {
        productComputed() {
          return  this.products.filter(product => product.price > 1200)
        }
    }
})

app.mount('#app');