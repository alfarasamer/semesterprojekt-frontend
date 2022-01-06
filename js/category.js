
function listAllCategories() {
    $.getJSON('http://localhost:8080/categories', function (data) {
        $.each(data, function (index, category) {
            var id = category.id;
            var categoryName = category.categoryName;
            $('.output').append('<tr><th class="category-id" scope="row">' + id + 
            '</th><td class="category-name">' + categoryName + 
            '</td><td>Edit <input type="button" class="btn btn-danger" value="delete" onclick="deleteCategoryById('+id+')" /></td></tr>');
        });
    });
}

listAllCategories();

function deleteCategoryById(id) {
    $.ajax({
        type: "DELETE",
        url: 'http://localhost:8080/categories/'+id,
        dataType: "json",
        statusCode: {
            200: function() {
            $('.output').replaceWith('<tbody class="output">'+listAllCategories()+'</tbody>')
            }
          }
    })
}


$(document).ready(function() {
    $('#category').submit(function(e) {
        e.preventDefault();
        category = {"categoryName":$("#category-name").val()};
        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/categories',
            dataType: "json",
            //contentType: 'application/x-www-form-urlencoded',
            data: {categoryName:$("#category-name").val()},
            statusCode: {
                200: function() {
                $('#category')[0].reset();
                $('.output').replaceWith('<tbody class="output">'+listAllCategories()+'</tbody>')
                }
              }
        });
    });
    
})




