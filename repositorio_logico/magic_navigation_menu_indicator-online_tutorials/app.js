var categoria = new Map()

var alimentos =
[
    {alimento: "morango", categoria: "fruta"},
    {alimento: "alface",  categoria: "verdura"},
    {alimento: "abacaxi", categoria: "fruta"},
]

var i = item => 
{
    if(!categoria.has(item.categoria)) 
    { 
        categoria.set(item.categoria, alimentos) 
    }
}
alimentos.forEach(i)

console.log(...categoria.values())
