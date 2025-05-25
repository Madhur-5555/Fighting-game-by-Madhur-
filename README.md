<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tekken Mobile Showdown</title>
  <style>
    body {
      margin: 0;
      background: #111;
      color: white;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    canvas {
      border: 3px solid #fff;
      background: url('https://i.imgur.com/tBgI5bV.png') center/cover;
      margin-top: 20px;
    }
    .controls {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    button {
      padding: 12px 18px;
      font-size: 16px;
      background: crimson;
      color: white;
      border: none;
      border-radius: 10px;
      box-shadow: 0 0 10px crimson;
      transition: transform 0.2s;
    }
    button:active {
      transform: scale(0.95);
    }
    #startScreen, #endScreen {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 10;
    }
    #endScreen h2 {
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div id="startScreen">
    <h1>Welcome to Tekken Showdown</h1>
    <button onclick="startGame()">Start Fight</button>
  </div>  <div id="endScreen" style="display: none;">
    <h2 id="winnerText">Player X Wins!</h2>
    <button onclick="location.reload()">Restart</button>
  </div><canvas id="game" width="800" height="400"></canvas>

  <div class="controls">
    <button onclick="move('p1', -10)">P1 Left</button>
    <button onclick="move('p1', 10)">P1 Right</button>
    <button onclick="attack('p1')">P1 Attack</button>
    <button onclick="move('p2', -10)">P2 Left</button>
    <button onclick="move('p2', 10)">P2 Right</button>
    <button onclick="attack('p2')">P2 Attack</button>
  </div>  <script>
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');
    const startScreen = document.getElementById('startScreen');
    const endScreen = document.getElementById('endScreen');
    const winnerText = document.getElementById('winnerText');

    const p1 = { x: 100, y: 300, w: 50, h: 100, color: 'red', health: 100 };
    const p2 = { x: 650, y: 300, w: 50, h: 100, color: 'blue', health: 100 };

    function drawPlayer(p) {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.w, p.h);
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
      if (Math.abs(a.x - b.x) < 60) {
        b.health -= 10;
        if (b.health <= 0) endGame(attacker);
      }
    }

    let gameRunning = false;

    function startGame() {
      startScreen.style.display = 'none';
      gameRunning = true;
      gameLoop();
    }

    function endGame(winner) {
      gameRunning = false;
      endScreen.style.display = 'flex';
      winnerText.textContent = (winner === 'p1' ? 'Player 1' : 'Player 2') + ' Wins!';
    }

    function gameLoop() {
      if (!gameRunning) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayer(p1);
      drawPlayer(p2);
      drawHealth();
      requestAnimationFrame(gameLoop);
    }
  </script></body>
</html>
