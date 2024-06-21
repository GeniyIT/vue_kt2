<template>
    <div class="profile-page">
        <h1 v-if="isLoading" class="profile-page__loading">Loading...</h1>
        <h1 v-else-if="error" class="profile-page__error">{{ error }}</h1>
        <div v-else class="profile-page__content">
            <div class="content-text">
                <h1 class="content-title">My profile</h1>
                <div class="content-data__list">
                    <div class="content-data__item">
                        <p>Username: {{ thisUsers.username }}</p>
                    </div>
                    <div class="content-data__item">
                        <p>Name: {{ thisUsers.firstName }}</p>
                    </div>
                    <div class="content-data__item">
                        <p>Lastname: {{ thisUsers.lastName }}</p>
                    </div>
                    <div class="content-data__item">
                        <p>Gender: {{ thisUsers.gender }}</p>
                    </div>
                    <div class="content-data__item">
                        <p>Email: {{ thisUsers.email }}</p>
                    </div>
                </div>
            </div>
            <figure class="content-image">
                <img :src="thisUsers.image" />
            </figure>
        </div>
    </div>
</template>

<script setup>
import {ref, watch} from "vue";
import router from "@/router/index.js";

const thisUsers = ref({})
let error = ref('')
const isLoading = ref(true)
const token = localStorage.getItem('token');
let route = ref(false)

fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
        'Authorization': token,
    },
})
    .then(res => res.json())
    .then(data => {
        isLoading.value = false;
        if(token || data.name){
            error.value = data.name
            console.log(error.value, data.name)
        }
        if(!token){
            route.value = true
        }
        else {
            thisUsers.value = data
        }
    })

watch(route, (newVal, oldVal) => {
    if(newVal === true){
        router.push('/Login')
    }
})
</script>

<style>
.profile-page{
    display: flex;
    justify-content: center;
    padding-top: 51px;
    padding-bottom: 87px;
}

.profile-page__content{
    display: flex;
    gap: 110px;
}
.content-text{
    display: flex;
    flex-direction: column;
    gap: 50px;
}
.content-title{
    font-size: 44px;
}
.content-data__list{
    display: flex;
    flex-direction: column;
    gap: 11px;
}
.content-data__item{
    display: flex;
    align-items: center;
    height: 40px;
    box-shadow: 0 3px 9px 0 #00000030;
    border-radius: 10px;
    width: fit-content;
}
.content-data__item>p{
    font-weight: 700;
    padding-left: 16px;
    padding-right: 20px;
}
.content-image{
    align-self: flex-end;
    height: fit-content;
}
.content-image>img{
    width: 243px;
    height: 243px;
}
</style>
