const ADJUSTING_UI = {
  init: () => {
    let hitMe = document.querySelectorAll("#hit-btn")[0];
    let cyrcle = document.querySelectorAll("#click-button")[0];
    setTimeout(() => {
      hitMe.style.display = "unset";
      cyrcle.classList.add("circle-white-scale");
    }, 2500);
    hitMe.addEventListener("click", () => {
      hitMe.style.display = "none";
      ADJUSTING_UI.scaleCircyle();
    });
  },
  scaleCircyle: () => {
    let me = document.querySelectorAll(".circle-white");
    for (let index = 0; index < me.length; index++) {
      me[index].classList.remove("to-center");
      me[index].classList.add("scale-circle");
      setTimeout(() => {
        // document.querySelectorAll(".preloading-full-width-bg")[0].remove();
        // document
        //   .querySelectorAll("#main-content")[0]
        //   .classList.add("titleScale");
        document.querySelectorAll(".preloading-full-width-bg")[0].remove();
        document.querySelectorAll("#main-content")[0].style.display = "unset";
      }, 1000);
    }
  }
};

// const INIT_PARALLAX = {
//   init: () => {
//     //Parallax
//     var parallax = [
//       document.getElementById("bambo-leave-1"),
//       document.getElementById("bambo-leave-2"),
//       document.getElementById("bambo-leave-3"),
//       document.getElementById("bambo-leave-4"),
//       document.getElementById("bambo-leave-5"),
//       document.getElementById("rain-drop"),
//       document.getElementById("simpanse-parallax"),
//       document.getElementById("grass-parallax"),
//       document.getElementById("main-bambo"),
//       document.getElementById("right-leave"),
//       document.getElementById("jerapah"),
//       document.getElementById("ichwan-parallax"),
//       document.getElementById("grigi-hijau"),
//       document.getElementById("kakak-tua")
//     ]
//     var parallaxLength = parallax.length
//     let element
//     for (var i = 0; i < parallaxLength; i++) {
//       element = parallax[i]
//       new Parallax(element, {
//         relativeInput: true
//       })
//     }
//   }
// }

// const TILT_COMPONENT = {
//   init: () => {
//     var tilt = [
//       document.getElementById("lingkaran-atas"),
//       document.getElementById("line-circle-atas"),
//       document.getElementById("tilt-air"),
//       document.getElementById("click-button")
//     ]
//     let tiltelement
//     for (var x = 0; x < tilt.length; x++) {
//       tiltelement = tilt[x]
//       VanillaTilt.init(tiltelement, {
//         max: tiltelement.id === "click-button" ? 0 : 20,
//         speed: 2000,
//         scale: tiltelement.id === "tilt-air" ? 1 : 1.1
//       })
//     }
//   }
// }
