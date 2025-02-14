/* const produtos vindo: ./list.js */

const folder = "./assets/imagens/geral/";

const filheiras = [
    document.querySelector("#itens01"),
    document.querySelector("#itens02"),
    document.querySelector("#itens03"),
]



const in_container = 4;
let iten_position = 0;




function ExibItens(container) {


    for (i = iten_position, y = 0; y < in_container; ++y, ++i) {



        container.innerHTML += `
              <div class="produto">
                <div class="coloring">
                    <img class="foto" src=${folder + produtos[i].img} />
                    <img class="sobre" src="./assets/imagens/geral/back.jpg"/>
                    <button> Compra rapida</button>
                </div>
                    <p>${produtos[i].nome}</p>
                    <div class="price">
            ${produtos[i].promotion != false ? `<span> ${"R$ " + produtos[i].promotion} </span>` : " "} 
                        <p>R$ ${produtos[i].price}</p>
                    </div>
${produtos[i].parcelas != false ? `<span> ${produtos[i].parcelas + "x " + " de " + "R$" + (produtos[i].price / produtos[i].parcelas).toFixed(2)} </span>` : ""} 
                
                ${produtos[i].novo == true ? `<p class="new"> Novo </p>` : ""}
                ${produtos[i].off != false ? `<p class="new"> ${produtos[i].off}% off </p>` : ""}

                
                </div>`

        ++iten_position;
    }
}

for (n = 0; n < filheiras.length; ++n) {
    ExibItens(filheiras[n]);
}









/* 
div class="produto">
                <div class="coloring">
                    <img src="./assets/imagens/geral/puf.jpg" />
                    <button> Compra rapida</button>
                </div>
                    <p>Lorem Pelucia </p>
                    <div class="price">
                        <span>R$ 99.99</span>
                        <p>R$ 50.99</p>
                    </div>
                    <span> 99x de 99,99</span>
                
                <p class="new">50% off</p>
                
                </div>
*/