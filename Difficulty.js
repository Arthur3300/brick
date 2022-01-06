class Difficulty {
    constructor() {
      this.index = null
    }
  
  
    getDifficultyCount() {
      var difficultyCountRef = database.ref("difficultyCount");
      difficultyCountRef.on("value", data => {
        difficultyCount = data.val();
      });
    }
  
    updateDifficultyCount(count) {
      database.ref("/").update({
        difficultyCount: count
      });
    }
  }
  