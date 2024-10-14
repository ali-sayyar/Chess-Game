// let tibel = document.querySelector('.tibel')
// let y = 7
// let x = 0
// for (let i = 0; i < 72; i++) {
//     if (i % 2 == 0) {
//         tibel.innerHTML += `<div data-y = '${x}' id = "sq${x}" class="sq"></div>`
//     } else {
//         tibel.innerHTML += `<div data-y = '${x}' id = "sq${x}" class="sq black"></div>`
//     }
//     if (i == y) {
//         i++
//         y += 9
//     }
//     x++
// }

//

// blackg.forEach((img) => {
//     img.onclick = function () {
//         if (this.classList.contains('active')) {
//             this.classList.remove('active')
//             return
//         }
//         blackg.forEach(img => img.classList.remove('active'))
//         this.classList.add('active')
//     }
// })

// /////////////////////////////////////////////////////////////////////////////////////

let whiteg = Array.from(document.querySelectorAll('.whiteg'))
let blackg = Array.from(document.querySelectorAll('.blackg'))
let sq = Array.from(document.querySelectorAll(".sq"))

let allg = [whiteg, blackg]
let color = 'blackg'
let gswitch = whiteg

function activione(g) {
    g.forEach((img) => {
        img.onclick = function () {
            g.forEach((otherImg) => {
                if (otherImg !== this) {
                    otherImg.classList.remove('active');
                }
            });
            this.classList.toggle('active');
            masar()
        }
    })
}
activione(gswitch)


function unclicked(g) {
    g.forEach((img) => {
        img.onclick = false
    })
}


function Switch() {
    if (gswitch == whiteg) {
        unclicked(whiteg)
        activione(blackg)
        color = 'whiteg'
    }
    if (gswitch == blackg) {
        unclicked(blackg)
        activione(whiteg)
        color = 'blackg'
    }
    gswitch == whiteg ? gswitch = blackg : gswitch = whiteg
}


sq.forEach((el) => {
    el.onclick = function () {
        let active = document.querySelector('.active')
        if (active && this.classList.contains('masar')) {
            Switch()
            if (active.dataset.action) {
                active.dataset.action = ''
            }
            let x = document.querySelector('.active')
            this.innerHTML = ''
            this.append(x)
            masar()
            let active1 = document.querySelector('.active')
            active1.classList.remove('active')
            sq.forEach(e => e.classList.contains('masar') ? e.classList.remove('masar') : e)
        }
    }
})


//
//
//
//
//


function masar() {
    sq.forEach(e => e.classList.contains('masar') ? e.classList.remove('masar') : e)
    if (document.querySelector('.active')) {
        let active = document.querySelector('.active')
        let numyP = parseInt(active.parentElement.dataset.y)
        let numy = parseInt(active.parentElement.dataset.y)
        let numxP = parseInt(active.parentElement.dataset.x)
        let numx = parseInt(active.parentElement.dataset.x)
        let n = 8
        if (active.id == 'eleph') {
            let actionNum1 = 9
            let actionNum2 = 7
            eleph(active, numyP, actionNum2)
            eleph2(active, numyP, actionNum2)
            eleph(active, numyP, actionNum1)
            eleph2(active, numyP, actionNum1)
        }
        if (active.id == 'rok') {
            rok0(active, numyP, n)
            rok1(active, numxP, n)
            rok2(active, numyP, n)
            rok3(active, numxP, n)
        }
        if (active.id == 'wzer') {
            rok0(active, numyP, n)
            rok1(active, numxP, n)
            rok2(active, numyP, n)
            rok3(active, numxP, n)
            let actionNum1 = 9
            let actionNum2 = 7
            eleph(active, numyP, actionNum2)
            eleph2(active, numyP, actionNum2)
            eleph(active, numyP, actionNum1)
            eleph2(active, numyP, actionNum1)
        }
        if (active.id == 'horse') {
            horse(active, numyP)
        }

        if (active.id == 'beydg') {
            let n7
            let n8
            let n9
            let n16
            if (active.classList.contains('blackg')) {
                n7 = numyP + 7
                n8 = numyP + 8
                n9 = numyP + 9
                n16 = numyP + 16
            }
            if (active.classList.contains('whiteg')) {
                n7 = numyP - 7
                n8 = numyP - 8
                n9 = numyP - 9
                n16 = numyP - 16
            }

            bdag(active, n7, n8, n9, n16)
        }
        if (active.id == 'malek') {
            malek(active, numyP, numxP)
        }
    }
}

