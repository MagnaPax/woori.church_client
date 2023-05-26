<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import Toolbar from './components/Toolbar.vue';
</script>

<template>
    <Toolbar />
    <!-- RouterView : routes안의 url에 해당하는 컴포넌트들이 표현되는 '태그' -->
    <RouterView />
    <Footer />
</template>
