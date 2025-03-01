const dataDeInicio = new Date('2023-10-12'); // Exemplo: 1 de agosto de 2023
  function atualizarTempo() {
    const agora = new Date();
    const tempoPassado = agora - dataDeInicio;
    const anos = Math.floor(tempoPassado / (1000 * 60 * 60 * 24 * 365));
    const dias = Math.floor((tempoPassado % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoPassado % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoPassado % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoPassado % (1000 * 60)) / 1000);
    document.getElementById("ano").textContent = anos.toString().padStart(2, '0');
    document.getElementById("dias").textContent = dias.toString().padStart(2, '0');
    document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');
  }
  setInterval(atualizarTempo, 1000);

const switcher = document.querySelector('.btt');
switcher.addEventListener('click', function trocarpag(){

});

function maistempo() {




}


