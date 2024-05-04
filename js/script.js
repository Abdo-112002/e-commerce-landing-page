// my code after minification
const langSelect=document.getElementById("langSelect"),langIcon=document.getElementById("lang-icon"),langName=document.getElementById("lang-name"),toggleNavBtn=document.getElementById("toggleMenue");let defLang=localStorage.getItem("lang")||"ar";toggleNavBtn.addEventListener("click",()=>{document.getElementById("navBarContent").classList.toggle("active")}),langSelect?.addEventListener("click",e=>{defLang="ar"===defLang?"en":"ar",localStorage.setItem("lang",defLang),fetchLang(defLang)}),document.addEventListener("DOMContentLoaded",()=>{langSelect&&fetchLang(localStorage.getItem("lang")||defLang)});const fetchLang=async e=>{fetch(`/translation/${e}.json`).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(t=>changeLang(t,e)).catch(e=>console.log("Error fetching JSON:",e))};function changeLang(e,t){document.querySelectorAll("[data-i18n]").forEach(t=>{let n=t.getAttribute("data-i18n");if(t.textContent=e[n],t.getAttribute("data-i18n-subTitle")){let a=t.getAttribute("data-i18n-subTitle");t.setAttribute("data-subTitle",e[a])}t.getAttribute("placeholder")&&t.setAttribute("placeholder",e[n])}),document.dir="en"===t?"ltr":"rtl",langName.textContent="en"===t?"العربيه":"English",langIcon.src="en"===t?"./assets/icons/ar-icon.svg":"./assets/icons/en-icon.svg",document.title="en"===t?"QSalary":"كيوسالاري"}


// my code here

// // global variables
// const langSelect = document.getElementById("langSelect");
// const langIcon = document.getElementById("lang-icon");
// const langName = document.getElementById("lang-name");
// const toggleNavBtn = document.getElementById("toggleMenue");
// let defLang =  localStorage.getItem('lang') || "ar";

// toggleNavBtn.addEventListener("click", () => {
//     document.getElementById("navBarContent").classList.toggle("active");
// });

// langSelect?.addEventListener("click", (e) => {
//     defLang = defLang === "ar" ? "en" : "ar";
//     localStorage.setItem('lang',defLang);
//     fetchLang(defLang);
// });

// document.addEventListener('DOMContentLoaded',() => {
//     // let defLang = window.navigator.language.split("-")?.[0];
//     if(langSelect) {
//         // langSelect.value = defLang;
//         // fetchLang(langSelect.value || defLang);
//         fetchLang(localStorage.getItem('lang') || defLang);
//     }
// });

// const fetchLang =  async(lang) => {
//     fetch(`/translation/${lang}.json`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => changeLang(data, lang))
//     .catch(error => console.log("Error fetching JSON:", error));
// }

// function changeLang(langData , lang) {
//     let allElements = document.querySelectorAll('[data-i18n]');
//     // change all elements
//     allElements.forEach((item) => {
//         let key = item.getAttribute('data-i18n');
//         item.textContent = langData[key];
//         if(item.getAttribute('data-i18n-subTitle')){
//             let subTitleKey = item.getAttribute('data-i18n-subTitle');
//             item.setAttribute("data-subTitle", langData[subTitleKey]);
//         }
//         if(item.getAttribute('placeholder')){
//             item.setAttribute("placeholder", langData[key]);
//         }
//     });
//     // change dir page
//     document.dir = lang === 'en' ? 'ltr' : "rtl";
//     // change language icon
//     langName.textContent = lang === 'en' ? 'العربيه' : "English";
//     langIcon.src = lang === 'en' ? "./assets/icons/ar-icon.svg" :  './assets/icons/en-icon.svg';
//     // change site title
//     document.title = lang === 'en' ? "QSalary" : "كيوسالاري";
// }

