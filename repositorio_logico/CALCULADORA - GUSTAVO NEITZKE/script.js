//concatenação de números-------------------------------------------------------------
function inserir(ns)
{
    document.querySelector('.display').innerHTML += ns
}

//limpa display-----------------------------------------------------------------------
document.querySelector('.limpar').addEventListener('click', () =>
{
    document.querySelector('.display').innerHTML = ''
} )

//backspace---------------------------------------------------------------------------
document.querySelector('.backspace').addEventListener('click', () =>
{
    let display = document.querySelector('.display').innerHTML

    document.querySelector('.display').innerHTML = display.substring(0, display.length -1)
})

//calculo-----------------------------------------------------------------------------
document.querySelector('.igual').addEventListener('click', () =>
{
    let display = document.querySelector('.display').innerHTML
    document.querySelector('.display').innerHTML = eval(display)
})