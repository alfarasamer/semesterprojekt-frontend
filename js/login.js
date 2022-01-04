
/*
$(document).ready(function() {
    $('#login').submit(function(e) {
        e.preventDefault();
        loginRequest = {username: $("#username").val(),
        password: $("#password").val()};
        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/login',
            dataType: "json",
            origin: "http://127.0.0.1:5500",
            data: JSON.stringify(loginRequest)}) 
           /* success: function(data)
            {
                if (data === 'Correct') {
                    window.location.replace('admin/admin.php');
                }
                else {
                    alert(data);
                }
            }*/
       /* });
    });
*/
    $(document).ready(function() {
        $('#login').submit(function (e) {
            //debugger;
            e.preventDefault();
            //$('#wrongPass').hide();
            loginRequest = {username: $("#username").val(),
        password: $("#password").val()};
            $.ajax({
                url: "http://localhost:8080/login",
                method: 'POST',
                //Headers: "Access-Control-Allow-Origin: http://127.0.0.1:5500",
                xhrFields: {
                    withCredentials: true
                },

                /*'beforeSend: function(xhr) {
                    xhr.withCredentials = true;
                },*/
                dataType: "json",
                data: JSON.stringify(loginRequest),
                //contentType: 'application/json;charset=UTF-8'
            
            /*success: function(data)
            {console.log(Response)
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