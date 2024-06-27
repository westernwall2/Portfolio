/*Seleçao de linguagem*/
const translations = {
    en: {
        about: "About Us",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        aboutUsContent: "With a solid background in Node.js, HTML, CSS, JavaScript, SQL Server and MySQL, I am committed to delivering projects that not only meet but exceed client expectations.",
        contactContent: "Contact us via email jefersoncosta1994@gmail.com or by phone (71) 99700-2418. You can also find us on Instagram: @aliancadev."
    },
    pt: {
        about: "Sobre Nós",
        services: "Serviços",
        projects: "Projetos",
        contact: "Contato",
        aboutUsContent: "Com um sólido background em Node.js, HTML, CSS, JavaScript, SQL Server e MySQL, estou comprometido em entregar projetos que não apenas atendam, mas superem as expectativas dos clientes.",
        servicesContent: "Criação de sistemas para pequenos negócios, banco de dados, sites, automação residencial.",
        contactContent: "Entre em contato conosco através do e-mail jefersoncosta1994@gmail.com ou pelo telefone (71) 99700-2418. Você também pode nos encontrar no Instagram: @aliancadev."
    }
};

const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function() {
    let language = languageSelect.value
    
    //document.getElementById('about-title').textContent = translations[language].about;
    //document.getElementById('services-title').textContent = translations[language].services;
    //document.getElementById('projects-title').textContent = translations[language].projects;
    //document.getElementById('contact-title').textContent = translations[language].contact;
    document.getElementById('about-content').textContent = translations[language].aboutUsContent;
    //document.getElementById('services-content').textContent = translations[language].servicesContent;
    //document.getElementById('contact-content').textContent = translations[language].contactContent;

});


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
