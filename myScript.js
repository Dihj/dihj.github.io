var tabButtons = document.querySelectorAll(".tabcontainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabcontainer .tabPanel");
function showPanel(panelIndex, colorCode) {
                    
    tabButtons.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";
    tabPanels.forEach(function (node) {
        node.style.display = "none"; 
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, '#F5FFFA');

function rr_normale(){
    var rr = document.getElementById("choix_moisrr").value;
    var le_mois = rr;
    if(le_mois!="00"){
        document.getElementById("sary_paramrr").innerHTML = "<img src='img/" + le_mois + ".jpg' style='width:260px;' />";
    }
    else
        alert("Veuillez choisir un mois");
}
rr_normale();
function tn_normale(){
    var tn = document.getElementById("choix_moistn").value;
    var le_mois = tn;
    if(le_mois!="00"){
        document.getElementById("sary_paramtn").innerHTML = "<img src='img/" + le_mois + ".jpg' style='width:260px;' />";
    }
    else
        alert("Veuillez choisir un mois");
}
tn_normale();
function tn_normale(){
    var tn = document.getElementById("choix_moistn").value;
    var le_mois = tn;
    if(le_mois!="00"){
        document.getElementById("sary_paramtn").innerHTML = "<img src='img/" + le_mois + ".jpg' style='width:260px;' />";
    }
    else
        alert("Veuillez choisir un mois");
}
tn_normale();
function tx_normale(){
    var tx = document.getElementById("choix_moistx").value;
    var le_mois = tx;
    if(le_mois!="00"){
        document.getElementById("sary_paramtx").innerHTML = "<img src='img/" + le_mois + ".jpg' style='width:260px;' />";
    }
    else
        alert("Veuillez choisir un mois");
}
tx_normale();
function tmoy_normale(){
    var tmoy = document.getElementById("choix_moistmoy").value;
    var le_mois = tmoy;
    if(le_mois!="00"){
        document.getElementById("sary_paramtmoy").innerHTML = "<img src='img/" + le_mois + ".jpg' style='width:260px;' />";
    }
    else
        alert("Veuillez choisir un mois");
}
tmoy_normale();
// ho an toiny frcst
var tabButtons2 = document.querySelectorAll(".tabPanel .buttonfrcst button");
var tabPanels2 = document.querySelectorAll(".tabPanel .tabPanelfrcst");
function showFrcst(panelIndex, colorCode) {
      console.log(panelIndex,colorCode)  }            
 /*   tabButtons2.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons2[panelIndex].style.backgroundColor = colorCode;
    tabButtons2[panelIndex].style.color = "white";
    tabPanels2.forEach(function (node) {
        node.style.display = "none"; 
    });
    tabPanels2[panelIndex].style.display = "block";
    tabPanels2[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, '#f44336'); */
