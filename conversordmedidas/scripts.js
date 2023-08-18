//Obter referencias aos elementos HTML
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

// Função de converter as unidades
function convert(){
//obter os valores das unidades e entrada e saida
const fromValue = fromElement.value;
const toValue = toElement.value;

// Verificar se as unidades de entrada e saida são iguais 

 if(fromValue === toValue){
outputElement.value = inputElement.value;
messageElement.textContent = ""; 
return;
 }
  //Converter o valor de entrada
 let meters;
 switch(fromValue){
    case"m":
    meters = inputElement.value;
    break;
    case "km" :
        meters = inputElement.value *1000;
        break;
        case "cm" :
            meters = inputElement.value /100;
            break;
            case "mm" :
                meters = inputElement.value / 1000;
                break;
 }
 //CONVERTER PARA A UNIDADE DE SAIDA
 let result;
 switch(toValue){
    case "m":
      result = meters;
    break;
      case "km":
        result = meters / 1000;
        break;
        case "mm":
            result = meters * 1000;
            break;
            case "cm":
        result = meters * 100;
        break;
 }
 //EXIBIR RESULTADO NA CAIXA DE SAIDA
 outputElement.value = result;
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;
  const message = `${
    inputElement.value
} ${fromLabel} equivalem a ${result} ${toLabel}`;
messageElement.textContent = message;


}
convertButton.addEventListener("click", convert);