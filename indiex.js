// Realiza a soma de inputs
function clicar()
{

   var n1 = document.querySelector(".inp1").value;
   var n2 = document.querySelector(".inp2").value;
   var n3 = document.querySelector(".inp3").value;

   // Verifica se o valor dos inputs é diferente de '0'
   // prog = progesso = 0 ou 1
   
   if (n1 == '' || n2 == '' || n3 == ''){
         var prog = 0;
      } else {
         prog = 1;
      }

   if (prog == '1') {

   if (n2 == '+')
  { 
      var resultado = parseFloat(n1) + parseFloat(n3);
      document.querySelector(".resultado").innerHTML = 'R$ ' + resultado + ',00';

      document.querySelector(".dis").innerHTML = 'Operação soma';
   }

   if (n2 == '-')
   { 
      var resultado = parseFloat(n1) - parseFloat(n3);
      document.querySelector(".resultado").innerHTML = 'R$ ' + resultado + ',00';

      document.querySelector(".dis").innerHTML = 'Operação subtração';
   }

      if (n2 == '*')
   {  
      var resultado = parseFloat(n1) * parseFloat(n3);
      document.querySelector(".resultado").innerHTML = 'R$ ' + resultado + ',00';
      document.querySelector(".dis").innerHTML = 'Operação multiplicação';
   }

      if (n2 == '/')
   { 
      var resultado = parseFloat(n1) / parseFloat(n3);
      document.querySelector(".resultado").innerHTML = 'R$ ' + resultado + ',00';
      document.querySelector(".dis").innerHTML = ' Operação divisão';
   }
   // transição da barra com o resultado

   
  
   document.querySelector(".barra").style.width = "130px";
}
else {
   alert("Informe um valor válido");
}
}

      // Limpa todos os campos para valores iniciais

function zerar(){
  

   document.querySelector(".resultado").innerHTML = 'R$ 0,00';
   document.querySelector(".inp1").value = '';
   document.querySelector(".inp2").value = '';
   document.querySelector(".inp3").value = '';
   document.querySelector(".dis").innerHTML = 'Operação'
   
   document.querySelector(".barra").style.width = "40px";
}