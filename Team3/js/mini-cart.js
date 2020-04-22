
//Show or close mini cart
function showCart(){
    var cartIcon = document.getElementById('cart-icon');
    var minicart = document.querySelector(".mini-cart-container");
    
    cartIcon.onclick = function() {
        if(minicart.style.visibility === 'hidden'){
            minicart.style.visibility = 'visible';
        }
        else {
            minicart.style.visibility = 'hidden';
        }
    
        //LOAD CART SESSION 
        cart1.loadCart();
        cart1.displayCart();

        //ONCLICK CART ICON:: LOADS THE CART ITEMS FROM CART AND DISPLAY THE CART ITEMS
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

    // var sessionStorage = 
    //SAVE CART IN THSI SESSION STORAGE
    function saveCart() {
        sessionStorage.setItem('minicart',JSON.stringify(cart));
    }

    //LOAD SAVED CART
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('minicart'));
    } 
    if (sessionStorage.getItem('minicart') != null) {
        loadCart();
    }

// addItemToCart : Function
    var cart_obj = {};

    //Add to cart object and cart array   
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
        if (existingItem != null) {
            existingItem.count++;
            saveCart();
        } 
        else {
            var item = new Item(name,price,count);
            cart.push(item);
            saveCart();
        }
    }

//SET COUNT FROM ITEMS :UNUSED
    cart_obj.setCountItem = function(name,count) {
        for(var i=0; i<cart.length; i++) {
            if(cart[i].name === name){ 
                cart[i].count = count;
                break;
            }    
        }
    }

    //TOTAL CART ITEMS
    cart_obj.totalCartItems = function() {
        var totalItems = 0;
        //For Every Item in cart Get the count and add them together
        for(var i=0; i<cart.length; i++) {
            var itemCount = cart[i].count;
            totalItems = totalItems + itemCount;
        }
        return totalItems;
    }

    //TOTAL PRICE OF CART
    cart_obj.totalCartPrice = function() {
        var totalPrice = 0;
        //For Every Item in cart Get the count and add them together
        for(var i=0; i<cart.length; i++) {
            var itemCount = cart[i].count;
            var itemPrice = cart[i].price;
            var price = itemPrice.replace('$','');
            
            totalPrice = totalPrice + price*itemCount;
        }
        //Fixed deciaml places to 2
        return Number(totalPrice.toFixed(2));
    }


//REMOVE ITEM FROM CART  :UNUSED
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

    //Clears the cart and restart as an emtpy array
    cart_obj.clearCart = function(){
        cart = [];
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
    var product = document.getElementsByClassName('product');
    //onclick event listener
    for(var i=0; i<btn.length; i++){
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

    //CREATE CART TABLE TOTALS 
    var totalHead = document.createElement('th');
    var totalRow = document.createElement('tr');
    var totalCell = document.createElement('td');
    var totalCell2 = document.createElement('td');
    var totalCell3 = document.createElement('td');

    //TOTAL CART ITEMS
    var totalCount = cart1.totalCartItems();

    totalCell.innerText = 'Total QTY: ';
    totalCell2.innerText = totalCount;
    totalCell3.innerText = 'Qty';

    totalRow.append(totalHead);
    totalHead.append(totalCell);
    totalHead.append(totalCell2);
    totalHead.append(totalCell3);
    
    cartTable.append(totalHead);
    cartTable.append(totalRow);
 
    //TOTAL CART PRICE
    var totalHead2 = document.createElement('th');
    var totalRow2 = document.createElement('tr');
    var totalprice = document.createElement('td');
    var totalprice2 = document.createElement('td');
    var totalprice3 = document.createElement('td');

    //TOTAL CART ITEMS
    var totalPrice = cart1.totalCartPrice();

    totalprice.innerText = 'Cart-Total: ';
    totalprice2.innerText = '$';
    totalprice3.innerText = totalPrice;

    totalRow2.append(totalHead2);
    totalRow2.append(totalprice);
    totalRow2.append(totalprice2);
    totalRow2.append(totalprice3);
    
    cartTable.append(totalHead2);
    cartTable.append(totalRow2);
    
}

displayCart();
    
    




