<template>
  <div class="button-stack">
    <button>Create New Ledger</button>
    <button @click="openLedger" v-if="ledgerAbsent">Open Existing Ledger</button>
    <button @click="closeLedger" v-if="ledgerPresent">Close Existing Ledger</button>
  </div>
</template>

<script>
  export default {
    computed: {
      ledgerPresent () {
        return this.$store.state.Ledger.currentlyOpenLedger !== null;
      },

      ledgerAbsent () {
        return this.$store.state.Ledger.currentlyOpenLedger === null;
      }
    },

    methods: {
      openLedger () {
        this.$store.dispatch('openLedger');
      },

      closeLedger () {
        this.$store.dispatch('closeLedger');
      }
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/styles/buttonstack.scss';
</style>
