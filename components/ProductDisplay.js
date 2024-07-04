const productDisplay = {

    template:
    /*html*/
    `

<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :src="image">
        </div>
    </div>
    
    <div class="product-info">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
        <a :href="productName">link</a>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
        <p v-else>Out of Stock</p>
        <p>shipping: {{shipping}}</p>
        
        <product-details :details = "details"></product-details>

        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
        </div>

        <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>
        <button class="button" @click="changeStatus">Change Stock</button>
        <button class="button" @click="removeFromCart">Remove from Cart</button>

    </div>
</div>

    `,
    props:{
        premium: Boolean
    },
    setup(props, { emit }){

        const shipping = computed(() =>{
            if(props.premium){
                return 'Free'
            } else {
                return 30
            }
        })

        // const product = ref('Socks')
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('Boots is a cosmetics shop')
        // const image = ref('./assets/images/socks_green.jpg')
        const productName = ref('http://www.camt.cmu.ac.th')
        // const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])

        const variants = ref([
            {id: 2234, color:'green', image:'./assets/images/socks_green.jpg', quantity:50},
            {id: 2235, color:'blue', image:'./assets/images/socks_blue.jpg', quantity:0}
        ])

        const selectedVariant = ref(0)

        function updateVariant(index){
            selectedVariant.value = index;
        }

        const image = computed(() =>{
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() =>{
            return variants.value[selectedVariant.value].quantity
        })
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)

        function addToCart(){
            emit('add-to-cart', variants.value[selectedVariant.value].id)
        }

        function updateImage(variantImage){
            image.value = variantImage
        }

        function changeStatus(){
            inStock.value = !inStock.value
            console.log(inStock)
        }

        function removeFromCart(){
            emit('remove-from-cart',variants.value[selectedVariant.value].id)
        }

        const title = computed(() =>{
            return brand.value + ' ' +product.value
        })

        const salesStatus = computed(() =>{
            if(onSale.value){
                return brand.value + ' ' + product.value + ' is on Sale.'
            }
            else{
                return
            }
        })

        return{
            title,
            description,
            image,
            productName,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            changeStatus,
            updateVariant,
            salesStatus,
            shipping,
            removeFromCart
        }
    }
}