let IR = document.getElementById("IR").value
let sal_bruto = document.getElementById("sal_bruto").value
let sal_liquido = document.getElementById("sal_liquido").value


function Calcular() {

    if  (sal_bruto.parseFloat <= 1903.98){

        IR = 0;
        sal_liquido = (sal_bruto.parseFLoat - IR.parseFLoat);
        alert("O mesmo está isento do Imposto de Renda.");
      
    }

    else if (sal_bruto.parseFloat >= 1903.98 && sal_bruto.parseFloat <= 2826.66){}





}