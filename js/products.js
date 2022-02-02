function listActiveProducts() {
$.getJSON('http://localhost:8080/activeproducts', function (data) {
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