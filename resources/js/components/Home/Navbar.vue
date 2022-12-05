<template>
    <div class="nav-bar">
        <v-app-bar app style="backgroud:white !important;" elevation="0">
            <template v-slot:extension >
                <v-row min-width="360" align-center class="mt-2">
                    <v-col cols="6" class="d-flex" style="padding-left:50px">
                        <router-link :to="{name: 'home'}">
                        <v-img alt="App Logo" class="shrink mr-2" contain src="/images/home/logo_toschat.png"
                            transition="scale-transition" width="140" height="50" />
                        </router-link>
                    </v-col>
                    <v-col cols="6" style="padding-right:50px">
                        <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex d-flex align-end flex-column" >
                            <v-tabs-slider color="blue"></v-tabs-slider>
                            <router-link :to="{name: item}" v-for="item in menus" :key="item" style="text-decoration: none;">
                                <v-tab  style="text-decoration: none;">
                                        {{item}}
                                </v-tab>
                            </router-link>
                        </v-tabs>
                    </v-col>
                </v-row>
            </template>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        tab: null,
        menus: [
            'home', 'login', 'register'
        ],
    })
}
</script>