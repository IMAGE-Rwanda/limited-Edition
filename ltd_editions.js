const navSlide = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const nav = document.querySelector('.nav-btns');

    mobileNav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
})  
}

navSlide();

window.onload = document.querySelector('.ordering-div-content').style.display = 'none';

let largeFrameImg = document.getElementById('selected-l-size').style,
    mediumFrame = document.getElementById('selected-m-size').style,
    smallFrame = document.getElementById('selected-s-size').style,
    mediumDisplay = document.querySelector('.medium-frame-img').style, 
    smallDisplay = document.querySelector('.small-frame-img').style,
    largeDisplay = document.querySelector('.large-frame-img').style,
    ImgTitle = document.getElementById('img-title'),
    ImgLocation = document.getElementById('loc-value'),
    smallSize = document.getElementById('small-size'),
    mediumSize = document.getElementById('medium-size'),
    largeSize = document.getElementById('large-size'),
    term_conds_checkbox = document.getElementById('terms-conds-checkbox'),
    checkout_btn = document.getElementById('checkout-btn'),
    total_money = document.getElementById('checkout-val'),
    selectedSize, div_on_display = '.top-div';

const imagesArray = [
    {
        title: 'Burera',
        location: 'Burera',
        link: './compressed/Burera.jpg'
    },
    {
        title: 'Ubumuntu Arts',
        location: 'Kigali',
        link: './compressed/UbumuntuArts2.jpg'
    },
    {
        title: 'Birds in Burera',
        location: 'Burera',
        link: './compressed/burerabirds_1.JPG'
    },
    {
        title: 'Exhibition',
        location: 'maya',
        link: './compressed/Exhibition3.jpg'
    },
    {
        title: 'Misty landscape',
        location: 'maya',
        link: './compressed/mistylandscape.jpg'
    },
    {
        title: 'Sunset',
        location: 'maya',
        link: './compressed/portrait.jpg'
    },
    {
        title: 'Anti corruption statue',
        location: 'maya',
        link: './compressed/KCC.jpg'
    },
    {
        title: 'Reflection',
        location: 'maya',
        link: './compressed/reflection.jpg'
    },
    {
        title: 'Rusiga panorama',
        location: 'Rusiga',
        link: './compressed/Rusiga.jpg'
    }
  
];

let grid_div = document.querySelector('.gallery-flex');
const addImgs = () => {
    for (let i = 0; i < imagesArray.length; i++) {
        grid_div.innerHTML += 
        `<div class='flex-item' onclick='assignImgInfo("${imagesArray[i].title}", "${imagesArray[i].location}", "${imagesArray[i].link}")'>
        <img tabindex='1' src='${imagesArray[i].link}'><div class='img_hover'><i class='fa fa-expand'></i></div></div>`;
    }
    grid_div.innerHTML += 
    `<li class='flex-item'></li>`;
}
addImgs();





function divSwap(prev_div_class, next_div_class) {

    document.querySelector(prev_div_class).classList.toggle('apear-effect', false);
    document.querySelector(prev_div_class).classList.toggle('disappear-div');
    document.querySelector(next_div_class).classList.toggle('apear-effect');
    div_on_display = next_div_class;    
}
function to_contactForm (prev_div_class, next_div_class) {
    document.querySelector(prev_div_class).classList.toggle('apear-effect', false);
    document.querySelector(prev_div_class).classList.toggle('disappear-div');
    document.getElementById('ordering-div').style.display = "none";
    document.querySelector(next_div_class).classList.toggle('apear-effect');
    div_on_display = next_div_class;  
}

function nav_div_swap (next_div_class) {
   divSwap(div_on_display, next_div_class)
}

const assignImgInfo = (title, location, imgLink) => {
    document.getElementById('ordering-div').style.display = 'block';
    document.querySelector('.ordering-div-content').style.display = 'block';
    
    term_conds_checkbox.checked = false;
    checkout_btn.disabled = true;
    checkout_btn.style.backgroundColor = '#fa7e99';

    largeDisplay.display = 'inline-block';
    mediumDisplay.display = 'none';
    smallDisplay.display = 'none';
    ImgTitle.innerHTML = title;
    ImgLocation.innerHTML = location;
    largeSize.focus();
    selectedSize = 'large';
 
    smallFrame.backgroundImage = `url('${imgLink}')`;
    mediumFrame.backgroundImage = `url('${imgLink}')`;
    largeFrameImg.backgroundImage = `url('${imgLink}')`;

}

document.querySelector('.close').onclick = function () {
    document.getElementById('ordering-div').style.display = "none";
  }
  

  window.onclick = function(event) {
    if (event.target == document.getElementById('ordering-div')) {
        document.getElementById('ordering-div').style.display = "none";
    }
  }



const sizeClick = (size) => {
    selectedSize = size;

    if (size === 'large') {
        largeDisplay.display = 'inline-block';
        mediumDisplay.display = 'none';
        smallDisplay.display = 'none';
        total_money.innerHTML = '800,000 RWF';

    } else if (size === 'medium') {
        mediumDisplay.display = 'inline-block';
        smallDisplay.display = 'none';
        largeDisplay.display = 'none';
        total_money.innerHTML = '600,000 RWF';

    } else if (size === 'small') {
        smallDisplay.display = 'inline-block';
        largeDisplay.display = 'none';
        mediumDisplay.display = 'none';
        total_money.innerHTML = '450,000 RWF'

    }
}

 
const checkboxClick = () => {
    if (!term_conds_checkbox.checked) {
        checkout_btn.disabled = true;
        checkout_btn.style.backgroundColor = '#fa7e99';
     
    } else if (term_conds_checkbox.checked){
        checkout_btn.disabled = false;
        checkout_btn.style.backgroundColor = '#F42A57';

    } 
}

document.getElementById

const submit_to_checkout = () => {
         let img_Info = 
         {
             title: ImgTitle.innerHTML,
             location: ImgLocation.innerHTML,
             selectedSize: selectedSize
         }; 
         console.log(img_Info);

}