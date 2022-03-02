<template>
  <section id="team">
    <div class="container text-center">
      <div class="col-12">
        <h1 class="text-uppercase">Meet Our Team</h1>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6" v-for="(member, i) in team" :key="i">
          <MemberCard :member="member" :imageLink="imageLink" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import MemberCard from '@/components/home/MemberCard'
export default {
  components: {
    MemberCard
  },
  computed: {
    ...mapState({
      imageLink: state => state.imageLink,
      team: state => state.team.team
    })
  },
  mounted() {
    this.$store.dispatch('team/fetch').then(() => {})
  }
}
</script>

<style></style>
