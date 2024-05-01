// global variables
const langSelect = document.getElementById("langSelect");
const langIcon = document.getElementById("lang-icon");
const langName = document.getElementById("lang-name");
const toggleNavBtn = document.getElementById("toggleMenue");
let defLang =  localStorage.getItem('lang') || "ar";

toggleNavBtn.addEventListener("click", () => {
    document.getElementById("navBarContent").classList.toggle("active");
});

langSelect?.addEventListener("click", (e) => {
    defLang = defLang === "ar" ? "en" : "ar";
    localStorage.setItem('lang',defLang);
    fetchLang(defLang);
});

document.addEventListener('DOMContentLoaded',() => {
    // let defLang = window.navigator.language.split("-")?.[0];
    if(langSelect) {
        // langSelect.value = defLang;
        // fetchLang(langSelect.value || defLang);
        fetchLang(localStorage.getItem('lang') || defLang);
    }
});

const fetchLang = (lang) => {
    fetch(`../translation/${lang}.json`)
    .then(response => response.json())
    .then(data => changeLang(data , lang))
    .catch(error => console.error("Error fetching JSON:", error));
}

function changeLang(langData , lang) {
    let allElements = document.querySelectorAll('[data-i18n]');
    // change all elements
    allElements.forEach((item) => {
        let key = item.getAttribute('data-i18n');
        item.textContent = langData[key];
        if(item.getAttribute('data-i18n-subTitle')){
            let subTitleKey = item.getAttribute('data-i18n-subTitle');
            item.setAttribute("data-subTitle", langData[subTitleKey]);
        }
    });
    // change dir page
    document.dir = lang === 'en' ? 'ltr' : "rtl";
    // change language icon
    langName.textContent = lang === 'en' ? 'العربيه' : "English";
    langIcon.src = lang === 'en' ? "./assets/icons/ar-icon.svg" :  './assets/icons/en-icon.svg';
    // change site title
    document.title = lang === 'en' ? "QSalary" : "كيوسالاري";
}

