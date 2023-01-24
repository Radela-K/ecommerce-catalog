// fetch('https://fakestoreapi.com/products/2', {
//         method: "GET",
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Parts that will be show off in the html page are ....
// Show cards contain items
function containerItemsInHtml(paramsItems) {
    return `
    <div class="card">
        <div class="cardTop">
            <img src=${paramsItems.image}>
            <h4>${paramsItems.title}</h4>
           <div class="boxP">
           <p>${paramsItems.description}</p>
           </div>
        </div>
        <div class="cardBottom">
            <button>Checkout</button>
        </div>
    </div>  
    `

}

// Request data from API
// Fetch is based on async and await
async function requestApiData(paramsUrl, paramsMethod) {
    await fetch(paramsUrl, {
            method: paramsMethod,
        })
        // Handle success
        .then(response => response.json()) // convert to json
        .then(response => { // (2x .then) to get object from promise form
            // Feel free to threat your response of data in here ...
            // document.getElementById("abc").innerHTML =
            //     `<img src="${response.image}">`
            // let containerItems = "";
            response.forEach(paramsItems => {
                // containerItems += containerItemsInHtml(paramsItems);
                document.getElementById("idContainer").innerHTML += containerItemsInHtml(paramsItems);
            });
        })
        // Catch errors
        .catch(error => console.log(error));
}

// Calling requestApiData
let cleanPage = () => {
    document.getElementById("idContainer").innerHTML = "";
}

let showMenCategories = () => {
    console.log("ini men");
    cleanPage();
    requestApiData('https://fakestoreapi.com/products/category/men\'s clothing', 'GET');

};
let showWomenCategories = () => {
    console.log("ini women");
    cleanPage();
    requestApiData('https://fakestoreapi.com/products/category/women\'s clothing', 'GET');
};

document.getElementById("idMen").addEventListener("click", showMenCategories);
document.getElementById("idWomen").addEventListener("click", showWomenCategories);

// requestApiData(paramUrl, 'GET');