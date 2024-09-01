<template>
    <div class="absolute grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-2 text-white w-full h-100" style="z-index: 1000;">
        <div class="flex px-3 items-center lg:justify-end justify-center lg:mt-2 h-full lg:row-span-2 row-span-1">
            <img :src="logo" alt="CONFERENCE LOGO" class="hidden lg:block" />
            <img :src="logo" alt="CONFERENCE LOGO" class="h-25 w-20 block lg:hidden mt-2" />
        </div>
        <div class="flex-cols text-justify px-3 items-center lg:text-2xl text-xs font-bold lg:col-span-2 col-span-1 row-span-1 mt-[25%]">
            <p class="items-center w-full justify-center hidden lg:flex">
                International Conference on Computational Innovations, Intelligence, Information Management, Analytics, Sustainable Technologies, Engineering and Research - 
            </p>
            <br>
            <p class="items-center w-full text-center -mt-10 lg:mt-0">ICCIII MASTER 2025</p>
        </div>
    </div>
    <div class="relative mb-5 w-full -z-100 bg-black/30">
        <video loop autoplay muted class="w-full flex -z-100">
            <source :src="video" type="video/mp4">
        </video>
    </div>
    
    <div class="mb-10 relative">
        <h1 class="text-center font-bold text-4xl p-4">Road To ICCII-IMAST</h1>
        <!-- <div class="absolute z-1500 bg-black/60 rounded-md text-white backdrop-blur-sm w-full h-full flex justify-center items-center font-bold text-xl" style="z-index: 10;">
            COMING SOON!
        </div> -->
        <div class="lg:card lg:flex lg:flex-column lg:gap-3 lg:px-20 lg:my-5 lg:mb-20 hidden">
            <Timeline :value="events" layout="horizontal" align="top">
                <template #marker="slotProps">
                    <span class="flex items-center justify-center text-white rounded-full p-1 border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.done ? green : orange}">
                        <i v-if="slotProps.item.done" class="pi pi-check"></i>
                        <i v-else class="pi pi-clock"></i>
                    </span>
                </template>
                <template #content="slotProps" class="text-xs">
                    {{ slotProps.item.status }}
                </template>
                <template #opposite="slotProps">
                    <small class="p-text-secondary">{{slotProps.item.date}}</small>
                </template>
            </Timeline>
        </div>
        <div class="card flex flex-column gap-3 px-1 my-5 mb-20 lg:hidden">
            <Timeline :value="events" align="top">
                <template #marker="slotProps">
                    <span class="flex items-center justify-center text-white rounded-full p-1 border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.done ? green : orange}">
                        <i v-if="slotProps.item.done" class="pi pi-check"></i>
                        <i v-else class="pi pi-clock"></i>
                    </span>
                </template>
                <template #content="slotProps" class="text-xs">
                    {{ slotProps.item.status }}
                </template>
                <template #opposite="slotProps">
                    <small class="p-text-secondary">{{slotProps.item.date}}</small>
                </template>
            </Timeline>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Timeline from 'primevue/timeline';

const events = ref([
    { status: 'Pre-Conference Workshop - Day 1', date: '11/09/2025', done: true},
    { status: 'Pre-Conference Workshop - Day 2', date: '12/09/2025', done: false },
    { status: 'Conference - Day 1', date: '12/09/2025', done: false },
    { status: 'Conference', date: '13/09/2025', done: false }
]);
const video = './img/ieeevid.mp4'
const logo = './img/logo.png'

const green = "#008000"
const orange = "#FFA500"
</script>