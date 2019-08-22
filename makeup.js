const baseURL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=';
let url;


 const searchTerm = document.querySelector('.search');
 const searchForm = document.querySelector('form');
 const submitBtn = document.querySelector('.submit'); 

//const products = document.querySelector('.products');

const makeup = document.querySelector('.products'); //tells where to display the results, refers to the HTML div "products"

const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);



function fetchResults(e){ //e = short for event
     e.preventDefault();
    url = baseURL + searchTerm.value;
    console.log("URL:", url);

    fetch(url) //Start of main fetching code
    .then(function(result) {
        console.log(result)
        return result.json();
    }).then(function(json) {
        // console.log(json);
        displayResults(json);
    });
                       //end of main fetching code
};
function displayResults(json) { //function called to display the results of the query
    
    console.log("DisplayResults", json);
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    let headerProduct = document.createElement('th');
    let headerPType = document.createElement('th');
    let headerPrice = document.createElement('th');
    let headerImage = document.createElement('th');

 //   headerProduct.innerText= "Product Name";
 //   headerPType.innerText= "Product Type";
 //   headerPrice.innerText= "Price";
    headerImage.innerText= "Photo";

    makeup.appendChild(table);
    table.appendChild(headerRow);
    headerRow.appendChild(headerProduct);
    headerRow.appendChild(headerPType);
    headerRow.appendChild(headerPrice);
    headerRow.appendChild(headerImage);


    let productResults = json
    if(productResults.length === 0) { // checking to see if any results from search result
        console.log("No results");
    } else { 
        for(let i = 0; i < productResults.length; i++) {
            
            let productResult = productResults[i];
            let productRow = document.createElement('td');
            let pTypeRow = document.createElement('td');
            let priceRow = document.createElement('td');
            let imageRow = document.createElement('td');
            let imageBox = document.createElement('img');
            let newRow = document.createElement('tr');
            
            
            productRow.innertext = productResult.name;
            pTypeRow.innertext = productResult.product_type;
            priceRow.innertext = productResult.price;
            imageBox.src = productResult.image_link;
            
            makeup.appendChild(newRow);
            makeup.appendChild(productRow);
            makeup.appendChild(pTypeRow);
            makeup.appendChild(priceRow);
            makeup.appendChild(imageRow);
            makeup.appendChild(imageBox);
            

            console.log(productResult);
            

            

        };
    };
};