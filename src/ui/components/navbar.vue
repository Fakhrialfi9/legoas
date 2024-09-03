<script setup lang="ts">
  import LogoLegoas from "../../../public/media/logo/logo.png";
  import { navbarCenter, navbarRight } from "../../data/components/navbar.js";
  import { ref } from "vue";

  // State untuk navbar
  const navbarCenters = ref(navbarCenter);
  const navbarRights = ref(navbarRight);
</script>

<template>
  <nav class="navbar">
    <div class="Container">
      <div class="content">
        <div class="left">
          <img :src="LogoLegoas" alt="Logo" />
        </div>

        <div class="center">
          <ul>
            <li v-for="item in navbarCenters" :key="item.index">
              <router-link :to="item.to">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>

        <div class="right">
          <ul>
            <li v-for="item in navbarRights" :key="item.index">
              <router-link :to="item.to">
                <component :is="item.icon" size="16.5" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style src="../../assets/style/components/navbar.css" scoped></style>
