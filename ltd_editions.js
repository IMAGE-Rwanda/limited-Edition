const navSlide = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const nav = document.querySelector('.nav-btns');

    mobileNav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
})  
}

navSlide();

window.onload = document.querySelector('.ordering-div-content').style.display = 'none',
    document.getElementById('message-res').style.display = 'none';
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
        title: 'Sunset over Muhabura',
        location: 'Burera',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444587/image-rwanda/Burera_cmtxkg.jpg'
    },
    {
        title: 'Gisovu Tree',
        location: 'Gisovu',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616498320/image-rwanda/Gisovu_Tree_-_Gisovu_rz0kix.jpg'
    },
    {
        title: 'Intore',
        location: 'Kigali',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444593/image-rwanda/UbumuntuArts2_bvzlcf.jpg'
    },
    {
        title: 'Flying in the dark',
        location: 'Burera',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444580/image-rwanda/burerabirds_1_1_p0dlfx.jpg'
    },
    {
        title: 'The Island Sunset',
        location: 'Karongi',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444587/image-rwanda/Exhibition3_x6t5ci.jpg'
    },
    {
        title: 'Misty landscape',
        location: 'Musanze',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444591/image-rwanda/mistylandscape_k5sthu.jpg'
    },
    {
        title: 'Sunset Over Prime Cement',
        location: 'Musanze',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444590/image-rwanda/portrait_nvmftl.jpg'
    },
    {
        title: 'Anti-Corruption Sculpture',
        location: 'Kigali',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444589/image-rwanda/KCC_bosnwv.jpg'
    },
    {
        title: 'The Heavy Rain Lake',
        location: 'Nyabihu',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444592/image-rwanda/reflection_gfp4go.jpg'
    },
    {
        title: 'Stary Night',
        location: 'Rusiga',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616498319/image-rwanda/Stary_Night-rusiga_1_fdgf61.jpg'
    },

    {
        title: 'Under umbrella',
        location: 'Nyabihu',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444586/image-rwanda/bw_portait_1_h8diwy.jpg'
    },

    {
        title: '1000 Hills ',
        location: 'Rusiga',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444595/image-rwanda/Rusiga_mfqkfy.jpg'
    },
    {
        title: 'Gisovu Tea Plantation',
        location: 'Gisovu, Karongi',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444580/image-rwanda/F14A4211_-_Copy_1_strekb.jpg'
    },
    {
        title: 'The New year',
        location: 'Kigali',
        link: 'https://res.cloudinary.com/hervebu/image/upload/v1616444585/image-rwanda/Landscape_hm8sgs.jpg'
    },

  
];
// function imgIdentifier(img_class, flex_class) {


//     let img = document.querySelector(img_class);
//     let flex_item = document.querySelector(flex_class)

//     img.onload = function () {
//         if (img.naturalWidth >= (2 * img.naturalHeight)) {
//             flex_item.style.width = '40vh'
//         } else if (img.naturalWidth > img.naturalHeight && !(img.naturalWidth >= (2 * img.naturalHeight))) {
//             flex_item.style.width = '30vh'
//         } else if ( img.naturalHeight > img.naturalWidth) {
//         flex_item.style.width = '15vh'
//         }
//     }
// };


let grid_div = document.querySelector('.gallery-flex');
const addImgs = () => {
    for (let i = 0; i < imagesArray.length; i++) {
        grid_div.innerHTML += 
        `<div class='flex-item flex-item-${i}' onclick='assignImgInfo("${imagesArray[i].title}", "${imagesArray[i].location}", "${imagesArray[i].link}")'>
        <img class='img-${i}' tabindex='1' src='${imagesArray[i].link}'><div class='img_hover'><i class='fa fa-expand'></i></div></div>`;
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
        total_money.innerHTML = '800,000 RWF Minimum';

    } else if (size === 'medium') {
        mediumDisplay.display = 'inline-block';
        smallDisplay.display = 'none';
        largeDisplay.display = 'none';
        total_money.innerHTML = '600,000 RWF Minimum';

    } else if (size === 'small') {
        smallDisplay.display = 'inline-block Minimum';
        largeDisplay.display = 'none';
        mediumDisplay.display = 'none';
        total_money.innerHTML = '450,000 RWF Minimum'

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

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name-field').value,
        email = document.getElementById('email-field').value,
        phone = document.getElementById('phone-field').value,
        message = document.getElementById('message-field').value;
    document.getElementById('contact-sbmt-btn').disabled = true;
    document.getElementById('contact-sbmt-btn').style.backgroundColor = '#79c973b2';
    fetch(
        'https://image-rwanda.herokuapp.com/api/v1/message',
        {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name,
                    email,
                    telephone: phone,
                    message

                })
        }
    ).then(res => res.json())
    .then(data => {
        if (data.status == 400) {

            document.getElementById('message-res').style.display = 'block';
            document.getElementById('message-res').innerHTML = data.message;
            document.getElementById('message-res').style.color = '#721C24';
            document.getElementById('message-res').style.backgroundColor = '#F8D7DA'
            if (document.getElementById('message-res').style.display === 'block') {
                setTimeout(function () {
                    document.getElementById('message-res').style.display = 'none';
                    document.getElementById('message-res').innerHTML = '';    
                }, 5000);
            }


        } else if (data.message === 'Saved successfull') {
            document.getElementById('message-res').style.display = 'block';
            document.getElementById('message-res').innerHTML = 'Message successfully sent';
            document.getElementById('message-res').style.color = '#3E774B';
            document.getElementById('message-res').style.backgroundColor = '#D4EDDA';
            setTimeout(function () {
                document.getElementById('message-res').style.display = 'none';
                document.getElementById('message-res').innerHTML = '';    
            }, 5000);
        }
        document.getElementById('contact-sbmt-btn').disabled = false;
        document.getElementById('contact-sbmt-btn').style.backgroundColor = '#55B94E';
    })    
})

const submit_to_checkout = () => {
         let img_Info = 
         {
             title: ImgTitle.innerHTML,
             location: ImgLocation.innerHTML,
             selectedSize: selectedSize
         }; 
         console.log(img_Info);
}
