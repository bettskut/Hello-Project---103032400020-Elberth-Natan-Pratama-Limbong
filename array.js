const arrayAngka = ['4','6','8','x','12','14']
const sukuEmpat = arrayAngka.includes('x')
console.log(arrayAngka)

if(sukuEmpat) {
    const posisiX = arrayAngka.indexOf('x')
    const indexBefore = posisiX - 1
    const Before = Number (arrayAngka[indexBefore])
    const nilaiX = Before + 2
    const arrayFix = ['4','6','8',`${nilaiX}`,'12','14']
    console.log(arrayFix)
} else {
    console.log('coba lagi boss')
}
