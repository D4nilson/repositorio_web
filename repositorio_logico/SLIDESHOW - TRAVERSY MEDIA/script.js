var i = 0
var imagem = []
var time = 1000

imagem[0] = 'img/img.jpg'
imagem[1] = 'img/img1.jpg'

function nextimg()
{
    document.img.src = imagem[i]

    if(i < imagem.length -1)
    {  
        i++
    }
    else
    {
        i = 0
    }
    
    setTimeout('nextimg()' , time)
}
window.onload = nextimg()

