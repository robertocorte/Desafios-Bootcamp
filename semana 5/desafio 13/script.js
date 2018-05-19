// validacao sign up

var email = prompt("Please insert your email address.");
var password = prompt("Please insert a password.");
var atPosition = email.indexOf("@");
var lastAtPosition = email.lastIndexOf("@");
var dotPosition = email.lastIndexOf(".");

/*
1. ensure string does not have special characters
2. check if: string has @, string has . , string not have 2*@
3. check if: @ is not the first element, . is not the first element after @, . has alteast 2 characters to its right  
*/

if (!email.includes("?") && !email.includes("*") && !email.includes(" ")) {
    if (email.includes("@") && email.includes(".") && atPosition == lastAtPosition) {
        if (!((atPosition - 1) == -1) && !((atPosition + 1) == dotPosition) && !((dotPosition + 2) >= email.length)) {
            alert("your email is ok");
        } else {
            alert("Por favor, introduza um email válido.");
        }
    } else {
        alert("Por favor, introduza um email que contenha apenas um '@' e um ponto.");
    }
} else {
    alert("Por favor, introduza um email que não contenha '?','*' ou espaços vazios.");
}
