//  counter code for info section 
let countAll = document.querySelectorAll(".info-about .count");
let info = document.querySelector(".info");
let start = false;

window.onscroll = function () {
    if (window.scrollY >= info.offsetHeight) {
      if (!start) {
        countAll.forEach((count) => startCount(count));
    }
      start = true;
    }
};

function startCount(el){
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(counter);
        }
    }, 3000 / goal );
}
//  counter code for info section // 