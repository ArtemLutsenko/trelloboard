<template>
  <div class="list">
    <div :class="listInfo.bg" class="title">
      {{ listInfo.title }} ({{ count }})
    </div>
    <div class="card-wrapper" @change="changeList">
      <draggable
        group="cards"
        :id="list.listId"
        @start="dragging = true"
        @end="dragging = false"
      >
        <app-card
          v-for="card in list.cards"
          :key="card.id"
          :card="card"
          :listId="list.listId"
        ></app-card>
      </draggable>
      <div v-if="!addCard" @click="addCardToggle" class="addcard">
        + Add cards
      </div>
      <app-add-card
        v-if="addCard"
        @addCardToggle="addCardToggle"
        :listId="list.listId"
      ></app-add-card>
    </div>
  </div>
</template>

<script>
import appCard from "./Card";
import appAddCard from "./addCard";
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
import {mapActions} from "vuex"

export default {
  props: ["list"],
  components: {
    appCard,
    appAddCard,
    draggable
  },
  data() {
    return {
      addCard: false,
      count: this.list.cards.length
    };
  },
  computed: {
    ...mapGetters({ key: "getApiKey", token: "getApiToken" }),
    listInfo() {
      return this.$store.getters.listInfo(this.list.listName);
    }
  },
  methods: {
      ...mapActions({ changeCardPosition: "changeCardPosition" }),
    addCardToggle() {
      this.addCard = !this.addCard;
    },
    changeList(evt) {
      if (evt.item) {
        let listId = evt.to.id;
        let cardId = evt.item.id;
        this.$http
          .put(
            `cards/${cardId}/idList?value=${listId}&key=${this.key}&token=${this.token}`
          )
          .catch(error => {
            console.log(error);
          });  
   
      }
    }
  }
};
</script>

<style lang="scss">
.list {
  background-color: #2b2d33;
  width: 20%;
  min-width: 200px;

  .title {
    font-size: 1.7rem;
    font-weight: 700;
    padding: 5% 0 5% 5%;
    color: rgb(245, 241, 219);
  }

  .card-wrapper {
    width: 93%;
    margin: 10px auto 0;
  }

  .addcard {
    margin: 5px 0 10px;
    padding: 5px;
    cursor: pointer;
  }

  .addcard:hover {
    background-color: #212225;
  }
}
</style>
