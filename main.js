const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const des = ref('Park');
        const image = ref('./assets/images/socks_green.jpg');
        const link = ref('http://www.camt.cmu.ac.th'); // Define the link URL here
        let instock = ref(true);
        const inventory = ref(100);
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester',
            'Sizes: S, M, L' // Added sizes information
        ]);
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
        ]);
        const cart = ref(0);

        function addToCart() {
            cart.value += 1;
        }

        function updateImage(variantImage) {
            image.value = variantImage;
        }

        function toggleStock() {
            instock.value = !instock.value;
        }

        const onsale = ref(true); // Boolean to indicate if product is on sale

        return {
            product,
            des,
            image,
            instock,
            inventory,
            details,
            variants,
            link,
            onsale,
            cart,
            addToCart,
            updateImage,
            toggleStock
        };
    }
}).mount('#app');
