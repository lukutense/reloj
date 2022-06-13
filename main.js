let horas=document.querySelector('.hours')
let minutos=document.querySelector('.minutes')
let segundos=document.querySelector('.seconds')

let dia=document.querySelector('.date')
let mes=document.querySelector('.month')
let year=document.querySelector('.years')

const diasPalabras=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
let diaLetras=document.querySelector('.day')

let reloj= ()=>{
    let hours=new Date().getHours()
    let minutes=new Date().getMinutes()
    let seconds=new Date().getSeconds()
    
    if(hours<10){
        hours= '0' + hours
    }
    if(minutes<10){
        minutes='0' + minutes
    }
    if(seconds<10){
        seconds='0' + seconds
    }

    horas.textContent=hours
    minutos.textContent=minutes
    segundos.textContent=seconds
}

dia.textContent=new Date().getDate()
mes.textContent=(new Date().getMonth() +1)
year.textContent=new Date().getFullYear()
diaLetras.textContent=diasPalabras[new Date().getDay()]

setInterval(reloj,1000)