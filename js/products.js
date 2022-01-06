$.getJSON('http://localhost:8080/products', function (data) {
    //console.log(data);

/*                <th scope="col">Item Number</th>
                  <th scope="col">Product Description</th>
                  <th scope="col">Product Long Description</th>
                  <th scope="col">Size</th>
                  <th scope="col">Status</th>
                  <th scope="col">Price</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Category</th> */

    $.each(data,function (index, product) {
        //console.log(product);
        var itemNumber = product.itemNumber;
        var productDescription = product.productDescription;
        var productLongDescription = product.productLongDescription;
        var size = product.size;
        var status = product.status;
        var price = product.price;
        var brand = product.brand.brandName;
        var category = product.category.categoryName;
        $('.output').append('<tr><th class="category-id" scope="row">'+itemNumber+
        '</th><td class="product-description">'+productDescription+
        '</td><td class="product-long-description">'+productLongDescription+
        '</td><td class="size">'+size+
        '</td><td class="status">'+status+
        '</td><td class="price">'+price+
        '</td><td>Edit - Delete</td></tr>')
    });
});

$.getJSON('http://localhost:8080/categories', function (data) {
    $.each(data,function (index, category) {
        var id = category.id;
        var categoryName = category.categoryName;
        $('.output').append('<tr><th class="category-id" scope="row">'+id+'</th><td class="category-name">'+categoryName+'</td><td>Edit - Delete</td></tr>')

        
    });
});
