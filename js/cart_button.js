$(document).ready(function(){
    updateCartButton();  
  });


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

        $('.cart-button').append('<a class="btn btn-danger" href="cart.html" role="button">'+cartItemsCount+' Artikel | Gesamt '+cartTotal+' €</a>');
               
});
}