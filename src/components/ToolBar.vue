<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <section>
        <span>
            <RouterLink to="/">LOGO</RouterLink>
        </span>
        <span>
            <!-- `<router-link>`는 `href` 속성이 있는 `<a>` 태그로 렌더링됨. -->
            <RouterLink to="/intro">교회소개</RouterLink>
        </span>
        <span>
            <RouterLink to="/worship">예배찬양</RouterLink>
        </span>
        <span>
            <RouterLink to="/info">교회소식</RouterLink>
        </span>
        <span>
            <RouterLink to="/support">지원</RouterLink>
        </span>
    </section>
    <!-- RouterView : routes안의 url에 해당하는 컴포넌트들이 표현되는 '태그' -->
    <!-- 각 url 에 해당되는 내용이 표시됨 -->
    <!-- <RouterView /> -->
</template>