/* Modal */
//Variable qui récupére le modal
let modal = document.getElementById("myModal");
//Récupération du <span> pour fermer le modal
/*
let span = document.getElementsByClassName("close")[0];
//fonction fermeture du modal quand l'utilisateur clic sur le <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}
//fonction qui ouvre le modal
function openModal(e){
    modal.style.display = "block";
    //récupération du paragraphe 
    let btUpdate = document.getElementById("btUpdate");
    //injection du bouton dans le paragraphe
    btUpdate.innerHTML = "<input type='button' value='Modifier' onclick='updateUser("+e+")'></input>";
}
*/
let nbrCpt = document.getElementById("nbrCompte");
let list = [];
let addToList = document.getElementById("resultat");
let error = document.getElementById("error");

function ajouter() {
    let name = document.getElementById("name").value;
    let fstName = document.getElementById("firstname").value;
    let login = document.getElementById("login").value;
    let passWord = document.getElementById("mdp").value;
    list.push([name, fstName, login, passWord]);
    addToList.innerHTML = `name: ${list[name]}; prenom: ${list[fstName]}; login: ${list[login]}; mot de passe: ${list[passWord]};`
}
