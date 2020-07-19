<template>
 <div>
    <v-container>
        <v-alert type="info">I'm Vuetify Component Valert</v-alert>
        <v-btn link to="/foo">Go to Foo</v-btn>
        <v-btn to="/bar">Go to Bar</v-btn>
        <v-btn to="/user/SujonAhmed">Go to User</v-btn>
    </v-container>
    <v-content>
          <router-view></router-view>
    </v-content>
 </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
