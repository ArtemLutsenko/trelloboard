<template>
  <div class="card" :id="card.cardId" :title="card.cardId">
      <p class="card-id"><b>id:</b>{{card.cardId}} </p>
      <p>{{card.text}}</p>
      <p class="card-del" @click="deleteCard">&#215;</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
props:["card", "listId"],
methods:{
    deleteCard(){
        this.$http.delete(`cards/${this.card.cardId}?key=${this.key}&token=${this.token}`)
        .then(() =>{
            this.$store.dispatch("fetchData")
        })
        .catch(error =>{
            console.log(error);
        })
    }
},
  computed:{
      ...mapGetters({key: "getApiKey", token: "getApiToken", })
  }
}
</script>

<style lang="scss">
.card{
    background-color: black;
    width: 100%;
    padding-left: 15px;
    padding-right: 20px;
    margin-top: 10px;
    position: relative;

    .card-id{
        word-wrap: normal;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .card-del{
        position: absolute;
        top: -10px;
        right: 3px;
        font-size: 24px;
        cursor: pointer;
    }
}
</style>
