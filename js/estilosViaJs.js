const shadowOffSetX = document.querySelector('.offSetX input');
const shadowBlur = document.querySelector('.shadowBlur input');
const shadowOffSetY = document.querySelector('.offSetY  input');
const inset = document.querySelector('.inset input');
const hue = document.querySelector('.hue')
const sat = document.querySelector('.sat')
const light = document.querySelector('.light')
const bodyBox = document.querySelector('#bodyColor')
const html = document.querySelector('html')




const boxDiv = {
    box: box = document.querySelector('.boxShadow'),
    shadow: {
        offSetX: '0px',
        offSetY: '0px',
        hsl: {
            hue: hue.value,
            sat: sat.value,
            light: light.value
        },
        blur: '0px',
        inset: false
    },
    atualiza() {
        const cor = boxDiv.shadow.hsl
        boxDiv.box.style.boxShadow = `
            ${boxDiv.shadow.inset?'inset':''}
            ${boxDiv.shadow.offSetX}
            ${boxDiv.shadow.offSetY}
            ${boxDiv.shadow.blur}
            hsl(${cor.hue},${cor.sat}%, ${cor.light}%)
            `
        console.log(`hsl(${cor.hue},${cor.sat}%, ${cor.light}%);`)
    }
}

inset.addEventListener('change', function(e) {

    boxDiv.shadow.inset = !boxDiv.shadow.inset
    boxDiv.atualiza()
})
shadowOffSetY.onclick = function(e) {
    shadowOffSetY.select();
}
shadowBlur.onclick = function(e) {
    shadowBlur.select();
}
shadowOffSetX.onclick = function(e) {
    shadowOffSetX.select();
}
hue.addEventListener('change', function(e) {
    const cor = boxDiv.shadow.hsl
    cor.hue = this.value
    boxDiv.atualiza()
})
sat.addEventListener('change', function(e) {
    const cor = boxDiv.shadow.hsl
    cor.sat = this.value
    boxDiv.atualiza()
})
light.addEventListener('change', function(e) {
    const cor = boxDiv.shadow.hsl
    cor.light = this.value
    boxDiv.atualiza()
})


shadowOffSetX.addEventListener('change', function(e) {
    boxDiv.shadow.offSetX = `${this.value}px`
    boxDiv.atualiza()
})
shadowOffSetY.addEventListener('change', function(e) {
    boxDiv.shadow.offSetY = `${this.value}px`
    boxDiv.atualiza()
})
shadowOffSetX.addEventListener('mousewheel', function(e) {
    boxDiv.shadow.offSetX = `${this.value}px`
    boxDiv.atualiza()
})
shadowOffSetY.addEventListener('mousewheel', function(e) {
    boxDiv.shadow.offSetY = `${this.value}px`
    boxDiv.atualiza()
})

shadowBlur.addEventListener('change', function(e) {
    if (this.value > 0) {
        boxDiv.shadow.blur = `${this.value}px`
        this.style.background = "white";
        this.style.color = "black";
    } else {
        this.style.background = "red";
        this.style.color = "white";
        boxDiv.shadow.blur = `${0}px`
    }
    boxDiv.atualiza()
})
shadowBlur.addEventListener('mousewheel', function(e) {
    boxDiv.shadow.blur = `${this.value}px`
    boxDiv.atualiza()
})








// shadowTop.onchange = function(e) {
//     e.preventDefault();
//     console.log('shadow change')
// }