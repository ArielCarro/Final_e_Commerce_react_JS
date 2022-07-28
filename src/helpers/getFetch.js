const prodList=[
    {"id":1,"name":"Zapatillas Adidas Monster","type":"zapatillas","size":"41","color":"negro","gender":"hombres","cost":9600,"price":14400,"priceIva":17424,"stock":4,"stockCost":38400,"imagen":require("./../img/Zapatillas Adidas Monster.jpg")},
    {"id":2,"name":"Zapatillas Nike Crazy","type":"zapatillas","size":"42","color":"blanco","gender":"hombres","cost":11300,"price":16950,"priceIva":20509.5,"stock":2,"stockCost":22600,"imagen":require("./../img/Zapatillas Nike Crazy.jpg")},
    {"id":3,"name":"Remera Adidas Super Dry","type":"remeras","size":"l","color":"rojo","gender":"mujeres","cost":5200,"price":7800,"priceIva":9438,"stock":4,"stockCost":20800,"imagen":require("./../img/Remera Adidas Super Dry.jpg")},
    {"id":4,"name":"Remera Adidas Side Kick","type":"remeras","size":"m","color":"blanco","gender":"mujeres","cost":4300,"price":6450,"priceIva":7804.5,"stock":6,"stockCost":25800,"imagen":require("./../img/Remera Adidas Side Kick.jpg")},
    {"id":5,"name":"Remera Nike Just You","type":"remeras","size":"m","color":"negro","gender":"mujeres","cost":6000,"price":9000,"priceIva":10890,"stock":1,"stockCost":6000,"imagen":require("./../img/Remera Nike Just You.jpg")},
    {"id":6,"name":"Zapatillas Adidas New Summer","type":"zapatillas","size":"41","color":"rojo","gender":"mujeres","cost":5500,"price":8250,"priceIva":9982.5,"stock":4,"stockCost":22000,"imagen":require("./../img/Zapatillas Adidas New Summer.jpg")},
    {"id":7,"name":"Zapatillas Adidas Lite","type":"zapatillas","size":"43","color":"rojo","gender":"hombres","cost":8300,"price":12450,"priceIva":15064.5,"stock":2,"stockCost":16600,"imagen":require("./../img/Zapatillas Adidas Lite.jpg")},
    {"id":8,"name":"Zapatillas Nike Wonder","type":"zapatillas","size":"40","color":"blanco","gender":"hombres","cost":13000,"price":19500,"priceIva":23595,"stock":1,"stockCost":13000,"imagen":require("./../img/Zapatillas Nike Wonder.jpg")},
    {"id":9,"name":"Remera Adidas Kendra","type":"remeras","size":"s","color":"azul","gender":"mujeres","cost":4300,"price":6450,"priceIva":7804.5,"stock":3,"stockCost":12900,"imagen":require("./../img/Remera Adidas Kendra.jpg")},
    {"id":10,"name":"Remera Adidas Lontana","type":"remeras","size":"m","color":"blanco","gender":"hombres","cost":4500,"price":6750,"priceIva":8167.5,"stock":2,"stockCost":9000,"imagen":require("./../img/Remera Adidas Lontana.jpg")},
    {"id":11,"name":"Remera Nike Tundra","type":"remeras","size":"l","color":"blanco","gender":"mujeres","cost":6300,"price":9450,"priceIva":11434.5,"stock":2,"stockCost":12600,"imagen":require("./../img/Remera Nike Tundra.jpg")},
    {"id":12,"name":"Zapatillas Adidas Autumn","type":"zapatillas","size":"38","color":"marron","gender":"mujeres","cost":6500,"price":9750,"priceIva":11797.5,"stock":3,"stockCost":19500,"imagen":require("./../img/Zapatillas Adidas Autumn.jpg")}
]

export const getFetch=()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(prodList)
        },2000)
    })
}