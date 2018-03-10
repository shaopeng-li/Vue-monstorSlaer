new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    log: []
  },

  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = [];
    },
    attack: function () {
      var maxDamage = 10
      var minDamage = 3;
      var damage = Math.random()* (maxDamage - minDamage) + minDamage;
      this.monsterHealth -= Math.round(damage);
      this.log.unshift({
        isPlayer: true,
        text: "Monster got attack " + damage + "from you"
      });

      if(this.monsterHealth <= 0) {
        alert("you win!");
        this.gameIsRunning = false;
        return;
      }

      maxDamage = 12;
      minDamage = 5;
      damage = Math.random()* (maxDamage - minDamage) + minDamage;
      this.playerHealth -= Math.round(damage);
      this.log.unshift({
        isPlayer: false,
        text: "You got attack " + damage + "from Monster"
      });

      if(this.playerHealth <= 0) {
        alert("you lose!");
        this.gameIsRunning = false;
        return;
      }
    },
    specialAttack: function () {
      var maxDamage = 20
      var minDamage = 15;
      var damage = Math.random()* (maxDamage - minDamage) + minDamage;
      this.monsterHealth -= Math.round(damage);
      this.log.unshift({
        isPlayer: true,
        text: "Use special attack, monster got attack " + damage + "from you"
      });

      if(this.monsterHealth <= 0) {
        alert("you win!");
        this.gameIsRunning = false;
        return;
      }

      maxDamage = 12;
      minDamage = 5;
      damage = Math.random()* (maxDamage - minDamage) + minDamage;
      this.playerHealth -= Math.round(damage);
      this.log.unshift({
        isPlayer: false,
        text: "You got attack " + damage + "from monster"
      });

      if(this.playerHealth <= 0) {
        alert("you lose!");
        this.gameIsRunning = false;
        return;
      }

    },
    heal: function () {
      var maxDamage = 25
      var minDamage = 0;
      var damage = Math.random()* (maxDamage - minDamage) + minDamage;
      this.playerHealth += Math.round(damage);
      this.log.unshift({
        isPlayer: true,
        text: "You got heal " + damage
      });

      maxDamage = 12;
      minDamage = 5;
      damage = Math.random()* (maxDamage - minDamage) + minDamage;
      this.playerHealth -= Math.round(damage);
      this.log.unshift({
        isPlayer: false,
        text: "You got attack " + damage + "from monster"
      });

      if(this.playerHealth <= 0) {
        alert("you lose!");
        this.gameIsRunning = false;
        return;
      }
    },
    giveUp: function () {
      this.playerHealth = 0;
      this.log = [];
      alert("you lose!");
      this.gameIsRunning = false;
    }
  }
})
