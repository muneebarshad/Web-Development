
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

//Create prodcuts from the website and adds it to the array
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

      //If seearchedItem is matched then add the item to the array
      if((products[i].category.includes(searchItems[j])) || (searchItems[j]  === products[i].productName) || (searchItems[j]  === products[i].tag1) || (searchItems[j]  === products[i].tag2) || (searchItems[j]  === products[i].tag3) || (searchItems[j]  === products[i].tag4) ){
        search_results.push(products[i]);
        break;
      }
    }
  }

//Return the array for search results
  return search_results;
}

//Get the search button
var searchButton = document.getElementById("btnSearch");


//When search button is clicked
searchButton.onclick = function (){

//Remove any search results from previous searhc
  var pevSearchResults = document.getElementsByClassName("product");
  var pevSearchResultsLength = pevSearchResults.length;
  for(j=0; j<pevSearchResultsLength; j++){
    pevSearchResults[0].remove();
  }

  //Remove search reuslt text from previous search
  var pevSearchResults = document.getElementsByClassName("result");
  var pevSearchResultsLength = pevSearchResults.length;
  for(j=0; j<pevSearchResultsLength; j++){
    pevSearchResults[0].remove();
  }

  //Get the searched item
  var searchItem= document.getElementById("search").value;
  document.getElementById("search").value ="";
  //If searchItem ecists then search for the products and hide the main page
  if(searchItem){
    var search_results = search(searchItem);
    hideMainPage();

    //Add HTML DOM the heading the so search results
    var result = document.createElement("p");
    result.className="result";
    result.innerText = search_results.length + " results shown for '" + searchItem+"'";
    document.getElementById("all_Prodcuts").appendChild(result);

    //Call showSearchResults function that will create a display for the products
    showSearchResults(search_results);
    //Show the results page
    var searchResults = document.getElementById("searchResults");
    searchResults.style.display = "block";
  }

  //If nothing is searched then hide the reuslt page and reset it to main page
  else{
    hideSearchResults();
    showMainPage();
  }

}


//showSearchResults function that will create a display for the products
function showSearchResults(search_results){

//FOr each products in the resukt array
  for(i =0; i < search_results.length; i++){
    //create a div
    var product = document.createElement("div");
    product.className = "product";
    //add id to div
    product.setAttribute("id","product"+i);

    //Create image and add it to div
    var img = document.createElement("IMG");
    img.setAttribute("src", search_results[i].image);
    img.setAttribute("width", "250");
    img.setAttribute("height", "233");
    img.setAttribute("alt", search_results[i].productName);
    product.appendChild(img);

    //Create another div for product description
    var product_description = document.createElement("div");
    //Add class product-description to follow the markup
    product_description.className = "product-description";

//Add title to the product with a direct link to the product page
    var title = document.createElement("h3");
    var title_text = document.createElement("a");
    title_text.setAttribute('href', search_results[i].uri);

    //Create element p and add product description
    var desc = document.createElement("p");
    desc.innerText = search_results[i].description;

    title_text.innerText = search_results[i].productName;

    //Append all tags to the parentNode
    title.appendChild(title_text);
    product_description.appendChild(title);
    product_description.appendChild(desc);
    product.appendChild(product_description);
    //Add the product
    document.getElementById("all_Prodcuts").appendChild(product);
  }

}

//-----------------------------  Helpful functions --------------------------------------

// The script starts by hiding any search results
function hideSearchResults(){
  var searchResults = document.getElementById("searchResults");
  searchResults.style.display = "none";
}

//Hides the main pages
function hideMainPage(){
  var main = document.getElementById("mainPage");
  main.style.display = "none";
}

//Shows the main page
function showMainPage(){
  var main = document.getElementById("mainPage");
  main.style.display = "block";
}

//Code used from: https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
//Click the search button when Enter key is pressed
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
