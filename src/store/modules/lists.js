const state = {
 lists: [
    {
        name: 'onHold',
        title: "ON-HOLD",
        id:'5e5e581a2b907c76e6e5ecb2',
        bg: "orange",
    },
    {
        name: 'inPorgress',
        title: "IN-PROGRESS",
        id:'5e5e58baa102870f29ec9fe0',
        bg: "blue",
    },
    {
        name: 'needsReview',
        title: "NEEDS-REVIEW",
        id:'5e5e58f25bd2035d57dff155',
        bg: "yellow",
    },
    {
        name: 'approved',
        title: "APPROVED",
        id:'5e5e590a79ed5177af6ce154',
        bg: "green",
    },
]
};

const getters = {
  listInfo: state => param => state.lists.find(list =>list.name === param)
};


export default {
  state,
  getters,
};
