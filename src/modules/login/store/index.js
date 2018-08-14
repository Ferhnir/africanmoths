  /* eslint-disable promise/param-names */
  import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from './actions.js'
  import axios from 'axios'
  
  const state = { 
    token: localStorage.getItem('user-token') || '',
    status: '',
    hasLoadedOnce: false 
  }
  
  const getters = {
    isAuthenticated: state => {
      return !!state.token
    },
    authStatus: state => {
      return state.status
    },
  }
  
  const actions = {
    [AUTH_REQUEST]: ({commit, dispatch}, user) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST);
        axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        axios({
            url: 'http://africanmoths.com/api/auth', 
            data: {
              user: user.username,
              password: user.password
            }, 
            method: 'POST' 
        }).then(resp => {
          axios.defaults.headers.common["X-Authorization"] = resp.data.token;
          localStorage.setItem('user-token', resp.data.token);
          commit(AUTH_SUCCESS, resp.data.token);
          resolve(resp);
        }).catch(err => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem('user-token');
          reject(err);
        });
      });
    },
    [AUTH_LOGOUT]: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_LOGOUT);
        localStorage.removeItem('user-token');
        resolve();
      })
    }
  }
  
  const mutations = {
    [AUTH_REQUEST]: (state) => {
      state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, resp) => {
      state.status = 'success'
      state.token = resp
      state.hasLoadedOnce = true
    },
    [AUTH_ERROR]: (state) => {
      state.status = 'error'
      state.hasLoadedOnce = true
    },
    [AUTH_LOGOUT]: (state) => {
      state.token = ''
    }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations,
  }