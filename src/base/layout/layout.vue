<script lang="ts" setup>
  import { RouterView, useRoute } from "vue-router";
  import { computed, onMounted } from "vue";
  import NavbarComponents from "../../ui/components/navbar.vue";
  import FooterComponents from "../../ui/components/footer.vue";
</script>

<template>
  <div class="layout">
    <header class="header">
      <NavbarComponents />
    </header>

    <main class="main">
      <section class="pages">
        <RouterView />
      </section>
    </main>

    <footer class="footer">
      <FooterComponents />
    </footer>
  </div>
</template>

<style scoped src="../style/layout.css"></style>
