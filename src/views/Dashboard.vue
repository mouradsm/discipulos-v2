<template>
    <h1>Olá Mundo!</h1>

    <button @click="login">Login</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import authStore from '../store/auth'

export default defineComponent({
    name: 'Dashboard',
    setup() {

        const login = () => {
            authStore.login('diegodaerica@gmail.com', '12345678')
        }

        return { login }
    }

})

</script>

<style>
</style>