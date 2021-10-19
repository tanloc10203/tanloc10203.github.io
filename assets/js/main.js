function loadingProgress() {
  let load = null;
  const loadingElement = document.querySelector('#loading-progress');
  if (loadingElement) {
    load = document.createElement("div");

    load.className = "loading";
    load.innerHTML = `
      <img srcset="./assets/images/logo.png 1x" alt="Bella" class="header-left__logo">
      <div class="loading-progress">
        <p id="loading">Loading: 1%</p>
        <div class="loading-progress-item"></div>
        <div class="loading-progress-item"></div>
      </div>
    `
    loadingElement.appendChild(load);
  }
  window.addEventListener('load', (e) => {
    if (!e.target.hidden) {
      let progressElement = document.querySelector(".loading-progress-item:last-child");
      let loading = document.querySelector("#loading");
      let count = 0;
      let progress = setInterval(() => {
        if (count === 100) {
          clearInterval(progress);
          loadingElement.style.animation = "fadeOut .5s cubic-bezier(0,.98,.46,1) forwards";
          setTimeout(() => {
            loadingElement.removeChild(load);
          }, 100);
        } else {
          window.scrollTo(0, 0);
          count += 1;
          progressElement.style.width = `${count}%`;
          loading.textContent = `Loading ${count}%`;
        }
      }, 20);
    }
  });
}


function backToTop() {
  let iconElement = document.querySelector(".scroll-top");
  window.addEventListener('scroll', event => {
    if (window.pageYOffset >= 1000)
      iconElement.classList.add("presently");
    else
      iconElement.classList.remove("presently");
  });

  iconElement.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

function hidden() {
  const images = document.querySelectorAll("img[src]");
  images.forEach(item => {
    item.classList.add("images-clip");
  })

  function check(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-images");
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(check);
  images.forEach((image) => observer.observe(image));

  window.addEventListener('scroll', () => {
    const image = document.querySelector(".app-works--image-right img");
    const height = window.pageYOffset;
    if (height >= 200) {
      image.classList.add("active-images");
    }
  });
}

loadingProgress();
hidden();
backToTop();


const barsElement = document.querySelector(".header-bars");
const menuElement = document.querySelector(".menu-res");
barsElement.addEventListener("click", () => {
  const open = menuElement.classList.contains("open");
  if (!open)
    menuElement.classList.add("open");
  else
    menuElement.classList.remove("open");
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  if(width >= 776) {
    menuElement.classList.remove("open");
  }
});