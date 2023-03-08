var today = new Date();
var dayOfWeek = today.getDay();
const precioSimple = document.getElementById("precioSimple");
const precioCompleta = document.getElementById("precioCompleta");
const precioDobleC = document.getElementById("precioDobleC");
const precioBondiola = document.getElementById("precioBondiola");
const precioLomo = document.getElementById("precioLomo");
const precioCono = document.getElementById("precioCono");
const precioConoCC = document.getElementById("precioConoCC");
const preciosalchi = document.getElementById("preciosalchi");



if (dayOfWeek === 3 ) {
    precioSimple.innerHTML = "$1000";
    precioCompleta.innerHTML = "$1400";
    precioDobleC.innerHTML = "$1600";
    precioBondiola.innerHTML = "$1800";
    precioLomo.innerHTML = "$1800";
    precioCono.innerHTML = "$500";
    precioConoCC.innerHTML = "$650";
    preciosalchi.innerHTML = "$1100";
    
    function calculateTotal(){
        //comidas
        
        const hamburgerQty = document.getElementById("hamburguesaSimple").value;
        const completaQty = document.getElementById("hamburguesaCompleta").value;
        const dobleCQty = document.getElementById("hamburguesadobleC").value;
        const bondiolaQty = document.getElementById("sandwichBondiola").value;
        const lomoQty = document.getElementById("sandwichLomo").value;
        const conoQty = document.getElementById("cono").value;
        const conoCCQty = document.getElementById("conoCC").value;
        const salchiQty = document.getElementById("salchi").value;
        const bebidaQty = document.getElementById("bebida").value;
        const cervezaQty = document.getElementById("cerveza").value;
        
        //costo
        const hamburguesaSimpleCost = hamburgerQty * 1000;
        const completaCost = completaQty * 1400;
        const dobleCost = dobleCQty * 1600;
        const bondiolaCost = bondiolaQty * 1800;
        const lomoCost = lomoQty * 1800;
        const conoCost = conoQty * 500;
        const conoCCcost = conoCCQty * 650;
        const salchiCost = salchiQty * 1100;
        const bebidaCost = bebidaQty * 350;
        const cervezasCost = cervezaQty * 600;
        
        //total
        const totalCost = hamburguesaSimpleCost + completaCost + dobleCost + bondiolaCost + lomoCost + conoCost + conoCCcost + salchiCost + bebidaCost + cervezasCost;
        

        //poner total
        document.getElementById("totalCost").innerHTML = "Total: $" + totalCost;
    }
        
} else{
    precioSimple.innerHTML = "$no es miercoles"

    function calculateTotal() {
        //comidas
        const hamburgerQty = document.getElementById("hamburguesaSimple").value;
    
        //costo
        const hamburguesaSimpleCost = hamburgerQty * 1000;
    
        //total
        const totalCost = hamburguesaSimpleCost;
        
        //poner total
        document.getElementById("totalCost").innerHTML = "Total Cost: $" + totalCost;
    }
}