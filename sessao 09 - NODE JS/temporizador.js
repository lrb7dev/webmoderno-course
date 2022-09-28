const schedule = require('node-schedule')

// ---------------------------------> de 2s em 2s na hora 20:00 numa terça-feira[2]
const tarefa1 = schedule.scheduleJob('*/2 * 20 * * 2', function() {
    console.log('Executando Tafera 1!', new Date().getSeconds()) //pegar os segundos
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 12000) //cancelando depois de 12s

//setImmediate
//setInterval

//regra de recorrencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] //quais os dias da semana
regra.hour = 20 //hora 20:00
regra.second = 7 //segundo 7

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
