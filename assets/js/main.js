
let text ="";
let inputCargaFotos = document.getElementById("Imagenes");
const cargadorFotos = (() =>{  
        for(let i = 0 ; i < 24; i++) {
            text += `<img   class="foto" 
                            loading="lazy"
                            width="450px" 
                            style ="
                                    margin: 15px;
                                    border: 5px solid white;
                                    "
                            src="img/img${i}.jpg" 
                            alt="foto ${i}">`;
            }
            return text;
        });

        
    
    
        inputCargaFotos.innerHTML =  cargadorFotos();