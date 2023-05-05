//--botao jogar de controle de cliques-------------------------------------------------------------------------------------------------------------
var jogar = document.querySelector('#jogar')

box_selecionado = []//Array para os números selecionados.

document.querySelector('#botsN').addEventListener('click',function numeros(alvo)//Botões númerados.
{


    alvo.target.style.background  = 'red'
    box_selecionado.push(alvo.target.innerHTML)//Controles para os ifs.
    

    if(box_selecionado.length > 6)
    {
        alert('f')
        alvo.target.style.background = 'rgb(180, 180, 180)'
        jogar.style.background = 'red'
        jogar.disabled = false
        return
    }
    else if(box_selecionado.length == 6)
    {
        jogar.style.background = 'red'
        jogar.disabled = false
        return
    }
})
//--botão jogar gera números aleatórios--------------------------------------------------------------------------------------------------------

var resultado = ''//veficação de acertos.

var box_aleatorio = []//Array dos números aleatórios.

var res = document.querySelector('#res')//Resultado números aleatórios.

document.querySelector('#jogar').addEventListener('click',function jogar()
{
    while(box_aleatorio.length < 6)
    {
        var aleatorio = Math.floor(Math.random() * 20 + 1)

        if(box_aleatorio.indexOf(aleatorio) == -1)
        {
            resultado = resultado + aleatorio +', '
            box_aleatorio.push(aleatorio)
        }
        res.innerHTML = resultado
    }
    validaçao()
})
//--botão jogar acertos------------------------------------------------------------------------------------------------------------------------

var acertos = document.querySelector('#acertos')//meus acertos verificados.

contador = 0//quantidade de acertos.

function validaçao()
{
    for(var i = 0 ; i < 6 ; i++)
    {
        for(var j = 0 ; j < 6 ; j++)
        {
            if(box_selecionado[i] == box_aleatorio[j])
            {
                contador += 1
            }
        }
    }
    if(contador == 0)
    {
        acertos.innerHTML = 'tente novamente.'
    }
    else if(contador == 6)
    {
        acertos.innerHTML = 'você ganhou!!!'
    }
    else if(contador >= 1)
    {
        acertos.innerHTML = `Você acertou ${contador} números, tente novamente.`
    }
}
//--botão limpar-------------------------------------------------------------------------------------------------------------------------------

var num = document.getElementsByClassName('numeros')

document.querySelector('#limpar').addEventListener('click',function limpar()
{
    jogar.disabled = true

    box_aleatorio.length = 0
    box_selecionado.length = 0
    contador = 0
    acertos.innerHTML = ''
    res.innerHTML = ''
    resultado = ''
    jogar.style.background = 'rgb(95, 95, 255)'
    numAut.length = 0

    for(var i = 0 ; i < num.length ; i++)
    {
        num[i].style.background = 'rgb(180, 180, 180)'
    }
})
//--botão gerar jogo---------------------------------------------------------------------------------------------------------------------------

numAut = []//Array do botão gerar

box_selecionado = []//Array para os números selecionados.

var numeros = document.getElementsByClassName('numeros')

document.querySelector('#gerar').addEventListener('click',function gerar()
{
    while(numAut.length < 6)
    {
        var aleatorioAut = Math.floor(Math.random() * 20 + 1)

        if(numAut.indexOf(aleatorioAut) == -1)
        {
            numAut.push(aleatorioAut)
            box_selecionado.push(aleatorioAut)
            jogar.disabled = false
            jogar.style.background = 'red'
        }

    }
    for(var i = 0 ; i < numeros.length ; i++)
      {
          for(var j = 0 ; j <= 6; j++)
          {
              if(numeros[i].innerHTML == numAut[j])
              {
                  numeros[i].style.background = 'red'
              }
          }
      }
})