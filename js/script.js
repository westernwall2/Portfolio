/*Botao de WhatsAp*/
var url ="https://wa.me/5571997002418?text=Ol%C3%A1%2C"
var whatsapp = document.querySelector('#whatsapp')

function whats(url){
    var win = window.open(url, '_blank');
     win.focus();
}

whatsapp.addEventListener('click', ()=>{
    whats(url)
})