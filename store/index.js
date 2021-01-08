import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Polyfill for `window.fetch()`
require('whatwg-fetch')

const store = () =>
    new Vuex.Store({
        state: () => ({
            authUser: null,
        }),

        mutations: {
            SET_USER(state, user) {
                state.authUser = user
            },
        },

        actions: {
            nuxtServerInit({ commit }, { req }) {
                if (req.session && req.session.authUser) {
                    commit('SET_USER', req.session.authUser)
                }
            },
            login({ commit }, { user, pass }) {
                return fetch('http://localhost:3000/auth', {
                    // Send the client cookies to the server
                    credentials: 'same-origin',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: user,
                        password: pass,
                    }),
                })
                    .then((res) => {
                        if (res.status === 401) {
                            return res.json({
                                success: false,
                                message: 'Bad credentials',
                            })
                        } else {
                            return res.json()
                        }
                    })
                    .then((authUser) => {
                        commit('SET_USER', authUser)
                        location.href = '/dashboard'
                    })
            },
            logout({ commit }) {
                return fetch('http://0.0.0.0/auth/destroy', {
                    // Send the client cookies to the server
                    credentials: 'same-origin',
                    method: 'POST',
                }).then(() => {
                    commit('SET_USER', null)
                })
            },
        },
    })

export default store
