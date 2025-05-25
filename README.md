<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tekken Style Game</title>
  <style>
    body {
      margin: 0;
      background: #000;
      color: white;
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    canvas {
      border: 2px solid white;
      background: #333;
      margin-top: 10px;
    }
    .controls {
      margin-top: 10px;
      display: flex;
      gap: 10px;
    }
    button {
      padding: 10px 15px;
      font-size: 16px;
      background: crimson;
      color: white;
      border: none;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>Tekken Style Mobile Game</h1>
  <canvas id="game" width="800" height="400"></canvas>
  <div class="controls">
    <button onclick="move('p1', -10)">P1 Left</button>
    <button onclick="move('p1', 10)">P1 Right</button>
    <button onclick="attack('p1')">P1 Attack</button>
    <button onclick="move('p2', -10)">P2 Left</button>
    <button onclick="move('p2', 10)">P2 Right</button>
    <button onclick="attack('p2')">P2 Attack</button>
  </div>
  <script>
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');const p1 = { x: 100, y: 300, w: 50, h: 100, color: 'red', health: 100 };
const p2 = { x: 650, y: 300, w: 50, h: 100, color: 'blue', health: 100 };

function drawPlayer(p) {
  ctx.fillStyle = p.color;
  ctx.fillRect(p.x, p.y, p.w, p.h);
}

function drawHealth() {
  ctx.fillStyle = 'green';
  ctx.fillRect(20, 20, p1.health * 2, 10);
  ctx.fillRect(560, 20, p2.health * 2, 10);
}

function move(player, dx) {
  if (player === 'p1') p1.x += dx;
  else p2.x += dx;
}

function attack(attacker) {
  const a = attacker === 'p1' ? p1 : p2;
  const b = attacker === 'p1' ? p2 : p1;
  if (Math.abs(a.x - b.x) < 60) b.health -= 5;
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer(p1);
  drawPlayer(p2);
  drawHealth();
  requestAnimationFrame(gameLoop);
}

gameLoop();

  </script>
</body>
</html>
