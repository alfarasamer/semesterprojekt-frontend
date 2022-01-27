$(document).ready(function() {
    $('#register').submit(function(e) {
        e.preventDefault();
        user = {
            "firstName":$("#firstName").val(),
            "lastName":$("#lastName").val(),
            "username":$("#username").val(),
            "password":$("#password").val()
        }
        
        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/registration',
            contentType: "application/json",
            data: JSON.stringify(user),
            statusCode: {
                200: function() {
                    console.log("User Created")
                },
                400 : () => {
                    console.log("Error 400")
                },
                500 : ()=> {
                    console.log("Error 500")
                }
              }
        });
    });
    
})


