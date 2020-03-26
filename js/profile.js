function affichageProfile(){
var userConnecter = JSON.parse(localStorage.getItem('tabUsers'))
var index = localStorage.getItem('indexConnecte')
document.getElementById('email').value = userConnecter[index].Email;
document.getElementById('name').value = userConnecter[index].Name;
document.getElementById('gender').value = userConnecter[index].Gender;
document.getElementById('birthday').value = userConnecter[index].Birthdate;
}
function deconnection(){
    localStorage.setItem('indexConnecte', null);

    window.location.href = "./login.html"

}
function modification(){
    var userConnecter = JSON.parse(localStorage.getItem('tabUsers'))
    var index = localStorage.getItem('indexConnecte')
    userConnecter[index].Email= document.getElementById('email').value;
    userConnecter[index].Name= document.getElementById('name').value;
    userConnecter[index].Gender= document.getElementById('gender').value;
    userConnecter[index].Birthdate= document.getElementById('birthday').value;
    localStorage.setItem('tabUsers', JSON.stringify(userConnecter));
}
