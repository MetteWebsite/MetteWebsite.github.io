// -------------------- Mobilmeny --------------------

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
}

// Ändrar headern till svart vid scroll
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');

  // Om scrollpositionen är större än 100px, lägg till klassen "scrolled", annars ta bort den
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Fadear ut trianglarna vid scroll
window.addEventListener('scroll', function() {
  var arrows = document.querySelectorAll('.arrow');

  // Loopa igenom alla trianglar och ändra deras opacitet när man scrollar
  arrows.forEach(function(arrow) {
    var distanceFromTop = arrow.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    // Beräkna trianglarnas opacitet baserat på deras position på skärmen
    var opacity = distanceFromTop / screenHeight;

    // Ställ in trianglarnas opacitet
    arrow.style.opacity = opacity;
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function clearPageExcept(divIdToKeep) {
  // Ta bort allt HTML-innehåll som inte är inom den specificerade div'en
  document.body.childNodes.forEach(function(node) {
    if (node.id !== divIdToKeep) {
      node.remove();
    }
  });
}

//--------------------- Hem-knapps funktion -----------------------------
var homeButtons = document.querySelectorAll('.homeButton');

homeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    scrollToTop(); // Scrolla till toppen
    
    // Återställ klasserna på body så att den vanliga Hem-vyn visas igen
    document.body.className = ""; 
    document.body.style.setProperty('--bg-opacity', 0.3); // Återställ till skarp bild i toppen

    // Ladda om sidan efter en kort fördröjning för att rensa alla öppnade bilder/formulär
    setTimeout(function() {
      window.location.reload();
    }, 500); 
  });
});

//---------------------------Mette 26/27 funktion---------------------------------

// Variabel för att hålla reda på om currentMetteButton har klickats på eller inte
var metteButtonClicked = false;

// Funktion för att hantera Mette-knappklick
function handleMetteButtonClick() {
  scrollToTop(); // Scrolla mjukt upp till toppen så gruppbilden och pilarna syns först
  metteButtonClicked = true; 
  if (typeof contactButtonClicked !== 'undefined') contactButtonClicked = false;

  // 1. Aktivera Mette-vyn stenhårt i CSS via body-klassen
  document.body.classList.remove('view-contact');
  document.body.classList.add('view-mette');

  // 2. Håll gruppbilden på 0.3 i opacitet (skarp) i toppen så den tonas bort först när man skrollar ner
  document.body.style.setProperty('--bg-opacity', 0.3);
}

// FIX: Variabeln och loopen använder nu exakt samma namn (currentMetteButtons)
var currentMetteButtons = document.querySelectorAll('.currentMetteButton');
currentMetteButtons.forEach(function(button) {
  button.addEventListener('click', handleMetteButtonClick);
});

// Säkra learnMoreButton innan event lyssnas på
var learnMoreButton = document.getElementById('learnMoreButton');
if (learnMoreButton) {
  learnMoreButton.addEventListener('click', handleMetteButtonClick);
}

// Marit-buttons funktion, visa bild vid klick
function showMaritImage(buttonId, imageId) {
  var image = document.getElementById(imageId);
  if (!image) return; // Säkerhetsspärr om bilden saknas

  // Kontrollera om bilden är synlig eller gömd
  var isImageVisible = image.style.display === 'block';

  // Göm alla bilder först
  var allImages = document.querySelectorAll('.marit-content img');
  allImages.forEach(function(img) {
    img.style.display = 'none';
  });

  // Visa bara den valda bilden om den inte redan är synlig
  if (!isImageVisible) {
    image.style.display = 'block';
  }
}

//---------------------------Kontakt funktion---------------------------------

// Global variabel för att hålla reda på kontaktknappens status
var contactButtonClicked = false;

// Funktion för att hantera klick på kontaktknapparna
function handleContactButtonClick() {
  scrollToTop(); // Skrolla mjukt upp till toppen så att rubriken visas först
  contactButtonClicked = true;
  if (typeof metteButtonClicked !== 'undefined') metteButtonClicked = false;

  // 1. Slå på kontakt-vyn i CSS via body-klassen och stäng av mette-vyn
  document.body.classList.remove('view-mette');
  document.body.classList.add('view-contact');

  // 2. Tona bort bakgrundsbilden till 0.7 i botten för bättre kontrast bakom kontaktkorten
  document.body.style.setProperty('--bg-opacity', 0.7);
  
  // Stäng mobilmenyn automatiskt efter klick (om den var öppen)
  if (typeof mobileMenu !== 'undefined' && mobileMenu) {
    mobileMenu.classList.remove("active");
  }
}

