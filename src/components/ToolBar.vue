<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <!-- `<router-link>`는 `href` 속성이 있는 `<a>` 태그로 렌더링됨. -->
            <RouterLink to="/">LOGO</RouterLink>
            <RouterLink to="/intro">교회소개</RouterLink>
            <RouterLink to="/worship">예배찬양</RouterLink>
            <RouterLink to="/info">교회소식</RouterLink>
            <RouterLink to="/support">지원</RouterLink>
        </nav>
    </header>
</template>