
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
            
                /*var jqxhr = $.post( "example.php", function() {
                    alert( "success" );
                  })
                    .done(function() {
                      alert( "second success" );
                    })
                    .fail(function() {
                      alert( "error" );
                    })
                    .always(function() {
                      alert( "finished" );
                    });
                   
                  // Perform other work here ...
                   
                  // Set another completion function for the request above
                  jqxhr.always(function() {
                    alert( "second finished" );
                  }),*/
                  statusCode: {
                    200: function() {
                        
                        console.log("Logged in", Response)
                      //alert( "page not found" );
                    }
                  }
  
            })
            
        });
    })