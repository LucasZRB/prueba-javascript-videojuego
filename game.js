const canvas = document.getElementById('game');
const game = canvas.getContext('2d');
const buttonUp = document.getElementById('up');
const buttonLeft = document.getElementById('left');
const buttonRight = document.getElementById('right');
const buttonDown = document.getElementById('down');
const contentLives = document.getElementById('lives');
const contentTime = document.getElementById('time');
const contentRecord = document.getElementById('record');
const contentResult = document.getElementById('result');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elemenstsSize;
let level = 0;
let lives = 3;
let timeStart;
let timePlayer;
let timeInterval;
const adjustX = +4;
const adjustY = -4;

const playerPosition = {
    x: null,
    y: null
};
const goalPosition = {
    x: null,
    y: null
};
const deadPositions = [];

function setCanvasSize() {
    canvasSize = (window.innerHeight > window.innerWidth 
        ? window.innerWidth 
        : window.innerHeight) * 0.5;

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elemenstsSize = canvasSize / 10;

    startGame();
}

function levelWin() {
    console.log('Bien')
    level++;
    startGame();
}

function gameWin() {
    console.log('Terminado')
    clearInterval(timeInterval);

    const recordTime = localStorage.getItem('record_time');
    const playerTime = Date.now() - timeStart;

    if (recordTime) {
        if (recordTime > playerTime) {
            localStorage.setItem('record_time', playerTime);
            contentResult.innerHTML = '¡Nuevo Record! 🎉'
        }
    } else {
        localStorage.setItem('record_time', playerTime);
        contentResult.innerHTML = 'Intenta superarte a ti mismo ahora 😉'
    }
}

function showLives() {
    const arrayLives = Array(lives).fill(emojis['HEART']);

    contentLives.innerHTML = arrayLives.join(' ');
}

function timeFormat(timeElapsed) {
    const timeInSeconds = ~~(timeElapsed/1000);
    const min = (timeInSeconds/60) | 0;
    const seconds = timeInSeconds - (min * 60);
    const mseconds = ((timeElapsed/10) | 0) - timeInSeconds * 100;
    const timeText = `${(min < 10 ? '0' : 0) + min}:`+
                    `${(seconds < 10 ? '0' : 0) + seconds}:`+
                    `${(mseconds < 10 ? '0' : 0) + mseconds}`
    return timeText;
}

function showTime() {
    const timeElapsed = Date.now() - timeStart;

    contentTime.innerHTML = timeFormat(timeElapsed);
}

function showRecord() {
    contentRecord.innerHTML = timeFormat(localStorage.getItem('record_time'));
}

function levelFail() {
    lives--;

    if (lives < 1) {
        level = 0;
        lives = 3;
        timeStart = undefined;
    }
    console.log('Muerto', lives)
    playerPosition.x = null;
    playerPosition.y = null;
    startGame();
}

function gameOver() {}

function movePlayer() {
    const goalCollisionX = playerPosition.x.toFixed(3) === goalPosition.x.toFixed(3);
    const goalCollisionY = playerPosition.y.toFixed(3) === goalPosition.y.toFixed(3);
    const deadCollision = deadPositions.find(dead => {
        const deadCollisionX = playerPosition.x.toFixed(3) === dead.x.toFixed(3);
        const deadCollisionY = playerPosition.y.toFixed(3) === dead.y.toFixed(3);
        return deadCollisionX && deadCollisionY;
    });

    if (goalCollisionX && goalCollisionY) {
        levelWin();
    } else if (deadCollision) {
        levelFail();
    }

    game.fillText(emojis['PLAYER'], playerPosition.x+adjustX, playerPosition.y+adjustY);
}

function startGame() {
    game.font = `${elemenstsSize-2}px Verdana`;
    game.textAlign = 'end';
    showLives();

    const map = maps[level];

    if (!map) {
        return gameWin();
    }
    if (!timeStart) {
        timeStart = Date.now();
        timeInterval = setInterval(showTime, 100);
        showRecord();
    }

    const mapRowCols = map.map(col => col.split(''));

    game.clearRect(0, 0, canvasSize,canvasSize);
    deadPositions.length = 0;
    mapRowCols.forEach((y, indexY) => {
        y.forEach((x, indexX) => {
            const posX = elemenstsSize * (indexX + 1);
            const posY = elemenstsSize * (indexY + 1);

            if (x === 'O' && !playerPosition.x && !playerPosition.y) {
                playerPosition.x = posX;
                playerPosition.y = posY;
            } else if (x === 'I') {
                goalPosition.x = posX;
                goalPosition.y = posY;
            } else if (x === 'X') {
                deadPositions.push({
                    x: posX,
                    y: posY
                })
            }

            game.fillText(emojis[x], posX+adjustX, posY+adjustY);
        });
    });

    movePlayer();
    // game.fillRect(0,0,100,100);
    // game.clearRect(0,0,50,50);
    // game.font = '25px Verdana';
    // game.fillStyle = 'orange';
    // game.fillText('Hora', 100, 100);
}

function moveByKeys(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            moveUp();
            break;
        case 'ArrowLeft':
        case 'a':
            moveLeft();
            break;
        case 'ArrowRight':
        case 'd':
            moveRight();
            break;
        case 'ArrowDown':
        case 's':
            moveDown();
            break;
    }
}
function moveUp() {
    if (!((playerPosition.y - elemenstsSize).toFixed(3) < elemenstsSize)) {
        playerPosition.y -= elemenstsSize;
        startGame();
    }
}
function moveLeft() {
    if (!((playerPosition.x - elemenstsSize).toFixed(3) < elemenstsSize)) {
        playerPosition.x -= elemenstsSize;
        startGame();
    }
}
function moveRight() {
    if (!((playerPosition.x + elemenstsSize).toFixed(3) > canvasSize)) {
        playerPosition.x += elemenstsSize;
        startGame();
    }
}
function moveDown() {
    if (!((playerPosition.y + elemenstsSize).toFixed(3) > canvasSize)) {
        playerPosition.y += elemenstsSize;
        startGame();
    }
}

window.addEventListener('keydown', moveByKeys);
buttonUp.addEventListener('click', moveUp);
buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);
buttonDown.addEventListener('click', moveDown);