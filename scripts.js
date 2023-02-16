// HAMBURGER_MENU
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);

// NAV

var height = $('.top_header').height();

$(window).scroll(function() {
    if($(this).scrollTop() > height){
        $('nav.nav_menu').addClass('sticky_nav');
        $('.parallax_1').removeClass('parallax_normal');
        $('.parallax_1').addClass('parallax_sticky');
        $('.parallax_1_content').addClass('parallax_1_content_sticky')
        $('.parallax_1_content').removeClass('parallax_1_content_normal');
    } else {
        $('nav.nav_menu').removeClass('sticky_nav');
        $('.parallax_1').addClass('parallax_normal');
        $('.parallax_1').removeClass('parallax_sticky');
        $('.parallax_1_content').addClass('parallax_1_content_normal');
        $('.parallax_1_content').removeClass('parallax_1_content_sticky');
    }
});

// TABS

const tabs = {
  '1': ['image1.png', 'image2.png', 'image3.png', 'image4.png'],
  '2': ['image5.png', 'image6.png', 'image7.png', 'image8.png'],
  '3': ['image9.png', 'image10.png', 'image11.png', 'image12.png'],
  '4': ['image13.png', 'image14.png', 'image15.png', 'image16.png'],
};

const images = document.querySelector('.tab-images');
let activeTab;

const loadTab = (tab) => {
  images.textContent = '';
    
    for(const img of tabs[tab]) {
    	const el = document.createElement('img');
      el.src = `./img/tab/${img}`;
      images.appendChild(el);
    }
    
    if (activeTab) activeTab.classList.remove('tab-active')
    activeTab = document.querySelector(`.tab[data-tab="${tab}"]`);
    activeTab.classList.add('tab-active');
};

document.querySelectorAll('.tab').forEach(tab => {
	tab.addEventListener('click', e => loadTab(e.target.getAttribute('data-tab')))
});

window.addEventListener('load', () => loadTab('1'))

// SCROLL TOP

const btnScrollToTop = document.querySelector(".btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    btnScrollToTop.classList.add("active");
  } else {
    btnScrollToTop.classList.remove("active");
  }
})

// MESSAGE_MODAL

var modal = document.getElementById("message_modal");
var btn = document.getElementsByClassName("btn3")[0];
var close = document.getElementsByClassName("message_modal_close")[0];

btn.onclick = function() {
  modal.style.display = "flex";
}
close.onclick = function() {
  modal.style.display = "none";
  $(".contact_name").val('');
  $(".contact_discord").val('');
  $(".contact_text").val('');
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $(".contact_name").val('');
    $(".contact_discord").val('');
    $(".contact_text").val('');
    $('.container-input1').removeClass('error-contact');
    $('.container-input1').removeClass('success-contact');
    $('.container-input2').removeClass('error-contact');
    $('.container-input2').removeClass('success-contact');
    $('.container-input3').removeClass('error-contact');
    $('.container-input3').removeClass('success-contact');
  }
}

// MESSAGE_SCRIPT

$(document).ready(function() {
  $('.contact_submit').click(function () {

      var name = $('.contact_name').val()
      var discord = $('.contact_discord').val()
      var message = $('.contact_text').val()
      var statusElm = $('.small')
      var statusElmTwo = $('.small2')
      var statusElmThree = $('.small3')
      statusElm.empty()
      statusElmTwo.empty()
      statusElmThree.empty()

      if(name.length >= 5 && name.includes(' ')) {
        statusElm.append('')
        $('.container-input1').addClass('success-contact');
        $('.container-input1').removeClass('error-contact');
      } else {
        event.preventDefault()
        statusElm.append('Niepoprawne imię lub nazwisko!')
        $('.container-input1').addClass('error-contact');
        $('.container-input1').removeClass('success-contact');
      }

      if(discord.length >= 6 && discord.includes('#') ) {
        statusElmTwo.append('')
        $('.container-input2').addClass('success-contact');
        $('.container-input2').removeClass('error-contact');
      } else {
        event.preventDefault()
        statusElmTwo.append('Niepoporawny discord!')
        $('.container-input2').addClass('error-contact');
        $('.container-input2').removeClass('success-contact');
      }

      if(message.length >= 10) {
          statusElmThree.append('')
          $('.container-input3').addClass('success-contact');
          $('.container-input3').removeClass('error-contact');
      } else {
        event.preventDefault()
        statusElmThree.append('Twoja wiadomość ma mniej niż 10 znaków!')
        $('.container-input3').addClass('error-contact');
        $('.container-input3').removeClass('success-contact');
        $(".contact_text").val('');
      }
  })
})

// quick links test






// PONOWNE PRZESYŁANIE FORMULARZA (NA DOLE)

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}