let operacion=0
let num1=parseInt(prompt('ingrese un numero: '))
let num2=parseInt(prompt('ingrese un numero: '))
let opcion=+prompt('ingrese la opcion a usar: \n 1)Suma  \n 2)Resta \n 3)Multiplicacion \n 4)Division ')
switch(opcion){
    case 1:
        operacion=num1+num2
        console.log(`la suma es ${operacion}`)
        break
    case 2:
        operacion=num1-num2
        console.log(`la resta es ${operacion}`)
        break
    case 3:
        operacion=num1*num2
        console.log(`la multiplicacion es ${operacion}`)
        break
    case 4:
        operacion=num1/num2
        console.log(`la division es ${operacion.toFixed(2)}`)
        break
		default:
    		console.log('no encuentro esa opcion')
    		break
}