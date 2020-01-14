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
      let promiseStyle = new Promise((resolve, reject) => {
        setTimeout(function() {
          document.querySelectorAll(".preloading-full-width-bg")[0].remove();
          resolve("sukses gan");
        }, 1000);
      });
      promiseStyle.then(successMessage => {
        document.querySelectorAll("#main-content")[0].style.display = "unset";
        // console.log(successMessage);
        COMPLEX_UI.init();
      });
    }
  },
  customScrollXGrab() {
    // drag scrolll
    const slider = document.querySelector(".w-can-do-wrapper-right");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", e => {
      isDown = true;
      slider.classList.add("active-grab");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active-grab");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active-grab");
    });
    slider.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }
};

const INIT_PARALLAX = {
  init: () => {
    //Parallax
    var parallax = [
      document.getElementById("bambo-leave-1"),
      document.getElementById("bambo-leave-2"),
      document.getElementById("bambo-leave-3"),
      document.getElementById("bambo-leave-4"),
      document.getElementById("bambo-leave-5"),
      document.getElementById("rain-drop"),
      document.getElementById("simpanse-parallax"),
      document.getElementById("grass-parallax"),
      document.getElementById("main-bambo"),
      document.getElementById("right-leave"),
      document.getElementById("jerapah"),
      document.getElementById("ichwan-parallax"),
      document.getElementById("grigi-hijau"),
      document.getElementById("kakak-tua")
    ];
    var parallaxLength = parallax.length;
    let element;
    for (var i = 0; i < parallaxLength; i++) {
      element = parallax[i];
      new Parallax(element, {
        relativeInput: true
      });
    }
  }
};

const TILT_COMPONENT = {
  init: () => {
    var tilt = [
      document.getElementById("lingkaran-atas"),
      document.getElementById("line-circle-atas"),
      document.getElementById("tilt-air")
      // document.getElementById("click-button")
    ];
    let tiltelement;
    for (var x = 0; x < tilt.length; x++) {
      tiltelement = tilt[x];
      VanillaTilt.init(tiltelement, {
        max: tiltelement.id === "click-button" ? 0 : 20,
        speed: 2000,
        scale: tiltelement.id === "tilt-air" ? 1 : 1.1
      });
    }
  }
};

