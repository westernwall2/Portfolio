var nav = document.getElementById('nav')

if (!!nav == true){
    nav.innerHTML = 
    `
        <nav class="recipiente nav">
            <img class="icone" src="/img/logo minimalista.png" alt="">
            <strong>Portfólio</strong>
            <ul class="recipiente menu">
                <li>
                    <a href="">Início</a>
                </li>
                <li>
                    <a href="">Projetos</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
            </ul>
        </nav>    
    `
}
