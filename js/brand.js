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

$.getJSON('http://localhost:8080/brands', function (data) {
    $.each(data,function (index, brand) {
        var id = brand.id;
        var brandName = brand.brandName;

        $('.output').append('<tr><th class="brand-id" scope="row">'+id+'</th><td class="brand-name">'+brandName+'</td><td>Edit - Delete</td></tr>')

        
    });
});


