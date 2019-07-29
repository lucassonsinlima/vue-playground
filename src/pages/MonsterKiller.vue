<template>
  <div>
    <div class="panel scores">
      <div class="score player">
        <h1>Player</h1>
        <div class="progress">
          <div class="progress--bar"
              :class="{ danger: playerHP < 20 }"
              :style="{ width: `${playerHP}%` }"></div>
        </div>
        <div class="progress--percent">
          {{ playerHP }}%
        </div>
      </div>
      <div class="score monster">
        <h1>Mob</h1>
        <div class="progress">
          <div class="progress--bar"
              :class="{ danger: monsterHP < 20 }"
              :style="{ width: `${monsterHP}%` }"></div>
        </div>
        <div class="progress--percent">
          {{ monsterHP }}%
        </div>
      </div>
    </div>
    <div v-if="hasResult" class="panel result">
      <div v-if="monsterHP == 0" class="result--win">You win :)</div>
      <div v-else class="result--lose">You died :(</div>
    </div>
    <div class="panel buttons">
      <template v-if="isRunning">
        <button class="btn btn--blue" @click="attack(false)">Attack</button>
        <button class="btn btn--yellow" @click="attack(true)">Special Move</button>
        <button class="btn btn--green" @click="healAndHurt">Heal</button>
        <button class="btn btn--red" @click="surrender">Surrender</button>
      </template>
      <button class="btn btn--black" @click="startGame">Play Game</button>
    </div>
    <div v-if="logs.length" class="panel logs">
      <ul>
        <li v-for="(log, index) in logs"
            :key="index"
            class="log"
            :class="log.klass">{{ log.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isRunning: false,
      playerHP: 100,
      monsterHP: 100,
      logs: []
    }
  },
  computed: {
    hasResult(){
      return this.playerHP == 0 || this.monsterHP == 0
    }
  },
  methods: {
    startGame(e){
      const vm = this

      vm.isRunning = true
      vm.playerHP = 100
      vm.monsterHP = 100
      vm.logs = []
    },
    surrender(e){
      const vm = this

      vm.isRunning = false
    },
    attack(special){
      const vm = this

      this.hurt('monsterHP', 5, 10, special, 'Player', 'Monster', 'player')

      if(this.monsterHP > 0) {
        this.hurt('playerHP', 7, 12, false, 'Monster', 'Player', 'monster')
      }
    },
    hurt(who, min, max, special, source, target, klass){
      const vm = this
      const plus = special ? 5 : 0
      const hurt = this.getRandom(min + plus, max + plus)

      this[who] = Math.max(this[who] - hurt, 0)

      vm.registerLog(`${source} hitted ${target} with ${hurt}.`, klass)
    },
    getRandom(min, max){
      const value = Math.random() * (max - min) + min

      return Math.round(value)
    },
    healAndHurt(){
      this.heal(10, 15)
      this.hurt('playerHP', 7, 12, false, 'Monster', 'Player', 'monster')
    },
    heal(min, max) {
      const vm = this
      const heal = vm.getRandom(min, max)

      vm.playerHP = Math.min(vm.playerHP + heal, 100)
      vm.registerLog(`Player has been healed with ${heal}.`, 'player')
    },
    registerLog(text, klass) {
      const vm = this

      vm.logs.unshift({ text, klass })
    }
  },
  watch: {
    hasResult(value){
      if(value) this.isRunning = false
    }
  }
}
</script>

<style scoped lang="scss">
  .panel {
    display: flex;
    margin: 10px;
    padding: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

    h1 {
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 15px;
    }

    &.scores {
      justify-content: space-around;
      flex-flow: wrap;
    }
  }

  .score {
    display: flex;
    flex: 1;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .progress {
    width: 80%;
    height: 20px;
    border: 1px solid #AAA;
    &--bar {
      display: flex;
      justify-content: center;
      height: 100%;
      background: green;
      &.danger {
        background: red;
      }
    }
  }

  .result {
    font-weight: 700;
    display: flex;
    justify-content: center;
    &--win {
      color: green;
    }
    &--lose {
      color: red;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;

    .btn {
      margin: 0 10px;
      width: 100px;
      font-weight: 600
    }
  }

  .btn {
    color: #fff;

    &--blue {
      background: blue;
    }
    &--yellow {
      background: yellow;
      color: #000;
    }
    &--black {
      background: #000;
    }
  }

  .logs {
    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    li {
      display: flex;
      justify-content: center;
      margin: 4px 0;
      padding: 3px 0;
      font-weight: 700;
      font-size: 14px;
      border-radius: 3px;
    }
  }

  .log {
    &.monster {
      background: rgba(255, 0, 0, 0.15);
    }
    &.player {
      background: rgba(0, 255, 43, 0.13);
    }
  }
</style>
