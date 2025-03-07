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
                        <div class="d-flex" style="border-radius: 15px;box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.664);">
                            <v-col cols="7" md="7" class="pa-10">
                                <h2 class="mb-5">Pishro Plus</h2>
                                <p class="mb-5">A web-based accounting software using technologies like HTML, CSS,
                                    JavaScript,
                                    Vue.js, Vuetify, Solid, Store, Pinia, Git, Axios, and more.</p>
                                <v-btn style="border: 1px solid black;border-radius: 25px;" to="">View project</v-btn>
                            </v-col>
                            <v-col cols="7" md="7">
                                <img src="/pishroPlus.jpg" width="400" class="text-center" />
                            </v-col>
                        </div>
                        <!-- </div> -->
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<style></style>