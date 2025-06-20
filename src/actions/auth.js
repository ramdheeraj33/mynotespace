import { firebase, googleAuthProvider } from "../firebase/firebase";

// Action: login with UID
export const login = (uid) => {
  return {
    type: "LOGIN",
    uid: uid,
  };
};

// Thunk: start Google login
export const startLogin = () => {
  return (dispatch) => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        if (user) {
          dispatch(login(user.uid));
        }
      })
      .catch((error) => {
        console.error("Google Sign-in failed:", error.message);
      });
  };
};

// Action: set logging-in state
export const setLoggingIn = (truth) => {
  return {
    type: "SET_LOGGING_IN",
    truth: truth,
  };
};

// Action: logout
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

// Thunk: start logout
export const startLogout = () => {
  return (dispatch) => {
    return firebase
      .auth()
      .signOut()
      .catch((error) => {
        console.error("Sign-out error:", error.message);
      });
  };
};
