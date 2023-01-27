import { NavBar, Footer, Partners, ImprovedLife } from './components.js';

const homePath = localStorage.getItem('home') ?? '/';


const defaultPayload = {
    partner: {
        year: Number(new Date().getFullYear()),
    },

    improvedLife: {
        2022: {
            sexWorkers: 168,
            drugDealers: {
                male: 62,
                female: 25,
            },
            madPeople: {
                male: 25,
                female: 22,
            },
        },
    }
};

function innerHTML(key, html) {
    if (document.querySelector(key)) {
        document.querySelectorAll(key).forEach((element) => {
            element.innerHTML = html;
        });
    }
}

function insertTemplates({ locale = 'fr', payload = {} }) {
    const { partner } = payload;
    innerHTML('.nav-headers-menu', NavBar(locale, homePath));
    innerHTML('#footer', Footer(locale, homePath));
    innerHTML('#public-parters', Partners(locale, homePath, "public", partner.year));
    innerHTML('#associative-parters', Partners(locale, homePath, "associative", partner.year));
    innerHTML('#improved-life', ImprovedLife(locale, homePath, defaultPayload.improvedLife[Number(new Date().getFullYear())] ?? {}, Number(new Date().getFullYear())));
}

insertTemplates({ locale: 'fr', payload: defaultPayload });


function selectListener({ key = "", onChange = ()=>{ } }) {
    if (document.getElementById(key)) {
        document.getElementById(key).onchange = function (e) {
            const { value } = e.target;
            onChange(value);

        }
    }
}

selectListener({
    key: "filter_partner", onChange:(value) => {
        innerHTML('#public-parters', Partners('fr', homePath, "public", Number(value)));
        innerHTML('#associative-parters', Partners('fr', homePath, "associative", Number(value)));
    }
});

selectListener({
    key: "filter_improvedLife", onChange:(value) => {
        innerHTML('#improved-life', ImprovedLife('fr', homePath, defaultPayload.improvedLife[Number(value)] ?? {},Number(value)));
    }
});
