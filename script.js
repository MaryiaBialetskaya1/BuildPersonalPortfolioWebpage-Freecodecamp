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