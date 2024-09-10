<template>
    <!-- <landing /> -->
    <navbar />
        <div class="z-0">
            <RouterView />
        </div>
    <cust_footer />
    <!-- <div v-if="active">
        
    </div>
    <Landing v-if="!active" /> -->
</template>

<script setup>
    import navbar from './components/header.vue'
    import cust_footer from './components/footer.vue'
    import Landing from './views/landing.vue';
    import { RouterView } from 'vue-router';

    const active = true
    
</script>