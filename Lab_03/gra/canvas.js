const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let score = 100;
let lives = 3;
let maxLives = lives;
let gameOver = false;

let gameFrame = 0;
let gameSpeed = 1;
ctx.font = "bold 60px Arial";

document.getElementById("restartButton").addEventListener("click", function () {
  const popup = document.getElementById("gameOverPopup");
  popup.style.display = "none";
  score = 100;
  lives = 3;
  gameOver = false;
  zombiesArray.length = 0;
  gameFrame = 0;
  gameOverMusic.pause();

  animate();
});

let canvasPosition = canvas.getBoundingClientRect();

const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
  mouseClicked: false,
};
canvas.addEventListener("mousemove", function (event) {
  canvasPosition = canvas.getBoundingClientRect();
  mouse.x = event.x - canvasPosition.left;
  mouse.y = event.y - canvasPosition.top;
});
canvas.addEventListener("mousedown", function () {
  if (score >= 5) {
    mouse.click = true;
    mouse.mouseClicked = true;
  }
});
canvas.addEventListener("mouseup", function () {
  mouse.click = false;
});

class Player {
  constructor() {
    this.x = canvas.width;
    this.y = canvas.height / 2;
    this.spriteWidth = 1300;
    this.spriteHeight = 1300;
    this.radius = 10;
  }
  update() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    if (mouse.x != this.x) {
      this.x -= dx;
    }
    if (mouse.y != this.y) {
      this.y -= dy;
    }
  }
  draw() {
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.closePath;

    ctx.drawImage(
      crosshair,
      this.x - 92,
      this.y - 92,
      this.spriteWidth / 7,
      this.spriteHeight / 7
    );
  }
}

const zombiesArray = [];
const zombieSprite = new Image();
zombieSprite.src = "resources/walkingdead.png";

class Zombie {
  constructor() {
    this.x = canvas.width + 100;
    this.y = Math.random() * canvas.height;
    this.spriteWidth = 200;
    this.spriteHeight = 312;
    this.frame = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.radius = Math.random() * 60 + 25;
    this.speed = Math.random() * 3 + 1;
    this.distance;
    this.hitboxYOffset = -this.radius * 0.5;
    this.hitboxXOffest = this.radius * 0.2;
    this.dead = false;
  }

  update() {
    this.x -= this.speed;
    const dx = this.x + this.hitboxXOffest - mouse.x;
    const dy = this.y + this.hitboxYOffset - mouse.y;
    if (mouse.mouseClicked) {
      this.distance = Math.sqrt(dx * dx + dy * dy);
    }
    if (gameFrame % 10 === 0) {
      this.frameX = (this.frameX + 1) % 10;
    }
  }
  draw() {
    // ctx.fillStyle = "black";
    // ctx.beginPath();
    // ctx.arc(
    //   this.x + this.hitboxXOffest,
    //   this.y + this.hitboxYOffset,
    //   this.radius,
    //   0,
    //   Math.PI * 2
    // );

    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    const scaledWidth = (this.spriteWidth / 2) * (this.radius / 50);
    const scaledHeight = (this.spriteHeight / 2) * (this.radius / 50);

    ctx.drawImage(
      zombieSprite,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x - scaledWidth / 2,
      this.y - scaledHeight / 2,
      scaledWidth,
      scaledHeight
    );
  }
}

function handleZombies() {
  let hitZombie = false;
  if (gameFrame % 100 == 0) {
    zombiesArray.push(new Zombie());
  }
  for (let i = zombiesArray.length - 1; i >= 0; i--) {
    zombiesArray[i].update();
    zombiesArray[i].draw();
    if (zombiesArray[i].x < 0 - zombiesArray[i].radius * 2) {
      zombiesArray.splice(i, 1);
      lives--;
      if (lives <= 0) {
        handleGameOver();
      }
    }
    if (zombiesArray[i].distance < zombiesArray[i].radius) {
      if (!zombiesArray[i].dead) {
        score += 20;
        zombiesArray[i].dead = true;
        zombiesArray.splice(i, 1);
        hitZombie = true;
      }
    }
  }
  if (mouse.mouseClicked && !hitZombie) {
    score -= 5;
    if (score < 0) score = 0;
  }
  mouse.mouseClicked = false;
}

const crosshair = new Image();
crosshair.src = "resources/aim.png";

const background = new Image();
background.src = "resources/board-bg.jpg";

const emptyHeart = new Image();
emptyHeart.src = "resources/empty_heart.png";

const fullHeart = new Image();
fullHeart.src = "resources/full_heart.png";

const gameOverMusic = document.createElement("audio");
gameOverMusic.src = "resources/sad-music.mp3";

function handleBackground() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function handleGameOver() {
  const popup = document.getElementById("gameOverPopup");
  const canvas = document.getElementById("canvas");
  canvas.style.cursor = "default";
  popup.style.display = "flex";
  gameOver = true;
  gameOverMusic.play();
}

function handleLives() {
  for (let i = 0; i < maxLives; i++) {
    ctx.drawImage(emptyHeart, 65 * i + 20, 30, 60, 60);
  }
  for (let i = 0; i < lives; i++) {
    ctx.drawImage(fullHeart, 65 * i + 20, 30, 60, 60);
  }
}

function handleUI() {
  handleLives();
  ctx.fillStyle = "white";
  const paddedScore = score.toString().padStart(5, "0");
  ctx.fillText(paddedScore, 600, 85);
  // ctx.drawImage(
  //   zombieSprite,
  //   0,
  //   0,
  //   200,
  //   312,
  //   canvas.width - 120,
  //   canvas.height - 180,
  //   200 / 1.5,
  //   312 / 1.5
  // );
}

function handlePlayer() {
  player.update();
  player.draw();
}

function animate() {
  const canvas = document.getElementById("canvas");
  canvas.style.cursor = "none";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleBackground();
  handlePlayer();
  handleZombies();
  handleUI();
  gameFrame++;
  if (!gameOver) requestAnimationFrame(animate);
}

const player = new Player();

animate();

window.addEventListener("resize", function () {
  canvasPosition = canvas.getBoundingClientRect();
});
