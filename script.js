const head = document.querySelector(".header").style;
const color = ['#ff0300', '#ff0', '#0f0fff', '#000cff', '#20F0eE', '##ff03ff'];
const Height = window.innerHeight;
const Width = window.innerWidth;

let i = 1, j = 0, j1 = color.length - 1, j2 = 1, scl = 0.05;
let cnst = 5, cnscl = 0.15;
let pos = 1;

setInterval(() => {
    head.transform = `rotate(${i}deg)`;
    i += cnst;
    scl += cnscl;
    if (scl >= 2) {
        return scl = 0.15;
    }
    if (i >= (720)) {
        return cnst = -5;
    }
    else if (i <= 0) {
        return cnst = 5;
    }
    moveRand();
    colorChange();
}, 10);

function moveRand() {
    let pos1 = 50 - 40 * Math.cos(pos * Math.PI / 180);
    let pos2 = 50 - 40 * Math.cos(pos * Math.PI / 180) * Math.sin(pos * Math.PI / 180);

    head.top = `${pos2}%`;
    head.left = `${pos1}%`;
    pos += 1;
}

function colorChange() {
    setInterval(() => {
        head.backgroundColor = `${color[j1]}`;
        head.boxShadow = `0 0 10px 10px ${color[j]}`;
        j++;
        j1 -= j2;

        while (j > color.length) {
            return j = 0;
        }
        while (j1 < 0) {
            return j1 = color.length;
        }
    }, 1);
}
