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
                        console.log(authUser)
                        if (authUser._id) {
                            commit('SET_USER', authUser)
                            this.$router.push('/dashboard')
                        } else this.$router.push(`/login?e=${authUser.error}`)
                    })
            },
            logout({ commit }) {
                return fetch('http://localhost:3000/auth/destroy', {
                    // Send the client cookies to the server
                    credentials: 'same-origin',
                    method: 'POST',
                }).then(() => {
                    commit('SET_USER', null)
                    this.$router.push('/login')
                })
            },
        },
    })

export default store
