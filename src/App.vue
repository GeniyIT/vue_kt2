<template>
    <HeaderComponent/>
    <RouterView></RouterView>
    <FooterComponent/>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {provide, ref} from "vue";

const users = ref([]);

    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
            users.value = data.users;
        })

provide('users', users)
</script>

<style>
*{
    font-family: Heebo, sans-serif;
    padding: 0;
    margin: 0;
}

</style>
