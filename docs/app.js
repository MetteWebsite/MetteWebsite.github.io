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
var homeButton = document.querySelector('.homeButton');

homeButton.addEventListener('click', function() {
  scrollToTop(); // Scrolla till toppen

  // Ladda om sidan efter en kort fördröjning för att säkerställa att scrollen är klar
  setTimeout(function() {
    window.location.reload();
  }, 500); // 500ms fördröjning, justera vid behov
});

//---------------------------Mette 24/25 funktion---------------------------------

// Variabel för att hålla reda på om currentMetteButton har klickats på eller inte
var metteButtonClicked = false;

// Variabel för olika contents som ska/inte ska visas vid klick
var currentMetteButton = document.querySelector('.currentMetteButton');
var learnMoreButton = document.getElementById('learnMoreButton');
var metteNowContent = document.getElementById('metteNOW-content');
var otherContent = document.querySelectorAll('.content-section > *:not(#metteNOW-content)');
var bottomContent = document.querySelector('.bottom-section');
var whoAreWeText = document.getElementById('whoAreWe');
var maritContent = document.getElementById('marit-content');
var pleaseContactUs = document.querySelector('.please-contact-us');
var contactUsInfo = document.querySelector('.contact-us-information');

// Funktion för att visa eller dölja whoAreWeText
function toggleWhoAreWeText() {
  whoAreWeText.style.display = metteButtonClicked ? 'block' : 'none';
}

// Funktion för att visa eller dölja pleaseContactUs
function togglePleaseContactUs() {
  pleaseContactUs.style.display = contactButtonClicked ? 'block' : 'none';
}

// Funktion för att hantera Mette-knappklick
function handleMetteButtonClick() {
  scrollToTop(); // Scrolla till toppen
  metteButtonClicked = true; // Sätt Mette-knappen som klickad
  contactButtonClicked = false; // Återställ kontaktknappens status
  toggleWhoAreWeText(); // Visa eller dölj Who Are We text
  togglePleaseContactUs(); // Visa eller dölj Please Contact Us text

  document.querySelector('body').style.setProperty('--bg-opacity', 0.7);

  // Visa Mette NOW-innehåll och maritContent
  metteNowContent.style.display = 'block';
  maritContent.style.display = 'block';

  // Visa bottom-content
  bottomContent.style.visibility = 'visible';

  // Göm allt annat innehåll i content-sektionen förutom metteNOW-content och maritContent
  otherContent.forEach(function(element) {
    if (element !== bottomContent && element !== metteNowContent && element !== maritContent) {
      element.style.display = 'none';
    }
  });

  // Göm kontaktinnehåll
  pleaseContactUs.style.display = 'none';
  contactUsInfo.style.display = 'none';

  // Ändra opaciteten
  metteNowContent.classList.add('opaque-content');
  maritContent.classList.add('opaque-content');
}

currentMetteButton.addEventListener('click', handleMetteButtonClick);
learnMoreButton.addEventListener('click', handleMetteButtonClick);

