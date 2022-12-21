
const card = document.querySelectorAll(".block");

// Animate In
card.forEach(box =>{
  box.addEventListener("mouseover", () =>{
      box.style.transition = "all 0.5s ease";
      box.style.transform = `rotateY(20deg) rotateX(20deg)`;

       })
    box.addEventListener("mouseleave", () =>{
        box.style.transition = "all 0.5s ease";
        box.style.transform = `rotateY(0deg) rotateX(0deg)`;
    })
  })
