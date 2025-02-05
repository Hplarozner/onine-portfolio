<template>
  <v-app>
    <div>
      <!-- Main Toolbar -->
      <v-card color="grey-lighten-4" rounded="0" flat>
        <v-toolbar density="compact">
          <v-toolbar-title class="font-weight-bold">Hplar Ozner</v-toolbar-title>

          <v-spacer></v-spacer>

          <!-- Desktop Navigation Buttons -->
          <v-btn
            v-for="btn in nav"
            :key="btn.title"
            @click="btn.title === 'About' ? scrollToAboutSection() : $router.push(btn.route)"
            class="d-none d-md-flex"
          >
            {{ btn.title }}
          </v-btn>

          <!-- Mobile Menu Button (Hamburger Icon) -->
           <v-btn icon="mdi-menu" class="d-md-none" @click="drawer = !drawer"/>
        </v-toolbar>
      </v-card>

      <!-- Mobile Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list>
          <v-list-item
            v-for="btn in nav"
            :key="btn.title"
            @click="btn.title === 'About' ? scrollToAboutSection() : (drawer = false, $router.push(btn.route))"
          >
            <v-list-item-title>
              <v-btn text>{{ btn.title }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <slot />
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const nav = ref([
  { title: 'Home', route: '/' },
  { title: 'About', route: '#' }, // Keep this for structure, not used in scroll
  { title: 'Skills', route: '/skills' },
  { title: 'Projects', route: '/projects' },
  { title: 'Contact', route: '/contact' }
]);

const drawer = ref(false);

// Function to scroll to the About section
function scrollToAboutSection() {
   document.getElementById('aboutSection').scrollIntoView();
  // const section = document.querySelector('[ref="aboutSection"]');
  // if (section) {
  //   section.scrollIntoView({ behavior: 'smooth' });
  // }
}
</script>

<style scoped>
/* Additional styles can go here */
</style>
