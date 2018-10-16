<template>
  <el-tabs type="border-card">
    <el-tab-pane class="full-pane" label="Home"><HomePane></HomePane></el-tab-pane>
    <el-tab-pane v-if="ledgerPresent" label="Accounts"></el-tab-pane>
    <el-tab-pane v-if="ledgerPresent" label="Journal">Journal</el-tab-pane>
    <el-tab-pane label="Preferences">Preferences</el-tab-pane>
  </el-tabs>
</template>

<script>
  import HomePane from './HomePane'

  export default {
    name: 'home-view',
    components: { HomePane },
    computed: {
      ledgerPresent () {
        return this.$store.state.Ledger.currentlyOpenLedger !== null;
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import '~@/assets/styles/main.scss';
</style>
