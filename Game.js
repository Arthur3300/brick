class Game {
    constructor() {
      this.resetTitle = createElement("h2");
      this.resetButton = createButton("");
  
      this.leadeboardTitle = createElement("h2");
  
      this.leader1 = createElement("h2");
      this.leader2 = createElement("h2");
      this.playerMoving = false;
  
      this.leftKeyActive = false;
      // this.blast = false; //C42//SA
    }
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();

      difficulty = new Difficulty();
      difficultyCount = difficulty.getDifficultyCount();
  
      paddle1 = createSprite(width / 2 - 50, height - 100);
      paddle1.addImage("paddle", paddle_img);
      paddle1.scale = 0.07;

  
    //   car1.addImage("blast", blastImage); //C42 //SA
  
      paddle2 = createSprite(width / 2 + 100, height - 100);
      paddle2.addImage("paddle", paddle_img);
      paddle2.scale = 0.07;
    //   car2.addImage("car2", car2_img);
    //   car2.scale = 0.07;
  
      // car2.addImage("blast", blastImage); //C42//SA
  
      paddles = [paddle1, paddle2];

      // for (var i = 0; i < 10; i++) {
      //   for (var n = 0; n < 10; n++) {
      //     brick = createSprite(i, n, 40, 20);
          
      //   }
      // }
  
    //   fuels = new Group();
    //   powerCoins = new Group();
  
      // Adding fuel sprite in the game
    //   this.addSprites(fuels, 4, fuelImage, 0.02);
  
    //   // Adding coin sprite in the game
    //   this.addSprites(powerCoins, 18, powerCoinImage, 0.09);
  
    // //   //C41 //BP //SA
    //   var bricksPositions = [
    //     { x: width / 2 + 250, y: height - 800 , image: brick2Image},
    //     { x: width / 2 - 150, y: height - 1300, image: brick1Image },
    //     { x: width / 2 + 250, y: height - 1800, image: brick1Image },
    //     { x: width / 2 - 180, y: height - 2300, image: brick2Image },
    //     { x: width / 2, y: height - 2800, image: brick1Image },
    //     { x: width / 2 - 180, y: height - 3300, image: brick1Image },
    //     { x: width / 2 + 180, y: height - 3300, image: brick1Image },
    //     { x: width / 2 + 250, y: height - 3800, image: brick2Image },
    //     { x: width / 2 - 150, y: height - 4300, image: brick1Image },
    //     { x: width / 2 + 250, y: height - 4800, image: brick1Image },
    //     { x: width / 2, y: height - 5300, image: brick2Image },
    //     { x: width / 2 - 180, y: height - 5500, image: brick1Image }
    //   ];
  
    //   //Adding obstacles sprite in the game
    //   this.addSprites(
    //     bricks,
    //     bricksPositions.length,
    //     brick1Image,
    //     0.04,
    //     bricksPositions
    //   );
     }
  
    //C41 //SA
    // addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
    //   for (var i = 0; i < numberOfSprites; i++) {
    //     var x, y;
  
    //     //C41 //SA
    //     if (positions.length > 0) {
    //       x = positions[i].x;
    //       y = positions[i].y;
    //       spriteImage = positions[i].image;
    //     } else {
    //       x = random(width / 2 + 150, width / 2 - 150);
    //       y = random(-height * 4.5, height - 400);
    //     }
    //     var sprite = createSprite(x, y);
    //     sprite.addImage("sprite", spriteImage);
  
    //     sprite.scale = scale;
    //     spriteGroup.add(sprite);
    //   }
    // }
  
    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
  
      this.resetTitle.html("Reset Game");
      this.resetTitle.class("resetText");
      this.resetTitle.position(width / 2 + 470, 5);
  
      this.resetButton.class("resetButton");
      this.resetButton.position(width / 2 + 510, 65);
  
      this.leadeboardTitle.html("Leaderboard");
      this.leadeboardTitle.class("resetText");
      this.leadeboardTitle.position(width / 3 - 60, 40);
  
      this.leader1.class("leadersText");
      this.leader1.position(width / 3 - 50, 80);
  
      this.leader2.class("leadersText");
      this.leader2.position(width / 3 - 50, 130);
    }
  
    play() {
      this.handleElements();
      this.handleResetButton();
  
      Player.getPlayersInfo();
      player.getBallsAtEnd();
  
      if (allPlayers !== undefined) {
        // image(track, 0, -height * 5, width, height * 6);
  
        // this.showFuelBar();
        // this.showLife();
        // this.showLeaderboard();
  
        //index of the array
        var index = 0;
        for (var plr in allPlayers) {
          //add 1 to the index for every loop
          index = index + 1;
  
          //use data form the database to display the cars in x and y direction
          var x = allPlayers[plr].positionX;
          var y = height/2  - allPlayers[plr].positionY + 250;
  
          //C42//TA
          // var currentlife = allPlayers[plr].life;
  
          // if (currentlife <= 0) {
          //   paddles[index - 1].changeImage("blast");
          //   paddles[index - 1].scale = 0.3;
          // }
  
          paddles[index - 1].position.x = x;
          paddles[index - 1].position.y = y;
  
          if (index === player.index) {
            stroke(10);
            fill("red");
            ellipse(x, y, 60, 60);
  
            // this.handleFuel(index);
            // this.handlePowerCoins(index);
            // this.handleCarACollisionWithCarB(index); //C41//BP//TA
            // this.handleObstacleCollision(index); //C41//SA
  
            // //C42//TA
            // if (player.life <= 0) {
            //   this.blast = true;
            //   this.playerMoving = false;
            // }
  
            // Changing camera position in y direction
            // camera.position.x = paddles[index - 1].position.x;
          }
        }
  
        if (this.playerMoving) {
          player.positionX += 5;
          player.update();
        }
  
        // handling keyboard events
        this.handlePlayerControls();
  
        // Finshing Line
        // const finshLine = height - 100;
  
        // if (player.positionY > finshLine) {
        //   gameState = 2;
        //   player.rank += 1;
        //   // Player.updateBallsAtEnd(player.rank);
        //   player.update();
        //   this.showRank();
        // }
  
        drawSprites();
      }
    }
  
    // handleFuel(index) {
    //   // Adding fuel
    //   cars[index - 1].overlap(fuels, function(collector, collected) {
    //     player.fuel = 185;
    //     //collected is the sprite in the group collectibles that triggered
    //     //the event
    //     collected.remove();
    //   });
  
    //   // Reducing Player car fuel
    //   if (player.fuel > 0 && this.playerMoving) {
    //     player.fuel -= 0.3;
    //   }
  
    //   if (player.fuel <= 0) {
    //     gameState = 2;
    //     this.gameOver();
    //   }
    // // }
  
    // handlePowerCoins(index) {
    //   cars[index - 1].overlap(powerCoins, function(collector, collected) {
    //     player.score += 21;
    //     player.update();
    //     //collected is the sprite in the group collectibles that triggered
    //     //the event
    //     collected.remove();
    //   });
    // }
  
    handleResetButton() {
      this.resetButton.mousePressed(() => {
        database.ref("/").set({
          ballAtEnd: 0,
          playerCount: 0,
          gameState: 0,
          difficultyCount: 0,
          palyers: {}
        });
        window.location.reload();
      });
    }
  
    // showFuelBar() {
    //   push();
    //   image(fuelImage, width / 2 - 130, height - player.positionY - 350, 20, 20);
    //   fill("white");
    //   rect(width / 2 - 100, height - player.positionY - 350, 185, 20);
    //   fill("#ffc400");
    //   rect(width / 2 - 100, height - player.positionY - 350, player.fuel, 20);
    //   noStroke();
    //   pop();
    // }
  
    // showLife() {
    //   push();
    //   image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
    //   fill("white");
    //   rect(width / 2 - 100, height - player.positionY - 400, 185, 20);
    //   fill("#f50057");
    //   rect(width / 2 - 100, height - player.positionY - 400, player.life, 20);
    //   noStroke();
    //   pop();
    // }
  
    // showLeaderboard() {
    //   var leader1, leader2;
    //   var players = Object.values(allPlayers);
    //   if (
    //     (players[0].rank === 0 && players[1].rank === 0) ||
    //     players[0].rank === 1
    //   ) {
    //     // &emsp;    This tag is used for displaying four spaces.
    //     leader1 =
    //       players[0].rank +
    //       "&emsp;" +
    //       players[0].name +
    //       "&emsp;" +
    //       players[0].score;
  
    //     leader2 =
    //       players[1].rank +
    //       "&emsp;" +
    //       players[1].name +
    //       "&emsp;" +
    //       players[1].score;
    //   }
  
    //   if (players[1].rank === 1) {
    //     leader1 =
    //       players[1].rank +
    //       "&emsp;" +
    //       players[1].name +
    //       "&emsp;" +
    //       players[1].score;
  
    //     leader2 =
    //       players[0].rank +
    //       "&emsp;" +
    //       players[0].name +
    //       "&emsp;" +
    //       players[0].score;
    //   }
  
    //   this.leader1.html(leader1);
    //   this.leader2.html(leader2);
    // }
  
    handlePlayerControls() {
      //C41 //TA
      // if (!this.blast) {
        // if (keyIsDown(UP_ARROW)) {
        //   this.playerMoving = true;
        //   player.positionY += 10;
        //   player.update();
        // }
  
        if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 370) {
          this.leftKeyActive = true;
          player.positionX -= 5;
          player.update();
        }
  
        if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 585) {
          this.leftKeyActive = false;
          player.positionX += 5;
          player.update();
        }
      }
    // }
  
    // //C41 //SA
    // handleObstacleCollision(index) {
    //   if (cars[index - 1].collide(obstacles)) {
    //     //C41 //TA
    //     if (this.leftKeyActive) {
    //       player.positionX += 100;
    //     } else {
    //       player.positionX -= 100;
    //     }
  
    //     //C41 //SA
    //     //Reducing Player Life
    //     if (player.life > 0) {
    //       player.life -= 185 / 4;
    //     }
  
    //     player.update();
    //   }
    // }
  
    // //C41 //TA //Bp
    // handleCarACollisionWithCarB(index) {
    //   if (index === 1) {
    //     if (cars[index - 1].collide(cars[1])) {
    //       if (this.leftKeyActive) {
    //         player.positionX += 100;
    //       } else {
    //         player.positionX -= 100;
    //       }
  
    //       //Reducing Player Life
    //       if (player.life > 0) {
    //         player.life -= 185 / 4;
    //       }
  
    //       player.update();
    //     }
    //   }
    //   if (index === 2) {
    //     if (cars[index - 1].collide(cars[0])) {
    //       if (this.leftKeyActive) {
    //         player.positionX += 100;
    //       } else {
    //         player.positionX -= 100;
    //       }
  
    //       //Reducing Player Life
    //       if (player.life > 0) {
    //         player.life -= 185 / 4;
    //       }
  
    //       player.update();
    //     }
    //   }
    // }
  
    // showRank() {
    //   swal({
    //     title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
    //     text: "You reached the finish line successfully",
    //     imageUrl:
    //       "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
    //     imageSize: "100x100",
    //     confirmButtonText: "Ok"
    //   });
    // }
  
    // gameOver() {
    //   swal({
    //     title: `Game Over`,
    //     text: "Oops you lost the race....!!!",
    //     imageUrl:
    //       "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    //     imageSize: "100x100",
    //     confirmButtonText: "Thanks For Playing"
    //   });
    // }
    // end() {
    //   console.log("Game Over");
    // }
  }

  