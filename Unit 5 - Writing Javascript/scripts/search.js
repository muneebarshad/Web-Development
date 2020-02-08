
hideSearchResults();

//Initilize array to store all the products. Acts like a database for all the products.

var products = [];

//Construct for the product that consists of category, productName, description and 4 tags attached to each product

class product {
  constructor(category, productName, description, tag1,tag2,tag3,tag4,image,uri) {
    this.category = category.toLowerCase();
    this.productName = productName;
    this.description = description;
    this.tag1 = tag1.toLowerCase();
    this.tag2 = tag2.toLowerCase();
    this.tag3 = tag3.toLowerCase();
    this.tag4=tag4.toLowerCase();
    this.image =image;
    this.uri = uri;
  }
}


// function to create a product and add it to the products list
//https://stackoverflow.com/questions/31180331/loop-through-each-new-object-from-constructor
function addProduct(category, productName, description, tag1,tag2,tag3,tag4,image,uri){
  var newproduct = new product(category, productName, description, tag1,tag2,tag3,tag4,image,uri);
  products.push(newproduct);
}

function hideSearchResults(){
  var searchResults = document.getElementById("searchResults");
  searchResults.style.display = "none";
}

function hideMainPage(){
  var main = document.getElementById("hidden");
  main.style.display = "none";
}


function showMainPage(){
  var main = document.getElementById("hidden");
  main.style.display = "block";
}

//Code used from: https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('btnSearch').click();
        return false;
    }
    return true;
}

//Create prodcuts from the website
addProduct("skincare","Retinol Moisturizer","GOLDFIX 2.5% Retinol Moisturizer with SPF 50+ with Hyaluronic Acid, Vitamin B5, Shea Butter - Best All in One Cream And Sun Protection to Help Reduces Appearance of Fine Lines and Crow's Feet","retinol", "moisturizer","antiaging","antiwrinkle","Images/retinol_1.jpg","ProductRetinol.html");
addProduct("skincare","Blackhead Mask","GoldFix Blackhead Remover Peel Off Mask","Blackhead ", "Mask","antiaging","Acne","Images/blackhead_1.jpg","ProductBlackhead.html");
addProduct("leather","Men wallet","Handmade Men’s Leather Wallet in Brown, 100% Leather","men", "brown","wallets","wallet","Images/wallet_1.jpg","ProductWallet.html");


//Search function to search for products on the websuite
function search(searchedItem){
  var search_results =[];
  //The string searched in converted to lower case since we are dealing everything in lowercase
  searchItem = searchedItem.toLowerCase();

  //Items searched can be more than 2 words. Therfore we split them so we can search for each word individually
  var searchItems = searchItem.split(" ");

  //outer loop search for each product
  for(i=0; i < products.length; i++){
    //inner loop search for each word inpputted in the search engine. Eg: if we search retinol mositurizer, it will search for retionol and mositurizer sepeartely
    for(j =0; j < searchItems.length; j++){

      if((products[i].category.includes(searchItems[j])) || (searchItems[j]  === products[i].productName) || (searchItems[j]  === products[i].tag1) || (searchItems[j]  === products[i].tag2) || (searchItems[j]  === products[i].tag3) || (searchItems[j]  === products[i].tag4) ){
        //console.log("product found : " + products[i].productName);
        search_results.push(products[i]);
        //console.log(search_results.length);
        break;
      }
    }
  }


  return search_results;
}



function submit_search(){


  var pevSearchResults = document.getElementsByClassName("product");
  var pevSearchResultsLength = pevSearchResults.length;
  for(j=0; j<pevSearchResultsLength; j++){
    pevSearchResults[0].remove();
  }

  var pevSearchResults = document.getElementsByClassName("result");
  var pevSearchResultsLength = pevSearchResults.length;
  for(j=0; j<pevSearchResultsLength; j++){
    pevSearchResults[0].remove();
  }

  var searchItem= document.getElementById("search").value;
  document.getElementById("search").value ="";
  if(searchItem){
    var search_results = search(searchItem);
    hideMainPage();


    var result = document.createElement("p");
    result.className="result";
    result.innerText = search_results.length + " results shown for '" + searchItem+"'";
    document.getElementById("all_Prodcuts").appendChild(result);


    showSearchResults(search_results);
    var searchResults = document.getElementById("searchResults");
    searchResults.style.display = "block";
  }

  else{
    hideSearchResults();
    showMainPage();
  }

}

function showSearchResults(search_results){


  for(i =0; i < search_results.length; i++){
    var product = document.createElement("div");
    product.className = "product";

    var img = document.createElement("IMG");
    img.setAttribute("src", search_results[i].image);
    img.setAttribute("width", "250");
    img.setAttribute("height", "233");
    img.setAttribute("alt", search_results[i].productName);
    product.appendChild(img);


    var product_description = document.createElement("div");
    product_description.className = "product-description";

    var title = document.createElement("h3");
    var title_text = document.createElement("a");
    title_text.setAttribute('href', search_results[i].uri);

    var desc = document.createElement("p");

    desc.innerText = search_results[i].description;
    title_text.innerText = search_results[i].productName;
    title.appendChild(title_text);
    product_description.appendChild(title);
    product_description.appendChild(desc);
    product.appendChild(product_description);
    document.getElementById("all_Prodcuts").appendChild(product);

  }

}
