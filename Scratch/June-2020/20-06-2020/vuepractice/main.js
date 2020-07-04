/* note: The boilerplate for vue is
  var app = new Vue({
    el: "#app",  note: el: is corresponding to the id in html
    data: {               note: we can directly use the variables in html from data with {{}}
      product: "Book",        note: for instance, <h1>{{product}}</h1>
      description: "The beginner's guide for Vue",
      link: "https://www.google.com"
    }
})
*/
var app = new Vue({
  el: "#app",
  data: {
    product: "Book",
    content: "The beginner's guide for Vue",
    link: "https://www.google.com/",
    inStock: true,
    onSale: true,
    brandNew: true,
    books: [
      {
        bookId: 1,
        bookName: "Lion King",
      },
      {
        bookId: 2,
        bookName: "The Lord of Ring",
      },
      {
        bookId: 3,
        bookName: "Transformer",
      },
    ],
  },
});

Vue.component("componentName", {
  props: {},
  data() {
    return {};
  },
  template: `<div></div>`,
});