// Koppla funktionen till ALLA kontaktknappar (både dator och mobil)
var contactButtons = document.querySelectorAll('.contactButton');
contactButtons.forEach(function(button) {
  button.addEventListener('click', handleContactButtonClick);
});

//-------------------------- Tjejfika funktion --------------------------------
document.addEventListener('DOMContentLoaded', function() {
  var tjejfikaContent = document.getElementById('tjejfikaContent');
  var slideIndex = 1;

  // SÄKRAD PIL-HÄMTNING: Hämta pilarna lokalt inuti Tjejfika-boxen
  var prevButton = tjejfikaContent ? tjejfikaContent.querySelector('.prev') : null;
  var nextButton = tjejfikaContent ? tjejfikaContent.querySelector('.next') : null;

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      var i;
      if (!tjejfikaContent) return;
      
      var slideshow = tjejfikaContent.querySelector(".slideshow-container");
      if (!slideshow) return; 
      
      var slides = slideshow.getElementsByClassName("mySlides");
      if (slides.length === 0) return;
      
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      
      if (slides[slideIndex - 1]) {
          slides[slideIndex - 1].style.display = "block";
      }
  }

  var tjejfikaButton = document.querySelector('.tjejfikaButton');
  if (tjejfikaButton) {
      tjejfikaButton.addEventListener('click', function() {
          if (typeof scrollToTop === "function") scrollToTop();
          openTjejfikaContent(); 
      });
  }

  // Funktion för att öppna tjejfika-innehållet
  function openTjejfikaContent() {
      if (!tjejfikaContent) return;
      
      tjejfikaContent.style.display = 'block'; 
      tjejfikaContent.classList.remove('hidden'); 
      
      // FIX: Tvingar fram tillbaka-knappen i JavaScript så att den övervinner döljningen från startsidan!
      var btn = tjejfikaContent.querySelector('.backButton');
      if (btn) {
          btn.style.setProperty('display', 'inline-block');
      }
      
      document.body.style.overflow = 'hidden'; 
      showSlides(slideIndex); 
  }

  // Lyssna på klickhändelsen för bakåtknappen - Specifikt för Tjejfika
  if (tjejfikaContent) {
      var backButton = tjejfikaContent.querySelector('.backButton');
      if (backButton) {
          backButton.addEventListener('click', function() {
              closeTjejfikaContent();
          });
      }
  }

  window.closeTjejfikaContent = function() {
      if (tjejfikaContent) {
          tjejfikaContent.style.display = 'none'; 
          tjejfikaContent.classList.add('hidden');
          document.body.style.overflow = ''; 
      }
  }

  if (prevButton && nextButton) {
      prevButton.addEventListener('click', function() { plusSlides(-1); });
      nextButton.addEventListener('click', function() { plusSlides(1); });
  }
});

