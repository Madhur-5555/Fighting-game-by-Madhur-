<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mobile Fighting Game</title>
  <style>
    body {
      margin: 0;
      background-color: #111;
      overflow: hidden;
      font-family: Arial, sans-serif;
      color: #fff;
      text-align: center;
    }
    .game-area {
      width: 100vw;
      height: 100vh;
      position: relative;
      background-image: url('https://i.ibb.co/fqb4N1v/stage.jpg');
      background-size: cover;
    }
    .fighter {
      position: absolute;
      width: 100px;
      height: 150px;
      bottom: 60px;
      background-size: cover;
    }
    #fighter1 {
      left: 40px;
      background-image: url('https://i.ibb.co/fYvX8kz/fighter1.png');
    }
    #fighter2 {
      right: 40px;
      background-image: url('https://i.ibb.co/YbKzfjP/fighter2.png');
    }
    .health-bar {
      position: absolute;
      width: 40%;
      height: 20px;
      background-color: grey;
      top: 20px;
      border-radius: 10px;
      overflow: hidden;
    }
    .health-fill {
      height: 100%;
      background-color: green;
      width: 100%;
      transition: width 0.3s;
    }
    #health1 { left: 10px; }
    #health2 { right: 10px; }.controls {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.btn {
  padding: 20px 30px;
  background-color: #d6336c;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 10px;
}
.btn:active {
  background-color: #ff4d79;
}

  </style>
