import Vue from "vue";

const key = "537d03b06a7b001124c6f060cfa65be4";
const token =
  "4f3f85163fa5f1e725d331c970f18a93426d7797e1d8dc0c676f7a73a17cc6d8";
const dashboardId = "5e5e54d33b398b20aad90093";

const state = {
  dashboard: []
};

const getters = {
  getDashboard(state) {
    return state.dashboard;
  }
};
const mutations = {
  SET_DATA(state, data) {
    const newData = data.map(list => {
      let cards = [];
      if (list.cards.length > 0) {
        cards = list.cards.map(card => {
          const newCard = {
            cardId: card.id,
            text: card.name
          };
          return newCard;
        });
      }
      const newList = {
        listId: list.id,
        listName: list.name,
        cards: [...cards]
      };
      return newList;
    });
    state.dashboard = newData;
  },
}
const actions = {
  fetchData: ({ commit }) => {
    Vue.http
      .get(`boards/${dashboardId}/lists?key=${key}&token=${token}&cards=all`)
      .then(data => data.json())
      .then(response => {
        commit("SET_DATA", response);
      })
      .catch(error => {
        console.log(error);
      });
  },
}


export default {
  state,
  getters,
  mutations,
  actions
};
