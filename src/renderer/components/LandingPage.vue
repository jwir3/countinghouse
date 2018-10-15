<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/countinghouse-textmark.png" alt="countinghouse">
    <main>
      <div class="left-side">
        <span class="title">
          Welcome to countinghouse!
        </span>
        <div class="actions">
          <ButtonStack>
          </ButtonStack>
        </div>
      </div>

      <div class="right-side">
        <div class="doc">
          <div class="title">Getting Started</div>
          <p>
            Although countinghouse is designed to be as intuitive and simple as
            possible, accounting is a complicated subject. As such, we've made
            sure there are ample documents for you to look at as you begin your
            journey with us!
          </p>
          <button @click="open('https://github.com/jwir3/countinghouse')">Quickstart Guide</button><br><br>
        </div>
        <!-- <div class="doc">
          <div class="title alt">Other Documentation</div>
          <button class="alt" @click="open('https://electron.atom.io/docs/')">Electron</button>
          <button class="alt" @click="open('https://vuejs.org/v2/guide/')">Vue.js</button>
        </div> -->
      </div>
    </main>
  </div>
</template>

<script>
  import ButtonStack from './LandingPage/ButtonStack'

  export default {
    name: 'landing-page',
    components: { ButtonStack },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import '~@/assets/styles/main.scss';
</style>
