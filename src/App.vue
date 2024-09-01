<template>
    <navbar/>
        <RouterView />
    <cust_footer class=""/>
</template>

<script setup>
    import navbar from './components/header.vue'
    import cust_footer from './components/footer.vue'
</script>