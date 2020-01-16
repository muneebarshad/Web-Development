//Initilize array to store all the products. Acts like a database for all the products.
var products = [];

//Construct for the product that consists of category, productName, description and 4 tags attached to each product
function product(category, productName, description, tag1,tag2,tag3,tag4) {
  this.category = category.toLowerCase();
  this.productName = productName.toLowerCase();
  this.description = description.toLowerCase();
  this.tag1 = tag1.toLowerCase();
  this.tag2 = tag2.toLowerCase();
  this.tag3 = tag3.toLowerCase();
  this.tag4=tag4.toLowerCase();
}

// function to create a product and add it to the products list
//https://stackoverflow.com/questions/31180331/loop-through-each-new-object-from-constructor
function addProduct(category, productName, description, tag1,tag2,tag3,tag4){
  var newproduct = new product(category, productName, description, tag1,tag2,tag3,tag4);
  products.push(newproduct);
}

//Create prodcuts from the website
addProduct("skincare","retinol moisturizer","GOLDFIX 2.5% Retinol Moisturizer with SPF 50+ with Hyaluronic Acid, Vitamin B5, Shea Butter - Best All in One Cream And Sun Protection to Help Reduces Appearance of Fine Lines and Crow's Feet","retinol", "moisturizer","antiaging","antiwrinkle");


//Search function to search for products on the websuite
function search(searchItem){
  var i;
  var j;

  //The string searched in converted to lower case since we are dealing everything in lowercase
  searchItem = searchItem.toLowerCase();

  //Items searched can be more than 2 words. Therfore we split them so we can search for each word individually
  var searchItems = searchItem.split(" ");

  //outer loop search for each product
  for(i=0; i < products.length; i++){
    //inner loop search for each word inpputted in the search engine. Eg: if we search retinol mositurizer, it will search for retionol and mositurizer sepeartely
    for(j =0; j < searchItems.length; j++){

      if((products[i].category.includes(searchItems[j])) || (searchItems[j]  === products[i].productName) || (searchItems[j]  === products[i].tag1) || (searchItems[j]  === products[i].tag2) || (searchItems[j]  === products[i].tag3) || (searchItems[j]  === products[i].tag4) ){
        console.log("product found");
        console.log(products[i].productName);
        console.log(products.length);
        break;
      }
      else{
        products.splice(i,1);
        console.log("Product not found");
        console.log(products.length);

      }
    }

  }
}


search("skin");
