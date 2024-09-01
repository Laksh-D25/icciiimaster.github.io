<template>
    <div class="absolute grid xl:grid-cols-3 xl:grid-rows-1 grid-cols-1 grid-rows-2 text-white w-full h-100 xl:mt-[5%] lg:mt-[10%] md:mt-[10%]" style="z-index: 1000;">
        <div class="flex px-3 items-center justify-center h-full row-span-1">
            <img :src="logo" alt="CONFERENCE LOGO" class="hidden xl:block" />
            <img :src="logo" alt="CONFERENCE LOGO" class="h-30 w-30 block xl:hidden" style="@media screen and (max-width: 1020px) {
                height: 255px; width: 250px;
                
            }
            @media screen and (max-width: 640px) {
                height: 100px; width: 100px;
                
            }" />
        </div>
        <div class="flex-cols text-justify px-3 items-center xl:text-2xl text-xs font-bold xl:col-span-2 col-span-1 row-span-1 xl:mt-[25%]">
            <p class="items-center w-full justify-center hidden xl:flex">
                International Conference on Computational Innovations, Intelligence, Information Management, Analytics, Sustainable Technologies, Engineering and Research - 
            </p>
            <br>
            <p class="items-start w-full text-center text-lg -mt-30 xl:mt-0">ICCIII MASTER 2025</p>
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

    <div class="w-full pb-5">
        <h1 class="text-4xl text-center font-bold p-4">About The Conference</h1>
        <p class="text-justified p-4 xl:px-20 px-10">
            The International Conference on Computational Innovations, Intelligence, Information Management, 
            Analytics, Sustainable Technologies, Engineering and Research (ICCIII MASTER) is an interdisciplinary 
            conference that focuses on advancements and innovations in computational technologies, intelligence systems, 
            information management, analytics, and sustainable technologies. The conference provides a platform for researchers, 
            academicians, industry professionals, and practitioners to present their latest research findings, exchange ideas, and 
            discuss challenges and opportunities in these areas. <a href="/about" class="text-blue-700">More Details...</a>
        </p>
        
    </div>

    <div class="grid xl:grid-cols-3 xl:grid-rows-1 grid-rows-3 grid-cols-1 w-full gap-3 mb-5 xl:px-20 px-10">
        <div class="w-full rounded-md shadow-lg p-4 border-2 border-gray-300 hover:shadow-xl hover:border-gray-400">
            <h1 class="text-lg font-bold">Our Theme</h1>
            <p class="text-justify">Sustainable Computing Horizons: <br>Bridging Intelligence, Innovations, and Analytics for Global Future</p>
        </div>
        <div class="w-full rounded-md shadow-lg p-4 border-2 border-gray-300 hover:shadow-xl hover:border-gray-400">
            <h1 class="text-lg font-bold">Conference Type</h1>
            <p class="text-justify">International with Scopus Indexing</p>
        </div>
        <div class="w-full rounded-md shadow-lg p-4 border-2 border-gray-300 hover:shadow-xl hover:border-gray-400">
            <h1 class="text-lg font-bold">Target Participats</h1>
            <p class="text-justify">Academia, Industry, Research Communities</p>
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