// Marit-buttons funktion, visa bild vid klick
function showMaritImage(buttonId, imageId) {
  // Hämta knappen som klickades på
  var button = document.getElementById(buttonId);
  // Hämta bilden som motsvarar knappen
  var image = document.getElementById(imageId);

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

var contactButton = document.querySelector('.contactButton');

contactButton.addEventListener('click', function() {
  scrollToTop(); // Scrolla till toppen
  contactButtonClicked = true; // Sätt kontaktknappen som klickad
  metteButtonClicked = false; // Återställ Mette-knappens status
  toggleWhoAreWeText(); // Visa eller dölj Who Are We text
  togglePleaseContactUs(); // Visa eller dölj Please Contact Us text

  document.querySelector('body').style.setProperty('--bg-opacity', 0.7);

  // Visa kontaktinformationen
  contactUsInfo.style.display = 'block';
  pleaseContactUs.style.display = 'block';

  // Visa bottom-content
  bottomContent.style.visibility = 'visible';

  // Göm allt annat innehåll i content-sektionen förutom kontaktinformationen
  otherContent.forEach(function(element) {
    if (element !== bottomContent && element !== contactUsInfo && element !== pleaseContactUs) {
      element.style.display = 'none';
    }
  });

  // Göm Mette-relaterat innehåll
  metteNowContent.style.display = 'none';
  maritContent.style.display = 'none';

  // Ändra opaciteten för specifika innehållselement
  pleaseContactUs.classList.add('opaque-content');
  contactUsInfo.classList.add('opaque-content');
});

// När sidan laddas in
document.addEventListener('DOMContentLoaded', function() {
  // Göm metteNOW-content, marit-content och bottom-content vid start
  metteNowContent.style.display = 'none';
  whoAreWeText.style.display = 'none';
  maritContent.style.display = 'none';

  // Göm kontaktinnehåll vid start
  contactUsInfo.style.display = 'none';
  pleaseContactUs.style.display = 'none';
});

//-------------------------- Tjejfika funktion --------------------------------
document.addEventListener('DOMContentLoaded', function() {
  var tjejfikaContent = document.getElementById('tjejfikaContent');
  var prevButton = document.querySelector('.prev');
  var nextButton = document.querySelector('.next');
  var slideIndex = 1;

  // Funktion för att hantera före och nästa slide
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  // Funktion för att visa specifik slide
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  // Funktion att visa slides baserat på index
  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
  }

  // Lyssna på klickhändelsen för tjejfika-knappen
  var tjejfikaButton = document.querySelector('.tjejfikaButton');
  tjejfikaButton.addEventListener('click', function() {
      scrollToTop(); // Scrolla till toppen
      openTjejfikaContent(); // Öppna tjejfika-innehållet
  });

  // Funktion för att öppna tjejfika-innehållet
  function openTjejfikaContent() {
      tjejfikaContent.style.display = 'block'; // Visa tjejfika-innehållet
      document.body.style.overflow = 'hidden'; // Dölj scrollbalken på kroppen
      showSlides(slideIndex); // Visa första slide
  }

  // Lyssna på klickhändelsen för bakåtknappen
  var backButton = document.querySelector('.backButton');
  backButton.addEventListener('click', function() {
      closeFikaContent(); // Stäng tjejfika-innehållet när användaren klickar på bakåtknappen
  });

  // Funktion för att stänga tjejfika-innehållet
  function closeFikaContent() {
      tjejfikaContent.style.display = 'none'; // Göm tjejfika-innehållet
      document.body.style.overflow = ''; // Återställ scrollbeteendet
  }

  // Lyssna på klickhändelser för prev och next buttons
  prevButton.addEventListener('click', function() {
      plusSlides(-1); // Flytta till föregående slide
  });

  nextButton.addEventListener('click', function() {
      plusSlides(1); // Flytta till nästa slide
  });
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
document.addEventListener('DOMContentLoaded', function() {
  var gaiaContent = document.getElementById('gaiaContent');
  var prevButton = gaiaContent.querySelector('.prev');
  var nextButton = gaiaContent.querySelector('.next');
  var slideIndex = 1;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var slides = gaiaContent.getElementsByClassName("gaiaSlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  var enkvallButton = document.querySelector('.enkvallButton');
  enkvallButton.addEventListener('click', function() {
    scrollToTop();
    openGaiaContent();
  });

  function openGaiaContent() {
    gaiaContent.style.display = 'block';
    document.body.style.overflow = 'hidden';
    showSlides(slideIndex);
  }

  var backButton = gaiaContent.querySelector('.backButton');
  backButton.addEventListener('click', function() {
    closeGaiaContent();
  });

  function closeGaiaContent() {
    gaiaContent.style.display = 'none';
    document.body.style.overflow = '';
  }

  prevButton.addEventListener('click', function() {
    plusSlides(-1);
  });

  nextButton.addEventListener('click', function() {
    plusSlides(1);
  });
});

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

//-------------------------- Koppling av Mette 24/25 och Kontakt textlänkar --------------------------------

// Variabel för att hålla reda på om contactButton har klickats på eller inte
var contactButtonClicked = false;

// Hämta Mette 24/25 länken och koppla den till currentMetteButton funktionaliteten
var metteLink = document.getElementById('metteLink');
metteLink.addEventListener('click', function() {
  currentMetteButton.click(); // Simulerar ett klick på currentMetteButton
});

// Hämta Kontakt länken och koppla den till contactButton funktionaliteten
var contactLink = document.getElementById('contactLink');
contactLink.addEventListener('click', function() {
  contactButton.click(); // Simulerar ett klick på contactButton
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