//-------------------------- Ovveinvigning funktion --------------------------------
document.addEventListener('DOMContentLoaded', function() {
  var ovveContent = document.getElementById('ovveContent');
  var prevButton = ovveContent.querySelector('.prev');
  var nextButton = ovveContent.querySelector('.next');
  var slideIndex = 1;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var slides = ovveContent.getElementsByClassName("OvveSlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  var ovveButton = document.querySelector('.ovveinvigningButton');
  ovveButton.addEventListener('click', function() {
    scrollToTop();
    openOvveContent();
  });

  function openOvveContent() {
    ovveContent.style.display = 'block';
    document.body.style.overflow = 'hidden';
    showSlides(slideIndex);
  }

  var backButton = ovveContent.querySelector('.backButton');
  backButton.addEventListener('click', function() {
    closeOvveContent();
  });

  function closeOvveContent() {
    ovveContent.style.display = 'none';
    document.body.style.overflow = '';
  }

  prevButton.addEventListener('click', function() {
    plusSlides(-1);
  });

  nextButton.addEventListener('click', function() {
    plusSlides(1);
  });
});

//-------------------------- Rosa Veckan funktion --------------------------------
document.addEventListener('DOMContentLoaded', function() {
  var rosaVeckanContent = document.getElementById('rosaVeckanContent');
  var prevButton = rosaVeckanContent.querySelector('.prev');
  var nextButton = rosaVeckanContent.querySelector('.next');
  var slideIndex = 1;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var slides = rosaVeckanContent.getElementsByClassName("rosaVeckanSlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  var rosaVeckanButton = document.querySelector('.rosaVeckanButton');
  rosaVeckanButton.addEventListener('click', function() {
    scrollToTop();
    openRosaVeckanContent();
  });

  function openRosaVeckanContent() {
    rosaVeckanContent.style.display = 'block';
    document.body.style.overflow = 'hidden';
    showSlides(slideIndex);
  }

  var backButton = rosaVeckanContent.querySelector('.backButton');
  backButton.addEventListener('click', function() {
    closeRosaVeckanContent();
  });

  function closeRosaVeckanContent() {
    rosaVeckanContent.style.display = 'none';
    document.body.style.overflow = '';
  }

  prevButton.addEventListener('click', function() {
    plusSlides(-1);
  });

  nextButton.addEventListener('click', function() {
    plusSlides(1);
  });
});

//-------------------------- Gaia Event funktion --------------------------------
// document.addEventListener('DOMContentLoaded', function() {
//   var gaiaContent = document.getElementById('gaiaContent');
//   //var prevButton = gaiaContent.querySelector('.prev');
//   var nextButton = gaiaContent.querySelector('.next');
//   var slideIndex = 1;

//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }

//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }

//   function showSlides(n) {
//     var slides = gaiaContent.getElementsByClassName("gaiaSlides");
//     if (n > slides.length) { slideIndex = 1; }
//     if (n < 1) { slideIndex = slides.length; }
//     for (var i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
//   }

//   var enkvallButton = document.querySelector('.enkvallButton');
//   enkvallButton.addEventListener('click', function() {
//     scrollToTop();
//     openGaiaContent();
//   });

//   function openGaiaContent() {
//     gaiaContent.style.display = 'block';
//     document.body.style.overflow = 'hidden';
//     showSlides(slideIndex);
//   }

//   var backButton = gaiaContent.querySelector('.backButton');
//   backButton.addEventListener('click', function() {
//     closeGaiaContent();
//   });

//   function closeGaiaContent() {
//     gaiaContent.style.display = 'none';
//     document.body.style.overflow = '';
//   }

//   prevButton.addEventListener('click', function() {
//     plusSlides(-1);
//   });

//   nextButton.addEventListener('click', function() {
//     plusSlides(1);
//   });
// });

//-------------------------- Damsittningen funktion --------------------------------
document.addEventListener('DOMContentLoaded', function() {
  var damsittningContent = document.getElementById('damsittningContent');
  var prevButton = damsittningContent.querySelector('.prev');
  var nextButton = damsittningContent.querySelector('.next');
  var slideIndex = 1;

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      var slides = damsittningContent.getElementsByClassName("damsittningSlides");
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
  }

  var damsittningButton = document.querySelector('.damsittningButton');
  damsittningButton.addEventListener('click', function() {
      scrollToTop();
      openDamsittningContent();
  });

  function openDamsittningContent() {
      damsittningContent.style.display = 'block';
      document.body.style.overflow = 'hidden';
      showSlides(slideIndex);
  }

  var backButton = damsittningContent.querySelector('.backButton');
  backButton.addEventListener('click', function() {
      closeDamsittningContent();
  });

  function closeDamsittningContent() {
      damsittningContent.style.display = 'none';
      document.body.style.overflow = '';
  }

  prevButton.addEventListener('click', function() {
      plusSlides(-1);
  });

  nextButton.addEventListener('click', function() {
      plusSlides(1);
  });
});

//-------------------------- Sponsor funktion --------------------------------
document.addEventListener('DOMContentLoaded', function() {
  var sponsorContent = document.getElementById('sponsorContent');
  var prevButton = sponsorContent.querySelector('.prev');
  var nextButton = sponsorContent.querySelector('.next');
  var slideIndex = 1;

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      var slides = sponsorContent.getElementsByClassName("sponsorSlides");
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
  }

  var sponsorButton = document.querySelector('.sponsButton');
  sponsorButton.addEventListener('click', function() {
      scrollToTop();
      openSponsorContent();
  });

  function openSponsorContent() {
      sponsorContent.style.display = 'block';
      document.body.style.overflow = 'hidden';
      showSlides(slideIndex);
  }

  var backButton = sponsorContent.querySelector('.backButton');
  backButton.addEventListener('click', function() {
      closeSponsorContent();
  });

  function closeSponsorContent() {
    sponsorContent.style.display = 'none';
    document.body.style.overflow = '';
  }

  prevButton.addEventListener('click', function() {
      plusSlides(-1);
  });

  nextButton.addEventListener('click', function() {
      plusSlides(1);
  });
});

