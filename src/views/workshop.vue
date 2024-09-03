<template>
    <div class="bg-white mb-5">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="relative isolate overflow-hidden bg-white px-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pb-24">
                <div class="flex w-full justify-center items-center">
                    <img :src="logo" alt="CONFERENCE LOGO" class="" />
                </div>
                <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">ICCIII MASTER 2025.</h2>
                <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-700">Coming Soon!</p>
                <form class="mx-auto mt-10 flex max-w-md gap-x-4"  action="https://script.google.com/macros/s/AKfycbwADEV5aGXzrfzgaK2HtOxpur2LvMtSjyA4LQoHtvlAp1-0hajSqSXWlTfiwaRMBowr/exec" method="post" @submit.prevent="postContactUs($event)">
                    <label for="email-address" class="sr-only">Email address</label>
                    <input id="email-address" name="Email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" placeholder="Enter your email" />
                    <button type="submit" class="flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">Get Updates!</button>
                </form>
                <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                    <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                        <stop stop-color="cyan" />
                        <stop offset="1" stop-color="blue" stop-opacity="0" />
                    </radialGradient>
                    </defs>
                </svg>
                </div>
        </div>
    </div>
</template>

<script setup>

</script>