function consumodigiAPI(){
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(datos =>{
        console.log("La digi API a Respondido");
        console.log(datos);

        let Nombredigimon = datos[1].name
        let leveldigimon = datos[1].level
        let imagendelpokemon = datos[1].img
        

        console.log("Nombre del Digimon",Nombredigimon);
        console.log("Rango del Digimon", leveldigimon);

        let nombredigimon = document.getElementById("digimon-nombre")
        nombredigimon.innerHTML = Nombredigimon;

        let Rangodigimon = document.getElementById("rango");
        Rangodigimon.innerHTML = leveldigimon;

        let imagendigimon = document.getElementById("Imagen");
        imagendigimon.src = imagendelpokemon;

})}

function cambiarnumero(){
   
    let cambiarfondo = document.getElementById("digitrasero")
    cambiarfondo = ("#01")
   
}