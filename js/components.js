
export const Logo = (locale, homePath) => {
    return `
    <a href="${homePath}" class="nav-logo flex">
        <img class="cie-logo" alt="aparic logo" src="https://dpictures.s3.amazonaws.com/aparic/logo.png" />
        <p class="light">ASSOCIATION POUR LA PROMOTION
            <br />
            ET L'ACCOMPAGNEMENT RENFORCÉ
            <br />
            DES INITIATIVES COMMUNAUTAIRES
        </p>
    </a>
    `
}

export const MenuGrid = (locale, homePath) => {
    const provincesData = [
        {}
    ];
    return `
    <div class="footer-items">
    <div class="footer-item">
        <p class="footer-item-title">Qui sommes-nous ?</p>
        <div class="footer-item-links">
            <a href="${homePath}histoire">Notre histoire</a>
            <a href="${homePath}vision">Vision</a>
            <a href="${homePath}but">But</a>
            <a href="${homePath}mission">Mission</a>
            <a href="${homePath}devise">Devise/Slogan</a>
            <a href="${homePath}valeurs">Valeurs</a>
            <a href="${homePath}strategies">Stratégies</a>
            <a href="${homePath}domaine-d-intervention">Domaines d’intervention</a>
            <a href="${homePath}partenaires">Nos paternaires</a>
        </div>
    </div>
    <div class="footer-item">
        <p class="footer-item-title">Nos réalisations</p>
        <div class="footer-item-links">
            <a href="${homePath}rapports">Nos rapports</a>
            <a href="${homePath}realisations/#Bubanza">Bubanza</a>
            <a href="${homePath}realisations#Bujumbura-Mairie">Bujumbura-Mairie</a>
            <a href="${homePath}realisations#Bujumbura">Bujumbura</a>
            <a href="${homePath}realisations#Bururi">Bururi</a>
            <a href="${homePath}realisations#Cibitoke">Cibitoke</a>
            <a href="${homePath}realisations#Cankuzo">Cankuzo</a>
            <a href="${homePath}realisations#Gitega">Gitega</a>
            <a href="${homePath}realisations#Karuzi">Karuzi</a>
            <a href="${homePath}realisations#Kayanza">Kayanza</a>
        </div>
    </div>
    <div class="footer-item-links">
        <a href="${homePath}realisations#Kirundo">Kirundo</a>
        <a href="${homePath}realisations#Makamba">Makamba</a>
        <a href="${homePath}realisations#Muramvya">Muramvya</a>
        <a href="${homePath}realisations#Muyinga">Muyinga</a>
        <a href="${homePath}realisations#Mwaro">Mwaro</a>
        <a href="${homePath}realisations#Ngozi">Ngozi</a>
        <a href="${homePath}realisations#Rumonge">Rumonge</a>
        <a href="${homePath}realisations#Rutana">Rutana</a>
        <a href="${homePath}realisations#Ruyigi">Ruyigi</a>
    </div>
    <div class="footer-item">
        <p class="footer-item-title">Contact</p>
        <div class="footer-item-links">
            <a href="${homePath}adresse">Adresse physique</a>
            <a href="mailto:aparicassociation2022@gmail.com">Email</a>
            <a href="tel:+25779354883">Téléphone</a>
            <a target="_blank" href="https://twitter.com/aparic">Twitter</a>
            <a target="_blank" href="https://instagram.com/aparic">Instagram</a>
            <a target="_blank" href="https://facebook.com/aparic">Facebook</a>
        </div>
    </div>
    <div class="footer-item">
    <p class="footer-item-title">Vie associative</p>
    <div class="footer-item-links">
        <a href="${homePath}pv">PV des réunions</a>
        <a href="https://d29cc8o2s6hm2a.cloudfront.net/aparic/Fiche+de+cre%CC%81ation+d'un+organe.docx" target="_blank">Fiche de création d'un organe</a>
    </div>
</div>
    <div class="footer-item">
        <p class="footer-item-title">Nos projets</p>
        <div class="footer-item-links">
            <a href="${homePath}projets#realises">Réalisés</a>
            <a href="${homePath}projets#en-cours">En cours</a>
        </div>
    </div>

    <div class="footer-item">
        <p class="footer-item-title">Nous soutenir</p>
        <div class="footer-item-links">
            <a href="${homePath}devenir-membre">Devenir membre (adhérent, honneur)</a>
        </div>
    </div>

</div>
    `
}

export const Footer = (locale, homePath) => {
    return `
    <div class="footer-header">
        ${Logo(locale, homePath)}
        <div class="flex column-gap-middle">
            <p class="p-medium">Connect with Us</p>
            <div class="social-nav">
                <a target="_blank" href="https://facebook.com/aparic"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" href="https://twitter.com/aparic"><i class="fa-brands fa-twitter"></i></a>
                <a target="_blank" href="https://instagram.com/aparic"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </div>
    ${MenuGrid(locale, homePath)}
    <div>© Copyright APARIC. Tous les droits sont réservés</div>
    `
}

