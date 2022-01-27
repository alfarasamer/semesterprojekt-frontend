function listActiveProducts() {
$.getJSON('http://localhost:8080/products/activeproducts', function (data) {
    $.each(data,function (index, product) {
        itemNumber = product.itemNumber;
        description = product.description;
        size = product.size;
        price = product.price;
        brand = product.brand.brandName;
        category = product.category.categoryName;
        imageUrl=product.imageUrl;
        sizeCSSClass = size.toLowerCase();
        $('#output').append(
        '<div class="col-md-4">'+
            '<div class="card mt-3 mb-3">'+
            '<div class="product-1 align-itens-center p-2 text-center">'+
            '<div class="image-container">'+
            '<img class="product-image" src="'+imageUrl+'" alt="" width="160">'+
            '</div>'+
                '<h5>'+brand+'</h5>'+  
                '<div class="mt-3 info">'+
                '<span class="description d-block">'+description+'</span>'+
                '</div>'+
                '<div class="price mt-3 text-dark">'+
                  '<span>€ '+price+'</span>'+
                '</div>'+
                '<div class="mt-3 align-items-center">'+
                  '<span class="size-'+sizeCSSClass+'">'+size+'</span>'+
                '</div>'+
              '</div>'+
              '<div class="p-3 cursor view-button text-center text-white mt-3 coursor">'+
                '<span class="cursor button-text text-uppercase">Jetzt bestellen</span>'+
              '</div>'+
              '</div>'+
              '</div>'
        );
    

    });
});
}
listActiveProducts();

$(document).ready(function() {
    $('#product').submit(function(e) {
        e.preventDefault();
        product = {
            "description":$("#product-description").val(),
            "productLongDescription":$("#product-long-description").val(),
            "size":$("#size").val(),
            "status" :$("#status").val(),
            "price":$("#price").val(),
            "brand":$("#brand").val(),
            "category":$("#category").val()
        };
        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/products',
            dataType: "json",
            //contentType: 'application/x-www-form-urlencoded',
            data: product,
            statusCode: {
                200: function() {
                $('#product')[0].reset();
                $('.output').replaceWith('<tbody class="output">'+listAllProducts()+'</tbody>')
                },
                400 : function name(params) {
                    $('.error').append('Something went wrong, please check your input and try again');
                },
                500 : function name(params) {
                    $('.error').append('Duplicated ! Please check your input and try again');

                },

              }
        });
    });
    
})
function insertCategoriesInForm() {
    $.getJSON('http://localhost:8080/categories', function (data) {
        $.each(data, function (index, category) {
            var categoryId = category.id;
            var categoryName = category.categoryName;
            $('.categories').append('<option value="'+categoryId+'" class="category-name">'+ categoryName +'</option>');
        });
    });
}
insertCategoriesInForm()


function insertBrandsInForm() {
    $.getJSON('http://localhost:8080/brands', function (data) {
        $.each(data, function (index, brand) {
            var brandId = brand.id;
            var brandName = brand.brandName;
            $('.brands').append('<option value="'+brandId+'" class="category-name">'+ brandName +'</option>');
        });
    });
}
insertBrandsInForm()

function deleteProductByItemNumber(itemNumber) {
    $.ajax({
        type: "DELETE",
        url: 'http://localhost:8080/products/'+itemNumber,
        dataType: "json",
        statusCode: {
            200: function() {
            $('.output').replaceWith('<tbody class="output">'+listAllProducts()+'</tbody>')
            }
          }
    })
}