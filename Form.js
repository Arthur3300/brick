class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.easyButton = createButton("Easy");
    this.mediumButton = createButton("Medium");
    this.hardButton = createButton("Hard");
    this.playButton = createButton("Play");
    this.titleImg = createImg("title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 160, height / 2 - 80);
    this.easyButton.position(width / 2 - 320, height / 2 - 20);
    this.mediumButton.position(width / 2 - 90, height / 2 - 20);
    this.hardButton.position(width / 2 + 130, height / 2 - 20);
    this.playButton.position(width / 2 - 90, height / 2 + 50);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.easyButton.class("customButton");
    this.mediumButton.class("customButton");
    this.hardButton.class("customButton");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.easyButton.hide();
    this.mediumButton.hide();
    this.hardButton.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.easyButton.mousePressed(() =>{
      difficultyCount = 0;
      difficulty.index = difficultyCount;
      difficulty.updateDifficultyCount(difficultyCount);
    });

    this.mediumButton.mousePressed(() =>{
      difficultyCount = 1;
      difficulty.index = difficultyCount;
      difficulty.updateDifficultyCount(difficultyCount);
    });
    
    this.hardButton.mousePressed(() =>{
      difficultyCount = 2;
      difficulty.index = difficultyCount;
      difficulty.updateDifficultyCount(difficultyCount);      
    });

    if (difficultyCount === 0 || 1 || 2) {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.easyButton.hide();
        this.mediumButton.hide();
        this.hardButton.hide();
        this.playButton.hide();
        var message = `
        Hello ${this.input.value()}
        </br>wait for another player to join...`;
        this.greeting.html(message);
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayer();
        player.updateCount(playerCount);
        player.getDistance();
      });
      
    }

  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
