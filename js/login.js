
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
      $('#message').hide();    
        $('#login-form').submit(function (e) {
            e.preventDefault();
            $('#message').hide();    
            loginRequest = {username: $("#username").val(),
                            password: $("#password").val()};
            $.ajax({
                url: "http://localhost:8080/login",
                method: 'POST',
                xhrFields: {
                    withCredentials: true
                },
                dataType: "json",
                data: JSON.stringify(loginRequest),
                  statusCode: {
                    200: function() {
                     buildUserCookie(loginRequest.username).then((token)=>{
                       console.log("token in write cookie",token)
                       token = btoa(JSON.stringify(token));
                      sessionStorage.setItem("token",token);
                      window.location.replace('/index.html');
                     }
                     )},
                     401: function(){
                      $('#message').show();
                      $('.message-placeholder').replaceWith('<div id="message" class="message-placeholder alert alert-danger">Falshe Benuzername oder Kennwort!</div>');
  
                     }
                  }
  
            })
            
        });
    })


    function buildUserCookie(username) {
      return new Promise((resolve, reject) => {
          resolve(
            $.getJSON('http://localhost:8080/token/'+username, function (token) {
              token = btoa(token)
              console.log("this is the token",token)
          })
                      )
                      return token;
        })       
  }


  