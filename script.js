/*==========================================
        ROYAL BITES
        MAIN JAVASCRIPT
==========================================*/

/*==========================================
        MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", ()=>{

        navLinks.classList.toggle("show");

    });

}

/*==========================================
        CLOSE MENU AFTER CLICK
==========================================*/

const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("show");

    });

});

/*==========================================
        STICKY NAVBAR
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});