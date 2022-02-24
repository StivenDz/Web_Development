//                                               Primer Problema De Cofla

let dineroCofla = parseInt(prompt('Cuanto dinero tienes Cofla?'));
let dineroRoberto = parseInt(prompt('Cuanto dinero tienes Roberto?'));
let dineroPedro = parseInt(prompt('Cuanto dinero tienes Pedro?'));

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("Cofla, comprate el helado de agua");
	alert("y te sobran " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("Cofla, comprate el helado de crema");
	alert("y te sobran " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("Cofla, comprate el helado de heladix");
	alert("y te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("Cofla, comprate el helado de heladovich");
	alert("y te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("Cofla, comprate el helado de helardo");
	alert("y te sobran " + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("Cofla, comprate helado con confites o el pote de 1/4kg");
	alert("y te sobran " + (dineroCofla - 2.9));

} else {
	alert("lo siento Cofla, pobre de mierda, no te alcanza para ningun helado");
}

// --------------------------------------------------------------------------
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("Roberto, comprate el helado de agua");
	alert("y te sobran " + (dineroRoberto - 0.6));
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("Roberto, comprate el helado de crema");
	alert("y te sobran " + (dineroRoberto - 1));
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("Roberto, comprate el helado de heladix");
	alert("y te sobran " + (dineroRoberto - 1.6));
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("Roberto, comprate el helado de heladovich");
	alert("y te sobran " + (dineroRoberto - 1.7));
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("Roberto, comprate el helado de helardo");
	alert("y te sobran " + (dineroRoberto - 1.8));
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto, comprate helado con confites o el pote de 1/4kg");
	alert("y te sobran " + (dineroRoberto - 2.9));

} else {
	alert("lo siento Roberto, pobre de mierda, no te alcanza para ningun helado");
}

// ------------------------------------------------------------------------------------

if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("Pedro, comprate el helado de agua");
	alert("y te sobran " + (dineroPedro - 0.6));
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("Pedro, comprate el helado de crema");
	alert("y te sobran " + (dineroPedro - 1));
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("Pedro, comprate el helado de heladix");
	alert("y te sobran " + (dineroPedro - 1.6));
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("Pedro, comprate el helado de heladovich");
	alert("y te sobran " + (dineroPedro - 1.7));
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("Pedro, comprate el helado de helardo");
	alert("y te sobran " + (dineroPedro - 1.8));
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate helado con confites o el pote de 1/4kg");
	alert("y te sobran " + (dineroPedro - 2.9));

} else {
	alert("lo siento Pedro, pobre de mierda, no te alcanza para ningun helado");
}

// Ejercicio 2

boleto = 0.9;
dinero = 2.7;

if (dinero/boleto < 1) {
	alert("no alcanzan boletos bro")
}

else if (dinero/boleto >= 1 && dinero/boleto < 2) {
	vuelto = dinero - boleto;
	alert("comprar 1 y el vuelto es: " + vuelto);
}

else if (dinero/boleto >= 2 && dinero/boleto < 3){
	vuelto = dinero - boleto*2;
    alert("comprar 2 y el vuelto es: " + vuelto);
}

else {
	vuelto = dinero - boleto*2;
    alert("comprar dos y el vuelto es: " + vuelto + ", regalarlo")
}

// Eejrcicio 3

let sospechoso1 = prompt("Sospechoso 1 ¿mintió?");
let sospechoso2 = prompt("Sospechoso 2 ¿mintió?");
let cofla = prompt("Sospechoso 3 ¿mintió?");


if (sospechoso1 == 1) {
	alert("sospechoso 1 mintió, darle descarga electrica")
}
else if (sospechoso1 == 2) {
	alert("sospechoso 1 no mintió, no darle descarga")
}

else {
	alert("no se si sospechoso 1 minitó, probemos de vuelta")
}


if (sospechoso2 == 1) {
	alert("sospechoso 2 mintió, darle descarga electrica")
}
else if (sospechoso2 == 2) {
	alert("sospechoso 2 no mintió, no darle descarga")
}

else {
	alert("no se si sospechoso 2 mintió, probemos de vuelta")
}


if (cofla == 1) {
	alert("cofla mintió, no darle descarga")
}
else if (cofla == 2) {
	alert("cofla no mintió, no darle descarga")
}

else {
	alert("no se si cofla mintió, probemos de vuelta")
}