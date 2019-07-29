
<template>
  <section class="c-profiles">
    <div class="c-profiles__fields">
      <div class="c-profiles__fields--item c-profiles__fields--binding">
        <p class="text text--gray">{{ profile_name }}</p>
        <input type="text" v-model="profile_name">
      </div>
      <div class="c-profiles__fields--item c-profiles__fields--keys">
        <p class="text text--gray">{{ profile_name_keys }}</p>
        <input type="text" @keyup.enter="reversedProfileName">
      </div>
      <div class="c-profiles__fields--item c-profiles__fields--computed">
        <div>
          <h2 class="text--bold">Sum Computed</h2>
          <p><strong>Count:</strong>{{ counter }}</p>
          <p><strong>Result:</strong> {{ result }}</p>
          <button class="btn btn--green"
            @click="sum">Sum Computed</button>
          <button class="btn btn--green"
            @click="sub">Sub Computed</button>
        </div>
      </div>
      <div class="c-profiles__fields--item c-profiles__fields--pagination">
        <h2 class="text--bold">Fetch Profiles</h2>
        <button class="btn btn--red"
        @click="fetchProfiles()">
          Fetch Profiles
        </button>
      </div>
    </div>
    <div class="c-profiles--container">
      <article class="c-profiles__item panel"
        v-for="profile in profiles"
        v-bind:key="profile.id"
        @mousemove="getCoordinates">
        <div class="c-profiles__item--avatar">
          <figure>
            <img
            :src="profile.avatar_url"
            :alt="`${profile.login}'s Avatar`">
          </figure>
        </div>
        <div class="c-profiles__item--name">
          <span class="text text--gray text--bold ">{{ profile.login }}</span>
          <div class="c-profiles__item--career">
            <span class="text text--gray">{{ profile.type }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  name: "CandidatesProfile",
  data(){
    return {
      profiles: [],
      page: 1,
      x: 0,
      y: 0,
      profile_name: 'Profile Name',
      profile_name_keys: 'Jerberson Githuber Tobias',
      counter: 0,
    }
  },
  computed: {
    result(){
      return this.counter >= 5 ? 'Maior igual 5' : 'Menor igual a 5'
    }
  },
  watch: {
    counter(old_val, new_val){
      console.log(`Old: ${old_val} \n New: ${new_val}`)
      const vm = this
      const el = document.querySelectorAll('.c-profiles__item')

      if(el[0] && new_val > 0){
        el[0].remove()
      }
    }
  },
  methods: {
    fetchProfiles(){
      const vm = this
      const api = `http://api.github.com/users?since=${vm.page}`

      return axios.get(api)
                  .then(response => {
                    if(vm.profiles){
                      vm.profiles = response.data
                    } else {
                      vm.profiles.push(...response.data)
                    }
                    vm.page++
                  })
    },
    getCoordinates(e){
      const vm = this

      vm.x = e.clientX
      vm.y = e.clientY
    },
    reversedProfileName(){
      this.profile_name_keys = this.profile_name_keys.split('')
                                                      .reverse()
                                                      .join('')
    },
    sum(){
      this.counter++
    },
    sub(){
      this.counter--
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.fetchProfiles()
    })
  }
}
</script>

<style lang="scss">

$gray: #ddd;

.text {
  display: block;
  padding-bottom: 5px;

  &--bold {
    font-weight: 700;
  }
}

.c-profiles {
  padding: 10px;

  &--container {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  }

  &__fields {
    display: flex;
    flex-flow: column;
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid $gray;
    text-align: left;

    &--item {
      padding: 15px;
      margin: 8px;
      border: 1px solid $gray;
    }
  }

  &__item {
    display: flex;
    flex-basis: calc(50% - 10px);
    text-align: left;
    border: 1px solid $gray;
    box-sizing: border-box;
    height: 130px;
    padding: 15px;
    margin-bottom: 15px;
    background: #fff;
    transition: all .5s ease-in-out;

    &:nth-child(2n + 1){
      margin-right: 15px;
    }

    &--avatar {
      img {
        width: 100px;
        height: auto;
        display: block;
      }
    }

    &--name {
      padding-left: 15px;
    }
  }
}
</style>
