function thisisthegame() {
let thing = prompt("What is the thing?", '');

let accessAllowed = thing > 24 ? true : false;

alert(accessAllowed)

let secondthing = prompt("how many of the thing is that?")

switch (secondthing) {
  case "36":
    alert( 'PUFFFFFFTTT... tis bad' );
    break;
  case "37":
    alert( 'tis good' );
    break;
  case "38":
    alert( 'PFFFFTTTT..... tis bad' );
    break;
  default:
    alert( "PFFFTTTT. tis bad" );
	
}
}
thisisthegame()