//-------------------------- Mettes märken funktion --------------------------------
document.addEventListener('DOMContentLoaded', function() {
  var markenContent = document.getElementById('markenContent');
  var prevButton = markenContent.querySelector('.prev');
  var nextButton = markenContent.querySelector('.next');
  var slideIndex = 1;

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      var slides = markenContent.getElementsByClassName("markenSlides");
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
  }

  var markenButton = document.querySelector('.markenButton');
    markenButton.addEventListener('click', function() {
    scrollToTop();
    openMarkenContent();
  });

  function openMarkenContent() {
    markenContent.style.display = 'block';
    document.body.style.overflow = 'hidden';
    showSlides(slideIndex);
  }

  var backButton = markenContent.querySelector('.backButton');
  backButton.addEventListener('click', function() {
      closeMarkenContent();
  });

  function closeMarkenContent() {
    markenContent.style.display = 'none';
    document.body.style.overflow = '';
  }

  prevButton.addEventListener('click', function() {
      plusSlides(-1);
  });

  nextButton.addEventListener('click', function() {
      plusSlides(1);
  });
});

//-------------------------- Sök Mette funktion --------------------------------
document.addEventListener('DOMContentLoaded', function() {
  var sokMetteContent = document.getElementById('sokMetteContent');

  var sokMetteButton = document.querySelector('.sokMetteButton');
  sokMetteButton.addEventListener('click', function() {
      scrollToTop();
      openSokMetteContent();
  });

  function openSokMetteContent() {
      sokMetteContent.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }

  var backButton = sokMetteContent.querySelector('.backButton');
  backButton.addEventListener('click', function() {
      closeSokMetteContent();
  });

  function closeSokMetteContent() {
      sokMetteContent.style.display = 'none';
      document.body.style.overflow = '';
  }
});

//-------------------------- Koppling av Mette 26/27 och Kontakt textlänkar --------------------------------

//-------------------------- FOOTER-LÄNKAR --------------------------------

document.addEventListener('DOMContentLoaded', function () {

    const metteLink = document.getElementById('metteLink');
    const contactLink = document.getElementById('contactLink');

    const currentMetteButtons = document.querySelectorAll('.currentMetteButton');
    const contactButtons = document.querySelectorAll('.contactButton');

    // "Om oss" / Mette 26/27
    if (metteLink) {
        metteLink.addEventListener('click', function () {
            currentMetteButtons[0].click();
        });
    }

    // "Kontakta"
    if (contactLink) {
        contactLink.addEventListener('click', function () {
            contactButtons[0].click();
        });
    }

});

document.addEventListener('DOMContentLoaded', function () {
  const contentDiv = document.getElementById('metteNOW-content');
  const images = contentDiv.getElementsByTagName('img');

  Array.from(images).forEach((img) => {
      const container = document.createElement('div');
      container.classList.add('image-container');

      const overlay = document.createElement('div');
      overlay.classList.add('image-overlay');

      // Dela alt-text för att få roll och namn
      const altText = img.alt;
      const parts = altText.split(' '); 
      const role = parts[0]; 
      const name = parts.slice(1).join(' '); 

      // Lägg till roll och namn i överlägget
      overlay.innerHTML = `<strong>${role}</strong><br>${name}`;

      // Omslut bilden med containern
      img.parentNode.insertBefore(container, img);
      container.appendChild(img);
      container.appendChild(overlay);
  });
});
