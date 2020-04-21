
//Show or close mini cart
function showCart(){
    var minicart = document.querySelector(".mini-cart-container");
    
    if(minicart.style.visibility === 'hidden'){
        minicart.style.visibility = 'visible';
    }
    else {
        minicart.style.visibility = 'hidden';
    }

}



// SHOPPING CART
function shoppingCart() {
// cart : Array
    var cart = [];
// Item : Object/Class
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count
    }

// addItemToCart : Function
    var cart_obj = {};

    //Add to cart object
    // cart_obj.addItemToCart = function(name,price,count) 
    
    cart_obj.addItemToCart = function(name,price,count) {

        //CHECK IF ITEM IS AN EXISTING ITEM IN TEH CART
        //IF TRUE THEN THE ITEM BECOMES THE ITEM IN THE CART
        var existingItem = null;
        for (var i=0; i<cart.length; i++) {
            if(cart[i].name == name){ 
                existingItem = cart[i];
                break;
            }
        }

        //IF NEW ITEM IS AN EXISTING ITEM THEN INCREMENT THE COUNT
        if (existingItem !== null) {
            existingItem.count++;
        } 
        else {
            var item = new Item(name,price,count);
            cart.push(item);
        }
    }

//SET COUNT FROM ITEMS
    cart_obj.setCountItem = function(name,count) {
        for(var i=0; i<cart.length; i++) {
            if(cart[i].name === name){ 
                cart[i].count = count;
                break;
            }    
        }
    }

//REMOVE ITEM FROM CART
    cart_obj.removeItemFromCart = function(name) {
        for(var item in cart) {
            if(cart[item].name === name) {
                cart[item].count --;
                if(cart[item].count === 0) {
                    cart.splice(item, 1);
                }
            break;
            }
        }   
    }

// listCart : Function
    cart_obj.listCart = function() {
        //JSON PARSE COPY OF CART ITEMS INTO JSON STRING
        return JSON.parse(JSON.stringify(cart)); 
        // var cartCopy = []; //copy of cart array
        // var itemCopy = {};
        // console.log(cart);
        // for (var i=0; i<cart.length; i++) { 
        //     item = cart[i];  
        //     // itemCopy = item;
            
        //     cartCopy.push(itemCopy);
        // }
        // return cartCopy;
    }

    return cart_obj;

}

var cart1 = shoppingCart();
//DOM TRIGGER EVENTS
//=========================================================
//add to cart EVENT ONCLICK BUTTON
function addToCart() {
    //ONCLICK TO ADD PRODUCT TO MINI CART
    //Add Product info 
    var btn = document.getElementsByClassName('btn1');
    //onclick event listener
    for(var i=0; i<btn.length; i++){
        // btn[i].addEventListener('click', function(){
        btn[i].onclick = function() {     
            //BTN DATA
            var name = this.getAttribute("data-name");
            var price = this.getAttribute("data-price");
            cart1.addItemToCart(name,price,1);
            displayCart();
        };
    }
    
}

//DISPLAY CART IN TABLE FORMAT
function displayCart() {
    var cartArray = cart1.listCart();
    //MINI CART Auto Populate Table items with product info
    console.log(cartArray);
    var cartTable = document.querySelector('.mini-cart-table');
    cartTable.innerHTML = "";

    //CREATE TABLE HEADERS
    var tableName = document.createElement('th');
    var tablePrice = document.createElement('th');
    var tableQty = document.createElement('th');

    tableName.innerText = 'Name';
    tablePrice.innerText = 'Price';
    tableQty.innerText = 'Qty';

    cartTable.append(tableName);
    cartTable.append(tablePrice);
    cartTable.append(tableQty);
    
    // CREATE EMTPY TABLE AND UPDATES ROWS WITH TABLE DATA 
    for(var i=0; i<cartArray.length; i++){
        
        //new row data 
        var tableRow = document.createElement('tr');
        var tableCell = document.createElement('td');
        var tableCell2 = document.createElement('td');
        var tableCell3 = document.createElement('td');
    
        tableCell.innerText = cartArray[i].name;
        tableCell2.innerText = cartArray[i].price;
        tableCell3.innerText = cartArray[i].count;
    
        tableRow.appendChild(tableCell);
        tableRow.appendChild(tableCell2);
        tableRow.appendChild(tableCell3);
        
        cartTable.appendChild(tableRow); 
    }
    
}


    
    




