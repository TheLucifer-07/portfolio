
// ===== Typing Effect =====
const roles = ["Web Developer", "AI & DS Student", "ML Enthusiast", "Front-End Developer"];
const roleElement = document.getElementById("dynamic-role");

if (roleElement) {
  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  const cursor = document.createElement("span");
  cursor.id = "cursor";
  cursor.textContent = "|";
  roleElement.after(cursor); 

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (typing) {
      charIndex++;
      roleElement.textContent = currentRole.slice(0, charIndex);
      if (charIndex === currentRole.length) {
        typing = false;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      charIndex--;
      roleElement.textContent = currentRole.slice(0, charIndex);
      if (charIndex === 0) {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeEffect, typing ? 150 : 100);
  }

  typeEffect();
}


//Mobile Menu Toggle 
const menuBtn = document.querySelector(".mobile-nav .menu"); 
const closeBtn = document.querySelector(".sidebar .close-menu"); 
const sidebar = document.querySelector(".sidebar"); 
const overlay = document.querySelector(".mobile-overlay"); 
function toggleMobileMenu() { 
    sidebar.classList.toggle("active"); 
    overlay.classList.toggle("active"); 
} 
menuBtn.addEventListener("click", toggleMobileMenu); 
closeBtn.addEventListener("click", toggleMobileMenu); 
overlay.addEventListener("click", toggleMobileMenu); 
document.querySelectorAll(".sidebar li a").forEach(link => { 
    link.addEventListener("click", () => { 
        sidebar.classList.remove("active"); 
        overlay.classList.remove("active"); 
    }); 
});

//Mobile Theme Toggle
const mobileThemeBtn = document.querySelector(".mobile-theme");
const mobileThemeOptions = document.querySelector(".mobile-theme-options");

mobileThemeBtn.addEventListener("click", () => {
  mobileThemeOptions.classList.toggle("show");
});

document.querySelectorAll(".mobile-theme-option").forEach(option => {
  option.addEventListener("click", () => {
    const themeText = option.textContent.toLowerCase();
    document.documentElement.setAttribute("data-theme", themeText);
    mobileThemeOptions.classList.remove("show");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// Desktop Theme Toggle
const themeBtn = document.querySelector(".theme");
const themeOptions = document.querySelector(".theme-options");
themeBtn.addEventListener("click", () => {
  themeOptions.classList.toggle("show");
});
document.querySelectorAll(".theme-option").forEach(option => {
  option.addEventListener("click", () => {
    const theme = option.textContent.toLowerCase();
    document.documentElement.setAttribute("data-theme", theme);
    themeOptions.classList.remove("show");
  });
});
