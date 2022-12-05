<template>
    <div>
        <v-container>
            <div>
                <v-row>
                    <v-col>
                        <h1 class="regishter-h1 text-center" style="color:white">Buat akun gratis!</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card class="mx-auto" max-width="698px" height="100%" :elevation="10">
                            <v-list-item class=" d-flex justify-center" style="padding-top:53px">
                                <v-btn class="ma-2 register-btn-sosmed" outlined color="blue">
                                    <v-row>
                                        <v-col cols="1" >
                                            <v-avatar style="height:26px;width:26px">
                                                <img src="/images/register/icon-fb.png">
                                            </v-avatar>
                                        </v-col>
                                        <v-col cols="11" class="d-flex justify-center align-center text-center"
                                            style="">
                                            <div class="register-btn-text">Daftar dengan akun Facebook</div>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-list-item>
                            <v-list-item class=" d-flex mt-2 justify-center">
                                <v-btn class="ma-2 register-btn-sosmed" outlined color="blue">
                                    <v-row>
                                        <v-col cols="1">
                                            <v-avatar style="height:26px;width:26px">
                                                <img src="/images/register/icon-google.png">
                                            </v-avatar>
                                        </v-col>
                                        <v-col cols="11" class="d-flex justify-center align-center text-center"
                                            style="">
                                            <div class="register-btn-text">Daftar dengan akun Google</div>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-list-item>
                            <v-list-item class=" d-flex mt-2 justify-center">
                                <div class="register-btn-text text-center align-center">
                                    atau
                                </div>
                            </v-list-item>
                            <v-list-item class=" d-flex mt-2 justify-center">
                                <v-btn class="ma-2 register-btn-email" outlined color="blue"  @click="$emit('nextStep')">
                                    <v-row>
                                        <v-col cols="1">
                                            <v-avatar style="height:26px;width:26px">
                                                <v-icon style="color:white">mdi-email-box</v-icon>
                                            </v-avatar>
                                        </v-col>
                                        <v-col cols="11" class="d-flex justify-center align-center text-center"
                                            style="">
                                            <div class="register-btn-text" style="color:white">Daftar dengan Email</div>
                                        </v-col>
                                    </v-row>
                                </v-btn>
                            </v-list-item>
                            <v-list-item class=" d-flex mt-2 mb-2 justify-center">
                                <LoginHere></LoginHere>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import  LoginHere from './../Login/LoginHere.vue';

export default {
    props : ['step'],
    components : {
        LoginHere
    },
}
</script>