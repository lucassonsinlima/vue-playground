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

<style lang="scss">
.eventbus {
  .container {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;

    > div {
      flex-basis:  50%;
      padding: 0 10px;
    }
  }
}
</style>
