let list = document.getElementById("list");

/*Définir la fonction todo pour l'input :
*/
function todo(){
    let textask = document.getElementById("msg").value;
    let lista = document.createElement("li");
    lista.innerHTML = textask;
    list.appendChild(lista);
    let supr = document.createElement("button");
    supr.innerHTML = "del"
    // Nom donner pour le bouton supr crée
    supr.onclick = function(){
        remove(lista)
    }
    lista.appendChild(supr)
    // Pour modifier (suite) : 
    let modif = document.createElement("button"); 
    modif.innerHTML = "modif"
    modif.onclick = function(){
        modify(lista) 
    }
    lista.appendChild(modif)
    
}

function remove(del){
    //Objectif : retirer le li, qui est utilisé par 1 fonction.
    list.removeChild(del);
    // Le . sert à attribuer la valeur. removeCHild(del) = retirer 1 élément. 
}

function modify(mod){
    let textelement = mod.firstChild; 
    let tasktext = textelement.textContent //sera en lien avec le txt. textContent = récup val du contenu txt. 
    let newtask = prompt("modify task:", tasktext);
    textelement.textContent = newtask
}