//funcao protegendo '$'
(function ($) {
    $.fn.temporizador = function(opcoes) {
        //mesclar o params padrao + params na chamada da funcao
        const opcoesFinais = $.extend({
            //msg padrao
            mensagem: 'Em breve!',
            //horario padrao
            horario: '00:00:00'
        }, opcoes) //se passar opcoes, sera sobreescrito os valores padroes acima
        
        //digitos do temporizador
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')
        //separadores do temporizador
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        //mensagem
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        //adicionar .temporizador
        $(this).addClass('temporizador')
        //juntando no elemento
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade,
            mensagem)

        //capturando hora:minuto:segundo -- regex
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        //horario alvo
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        //console.log(horarioAlvo)

        //definindo o temporarizador
        let temporizador = setInterval(() => {
            const agora = new Date() //date atual
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1]) //index que esta as horas
            alvo.setMinutes(horarioAlvo[2]) // index que esta os minutos
            alvo.setSeconds(horarioAlvo[3]) //index que esta os segundos

            //pegar a diferença dos dois
            const diferencaEmMili = alvo.getTime() - agora.getTime()
            //o alvo tem que ser maior que a hora agora
            //condicao enquanto a diferença entre alvo futuro e hora agora nao é alcançada
            if(diferencaEmMili >= 0) {
                //diferença receba o reg como nova data com ISOString para nao pegar o time zone
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                //testando...
                //console.log(diferenca)

                //alterando o html para mostrar a contabilizacao
                //pegando o index[1] da diferença e nela o index[0] dela, para pegar a dezena das horas
                horaDezena.html(diferenca[1][0])
                //pegando o index[1] da diferença e nela o index[1] dela, para pegar a unidade das horas
                horaUnidade.html(diferenca[1][1])
                //pegando o index[2] da diferença e nela o index[0] dela, para pegar a dezena dos minutos
                minutoDezena.html(diferenca[2][0])
                //pegando o index[2] da diferença e nela o index[1] dela, para pegar a unidade dos minutos
                minutoUnidade.html(diferenca[2][1])
                //pegando o index[3] da diferença e nela o index[0] dela, para pegar a dezena dos segundos
                segundoDezena.html(diferenca[3][0])
                //pegando o index[3] da diferença e nela o index[1] dela, para pegar a unidade dos segundos
                segundoUnidade.html(diferenca[3][1])



            }


        }, 1000)




        return this
    }
    
})(jQuery)