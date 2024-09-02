<template>
    <navbar/>
        <div class="z-0">
            <RouterView/>
        </div>
    <cust_footer/>
</template>

<script setup>
    import navbar from './components/header.vue'
    import cust_footer from './components/footer.vue'
</script>