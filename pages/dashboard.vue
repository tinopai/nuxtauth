<template>
    <div>
        <h1>This website should only be accessible if you are logged in</h1>
        <h3>Your session data:</h3>
        <pre>{{ session }}</pre>
    </div>
</template>

<script>
export default {
    fetch({ store, redirect }) {
        if (!store.state.authUser) return redirect('/login')
    },
    data() {
        return {
            session: this.$store.state.authUser,
        }
    },
}
</script>
