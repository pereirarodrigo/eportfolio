function pages(file1, file2) {
    fetch(`./pages/${file1}/${file2}.md`)
        .then(response => response.text())
        .then(markdown => {
            const converter = new showdown.Converter()
            const html = converter.makeHtml(markdown);
            document.getElementById(`pages`).innerHTML = html;

        });
}

function confg(pg) {
    const page = document.querySelector("#pages");

    page.className = 'page-default';

    switch (pg) {
        case "home":
            page.classList.add('page-home');
            page.classList.remove('page-about');
            page.classList.remove('page-special');
            break;
        case "about":
            page.classList.add('page-about');
            page.classList.remove('page-home');
            page.classList.remove('page-special');
            break;
        case "uAi":
        case "nA":
        case "mL":
        case "kRR":
        case "iAg":
        case "rMPP":
        case "mScCP":
            page.classList.add('page-special');
            page.classList.remove('page-about');
            page.classList.remove('page-home');
            break;
        default:
            console.log("No return!");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const page = document.querySelector("#pages");
    const home = document.querySelector(".home");
    const navbarBrand = document.querySelector(".navbar-brand");
    const offcanvas = document.querySelector(".offcanvas");
    const about = document.querySelector('.about');
    const subject = document.querySelector('.subject');
    const uAi = document.querySelector('.uAi');
    const nA = document.querySelector('.nA');
    const mL = document.querySelector('.mL');
    const kRR = document.querySelector('.kRR');
    const IAg = document.querySelector('.iAg');
    const rMPP = document.querySelector('.rMPP');
    const mScCP = document.querySelector('.mScCP');

    pages("home","home");

    page.style.transition = ".5s";

    if (home || navbarBrand) {
        home.addEventListener("click", (event) => {
            event.preventDefault();
            pages("home","home");
            
            home.classList.add("active");
            about.classList.remove("active");
            subject.classList.remove("active");
            uAi.classList.remove("active");
            nA.classList.remove("active");
            mL.classList.remove("active");
            kRR.classList.remove("active");
            IAg.classList.remove("active");
            rMPP.classList.remove("active");
            mScCP.classList.remove("active");
        });

        navbarBrand.addEventListener("click", (event) => {
            event.preventDefault();
            pages("home","home");
            confg ("home");
            
            home.classList.add("active");
            about.classList.remove("active");
            subject.classList.remove("active");
            uAi.classList.remove("active");
            nA.classList.remove("active");
            mL.classList.remove("active");
            kRR.classList.remove("active");
            IAg.classList.remove("active");
            rMPP.classList.remove("active");
            mScCP.classList.remove("active");
        });
    }
    if(about){
        about.addEventListener("click", (event) => {
            event.preventDefault();
            pages("about","about");
            confg ("about");
            
            about.classList.add("active");
            home.classList.remove("active");
            subject.classList.remove("active");
            uAi.classList.remove("active");
            nA.classList.remove("active");
            mL.classList.remove("active");
            kRR.classList.remove("active");
            IAg.classList.remove("active");
            rMPP.classList.remove("active");
            mScCP.classList.remove("active");
        });
    }
    if(uAi){
        uAi.addEventListener("click", (event) => {
            event.preventDefault();
            pages("subjects","understanding_ai");
            confg ("uAi");

            home.classList.remove("active");
            about.classList.remove("active");
            subject.classList.add("active");
            uAi.classList.add("active");
            nA.classList.remove("active");
            mL.classList.remove("active");
            kRR.classList.remove("active");
            IAg.classList.remove("active");
            rMPP.classList.remove("active");
            mScCP.classList.remove("active");
        });
    }
    if(nA){
        nA.addEventListener("click", (event) => {
            event.preventDefault();
            pages("subjects","numerical_analysis");
            confg("nA");

            home.classList.remove("active");
            about.classList.remove("active");
            subject.classList.add("active");
            uAi.classList.remove("active");
            nA.classList.add("active");
            mL.classList.remove("active");
            kRR.classList.remove("active");
            IAg.classList.remove("active");
            rMPP.classList.remove("active");
            mScCP.classList.remove("active");
        });
    }
    if(mL){
        mL.addEventListener("click", (event) => {
            event.preventDefault();
            pages("subjects","machine_learning");
            confg("mL");

            home.classList.remove("active");
            about.classList.remove("active");
            subject.classList.add("active");
            uAi.classList.remove("active");
            nA.classList.remove("active");
            mL.classList.add("active");
            kRR.classList.remove("active");
            IAg.classList.remove("active");
            rMPP.classList.remove("active");
            mScCP.classList.remove("active");
        });
    }
    if(kRR){
        kRR.addEventListener("click", (event) => {
            event.preventDefault();
            pages("subjects","knowledge_representation_and_reasoning");
            confg("kRR");

            home.classList.remove("active");
            about.classList.remove("active");
            subject.classList.add("active");
            uAi.classList.remove("active");
            nA.classList.remove("active");
            mL.classList.remove("active");
            kRR.classList.add("active");
            IAg.classList.remove("active");
            rMPP.classList.remove("active");
            mScCP.classList.remove("active");
        });
    }
    if(IAg){
        IAg.addEventListener("click", (event) => {
            event.preventDefault();
            pages("subjects","intelligent_agents");
            confg("iAg");

            home.classList.remove("active");
            about.classList.remove("active");
            subject.classList.add("active");
            uAi.classList.remove("active");
            nA.classList.remove("active");
            mL.classList.remove("active");
            kRR.classList.remove("active");
            IAg.classList.add("active");
            rMPP.classList.remove("active");
            mScCP.classList.remove("active");
        });
    }
    if(rMPP){
        rMPP.addEventListener("click", (event) => {
            event.preventDefault();
            pages("subjects","research_methods_and_prof_practice");
            confg("rMPP");

            home.classList.remove("active");
            about.classList.remove("active");
            subject.classList.add("active");
            uAi.classList.remove("active");
            nA.classList.remove("active");
            mL.classList.remove("active");
            kRR.classList.remove("active");
            IAg.classList.remove("active");
            rMPP.classList.add("active");
            mScCP.classList.remove("active");
        });
    }
    if(mScCP){
        mScCP.addEventListener("click", (event) => {
            event.preventDefault();
            pages("subjects","msc_computing_project");
            confg("mScCP");

            home.classList.remove("active");
            about.classList.remove("active");
            subject.classList.add("active");
            uAi.classList.remove("active");
            nA.classList.remove("active");
            mL.classList.remove("active");
            kRR.classList.remove("active");
            IAg.classList.remove("active");
            rMPP.classList.remove("active");
            mScCP.classList.add("active");
        });
    }
});