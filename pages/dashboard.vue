<template>
    <div>
        <h1>This website should only be accessible if you are logged in</h1>
        <h3>Your session data:</h3>
        <pre>{{ session }}</pre>
        <button
            class="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white transition duration-300 font-semibold rounded-lg py-1 px-8"
            @click="logout"
        >
            Log Out
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            session: this.$store.state.authUser,
        }
    },
    fetch({ store, redirect }) {
        if (!store.state.authUser) return redirect('/login')
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        },
    },
}
</script>
