checkAccessRights();
function checkAccessRights() {
    let token = sessionStorage.getItem("token");
    console.log(token)

    let role;
    let tokenContent;
    if (token!=="null") {
    tokenJson = JSON.parse(atob(token));
    console.log("TokenJSON",tokenJson);

    role = tokenJson.role;
    tokenContent = tokenJson.token;

    console.log("Role",role)
    console.log("Token Content",tokenContent)

    }
    if (role !="ROLE_ADMIN") {
        window.location.replace('/forbidden.html');
    }
    
}
