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
                                    <v-form ref="form" id="form-2"  lazy-validation @submit.prevent="handleSubmit(onSubmit)">
                                        <v-row>
                                            <v-col cols="12">
                                                <ValidationProvider rules="required|email" name="email" v-slot="{ errors }">
                                                    <v-text-field v-model="email" label="Email aktif Anda " required outlined class="register-form">
                                                    </v-text-field>
                                                    <span class="mt-1 register-message-error" style="color:red;padding-top:10px">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <ValidationProvider rules="required|integer|min:10" name="phone" v-slot="{ errors }">
                                                    <vue-tel-input v-model="phone" 
                                                        outlined 
                                                        class="register-form" 
                                                        :dropdownOptions = "{showFlags:true, showDialCodeInList:true}"
                                                        :autoFormat="false"
                                                    ></vue-tel-input>
                                                    <span class="mt-1 register-message-error" style="color:red;padding-top:10px">{{ errors[0] }} </span>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <ValidationProvider rules="required|min:4" name="password" v-slot="{ errors }">
                                                    <v-text-field
                                                        v-model="password"
                                                        label="Kata Sandi"
                                                        :append-icon="visibility1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                        @click:append="() => (visibility1 = !visibility1)"
                                                        :type="visibility1 ? 'password' : 'text'"
                                                        outlined
                                                        class="register-form"
                                                    ></v-text-field>
                                                    <span class="mt-1 register-message-error" style="color:red;padding-top:10px">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <ValidationProvider rules="required|confirmed:password" name="confirm_password" v-slot="{ errors }">
                                                    <v-text-field
                                                        v-model="confirm_password"
                                                        label="Ulangi Kata Sandi"
                                                        :append-icon="visibility2 ? 'mdi-eye' : 'mdi-eye-off'"
                                                        @click:append="() => (visibility2 = !visibility2)"
                                                        :type="visibility2 ? 'password' : 'text'"
                                                        outlined
                                                        class="register-form"
                                                    ></v-text-field>
                                                    <span class="mt-1 register-message-error" style="color:red;padding-top:10px">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </ValidationObserver>
                            </v-list-item>
                            <v-list-item class=" d-flex justify-center mt-5">
                                <v-btn class="ma-2 register-btn-email" outlined color="blue" type="submit" form="form-2">
                                    <div class="register-btn-text" style="color:white">
                                        Buat akun
                                    </div>
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
import LoginHere from './../Login/LoginHere.vue';
import { extend } from 'vee-validate';
import { required, email, min, confirmed, integer } from 'vee-validate/dist/rules';

// No message specified.
extend('min', {
    ...min,
    message : `The {_field_} field must be at least {length} characters`
});

extend('integer', {
    ...integer,
    message : `The {_field_} field must be an integer`
});

extend('confirmed', {
    ...confirmed,
    message: 'The password confirmation does not match.'
});

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required'
});

extend('email', email);

export default {
    props : ['step'],
    components : {
        LoginHere
    },
    data() {
        return {
            defaultCountry : '+62',
            items : [],
            phone: null,
            visibility1 : String,
            visibility2 : String,
            email : null,
            password : null,
            confirm_password : null
        }
    },
    created() {
        let data = this.$parent.credentials;
        this.email = data.email
        this.phone = data.phone
        this.password = data.password
        this.confirm_password = data.password
        console.log(this.phone)
    },
    methods: {
        onSubmit () {
            this.pushToCredential()
            this.$emit('nextStep');
        },
        pushToCredential() {
            let data = {
                email : this.email,
                phone : this.phone,
                password : this.password
            }

            this.$emit('updateCredentials', data);
        }
    },
}
</script>