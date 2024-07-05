const reviewList = {
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews :</h3>

        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars <br/>
                "{{ review.review }}" <br/>
                <span v-if="review.recommending">I recommend this</span>
                <span v-else>I don't recommend this</span>
            </li>
        </ul>
    </div>
    `,
props: {
    reviews: {
        type: Array
    },

    setup(props){
        const reviews = props.reviews
        return {
            reviews
        }
        }
    }
}