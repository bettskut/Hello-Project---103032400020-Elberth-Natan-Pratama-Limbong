document.title = 'elberth anjay'
const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'green'

function munculNama() {
    const newText = document.createElement('p')
    newText.textContent = "ELBERTH"
    body.append(newText)
}

function warnaNama() {
    const newText = document.createElement('p')
    newText.textContent = "ELBERTH"
    newText.style.color = 'red'
    body.append(newText)
}