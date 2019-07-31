<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Vue Playground</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <div class="xd">
          <router-link class="md-button" to="/">Home</router-link>
          <router-link class="md-button" to="/conditionals">
            Conditionals
          </router-link>
          <router-link class="md-button" to="/monster-killer">
            Monster Killer
          </router-link>
          <router-link class="md-button" to="/async">
            Async
          </router-link>
          <router-link class="md-button" to="/lifecycle">
            lifecycle
          </router-link>
          <router-link class="md-button" to="/event-bus">
            event bus
          </router-link>
        </div>
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
   // Demo purposes only
</style>

<script>
export default {
  name: 'LastRowFixed'
}
</script>
