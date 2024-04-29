
const langSelect = document.getElementById("langSelect");

langSelect?.addEventListener("change", (e) => {
    fetchLang(e.target.value);
});

document.addEventListener('DOMContentLoaded',() => {
    let defLang = window.navigator.language.split("-")?.[0];
    if(langSelect) {
        langSelect.value = defLang;
        fetchLang(defLang || langSelect.value);
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
    allElements.forEach((item) => {
        let key = item.getAttribute('data-i18n');
        item.textContent = langData[key];
    });
    document.dir = lang === 'en' ? 'ltr' : "rtl";
}

