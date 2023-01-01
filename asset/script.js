// const dataContain = {
//     msg: "hello vue fjkehkjdfghbkj!"
// }

// const v = new Vue({
//     el: '#app',
//     data: dataContain
// })

// fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=blush')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

Vue.component('main-component', {
    template: `
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
    </div>
    `
})