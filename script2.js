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

// get ELMT
let nbrCpt = document.getElementById("nbrCompte");
// create table
let list = [];
// create nbr list
let listNbr = 0;
let addToList = document.getElementById("resultat");
let error = document.getElementById("error");
// create img & link for delete
let btnDelete = document.createElement("a");
btnDelete.href = "#";
btnDelete.id = "btnDelete";
btnDelete.onclick = "deleteBtn()";
btnDelete.innerHTML = "<img src='delete.png' alt='delete'>";
// function onclick
function ajouter() {
    // get element
    let name = document.getElementById("name").value;
    let fstName = document.getElementById("firstName").value;
    let login = document.getElementById("login").value;
    let passWord = document.getElementById("mdp").value;
    // if 
    if(name != "" && fstName != "" && login != "" && passWord != "") {
        // push to tab
        list.push([name, fstName, login, passWord]);
        // innerHTML with "p" separator
        addToList.innerHTML += "<p>"+`${listNbr+1}.  name : ${name};  prénom : ${fstName};  login : ${login};  mot de passe : ${passWord} ${btnDelete} ${btUpdate}`+"</p>";
        // up nbr list
        listNbr++;
        if (listNbr == 1) {
            nbrCpt.innerHTML = `Il y a ${listNbr} compte utilisateur`;
        } else if (listNbr > 1) {
            nbrCpt.innerHTML = `Il y a ${listNbr} compte utilisateurs`;
        }
    } else {
        error.innerHTML = `Veuillez remplir les champs vites:`;
    }
}
 
