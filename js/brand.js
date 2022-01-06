



function listAllBrands() {
    $.getJSON('http://localhost:8080/brands', function (data) {
        $.each(data, function (index, brand) {
            var id = brand.id;
            var brandName = brand.brandName;
            $('.output').append('<tr><th class="brand-id" scope="row">' + id +
                '</th><td class="brand-name">'
                + brandName + '</td><td>Edit - <input type="button" value="clickme" onclick="deleteBrandById('+id+')" /></td></tr>');
        });
    });
}

listAllBrands();



function deleteBrandById(id) {
    $.ajax({
        type: "DELETE",
        url: 'http://localhost:8080/brands/'+id,
        dataType: "json",
        statusCode: {
            200: function() {
            $('#brand')[0].reset();
            $('.output').replaceWith('<tbody class="output">'+listAllBrands()+'</tbody>')
            }
          }
    })
}

$(document).ready(function() {
    $('#brand').submit(function(e) {
        e.preventDefault();
        brand = {"brandName":$("#brand-name").val()};
        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/brands',
            dataType: "json",
            //contentType: 'application/x-www-form-urlencoded',
            data: {brandName:$("#brand-name").val()},
            statusCode: {
                200: function() {
                $('#brand')[0].reset();
                $('.output').replaceWith('<tbody class="output">'+listAllBrands()+'</tbody>')
                }
              }
        })
    })
})