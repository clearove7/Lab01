const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const des = ref('Park');
        const image = ref('./assets/images/socks_green.jpg');
        const link = ref('http://www.camt.cmu.ac.th'); // Define the link URL here
        const inStock = ref(true);
        const inventory = ref(100);
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);
        const variants = ref([
            { id: 2234, color: 'green' },
            { id: 2235, color: 'blue' }
        ]);
        const cart = ref(0);
        const onsale = ref(true); // Boolean to indicate if product is on sale

        return {
            product,
            des,
            image,
            inStock,
            inventory,
            details,
            variants,
            cart,
            link,
            onsale
        };
    }
}).mount('#app');
