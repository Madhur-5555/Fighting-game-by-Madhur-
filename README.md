<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fighting Game</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: url('https://i.ibb.co/fqb4N1v/stage.jpg') no-repeat center center/cover;
      overflow: hidden;
      font-family: sans-serif;
    }
    #game {
      width: 100vw;
      height: 100vh;
      position: relative;
    }
    .fighter {
      width: 100px;
      height: 150px;
      position: absolute;
      bottom: 50px;
      background-color: red;
    }
    #fighter1 {
      left: 100px;
      background-image: url('https://i.ibb.co/fYvX8kz/fighter1.png');
      background-size: cover;
    }
    #fighter2 {
      right: 100px;
      background-color: blue;
      background-image: url('https://i.ibb.co/YbKzfjP/fighter2.png');
      background-size: cover;
    }
    .health {
      width: 300px;
      height: 20px;
      background-color: gray;
      margin: 10px;
    }
    .health-inner {
      height: 100%;
      background-color: green;
    }
    #hud {
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div id="game">
    <div id="hud">
      <div class="health"><div id="health1" class="health-inner" style="width: 100%;"></div></div>
      <div class="health"><div id="health2" class="health-inner" style="width: 100%;"></div></div>
    </div>
    <div id="fighter1" class="fighter"></div>
    <div id="fighter2" class="fighter"></div>
  </div>  <script>
    let fighter1 = document.getElementById('fighter1');
    let fighter2 = document.getElementById('fighter2');
    let health1 = document.getElementById('health1');
    let health2 = document.getElementById('health2');

    let f1Health = 100;
    let f2Health = 100;

    document.addEventListener('keydown', function(e) {
      if (e.key === 'a') {
        // punch fighter2
        f2Health -= 10;
        if (f2Health < 0) f2Health = 0;
        health2.style.width = f2Health + '%';
      } else if (e.key === 'ArrowLeft') {
        // punch fighter1
        f1Health -= 10;
        if (f1Health < 0) f1Health = 0;
        health1.style.width = f1Health + '%';
      }
    });
  </script></body>
</html>
