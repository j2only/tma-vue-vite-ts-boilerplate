<template>
    <div>
        <div>
            <a href="https://ton.org/dev" target="_blank">
                <img src="/tapps.png" class="logo" alt="TWA logo" />
            </a>
            <a href="https://vuejs.org" target="_blank">
                <img src="/vue.svg" class="logo" alt="Vue logo" />
            </a>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
        </div>
        <h1>TMA + Vue + Vite</h1>
        <div class="card">
            <button @click="incrementCount">
                count is {{ count }}
            </button>
        </div>
        <div class="card">
            <button @click="showAlert">
                Show Alert
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import WebApp from '@twa-dev/sdk'
import { ref } from "vue"

const count = ref(0)
WebApp.expand()

function incrementCount() {
    count.value++
}

function showAlert() {
    WebApp.showAlert(`Hello World! Current count is ${count.value}`)
}
</script>
