export default{
    namespaced:true,
    state:{
    AuthenticationType:"",
    isLoggedIn:false
    },
    mutations:
    {
        absherAuthenticate(state)
        {
            state.AuthenticationType="Absher";
        },
        biometricAuthenticate(state)
        {
            state.AuthenticationType="biometric";
        },
        login(state) {
        state.isLoggedIn=true;
        },
        logout(state) {
            state.isLoggedIn=false;
        }
    },
    actions:
    {
        absherAuthenticate(context:any)
        {
            context.commit("absherAuthenticate");
        },
        biometricAuthenticate(context:any)
        {
            context.commit("biometricAuthenticate");
        },
        login(context:any) {
            context.commit('login');
            },
        logout(context:any) {
            context.commit('logout');
            }
    },
    getters:
    {
        isAuthenticated(state:any)
        {
            return state.isLoggedIn;
        },
        getAuthenticationType(state:any)
        {
            return state.AuthenticationType;
        }
    },
}