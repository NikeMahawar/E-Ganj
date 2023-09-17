// //login
// function login() {
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   if (isValidEmail(email) && password !== '') {
//     alert('Login successful!');
//     window.location.href='login.html';
//   } else {
//     alert('Invalid email or password.');
//   }
// }

// function isValidEmail(email) {
//   const emailRegex = /\S+@\S+\.\S+/;
//   return emailRegex.test(email);
// }


//transition from page1 to 2

gsap.to("#nav",{
  backgroundColor: "#9B3483",
  height:"90px",
  duration: 0.8,
  scrollTrigger:{
      trigger:"#nav",
      scroller:"body",
      // markers:true,
      start:"top -10%",  
      end: "top -11%",
      scrub:1
  }
})

gsap.to("#main",{
  backgroundColor: "#ffecec",
  scrollTrigger:{
      trigger:"#main",
      scroller:"body",
      // markers:true,
      start:"top -25%",
      end:"top -70%",
      scrub:2,
  }
})
