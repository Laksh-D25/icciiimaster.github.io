<template>
    <!-- <landing /> -->
    <div v-if="active">
        <navbar />
        <div class="z-0">
            <router-view></router-view>
        </div>
        <cust_footer />
    </div>
    <Landing v-if="!active" />
</template>

<script setup>
    import navbar from './components/header.vue'
    import cust_footer from './components/footer.vue'
    import Landing from './views/landing.vue';

    const active = true
    
</script>