
<template>
  <section class="c-profiles">
    <div class="c-profiles--container">
      <article class="c-profiles__item"
        v-for="profile in profiles" v-bind:key="profile.id">
        <div class="c-profiles__item--avatar">
          <figure>
            <img :src="profile.avatar_url" :alt="`${profile.login}'s Avatar`">
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
      profiles: []
    }
  },
  methods: {
    fetchProfiles(){
      const vm = this
      const api = `http://api.github.com/users`

      return axios.get(api)
                  .then(response => {
                    vm.profiles.push(...response.data)
                  })
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.fetchProfiles()
    })
  }
}
</script>

<style scoped lang="scss">
.c-profiles {
  padding: 10px;

  &--container {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  }

  &__item {
    display: flex;
    flex-basis: calc(50% - 10px);
    text-align: left;
    border: 1px solid #ddd;
    box-sizing: border-box;

    &:not(:last-child){
      margin-bottom: 15px;
      padding: 15px;
    }

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
