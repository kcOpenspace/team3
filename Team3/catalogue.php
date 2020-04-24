
<?php require "sections/head.html" ?>
<?php require "sections/header.html" ?>
<?php $page_title= "catalogue"; ?>


    <main class="main-cat">
            <!-- Catalogue side nav -->
        <aside>
            <h1>Clothing Range</h1>
            <div class="side-nav">
                <ul class="side-cat">
                    <li class="side-item-cat"><i class="fas fa-caret-right"></i> Shirts</li>
                    <li class="side-item-cat"><i class="fas fa-caret-right"></i> Pants</li>
                    <li class="side-item-cat"><i class="fas fa-caret-right"></i> Dresses</li>
                    <li class="side-item-cat"><i class="fas fa-caret-right"></i> Compression Gear</li>
                </ul>
                <ul class="side-gender">
                    <p>Gender</p>
                    <li class="gender-cat"><i class="fas fa-caret-right"></i> Mens</li>
                    <li class="gender-cat"><i class="fas fa-caret-right"></i> Womens</li>
                </ul>
                <ul class="side-item-price">
                    <p>Shop By Price</p>
                    <li class="item-price-range"><i class="fas fa-caret-right"></i> $0-$20</li>
                    <li class="item-price-range"><i class="fas fa-caret-right"></i> $20-$50</li>
                    <li class="item-price-range"><i class="fas fa-caret-right"></i> $50-$100</li>
                </ul>
            </div>
        </aside>
        
        <!--Main product Display Catalogue section  -->
    <section class="product-container">
         <div class="product-catalogue">
             <div class="product-grid">   
                

    <!-- CONNECT TO DATABSE TABLE AND GET TABLE DATA IN ROW FORMAT -->
    <?php
    
    require "config/db_connect.php";
    $db_connect = db_connection();

    $query = "SELECT * FROM products";
    mysqli_query($db_connect,$query);

    $result = mysqli_query($db_connect,$query);
    $row = mysqli_fetch_array($result);

    // FOR EACH ROW IN TABLE, FETCH THE PRODUCT DETAILS AND CREATE PRODUCT GRID ITEM
    while ($row = mysqli_fetch_array($result)) {    
        $product_name = $row['product_name'];
        $product_cat = $row['product_cat'];
        $product_price = $row['product_price'];
        $product_image = $row['product_image'];
    ?>
    <!-- Each Product Populate a new Grid Item in catalogue -->
        <div class="prod-grid-item">
            <div class="product">
                <img id="prod-img" src="/../<?php echo $product_image;?>">
                <p id="product-name"><?php echo $product_name ?></p>
                <p id="product-cat"><?php echo $product_cat ?></p>
                <p id="product-price"><?php echo $product_price ?></p>
            </div>
            <input  type="button" value="Add to Cart" id="btn-addcart" class="btn1" data-name="<?php echo $product_name ?>" data-price="<?php echo $product_price ?>" onclick="addToCart()">
       </div>
    <?php
    }
    ?>

            </div>
        </div>
    </section>

    </main>

<?php include "sections/footer.html" ?>