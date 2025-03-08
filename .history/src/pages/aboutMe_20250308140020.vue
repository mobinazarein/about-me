<template>
  <v-row no-gutters justify="end">
    <v-col cols="12" md="12" class="d-flex">
      <v-col cols="6" md="6" class="mr-5  ml-10" style="margin-left: 100px !important;">
        <!-- <p class="text-left" style="color: #FDC435;font-weight: bold;">frontEnd Developer</p> -->
        <h1 class="text-left about" style="font-size: 50px;word-spacing: 8px; color: black;">about me</h1>
        <!-- <h1 class="text-left mb-5" style="font-size: 50px;word-spacing: 8px; color: black;">Mobina Zarein</h1> -->
        <p style="width: 70%;float: left;color: gray;display: inline-block;" class="text-left text"> <b>location :</b>
          Iran,Yazd</p>
        <p style="width: 70%;float: left;color: gray;display: inline-block;" class="text-left date"> <b>Date of
            Birth:</b>
          November
          15, 2006</p>
        <p style="width: 70%;float: left;color: gray;display: inline-block;" class="text-left email"><b>Email:</b>
          mobinazarein@gmail.com</p>
        <p style="width: 70%;float: left;color: gray;display: inline-block;" class="text-left skills"> <b>Skills:</b>

          HTML

          CSS

          JavaScript

          Vuetify

          Vue.js

          Nuxt.js

          Composition API

          Vuex

          Sass

          Tailwind CSS

          Git

          Axios

          Pinia

          Store</p>
        <p style="width: 70%;float: left;color: gray;display: inline-block;" class="text-left familiar"> <b>Familiar
            with:</b>

          Figma

          WordPress

          PrestaShop

          PHP

          C#</p>
        <p style="width: 80%;float: left;color: gray;display: inline-block;" class="text-left"> <b>Work Experience:</b>

          Pouyan System (May 2024 - September 2024): Worked on the PishroPlus project, employment form, and
          PishroTicketing.
          <br>

          Kasbodaad (June 2024 - Present): Worked on the Kasbodaad project.
          <br>

          Narvan – Arya (September 2024 - Present): Worked on the Tinext project.
        </p>


        <div style="clear: both;"></div>
        <div style="text-align: left;" class="mt-5 ">
          <a href="https://drive.google.com/file/d/1floVl60UBvFZk12p-dPAjMlAtBXm2D3K/view?usp=drive_link"
            target="_blank">
            <v-btn class="mr-3" style="color: black;background-color: #FDC435;border-radius: 8px;">Resume</v-btn>
          </a>
          <a href="https://www.linkedin.com/in/mobina-zarein-376324331" target="_blank">
            <v-btn class="mr-3" style="color: black;border: 1px solid black;border-radius: 8px;">LinkedIn</v-btn>
          </a>
        </div>
      </v-col>
      <div style="position: relative;" class="d-flex">
        <img src="/bg.png" class="bg" width="800" style="position: absolute; left: 20px;" />
        <img src="/circle.png" class="circle" width="1500"
          style="position: absolute;left: -400px;bottom: 50px !important;top: -200PX;" />
      </div>
    </v-col>
  </v-row>
  <div class="mt-10">
    <v-row no-gutters justify="center">
      <v-col cols="6" md="6">
        <v-row no-gutters justify="center">
          <v-col cols="12" md="6">
            <h1 class="text-center mb-2">Contact me</h1>
            <div style="border: 1px solid #FDC435; width: 20%;margin-left: auto;margin-right: auto;;"></div>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center" class="mt-5">
          <v-col cols="12" md="6">
            <v-card class="pa-5" rounded="xl">
              <v-text-field label="name" variant="outlined" rounded="lg"></v-text-field>
              <v-text-field label="email" variant="outlined" rounded="lg"></v-text-field>
              <v-textarea label="message" variant="outlined" rounded="lg"></v-textarea>
              <v-btn style="float: right;background-color: #FDC435; ">send</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style>
@media(max-width:768px) {
  .bg {
    width: 400px;
    height: 400px;
    left: -120px !important;
  }

  .circle {
    display: none;
  }

  .about {
    margin-left: -80px !important;
    font-size: 15px !important;
    word-spacing: 2px !important;
  }

  .text {
    margin-left: -80px !important;
    font-size: 12px !important;
    word-spacing: 2px !important;
    width: 200px !important;
  }

  .date {
    width: 200px !important;
    margin-left: -80px !important;
    /* margin-top: 20px !important; */
    font-size: 12px !important;
    word-spacing: 2px !important;
  }

  .email {
    width: 200px !important;
    margin-left: -80px !important;
    /* margin-top: 20px !important; */
    font-size: 12px !important;
    word-spacing: 2px !important;
  }

  .skills {
    width: 190px !important;
    margin-left: -80px !important;
    /* margin-top: 20px !important; */
    font-size: 12px !important;
    word-spacing: 2px !important;
  }

  .familiar {
    width: 150px !important;
    margin-left: -80px !important;
    /* margin-top: 20px !important; */
    font-size: 12px !important;
    word-spacing: 2px !important;
  }
}
</style>