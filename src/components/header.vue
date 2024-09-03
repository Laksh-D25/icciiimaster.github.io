<template>
    <Disclosure as="nav" class="bg-white shadow-md sticky top-0 w-full z-40" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6">
        <div class="relative flex h-16 lg:justify-around justify-center">
            <div class="absolute inset-y-0 right-0 flex items-center xl:hidden">
                <!-- Mobile menu button -->
                <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6 h-3 w-3" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
            </div>
            <div class="flex flex-1 items-center xl:justify-between">
                <div class="flex flex-shrink-0 items-center">
                    <a href="https://christuniversity.in"><img class="xl:h-10 lg:h-6 h-8 w-auto mr-7" src="/img/christ.png" alt="CHRIST LOGO" /></a>
                    <a href="https://www.ieee.org"><img class="xl:h-9 lg:h-5 h-7 w-auto" src="/img/ieee.png" alt="IEEE LOGO" /></a>
                </div>
                <div class="hidden sm:ml-6 xl:flex sm:space-x-8">
                    <div v-for="navs in navigation" class="inline-flex items-center justify-center">
                        <a v-if="navs.type == 'link'" :href="navs.href" class="py-1 px-2  rounded-md xl:text-sm text-[0.6rem] font-semibold text-gray-900 inline-flex w-full justify-center"> {{ navs.name }}</a>

                        <Menu as="div" class="relative inline-block" v-else-if="navs.type == 'dropdown'" >
                            <div>
                            <MenuButton class="inline-flex w-full justify-center py-1 px-2  items-center rounded-md bg-white xl:text-sm text-[0.6rem] font-semibold text-gray-900 ">
                                {{ navs.name }}
                                <ChevronDownIcon class="text-gray-900 mt-1 h-4 w-4" aria-hidden="true" />
                            </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div class="py-1">
                                    <MenuItem v-for="child in navs.children"  v-slot="{ active }">
                                        <a :href="child.href" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{ child.name }}</a>
                                    </MenuItem>
                                    </div>
                            </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <DisclosurePanel class="xl:hidden">
        <div class="space-y-1 pb-4 pt-2">
            <div v-for="navs in navigation">
                <DisclosureButton v-if="navs.type == 'link'" as="a" :href="navs.href" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ navs.name }}</DisclosureButton>
                
                <Disclosure v-else-if="navs.type == 'dropdown'" as="div" class="" v-slot="{ open }">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {{ navs.name }}
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel v-for="child in navs.children" class="mt-2 space-y-2">
                    <DisclosureButton class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" as="a" :href="child.href">{{ child.name }}</DisclosureButton>
                </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const christpng = './img/christ.png'
const ieeepng =  './img/ieee.png'

const navigation = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About', href: '/about', type: 'link' },
    { name: 'Committee', href: '/committee', type: 'dropdown', children: [
        { name: 'Advisory Committee', href: '/committee/0', type: 'link' },
        { name: 'Chief Patrons', href: '/committee/1', type: 'link' },
        { name: 'Finance Committee', href: '/committee/2', type: 'link' },
        { name: 'General Chairs', href: '/committee/3', type: 'link' },
        { name: 'Honorary Chairs', href: '/committee/4', type: 'link' },
        { name: 'Logistics And Hospitality', href: '/committee/5', type: 'link' },
        { name: 'Organizing Committee', href: '/committee/6', type: 'link' },
        { name: 'Patrons', href: '/committee/7', type: 'link' },
        { name: 'Publications Committee', href: 'committee/8', type: 'link' },
        { name: 'Publicity Committee', href: '/committee/9', type: 'link' },
        { name: 'Sessions Management', href: '/committee/10', type: 'link' },
        { name: 'Student Branch', href: '/committee/11', type: 'link' },
        { name: 'Student Chapter', href: '/committee/12', type: 'link' },
        { name: 'Student Volunteers', href: '/committee/13', type: 'link' },
        { name: 'Technical Program Committee', href: '/committee/14', type: 'link' },
    ]},
    { name: 'For Authors', href: '/forauthors', type: 'dropdown', children: [
        { name: 'Call for paper', href: '/callforpaper', type: 'link' },
        { name: 'CRC', href: '/crc', type: 'link' },
    ] },
    { name: 'Schedule', href: '/schedule', type: 'link' },
    { name: 'Speakers', href: '/speakers', type: 'link' },
    { name: 'Registration', href: '/registration', type: 'link' },
    { name: 'Workshop', href: '/workshop', type: 'link' },
    { name: 'Contact', href: '/contact', type: 'link' },
]
</script>