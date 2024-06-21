<template>
    <div class="users-page">
        <div class="users-list">
            <div class="users-list__item" v-for="user in users.slice(0, 8)" :key="user.id">
                <h1 class="users-list__name">{{user.firstName + user.lastName + user.maidenName}}</h1>
                <p class="users-list__email">{{user.email}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {inject} from "vue";

const users = inject('users')
</script>

<style>
.users-page{
    display: flex;
    justify-content: center;
    padding-top: 71px;
    padding-bottom: 17px;
}
.users-list{
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.users-list__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 9px 0 #00000030;
    border-radius: 10px;
    padding-left: 16px;
    padding-right: 20px;
    height: 56px;
    width: 500px;
}
.users-list__name{
    font-size: 16px;
}
.users-list__email{
    font-size: 14px;
    color: #00000099;
}
</style>
