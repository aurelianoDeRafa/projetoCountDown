'use strict'

const formatarDigito = (digito) => {
  /**vai cortar dois digito, da esquerda para direita */
  return `0${digito}`.slice(-2)
}

const atualizar = (tempo) => {
  const segundos = document.getElementById('segundos');
  const minutos = document.getElementById('minutos');
  const horas = document.getElementById('horas');
  const dias = document.getElementById('dias');

  /** divide por 60, e o resto na divisão, armazenar no qtSegundo*/
  const qtSegundos = tempo % 60;
  /**aqui temos que pegar o resto das horas: 60 * 60, vai da 1hora. o resto de 1 horas, vai pro (tempo). para converter esse resto de horas para minutos, temos que dividir  por 60 */
  const qtMinutos = Math.floor((tempo % (60 * 60)) / 60);
  /** aqui tenmos que pegar o resto do dia: 60 * 60 * 24 da 1 dia.  o resto de 1 dia, vai pro (tempo). para converter dia em segundos, temos que dividir em (60 * 60) */
  const qtHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60) );
  /** */
  const qtDias = Math.floor(tempo / (60 * 60 * 24) );
  
  segundos.textContent = formatarDigito( qtSegundos)
  minutos.textContent = formatarDigito( qtMinutos)
  horas.textContent = formatarDigito( qtHoras)
  dias.textContent = formatarDigito( qtDias)
}

/**essa funcão vai conta de tras para frente. então se o tempo é 5, depois de um segundo ele vai ta 4, 3 ,2 , 1 */
const contagemRegressiva = (tempo) => {
  /**aqui ele vai pegar o id do setInterval   */
  const pararContagem = () => clearInterval(id)

 
  const contar = () => {
    if (tempo === 0){
      pararContagem();
    }
    atualizar(tempo)
    tempo--
    
  }
  /**quando o setInterval é executado, ele passa um id */
  const id = setInterval(contar, 1000)
} 


const tempoRestante = () => {
  const dataEvento = new Date('2022-04-01  20:00:00');
  const hoje = Date.now();

  return Math.floor((dataEvento - hoje) / 1000)
}

contagemRegressiva(tempoRestante());