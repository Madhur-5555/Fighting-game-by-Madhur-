
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const p1 = { x: 100, y: 300, health: 100 };
const p2 = { x: 600, y: 300, health: 100 };
const sprite = new Image();
sprite.src = 'sprites.png';

const attackSound = document.getElementById('attackSound');
let gameRunning = false;

function drawPlayer(p, flip = false) {
  ctx.save();
  if (flip) {
    ctx.translate(p.x + 64, p.y);
    ctx.scale(-1, 1);
    ctx.drawImage(sprite, 0, 0, 64, 64, 0, -64, 64, 64);
  } else {
    ctx.drawImage(sprite, 0, 0, 64, 64, p.x, p.y - 64, 64, 64);
  }
  ctx.restore();
}

function drawHealth() {
  ctx.fillStyle = 'lime';
  ctx.fillRect(20, 20, p1.health * 2, 10);
  ctx.fillStyle = 'aqua';
  ctx.fillRect(560, 20, p2.health * 2, 10);
}

function move(player, dx) {
  if (!gameRunning) return;
  if (player === 'p1') p1.x += dx;
  else p2.x += dx;
}

function attack(attacker) {
  if (!gameRunning) return;
  const a = attacker === 'p1' ? p1 : p2;
  const b = attacker === 'p1' ? p2 : p1;
  if (Math.abs(a.x - b.x) < 80) {
    b.health -= 10;
    attackSound.currentTime = 0;
    attackSound.play();
    if (b.health <= 0) endGame(attacker);
  }
}

function startGame() {
  document.getElementById('startScreen').style.display = 'none';
  gameRunning = true;
  gameLoop();
}

function endGame(winner) {
  gameRunning = false;
  document.getElementById('endScreen').style.display = 'flex';
  document.getElementById('winnerText').textContent = (winner === 'p1' ? 'Player 1' : 'Player 2') + ' Wins!';
}

function gameLoop() {
  if (!gameRunning) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer(p1);
  drawPlayer(p2, true);
  drawHealth();
  requestAnimationFrame(gameLoop);
}
