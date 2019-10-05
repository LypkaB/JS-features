let snowMax = 35;
let snowColor = new Array('#aaaacc', '#ddddff', '#ccccdd', '#f3f3f3', '#f0ffff', '#fff', '#eff5ff');
let snowType = new Array('Arial Black', 'Arial Narrow', 'Times', 'Comic Sans MS');
let snowLetter = '*';
let sinkSpeed = 0.6;
let snowMaxSize = 40;
let snowMinSize = 8;
let snowIngZone = 1;

let snow = new Array();
let marginBottom;
let marginRight;
let timer;
let i_snow = 0;
let x_mv = new Array();
let crds = new Array();
let lftrght = new Array();
let browserInfo = navigator.userAgent;
let ie5 = document.all&&document.getElementById&&!browserInfo.match(/Opera/);
let ns6 = document.getElementById&&!document.all;
let opera = browserInfo.match(/Opera/);
let browserOk = ie5 || ns6 || opera;

function randomMaker(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}

function initSnow() {
    if (ie5 || opera) {
        marginBottom = document.body.clientHeight;
        marginRight = document.body.clientWidth;
    } else if (ns6) {
        marginBottom = window.innerHeight;
        marginRight = window.innerWidth;
    }

    let snowSizeRange = snowMaxSize - snowMinSize;

    for (let i = 0; i <= snowMax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i] = 0.03 + Math.random() / 10;
        snow[i] = document.getElementById('s' + i);
        snow[i].style.fontFamily = snowType[randomMaker(snowType / length)];
        snow[i].size = randomMaker(snowSizeRange) + snowMinSize;
        snow[i].style.fontSize = snow[i].size + 'px';
        snow[i].style.color = snowColor[randomMaker(snowColor.length)];
        snow[i].sink = sinkSpeed * snow[i].size / 5;
        if (snowIngZone == 1) {snow[i].posx = randomMaker(marginRight - snow[i].size)}
        if (snowIngZone == 2) {snow[i].posx = randomMaker(marginRight / 2 - snow[i].size)}
        if (snowIngZone == 3) {snow[i].posx = randomMaker(marginRight / 2 - snow[i].size) + marginRight / 4}
        if (snowIngZone == 4) {snow[i].posx = randomMaker(marginRight / 2 - snow[i].size) + marginRight / 2}
        snow[i].posy = randomMaker(2 * marginBottom - marginBottom - 2 * snow[i].size);
        snow[i].style.left = snow[i].posx + 'px';
        snow[i].style.top = snow[i].posy + 'px';
    }
    moveSnow();
}

function moveSnow() {
    for (let i = 0; i <= snowMax; i++) {
        crds[i] += x_mv[i];
        snow[i].posy += snow[i].sink;
        snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + 'px';
        snow[i].style.top = snow[i].posy + 'px';
        if (snow[i].posy >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left)
            > (marginRight - 3 * lftrght[i])) {
            if (snowIngZone == 1) {snow[i].posx = randomMaker(marginRight - snow[i].size)}
            if (snowIngZone == 2) {snow[i].posx = randomMaker(marginRight / 2 - snow[i].size)}
            if (snowIngZone == 3) {snow[i].posx = randomMaker(marginRight / 2 - snow[i].size) + marginRight / 4}
            if (snowIngZone == 4) {snow[i].posx = randomMaker(marginRight / 2 - snow[i].size) + marginRight / 2}
            snow[i].posy=0;
        }
    }
    let timer = setTimeout('moveSnow()',50);
}
for (let i = 0; i <= snowMax; i++) {
    document.write("<span id='s" + i + "' style='position:absolute; top:-" + snowMaxSize + "px;'>" + snowLetter + "</span>");
}
if (browserOk) {
    window.onload = initSnow;
}