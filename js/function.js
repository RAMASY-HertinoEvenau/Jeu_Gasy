var cpt = 0;
var statut = 3;
var joueur = 0;
var mat = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function programmePrincipale(val){
    cpt++;
    var val = val;
    var place = document.getElementById(val); 
    var stylePlace = window.getComputedStyle(place);
    var couleurPlace = stylePlace.getPropertyValue('background-color');
    if(statut == 1) {
        return 0;
    }
    else if(statut == 3) {
        placementPion(val, place, couleurPlace);
    }
    else {
        etatDuJeu(val, place, couleurPlace);
    }
}

function placementPion(val, place, couleurPlace) {
    var couleurPlace = couleurPlace;
    var place = place;
    var val = val;
    if(couleurPlace != 'rgb(0, 128, 0)' && couleurPlace != 'rgb(255, 255, 0)') {
        if((cpt%2) == 0) {
            place.style.backgroundColor= 'Yellow';
            placemenPionMatrice(val, 1);
        }
        else{
            place.style.backgroundColor= 'Green';
            placemenPionMatrice(val, 2);
        }
        if(cpt > 4) {
            etatDuJeu(val, place, couleurPlace);
            return 0;
        }
    }
    else {
        cpt--;
        window.alert("Un pion est déja placé à cette endroit");
    }
}

function etatDuJeu(val, place, couleurPlace) {
    var resultat = casPossible();
    if(resultat == true) {
        if((cpt%2) == 0) {
            window.alert("Le joueur avec le pion JAUNE a gagné");    
        }
        else {
            window.alert("Le joueur avec le pion VERT a gagné");
        }
        statut = 1;
        return 0;
    }
    else if(joueur == 1) {
        return 0;
    }
    else {
        if(cpt > 6) {
            var val = val;
            var place = place;
            var couleurPlace = couleurPlace;
            etape2(val, place, couleurPlace);
        }
        else if(cpt == 6) {
            statut = 0;
        }
        else{
            return 0;
        }
    }
}

function etape2(val, place, couleurPlace) {
    var val = val;
    var place = place;
    var couleurPlace = couleurPlace;
    if(couleurPlace == 'rgba(0, 0, 0, 0)' && joueur == 0)  {
        cpt--;
        window.alert("Vous avez utiliser le nombre de pion maximale, veuillez selectionner un de vos pion et un endroit libre pour le déplacer");
        return 0;
    }
    else {
        if(joueur == 0) {
            val1 = val;
            cpt--;
            joueur = 1;
            return 0;
        }
        else {
            test = positionVoisin(val1, val);
            if(test == true) {
                placementPion(val, place, couleurPlace);
                var place2 = document.getElementById(val2); 
                place2.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                placemenPionMatrice(val1, 0);
                etatDuJeu(val, couleurPlace);
                return 0;
            }
            else {
                window.alert("Deplacement impossible");
                cpt--;
                return 0;
            }
        }
    }
}

function positionVoisin(val1, val) {
    var val1 = val1;
    var val = val;
    switch(val1) {
        case 'a1' :
            if(val == "a2" || val == "b1" || val == "b2") {
                return true;
            }
            return false;
        case 'a2' :
            if(val == "a1" || val == "a3" || val == "b2") {
                return true;
            }
            return false;
        case 'a3' :
            if(val == "a2" || val == "b3" || val == "b2") {
                return true;
            }
            return false;
        case 'b1' :
            if(val == "a1" || val == "c1" || val == "b2") {
                return true;
            }
            return false;
        case 'b2' :
            if(val == "a1" || val == "a2" || val =="a3" || val== "b1" || val == "b3" || val == "b2" || val == "c1" || val == "c2" || val == "c3") {
                return true;
            }
            return false;
        case 'b3' :
            if(val == "a3" || val == "c3" || val == "b2") {
                return true;
            }
            return false;
        case 'c1' :
            if(val == "b2" || val == "c2" || val == "b2") {
                return true;
            }
            return false;
        case 'c2' :
            if(val == "c1" || val == "c3" || val == "b2") {
                return true;
            }
            return false;
        case 'c3' :
            if(val == "c2" || val == "b3" || val == "b2") {
                return true;
            }
            return false;
        default :
            break;
    }
}

function placemenPionMatrice(val, nbr) {
    var val = val;
    var nbr = nbr;
    switch(val) {
        case 'a1' :
            mat[0][0] = nbr;
            break;
        case 'a2' :
            mat[0][1] = nbr;
            break;
        case 'a3' :
            mat[0][2] = nbr;
            break;
        case 'b1' :
            mat[1][0] = nbr;
            break;
        case 'b2' :
            mat[1][1] = nbr;
            break;
        case 'b3' :
            mat[1][2] = nbr;
            break;
        case 'c1' :
            mat[2][0] = nbr;
            break;
        case 'c2' :
            mat[2][1] = nbr;
            break;
        case 'c3' :
            mat[2][2] = nbr;
            break;
        default :
            break;
    }
}

function casPossible() {
    if(mat[0][0] == mat[0][1] && mat[0][0]== mat[0][2] && mat[0][0]!= 0) {
        return true;
    }
    else if(mat[1][0] == mat[1][1] && mat[1][0] == mat[1][2] && mat[1][0] != 0) {
        return true;
    }
    else if(mat[2][0] == mat[2][1] && mat[2][0] == mat[2][2] && mat[2][0] != 0) {
        return true;
    }
    else if(mat[0][0] == mat[1][0] && mat[0][0] == mat[2][0] && mat[0][0] != 0) {
        return true;
    }
    else if(mat[0][1] == mat[1][1] && mat[0][1] == mat[2][2] && mat[0][1] != 0) {
        return true;
    }
    else if(mat[0][2] == mat[1][2] && mat[0][2] == mat[2][2] && mat[0][2] != 0) {
        return true;
    }
    else if(mat[0][0] == mat[1][1] && mat[0][0] == mat[2][2] && mat[0][0] != 0) {
        return true;
    }
    else if(mat[0][2] == mat[1][1] && mat[0][2] == mat[2][0] && mat[0][2] != 0) {
        return true;
    }
    else {
        return false;
    }
}