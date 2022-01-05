import { reactive, computed } from "vue";
import firebase from "../firebase";
import { useCookies } from 'vue3-cookies';

const state = reactive({
  error: "",
  user: {
    id: '',
    email: '',
    displayName: '',
    photoURL: ''
  }
});

const getters = {
  isAuthenticated: computed(() => state.user.email !== '')
};



const actions = {
  async login(username: string, password: string) {
    try {

      const { cookies } = useCookies();

      await firebase.auth.setPersistence(firebase.Auth.Persistence.LOCAL)

      const data = await firebase.auth.signInWithEmailAndPassword(
        username,
        password
      );

      if (data.user !== null && data.user.email != null) {
        state.user.email = data.user.email;
        state.user.id = data.user.uid;
        cookies.set('u', btoa(JSON.stringify(state.user)))        
      }

    } catch (error: any) {
      state.error = error.message;
      console.log(state.error);
    }
  },
  loginGoogle() {
    let provider = firebase.GoogleAuthProvider
     
    firebase.auth.signInWithRedirect(provider)
    .then((firebaseUser) => {
      this.fetchUser(firebaseUser)
    })

  },
  async logout() {
    await firebase.auth.signOut();

    state.user.email = ''
    state.user.id = ''
  },

  fetchUser (user: any) {
    console.log(user)
    state.user.email = user.email
    state.user.id = user.id
    state.user.displayName = user.displayName || ''
    state.user.photoURL = user.photoURL || ''
  }
  
};

export default { state, getters, ...actions };
