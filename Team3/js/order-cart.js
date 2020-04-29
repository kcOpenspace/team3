

// ORRDER PAGE CART DISPLAY
function displayOrderCart(){
    var cartArray = cart1.listCart();

    var cartTable = document.querySelector('.order-table');
    cartTable.innerHTML = "";
    // CREATE EMTPY TABLE AND UPDATES ROWS WITH TABLE DATA 
    for(var i=0; i<cartArray.length; i++){
        
        //new row data 
        var tableRow = document.createElement('tr');
        var prodImg = document.createElement('td');
        var prodDetails = document.createElement('td');
        var prodQty = document.createElement('td');
        var prodTotal = document.createElement('td');
    
        tableRow.setAttribute('class','order-row');
        prodImg.setAttribute('class','thumbnail-box');
        prodDetails.setAttribute('class','item-details');
        prodQty.setAttribute('class','item-qty');
        prodTotal.setAttribute('class','item-price');

        // CREATE THE ELEMENTS THAT ARE IN EACH TD
        var src = cartArray[i].imgsrc;
        var imageEle = document.createElement('img');
        imageEle.setAttribute('src',src);
        var itemImg = imageEle;

        //ITEM DETAILS
        var p1 = document.createElement('p');
        p1.innerText = cartArray[i].name;
        var p2 = document.createElement('p');
        p2.innerText = 'Mens';
        var p3 = document.createElement('p');
        p3.innerText = 'Size L';


        //QUANTITY SECTION WITH BUTTONS
        var icon1 = document.createElement('i');
        icon1.setAttribute('class','far fa-minus-square');
        var icon2 = document.createElement('i');
        icon2.setAttribute('class','far fa-plus-square');

        var qp = document.createElement('p');
        var pt = 'Quantity';
        var b1 = document.createElement('button');
        b1.setAttribute('class','minus-item');
        b1.setAttribute('data-name',cartArray[i].name);
        b1.setAttribute('Onclick','minusItem()');
    
        var qty = cartArray[i].count;
        var b2 = document.createElement('button');
        b2.setAttribute('class','add-item');
        b2.setAttribute('data-name',cartArray[i].name);
        b2.setAttribute('Onclick','addItem()');


        //BEGIN APPEND ITMES TO THEIR TD ELEMENTS
        prodImg.append(itemImg);

        prodDetails.append(p1);
        prodDetails.append(p2);
        prodDetails.append(p3);

        b1.append(icon1);
        b2.append(icon2);
        qp.append(pt);
        qp.append(b1);
        qp.append(qty);
        qp.append(b2);
        prodQty.append(qp);
        

        prodTotal.innerText = '$'+Number(cartArray[i].count*(cartArray[i].price).replace('$',''));
    
        tableRow.appendChild(prodImg);
        tableRow.appendChild(prodDetails);
        tableRow.appendChild(prodQty);
        tableRow.appendChild(prodTotal);

        cartTable.appendChild(tableRow); 
    }

}

displayOrderCart();

function calcSubTotal(){
    var subTotal = cart1.totalCartPrice();

    var cartTotal = document.querySelector('.cartTotal');

    cartTotal.innerText = '$'+subTotal;
}

calcSubTotal();

function orderTotal() {
    var totalclass = document.querySelector('#total');
    var sub = cart1.totalCartPrice();
    var shipping = 10;
    var tax = 0;
    var total = sub + shipping +tax;
    
    totalclass.innerText = '$'+total;
}

orderTotal();


//ONCLICK minus btn: remove an item/count
function minusItem() {
    var minusbtn = document.getElementsByClassName('minus-item');
    //onclick event listener
    for(var i=0; i<minusbtn.length; i++){
        minusbtn[i].onclick = function() {     
            //BTN DATA
            var name = this.getAttribute("data-name");
            cart1.removeItemFromCart(name);
            displayCart();
            displayOrderCart();
            calcSubTotal();
            orderTotal();
        };
    }

}

minusItem();

//onCLICK add btn: add item count 
function addItem() {
    var addbtn = document.getElementsByClassName('add-item');
    //onclick event listener
    for(var i=0; i<addbtn.length; i++){
        addbtn[i].onclick = function() {     
            //BTN DATA
            var name = this.getAttribute("data-name");
            cart1.addItemCountCart(name);
            displayCart();
            displayOrderCart();
            calcSubTotal();
            orderTotal();
        };
    }
 
}

addItem();



