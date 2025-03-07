<template>
    <v-row no-gutters class="mt-10" justify="end">
        <v-col cols="12" md="12">
            <v-col cols="6" md="6" class="mr-5  ml-10" style="margin-left: 100px !important;">
                <p class="text-left" style="color: #FDC435;font-weight: bold;">frontEnd Developer</p>
                <h1 class="text-left" style="font-size: 50px;word-spacing: 8px; color: black;">Hello, my name is</h1>
                <h1 class="text-left mb-5" style="font-size: 50px;word-spacing: 8px; color: black;">Mobina Zarein</h1>
                <p style="width: 70%;float: left;color: gray;display: inline-block;" class="text-left">Hi! I'm Mobina, a
                    front-end
                    developer
                    who loves creating
                    beautiful and efficient user interfaces with Vue.js.. I'm always learning and taking on new
                    challenges.
                    Glad
                    you're here!</p>
                <div style="clear: both;"></div>
                <div style="text-align: left;" class="mt-5 ">
                    <v-btn class="mr-3"
                        style="color: black;background-color: #FDC435;border-radius: 8px;">Resume</v-btn>
                    <v-btn class="mr-3"
                        style="color: black;border: 1px solid black;border-radius: 8px;">LinkedIn</v-btn>
                </div>
            </v-col>
        </v-col>
        <img src="../../public/bg.png" />
    </v-row>
    <div>
        <v-row no-gutters justify="center">
            <v-col cols="6" md="6">
                <v-row no-gutters justify="center">
                    <v-col cols="12" md="6">
                        <h1 class="text-center mb-2">projects</h1>
                        <div style="border: 1px solid #FDC435; width: 20%;margin-left: auto;margin-right: auto;;"></div>
                    </v-col>
                </v-row>
                <v-row no-gutters justify="center" class="mt-5">
                    <v-col cols="12" md="12">
                        <!-- <div class="d-flex"> -->
                        <v-card class="d-flex mb-10"
                            style="border-radius: 15px;box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.164);">
                            <v-col cols="7" md="7" class="pa-10">
                                <h2 class="mb-5">Pishro Plus</h2>
                                <p class="mb-5">A web-based accounting software using technologies like HTML, CSS,
                                    JavaScript,
                                    Vue.js, Vuetify, Solid, Store, Pinia, Git, Axios, and more.</p>
                                <a href="https://pplus.pooyansystem.com" target="_blank">
                                    <v-btn style="border: 1px solid black; border-radius: 25px;">View project</v-btn>
                                </a>
                            </v-col>
                            <v-col cols="7" md="7">
                                <img src="/pishroPlus.PNG" width="300" />
                            </v-col>
                        </v-card>
                        <v-card class="d-flex mb-10"
                            style="border-radius: 15px;box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.164);">
                            <v-col cols="7" md="7" class="pa-10">
                                <h2 class="mb-5">Kasbodad</h2>
                                <p class="mb-5">A web-based software that connects lawyers and the public using
                                    technologies such as HTML, CSS, JavaScript, Vue.js, Nuxt.js, Vuetify, Axios, Pinia,
                                    Composition API, Store, Git, and more.</p>
                                <a href="https://pplus.pooyansystem.com" target="_blank">
                                    <v-btn style="border: 1px solid black; border-radius: 25px;">View project</v-btn>
                                </a>
                            </v-col>
                            <v-col cols="7" md="7">
                                <img src="/kasbodad.png" class="mt-10" width="300" />
                            </v-col>
                        </v-card>
                        <v-card class="d-flex mb-10"
                            style="border-radius: 15px;box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.164);">
                            <v-col cols="7" md="7" class="pa-10">
                                <h2 class="mb-5">Tinext</h2>
                                <p class="mb-5">"T-Next is a web-based software that provides book and package delivery
                                    services to users and businesses using technologies such as HTML, CSS, JavaScript,
                                    Vue.js, Nuxt.js, Sass, Vuetify, Pinia, Store, Axios, Git, Composition API, and more.
                                </p>
                                <a href="http://95.216.165.166:3000/" target="_blank">
                                    <v-btn style="border: 1px solid black; border-radius: 25px;">View project</v-btn>
                                </a>
                            </v-col>
                            <v-col cols="7" md="7">
                                <img src="/tinext.png" class="mt-10" style="margin-top: 80px !important;" width="300" />
                            </v-col>
                        </v-card>
                        <!-- </div> -->
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<style></style>