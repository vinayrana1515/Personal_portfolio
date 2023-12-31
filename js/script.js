// DARK THEME
const themeButton = document.getElementById( 'theme-button' )
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVIOUSLY SELECTED TOPIC 
const selectedTheme = localStorage.getItem( 'selected-theme' )
const selectedIcon = localStorage.getItem( 'selected-icon' )

// We obtain the current theme that the interface has by validating the dark theme class

const getCurrentTheme = () => document.body.classList.contains( darkTheme ) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains( iconTheme ) ? 'uil-moon' : 'uil-sun'

// We need to validate if the user has previously chosen a topic
if ( selectedTheme ) { 
    document.body.classList[ selectedTheme === 'dark' ? 'add' : 'remove' ]( darkTheme )
    themeButton.classList[ selectedIcon === 'uil-mooon' ? 'add' : 'remove' ]( iconTheme )
    
}

// ACTIVATE / DEACTIVATE THE THEME MANUALLY WITH THE BUTTON
themeButton.addEventListener( 'click', () => { 
    // ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle( darkTheme )
    themeButton.classList.toggle( iconTheme )
    // We save the theme and the current icon that the user has chosen
    localStorage.setItem( 'selectedTheme', getCurrentTheme() )
    localStorage.setItem( 'selectedIcon', getCurrentIcon() )
    
} )

console.log( "theme setting work" )

//  MENU SHOW / HIDDEN
const navMenu = document.getElementById( 'nav-menu' )
const navToggle = document.getElementById( 'nav-toggle' )
const navClose = document.getElementById( 'nav-close' )


// MENU SHOW
// Validate if the constant exists
if ( navToggle ) { 
    navToggle.addEventListener( 'click', () => { 
        navMenu.classList.add('show-menu')
    })
}
// MENU Hide
// Validate if the constant exists
if ( navClose ) { 
    navClose.addEventListener( 'click', () => { 
        navMenu.classList.remove('show-menu')
    })
}


console.log( 'menu y setting work' )

// REMOVE MENU PROFILE
const navLink = document.querySelectorAll( '.nav__link' )

function linkAction() {
    const navMenu = document.getElementById( 'nav-menu' )
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove( 'show-menu' )
}

navLink.forEach( n => n.addEventListener( 'click', linkAction ) )
console.log( 'Remove menu profile is work' )


// Typewriter Effect



new Typewriter('#typewriter', {
  strings: ['Vinay Rana', 'Web-Developer'],
  autoStart: true,
  loop:true,
  cursor:""
} );

console.log( "typerwritre" )

//===================================== Portfolio Swiper =========================

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
console.log( "Portfolio Swiper is working!" )

//===================================== SCROLL UP =========================
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll');
    }
    else {
        scrollup.classList.remove('show-scroll')
    }
    console.log("Scroll up being called and working!")
}
window.addEventListener( 'scroll', scrollUp )

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })


    console.log("Section highlight working!")
}
window.addEventListener( 'scroll', scrollActive )


// EMAIL 

function sendEmail() {
    Email.send( {
    SecureToken : "4c1bde20-3c8c-4d18-84e7-ec1cac0fe428",
    To : 'vinayrana700@gmail.com',
    From : "ranaproject15@gmail.com",
    Subject : document.getElementById("formSubject").value,
        Body: "Name: " + document.getElementById( "formName" ).value + "<br> Email: " + document.getElementById( "formEmailId" ).value +
            "<br> Body: " + document.getElementById( "formBody" ).value 
}).then(
  message => alert(message)
);
}
