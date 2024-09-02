<template>
    <h1 class="text-3xl sm:text-5xl text-center font-bold my-10">
           Contact Us
    </h1>
    <div class="grid xl:grid-cols-2 grid-rows-2 xl:grid-rows-none m-5">
        <div class="xl:mx-5">
          <div class="bg-white p-4 shadow-md rounded-lg w-full h-[350px]" v-if="!loading">
                        <form action="https://script.google.com/macros/s/AKfycbwADEV5aGXzrfzgaK2HtOxpur2LvMtSjyA4LQoHtvlAp1-0hajSqSXWlTfiwaRMBowr/exec" method="post" @submit.prevent="postContactUs($event)">
                            <div class="mb-4">
                                <label for="name" class="block text-gray-700">Name:</label>
                                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="Name" placeholder="Enter your Name" name="Name">
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-gray-700">Email:</label>
                                <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="Email" placeholder="Enter email" name="Email">
                            </div>
                            <div class="mb-4">
                                <label for="message" class="block text-gray-700">Your Message:</label>
                                <textarea class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="Message" placeholder="Your Message Here" name="Message"></textarea>
                            </div>
                            <div class="text-center mt-5">
                                <button type="submit" class="flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div v-else class="bg-white p-4 shadow-md rounded-lg w-full h-[350px] flex justify-center items-center">
                        <ProgressSpinner></ProgressSpinner>
                    </div>
        </div>
        
        <div class="xl:mr-5">
            <div class="mb-5 justify-self-end">
                    <div class="w-full">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6063.307369311151!2d77.5028504419395!3d13.03598739008661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0a40ad5761%3A0xe5a58bef32d6e1b7!2sChrist%20University%20Yeshwanthpur%20Campus!5e1!3m2!1sen!2sin!4v1713459978814!5m2!1sen!2sin" 
                            allowfullscreen 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade" 
                            class="w-full h-[350px] rounded-lg ">
                        </iframe>
                    </div>
                </div>
        </div>
        
    </div>
<Toast/>
</template>

<script setup>
import axios from 'axios'
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import ProgressSpinner from 'primevue/progressspinner';
import { ref } from 'vue';

const loading = ref(false)

const toast = useToast();

function postContactUs(e){
    loading.value = true
    const formData = new FormData(e.target)

    axios.post("https://script.google.com/macros/s/AKfycbwADEV5aGXzrfzgaK2HtOxpur2LvMtSjyA4LQoHtvlAp1-0hajSqSXWlTfiwaRMBowr/exec", formData).then(res => {
        if (res.data.result == "success")
            toast.add({ severity: 'success', summary: 'Success', detail: 'We Will Get Back To You Shortly', life: 3000 });
            e.target.reset();
        }).catch(err => {
            console.log(err)
            toast.add({ severity: 'error', summary: 'Error', detail: 'Please Try Again Later', life: 3000 });
        }).finally(() => {
            loading.value = false
        })
    }
</script>