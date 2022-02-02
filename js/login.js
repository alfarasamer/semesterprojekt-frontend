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
          })
                      )
                      return token;
        })       
  }


  