export const NavHolder = (locale, homePath) => {
    return `
    <div class="footer-header">
        ${Logo(locale, homePath)}
        <i id="close-menu-holder" class="fa fa-close" onclick="displayMenu(0)"></i>
    </div>
    ${MenuGrid(locale, homePath)}
    `
}

export const NavBar = (locale, homePath) => {
    return `
        <div class="nav-header">
            <div class="social-nav">
                <a target="_blank" href="https://facebook.com/aparic"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" href="https://twitter.com/aparic"><i class="fa-brands fa-twitter"></i></a>
                <a target="_blank" href="https://instagram.com/aparic"><i class="fa-brands fa-instagram"></i></a>
                <a target="_blank" href="https://youtube.com/aparic"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div class="social-nav contact-nav">
                <a href="mailto:aparicassociation2022@gmail.com" class="icon-text flex column-gap-middle mail-contact">
                    <i class="fa fa-envelope"></i>
                    <p>aparicassociation2022@gmail.com</p>
                </a>
                <a class="icon-text flex column-gap-middle">
                    <i class="fa fa-clock"></i>
                    <p>Lun - Sam 8:00' - 16:00'</p>
                </a>
                <i id="bars-menu" class="fa fa-bars" onclick="displayMenu(1)"></i>
            </div>
        </div>
        <div class="nav-menu-holder">${NavHolder(locale, homePath)}</div>
    `;
}

export const Partners = (locale, homePath, list, status, yearOf) => {
    console.log(yearOf, locale, status);
    const partners = list;
    // const partners = list.filter((element) => element.year === yearOf);
    const finalP = partners.filter((element) => element.status === status);
    // if (!finalP.length) return `<p class="p-medium">Nous n'avons pas de données pour ${yearOf}</p>`;
    return `${finalP.map((e) => {
        console.log(e);
        return `<div class="partner-item">
                    <img src="${e.photo ?? " https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/mathier190500002.jpg?ver=6"}" />
                    <p class="p-medium bold">${e.name}</p>
                    <p class="partner-comment">${e.comment}</p>
                    <a href=${e.letter}>Lettre de partenariat</a>
                </div>`;
    })}`.replaceAll(",", "");
}

export const ImprovedLife = (locale, homePath, store, year) => {

    if (!Object.keys(store).length) return `<p class="large-subtitle">Nous n'avons pas de données pour ${year}</p>`;
    const { sexWorkers, drugDealers, madPeople } = store;

    function getSubTotal(object) {
        const { male, female } = object;
        return male + female;
    }

    function getTotal() {
        return sexWorkers + getSubTotal(drugDealers) + getSubTotal(madPeople);
    }

    return `
        <div class="dot-p">
        <p class="large-title">Total</p>
        <p class="large-title">${getTotal()}</p>
        </div>
        <p class="section-title large-subtitle title-filter">Travailleuses de sexe<span>${sexWorkers}</span></p>
        <p class="section-title large-subtitle title-filter">Usagers de drogue<span>${getSubTotal(drugDealers)}</span></p>
        <p class="p-medium">♀ Femme ${drugDealers.female} <br/>♂ Homme ${drugDealers.male}</p>
        <p class="section-title large-subtitle title-filter">Malades mentaux<span>${getSubTotal(madPeople)}</span></p>
        <p class="p-medium">♀ Femme ${madPeople.female} <br/>♂ Homme ${madPeople.male}</p>
    `;
}

export const ProvinceOfIntervention = (locale, homePath, provinces) => {
    return `
    <p class="large-subtitle">
    ${provinces.map((e) => {
        return `•${e} <br/><br/>`;
    })}
    </p>
    `.replaceAll(",", "");
}

export const NumberStat = (locale, homePath, store) => {
    const { improvedLife, provincesOfInterventions, partner } = store;

    function getSubTotal(object) {
        const { male, female } = object;
        return male + female;
    }

    function getTotal(sexWorkers, drugDealers, madPeople) {
        return sexWorkers + getSubTotal(drugDealers) + getSubTotal(madPeople);
    }


    function getImprovedLifeTotal(storeOfImprovedLife) {
        var total = 0;
        for (var stringKey of Object.keys(storeOfImprovedLife)) {
            console.log(stringKey, Number(stringKey))
            const { sexWorkers, drugDealers, madPeople } = storeOfImprovedLife[Number(stringKey)];
            total += getTotal(sexWorkers, drugDealers, madPeople);
        }
        return total;
    }
    return `
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Fondé en</h1>
            <p class="large-title">2021</p>
        </div>
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Membres adhérents</h1>
            <p class="large-title">14</p>
            <!-- <a href="">En savoir plus</a> -->
        </div>
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Des vies améliorées</h1>
            <p class="large-title">${getImprovedLifeTotal(improvedLife)}</p>
            <a href="./vie-ameliorees/">En savoir plus</a>
        </div>
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Nos partenaires</h1>
            <p class="large-title">${partner.list.length}</p>
            <a href="./partenaires/">En savoir plus</a>
        </div>
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Provinces d’intervention</h1>
            <p class="large-title">${provincesOfInterventions.length}</p>
            <a href="./provinces-d-intervention/">En savoir plus</a>
        </div>
    `;
}

