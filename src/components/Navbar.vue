<template>
    <div class="w-full absolute top-0 left-0 right-0 z-40 dark:bg-m_black-100">
        <div class="sm:container w-full">
            <!-- Header -->
            <header class="sm:flex hidden lg:flex-row flex-col lg:space-y-0 space-y-4 items-center justify-between py-5">
                <!-- Contact -->
                <div class="flex sm:flex-row flex-col items-center space-x-4">
                    <div class="flex items-center space-x-2">
                        <phone />
                        <a href="tel:+99365801094" class="font-manjari font-normal text-xs text-m_gray-200 dark:text-white">+993 65 80-10-94</a>
                    </div>
                    <div class="flex items-center space-x-2">
                        <mail />
                        <a href="mailto:aygytlygocum@gmail.com" class="font-manjari font-normal text-xs text-m_gray-200 dark:text-white">aygytlygocum@gmail.com</a>
                    </div>
                    <div class="flex items-center space-x-2">
                        <pin />
                        <p class="font-manjari font-normal text-xs text-m_gray-200 dark:text-white">Aşgabat şäheri, Berkararlyk etraby, 2109 (A.Muhammedow) köçe, 80</p>
                    </div>
                </div>
                <div class="flex items-center space-x-6">
                    <!-- Social links -->
                    <div class="flex items-center space-x-2">
                        <div v-for="item in icons" :key="item.id" @mouseenter="hoveredIcon = item.id"
                            @mouseleave="hoveredIcon = null"
                            class="rounded-full cursor-pointer w-[30px] h-[30px] flex flex-col items-center justify-center bg-m_gray-400 dark:bg-black hover:bg-m_blue-100 hover:-mt-1 duration-300">
                            <a :href="item.url">
                                <component :is="item.icon" :color="hoveredIcon === item.id ? '#FFFFFF' : '#B3B3B3'" />
                            </a>
                        </div>
                    </div>
                    <!-- Language -->
                    <div class="flex items-center space-x-2 cursor-pointer select-none relative" @click="toogleLang">
                        <svg class="w-[14px] stroke-[#2A34E9] dark:stroke-white" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.00004 13.4167C10.5438 13.4167 13.4167 10.5438 13.4167 7.00004C13.4167 3.45629 10.5438 0.583374 7.00004 0.583374M7.00004 13.4167C3.45629 13.4167 0.583374 10.5438 0.583374 7.00004C0.583374 3.45629 3.45629 0.583374 7.00004 0.583374M7.00004 13.4167C8.75004 13.4167 9.33337 10.5 9.33337 7.00004C9.33337 3.50004 8.75004 0.583374 7.00004 0.583374M7.00004 13.4167C5.25004 13.4167 4.66671 10.5 4.66671 7.00004C4.66671 3.50004 5.25004 0.583374 7.00004 0.583374M1.16671 9.33337H12.8334M1.16671 4.66671H12.8334"/>
                        </svg>
                        <p class="font-manjari font-normal text-sm text-m_gray-200 dark:text-white pt-1">{{ activeLang }}</p>
                        <svg class="w-[14px] stroke-[#666666] dark:stroke-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6L8 10L12 6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div v-if="isLang"
                            class="absolute -bottom-[120px] z-50 -left-6 px-[16px] py-3 bg-gray-100 text-black">
                            <div v-for="item in languages" :key="item.id" class="flex items-center space-x-2 mb-2"
                                @click="updateLang(item)">
                                <div class="w-[20px]">
                                    <img :src="item.img">
                                </div>
                                <p class="font-manjari font-normal text-sm hover:text-m_blue-100 duration-300">{{ item.title
                                    }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- Navbar -->
            <nav class="flex items-center select-none">
                <div class="flex-1 flex items-center justify-between bg-m_blue-100 pl-4 sm:pt-0 sm:pb-0 pt-8 pb-7">
                    <!-- Logo -->
                    <router-link to="/" class="flex flex-col items-center text-white font-sf_pro cursor-pointer">
                        <h1 class="font-bold text-5xl uppercase">AG</h1>
                        <p class="font-medium text-xs">Aýgytly göçüm</p>
                    </router-link>
                    <!-- Pages -->
                    <div class="sm:flex hidden space-x-10 items-center pt-8 pb-7 px-5">
                        <router-link v-for="item in pages" :key="item.id" :to="item.url"
                            class="font-manjari font-medium lg:text-base text-sm cursor-pointer text-white pb-1 hover_effect"
                            :class="{ 'active_page': $route.path === item.url }">
                            {{ item.name }}
                        </router-link>
                    </div>
                    <!-- Sidebar burger -->
                    <button class="sm:hidden block px-5 cursor-pointer" @click="toggleSidebar">
                        <svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M8 6h8M6 10h12M8 14h8M6 18h12" />
                        </svg>
                    </button>
                </div>
                <router-link to="/contact"
                    class="sm:block hidden font-manjari font-normal lg:text-base text-sm bg-m_blue-400 hover:bg-blue-700 duration-300 text-white py-8 px-10">
                    {{ $t('navbar.title1') }}
                </router-link>
            </nav>
        </div>
    </div>
    <!-- Sidebar -->
    <div class="fixed top-0 left-0 w-full h-full bg-white dark:bg-m_black-100 z-40 transition-all duration-500 ease-in-out"
        :class="{ '-translate-x-full': !isOpen, 'translate-x-0': isOpen }">
        <!-- Sidebar Content -->
        <div v-show="isOpen" class="p-8">
            <!-- Sidebar close -->
            <button class="w-full flex justify-end text-end pb-5" @click="toggleSidebar">
                <svg class="w-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
            </button>
            <!-- Pages -->
            <div class="w-full flex flex-col items-center text-center">
                <router-link v-for="item in pages" :key="item.id" :to="item.url"
                    class="w-full font-sf_pro font-medium lg:text-lg text-base cursor-pointer text-black dark:text-white py-4 border-b border-gray-200 dark:border-gray-500 hover:text-m_blue-100 duration-300"
                    :class="{ 'text-m_blue-100': $route.path === item.url }">
                    {{ item.name }}
                </router-link>
                <router-link to="/contact" :class="{ 'text-m_blue-100': $route.path === '/contact' }"
                    class="w-full font-sf_pro font-medium lg:text-lg text-base cursor-pointer text-black dark:text-white py-4 border-b border-gray-200 dark:border-gray-500 hover:text-m_blue-100 duration-300">
                    {{ $t('navbar.title1') }}
                </router-link>
            </div>
            <div class="w-full py-6">
                <!-- Contact -->
                <div class="flex flex-col items-start space-y-4 py-6">
                    <div class="flex items-center space-x-2">
                        <phone />
                        <a href="tel:+99365801094" class="font-sf_pro font-normal text-xs text-black dark:text-white">+993 65 80-10-94</a>
                    </div>
                    <div class="flex items-center space-x-2">
                        <mail />
                        <a href="mailto:aygytlygocum@gmail.com" class="font-manjari font-normal text-xs text-m_gray-200 dark:text-white">aygytlygocum@gmail.com</a>
                    </div>
                    <div class="flex items-center space-x-2">
                        <pin />
                        <p class="font-sf_pro font-normal text-xs text-black dark:text-white">Aşgabat şäheri, Berkararlyk etraby, 2109 (A.Muhammedow) köçe, 80
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-start space-y-4">
                    <!-- Social links -->
                    <div class="flex items-center space-x-2">
                        <div v-for="item in icons" :key="item.id" @mouseenter="hoveredIcon = item.id"
                            @mouseleave="hoveredIcon = null"
                            class="rounded-full cursor-pointer w-[30px] h-[30px] flex flex-col items-center justify-center bg-m_gray-400 dark:bg-black hover:bg-m_blue-100 hover:-mt-1 duration-300">
                            <a :href="item.url">
                                <component :is="item.icon" :color="hoveredIcon === item.id ? '#FFFFFF' : '#B3B3B3'" />
                            </a>
                        </div>
                    </div>
                    <!-- Language -->
                    <div class="flex items-center space-x-2 cursor-pointer select-none relative" @click="toogleLang">
                        <svg class="w-[14px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.00004 13.4167C10.5438 13.4167 13.4167 10.5438 13.4167 7.00004C13.4167 3.45629 10.5438 0.583374 7.00004 0.583374M7.00004 13.4167C3.45629 13.4167 0.583374 10.5438 0.583374 7.00004C0.583374 3.45629 3.45629 0.583374 7.00004 0.583374M7.00004 13.4167C8.75004 13.4167 9.33337 10.5 9.33337 7.00004C9.33337 3.50004 8.75004 0.583374 7.00004 0.583374M7.00004 13.4167C5.25004 13.4167 4.66671 10.5 4.66671 7.00004C4.66671 3.50004 5.25004 0.583374 7.00004 0.583374M1.16671 9.33337H12.8334M1.16671 4.66671H12.8334"
                                stroke="#2A34E9" />
                        </svg>
                        <p class="font-sf_pro font-normal text-sm text-m_gray-200">{{ activeLang }}</p>
                        <svg class="w-[14px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6L8 10L12 6" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div v-if="isLang"
                            class="absolute -bottom-[130px] -left-8 px-[16px] py-3 bg-gray-100 text-black">
                            <div v-for="item in languages" :key="item.id" class="flex items-center space-x-2 mb-2"
                                @click="updateLang(item)">
                                <div class="w-[20px]">
                                    <img :src="item.img">
                                </div>
                                <p class="font-sf_pro font-normal text-sm hover:text-m_blue-100 duration-300">{{
                        item.title }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { markRaw } from 'vue';
import phone from './icons/phone.vue';
import mail from './icons/mail.vue';
import pin from './icons/pin.vue';
import instagram from './icons/instagram.vue';
import facebook from './icons/facebook.vue';
import youtube from './icons/youtube.vue';
import linkedin from './icons/linkedin.vue';
const nonReactivePhoneIcon = markRaw(phone)
const nonReactiveMailIcon = markRaw(mail)
const nonReactivePinIcon = markRaw(pin)
const nonReactiveInstagramIcon = markRaw(instagram)
const nonReactiveFacebookIcon = markRaw(facebook)
const nonReactiveYoutubeIcon = markRaw(youtube)
const nonReactiveLinkedinIcon = markRaw(linkedin)
import { pages } from '@/data/index'
export default {
    name: "Navbar",
    components: {
        phone,
        mail,
        pin,
        instagram,
        facebook,
        youtube,
        linkedin
    },
    data() {
        return {
            icons: [
                { id: 1, icon: instagram, url: '/' },
                { id: 2, icon: facebook, url: '/' },
                { id: 3, icon: youtube, url: '/' },
                { id: 4, icon: linkedin, url: '/' },
            ],
            languages: [
                { id: 1, name: 'TM', title: 'Turkmen', img: '/imgs/tm.png' },
                { id: 2, name: 'EN', title: 'English', img: '/imgs/en.png', },
                { id: 3, name: 'RU', title: 'Russian', img: '/imgs/ru.png' },
            ],
            activeLang: null,
            pages: null,
            isOpen: false,
            isLang: false,
            hoveredIcon: null,
        }
    },
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
    methods: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        },
        toogleLang() {
            this.isLang = !this.isLang;
        },
        updateLang(lang) {
            localStorage.setItem('lang', lang.name)
            if (lang.title === 'English') this.activeLang = 'English'
            if (lang.title === 'Russian') this.activeLang = 'Russian'
            if (lang.title === 'Turkmen') this.activeLang = 'Turkmen'
            this.$i18n.locale = lang.name
        }
    },
    watch: {
        '$i18n.locale': {
            immediate: true,
            handler() {
                let locale = this.$i18n.locale
                this.pages = pages[locale]
                if (locale === 'EN') this.activeLang = 'English'
                if (locale === 'RU') this.activeLang = 'Russian'
                if (locale === 'TM') this.activeLang = 'Turkmen'
            }
        }
    }
}
</script>