<template>
    <navbar v-if="active"/>
        <div class="z-0" v-if="active">
            <RouterView/>
        </div>
    <cust_footer v-if="active"/>

    <landing v-if="!active" />
</template>

<script setup>
    import navbar from './components/header.vue'
    import cust_footer from './components/footer.vue'
    import landing from './views/landing.vue';

    const active = true
</script>