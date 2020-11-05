const canvas = document.getElementById("canvas"); //Selecionando o canvas no HTML
const ctx = canvas.getContext("2d"); //Definindo o contexto do canvas para 2D

const background = new Image(); //Selecionando a imagem background
background.src = "./imagens/background-correto.jpg";

const player = new Image(); //Selecionando a imagem do personagem #1
player.src = "./imagens/char1.png";

const player1 = new Image(); //Selecionando a imagem do personagem #2
player1.src = "./imagens/char2.png";

const player2 = new Image(); //Selecionando a imagem do personagem #3
player2.src = "./imagens/char3.png";

// =====banana
banana1 = new Image();
banana1.src = "./bananas/banana01.png";

banana2 = new Image();
banana2.src = "./bananas/banana02.png";

banana3 = new Image();
banana3.src = "./bananas/banana03.png";

banana4 = new Image();
banana4.src = "./bananas/banana04.png";

// =====maça
frutaroxa1 = new Image();
frutaroxa1.src = "./bananas/frutaroxa01.png";

frutaroxa2 = new Image();
frutaroxa2.src = "./bananas/frutaroxa02.png";

frutaroxa3 = new Image();
frutaroxa3.src = "./bananas/frutaroxa03.png";

frutaroxa4 = new Image();
frutaroxa4.src = "./bananas/frutaroxa04.png";

// =====raspberry
raspberry1 = new Image();
raspberry1.src = "./bananas/raspberry01.png";

raspberry2 = new Image();
raspberry2.src = "./bananas/raspberry02.png";

raspberry3 = new Image();
raspberry3.src = "./bananas/raspberry03.png";

raspberry4 = new Image();
raspberry4.src = "./bananas/raspberry04.png";

// =====melancia
melancia1 = new Image();
melancia1.src = "./bananas/melancia01.png";

melancia2 = new Image();
melancia2.src = "./bananas/melancia02.png";

melancia3 = new Image();
melancia3.src = "./bananas/melancia03.png";

melancia4 = new Image();
melancia4.src = "./bananas/melancia04.png";

//++======================= BACKGROUND =======================++//

class Background {
  //Classe para criar o background

  constructor(x, y, width, height) {
    //Classe recebe os dados de background
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0.7; //Speed para incrementar na posição y
  }

  move() {
    //Função para incrementar o speed na posição y e fazer o background descer
    this.y += this.speed;
  }

  draw() {
    //Função para plotar o background no canvas
    ctx.drawImage(background, this.x, this.y, this.width, this.height); //Plotando background

    if (this.speed > 0) {
      //Se speed for > 0 (Sempre será), desenhe outra imagem acima da atual com o this.y - canvas.height
      ctx.drawImage(
        background,
        this.x,
        this.y - canvas.height,
        this.width,
        this.height
      );
    }
    if (this.y >= canvas.height) {
      //Após o y passar da altura do canvas com incrementações, resetar a posição y das duas imagens
      this.y = 0;
    }
  }
}

//++======================= OBJETOS & PERSONAGEM =======================++//

class Player {
  constructor(x, y, width, height, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;
    this.currentFrame = 0;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.x >= canvas.width - 34) {
      this.x = canvas.width - 34;
    }
  }

  draw() {
    if (this.speedX !== 0 || this.speedY !== 0) {
      this.currentFrame++;
      if (this.currentFrame < 10) {
        ctx.drawImage(player, this.x, this.y, this.width, this.height);
      } else if (this.currentFrame < 20) {
        ctx.drawImage(player1, this.x, this.y, this.width, this.height);
      } else if (this.currentFrame < 30) {
        ctx.drawImage(player2, this.x, this.y, this.width, this.height);
      } else {
        ctx.drawImage(player, this.x, this.y, this.width, this.height);
        this.currentFrame = 0;
      }
    } else {
      ctx.drawImage(player, this.x, this.y, this.width, this.height);
    }
  }
}

