<template>
<v-form @submit.prevent="sendMessage">
    <v-col cols="12" md="12" class="mt-5">
        <v-text-field label="name" v-model="name" id="name" required color="white" variant="outlined" style="color: white;"></v-text-field>
        <v-text-field label="email" v-model="email" id="email" required variant="outlined" style="color: white;"></v-text-field>
        <v-text-field label="phone number" v-model="phone" id="phone" required variant="outlined" style="color: white;"></v-text-field>
        <v-textarea label="message" v-model="message" id="message" required variant="outlined" style="color: white;" rows="3"></v-textarea>
        
        <!-- دکمه ارسال -->
        <v-row justify="center" class="mt-4 mb-2">
            <v-btn prepend-icon="mdi-telegram" type="submit" style="text-align: center;">send</v-btn>
        </v-row>
    </v-col>
</v-form>
</template>
<script>
export default {
    data() {
        return {
            name: '',
      email: '',
      phone: '',
      message: ''
        }
    },
    methods:{
        sendMessage() {
      const telegramUsername = 'mbinaaa_zr'; // نام کاربری تلگرام خود را اینجا وارد کنید
      const text = `نام: ${this.name}\nایمیل: ${this.email}\nشماره تلفن: ${this.phone}\nپیام: ${this.message}`;
      const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(text)}`;

      // کاربر را به تلگرام هدایت کنید
      window.open(url, '_blank');
    }
    }
}
</script>