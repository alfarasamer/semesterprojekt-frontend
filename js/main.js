$( document ).ready(function() {
    setLogoutVisibility();
    //hideAddToCart()
function setLogoutVisibility() {
    getSessionStorage()
    //document.getElementById('logout').style.visibility='hidden';
}
});


async function getSessionStorage() {
    try {
        let token = sessionStorage.getItem("token");
        tokenJson = JSON.parse(atob(token));
        role = tokenJson.role;
        tokenContent = tokenJson.token;
        if (role != 'ROLE_ADMIN') {
            document.getElementById('admin').style.display = 'none';

        }else if (role != 'ROLE_USER') {
            document.getElementById('customer').style.display = 'none';
        }else if(role != 'ROLE_USER' || role != 'ROLE_ADMIN'){
            document.getElementById('cart-button').style.display = 'none';
        }
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
    } catch (error) {
        document.getElementById('cart-button').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
        document.getElementById('login').style.display = 'flex';
        document.getElementById('register').style.display = 'flex';
        document.getElementById('admin').style.display = 'none';
        document.getElementById('customer').style.display = 'none';
        //document.getElementsByClassName('add-to-cart')[0].style.display="none";
    }
}

function hideAddToCart() {
console.log("in for")
    var x = document.getElementsByClassName("add-to-cart");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
}}

async function chechIfCustomerLoggedIn() {
    try {
        console.log("Hello")

        let token2 = sessionStorage.getItem("token");
        tokenJson = JSON.parse(atob(token2));
        role = tokenJson.role;
        tokenContent = tokenJson.token;
        console.log(tokenContent)
        if (role != 'ROLE_USER') {
            document.getElementById('customer').style.display = 'none';
        }

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
                console.log("Logged out");
                getSessionStorage();
        }
          }
    })
  }

  $( "#logout" ).on( "click", logout );