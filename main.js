(()=>{"use strict";!function(){const e=document.querySelectorAll(".list-images li img");function t(){e.forEach((e=>{e.classList.remove("active")})),this.classList.add("active")}const i=document.querySelector(".image-fullContainer img");function c(e){const t=e.target.getAttribute("data-index");i.setAttribute("src",`./images/image-product-${t}.jpg`)}e.forEach((e=>{e.addEventListener("click",t),e.addEventListener("click",c)}))}(),function(){const e=document.querySelector(".slide-next"),t=document.querySelector(".slide-previous"),i=document.querySelector(".image-slide img"),c=document.querySelector(".image-slide"),a=document.querySelectorAll(".list-images-slide li img");e.addEventListener("click",(function(){const e=+i.getAttribute("data-index");i.setAttribute("data-index",e+1);const t=i.getAttribute("data-index");a.forEach((e=>{e.getAttribute("data-index")===t&&(a.forEach((e=>{e.classList.remove("active")})),e.classList.add("active"))})),t<=4?c.innerHTML=`<img class="image-full" src="./images/image-product-${t}.jpg" alt="Imagem thumbnail 1 do produto "></img>`:(i.setAttribute("data-index",1),c.innerHTML='<img class="image-full" src="./images/image-product-1.jpg" alt="Imagem thumbnail 1 do produto "></img>',a.forEach((e=>{e.classList.remove("active")})),a[0].classList.add("active"))})),t.addEventListener("click",(function(){const e=+i.getAttribute("data-index");i.setAttribute("data-index",e-1);const t=i.getAttribute("data-index");a.forEach((e=>{e.getAttribute("data-index")===t&&(a.forEach((e=>{e.classList.remove("active")})),e.classList.add("active"))})),t>=1?c.innerHTML=`<img class="image-full" src="./images/image-product-${t}.jpg" alt="Imagem thumbnail 1 do produto "></img>`:(i.setAttribute("data-index",4),c.innerHTML='<img class="image-full" src="./images/image-product-4.jpg" alt="Imagem thumbnail 1 do produto "></img>',a.forEach((e=>{e.classList.remove("active")})),a[3].classList.add("active"))}))}(),function(){const e=document.querySelectorAll(".list-images-slide li img"),t=document.querySelector(".image-slide img");function i(){e.forEach((e=>{e.classList.remove("active")})),this.classList.add("active")}const c=document.querySelector(".image-slide");function a(e){const i=e.target.getAttribute("data-index");t.setAttribute("data-index",i),c.innerHTML=`<img class="image-full" src="./images/image-product-${i}.jpg" alt="Imagem thumbnail 1 do produto "></img>`}e.forEach((e=>{e.addEventListener("click",i),e.addEventListener("click",a)}))}(),function(){const e=document.querySelector(".image-fullContainer"),t=document.querySelector(".slide-bg"),i=document.querySelector(".icon-close img");e.addEventListener("click",(function(){window.innerWidth>950&&t.classList.toggle("active")})),t.addEventListener("click",(function({target:e}){e!==t&&e!==i||t.classList.toggle("active")})),window.addEventListener("resize",(function({target:e}){e.innerWidth<=950&&t.classList.remove("active")}))}(),function(){const e=document.querySelector(".icon-previous"),t=document.querySelector(".icon-next"),i=document.querySelector(".image-full"),c=document.querySelector(".image-fullContainer img");e.addEventListener("click",(function(){const e=+i.getAttribute("data-index");i.setAttribute("data-index",e-1);const t=i.getAttribute("data-index");t>=1?c.setAttribute("src",`./images/image-product-${t}.jpg`):(i.setAttribute("data-index",4),c.setAttribute("src","./images/image-product-4.jpg"))})),t.addEventListener("click",(function(){const e=+i.getAttribute("data-index");i.setAttribute("data-index",e+1);const t=i.getAttribute("data-index");t<=4?c.setAttribute("src",`./images/image-product-${t}.jpg`):(i.setAttribute("data-index",1),c.setAttribute("src","./images/image-product-1.jpg"))}))}(),function(){const e=document.querySelector(".icon-plus"),t=document.querySelector(".icon-minus"),i=document.querySelector(".icon-delete"),c=document.querySelector(".count"),a=document.querySelector(".buttonCart"),n=document.querySelector(".cart-icon"),s=document.querySelector(".cart-bg "),d=document.querySelector(".cart-items"),r=document.querySelector(".cart-empty"),o=document.querySelector(".cart-count"),l=document.querySelector(".total-count"),u=document.querySelector(".total-value");let m=0;e.addEventListener("click",(function(){m<9&&(m++,c.innerText=m)})),t.addEventListener("click",(function(){m>0&&(m--,c.innerText=m)})),a.addEventListener("click",(function(){0===m?(d.classList.add("cart-disabled"),r.classList.remove("cart-disabled"),o.classList.add("cart-disabled")):m>0&&(l.innerText=m,u.innerText=`$${125*m}.00`,o.innerText=m,d.classList.remove("cart-disabled"),o.classList.remove("cart-disabled"),r.classList.add("cart-disabled"))})),n.addEventListener("click",(function(){s.classList.toggle("cart-disabled")})),i.addEventListener("click",(function(){d.classList.add("cart-disabled"),r.classList.remove("cart-disabled"),o.classList.add("cart-disabled")})),window.addEventListener("click",(function({target:e}){e===s&&s.classList.add("cart-disabled")}))}(),function(){const e=document.querySelector(".menu-mobile"),t=document.querySelector(".icon-close-mobile img"),i=document.querySelector(".menuMobile-bg");e.addEventListener("click",(function(){i.classList.toggle("disabled")})),window.addEventListener("click",(function({target:e}){e!==i&&e!==t||i.classList.add("disabled")})),window.addEventListener("resize",(function({target:e}){e.innerWidth>860&&i.classList.add("disabled")}))}()})();