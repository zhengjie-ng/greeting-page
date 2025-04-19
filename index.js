let user = "Zheng Jie";

const d = new Date();
let hour = d.getHours();

let greeting = "Good evening";

if (hour >= 6 && hour < 12) {
  greeting = "Good morning";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good afternoon";
}

document.getElementsByClassName(
  "message"
)[0].innerHTML = `${greeting}, ${user}!`;

$(document).ready(function () {
  $("h1").animate(
    {
      height: "-=10vh",
      opacity: 0.9,
    },
    "very slow"
  );
});
