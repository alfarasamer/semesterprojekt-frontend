var isFilterd = false;
var isSortedByPriceUp = false;
var isSortedByPriceDown = false;
var categoryId = "";


let selectedCategoryProducts="";

function listActiveProducts() {
  $.getJSON("http://localhost:8080/activeproducts", function (data) {
    injectProducts(data);
    isFilterd = false;
    isSortedByPriceUp = false;
    isSortedByPriceDown = false;
    categoryId = "";


    selectedCategoryProducts=""
  });
}

listActiveProducts();
injectCategories();

function openDetailsPage(itemNumber) {
  window.location = "/product-details.html?item-number=" + itemNumber;
  console.log("open details page" + itemNumber);
}

function injectCategories() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/categories-names",
    xhrFields: {
      withCredentials: true,
    },
  }).done(function (data) {
    $.each(data, function (index, category) {
      categoryId = category.id;
      categoryName = category.categoryName;
      $(".category-list").append(
        '<li><a class="dropdown-item" href="#" onclick="filterProductsByCategory(' +
          categoryId +
          ')">' +
          categoryName +
          "</a></li>"
      );
    });
  });
}

function filterProductsByCategory(categoryId) {
  $.getJSON("http://localhost:8080/activeproducts", function (data) {
    console.log("data in the function", data);

    var filterdData = data.filter(function (el) {
      return el.category.id == categoryId;
    });
    injectProducts(filterdData);
    selectedCategoryProducts = filterdData
    console.log("filter data", selectedCategoryProducts);
  });
}

// TODO
function orderByPriceDown() {
  orderByPriceDown = true;
  if (selectedCategoryProducts.length>0) {
    data = selectedCategoryProducts;
    data.sort((a, b) => (a.price > b.price ? 1 : -1));
    injectProducts(data);
  }else {
    $.getJSON("http://localhost:8080/activeproducts", function (data) {
      data.sort((a, b) => (a.price > b.price ? 1 : -1));
      injectProducts(data);
    });
  }
}

function orderByPriceUp() {
  orderByPriceUp = true;
  if (selectedCategoryProducts.length>0) {
    data = selectedCategoryProducts;
    data.sort((a, b) => (a.price < b.price ? 1 : -1));
    injectProducts(data);
  }else {
    $.getJSON("http://localhost:8080/activeproducts", function (data) {
      data.sort((a, b) => (a.price < b.price ? 1 : -1));
      injectProducts(data);
    });
  }
}

function injectProducts(data) {
  $(".products-cards-container").replaceWith(
    '<div class="products-cards-container col-12">' +
      '<div class="row" id="output">' +
      "</div>" +
      "</div>"
  );
  $.each(data, function (index, product) {
    productName = product.name;
    itemNumber = product.itemNumber;
    description = product.description;
    size = product.size;
    price = product.price;
    brand = product.brand.brandName;
    category = product.category.categoryName;
    imageUrl = product.imageUrl;
    sizeCSSClass = size.toLowerCase();

    $("#output").append(
      '<div class="col-md-4">' +
        '<div class="card mt-3 mb-3">' +
        '<div class="product-1 align-itens-center p-2 text-center">' +
        '<div class="image-container">' +
        '<img class="product-image" src="' +
        imageUrl +
        '" alt="Produktfoto von Artikelnummer ' +
        itemNumber +
        " Produktname " +
        productName +
        '" width="160">' +
        "</div>" +
        "<h2>" +
        brand +
        "</h2>" +
        '<div class="mt-3 info">' +
        '<span class="description d-block">' +
        description +
        "</span>" +
        "</div>" +
        '<div class="price mt-3 text-dark">' +
        "<span>€ " +
        price +
        "</span>" +
        "</div>" +
        '<div class="mt-3 align-items-center">' +
        '<span class="size-' +
        sizeCSSClass +
        '">' +
        size +
        "</span>" +
        "</div>" +
        "</div>" +
        '<div class="product-details p-3 cursor view-button text-center text-white mt-3 coursor" onclick="openDetailsPage(' +
        itemNumber +
        ')">' +
        '<span class="cursor button-text text-uppercase">Mehr erfahren</span>' +
        "</div>" +
        "</div>" +
        "</div>"
    );
  });
}