const COMPLEX_UI = {
  init: () => {
    let isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    // console.log("is Chrome ? ", isChrome);
    let scenes = [];
    let y = 0;

    // initiate ScrollMagic Controller
    let controller = new ScrollMagic.Controller({
      refreshInterval: 0
    });

    // initial smooth-scrollbar
    function initScrolling() {
      let options = {
        damping: 0.5,
        effect: "bounce",
        maxOverscroll: 150,
        glowColor: "#87ceeb"
      };
      let scroll = Scrollbar.init(window.body, options);
      // listener smooth-scrollbar, update controller
      scroll.addListener(function(status) {
        y = status.offset.y;
        if (isChrome) {
          controller.update();
        } else {
          scenes.forEach(function(scene) {
            scene.refresh();
          });
        }
      });

      // update scrollY controller
      if (isChrome) {
        controller.scrollPos(function() {
          return y;
        });
      }

      // animation selectors
      let headerW = document.querySelectorAll("#header-wrapper")[0];
      let textBoxH = document.querySelectorAll("#text-box")[0];
      let mouseAnimate = document.querySelectorAll("#mouse-animate")[0];
      let halfCircle1 = document.querySelectorAll("#half-circle")[0];
      let aboutWrapper = document.querySelectorAll("#about-wrapper")[0];
      let wCanWrapper = document.querySelectorAll(".w-can-do-wrapper")[0];
      let halfCircle2 = document.querySelectorAll("#half-circle-2")[0];
      let content1 = document.querySelectorAll("#content-1")[0];
      let expV = document.querySelectorAll(".exp-v-title")[0];
      let eduV = document.querySelectorAll(".edu-v-title")[0];
      let expCard = document.querySelectorAll(".exp-card");
      let content2 = document.querySelectorAll("#content-2")[0];
      let content3 = document.querySelectorAll("#content-3")[0];
      let halfCircle3 = document.querySelectorAll("#half-circle-3")[0];
      let skillWrapper = document.querySelectorAll("#skillswrapper")[0];
      let hireText = document.querySelectorAll(".hiretext")[0];

      thisMagicHappend(
        halfCircle1,
        headerW,
        1,
        { top: "0px" },
        { top: "200px" },
        50
      );
      thisMagicHappend(
        halfCircle1,
        textBoxH,
        1,
        { top: "43%" },
        { top: "50%" },
        50
      );
      thisMagicHappend(
        halfCircle1,
        mouseAnimate,
        0.3,
        { opacity: 1 },
        { opacity: 0, top: "480px" },
        1
      );
      thisMagicHappend(
        halfCircle1,
        halfCircle1,
        1,
        { height: "0px", width: "0px", opacity: 0 },
        { height: "250px", width: "400px", opacity: 1 },
        100
      );
      thisMagicHappend(
        halfCircle1,
        aboutWrapper,
        1,
        { opacity: 0 },
        { opacity: 1 },
        150
      );
      thisMagicHappend(wCanWrapper, wCanWrapper, 1, {}, {}, 500, true);
      thisMagicHappend(
        content1,
        halfCircle2,
        1,
        { height: "0px", width: "0px", opacity: 0 },
        { height: "250px", width: "400px", opacity: 1 },
        900
      );
      thisMagicHappend(
        halfCircle2,
        content1,
        1,
        { top: "0px" },
        { top: "300px" },
        400
      );
      thisMagicHappend(
        halfCircle2,
        expV,
        1,
        { bottom: "0px", opacity: 0 },
        { bottom: "120px", opacity: 1 },
        300
      );
      thisMagicHappend(
        halfCircle2,
        eduV,
        1,
        { bottom: "0px", opacity: 0 },
        { bottom: "150px", opacity: 1 },
        300
      );
      thisMagicHappend(
        halfCircle2,
        expCard,
        1,
        { bottom: "0px", opacity: 0 },
        { bottom: "120px", opacity: 1 },
        300
      );
      thisMagicHappend(
        content3,
        content2,
        1,
        { top: "0px" },
        { top: "300px" },
        600
      );
      thisMagicHappend(
        content3,
        halfCircle3,
        1,
        { height: "0px", width: "0px", opacity: 0 },
        { height: "250px", width: "400px", opacity: 1 },
        300
      );
      thisMagicHappend(
        halfCircle3,
        skillWrapper,
        1,
        { opacity: 0 },
        { opacity: 1 },
        300
      );
      thisMagicHappend(content3, hireText, 1, {}, {}, 1200, true);
    }
    initScrolling();

    // Magic Happend here
    function thisMagicHappend(
      triggerEl,
      selector,
      duration,
      from,
      to,
      scrollTiming,
      customClass = false
    ) {
      let tl = new TimelineMax();
      tl.fromTo(selector, duration, from, to, "start");
      scenes.push(
        new ScrollMagic.Scene({
          offset: scrollTiming,
          triggerHook: "onEnter",
          triggerElement: triggerEl,
          duration: window.innerHeight,
          reverse: true
        })
          .setTween(tl)
          .on("leave", function() {
            //   console.log("leave scene");
          })
          .on("enter", function() {
            // console.log("enter scene");
            if (customClass) {
              customChangeAnimation(selector);
            }
          })
          .on("progress", function(e) {
            //   console.log("progress => ", e.progress);
          })
          .addTo(controller)
      );
    }

    //custom animation on scroll
    function customChangeAnimation(selector) {
      let tempSelect = selector.className.split(" ")[0];
      switch (tempSelect) {
        case "w-can-do-wrapper":
          let partner = document.querySelectorAll(".w-can-do-wrapper-right")[0];
          selector.style.width = 250 + "px";
          partner.style.width = "100%";
          break;
        case "hiretext":
          let partner2 = document.querySelectorAll("#hirebtn")[0];
          selector.style.display = "unset";
          hirebtn.style.display = "unset";
          // console.log("INNNNN");
          break;
        default:
          break;
      }
    }

    //link to email
    let hireBtn = document.querySelectorAll("#hirebtn")[0];
    hireBtn.addEventListener("click", function() {
      window.open("mailto:ichwanarif26@gmail.com");
    });
  }
};
