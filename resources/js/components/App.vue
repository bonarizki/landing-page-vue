<template>
    <v-app>
        <v-main>
            <v-row>
                <v-col cols="12">
                    <div class="content">
                        <router-view></router-view>
                    </div>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet');
    /* .v-main__wrap{
      background: linear-gradient(94.5deg, #5EAFFF 0%, #007CD6 100%) !important;
      height: 50%;
    }, */
    .landing-page {
        background: white !important;
        height: 100%;
    }

    .nav-bar {
        background: white !important;
        height: 100%;
    }

    .layout1 {
        /* position: absolute; */
        background: white !important;
        height: 100%;
        width: 100%;
    }

    .judul {
        /* position: absolute; */

        font-family: 'Poppins' !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 44px !important;
        line-height: 66px !important;


        /* black text */

        color: #383838;
    }

    .subjudul {

        font-family: 'Poppins' !important;
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 16px !important;
        line-height: 32px !important;
        /* or 200% */

    }

    .subjudul2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
    }

    .card-l3 {
        font-family: 'Poppins' !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 28px !important;
        line-height: 42px !important;
        /* identical to box height */

        align-items: center !important;
        text-align: center !important;
    }

    .price {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
    }

    .layout2 {
        height: 100%;
        width: 100%;
    }

    .register{
        width: 100%;
        height: 50vh;
        background-image: url('/images/register/bg.png');
        /* background-color: black; */
        background-size: 100% auto; 
        background-position: top; 
        background-repeat: no-repeat;
    } 

    .register-h1{
        font-family: 'Poppins' !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 36px !important;
        line-height: 54px !important;
    }

    .register-btn-sosmed{
        box-sizing: border-box !important;

        width: 427px !important;
        height: 54px !important;
        /* White */

        background: #FFFFFF;
        border-radius: 10px;
    }

    .register-btn-email{
        width: 427px !important;
        height: 54px !important;
        /* omnicolor */

        background: linear-gradient(315deg, #0157AB 0%, #0099E8 100%) !important;
        border-radius: 10px !important;
        color:white !important;
    }

    .register-btn-text{
        font-family: 'Poppins' !important;
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 16px !important;
        line-height: 24px !important;
        /* identical to box height */

        text-align: center !important;
        color:black;
    }

    .register-form{
        box-sizing: border-box;

        width: 427px;
        height: 54px;

        background: #FFFFFF;
        border-radius: 10px;
    }

    .register-label{
        position: absolute;
        width: 422.58px;
        height: 21px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
    }

    .register-text-beranda{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
        


        /* White */

        color: #FFFFFF;
    }

    .v-messages, .register-message-error{
        font-family: 'Poppins' !important;
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 14px !important;
        line-height: 21px !important;
    }

    .country-code{
        margin-right: 30px !important;
        border-radius: 10px !important;
        width: 427px;
        height: 54px;
        box-sizing: border-box;
    }

    .v-text-field{
        border-radius: 10px !important;
        width: 427px;
        height: 54px;
        box-sizing: border-box;
    }

    .ct {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        /* or 200% */

    }

    .layout4 {
        background: #00366a !important;
        height: 100%;
    }

    .footerLP {
        background: white !important;
        height: 100%;
    }

    .layout3 {
        background: linear-gradient(94.5deg, #5EAFFF 0%, #007CD6 100%) !important;
        height: 100%;
    }

    .judul4 {
        font-family: 'Poppins' !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 40px !important;
        line-height: 60px !important;
        text-align: center !important;
    }

    /* .v-input--switch__track, .theme--light {
        color:red !important;
    } */

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    body {
        background: white;
    }

    .v-application--wrap {
        background: #eef8ff;
    }

    .v-list {
        padding: 0px !important;
    }

    .primaryFont {
        color: #282B4D !important;
    }

    .secondaryFont {
        color: #8B919F !important;
    }

    .bg-navbar,
    .bg-footerNavigation {
        background: linear-gradient(94.5deg, #5EAFFF 0%, #007CD6 100%) !important;
    }

    .align-end {
        text-align: end;
    }

    .line-cardSheet {
        border-left-style: solid;
        border-left-width: thick;
    }

    .line-cardSheet.line-orange {
        border-left-color: #F2994A;
    }

    .line-cardSheet.line-red {
        border-left-color: #EB5757;
    }

    .line-cardSheet.line-lightblue {
        border-left-color: #56CCF2;
    }

    .line-cardSheet.line-green {
        border-left-color: #219653;
    }

    .line-cardSheet.line-purple {
        border-left-color: #9B51E0;
    }

    .line-cardSheet.line-blue {
        border-left-color: #2D9CDB;
    }

    .text-white {
        color: white;
    }

    .br-6 {
        border-radius: 6px;
    }

    .br-8 {
        border-radius: 8px;
    }

    .br-10 {
        border-radius: 10px;
    }

    .br-12 {
        border-radius: 12px;
    }

    /* -- */
    .pt-30 {
        padding-top: 30px !important;
    }

    .pt-50 {
        padding-top: 50px !important;
    }

    .pr-50 {
        padding-right: 50px !important;
    }

    .pl-50 {
        padding-left: 50px !important;
    }

    .mt-0 {
        margin-top: 0px !important;
    }

    .mt-1 {
        margin-top: 1px !important;
    }

    .mt-2 {
        margin-top: 2px !important;
    }

    .mt-5 {
        margin-top: 5px !important;
    }

    .mt-8 {
        margin-top: 8px !important;
    }

    .mt-10 {
        margin-top: 10px !important;
    }

    .mb-5 {
        margin-bottom: 5px !important;
    }

    .mr-5 {
        margin-right: 5px !important;
    }

    .ml-5 {
        margin-left: 5px !important;
    }

    .mx-2 {
        margin-left: 2px !important;
        margin-right: 2px !important;
    }

    .mx-5 {
        margin-left: 5px !important;
        margin-right: 5px !important;
    }

    .my-5 {
        margin-top: 5px !important;
        margin-bottom: 5px !important;
    }

    .my-7 {
        margin-top: 7px !important;
        margin-bottom: 7px !important;
    }

    .my-8 {
        margin-top: 8px !important;
        margin-bottom: 8px !important;
    }

    .my-10 {
        margin-top: 10px !important;
        margin-bottom: 10px !important;
    }

    /* -- */
    .br-20 {
        border-radius: 20px !important;
    }

    .ft-12 {
        font-size: 12px !important;
    }

    .ft-13 {
        font-size: 13px !important;
    }

    .ft-14 {
        font-size: 14px !important;
    }

    .v-toolbar__content {
        height: 0px !important;
    }

    .v-sheet {
        background: white !important;
    }

    @media (min-width: 1264px) {
        .container {
            max-width: 1350px;
        }
    }
</style>
