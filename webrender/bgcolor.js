addEventListener("load", function() {
var i = false;
function scroll() {
         document.body.style.background = i ? "red": "green";
         i = !i;
         requestAnimationFrame(scroll);
 }
 requestAnimationFrame(scroll);
 }
);


