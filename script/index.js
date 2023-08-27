// rastreio teste = LB576309921HK


let trackBtn = document.querySelector('.track-btn');

const user = '' // preciso receber no email
const token = '' // preciso receber no email
let codigoRastreio = document.querySelector('.track').value;


trackBtn.addEventListener('click', function() {
    var url = 'https://api.linketrack.com/track/json?user=' + user + '&token=' + token + 'codigo=' + codigoRastreio;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Mostra a resposta no console do navegador
        })
        .catch(error => {
            console.error('Erro ao fazer a solicitação:', error);
        });
});
