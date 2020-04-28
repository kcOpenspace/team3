
<?php require "sections/head.html" ?>
<?php require "sections/header.html" ?>
<?php $page_title= "catalogue"; ?>

   <main>
      <br>
      <h2>TEAM THREE CHECKOUT</h2>
      <br>
      <br>

      <div class="row">

         <div class="col-75">

            <div class="container">

               <form action="/action_page.php">



                  <div class="row">

                     <div class="col-50">
                        <h3>Billing Address</h3>
                        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
                        <label for="email"><i class="fa fa-envelope"></i> Email</label>
                        <input type="text" id="email" name="email" placeholder="
      ​                   ​​john@example.com">
                        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" name="address" placeholder="
                         Enter Address">
                        <label for="city"><i class="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" placeholder="Perth">

                        <div class="row">
                           <div class="col-50">
                              <label for="state">State</label>
                              <input type="text" id="state" name="state" placeholder="WA">
                           </div>
                           <div class="col-50">
                              <label for="zip">Post Code</label>
                              <input type="text" id="zip" name="Post Code" placeholder="6000">
                           </div>
                        </div>
                     </div>

                     <div class="col-50">
                        <h3>Payment</h3>
                        <label for="fname">Accepted Cards</label>
                        <div class="icon-container">
                           <i class="fa fa-cc-visa" style="color:navy;"></i>
                           <i class="fa fa-cc-mastercard" style="color:red;"></i>
                        </div>
                        <label for="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe">
                        <label for="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444-5555">
                        <label for="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="September">
                        <div class="row">
                           <div class="col-50">
                              <label for="expyear">Exp Year</label>
                              <input type="text" id="expyear" name="expyear" placeholder="2018">
                           </div>
                           <div class="col-50">
                              <label for="cvv">CVV</label>
                              <input type="text" id="cvv" name="cvv" placeholder="352">
                           </div>
                        </div>
                     </div>

                  </div>
                  <label>
                     <input type="checkbox" checked="checked" name="sameadr">
                     Shipping address same as billing
                  </label>
                  <input type="submit" value="Continue to checkout" class="btn">
               </form>
            </div>
         </div>
         <div class="col-25">
            <div class="container">
               <h4>Cart <span class="price" style="color:black">
               <p>Total <span class="price" style="color:black"><b>$****</b></span></p>
            </div>
         </div>
      </div>
   </main>



<?php include "sections/footer.html" ?>