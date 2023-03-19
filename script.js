let btnIs = document.getElementById("btnIs")
let btnIsnt = document.getElementById("btnIsnt")
let btnArent = document.getElementById("btnArent")
let answer = document.getElementById('answer')
let btnTranslate = document.getElementById('btnTranslate')

btnIsnt.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    answer.innerHTML = "isn't"
    btnIsnt.style.background = 'lime'
    answer.style.color = 'lime'
    btnIsnt.disabled = 'true'
    btnIs.disabled = 'true'
    btnArent.disabled = 'true'
})

btnIs.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    let img02 = document.getElementById('img02')
    img02.style.visibility = 'visible'
    setTimeout(() => {
        img02.style.visibility = 'hidden'
    }, 500);
    answer.innerHTML = 'is'
    btnIs.style.background = 'red'
    answer.style.color = 'red'
    btnIs.disabled = 'true'
})

btnArent.addEventListener('click', function() {
    let audio = document.getElementById('wrong2')
    audio.play()
    let img02 = document.getElementById('img02')
    img02.style.visibility = 'visible'
    setTimeout(() => {
        img02.style.visibility = 'hidden'
    }, 500);
    answer.innerHTML = "aren't"
    answer.style.color = 'red'
    btnArent.style.background = ' red'
    btnArent.disabled = 'true'
})

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Não há nenhum dinheiro na carteira.'
    setTimeout(() => {
        btnTranslate.innerHTML = 'Translate.'
    }, 3000);
})



