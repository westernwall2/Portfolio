var nav = document.getElementById('nav')

if (!!nav == true){
    nav.innerHTML = 
    `
        <nav class="recipiente nav">
            <img class="icone" src="/img/logo minimalista.png" alt="">
            <strong>Portfólio</strong>
            <ul class="recipiente menu">
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Projeto</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
            </ul>
            <select name="" id="">
                <option value="0">EN-us</option>
                <option value="1" selected >PT-br</option>
            </select>
        </nav>    
    `
}
