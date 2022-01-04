$(document).ready(function() {
    $('#register').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/registration',
            dataType: "json",
            data: {
                firstName:$("#firstName").val(),
                lastName:$("#lastName").val(),
                email:$("#email").val(),
                password:$("#password").val()
                },
            /*success: function(data)
            {
                console.log(Response.Cookies)
              Cookies.set("first-cookie",Response.Cookies)
                if (true) {
                    console.log("sucess");
                }
                else {
                    alert(data);
                }
            }*/
        });
    });
    
})


