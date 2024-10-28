(()=>{"use strict";var e=document.querySelector("#card-template").content,t=function(e,t,n){n(t).then((function(){e.remove()})).catch((function(e){return console.log(e)}))},n=function(e,t,n,r,o){(e.classList.contains("card__like-button_is-active")?o:r)(n).then((function(n){t.textContent=n.likes.length,e.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))};function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c),e.addEventListener("click",c)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c),e.removeEventListener("click",c)}function c(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup")||"Escape"===e.key)&&o(document.querySelector(".popup_is-opened"))}var a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-24",headers:{authorization:"b7e5e670-1884-4aa1-9e5a-8cbb9b42ae0d","Content-Type":"application/json"}},i=function(e){return fetch("".concat(a.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:a.headers}).then((function(e){return s(e)}))},u=function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:a.headers}).then((function(e){return s(e)}))},l=function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:a.headers}).then((function(e){return s(e)}))},s=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function d(e,t,n){e.classList.remove(n.inputErrorClass),t.classList.remove(n.errorClass),t.textContent=""}function f(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.removeAttribute("disabled"):t.setAttribute("disabled","")}function m(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(n){d(n,e.querySelector(".".concat(n.id,"-error")),t)})),f(n,e.submit)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var h,y=document.querySelector(".places__list"),v=document.querySelector(".popup_type_image"),_=v.querySelector(".popup__image"),b=v.querySelector(".popup__caption"),S=document.querySelector(".popup_type_edit"),g=document.querySelector(".popup_type_new-card"),E=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),k=document.querySelector(".profile__image"),L=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__edit-button"),x=document.forms["edit-profile"],A=document.forms["new-place"],U=document.forms["edit-avatar"],T=document.querySelector(".profile__image_change"),w=document.querySelector(".popup_type_edit-avatar"),j={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function O(r){var o=function(t,n,r,o,c,a,i,u){var l=t.name,s=t.link,d=e.querySelector(".card").cloneNode(!0),f=d.querySelector(".card__image"),m=d.querySelector(".card__title"),p=d.querySelector(".card__delete-button"),h=d.querySelector(".card__like-counter"),y=d.querySelector(".card__like-button");return m.textContent=l,f.src=s,f.alt=l,h.textContent=t.likes.length,function(e,t,n){e!==t&&n.setAttribute("style","display: none;")}(t.owner._id,u,p),t.likes.some((function(e){return u===e._id}))&&y.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(){n(d,t._id,i)})),y.addEventListener("click",(function(){o(y,h,t._id,c,a)})),f.addEventListener("click",r),d}(r,t,P,n,u,l,i,h);y.prepend(o)}function P(e){_.src=e.target.src,_.alt=e.target.alt,b.textContent=e.target.alt,r(v)}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.submit;f(n,r),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.validity.patternMismatch?t.setCustomValidity(t.dataset.patternMismatch):t.setCustomValidity(""),t.validity.valid?d(t,r,n):function(e,t,n,r){e.classList.add(r.inputErrorClass),t.textContent=n,t.classList.add(r.errorClass)}(t,r,t.validationMessage,n)}(e,o,t),f(n,r)}))}))}(t,e)}))}(j),x.addEventListener("submit",(function(e){e.preventDefault();var t,n,r=x.elements.name.value,c=x.elements.description.value;x.elements.submit.textContent="Сохранение...",(t=r,n=c,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return s(e)}))).then((function(e){E.textContent=e.name,C.textContent=e.about,o(S)})).catch((function(e){console.log(e)})).finally((function(){x.elements.submit.textContent="Сохранить"}))})),A.addEventListener("submit",(function(e){e.preventDefault();var t,n,r=A.elements["place-name"],c=A.elements.link;A.elements.submit.textContent="Сохранение...",(t=r.value,n=c.value,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return s(e)}))).then((function(e){O(e),o(g)})).catch((function(e){console.log(e)})).finally((function(){A.elements.submit.textContent="Сохранить"}))})),U.addEventListener("submit",(function(e){e.preventDefault();var t,n=U.elements.link;U.elements.submit.textContent="Сохранение...",(t=n.value,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:t})}).then((function(e){return s(e)}))).then((function(e){k.setAttribute("style","background-image: url(".concat(e.avatar,");")),o(w)})).catch((function(e){console.log(e)})).finally((function(){U.elements.submit.textContent="Сохранить"}))})),q.addEventListener("click",(function(){x.reset();var e=x.elements.name,t=x.elements.description;e.value=E.textContent,t.value=C.textContent,m(x,j),r(S)})),L.addEventListener("click",(function(){A.reset(),m(A,j),r(g)})),T.addEventListener("click",(function(){U.reset(),U.elements.link.value="",m(U,j),r(w)})),Promise.all([fetch("".concat(a.baseUrl,"/users/me"),{method:"GET",headers:a.headers}).then((function(e){return s(e)})),fetch("".concat(a.baseUrl,"/cards"),{method:"GET",headers:a.headers}).then((function(e){return s(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];h=o._id,E.textContent=o.name,C.textContent=o.about,k.setAttribute("style","background-image: url(".concat(o.avatar,");")),c.forEach(O)})).catch((function(e){console.log(e)}))})();