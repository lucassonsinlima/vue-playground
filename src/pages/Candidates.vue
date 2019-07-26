<template>
  <div class="candidates">
    <CandidatesProfile/>
  </div>
</template>

<script>
import CandidatesProfile from '@/components/candidates/CandidatesProfile.vue'

export default {
  name: 'Candidates',
  components: {
    CandidatesProfile
  }
}
</script>
