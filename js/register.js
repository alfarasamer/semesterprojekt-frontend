$(document).ready(function() {
    console.log("Hello from user")
    $('#registration-form').submit(function(e) {
        e.preventDefault();
        user = {
            firstName:$("#firstName").val(),
            lastName:$("#lastName").val(),
            username:$("#username").val(),
            password:$("#password").val()
        };
        console.log(user)
        $.ajax({
            url: 'http://localhost:8080/registration',
            type: "POST",
            xhrFields: {
                withCredentials: true,
                },
                contentType: "application/json",
                data: JSON.stringify(user),
            statusCode: {
                200: function() {
                    buildUserCookie(user.username).then((token)=>{
                      token = btoa(JSON.stringify(token));
                     sessionStorage.setItem("token-f",token);
                     //window.location.replace('/index.html');
                    }
                    )},
                400 : () => {
                    console.log("Error 400")
                },
                500 : (response)=> {
                    if(response.responseJSON.trace.split(" : ")[1].startsWith("username already taken")){
                        $("#user-already-exist").modal("show");
                    }else{
                        console.log("Error 500")
                    }
                    //console.log("this is response",response.responseJSON.trace.split(" : ")[1].startsWith("username already taken"));
                }
              }
        });
    });
    
})


function buildUserCookie(username) {
    return new Promise((resolve, reject) => {
        resolve(
          $.getJSON('http://localhost:8080/token/'+username, function (token) {
            token = btoa(token)
        })
                    )
                    return token;
      })       
}