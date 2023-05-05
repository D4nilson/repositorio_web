
//Troca slide automático-----------------------------------------------------------------------------------------------------------------------------------
var i = 0//Variável de controle.

setInterval( function() 
{    
    if(i >= 4)
    {
        i = 0
    }
    else
    {
        i++
    }

    document.querySelector('#radio' + i).checked = true;

    if(document.querySelector('#radio1').checked)
    {
        document.querySelector('body').setAttribute('id','back1')//Atribuindo id ao elemento BODY.
    }
    else if(document.querySelector('#radio2').checked)
    {
        document.querySelector('body').setAttribute('id','back2')
    }
    else if(document.querySelector('#radio3').checked)
    {
        document.querySelector('body').setAttribute('id','back3')
    }
    else if(document.querySelector('#radio4').checked)
    {
        document.querySelector('body').setAttribute('id','back4')
    }
    },10000)

    //Troca slide manual-----------------------------------------------------------------------------------------------------------------------------------

    function radio1()
    {
        document.querySelector('body').setAttribute('id','back1')
    }
    function radio2()
    {
        document.querySelector('body').setAttribute('id','back2')
    }
    function radio3()
    {
        document.querySelector('body').setAttribute('id','back3')
    }
    function radio4()
    {
        document.querySelector('body').setAttribute('id','back4')
    }