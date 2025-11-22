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
  //ANIMAÇÕES DE SCROLLING
  const sections = $("section");
  const navItems = $(".nav-item");

  //BUFFER DE ATIVAÇÃO DO SCROLL SPY
  const ACTIVATION_OFFSET = 100;

  //FUNÇÃO DE SCROLL : ANIMAÇÃO
  $(window).on("scroll", function () {
    const header = $("header");
    const headerHeight = header.outerHeight();
    //GUARDAR POSIÇÃO DO SCROLL NA JANELA
    const scrollPosition = $(window).scrollTop() - headerHeight; //ALTURA DO HEADER É SUBTRAÍDA
    //ANIMAÇÃO SOMBREAMENTO HEADER
    let activeSectionIndex = 0;
    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0,0,0,0.1");
    }
    //LOOP
    sections.each(function (i) {
      const section = $(this); //GUARDA A SESSÃO
      const sectionTop = section.offset().top - headerHeight - ACTIVATION_OFFSET; //RECEBE O TOPO DA SESSÃO - ALTURA DA NAV
      const sectionBottom = sectionTop + section.outerHeight();

      //VERIFICA SE A POSIÇÃO DA ROLAGEM
      //ESTÁ NA ÁREA DA SEÇÃO ESPECIFICADA
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false; //SAI DO LOOP
      }
    });

    navItems.removeClass("active"); //REMOVE A CLASSE "ACTIVE" DOS MENUS CONFORME O SCROLL
    $(navItems[activeSectionIndex]).addClass("active"); //TROCA A CLASSE DO MENU PARA "ACTIVE"
  });

  //ANIMAÇÕES SCROLL REVEAL

  //CALL TO ACTION
  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  //CALL TO ACTION
  ScrollReveal().reveal(".soap", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });

  //DEPOIMENTOS - empresa
  ScrollReveal().reveal("#testimonial_ceo", {
    origin: "left",
    duration: 1000,
    distance: "20%",
  });

  //DEPOIMENTOS - feedbacks
  ScrollReveal().reveal(".feedback", {
    origin: "right",
    duration: 1000,
    distance: "20%",
  });
});
