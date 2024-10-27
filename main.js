(()=>{"use strict";var e=document.querySelector("#card-template").content,t=function(e,t,n){n(t).then((function(){e.remove()})).catch((function(e){return console.log(e)}))},n=function(e,t,n,r,o){(e.classList.contains("card__like-button_is-active")?o:r)(n).then((function(n){t.textContent=n.likes.length,e.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))};function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c),e.addEventListener("click",c)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c),e.removeEventListener("click",c)}function c(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup")||"Escape"===e.key)&&o(document.querySelector(".popup_is-opened"))}var a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-24",headers:{authorization:"b7e5e670-1884-4aa1-9e5a-8cbb9b42ae0d","Content-Type":"application/json"}},i=function(){return fetch("".concat(a.baseUrl,"/users/me"),{method:"GET",headers:a.headers}).then((function(e){return d(e)}))},u=function(e){return fetch("".concat(a.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:a.headers}).then((function(e){return d(e)}))},l=function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:a.headers}).then((function(e){return d(e)}))},s=function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:a.headers}).then((function(e){return d(e)}))},d=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function f(e,t,n){e.classList.remove(n.inputErrorClass),t.classList.remove(n.errorClass),t.textContent=""}function m(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.removeAttribute("disabled"):t.setAttribute("disabled","")}function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(n){f(n,e.querySelector(".".concat(n.id,"-error")),t)})),m(n,e.submit)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var y,v=document.querySelector(".places__list"),_=document.querySelector(".popup_type_image"),b=_.querySelector(".popup__image"),S=_.querySelector(".popup__caption"),g=document.querySelector(".popup_type_edit"),E=document.querySelector(".popup_type_new-card"),C=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),L=document.querySelector(".profile__image"),q=document.querySelector(".profile__add-button"),x=document.querySelector(".profile__edit-button"),A=document.forms["edit-profile"],U=document.forms["new-place"],T=document.forms["edit-avatar"],w=document.querySelector(".profile__image_change"),j=document.querySelector(".popup_type_edit-avatar"),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function P(r){var o=function(t,n,r,o,c,a,i,u){var l=t.name,s=t.link,d=e.querySelector(".card").cloneNode(!0),f=d.querySelector(".card__image"),m=d.querySelector(".card__title"),p=d.querySelector(".card__delete-button"),h=d.querySelector(".card__like-counter"),y=d.querySelector(".card__like-button");return m.textContent=l,f.src=s,f.alt=l,h.textContent=t.likes.length,function(e,t,n){e!==t&&n.setAttribute("style","display: none;")}(t.owner._id,u,p),t.likes.some((function(e){return u===e._id}))&&y.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(){n(d,t._id,i)})),y.addEventListener("click",(function(){o(y,h,t._id,c,a)})),f.addEventListener("click",r),d}(r,t,D,n,l,s,u,y);v.prepend(o)}function D(e){b.src=e.target.src,S.textContent=e.target.alt,r(_)}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.submit;m(n,r),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.validity.patternMismatch?t.setCustomValidity(t.dataset.patternMismatch):t.setCustomValidity(""),t.validity.valid?f(t,r,n):function(e,t,n,r){e.classList.add(r.inputErrorClass),t.textContent=n,t.classList.add(r.errorClass)}(t,r,t.validationMessage,n)}(e,o,t),m(n,r)}))}))}(t,e)}))}(O),A.addEventListener("submit",(function(e){A.elements.submit.textContent="Сохранение...",function(e){var t,n;e.preventDefault(),(t=A.elements.name.value,n=A.elements.description.value,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return d(e)}))).then((function(e){C.textContent=e.name,k.textContent=e.about})).catch((function(e){console.log(e)})).finally(A.elements.submit.textContent="Сохранить"),o(g)}(e)})),U.addEventListener("submit",(function(e){U.elements.submit.textContent="Сохранение...",function(e){e.preventDefault();var t,n,r=U.elements["place-name"],c=U.elements.link;(t=r.value,n=c.value,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return d(e)}))).then((function(e){P(e)})).catch((function(e){console.log(e)})).finally(U.elements.submit.textContent="Сохранить"),o(E)}(e)})),T.addEventListener("submit",(function(e){T.elements.submit.textContent="Сохранение...",function(e){var t;e.preventDefault(),(t=T.elements.link.value,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:t})}).then((function(e){return d(e)}))).then((function(e){L.setAttribute("style","background-image: url(".concat(e.avatar,");"))})).catch((function(e){console.log(e)})).finally(T.elements.submit.textContent="Сохранить"),o(j)}(e)})),x.addEventListener("click",(function(){A.reset();var e=A.elements.name,t=A.elements.description;e.value=C.textContent,t.value=k.textContent,p(A,O),r(g)})),q.addEventListener("click",(function(){U.reset(),p(U,O),r(E)})),w.addEventListener("click",(function(){T.reset();var e=T.elements.link;i().then((function(t){e.value=t.avatar})).catch((function(e){console.log(e)})).finally(p(T,O)),r(j)})),Promise.all([i(),fetch("".concat(a.baseUrl,"/cards"),{method:"GET",headers:a.headers}).then((function(e){return d(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];y=o._id,C.textContent=o.name,k.textContent=o.about,L.setAttribute("style","background-image: url(".concat(o.avatar,");")),c.forEach(P)})).catch((function(e){console.log(e)}))})();