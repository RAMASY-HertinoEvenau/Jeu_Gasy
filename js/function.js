var cpt = 0;
var statut = 0;
var mat = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function placementPion(val){
    cpt++;
    var val = val;
    var place = document.getElementById(val); 
    var stylePlace = window.getComputedStyle(place);
    var couleurPlace = stylePlace.getPropertyValue('background-color');
    if(statut == 3) {
        return 0;
    }
    else if(statut == 0) {
        if(cpt < 7) {
            if(couleurPlace != 'rgb(0, 128, 0)' && couleurPlace != 'rgb(255, 255, 0)') {
                if((cpt%2) == 0) {
                    place.style.backgroundColor= 'Yellow';
                    placePion(val,1);
                }
                else{
                    place.style.backgroundColor= 'Green';
                    placePion(val,2);
                }
                if(cpt > 4) {
                    etatDuJeu();
                    return 0;
                }
            }
            else {
                cpt--;
                window.alert("Un pion est déja placé à cette endroit");
            }
        }
        else {
            statut = 1;
        }
    }
    else{
        etatDuJeu(val, couleurPlace);
    }
}

function etatDuJeu(val, couleurPlace) {
    var resultat = casPossible();
    if(resultat == true) {
        if((cpt%2) == 0) {
            window.alert("Le joueur avec le pion JAUNE a gagné");    
        }
        else {
            window.alert("Le joueur avec le pion VERT a gagné");
        }
        statut = 3;
        return 0;
    }
    else {
        var val = val;
        var couleurPlace = couleurPlace;
        etape2(val, couleurPlace);
    }
}

function etape2(val, couleurPlace) {
    var val = val;
    var couleurPlace = couleurPlace;
    if(couleurPlace == 'rgba(0, 0, 0, 0)')  {
        cpt--;
        window.alert("Vous avez utiliser le nombre de pion maximale, veuillez selectionner un de vos pion et un endroit libre pour le déplacer");
    }
    else {

    }
}

function placePion(val, nbr) {
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