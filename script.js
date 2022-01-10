/* Modal */
//Variable qui récupére le modal
let modal = document.getElementById("myModal");
//Récupération du <span> pour fermer le modal
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

let list = document.getElementById("resultat");

function ajouter() {
    let name = document.getElementById("name").value;
    let fstName = document.getElementById("firstname").value;
    let login = document.getElementById("login").value;
    let passWord = document.getElementById("mdp").value;
    list.textContent = `name: ${name}; prenom: ${fstName}; login: ${login}; mot de passe: ${passWord};`
}