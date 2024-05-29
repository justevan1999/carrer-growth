document.addEventListener("DOMContentLoaded", () => {
    const menu_toggle = document.getElementById("menu_toggle");
    menu_toggle.addEventListener("click", () => {
      const mobile_nav = document.getElementById("sm_ul");
      mobile_nav.classList.toggle("show_menu");
    });
  
    // Highlight the current page in the navigation menu
    const currentPage = window.location.pathname;
    console.log("Current Page:", currentPage);
  
    const navLinks = document.querySelectorAll("nav ul li a");
  
    // Default: Highlight the "Home" link
    const homeLink = document.querySelector("nav ul li a[href='/']");
    homeLink.classList.add("hideee");
  
    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
  
      // Check if the current page exactly matches the link path
      if (currentPage === linkPath) {
        link.classList.add("hideee");
      } else {
        link.classList.remove("hideee");
      }
    });
  });

  function scrollToTop() {
    window.scrollTo(0,0);
  }


  const btn_diva = document.getElementById("btn_diva");
  btn_diva.style.background = "#2287D2";
  const btn_divb = document.getElementById("btn_divb");
  const diva = document.getElementById("diva");
  const divb = document.getElementById("divb");

  btn_diva.addEventListener('click', ()=>{
    diva.style.display = "block";
    divb.style.display = "none";
    btn_divb.style.background = "transparent";
    btn_diva.style.background = "#2287D2";
  });

  btn_divb.addEventListener('click', ()=>{
    diva.style.display = "none";
    divb.style.display = "block";
    btn_diva.style.background = "transparent";
    btn_divb.style.backgroundColor = "#2287D2";
    
  });


  function tapCard() {
    window.open("https://drive.google.com/file/d/1ti6oEhgdoXRFhj2HKOYjOfHPDxFMWQht/view?usp=sharing");
    // tapCard.style.target = "_blank"
  };

  function tapMe() {
    window.open("https://drive.google.com/file/d/1ZYwDprzVAhYRVfCBUyVGDlAiWTFx-xq-/view?usp=sharing");
  };

  function tapAgain() {
    window.open("https://drive.google.com/file/d/1VV6jHv7n-fjLYCKK5bW6bLpDgVBAqH9J/view?usp=sharing");
  };


  function tapLast() {
    window.open("https://drive.google.com/file/d/1nP5fAffj9knRPMDDQ3W6GCUSZ58ov6nG/view?usp=sharing");
  };


  function toggle(){
    const trailer = document.querySelector(".trailer");
    const vids = document.getElementById("vids");
    trailer.classList.toggle("active");
    vids.play();
  }

  function stopVideo() {
    const vids = document.getElementById("vids"); 
    const trailer = document.querySelector(".trailer");
    vids.pause();
    vids.currentTime = 0;
    trailer.classList.toggle("active");
  }


  // const videoplayer = document.getElementById("videoplayer");
  // const myvideo = document.getElementById("myvideo");

  // function stopvideo() {
  //   videoplayer.style.display = "none";
  //   myvideo.pause();
  // }

  // function playvideo(file){
  //   myvideo.src = file;
  //   videoplayer.style.display = "block";
  //   // videoplayer.style.marginBottom = "2rem"
  // }



  // const navLinksEls = document.querySelectorAll('.nav__link');
  // const windowPathname = window.location.pathname;

  // navLinksEls.forEach(navLinksEl =>{
  //   const navLinkPathname = new URL (navLinksEl.href).pathname;
  //   if((windowPathname === navLinkPathname) ||(windowPathname === './index.html' && navLinkPathname === '/')){
  //     navLinksEl.classList.add('active');
  //   }
  // });




  function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const chevron = element.querySelector(".chevron");
  
    if (answer.style.display === "block") {
      answer.style.display = "none";
      chevron.classList.remove("up");
      chevron.classList.add("down");
    } else {
      answer.style.display = "block";
      chevron.classList.remove("down");
      chevron.classList.add("up");
    }
  };









    
  
  
  