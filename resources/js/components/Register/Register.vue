<template>
    <div class="register">
        <v-row>
            <v-col cols="1">
                <router-link :to="{name: 'home'}">
                    <v-img alt="App Logo" class="shrink mr-2" contain src="/images/home/logo_toschat_white.svg"
                        transition="scale-transition" width="140" height="100" />
                </router-link>
            </v-col>
            <v-col cols="1" class="d-flex justify-center align-center">
                <router-link :to="{name: 'home'}">
                    <h1 class="register-text-beranda">Beranda</h1>
                </router-link>
            </v-col>
        </v-row>
        <template v-if="this.step == 1">
            <RegisterStepOne 
                @nextStep="nextStep" 
            ></RegisterStepOne>
        </template>
        <template v-else-if="this.step == 2">
            <RegisterStepTwo 
                @nextStep="nextStep" 
                @backPrevStep="backPrevStep"
                @updateCredentials="updateCredentials"
            ></RegisterStepTwo>
        </template>
        <template v-else>
            <RegisterStepThree 
                @backPrevStep="backPrevStep"
                @updateCredentials="updateCredentials"
                @processRegister="processRegister"
            ></RegisterStepThree>
        </template>
    </div>
</template>

<script>
import RegisterStepOne from './RegisterStepOne.vue';
import RegisterStepTwo from './RegisterStepTwo.vue';
import RegisterStepThree from './RegisterStepThree.vue';

export default {
    components : {
        RegisterStepTwo,
        RegisterStepOne,
        RegisterStepThree
    },
    data: () => ({
        step : 1,
        tempStep : null,
        credentials : {}
    }),
    created() {
        this.tempStep = this.step
    },
    methods: {
        backPrevStep() {
            this.tempStep = this.tempStep - 1
            this.step = this.tempStep;
        },
        nextStep() {
            this.tempStep = this.tempStep + 1
            this.step = this.tempStep;
        },
        updateCredentials(arrData) {
            //proses menggabungkan object
            this.credentials = {
                ...this.credentials,
                ...arrData
            }
        },
        processRegister(){
            console.log(this.credentials)
            alert(this.credentials)
        }
    },
    
}
</script>