<template>
    <footer class="bg-blue-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-16">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <div class = "grid sm:justify-items-center justify-items-center xs:justify-items-center md:justify-items-center lg:justify-items-center xl:justify-items-start 2xl:justify-items-start ">
              <div><img class="h-16" :src="christpng" alt="Company name"/></div>
            </div>
            <p class="text-sm leading-6 text-gray-300 text-center xl:text-justify">
              ICCIII MASTER is a conference focused on innovations in computational technologies, intelligence systems, and sustainable technologies. It brings together experts to share research and collaborate.</p>
            <div class="flex space-x-6 justify-center 2xl:justify-start xl:justify-start lg:justify-center  md:justify-center sm:justify-center"> 
              <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">{{ item.name }}</span>
                <img :src ="item.link" class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-1 md:gap-8 justify-items-center text-left">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Useful Links</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.company" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-1 md:gap-8 md:gap-8 justify-items-center text-left">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li class="text-sm leading-6 text-gray-300">
                    <div class="pi pi-map-marker pr-2"></div>Bangalore Yeshwanthpur Campus, Nagasandra, Near Tumkur Road, Bangalore, Karnataka-560073
                  </li>
                  <li class="text-sm leading-6 text-gray-300">
                    <div class="pi pi-envelope pr-2"></div><a href="ieee.yeshwanthpur@christuniversity.in" class="hover:text-white">ieee.yeshwanthpur@christuniversity.in</a>
                  </li>
                  <li class="text-sm leading-6 text-gray-300">
                    <div class="pi pi-mobile pr-2"></div>080 6989 6666
                  </li>
                  <li class="text-sm leading-6 text-gray-300">
                    <div class="pi pi-phone pr-2"></div>+91 9445245689
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-12">
          <p class="text-xs leading-5 text-gray-400">&copy; 2025 CHRIST (Deemed to be University). All Rights Reserved. | Designed and Developed by Cris Grace, Laksh D, Aishwarya Saraf, Prakash Suthar and Bhowmik Tyagi.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { defineComponent, h } from 'vue'
  const christpng = './img/christWhite.webp'
  
  const navigation = {
    company: [
      { name: 'IEEE', href: 'https://www.ieee.org/' },
      { name: 'CHRIST(Deemed To Be University)', href: 'https://christuniversity.in/' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Site Credit', href: '#' },
    ],
    social: [
      {
        name: 'Linkedin',
        href: '#',
        link: './img/linkedin.svg',
      },
      {
        name: 'Facebook',
        href: '#',
        link: './img/facebook.svg',
      },
      {
        name: 'WhatsApp',
        href: '#',
        link: './img/whatsapp.svg',
      }
    ],
  }
  </script>