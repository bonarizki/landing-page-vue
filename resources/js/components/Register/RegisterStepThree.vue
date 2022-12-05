<template>
    <div>
        <v-container>
            <div>
                <v-row>
                    <v-col>
                        <h1 class="regishter-h1 text-center" style="color:white">Satu langkah terakhir</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card class="mx-auto" max-width="698px" height="100%" :elevation="10">
                            <v-list-item class=" d-flex justify-left pt-5">
                                <v-btn small text color="primary" class="secondaryFont ml-5 mb-5"
                                    @click="$emit('backPrevStep')">
                                    <div class="register-btn-text">
                                        <b>
                                            < Kembali
                                        </b>
                                    </div>
                                </v-btn>
                            </v-list-item>
                            <v-list-item class=" d-flex justify-center">
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <v-form ref="form" id="form-3" lazy-validation @submit.prevent="handleSubmit(onSubmit)">
                                        <v-row>
                                            <v-col cols="12">
                                                <ValidationProvider rules="required|min:3" name="Name" v-slot="{ errors }">
                                                    <div class="register-label">
                                                        <b>Nama Lengkap</b>
                                                    </div><br>
                                                    <v-text-field  label="Nama Lengkap" v-model="name" required outlined class="register-form">
                                                    </v-text-field>
                                                    <span class="mt-1 register-message-error" style="color:red;padding-top:10px">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <ValidationProvider rules="required|min:3" name="Company Name" v-slot="{ errors }">
                                                    <div class="register-label">
                                                        <b>Nama Perusahaan / Bisnis</b>
                                                    </div><br>
                                                    <v-text-field  label="Nama Perusahaan" v-model="companyName" required outlined class="register-form">
                                                    </v-text-field>
                                                    <span class="mt-1 register-message-error" style="color:red;padding-top:10px">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <ValidationProvider rules="required|min:3" name="Company Link" v-slot="{ errors }">
                                                    <div class="register-label">
                                                        <b>Link web perusahaan / Instagram bisnis anda (Optional)</b>
                                                    </div><br>
                                                    <v-text-field  label="Link web perusahaan" v-model="companyLink" required outlined class="register-form">
                                                    </v-text-field>
                                                    <span class="mt-1 register-message-error" style="color:red;padding-top:10px">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <ValidationProvider rules="required" name="info" v-slot="{ errors }">
                                                    <div class="register-label">
                                                        <b>Dari mana anda mengetahui kami?</b>
                                                    </div><br>
                                                    <v-select
                                                        v-model="info"
                                                        :items="items"
                                                        label="Dari mana anda mengetahui kami?"
                                                        required outlined class="register-form"
                                                    ></v-select>
                                                    <span class="mt-1 register-message-error" style="color:red;padding-top:10px">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                        
                                    </v-form>
                                </ValidationObserver>
                            </v-list-item>
                            <v-list-item class=" d-flex justify-center mt-2 mb-5">
                                <v-btn class="ma-2 register-btn-email" outlined color="blue" type="submit" form="form-3">
                                    <div class="register-btn-text" style="color:white">
                                        Buat akun
                                    </div>
                                </v-btn>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import { extend } from 'vee-validate';
import { required, email, min, confirmed, integer } from 'vee-validate/dist/rules';

extend('min', {
    ...min,
    message : `The {_field_} field must be at least {length} characters`
});

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
    data() {
        return {
            items : ["sosmed","iklan","web","teman"],
            value : String,
            name : null,
            companyName : null,
            companyLink : null,
            info : null
        }
    },
    created() {
        let data = this.$parent.credentials;
        this.name = data.name
        this.companyName = data.companyName
        this.companyLink = data.companyLink
        this.info = data.info
    },
    methods : {
        onSubmit () {
           this.register();
        },
        register() {
            let data = {
                name : this.name,
                companyName : this.companyName,
                companyLink : this.companyLink,
                info : this.info
            }

            this.$emit('updateCredentials', data);
            this.$emit('processRegister');
        }
    }
}
</script>