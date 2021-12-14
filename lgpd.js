let lgpdUrl = '';
let lgpdHtml =`
<div class="lgpd">
<div class="lgpd--left":>
    Mensagem da LGPD
</div>
<div class="lgpd--right":>
    <button> OK </button>
</div>

</div>
<link rel="stylesheet" href="lgpd.css" type="text"></link>
`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent) {

    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd')
    let lgpdButton = lgpdArea.querySelector('button')
}