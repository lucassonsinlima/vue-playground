<template>
  <div class="eventbus">
    <div class="container">
      <EventBusUsersTable/>
      <EventBusUsersPanel/>
    </div>
  </div>
</template>

<script>

import EventBusUsersPanel from '@/components/eventbus/EventBusUsersPanel.vue'
import EventBusUsersTable from '@/components/eventbus/EventBusUsersTable.vue'

export default {
  name: 'EventBus',
  components: {
    EventBusUsersTable,
    EventBusUsersPanel
  }
}
</script>

<style>

</style>
