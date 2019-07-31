import Vue from 'vue'

export default new Vue({
  methods: {
    setSelectedUser(user) {
      this.$emit('selectedUser', user)
    },
    onUserSelect(callback){
      this.$on('selectedUser', callback)
    }
  }
})