const todasImagens = [
  //Gerar uma nova array sequenciada para nao vir duas mesmas frutas
  [{ img1: melancia1, img2: melancia2, img3: melancia3, img4: melancia4 }],
  [{ img1: melancia1, img2: melancia2, img3: melancia3, img4: melancia4 }],
  [{ img1: melancia1, img2: melancia2, img3: melancia3, img4: melancia4 }],
  [{ img1: melancia1, img2: melancia2, img3: melancia3, img4: melancia4 }],
];

class Fruits {
  constructor(img1, img2, img3, img4, x, y, width, height, speed) {
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.img4 = img4;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  moveFruits() {
    this.y += this.speed;
  }

  drawAnimateFruits() {
    this.currentFrame++;
    if (this.currentFrame < 10) {
      ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
    } else if (this.currentFrame < 20) {
      ctx.drawImage(this.img2, this.x, this.y, this.width, this.height);
    } else if (this.currentFrame < 30) {
      ctx.drawImage(this.img3, this.x, this.y, this.width, this.height);
    } else if (this.currentFrame < 40) {
      ctx.drawImage(this.img4, this.x, this.y, this.width, this.height);
    } else {
      ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
      this.currentFrame = 0;
    }
  }
  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }
}

function encostarFruta(obstacle) {
  const condition = !(
    obstacle.bottom() < char.top() ||
    obstacle.top() > char.bottom() ||
    obstacle.right() < char.left() ||
    obstacle.left() > char.right()
  );
  return condition;
}

class Game {
  constructor() {
    this.frames = 0;
    this.obstacles = [];
  }

  updateObstacles() {
    this.frames++;

    if (this.frames % 90 === 0) {
      let y = -20;

      let minX = -10;
      let maxX = canvas.width - 80;
      let x = Math.floor(Math.random() * (maxX - minX + 1) + minX);
      let random = Math.floor(Math.random() * todasImagens.length);
      const obstacle = new Fruits(
        todasImagens[random][0].img1,
        todasImagens[random][0].img2,
        todasImagens[random][0].img3,
        todasImagens[random][0].img4,
        x,
        y,
        60,
        48,
        1
      );

      this.obstacles.push(obstacle);
    }

    this.obstacles.map((obstacle) => {
      obstacle.moveFruits();
      obstacle.drawAnimateFruits();
    });
  }
}

const game = new Game();
const bg = new Background(0, 0, canvas.width, canvas.height);
const char = new Player(100, 400, 34, 60, 0, 0);

function empurrarPlayer() {
  char.y += bg.speed;
}

function movement() {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        char.speedX = -1;
        break;

      case "ArrowRight":
        char.speedX = 1;
        break;

      case "ArrowDown":
        char.speedY = 1;
        break;

      case "ArrowUp":
        char.speedY = -1;
        break;
    }
  });

  document.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        char.speedX = 0;
        break;

      case "ArrowRight":
        char.speedX = 0;
        break;

      case "ArrowDown":
        char.speedY = 0;
        break;

      case "ArrowUp":
        char.speedY = 0;
        break;
    }
  });
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bg.move();
  bg.draw();
  char.move();
  char.draw();
  empurrarPlayer();
  game.updateObstacles();

  function verificaEncostarFruta() {
    // console.log("obstacles :" + this.obstacles);
    const encostou = game.obstacles.some((obstacle) => {
      return encostarFruta(obstacle);
    });

    // console.log("encostou :" + encostou);

    const animationID = requestAnimationFrame(updateGame);

    if (encostou) {
      char.y += 2;
    }
    if (char)
      if (char.y >= canvas.height - 30) {
        cancelAnimationFrame(animationID);
      }

    if (char.y < -5) {
      cancelAnimationFrame(animationID);
    }
  }
  verificaEncostarFruta();

  // console.log(animationID)
}

window.onload = () => {
  updateGame();
  movement();
};
