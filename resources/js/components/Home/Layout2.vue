<template>
    <div class="layout2 pb-2">
        <v-container>
            <v-row>
                <v-col>
                    <h1 class="judul text-center mt-5">Solusi yang kami berikan</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <div class="subjudul text-center mt-5">
                        Semua saluran dalam satu dashboard seperti WhatsApp, Twitter, FB Messenger, Telegram, Email,
                        <br>Instagram serta integrasikan Video API dan Whatsapp API di manapun dan kapanpun
                    </div>
                </v-col>
            </v-row>

            <v-row class="mt-5 mb-5">
                <v-col cols="3" v-for="data in card" :key="data.i">
                    <v-card class="mx-auto rounded-xl" min-height="350" max-width="500" outlined>
                        <v-list-item three-line>
                            <v-list-item-avatar tile size="40" color="grey" class="rounded-xl">
                                <img :src="logoUrl(data.logo)" alt="">
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="text-h5">
                                    {{data.name}}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="subjudul">
                            {{data.content}}
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <h1 class="judul text-center pt-10">Komunikasi dengan pelanggan anda <br> jauh lebih baik</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <div class="subjudul text-center mt-5">
                        Semua saluran dalam satu dashboard seperti WhatsApp, Twitter, FB Messenger, Telegram, Email,
                        <br>Instagram serta integrasikan Video API dan Whatsapp API di manapun dan kapanpun
                    </div>
                </v-col>
            </v-row>
            

            <v-row class="mt-10">
                <v-col cols="6" class="d-flex justify-center align-center">
                    <img src="/images/home/chat.png" height="500px" width="700px" >
                </v-col>
                <v-col cols="6">
                     <v-card class="mx-auto rounded-xl mt-2" min-height="200" outlined v-for="data in card2" :key="data.id">
                        <v-list-item three-line>
                            <v-list-item-avatar tile size="40" color="white" class="rounded-xl">
                                <img :src="logoUrl(data.logo)" alt="">
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="text-h5">
                                    {{data.name}}
                                </v-list-item-title>
                                <v-list-item-content>
                                    
                                </v-list-item-content>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="text mb-1">
                            <div class="subjudul">{{data.content}}</div>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data : () => ({
        card : [
            {
                name : "Omnichannel",
                content : "Semua saluran dalam satu dashboard seperti WhatsApp, Twitter, FB Messenger, Telegram, Email, Instagram serta integrasikan Video API dan Whatsapp API di manapun dan kapanpun",
                logo : "omni-logo.png"
            },
            {
                name : "Whatsapp API",
                content : "Integrasi whatsapp bisnis anda kedalam inbox, sehingga anda dapat berinteraksi dengan pelanggan anda ",
                logo : "wa-logo.png"
            },
            {
                name : "Video API",
                content : "Berinteraksi tatap muka dengan pelanggan anda dengan pengalaman yang lebih menyenangkan",
                logo : "video-api-logo.png"
            },
            {
                name : "Ticketing Form",
                content : "Pantau semua keluhan dan masalah pelanggan anda dengan efektif dan terintegrasi, fokus pada pemecahan masalah",
                logo : "ticket-logo.png"
            }
        ],
        card2 : [
            {
                name : "All In One Inbox",
                content : "Semua percakapan pelanggan dari semua jenis sosial media berada pada satu inbox, jadi lebih muda dan cepat untuk merespon pelanggan",
                logo : "image1.png"
            },
            {
                name : "Chatbot & Template Reply",
                content : "Biarkan chatbot kami membantu menjawab pertanyaan dasar pelanggan. Perlu membalas dengan cepat tanpa mengetik? gunakan template yang tak terhingga ",
                logo : "image2.png"

            },
            {
                name : "Smart Ticket",
                content : "Semua percakapan dapat ditindaklanjuti menjadi tiket kasus, sehingga riwayat respon dapat dipantau dan diselesaikan oleh agent dimanapun dan kapanpun ",
                logo : "image3.png"

            },
        ]
    }),
    methods: {
        logoUrl(logo) {
            return `/images/home/${logo}`;
        }
    },
}
</script>