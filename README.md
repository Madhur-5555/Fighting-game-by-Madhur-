Fighting-game-by-Madhur-/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── bg.png
    ├── player1.png
    ├── player2.png
    ├── punch.mp3
    ├── kick.mp3
    └── bgm.mp3
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Tekken Mobile</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <canvas id="gameCanvas" width="900" height="400"></canvas>

  <div class="controls p1-controls">
    <button onclick="move('p1', 'left')">←</button>
    <button onclick="move('p1', 'right')">→</button>
    <button onclick="attack('p1', 'punch')">Punch</button>
    <button onclick="attack('p1', 'kick')">Kick</button>
  </div>

  <div class="controls p2-controls">
    <button onclick="move('p2', 'left')">←</button>
    <button onclick="move('p2', 'right')">→</button>
    <button onclick="attack('p2', 'punch')">Punch</button>
    <button onclick="attack('p2', 'kick')">Kick</button>
  </div>

  <audio id="bgm" src="assets/bgm.mp3" autoplay loop></audio>
  <script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  background: black;
  color: white;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

canvas {
  background: url('assets/bg.png') no-repeat center center/cover;
  border: 2px solid white;
  margin-top: 10px;
}

.controls {
  display: flex;
  gap: 10px;
  margin: 5px;
}

button {
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  background: crimson;
  color: white;
  font-weight: bold;
}

.p1-controls, .p2-controls {
  justify-content: center;
}
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const bg = new Image();
bg.src = "assets/bg.png";

const player1 = {
  x: 100, y: 250, width: 80, height: 130,
  img: new Image(), health: 100, color: "red"
};
player1.img.src = "assets/player1.png";

const player2 = {
  x: 700, y: 250, width: 80, height: 130,
  img: new Image(), health: 100, color: "blue"
};
player2.img.src = "assets/player2.png";

const punchSound = new Audio("assets/punch.mp3");
const kickSound = new Audio("assets/kick.mp3");

function move(player, dir) {
  let p = player === "p1" ? player1 : player2;
  if (dir === "left") p.x -= 20;
  else if (dir === "right") p.x += 20;
}

function attack(attackerName, type) {
  const attacker = attackerName === "p1" ? player1 : player2;
  const defender = attackerName === "p1" ? player2 : player1;

  if (Math.abs(attacker.x - defender.x) < 100) {
    if (type === "punch") {
      punchSound.play();
      defender.health -= 5;
    } else if (type === "kick") {
      kickSound.play();
      defender.health -= 10;
    }
  }
}

function drawPlayer(p) {
  ctx.drawImage(p.img, p.x, p.y, p.width, p.height);
}

function drawHealthBars() {
  ctx.fillStyle = "green";
  ctx.fillRect(20, 20, player1.health * 2, 15);
  ctx.fillStyle = "green";
  ctx.fillRect(860 - player2.health * 2, 20, player2.health * 2, 15);
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
  drawPlayer(player1);
  drawPlayer(player2);
  drawHealthBars();
  requestAnimationFrame(updateGame);
}

updateGame();
