'use stract'

relogio = setInterval(() =>
{
    let data = new Date().toLocaleTimeString()

    document.getElementsByTagName('div')[0].innerHTML = data
}, 1000)


//------------------------------------------------------------------------

document.getElementsByTagName('div')[0].addEventListener('click', () =>
{

    clearInterval(relogio)

    let data = new Date().toLocaleDateString()

    document.getElementsByTagName('div')[0].innerHTML = data

//------------------------------------------------------------------------

    setTimeout(() =>
    {
        (relogio = setInterval(() =>
        {

            let hora = new Date().toLocaleTimeString()

            document.getElementsByTagName('div')[0].innerHTML = hora

        }, 1000))

    }, 3000)
})

