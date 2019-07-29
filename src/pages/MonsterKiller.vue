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
    <div class="panel buttons">hehe3</div>
    <div class="panel logs">hehe4</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerHP: 100,
      monsterHP: 100
    }
  },
  computed: {
    hasResult(){
      return this.playerHP == 0 || this.monsterHP == 0
    }
  },
  methods: {

  },
  watch: {
    hasResult(new_value, old_value){
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
</style>
