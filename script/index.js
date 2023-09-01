// API
// https://api.linketrack.com/track/json?user=dev.brisolara@gmail.com&token=813bebd95feb435f8ece25566bf763cfc82a15e5d53b581c299140ff21549d71&codigo=LB576309921HK

// Rastreio Teste
// LB576309921HK

let trackBtn = document.querySelector('.track-btn');
let codigoRastreio = document.querySelector('.track');


trackBtn.addEventListener('click', function() {
    var url = 'https://api.linketrack.com/track/json?user=dev.brisolara@gmail.com&token=813bebd95feb435f8ece25566bf763cfc82a15e5d53b581c299140ff21549d71&codigo=' + codigoRastreio.value

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let len = data.eventos.length
            for (let i = 0 ; i < len ; i++) {
                document.querySelector('.resultado-trackD' + i).textContent = data.eventos[i].local
                document.querySelector('.resultado-trackS' + i).textContent = data.eventos[i].status
                document.querySelector('.r' + i).style.display = 'table-row'
            }

        })
        .catch(error => {
            console.error('Erro ao fazer a solicitação:', error);
        });
});
