ScrollReveal().reveal('.txtandimg-flex-container', {
    distance: '10%',
    duration: 900,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('#welcome-container', {
    delay: 400,
    distance: '10%',
    duration: 900,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('#welcome-photo-container', {
    delay: 400,
    distance: '10%',
    duration: 900,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('#intro-screen-sisters', {
    duration: 500,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('#intro-screen-about', {
    duration: 500,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('#intro-screen-home', {
    duration: 500,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('#intro-screen-rush', {
    duration: 500,
    easing: 'ease-in-out',
});


//
//var sisterArr = document.querySelector("#grid-container-actives").querySelector(".flex-container");

var sisterProfiles = document.getElementById("actives-container").querySelectorAll("div"); 
//
//var sisterProfiles = actives-container.querySelectorAll("div"); 
ScrollReveal().reveal(sisterProfiles, {
    distance: '10%',
    duration: 900,
    easing: 'ease-in-out',
//    delay: 
});

var officers = document.getElementById("grid-container-officers").querySelectorAll("p");
//var officers = document.getElementById("grid-container-officers");
//console.log(officers);
//var officersRet = [];
//for(var i = 0; i < officers.length; i++){
//    if(officers[i].querySelectorAll("p") !== null){
//        console.log("not null");
//       officersRet.push(officers[i].querySelectorAll("p")); 
//    }
//}
//console.log(officersRet);
//
ScrollReveal().reveal(officers, {
    distance: '10%',
    duration: 900,
    easing: 'ease-in-out',
//    delay: 
});

ScrollReveal().reveal('#officers-container', {
    distance: '5%',
    duration: 900,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('#actives-container', {
    distance: '5%',
    duration: 900,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('#rush-img', {
    distance: '10%',
    duration: 900,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('.container-50percent', {
    distance: '40%',
    duration: 900,
    easing: 'ease-in-out',
});




