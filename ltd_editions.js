const navSlide = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const nav = document.querySelector('.nav-btns');

    mobileNav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
})  
}

navSlide();

window.onload = document.getElementById('ordering-div').style.display = 'none';

const imagesArray = [
    {
        title: 'kinunu',
        location: 'kaynza',
        link: './images/Burera.JPG'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/burerabirds_1.JPG'
    },
    {
        title: 'kinunu',
        location: 'kaynza',
        link: './images/bw portait.jpg'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/Exhibition3.jpg'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/F14A4211.jpeg'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/mistylandscape.jpg'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/KCC.jpg'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/reflection.jpg'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/Landscape.jpg'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/UbumuntuArts2.jpg'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/Rusiga.jpg'
    },
    {
        title: 'kaynza',
        location: 'maya',
        link: './images/portrait.jpg'
    }

]

for (let i = 0; i < imagesArray.length; i++) {
    document.querySelector('.gallery-grid').innerHTML += 
    `<div  onClick='assignImgInfo("${imagesArray[i].title}", "${imagesArray[i].location}", "${imagesArray[i].link}")'>
    <img tabindex='1' src='${imagesArray[i].link}'></div>`
}

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
    selectedSize;
  
const assignImgInfo = (title, location, imgLink) => {
    document.getElementById('ordering-div').style.display = 'block';
    
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

// function imgIdentifier() {


//     let img = document.getElementById('myImg');
//     img.onload = function () {
    
//     if (img.naturalWidth > img.naturalHeight) {
//     orientation = 'landscape';
//     } else if (img.naturalWidth < img.naturalHeight) {
//     orientation = 'portrait';
//     } else {
//     orientation = 'even';
//     }
      
//     document.body.innerHTML += '<h1>' + orientation + '</h1>';
    
//     }
    
//     img.src = "https://www.image.rw/wp-content/uploads/2019/11/my-gound-and-air-moments-through-rwandas-landscapes_40041972161_o-scaled.jpg";
    
// };

// imgIdentifier();


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


const submit_to_checkout = () => {
         let img_Info = 
         {
             title: ImgTitle.innerHTML,
             location: ImgLocation.innerHTML,
             selectedSize: selectedSize
         }; 
         console.log(img_Info);

}