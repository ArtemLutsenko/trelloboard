<template>
  <section class="dashboard">
    <div class="dashboard-wrapper">
      <app-board-list
        v-for="list in lists"
        :key="list.name"
        :list="list"
      ></app-board-list>
    </div>
  </section>
</template>

<script>
import appBoardList from "./components/BoardList";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    appBoardList
  },
  computed: {
    ...mapGetters({ lists: "getDashboard" })
  },
  methods: {
    ...mapActions({ fetchdata: "fetchData" })
  },
  created() {
    this.fetchdata();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  background-color: #35383f;
  color: rgb(167, 164, 155);
  font-size: 1.6rem;
}
.dashboard-wrapper {
  width: 80%;
  height: 90%;
  min-width: 850px;
  margin: 2% auto 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
}
.orange {
  background-color: #fb7e46;
}
.blue {
  background-color: #2a92bf;
}
.yellow {
  background-color: #f4ce46;
}
.green {
  background-color: #00b961;
}
</style>
