/*Seleçao de linguagem*/
const translations = {
    en: {
        home: "Home",
        projects: "Projects",
        contact: "Contact",
        salute: 'Hello, <span class="destaque">I am</span>',
        about: "Full Stack Web Developer <br> with experience in creating dynamic and interactive solutions.",
        aboutUsContent: 'With a solid background in <span class="tags">Node.js</span>, <span class="tags">HTML</span>, <span class="tags">CSS</span>, <span class="tags">JavaScript</span>, <span class="tags">Apps Script</span> <span class="tags">SQL Server</span> and <span class="tags">MySQL</span>, I am committed to delivering projects that not only meet but exceed client expectations.',
        ContactUs: "Contact Us"
    },
    pt: {
        home: "Início",
        projects: "Projetos",
        contact: "Contato",
        salute: 'Olá, <span class="destaque">Eu sou</span>',
        about: "Desenvolvedor Web Full Stack <br> com experiência em criar soluções dinâmicas e interativas.",
        aboutUsContent: 'Com um sólido background em <span class="tags">Node.js</span>, <span class="tags">HTML</span>, <span class="tags">CSS</span>, <span class="tags">JavaScript</span>, <span class="tags">Apps Script</span>, <span class="tags">SQL Server</span> e <span class="tags">MySQL</span>, estou comprometido em entregar projetos que não apenas atendam, mas superem as expectativas dos clientes.',
        ContactUs: "Entre em contato"
    }
};

const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function() {
    let language = languageSelect.value
    
    document.getElementById('home').textContent = translations[language].home;
    document.getElementById('projects').textContent = translations[language].projects;
    document.getElementById('contact').textContent = translations[language].contact;
    document.getElementById('salute').innerHTML = translations[language].salute;
    document.getElementById('about').innerHTML = translations[language].about;
    //document.getElementById('services-title').textContent = translations[language].services;
    //document.getElementById('projects-title').textContent = translations[language].projects;
    //document.getElementById('contact-title').textContent = translations[language].contact;
    document.getElementById('about-content').innerHTML = translations[language].aboutUsContent;
    document.getElementById('whatsapp').textContent = translations[language].ContactUs;
    //document.getElementById('contact-content').textContent = translations[language].contactContent;
    //document.getElementById('contact-content').textContent = translations[language].contactContent;
    tagColor()
});

const colors = {
    'Node.js': '#417e38', 
    'HTML': '#e76027', 
    'CSS': '#136eb4', 
    'JavaScript': '#f1a93b', 
    'SQL Server': '#b11d1d', 
    'MySQL': '#035c7f',
    'Apps Script': '#f63e2e'
}

function tagColor() {
    let tags = document.querySelectorAll('.tags');

    for(i= 0; i < tags.length; i++){
        let color = colors[tags[i].textContent]
        tags[i].style.background = color
    }
}

tagColor()
/*Botao de WhatsAp*/
const whatsapp = document.querySelector('#whatsapp')
whatsapp.addEventListener('click', ()=>{
    let url = "https://wa.me/5571997002418?text=Ol%C3%A1%2C"
    let win = window.open(url, '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Por favor, permita a abertura de janelas pop-up para este site.');
    }
});
