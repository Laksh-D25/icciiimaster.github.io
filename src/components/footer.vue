<template>
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-16">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <div class = "grid sm:justify-items-center justify-items-center xs:justify-items-center md:justify-items-center lg:justify-items-center xl:justify-items-start 2xl:justify-items-start ">
              <div><img class="h-7" :src="pomlogopath" alt="Company name"/></div>
            </div>
            <p class="text-sm leading-6 text-gray-300 text-center sm:text-center md:text-center lg:text-center xl:text-left 2xl:text-left">abc</p>
            <div class="flex space-x-6 justify-center 2xl:justify-start xl:justify-start lg:justify-center  md:justify-center sm:justify-center"> 
              <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">{{ item.name }}</span>
                <img :src ="item.link" class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-1 md:gap-8 justify-items-center text-center">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.company" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-1 md:gap-8 md:gap-8 justify-items-center text-center">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.legal" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-12">
          <p class="text-xs leading-5 text-gray-400">&copy; 2024 POM Power, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { defineComponent, h } from 'vue'
  const pomlogopath = "/assets/images/pom.png";
  
  const navigation = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Career', href: '#' },
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
        link: '/assets/images/linkedin.svg',
      },
      {
        name: 'Facebook',
        href: '#',
        link: '/assets/images/facebook.svg',
      },
      {
        name: 'WhatsApp',
        href: '#',
        link: '/assets/images/whatsapp.svg',
      }
    ],
  }
  </script>