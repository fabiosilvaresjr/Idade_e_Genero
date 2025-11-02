function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var section = document.getElementsByTagName ('section')[0]
    if (fano.value.length == 0 || fano.value > ano || fano.value < 1910) {
        res.innerHTML = `ERRO! Insira ano de nascimento válida entre 1910 e ${ano}.`
        section.style.background = 'red';

    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = " "
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
      
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 5) {
                //bb
                img.setAttribute ('src', "foto.bb.m.jpg")    
            } else if (idade < 13){
                //criança
                img.setAttribute ('src', 'foto.crianca.m.jpg')
            } else if (idade < 18) {
                //adolecente
                img.setAttribute ('src', 'foto.adolecente.m.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute ('src', 'foto.adulto.m.jpg')
            } else {
                //idoso
                img.setAttribute ('src', 'foto.idoso.m.jpg')
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 5) {
                //bb
                img.setAttribute ('src', "foto.bb.f.jpg")    
            } else if (idade < 13){
                //criança
                img.setAttribute ('src', 'foto.crianca.f.jpg')
            } else if (idade < 18) {
                //adolecente
                img.setAttribute ('src', 'foto.adolecente.f.jpg')
            } else if (idade < 60) {
                //adulta
                img.setAttribute ('src', 'foto.adulto.f.jpg')
            } else {
                //idosa
                img.setAttribute ('src', 'foto.idoso.f.jpg')
            }
        }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.appendChild(img);         
    }
}

function limpartudo() {
    var fano = document.getElementById('txtano')
    var fsex = document.getElementsByName('radsex')
    var res = document.getElementById('res')
    var section = document.getElementsByTagName ('section')[0]
    
    fano.value = ' '
    fsex[0].checked = 'true'
    res.innerHTML = `Preencha os dados acima para mostrar o perfil do usuário.`;

    section.style.background = 'white';
}
