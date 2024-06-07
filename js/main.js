//BANNERS SLIDE
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });

  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

  //EFEITO HEADER 
  window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  //MENU NAV PARA MOBILE
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });

  //EFEITO CONTADOR
  function medidas(){
    const contador1 =document.getElementById("contador1");
    let valor1=0;

    //setInterval- ele define um derterminado intervalo de tempo

    let tempo1 = setInterval(()=>{
        valor1 +=1;
        contador1.innerHTML = `+${valor1}`;

        if(valor1 == 170){
            //limpa o intervalo de tempo
            clearInterval(tempo1);
        }
    })

    //medidor 2
    const contador2 =document.getElementById("contador2");
    let valor2=0;

    //setInterval- ele define um derterminado intervalo de tempo

    let tempo2 = setInterval(()=>{
        valor2 +=1;
        contador2.innerHTML = `+${valor2}`;

        if(valor2 == 23){
            //limpa o intervalo de tempo
            clearInterval(tempo2);
        }
    })

    //medidor 3
    const contador3 =document.getElementById("contador3");
    let valor3=0;

    //setInterval- ele define um derterminado intervalo de tempo

    let tempo3 = setInterval(()=>{
        valor3 +=1;
        contador3.innerHTML = `+${valor3}`;

        if(valor3 == 5){
            //limpa o intervalo de tempo
            clearInterval(tempo3);
        }
    })

}

// Adicionado listener para o evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  alert('Olá, seja bem-vindo ao site do projeto OceanGuardian!');
  medidas();
});