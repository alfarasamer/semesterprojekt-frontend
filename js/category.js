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
                       /* success: function(data)
            {
                if (data === 'Correct') {
                    window.location.replace('admin/admin.php');
                }
                else {
                    alert(data);
                }
            }*/
        });
    });
    
})

$.getJSON('http://localhost:8080/categories', function (data) {
    $.each(data,function (index, category) {
        var id = category.id;
        var categoryName = category.categoryName;

        $('.output').append('<tr><th class="category-id" scope="row">'+id+'</th><td class="category-name">'+categoryName+'</td><td>Edit - Delete</td></tr>')

        
    });
});


