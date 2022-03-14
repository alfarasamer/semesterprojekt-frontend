updateCartButton();

function getProductByItemNumber() {
    const queryString = window.location.search;
    console.log("hello",queryString);
    const urlParams = new URLSearchParams(queryString);
    itemNumber = urlParams.get("item-number")
    $.getJSON('http://localhost:8080/product-by-item-number/'+itemNumber, function (product) {
            itemNumber = product.itemNumber;
            productName = product.name;
            description = product.description;
            size = product.size;
            siteClass = product.size.toLowerCase;
            price = product.price;
            brand = product.brand.brandName;
            category = product.category.categoryName;
            imageUrl=product.imageUrl;
            sizeCSSClass = size.toLowerCase();
            $('#output').append('<div class="row">'+
            '<div class="col-12 col-lg-5 col-md-5">'+
              '<div class="white-box text-center">'+
                '<img'+
                ' class="img-responsive"'+
                  'src="'+imageUrl+'" alt="Produktfoto von Artikelnummer '+itemNumber+' Produktname '+productName+'"/>'+
                  '</div>'+
            '</div>'+
            '<div class="col-12 col-lg-7 col-md-7">'+
              '<h3 class="card-title mt-4">'+productName+'</h3>'+
              '<div class="mt-4">'+
                '<h4 class="box-title mt-4">Marke</h4>'+
                '<p class="box-content">'+brand+'</p>'+
              '</div>'+
              '<h4 class="box-title mt-4">Beschreibung</h4>'+
              '<p class="box-content">'+description+'</p>'+
              '<div class="row mb-4">'+
                '<div class="col">'+
                  '<h4 class="box-title">Größe</h4>'+
                  '<div class="mt-4 box-content">'+
                    '<span class="size-'+sizeCSSClass+'">'+size+'</span>'+
                  '</div>'+
                '</div>'+
                '<div class="col">'+
                  '<h4 class="box-title">Preis</h4>'+
                  '<h2 class="mt-3 text-primary box-content">€'+ price+'<small class="inkl"> inkl. MvSt</small>'+
                  '</h2>'+
                '</div>'+
              '</div>'+

              '<div class="d-grid gap-2">'+
                '<button class="add-to-cart cart btn-sep icon-cart" onclick="addToCart('+itemNumber+')">Add to cart</button>'+
              '</div>'+
            '</div>'+
          '</div>'
            );  
    });
    }
    getProductByItemNumber();
    
    function addToCart(itemNumber) {
      $.ajax({
        type: "PUT",
        url: "http://localhost:8080/cart/add-to-cart/"+itemNumber,
        xhrFields: {
          withCredentials: true,
        }   
        }).done(function(){
          updateCartButton()
        })
    }




    function updateCartButton() {
      $.ajax({
      type: "GET",
      url: "http://localhost:8080/cartdto",
      xhrFields: {
        withCredentials: true,
      },
    }).done( function (data) {
        var cartItemsCount = data.cartItemsCount;
        var cartTotal = data.cartTotal;
            $('.cart-button').replaceWith('<div id="cart-button" class="p-2 bd-highlight cart-button"><a class="btn btn-danger" href="cart.html" role="button">'+cartItemsCount+' Artikel | Gesammt '+cartTotal+' €</a></div>');
                   
    })}