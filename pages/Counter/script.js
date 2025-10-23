
let count = 0
if (localStorage['counter']) {
    count = +localStorage['counter']
}
show()
function show() {
    document.querySelector('#counter').innerText = count
}

document.querySelector('#increment').onclick=function () {
    count++
    localStorage['counter'] = count
    show()
}

document.querySelector('#decrement').onclick =function () {
    count--
    localStorage['counter'] = count
    show()
}

document.querySelector('#twoIncrement').onclick=function () {
    count += 2
    localStorage['counter'] = count
    show()
}

document.querySelector('#plusTen').onclick =function () {
    count += 10
    localStorage['counter'] = count
    show()
}


document.querySelector('#save-btn').onclick =function () {
    localStorage['counter'] = count
    alert('Saved: ' + count)
}

