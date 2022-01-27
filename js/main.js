
setLogoutVisibility();
function setLogoutVisibility() {
    getSessionStorage()
    //document.getElementById('logout').style.visibility='hidden';
}

async function getSessionStorage() {
    try {
        let token = sessionStorage.getItem("token");
        tokenJson = JSON.parse(atob(token));
        console.log("TokenJSON", tokenJson);
        role = tokenJson.role;
        tokenContent = tokenJson.token;
        if (role != 'ROLE_ADMIN') {
            document.getElementById('admin').style.display = 'none';
        }
        console.log("Role", role)
        console.log("Token Content", tokenContent)
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
    } catch (error) {
        document.getElementById('logout').style.display = 'none';
        document.getElementById('login').style.display = 'flex';
        document.getElementById('register').style.display = 'flex';
        document.getElementById('admin').style.display = 'none';
    }
}

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
                setLogoutVisibility() 
        }
          }
    })
  }

  $( "#logout" ).on( "click", logout );



/*


logout.addEventListener('submit', (event) => {
    event.preventDefault(); //stop reload

    let input = document.querySelector('logout');
    console.log("Logout is clicked")
    let method = 'GET';
    let endpoint = `http://localhost:8080/logout`;

    xhr.open(method, endpoint);
    xhr.send(); //if in the link what you looking for this send will be empty!!!
});
*/