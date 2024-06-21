<template>
    <div class="login-page">
        <div class="login-page-container">
            <article class="login-page__text">
                <h1 class="login-page__title">Authorization</h1>
                <p v-if="errorMessage" class="login-page__error-message">{{ errorMessage }}</p>
            </article>
            <form class="login-page__form" @submit.prevent="handleSubmit">
                <div class="form__container">
                    <p class="form__title">Login</p>
                    <input class="form__input" type="text" v-model="username" name="username"/>
                </div>
                <div class="form__container">
                    <p class="form__title">Password</p>
                    <input class="form__input" type="password" v-model="password" name="password"/>
                </div>
                <button class="form__button" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import router from "@/router/index.js";

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSubmit = () => {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            expiresInMins: 1
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('id', data.id);
                errorMessage.value = ''
                router.push('/Profile')
            } else {
                errorMessage.value = 'Invalid credentials';
            }
        })
};
</script>

<style>
.login-page{
    display: flex;
    justify-content: center;
    padding-top: 145px;
    padding-bottom: 92px;
}
.login-page-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    width: 335px;
    border-radius: 10px;
    box-shadow: 0 3px 9px 0 #00000030;
    padding-bottom: 43px;
}
.login-page__text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 16px;
 }
.login-page__title{
    font-size: 16px;
    padding-left: 16px;
}
.login-page__error-message{
    color: red;
    font-weight: 500;
    padding-right: 13px;
}
.login-page__form{
    display: flex;
    flex-direction: column;
    gap: 13px;
}
.form__container{
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.form__title{
    font-size: 14px;
    color: #00000099;
}
.form__input{
    width: 136px;
    height: 29px;
    border: none;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 3px 9px 0 #00000030;
    outline: none;
    padding-left: 16px;
}
.form__button{
    border: none;
    background-color: white;
    margin-top: 7px;
    color: #00000099;
    font-size: 14px;
}
</style>
