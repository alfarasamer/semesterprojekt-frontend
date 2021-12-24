$.getJSON('http://localhost:8080/products', function (data) {
    //console.log(data);

    $.each(data,function (index, product) {
        //console.log(product);
        var category = product.category.categoryName;
        var itemNumber = product.itemNumber;
        var productDescription = product.productDescription;
        var productLongDescription = product.productLongDescription;
        var size = product.size;
        var price = product.price;

        //$('.category').text(category);
        //$('.product-description').text(productDescription);
        //$('.product-long-description').text(productLongDescription);
        //$('.size').text(size);
        //$('.price').text(price);

        $('.output').append('<h1 class="category">'+category+'</h1><h2 class="item-number">'+itemNumber+'</h2><h2 class="product-description">'+productDescription+'</h2><h2 class="product-long-description">'+productLongDescription+'</h2><h2 class="size">'+size+'</h2><h2 class="price">'+price+'</h2>')
    });
});

/*
category:
categoryId: 2
categoryName: "Winter"
[[Prototype]]: Object
itemNumber: 2
price: 40
productDescription: "Long seleve T-shirt"
productLongDescription: "90% Cotton 10% Polyster"
size: "M"
status: "ACTIVE"*/