var nav = document.querySelector('.navigation')

if (!!nav == true){
    nav.innerHTML = 
    `
        <nav class="container nav">
            <span class="container">
                <img class="icon" src="/img/logo minimalista.png" alt="">
                <strong>Portfólio</strong>
            </span>
            <ul class="container menu">
                <li>
                    <a href="#inicio">Início</a>
                </li>
                <li>
                    <a href="#projetos">Projetos</a>
                </li>
                <li>
                    <a href="#footer">Contato</a>
                </li>
            </ul>
            <select name="" id="">
                <option value="">PT</option>
                <option value="">EN</option>
            </select>
        </nav>    
    `
}
