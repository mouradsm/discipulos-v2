import { reactive, computed } from "vue";
import firebase from "../firebase";

const state = reactive({
  error: "",
  user: {
    id: '',
    email: ''
  }
});

const getters = {
  isAuthenticated: computed(() => state.user.email !== '')
};

const actions = {
  async login(username: string, password: string) {
    try {
      const data = await firebase.auth.signInWithEmailAndPassword(
        username,
        password
      );
      
      if(data.user !== null) {
        state.user.email = data.user.email;
        state.user.id = data.user.uid;
      }

    } catch (error: any) {
      state.error = error.message;
      console.log(state.error);
    }
  },
};

export default { state, getters, ...actions };
