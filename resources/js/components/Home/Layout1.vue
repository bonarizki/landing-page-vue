<template>

    <div class="layout1">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h1 class="judul justify-center text-center">
                        Komunikasikan pelanggan kamu &#10; dengan <span style="color:#036cbe ">Whatsapp</span> bisa dalam satu
                        genggaman
                    </h1>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <div class="text text-center mt-10">
                        Kelola dan komunikasikan semua saluran dalam satu dashboard seperti WhatsApp, Twitter, <br>
                        FB Messenger, Telegram, Email, Instagram serta integrasikan Video API dan Whatsapp API di manapun dan
                        kapanpun
                    </div>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <div class="image text-center">
                        <img src="/images/home/laptop-phone1.png" height="12px" width="30px">
                    </div>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <div class="text text-center">
                        <h5 class="subjudul2">Mereka yang percaya pada kami</h5>
                    </div>
                    <vueper-slides class="no-shadow" 
                        autoplay 
                        :visible-slides="6" 
                        slide-multiple 
                        :gap="3" 
                        :slide-ratio="1 / 4"
                        :dragging-distance="200" 
                        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                        
                        <vueper-slide 
                            v-for="i in 6" 
                            :key="i" 
                            :image="getImage(i)"
                            style="background-size: 100% auto; background-position: center; background-repeat: no-repeat;"
                        />
                    </vueper-slides>
                </v-col>
            </v-row>
            
            <!-- <carousel-3d>
                <slide :index="0">
                    Slide 1 Content
                </slide>
                <slide :index="1">
                    Slide 2 Content
                </slide>
                <slide :index="2">
                    Slide 2 Content
                </slide>
                <slide :index="3">
                    Slide 2 Content
                </slide>
                <slide :index="4">
                    Slide 2 Content
                </slide>
            </carousel-3d> -->

            

        </v-container>
    </div>
</template>
 

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {
        components: {
            Carousel3d,
            Slide,
            VueperSlides, 
            VueperSlide
        },
        data: () => ({
            // slides: [1,2,3,4,5,6,7],
            slides: [
                {
                    title: 'Slide #1',
                    content: 'Slide 1 content.',
                    image : '/images/laptop-phone.png'
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.',
                    image : '/images/laptop-phone.png'
                }
            ]
        }),
        methods: {
            getImage(i) {
                return `/images/home/client/client${i}.png`
            }
        },
    }
</script>