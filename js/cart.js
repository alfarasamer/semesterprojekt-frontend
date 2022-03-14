$(document).ready(function(){
    listAllCartItems();  
  });

var cartTotal=0;

function listAllCartItems() {
  cartTotal=0;
    $('.output').replaceWith('<tbody class="output-cart-items"></tbody>')
    $.ajax({
  type: "GET",
  url: "http://localhost:8080/cart",
  xhrFields: {
    withCredentials: true,
  },
}).done( function (data) {
  
    $.each(data, function (index, cartItem) {

        var itemNumber = cartItem.product.itemNumber;
        var itemName = cartItem.product.name;
        var price = cartItem.product.price;
        var quantity = cartItem.quantity;

        cartTotal +=(price*quantity);
        $('.cart-items-table').append(
          '<tr>'+
          '<th scope="row">'+itemNumber+'</th>'+
          '<td>'+itemName+'</td>'+
          '<td>€ '+price+'</td>'+
          '<td>'+
            '<ul class="list-inline m-0"><li class="list-inline-item"><button class="btn btn-success btn-sm rounded-0"  onclick="addOne('+itemNumber+')"; type="button" data-toggle="tooltip" data-placement="top" title="+ 1"><ion-icon name="add-outline"></ion-icon></button></li>'+
              '<li class="list-inline-item">'+quantity+'</li>'+
              '<li class="list-inline-item"><button class="btn btn-success btn-sm rounded-0"  onclick="removeOne('+itemNumber+')"; type="button" data-toggle="tooltip" data-placement="top" title="- 1"><ion-icon name="remove-outline"></ion-icon></button></li>'+
              '</ul>'+
          '</td>'+
        '</tr>'
        );
        updateCartTotal();
});
})}

function updateCartTotal(){
  $('.cart-total').replaceWith(
    '<th class="cart-total">€ '+cartTotal+'</th>'
  );}

  function addOne(id) {
    $('.cart-items-table').replaceWith('<tbody class="cart-items-table"></tbody>')
    $.ajax({
      type: "PUT",
      url: "http://localhost:8080/cart/add-to-cart/"+id,
      xhrFields: {
        withCredentials: true,
      }   
      }).done(function(){
      listAllCartItems();
      updateCartTotal();})
    }
    

    function removeOne(id) {
      $('.cart-items-table').replaceWith('<tbody class="cart-items-table"></tbody>')
      $.ajax({
        type: "PUT",
        url: "http://localhost:8080/cart/remove-from-cart/"+id,
        xhrFields: {
          withCredentials: true,
        }   
        }).done(function(){
        listAllCartItems();
        updateCartTotal();})
      }
  