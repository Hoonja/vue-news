<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>  
    <spinner :loading="loadingStatus"></spinner>  
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner'
import Bus from './utils/bus.js'

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    stopSpinner() {
      this.loadingStatus = false
    }
  },
  created() {
    Bus.$on('start:spinner', this.startSpinner)
    Bus.$on('stop:spinner', this.stopSpinner)
  },
  beforeDestroy() {
    Bus.$off('start:spinner', this.startSpinner)
    Bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #43b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
