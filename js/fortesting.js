
setLogoutVisibility();
function setLogoutVisibility() {

    let token = sessionStorage.getItem("token");
    tokenJson = JSON.parse(atob(token));
    console.log("TokenJSON",tokenJson);
    role = tokenJson.role;
    tokenContent = tokenJson.token;

    console.log("Role",role)
    console.log("Token Content",tokenContent)

    if (!tokenContent) {
        document.getElementById('logout').style.display='none';
    }
    if (role !='ROLE_ADMIN') {
        document.getElementById('admin').style.display='none';
    }
    //document.getElementById('logout').style.visibility='hidden';

    //

}
  
    logout.addEventListener('submit', (event) => {
      event.preventDefault(); //stop reload
    
      let input = document.querySelector('input');
    
      let method = 'GET';
      let endpoint = `request url ${input.value}`;
    
      xhr.open(method, endpoint);
      xhr.send(); //if in the link what you looking for this send will be empty!!!
    });
  






//until here
$(document).ready(function() {
    $('#message-e').hide();
});


function startWithoutErrors() {
    
}

