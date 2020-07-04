Vue.component("product", {
  props: {
    premium: { type: Boolean, required: true },
  },
  template: `<div class="product">
        <div class="product-image">
          <img :src="image" :alt="description" />
        </div>
        <div class="product-info">
          <h1>{{title}}</h1>
          <h2>{{brand}}</h2>
          <p>User is premium: {{premium}}</p>
          <p>Shipping is {{shipping}}</p>
          <product-details :discount="30"></product-details>
          <p v-if="inStock">In Stock</product-details>
          <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
          <p v-show="onSale">On Sale</p>
          <!-- <p v-else-if="inventory <= 10 && inventory >0">Almost sold out!</p>-->
        </div>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div
          v-for="(variant,index) in variants"
          :key="variant.variantId"
          class="color-box"
          :style="{backgroundColor: variant.variantColor}"
          @mouseover="updateProduct(index)"
        ></div>
        <div v-for="size in sizes" :key="size.sizeId">
          <h1>{{size.sizeNum}}</h1>
        </div>
        <button
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="{disabledButton: !inStock}"
        >
          😍 Add to Cart
        </button>
        <button @click="deleteFromCart">💔 Remove from Cart</button>
       <product-tab :reviews="reviews"></product-tab>
        
      </div>`,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      description: "A pair of warm, fuzzy socks",
      selectedVariant: 0,
      inventory: false,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./socks-green.jpg",
          variantQuantity: 10,
          variantOnSale: false,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./socks-blue.jpg",
          variantQuantity: 0,
          variantOnSale: true,
        },
      ],
      reviews: [],
      sizes: [
        { sizeId: 1, sizeNum: 30 },
        { sizeId: 2, sizeNum: 35 },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    deleteFromCart() {
      this.$emit(
        "remove-from-cart",
        this.variants[this.selectedVariant].variantId
      );
    },
    addReview(productReview) {
      this.reviews.push(productReview);
      console.log(this.reviews);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].variantOnSale;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    },
  },
});
Vue.component("product-details", {
  props: {
    discount: {
      type: Number,
      required: true,
    },
  },
  template: `<h1>{{discount}}%</h1>`,
});
Vue.component("product-review", {
  template: `<div>
  <form class="review-form" @submit.prevent="onSubmit">
  <p v-if="errors.length"><b>Please correct the following error(s):</b>
  <ul><li v-for="error in errors">{{error}}</li></ul></p>

<p><label for="name">Name:</label><input id="name" v-model="name"></p>
<p><label for="review">Review:</label><textarea id="review" v-model="review" ></textarea></p>
<p><label for="rating">Rating:</label><select id="rating" v-model.number="rating">
<option>5</option>
<option>4</option>
<option>3</option>
<option>2</option>
<option>1</option>
</select></p>
<p>Would you recommond this product?</p>
<label for="yes">Yes</label><br />
<input type="radio" name="question" id="yes" value="yes">
<label for="no">No</label><br />
<input type="radio" name="question" id="no" value="no">
<label for="not sure">Not sure</label><br />
<input type="radio" name="question" id="not sure" value="not sure">
<p><input type="submit" value="Submit"></p>
</form>

</div>
`,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
        };
        this.$emit("review-submitted", productReview);
        this.name = null;
        this.review = null;
        this.rating = null;
        this.errors = [];
      } else {
        if (this.errors) {
          this.errors = [];
          if (!this.name) this.errors.push("Name required.");
          if (!this.review) this.errors.push("Review required.");
          if (!this.rating) this.errors.push("Rating required.");
        } else {
          if (!this.name) this.errors.push("Name required.");
          if (!this.review) this.errors.push("Review required.");
          if (!this.rating) this.errors.push("Rating required.");
        }
      }
    },
  },
});
Vue.component("product-tab", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div>
    <span class="tab" 
    :class="{activeTab: selectedTab === tab}"
    v-for="(tab,index) in tabs" 
    :key="index" 
    @click="selectedTab = tab">{{tab}}</span>
    <p>{{selectedTab}}</p>
    <table>
        <tr> 
        <th>Name</th>
        <th>Review</th>
        <th>Rating</th>
        </tr>
        <tr> 
        <td ><p v-for="review in reviews">{{review.name}}</p></td>
        <td ><p v-for="review in reviews">{{review.review}}</p></td>
        <td ><p v-for="review in reviews">{{review.rating}}</p></td>
        </tr>
       
        </table>
        <product-review @review-submitted="addReview"></product-review>
    </div>`,
  data() {
    return {
      tabs: ["Reviews", "Make a review"],
      selectedTab: "Reviews",
    };
  },
});
var app = new Vue({
  el: "#app",
  data: {
    premium: false,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
      console.log(this.cart);
    },
    removeFromCart(id) {
      for (let i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
        }
      }
    },
  },
});
