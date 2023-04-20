

    fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(datos =>{
        console.log("La digi API a Respondido");
        console.log(datos);

        //variables//

        let Nombredigimon = datos[3].name
        let leveldigimon = datos[3].level
        let imagendelpokemon = datos[3].img
        let numerodeclase =datos[3]

        console.log("Nombre del Digimon",Nombredigimon);
        console.log("Rango del Digimon", leveldigimon);

        //vosualizacion//

        let nombredigimon = document.getElementById("DIGINOMBRE");
        nombredigimon.innerHTML = Nombredigimon;

        let Rangodigimon = document.getElementById("DIGIRANGO");
        Rangodigimon.innerHTML = leveldigimon;
        
        
        let imagendigimon = document.getElementById("digiimg");
        imagendigimon.src = imagendelpokemon;
    })
        


