<template>
    <div class="w-full relative">
        <Navbar />
        <!-- About us header -->
        <div class="w-full h-[600px] relative sm:top-[120px] top-[100px]">
            <div class="w-full h-full absolute left-0 right-0 -z-10">
                <img class="w-full h-full object-cover filter brightness-50" src="@/assets/imgs/about-page.webp">
            </div>
            <div class="flex flex-col space-y-6 pt-40 container">
                <h1 class="font-poppins font-bold xl:text-5xl lg:text-4xl text-3xl text-white">{{ $t('home.title2') }}
                </h1>
                <div class="flex items-center space-x-2 font-manjari text-white lg:text-lg text-base">
                    <router-link to="/">{{ $t('about.title1') }}</router-link>
                    <span>/</span>
                    <router-link to="/about">{{ $t('home.title2') }}</router-link>
                </div>
            </div>
        </div>
        <div class="w-full h-full">
            <!-- About us -->
            <div class="bg-white dark:bg-m_black-100">
                <div
                    class="container flex lg:flex-row flex-col lg:space-y-0 space-y-6 items-center lg:space-x-10 space-x-0 lg:py-20 py-10">
                    <div class="lg:w-[500px] w-full lg:h-[600px] h-full select-none">
                        <img class="w-full h-full object-cover rounded-lg" src="@/assets/imgs/service-page.webp">
                    </div>
                    <div class="lg:flex-1 w-full flex flex-col space-y-4">
                        <h3
                            class="font-poppins font-semibold uppercase lg:text-base text-sm text-m_blue-100 border-b-2 border-m_blue-100 w-fit">
                            {{ $t('home.title2') }}</h3>
                        <h1 class="font-poppins font-bold lg:text-3xl text-2xl pb-3 dark:text-white">{{
                    $t('home.title3') }}</h1>
                        <p class="font-manjari font-normal lg:text-base text-sm text-m_gray-300">
                            {{ $t('home.title4') }}
                        </p>
                        <div class="flex flex-col space-y-4">
                            <div class="p-6 flex items-start space-x-4 border"
                                style="border-color: rgba(0, 0, 0, 0.06);">
                                <div class="w-[70px] pt-1">
                                    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.33337 0.333374C12.7518 0.333374 16.3334 3.91497 16.3334 8.33337C16.3334 12.7518 12.7518 16.3334 8.33337 16.3334C3.91497 16.3334 0.333374 12.7518 0.333374 8.33337C0.333374 3.91497 3.91497 0.333374 8.33337 0.333374ZM10.9094 5.90937L7.33337 9.48537L5.75737 7.90937C5.64363 7.80339 5.4932 7.74569 5.33776 7.74843C5.18232 7.75118 5.03401 7.81415 4.92408 7.92408C4.81415 8.03401 4.75118 8.18232 4.74843 8.33776C4.74569 8.4932 4.80339 8.64363 4.90937 8.75737L6.90937 10.7574C7.02187 10.8697 7.17437 10.9328 7.33337 10.9328C7.49237 10.9328 7.64487 10.8697 7.75737 10.7574L11.7574 6.75737C11.8163 6.70244 11.8636 6.6362 11.8964 6.5626C11.9292 6.48901 11.9468 6.40955 11.9482 6.32899C11.9497 6.24843 11.9348 6.16841 11.9047 6.0937C11.8745 6.01899 11.8296 5.95112 11.7726 5.89414C11.7156 5.83717 11.6478 5.79225 11.5731 5.76208C11.4983 5.7319 11.4183 5.71708 11.3378 5.7185C11.2572 5.71992 11.1777 5.73756 11.1041 5.77035C11.0305 5.80314 10.9643 5.85042 10.9094 5.90937Z"
                                            fill="#2A34E9" />
                                    </svg>
                                </div>
                                <div class="flex flex-col space-y-4">
                                    <h3 class="font-poppins font-bold lg:text-lg text-base dark:text-white">
                                        {{ $t('home.title5') }}</h3>
                                    <p class="font-manjari font-normal lg:text-base text-sm text-m_gray-300">
                                        {{ $t('home.title6') }}
                                    </p>
                                </div>
                            </div>
                            <div class="p-6 flex items-start space-x-4 border"
                                style="border-color: rgba(0, 0, 0, 0.06);">
                                <div class="w-[70px] pt-1">
                                    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.33337 0.333374C12.7518 0.333374 16.3334 3.91497 16.3334 8.33337C16.3334 12.7518 12.7518 16.3334 8.33337 16.3334C3.91497 16.3334 0.333374 12.7518 0.333374 8.33337C0.333374 3.91497 3.91497 0.333374 8.33337 0.333374ZM10.9094 5.90937L7.33337 9.48537L5.75737 7.90937C5.64363 7.80339 5.4932 7.74569 5.33776 7.74843C5.18232 7.75118 5.03401 7.81415 4.92408 7.92408C4.81415 8.03401 4.75118 8.18232 4.74843 8.33776C4.74569 8.4932 4.80339 8.64363 4.90937 8.75737L6.90937 10.7574C7.02187 10.8697 7.17437 10.9328 7.33337 10.9328C7.49237 10.9328 7.64487 10.8697 7.75737 10.7574L11.7574 6.75737C11.8163 6.70244 11.8636 6.6362 11.8964 6.5626C11.9292 6.48901 11.9468 6.40955 11.9482 6.32899C11.9497 6.24843 11.9348 6.16841 11.9047 6.0937C11.8745 6.01899 11.8296 5.95112 11.7726 5.89414C11.7156 5.83717 11.6478 5.79225 11.5731 5.76208C11.4983 5.7319 11.4183 5.71708 11.3378 5.7185C11.2572 5.71992 11.1777 5.73756 11.1041 5.77035C11.0305 5.80314 10.9643 5.85042 10.9094 5.90937Z"
                                            fill="#2A34E9" />
                                    </svg>
                                </div>
                                <div class="flex flex-col space-y-4">
                                    <h3 class="font-poppins font-bold lg:text-lg text-base dark:text-white">
                                        {{ $t('home.title7') }}</h3>
                                    <p class="font-manjari font-normal lg:text-base text-sm text-m_gray-300">
                                        {{ $t('home.title8') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- What We Do -->
            <div class="bg-gray-100 dark:bg-[#1E1E1E]">
                <div class="min-h-screen text-black-100 dark:text-gray-100 pt-20 pb-10 container">
                    <!-- Content -->
                    <h1 class="text-3xl font-bold mb-6 text-center">
                        {{ $t('home.title37') }}
                    </h1>
                    <p class="text-base md:text-lg mb-8 text-center max-w-prose mx-auto">
                        {{ $t('home.title38') }}
                    </p>

                    <div class="flex flex-col space-y-8">
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h2 class="text-xl font-semibold mb-2">
                                {{ $t('home.title39') }}
                            </h2>
                            <p class="text-sm md:text-base">
                                {{ $t('home.title40') }}
                            </p>
                        </div>
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h2 class="text-xl font-semibold mb-2">
                                {{ $t('home.title41') }}
                            </h2>
                            <p class="text-sm md:text-base">
                                {{ $t('home.title42') }}
                            </p>
                        </div>
                        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h2 class="text-xl font-semibold mb-2">
                                {{ $t('home.title43') }}
                            </h2>
                            <p class="text-sm md:text-base">
                                {{ $t('home.title44') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Core values -->
            <div class="w-full py-20 dark:bg-m_black-100">
                <h2
                    class="font-poppins font-semibold text-m_black-100 dark:text-white text-center lg:text-3xl text-2xl pb-20">
                    {{ $t('about.title2') }}
                </h2>
                <div class="flex flex-wrap justify-center gap-10">
                    <div
                        class="sm:w-[300px] w-full h-[300px] sm:mx-0 mx-4 rounded-xl flex items-start flex-col justify-between group bg-m_white-300 hover:bg-m_blue-100 duration-300 relative">
                        <img class="w-full h-full object-cover rounded-xl" src="/imgs/service1.webp">
                        <div class="absolute top-5 left-5 rounded-full p-2 text-center w-fit bg-white">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.5368 19.1379C21.8524 18.4529 21.0526 17.8939 20.1743 17.4863C21.413 16.4828 22.2032 14.9516 22.2032 13.2344C22.2032 10.2047 19.6766 7.71914 16.6469 7.76563C13.6637 7.81211 11.2602 10.243 11.2602 13.2344C11.2602 14.9516 12.0532 16.4828 13.2891 17.4863C12.4106 17.8936 11.6108 18.4527 10.9266 19.1379C9.43366 20.6336 8.58601 22.6078 8.53132 24.7133C8.53059 24.7425 8.53571 24.7715 8.54637 24.7987C8.55704 24.8258 8.57304 24.8506 8.59342 24.8715C8.61381 24.8924 8.63817 24.909 8.66507 24.9203C8.69198 24.9317 8.72088 24.9375 8.75007 24.9375H10.2813C10.3989 24.9375 10.4973 24.8445 10.5001 24.727C10.552 23.141 11.1946 21.6562 12.3239 20.5297C12.9018 19.9487 13.5891 19.4882 14.3462 19.1746C15.1033 18.8611 15.915 18.7008 16.7344 18.7031C18.3997 18.7031 19.9665 19.3512 21.145 20.5297C22.2716 21.6562 22.9141 23.141 22.9688 24.727C22.9716 24.8445 23.07 24.9375 23.1876 24.9375H24.7188C24.748 24.9375 24.7769 24.9317 24.8038 24.9203C24.8307 24.909 24.8551 24.8924 24.8755 24.8715C24.8958 24.8506 24.9118 24.8258 24.9225 24.7987C24.9332 24.7715 24.9383 24.7425 24.9376 24.7133C24.8829 22.6078 24.0352 20.6336 22.5368 19.1379ZM16.7344 16.7344C15.7993 16.7344 14.9188 16.3707 14.2598 15.709C13.9291 15.3809 13.6679 14.9895 13.4917 14.5582C13.3155 14.127 13.228 13.6646 13.2344 13.1988C13.2426 12.302 13.6008 11.4352 14.227 10.7926C14.8833 10.1199 15.761 9.74531 16.6989 9.73438C17.6258 9.72617 18.5255 10.0871 19.1872 10.7352C19.8653 11.3996 20.2372 12.2883 20.2372 13.2344C20.2372 14.1695 19.8735 15.0473 19.2118 15.709C18.8871 16.0352 18.501 16.2938 18.0758 16.4698C17.6506 16.6458 17.1947 16.7357 16.7344 16.7344ZM9.88483 13.9563C9.86022 13.7184 9.84655 13.4777 9.84655 13.2344C9.84655 12.7996 9.88757 12.3758 9.96413 11.9629C9.98327 11.8645 9.93132 11.7633 9.84108 11.7223C9.46921 11.5555 9.12741 11.3258 8.8321 11.0359C8.48412 10.6985 8.2103 10.2923 8.0281 9.84316C7.8459 9.39401 7.75932 8.91182 7.7739 8.42734C7.79851 7.54961 8.15124 6.71563 8.76647 6.08672C9.44187 5.39492 10.3497 5.01758 11.3149 5.02852C12.1872 5.03672 13.0294 5.37305 13.6665 5.96914C13.8825 6.17149 14.0684 6.3957 14.2243 6.63633C14.279 6.72109 14.3856 6.75664 14.4786 6.72383C14.9598 6.55703 15.4684 6.43945 15.9907 6.38477C16.1438 6.36836 16.2313 6.2043 16.163 6.06758C15.2743 4.30938 13.4587 3.09531 11.3587 3.0625C8.32624 3.01602 5.79968 5.50156 5.79968 8.52852C5.79968 10.2457 6.58991 11.777 7.82858 12.7805C6.95905 13.1824 6.15788 13.7375 5.46335 14.432C3.96491 15.9277 3.11726 17.902 3.06257 20.0102C3.06184 20.0393 3.06696 20.0684 3.07762 20.0955C3.08829 20.1227 3.10429 20.1475 3.12467 20.1684C3.14506 20.1893 3.16942 20.2059 3.19632 20.2172C3.22323 20.2285 3.25213 20.2344 3.28132 20.2344H4.8153C4.93288 20.2344 5.03132 20.1414 5.03405 20.0238C5.08601 18.4379 5.72858 16.9531 6.85788 15.8266C7.66179 15.0227 8.64616 14.4648 9.72077 14.1941C9.82741 14.1668 9.89851 14.0656 9.88483 13.9563Z"
                                    class="fill-black group-hover:fill-m_blue-100" />
                            </svg>
                        </div>
                        <p
                            class="absolute bottom-5 left-5 right-5 font-poppins font-medium lg:text-lg text-base text-start text-white group-hover:text-white group-hover:font-semibold">
                            {{ $t('about.title3') }}
                        </p>
                    </div>
                    <div
                        class="sm:w-[300px] w-full h-[300px] sm:mx-0 mx-4 rounded-xl flex items-start flex-col justify-between bg-m_white-300 hover:bg-m_blue-100 duration-300 group relative">
                        <img class="w-full h-full object-cover rounded-xl" src="/imgs/service2.webp">
                        <div class="absolute top-5 left-5 rounded-full p-2 text-center w-fit bg-white">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13 1.625L3.25 4.875V14.625C3.25 20.0104 7.61465 24.375 13 24.375C18.3854 24.375 22.75 20.0104 22.75 14.625V4.875L13 1.625ZM20.9219 14.625C20.9219 18.9998 17.3748 22.5469 13 22.5469C8.6252 22.5469 5.07812 18.9998 5.07812 14.625V6.24609L13 3.45312L20.9219 6.24609V14.625Z"
                                    class="fill-black group-hover:fill-m_blue-100" />
                                <path
                                    d="M9.60778 12.0631C9.52306 11.978 9.42236 11.9104 9.31147 11.8644C9.20058 11.8183 9.08168 11.7946 8.96159 11.7946C8.8415 11.7946 8.7226 11.8183 8.61171 11.8644C8.50082 11.9104 8.40012 11.978 8.3154 12.0631C8.23029 12.1478 8.16276 12.2485 8.11668 12.3594C8.0706 12.4703 8.04688 12.5892 8.04688 12.7093C8.04688 12.8294 8.0706 12.9483 8.11668 13.0592C8.16276 13.1701 8.23029 13.2707 8.3154 13.3555L11.6009 16.641L11.6543 16.6943C11.7344 16.7746 11.8296 16.8383 11.9344 16.8818C12.0392 16.9252 12.1515 16.9476 12.2649 16.9476C12.3783 16.9476 12.4907 16.9252 12.5955 16.8818C12.7002 16.8383 12.7954 16.7746 12.8756 16.6943L18.5504 11.0195C18.6306 10.9394 18.6943 10.8442 18.7378 10.7394C18.7813 10.6346 18.8036 10.5223 18.8036 10.4089C18.8036 10.2955 18.7813 10.1831 18.7378 10.0783C18.6943 9.97356 18.6306 9.87838 18.5504 9.79824L18.4793 9.72715C18.3991 9.64686 18.3039 9.58317 18.1992 9.53971C18.0944 9.49625 17.9821 9.47388 17.8686 9.47388C17.7552 9.47388 17.6429 9.49625 17.5381 9.53971C17.4333 9.58317 17.3381 9.64686 17.258 9.72715L12.2636 14.7189L9.60778 12.0631Z"
                                    class="fill-black group-hover:fill-m_blue-100" />
                            </svg>
                        </div>
                        <p
                            class="absolute bottom-5 left-5 right-5 font-poppins font-medium lg:text-lg text-base text-start text-white group-hover:text-white group-hover:font-semibold">
                            {{ $t('about.title4') }}
                        </p>
                    </div>
                    <div
                        class="sm:w-[300px] w-full h-[300px] sm:mx-0 mx-4 rounded-xl flex items-start flex-col justify-between bg-m_white-300 hover:bg-m_blue-100 duration-300 group relative">
                        <img class="w-full h-full object-cover rounded-xl" src="/imgs/service3.webp">
                        <div class="absolute top-5 left-5 rounded-full p-2 text-center w-fit bg-white">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.8275 10.9596L23.2356 5.77383C23.1401 5.58296 23.008 5.41277 22.8467 5.27297C22.6855 5.13318 22.4982 5.02652 22.2957 4.95909C22.0933 4.89165 21.8795 4.86477 21.6666 4.87997C21.4537 4.89516 21.2459 4.95215 21.0551 5.04766L18.5292 6.31008L13.2083 4.90242C13.0718 4.8669 12.9285 4.8669 12.7919 4.90242L7.47108 6.31008L4.94522 5.04766C4.75436 4.95215 4.54656 4.89516 4.33368 4.87997C4.1208 4.86477 3.90702 4.89165 3.70453 4.95909C3.50204 5.02652 3.31482 5.13318 3.15356 5.27297C2.9923 5.41277 2.86015 5.58296 2.76467 5.77383L0.172795 10.9586C0.0772815 11.1495 0.0202991 11.3573 0.0051018 11.5701C-0.0100955 11.783 0.0167899 11.9968 0.0842227 12.1993C0.151656 12.4018 0.258315 12.589 0.39811 12.7503C0.537905 12.9115 0.708097 13.0437 0.898967 13.1391L3.64115 14.5113L9.27686 18.5362C9.35995 18.5952 9.45328 18.6382 9.55209 18.6631L16.0521 20.2881C16.1882 20.3223 16.3309 20.3206 16.4661 20.2832C16.6014 20.2458 16.7247 20.174 16.824 20.0748L22.417 14.4808L25.1003 13.1391C25.4855 12.9463 25.7784 12.6084 25.9146 12.1997C26.0507 11.791 26.019 11.345 25.8265 10.9596H25.8275ZM20.2527 14.3488L16.7579 11.5497C16.6014 11.4243 16.404 11.3613 16.2037 11.3727C16.0035 11.3841 15.8145 11.4693 15.6733 11.6116C13.8644 13.4337 11.8484 13.2031 10.5626 12.3906L14.9542 8.125H18.1849L20.9484 13.651L20.2527 14.3488ZM4.21803 6.5L6.29701 7.53797L3.70006 12.7227L1.62514 11.6858L4.21803 6.5ZM15.9993 18.5991L10.0975 17.1245L5.10061 13.5556L7.94436 7.86805L13.0001 6.52844L13.9955 6.79149L9.42514 11.2277L9.41701 11.2369C9.24497 11.4089 9.11376 11.6174 9.03306 11.8469C8.95235 12.0765 8.92422 12.3212 8.95074 12.563C8.97725 12.8049 9.05774 13.0377 9.18625 13.2443C9.31477 13.4509 9.48804 13.626 9.69326 13.7566C11.7814 15.0902 14.3012 14.8738 16.2857 13.2488L19.0939 15.5045L15.9993 18.5991ZM22.2962 12.7217L19.7043 7.54203L21.7822 6.5L24.3751 11.6858L22.2962 12.7217ZM13.384 22.1335C13.3401 22.3091 13.2389 22.465 13.0963 22.5765C12.9537 22.688 12.7779 22.7487 12.5969 22.749C12.5302 22.749 12.4637 22.7408 12.3989 22.7246L8.16678 21.6663C8.0678 21.6419 7.97439 21.5988 7.89154 21.5394L5.21537 19.628C5.05082 19.4988 4.94245 19.3111 4.91282 19.104C4.88319 18.8969 4.93459 18.6863 5.05632 18.5162C5.17804 18.346 5.36071 18.2294 5.56628 18.1905C5.77186 18.1517 5.98449 18.1937 6.1599 18.3077L8.71014 20.1297L12.797 21.1494C13.006 21.2017 13.1857 21.3348 13.2965 21.5196C13.4074 21.7043 13.4403 21.9255 13.3881 22.1345L13.384 22.1335Z"
                                    class="fill-black group-hover:fill-m_blue-100" />
                            </svg>
                        </div>
                        <p
                            class="absolute bottom-5 left-5 right-5 font-poppins font-medium lg:text-lg text-base text-start text-white group-hover:text-white group-hover:font-semibold">
                            {{ $t('about.title5') }}
                        </p>
                    </div>
                    <div
                        class="sm:w-[300px] w-full h-[300px] sm:mx-0 mx-4 rounded-xl flex items-start flex-col justify-between bg-m_white-300 hover:bg-m_blue-100 duration-300 group relative">
                        <img class="w-full h-full object-cover rounded-xl" src="/imgs/slide-1.webp">
                        <div class="absolute top-5 left-5 rounded-full p-2 text-center w-fit bg-white">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.1998 3.57501C18.1998 3.31642 18.3025 3.06842 18.4854 2.88558C18.6682 2.70273 18.9162 2.60001 19.1748 2.60001H22.4248C22.6834 2.60001 22.9314 2.70273 23.1142 2.88558C23.2971 3.06842 23.3998 3.31642 23.3998 3.57501V6.82501C23.3998 7.08359 23.2971 7.33159 23.1142 7.51444C22.9314 7.69728 22.6834 7.80001 22.4248 7.80001C22.1662 7.80001 21.9182 7.69728 21.7354 7.51444C21.5525 7.33159 21.4498 7.08359 21.4498 6.82501V5.92801L15.6388 11.739C15.456 11.9216 15.2082 12.0241 14.9498 12.0241C14.6914 12.0241 14.4436 11.9216 14.2608 11.739L11.0498 8.52801L5.56381 14.014C5.47455 14.1098 5.36691 14.1866 5.24731 14.2399C5.12771 14.2932 4.9986 14.3219 4.86769 14.3242C4.73677 14.3265 4.60674 14.3024 4.48533 14.2534C4.36393 14.2043 4.25364 14.1313 4.16106 14.0388C4.06847 13.9462 3.99549 13.8359 3.94645 13.7145C3.89741 13.5931 3.87333 13.463 3.87564 13.3321C3.87795 13.2012 3.9066 13.0721 3.95989 12.9525C4.01318 12.8329 4.09002 12.7253 4.18581 12.636L10.3608 6.46101C10.5436 6.27842 10.7914 6.17586 11.0498 6.17586C11.3082 6.17586 11.556 6.27842 11.7388 6.46101L14.9498 9.67201L20.0718 4.55001H19.1748C18.9162 4.55001 18.6682 4.44728 18.4854 4.26444C18.3025 4.08159 18.1998 3.83359 18.1998 3.57501ZM4.87481 18.2C5.1334 18.2 5.38139 18.3027 5.56424 18.4856C5.74709 18.6684 5.84981 18.9164 5.84981 19.175V22.425C5.84981 22.6836 5.74709 22.9316 5.56424 23.1144C5.38139 23.2973 5.1334 23.4 4.87481 23.4C4.61622 23.4 4.36823 23.2973 4.18538 23.1144C4.00253 22.9316 3.89981 22.6836 3.89981 22.425V19.175C3.89981 18.9164 4.00253 18.6684 4.18538 18.4856C4.36823 18.3027 4.61622 18.2 4.87481 18.2ZM11.0498 15.275C11.0498 15.0164 10.9471 14.7684 10.7642 14.5856C10.5814 14.4027 10.3334 14.3 10.0748 14.3C9.81622 14.3 9.56823 14.4027 9.38538 14.5856C9.20253 14.7684 9.09981 15.0164 9.09981 15.275V22.425C9.09981 22.6836 9.20253 22.9316 9.38538 23.1144C9.56823 23.2973 9.81622 23.4 10.0748 23.4C10.3334 23.4 10.5814 23.2973 10.7642 23.1144C10.9471 22.9316 11.0498 22.6836 11.0498 22.425V15.275ZM15.2748 16.9C15.5334 16.9 15.7814 17.0027 15.9642 17.1856C16.1471 17.3684 16.2498 17.6164 16.2498 17.875V22.425C16.2498 22.6836 16.1471 22.9316 15.9642 23.1144C15.7814 23.2973 15.5334 23.4 15.2748 23.4C15.0162 23.4 14.7682 23.2973 14.5854 23.1144C14.4025 22.9316 14.2998 22.6836 14.2998 22.425V17.875C14.2998 17.6164 14.4025 17.3684 14.5854 17.1856C14.7682 17.0027 15.0162 16.9 15.2748 16.9ZM21.4498 12.675C21.4498 12.4164 21.3471 12.1684 21.1642 11.9856C20.9814 11.8027 20.7334 11.7 20.4748 11.7C20.2162 11.7 19.9682 11.8027 19.7854 11.9856C19.6025 12.1684 19.4998 12.4164 19.4998 12.675V22.425C19.4998 22.6836 19.6025 22.9316 19.7854 23.1144C19.9682 23.2973 20.2162 23.4 20.4748 23.4C20.7334 23.4 20.9814 23.2973 21.1642 23.1144C21.3471 22.9316 21.4498 22.6836 21.4498 22.425V12.675Z"
                                    class="fill-black group-hover:fill-m_blue-100" />
                            </svg>
                        </div>
                        <p
                            class="absolute bottom-5 left-5 right-5 font-poppins font-medium lg:text-lg text-base text-start text-white group-hover:text-white group-hover:font-semibold">
                            {{ $t('about.title6') }}
                        </p>
                    </div>
                    <div
                        class="sm:w-[300px] w-full h-[300px] sm:mx-0 mx-4 rounded-xl flex items-start flex-col justify-between bg-m_white-300 hover:bg-m_blue-100 duration-300 group relative col-start-2">
                        <img class="w-full h-full object-cover rounded-xl" src="/imgs/slide-2.webp">
                        <div class="absolute top-5 left-5 rounded-full p-2 text-center w-fit bg-white">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M13.9999 25.6667C7.55642 25.6667 2.33325 20.4435 2.33325 14C2.33325 7.55651 7.55642 2.33334 13.9999 2.33334C20.4434 2.33334 25.6666 7.55651 25.6666 14C25.6666 20.4435 20.4434 25.6667 13.9999 25.6667ZM13.9999 24.2667C16.7228 24.2667 19.3342 23.185 21.2596 21.2596C23.1849 19.3343 24.2666 16.7229 24.2666 14C24.2666 11.2771 23.1849 8.66575 21.2596 6.74038C19.3342 4.81501 16.7228 3.73334 13.9999 3.73334C11.277 3.73334 8.66566 4.81501 6.74029 6.74038C4.81492 8.66575 3.73325 11.2771 3.73325 14C3.73325 16.7229 4.81492 19.3343 6.74029 21.2596C8.66566 23.185 11.277 24.2667 13.9999 24.2667ZM12.6326 16.9843L19.4098 10.2083L20.3991 11.1988L13.4574 18.1405C13.2386 18.3592 12.9419 18.4821 12.6326 18.4821C12.3232 18.4821 12.0265 18.3592 11.8078 18.1405L8.16659 14.497L9.15709 13.5065L12.6338 16.9832L12.6326 16.9843Z"
                                    class="fill-black group-hover:fill-m_blue-100" />
                            </svg>
                        </div>
                        <p
                            class="absolute bottom-5 left-5 right-5 font-poppins font-medium lg:text-lg text-base text-start text-white group-hover:text-white group-hover:font-semibold">
                            {{ $t('about.title7') }}
                        </p>
                    </div>
                    <div
                        class="sm:w-[300px] w-full h-[300px] sm:mx-0 mx-4 rounded-xl flex items-start flex-col justify-between bg-m_white-300 hover:bg-m_blue-100 duration-300 group relative">
                        <img class="w-full h-full object-cover rounded-xl" src="/imgs/slide-3.webp">
                        <div class="absolute top-5 left-5 rounded-full p-2 text-center w-fit bg-white">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.4167 21.6667C19.6133 21.6667 20.5833 20.6966 20.5833 19.5C20.5833 18.3034 19.6133 17.3333 18.4167 17.3333C17.22 17.3333 16.25 18.3034 16.25 19.5C16.25 20.6966 17.22 21.6667 18.4167 21.6667Z"
                                    class="stroke-black group-hover:stroke-m_blue-100" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M7.58341 21.6667C8.78003 21.6667 9.75008 20.6966 9.75008 19.5C9.75008 18.3034 8.78003 17.3333 7.58341 17.3333C6.3868 17.3333 5.41675 18.3034 5.41675 19.5C5.41675 20.6966 6.3868 21.6667 7.58341 21.6667Z"
                                    class="stroke-black group-hover:stroke-m_blue-100" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M11.9167 18.4167H16.2501M14.6251 7.58334H15.6467C17.0658 7.58334 17.7765 7.58334 18.3777 7.92459C18.9801 8.26476 19.3809 8.89418 20.1837 10.1519C20.747 11.0338 21.3363 11.6751 22.1672 12.2438C23.0036 12.818 23.4022 13.0986 23.6222 13.5482C23.8334 13.9793 23.8334 14.4896 23.8334 15.5101C23.8334 16.8567 23.8334 17.5294 23.4553 17.9573L23.4055 18.0104C23.0079 18.4167 22.3807 18.4167 21.1283 18.4167H20.5834"
                                    class="stroke-black group-hover:stroke-m_blue-100" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M14.0834 7.58334L15.1602 10.2765C15.6878 11.5949 15.9511 12.2547 16.5025 12.6273C17.0528 13 17.7624 13 19.1837 13H22.7501M14.0834 7.58334C14.0834 6.05043 14.0834 5.28451 13.6284 4.81001C13.1734 4.33334 12.44 4.33334 10.9742 4.33334H5.27591C3.81016 4.33334 3.07675 4.33443 2.62175 4.81001C2.16675 5.28559 2.16675 6.05151 2.16675 7.58334V15.1667C2.16675 16.6996 2.16675 17.4655 2.62175 17.94C3.07675 18.4167 3.81016 18.4167 5.27591 18.4167M14.0834 7.58334V18.4167H9.42075"
                                    class="stroke-black group-hover:stroke-m_blue-100" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p
                            class="absolute bottom-5 left-5 right-5 font-poppins font-medium lg:text-lg text-base text-start text-white group-hover:text-white group-hover:font-semibold">
                            {{ $t('about.title8') }}
                        </p>
                    </div>
                    <div
                        class="sm:w-[300px] w-full h-[300px] sm:mx-0 mx-4 rounded-xl flex items-start flex-col justify-between bg-m_white-300 hover:bg-m_blue-100 duration-300 group relative">
                        <img class="w-full h-full object-cover rounded-xl" src="/imgs/slide-4.webp">
                        <div class="absolute top-5 left-5 rounded-full p-2 text-center w-fit bg-white">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.7498 8.12499L18.4165 10.2917M18.4165 10.2917L17.8748 10.5625L12.9998 13M18.4165 10.2917V14.0833M18.4165 10.2917L8.12484 4.87499M12.9998 13L3.24984 8.12499M12.9998 13V23.2917M16.876 3.66382L19.0427 4.80132C21.3729 6.02441 22.5386 6.63541 23.1864 7.73499C23.8332 8.83349 23.8332 10.2017 23.8332 12.9372V13.0639C23.8332 15.7982 23.8332 17.1665 23.1864 18.265C22.5386 19.3646 21.3729 19.9767 19.0427 21.1997L16.876 22.3362C14.9737 23.3339 14.0225 23.8333 12.9998 23.8333C11.9772 23.8333 11.026 23.335 9.12367 22.3362L6.957 21.1987C4.62675 19.9756 3.46109 19.3646 2.81325 18.265C2.1665 17.1665 2.1665 15.7982 2.1665 13.065V12.9382C2.1665 10.2028 2.1665 8.83457 2.81325 7.73607C3.46109 6.63649 4.62675 6.02441 6.957 4.80241L9.12367 3.66491C11.026 2.66607 11.9772 2.16666 12.9998 2.16666C14.0225 2.16666 14.9737 2.66499 16.876 3.66382Z"
                                    class="stroke-black group-hover:stroke-m_blue-100" stroke-width="1.5"
                                    stroke-linecap="round" />
                            </svg>
                        </div>
                        <p
                            class="absolute bottom-5 left-5 right-5 font-poppins font-medium lg:text-lg text-base text-start text-white group-hover:text-white group-hover:font-semibold">
                            {{ $t('about.title9') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import AnimatedCounter from '@/components/AnimatedCounter.vue';
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';
export default {
    name: "About",
    components: {
        Navbar,
        Footer,
        AnimatedCounter,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, EffectFade, Autoplay],
        };
    },
}
</script>