function malek(active, numy, numx) {
    let arr = [
        numy - 7,
        numy - 9,
        numy + 7,
        numy + 9,
    ]
    let arr2 = [
        numy + 1,
        numy - 1,
        numy + 8,
        numy - 8,
    ]
    let cl
    active.parentElement.classList.contains('black') ? cl = 'black' : cl = 'white'
    for (let i = 0; i < arr.length; i++) {
        if (active && sq[arr[i]]) {
            if ((sq[arr[i]].childElementCount == 0 || sq[arr[i]].firstElementChild.classList.contains(color)) && sq[arr[i]].classList.contains(cl)) {
                sq[arr[i]].classList.add('masar')
            }
        }
        if (active && sq[arr2[i]]) {
            if ((sq[arr2[i]].childElementCount == 0 || sq[arr2[i]].firstElementChild.classList.contains(color)) && ! sq[arr2[i]].classList.contains(cl)) {
                sq[arr2[i]].classList.add('masar')
            }
        }
    }
}


function horse(active, num) {
    arr = [
        num - 17,
        num - 15,
        num - 10,
        num - 6,
        num + 17,
        num + 15,
        num + 10,
        num + 6
    ]
    let cl
    for (i = 0; i < arr.length; i ++) {
        if (active && sq[arr[i]]) {
            active.parentElement.classList.contains('black') ? cl = 'black' : cl = 'white'
            if ( /*داخل القوص حل احد مشاكل فانكشين الفيل*/
            (sq[arr[i]].childElementCount == 0 || sq[arr[i]].firstElementChild.classList.contains(color)) && ! sq[arr[i]].classList.contains(cl)) {
                sq[arr[i]].classList.add('masar')
            }
        }
    }
}


function bdag(active, n7, n8, n9, n16) {
    if (active && sq[n8] && sq[n8].childElementCount == 0) {
        sq[n8].classList.add('masar')
        if (active && sq[n16] && sq[n16].childElementCount == 0 && active.dataset.action == 'none') {
            sq[n16].classList.add('masar')
        }
    }
    let cl
    active.parentElement.classList.contains('black') ? cl = 'black' : cl = 'white'
    if (sq[n7] && sq[n7].firstElementChild && sq[n7].classList.contains(cl)) {
        if (sq[n7].firstElementChild.classList.contains(color)) {
            sq[n7].classList.add('masar')
        }
    }
    if (sq[n9] && sq[n9].firstElementChild && sq[n9].classList.contains(cl)) {
        if (sq[n9].firstElementChild.classList.contains(color)) {
            sq[n9].classList.add('masar')
        }
    }

}


function rok0(active, numyP, actionNum1) {
    while (active && numyP + actionNum1 < sq.length) {
        if (sq[numyP + actionNum1].firstElementChild) {
            if (sq[numyP + actionNum1].firstElementChild.classList.contains(active.classList[0])) {
                return
            } else if (sq[numyP + actionNum1].firstElementChild.classList.contains(color)) {
                sq[numyP + actionNum1].classList.add('masar')
                return
            }
        }
        sq[numyP + actionNum1].classList.add('masar')
        numyP += actionNum1
    }
}

function rok1(active, numyP, actionNum1) {
    while (active && numyP + actionNum1 < sq.length) {
        if (document.querySelector(`[data-x='${
            String(numyP + actionNum1)
        }']`).firstElementChild) {
            if (document.querySelector(`[data-x='${
                String(numyP + actionNum1)
            }']`).firstElementChild.classList.contains(active.classList[0])) {
                return
            } else if (document.querySelector(`[data-x='${
                String(numyP + actionNum1)
            }']`).firstElementChild.classList.contains(color)) {
                document.querySelector(`[data-x='${
                    String(numyP + actionNum1)
                }']`).classList.add('masar')
                return
            }
        }
        document.querySelector(`[data-x='${
            String(numyP + actionNum1)
        }']`).classList.add('masar')
        numyP += actionNum1
    }
}

