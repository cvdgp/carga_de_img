

let inputCargaFotos = document.getElementById("Imagenes");
const cargadorFotos = (() =>{  

        let text = `
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>

                  `;

                  
                for(let i = 1; i < 24 ; i++){

                        text+= ` <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`
                  }

                 text+=`
                </div>
                <div class="carousel-inner"> 
                        <div class="carousel-item active">
                        <img width="450px" src="img/img0.jpg" class="d-block w-100" alt="primera imf">
                </div>               
        
        `;

        for(let i = 1 ; i < 24; i++) {
                text += `                
                
                <div class="carousel-item">
                        <img  width="450px" max-heigth= "400px" src="img/img${i}.jpg" class="d-block w-100" alt="img${i}.jpg">
                </div>

        `
        
        };
                text+= `
        </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>*
                </button>

              </div>

                ` ;
            return text;
        });

        
    
    
        inputCargaFotos.innerHTML =  cargadorFotos();
        