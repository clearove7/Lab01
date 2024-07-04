const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const brand = ref('SE 331');
        const des = ref('Park');
        const link = ref('http://www.camt.cmu.ac.th'); // Define the link URL here
        const instock = ref(true);
        const inventory = ref(100);
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester',
            'Sizes: S, M, L' // Added sizes information
        ]);
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ]);
        const selectedVariant = ref(0);
        const cart = ref(0);
        const onSale = ref(true); // Boolean to indicate if product is on sale

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        // Computed property to dynamically get the image URL based on selected variant
        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });

        // Computed property to dynamically check the stock status based on selected variant
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity > 0;
        });

        // Computed property for the product title
        const title = computed(() => {
            return brand.value + ' ' + product.value;
        });

        // Computed property to display sale message when onSale is true
        const saleMessage = computed(() => {
            if (onSale.value) {
                return `${brand.value} ${product.value} is on sale`;
            } else {
                return '';
            }
        });

        function addToCart() {
            cart.value += 1;
        }

        function updateImage(variantImage) {
            image.value = variantImage;
        }

        function toggleStock() {
            instock.value = !instock.value;
        }

        const imageClass = computed(() => ({
            'out-of-stock-image': !inStock.value
        }));

        return {
            title,
            des,
            image,
            instock,
            inventory,
            details,
            variants,
            link,
            onSale,
            cart,
            addToCart,
            updateImage,
            toggleStock,
            imageClass,
            updateVariant,
            saleMessage
        };
    }
}).mount('#app');
