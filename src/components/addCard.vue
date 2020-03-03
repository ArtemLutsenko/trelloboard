<template>
  <div class="new-card">
    <div class="textarea-container">
      <textarea
        name="newCard"
        id=""
        rows="5"
        placeholder="Ввести заколовок для этой карточки"
        v-model="newCardText"
      ></textarea>
    </div>

    <div class="buttons">
      <div @click="addNewCard" class="addcard-btn">Добавить карточку</div>
      <div @click="addCardToggle" class="cancel-btn">&#215;</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  props: ["listId"],
  data() {
    return {
      newCardText: ""
    };
  },
  methods: {
    addCardToggle() {
      this.$emit("addCardToggle");
    },
    addNewCard() {
      this.$http
      .post(`cards?idList=${this.listId}&key=${this.key}&token=${this.token}&name=${this.newCardText}`)
      .then(data => data.json())
      .then(()=> {
          this.$store.dispatch("fetchData")
      })
      .catch();
      this.addCardToggle()
    }
  },
  computed:{
      ...mapGetters({key: "getApiKey", token: "getApiToken", })
  }
};
</script>

<style lang="scss">
.new-card {
  width: 100%;
  margin: 15px 0;

  .textarea-container {
    width: 100%;

    textarea {
      resize: none;
      width: 100%;
      background-color: rgb(92, 97, 110);
      color: rgb(167, 164, 155);
      font-size: 1.6rem;
      border: none;
    }
    textarea::placeholder {
      color: rgb(167, 164, 155);
      padding-left: 10px;
    }
  }
  .addcard-btn {
    padding: 5px 20px;
    background-color: rgb(75, 76, 78);
    border: none;
    font-size: 14px;
    cursor: pointer;
  }
  .addcard-btn:hover {
    background-color: rgb(57, 58, 59);
  }
  .cancel-btn {
    background-color: inherit;
    margin-left: 10px;
    font-size: 3.6rem;
    padding-top: 0;
    line-height: 25px;
    cursor: pointer;
  }
}

.buttons {
  display: flex;
}
</style>
