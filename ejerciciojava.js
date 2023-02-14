
let valorllamada=0
let minuto=+prompt('ingrese tipo de llamada:  \n 1)Local \n 2)Regional \n 3)LargaDistaciaNacional \n 4)LargaDistanciaInternacional \n 5)Celular  ')
let tiempo=+prompt('tiempo de llamada: ')
switch(minuto){
    case 1:
        valorllamada=tiempo*50
        console.log(`el valor de tu llamada es ${valorllamada}`)
        break
    case 2:
        if (tiempo>=5){
            valorllamada=(tiempo*100)*0.05
            console.log(`el valor de tu llamada es ${valorllamada}`)
            break
        }else{
            valorllamada=tiempo*100
            console.log(`el valor de tu llamada es ${valorllamada}`)
            break
        }
    case 3:
        if (tiempo>=5){
            valorllamada=(tiempo*500)*0.05
            console.log(`el valor de tu llamada es ${valorllamada}`)
            break
        }else{
            valorllamada=tiempo*500
            console.log(`el valor de tu llamada es ${valorllamada}`)
            break
        }
    case 4:
        valorllamada=tiempo*700
        console.log(`el valor de tu llamada es ${valorllamada}`)
        break
    case 5:
        valorllamada=tiempo*200
        console.log(`el valor de tu llamada es ${valorllamada}`)
        break
    default:
        console.log('no encuentro la opcion')
        break

}