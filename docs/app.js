const button = document.getElementById('language');
const translations = [...document.querySelectorAll('[data-en]')].map(element => ({element, pl: element.innerHTML, en: element.dataset.en}));
let language = 'pl';
button.addEventListener('click', () => {
  language = language === 'pl' ? 'en' : 'pl';
  document.documentElement.lang = language;
  translations.forEach(({element, pl, en}) => { element.innerHTML = language === 'pl' ? pl : en; });
  button.textContent = language === 'pl' ? 'EN' : 'PL';
  button.setAttribute('aria-label', language === 'pl' ? 'Switch to English' : 'Przełącz na polski');
  document.title = language === 'pl' ? 'DirectCAM — pobierz aplikację' : 'DirectCAM — download the app';
});