function rok3(active, numyP, actionNum1) {
    while (active && sq[numyP - actionNum1]) {
        if (document.querySelector(`[data-x='${
            String(numyP - actionNum1)
        }']`).firstElementChild) {
            if (document.querySelector(`[data-x='${
                String(numyP - actionNum1)
            }']`).firstElementChild.classList.contains(active.classList[0])) {
                return
            } else if (document.querySelector(`[data-x='${
                String(numyP - actionNum1)
            }']`).firstElementChild.classList.contains(color)) {
                document.querySelector(`[data-x='${
                    String(numyP - actionNum1)
                }']`).classList.add('masar')
                return
            }
        }
        document.querySelector(`[data-x='${
            String(numyP - actionNum1)
        }']`).classList.add('masar')
        numyP -= actionNum1
    }
}
function rok2(active, numyP, actionNum1) {
    while (active && sq[numyP - actionNum1]) {
        if (sq[numyP - actionNum1].firstElementChild) {
            if (sq[numyP - actionNum1].firstElementChild.classList.contains(active.classList[0])) {
                return
            } else if (sq[numyP - actionNum1].firstElementChild.classList.contains(color)) {
                sq[numyP - actionNum1].classList.add('masar')
                return
            }
        }
        sq[numyP - actionNum1].classList.add('masar')
        numyP -= actionNum1
    }
}

function eleph2(active, num, actionNum) {
    let cl
    active.parentElement.classList.contains('black') ? cl = 'black' : cl = 'white'
    while (active && sq[num - actionNum]) {
        if (sq[num - actionNum].classList.contains(cl)) {
            if (sq[num - actionNum].firstElementChild) {
                if (sq[num - actionNum].firstElementChild.classList.contains(active.classList[0])) {
                    return
                } else if (sq[num - actionNum].firstElementChild.classList.contains(color)) {
                    sq[num - actionNum].classList.add('masar')
                    return
                }
            }
            sq[num - actionNum].classList.add('masar')
        } else {
            return
        } num -= actionNum
    }
}


function eleph(active, num, actionNum) {
    let cl
    active.parentElement.classList.contains('black') ? cl = 'black' : cl = 'white'
    while (active && num + actionNum < sq.length) {
        if (sq[num + actionNum].classList.contains(cl)) {
            if (sq[num + actionNum].firstElementChild) {
                if (sq[num + actionNum].firstElementChild.classList.contains(active.classList[0])) {
                    return
                } else if (sq[num + actionNum].firstElementChild.classList.contains(color)) {
                    sq[num + actionNum].classList.add('masar')
                    return
                }
            }
            sq[num + actionNum].classList.add('masar')
        } else {
            return
        } num += actionNum
    }
}
// while (active && numyP + actionNum1 < sq.length && sq[numyP + actionNum1].childElementCount == 0) {
//     sq[numyP + actionNum1].classList.add('masar')
//     numyP += actionNum1
// }
// while (active && numy - actionNum1 < sq.length && sq[numy - actionNum1].childElementCount == 0) {
//     sq[numy - actionNum1].classList.add('masar')
//     numy -= actionNum1
// }
//
//
// while (active && numxP + actionNum1 < sq.length && document.querySelector(`[data-x='${
//     numxP + actionNum1
// }']`).childElementCount == 0) {
//     document.querySelector(`[data-x='${
//         numxP + actionNum1
//     }']`).classList.add('masar')
//     numxP += actionNum1
// }
// while (active && numx - actionNum1 < sq.length && document.querySelector(`[data-x='${
//     String(numx - actionNum1)
// }']`).childElementCount == 0) {
//     document.querySelector(`[data-x='${
//         String(numx - actionNum1)
//     }']`).classList.add('masar')
//     numx -= actionNum1
// }
// numxP = parseInt(active.parentElement.dataset.x)
// numx = parseInt(active.parentElement.dataset.x)
// while (active && numxP + actionNum2 < sq.length && document.querySelector(`[data-x='${
//     numxP + actionNum2
// }']`).childElementCount == 0) {
//     document.querySelector(`[data-x='${
//         numxP + actionNum2
//     }']`).classList.add('masar')
//     numxP += actionNum2
// }
// while (active && numx - actionNum2 < sq.length && document.querySelector(`[data-x='${
//     String(numx - actionNum2)
// }']`).childElementCount == 0) {
//     document.querySelector(`[data-x='${
//         String(numx - actionNum2)
//     }']`).classList.add('masar')
//     numx -= actionNum2
// }
//
//
// if (true) {
//     while (active && numxP + actionNum2 < sq.length && document.querySelector(`[data-x='${
//         numxP + actionNum2
//     }']`).childElementCount == 0) {
//         document.querySelector(`[data-x='${
//             numxP + actionNum2
//         }']`).classList.add('masar')
//         numxP += actionNum2
//     }
//     while (active && numx - actionNum2 < sq.length && document.querySelector(`[data-x='${
//         String(numx - actionNum2)
//     }']`).childElementCount == 0) {
//         document.querySelector(`[data-x='${
//             String(numx - actionNum2)
//         }']`).classList.add('masar')
//         numx -= actionNum2
//     }
// }
