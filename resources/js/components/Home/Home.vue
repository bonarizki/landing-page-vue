<template>
    <div>
        <NavBar></NavBar>
        <Layout1></Layout1>
        <Layout2></Layout2>
        <Layout3></Layout3>
        <Layout4></Layout4>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavBar from './Navbar.vue';
    import Layout1 from './Layout1.vue';
    import Layout2 from './Layout2.vue';
    import Layout3 from './Layout3.vue';
    import Layout4 from './Layout4.vue';
    import Footer from './Footer.vue';

    export default {
        components : {
            NavBar,
            Layout1,
            Layout2,
            Layout3,
            Layout4,
            Footer,
        },
        
    }
</script>