const state ={
    key: "537d03b06a7b001124c6f060cfa65be4",
    token: "4f3f85163fa5f1e725d331c970f18a93426d7797e1d8dc0c676f7a73a17cc6d8",
    dashboardId: "5e5e54d33b398b20aad90093"
}

const getters ={
    getApiKey: state => state.key,
    getApiToken: state => state.token,
    getDashboardId: state => state.dashboardId
}

export default {
    state,
    getters
}