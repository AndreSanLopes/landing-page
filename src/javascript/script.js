/*
CÓDIGO JQUERY
*/

//ANIMAÇÃO DO BOTÃO MOBILE
$(document).ready(function () {
  //"OUVE" O CLICK NO BOTÃO
  $("#mobile_btn").on("click", function () {
    //ADICIONA A CLASS "active" NO BOTÃO
    $("#mobile_menu").toggleClass("active");
    //SELECIONA O ÍCONE DENTRO DO BOTÃO
    const icon = $(this).find("i");

    icon.toggleClass("fa-bars fa-xmark");

    //$('#mobile_btn').find('i').toggleClass('fa-xmark');
  });
});
