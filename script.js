let text = "a Web Developer";

let i = 0;
let speed = 100;
function type(){
    if(i < text.length){
        document.querySelector("#welcome-header").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();


let isVisible = true;
gsap.defaults({overwrite: 'auto'});

let t1 = gsap.timeline({ paused: true })
.to("nav", {
  duration: 0.4,
  yPercent: -100
}, "-=1")
.set("nav", { position: "fixed" })
.set("nav", {
  paddingTop: "0.6rem",
  background: "rgba(255, 255, 255, 0.6)",
})
.set("nav a", {
    color: "rgb(0,0,0)"
})
.to("nav", {
  duration: 0.4,
  yPercent: 0,
  ease: "expo.out"
})
.to("nav", {
  duration: 0.3,
  boxShadow: "0 2px 5px 0 rgba(0,0,0,.2)"
});

let t2 = gsap.timeline({ paused: true })
.to("nav", { duration: 0.3, yPercent: -100 })
.set("nav", {
  paddingTop: "4rem",
  position: "absolute",
  background: "rgb(105,105,105)"
})
.set("nav a", {
    color: "rgb(255, 255, 255)"
})
.to("nav", {
  duration: 0.5,
  yPercent: 0,
  boxShadow: "none"
});

function show() {
  if (!isVisible) {
    t1.progress(1);
    t2.play(0);
    isVisible = true;
  }
}

function hide() {
  if (isVisible) {
    t2.progress(1);
    t1.play(0);
    isVisible = false;
  }
}

function refresh() {
  if (scrollY > 200) {
    hide();
  } else if (scrollY < 200) {
    show();
  }
}

window.addEventListener("scroll", refresh, { passive: true });
refresh();
