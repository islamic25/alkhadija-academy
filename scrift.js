window.onload = function () {
  let slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  showSlide(current);
  setInterval(nextSlide, 4000); // 4 seconds
};
function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Example dummy login check
  if (email === "test@example.com" && password === "123456") {
    document.getElementById("loginMessage").style.color = "green";
    document.getElementById("loginMessage").innerText = "Login successful!";
    // redirect: window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginMessage").innerText = "Invalid email or password.";
  }
}
