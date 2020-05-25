<?php require "sections/head.html" ?>
<link rel="stylesheet" href="css/order.css">
<?php require "sections/header.html" ?>
<?php $page_title= "catalogue"; ?>

<main class="order-content">
    <!-- Sumamry of COSTS -->
    <div class="summary-container">
        <h1>Summary</h1>
        <div class="summary">
            <div class="subtotal">
                <p>Subtotal</p>
                <p class="cartTotal">$0</p>
            </div>
            <div class="shipping">
                <p>Estimated Shipping & Handling</p>
                <p class="totalShipping">$10</p>
            </div>
            <div class="tax">
                <p>Estimated Tax</p>
                <p class="totalTax">-</p>
            </div>
            <div class="sum-total">
                <p>Total</p>
                <p id="total">$0</p>
            </div>
        </div>

        <button class="btn-checkout"><a href="checkout.php">Checkout</a></button>
        <button class="btn-paypal">Paypal</button>
    </div>


    <!-- Cart ITEMS  -->
    <div class="order-container">
        <h1>Cart</h1>
        <table class="order-table">
            <tr class="order-row">
                <td class="thumbnail-box"><img src="../catalogue/mens/black-shorts.jpg"></td>
                <td class="item-details">
                    <p>Black Shorts</p>
                    <p>Mens</p>
                    <p>Size L</p>
                </td>
                <td class="item-qty">
                    <p>Quantity
                    <button id="minus-item"><i class="far fa-minus-square"></i></button> 
                    5
                    <button id="add-item"><i class="far fa-plus-square"></i></button>
                    </p>
                </td>
                <td class="item-price">$150</td>
            </tr>
        </table>
    </div>


</main>

<?php include "sections/footer.html" ?>