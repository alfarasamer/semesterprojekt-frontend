function logout() {
    $.ajax({
        type: "POST",
        xhrFields: {
            withCredentials: true
        },
        url: 'http://localhost:8080/logout',
        contentType: "application/json",
        //data: JSON.stringify(product),
        statusCode: {
            200: function() {
                sessionStorage.setItem("token",null);
                console.log("Logged out")
                window.location.replace('/index.html');                
        }
          }
    })
  }
  $( "#logout" ).on( "click", logout );
