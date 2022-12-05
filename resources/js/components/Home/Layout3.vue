<template>
    <div class="layout3">
        <v-container>
            <v-row>
                <v-col>
                    <h1 class="judul text-center mt-5" style="color:white">Harga terjangkau dan terlengkap <br> dari yang lain</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <div class="subjudul text-center mt-5" style="color:white">
                        Pilih paket yang sesuai dengan kebutuhan kamu, setiap paket memiliki benefit yang berbeda-beda
                    </div>
                </v-col>
            </v-row>

            <v-row class="">
                <v-col cols="5">
                    <div class="subjudul text-right justify-right align-right mt-5" style="color:white">
                        Bayar Perbulan 
                    </div>
                </v-col>
                <v-col cols="2" class="d-flex justify-center align-center text-center">
                    <div style="color:white">
                        <v-switch
                            v-model="switchPrice"
                            inset
                            color="#A8FF93"
                            style="width:100%"
                        >
                        </v-switch>
                    </div>
                </v-col>
                <v-col cols="5">
                    <div class="subjudul d-flex text-left justify-left align-left mt-5" style="color:white">
                        Bayar Pertahun
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3" v-for="data in price" :key="data.id">
                    <v-card class="mx-auto rounded-xl mb-3" min-height="100" >
                        <v-list-item-title class="text-h5 pt-3 pb-2" :style="BgColor(data.color)">
                            <h1 class="card-l3 text-center" :style="BgFontColor(data.fontColor)">{{data.title}}</h1>
                        </v-list-item-title>
                        <v-list-item-title class="text-h5 mt-5 pb-2">
                            <h1 class="price text-center">{{switchPrice == false ? data.price : data.priceYears }}</h1>
                        </v-list-item-title>
                        <v-divider></v-divider>

                        <v-list-item v-for="benefit in data.benefits" :key="benefit.id" >
                            <v-list-item-avatar tile size="40" color="white" class="rounded-xl">
                                <img src="/images/home/check-circle.png" alt="">
                            </v-list-item-avatar>
                            <v-list-item-content class="mb-2 mt-2">
                                <v-list-item-title class="subjudul">
                                   {{benefit}}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        
                        <v-card-actions class="justify-center">
                            <v-btn
                                large
                                rounded
                                style="width:100%"
                                :color="BtnColor(data.btnColor)"
                            >
                                <b>{{data.btnText}}</b>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            
        </v-container>
    </div>
</template>

<script>
export default {
    data : () => ({
        price : [
            {
                color : "white",
                title : "TOKO",
                price : "Gratis",
                priceYears : "Gratis",
                btnText : "Daftar Gratis",
                btnColor : "warning",
                benefits : [
                    "Akses semua channel",
                    "1 Agent",
                    "1 Template Whatsapp",
                    "Akses Mobile App",
                ]
            },
            {
                color : "#72a8e2",
                fontColor : "white",
                title : "UMKM",
                price : "350.000/Bulan",
                priceYears : "4.200.000/Tahun",
                btnText : "Mulai Daftar",
                btnColor : "primary",
                benefits : [
                    "Akses semua channel",
                    "3 Agent",
                    "5 Template Whatsapp",
                    "Akses Mobile App",
                ]
            },
            {
                color : "#0279ca",
                fontColor : "white",
                title : "BISNIS",
                price : "1.250.000/Bulan",
                priceYears : "15.000.000/Tahun",
                btnText : "Mulai Daftar",
                btnColor : "primary",
                benefits : [
                    "Akses semua channel",
                    "12 Agent",
                    "8 Template Whatsapp",
                    "Akses Mobile App",
                ]
            },
            {
                color : "#1a313d",
                fontColor : "white",
                title : "ENTERPRISE",
                price : "Kontak sales kami",
                priceYears : "Kontak sales kami",
                btnText : "Hubungi whatsapp",
                btnColor : "success",
                benefits : [
                    "Akses semua channel",
                    "Agent by request",
                    "Template by request",
                    "Akses Mobile App",
                ]
            },
        ],
        switchPrice: false,
    }),
    methods: {
        BgColor(color) {
            return `background-color:${color}`
        },
        BgFontColor(color) {
            return `color:${color == null ? 'black' : color}`
        },
        BtnColor(color) {
            return color;
        }
    }, 
}
</script>