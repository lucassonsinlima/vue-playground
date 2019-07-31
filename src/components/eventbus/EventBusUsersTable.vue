<template>
  <div class="eventbus__table">
    <div class="eventbus__table--container table">

      <div class="eventbus__table--header table--row">
        <div class="eventbus__user--id text--bold">#ID</div>
        <div class="eventbus__user--name text--bold">Login</div>
      </div>
      <EventBusUser :user="user"
                    v-for="user in list"
                    :key="user.id"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import EventBusUser from '@/components/eventbus/EventBusUser.vue'

export default {
  data() {
    return {
      list: [],
      loading: false
    }
  },
  components: {
    EventBusUser
  },
  methods: {
    async fetchUsers(){
      const vm = this
      const api = `http://api.github.com/users`

      vm.loading = true

      return axios.get(api)
                  .then(response => {
                    if(response.data) return response.data
                  })
    },
  },
  async beforeMount(){
    const vm = this
    const users = await vm.fetchUsers()

    vm.list.push(...users)

    vm.loading = false
  }
}
</script>

<style lang="scss">
.eventbus {
  &__table {
    &--header {
      font-size: 16px;
    }
  }
  .table {
    border: 1px solid #eee;
    &--row {
      display: flex;
      flex-flow: wrap;
      padding: 15px 0;
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
      > div {
        text-align: center;
        flex-basis: 50%;
      }
    }
  }
}

</style>
