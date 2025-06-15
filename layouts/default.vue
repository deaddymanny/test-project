<script setup lang="ts">
import { ClientOnly } from "#components";

let drawer = ref<boolean>(false);
</script>
<template>
  <v-responsive>
    <v-app>
      <v-app-bar title="Название сайта">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <ClientOnly>
        <v-navigation-drawer v-model="drawer" location="right">
          <v-list nav>
            <v-list-item title="Главная" to="/" link></v-list-item>
            <v-list-item title="Кабинет" to="/cabinet" link></v-list-item>
          </v-list>
        </v-navigation-drawer>
      </ClientOnly>
      <v-main>
        <v-container>
          <slot></slot>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
