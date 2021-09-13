<template>
<Header />
    <!-- <h1>This is Home</h1> -->
<Profile />
<Social />
</template>
<script>
import Header from './Header.vue'
import Profile from './Profile.vue'
import Social from './Social.vue'
export default {
    name:'Home',
    components:{Profile,Social,Header}
}
</script>