import { NavBar, Footer } from './components.js';

const homePath = localStorage.getItem('home') ?? '/'

function innerHTML(key, html) {
    if (document.querySelector(key)) {
        document.querySelectorAll(key).forEach((element) => {
            element.innerHTML = html;
        });
    }
}

function insertTemplates({ locale = 'fr' }) {
    innerHTML('.nav-headers-menu', NavBar(locale, homePath));
    innerHTML('#footer', Footer(locale, homePath));
}

insertTemplates({ locale: 'fr' });