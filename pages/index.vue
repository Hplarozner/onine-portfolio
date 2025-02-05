<template>
  <div>
    <div style="height: 100vh;">
      <v-container fluid class="hero d-flex align-center">
        <v-row class="text-center text-md-left align-center">
          <v-col cols="12" md="6" class="hero-content">
             <Vue3Lottie 
                animation-link="https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json" 
                :height="lottie_hieght" 
              />
            <h1 class="text-h2 font-weight-bold"> Hello Everyone! </h1>
            <p class="text-subtitle-1"> I'm a web developer specializing in unmodern, unscalable web applications. Let's turn your ideas into dream reality! </p>
            <v-btn color="primary" class="mt-4 text-subtitle-1" href="my_pdf.pdf" large download> 
              <template v-slot:prepend>
                <v-avatar size="24px" rounded="0">
                  <v-img
                    alt="Avatar"
                    src="cv.png"
                  ></v-img>
                </v-avatar>
              </template> 
              Download CV 
            </v-btn>
            <v-btn color="orange" class="mt-4 ml-2 text-subtitle-1" large> My Works! </v-btn>

            <div class="mt-2">
              <v-avatar v-for="icon in social_apps" :key="icon" color="white" class="ml-2">
                <v-icon :icon="icon.icon" :color="icon.color" />
              </v-avatar>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="hero-image-wrapper">
            <div class="hero-image"></div>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-row no-gutters
        <v-col cols="12" xl="5" lg="6" md="3" class="d-flex justify-center align-center">
        <Vue3Lottie 
          animation-link="https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json" 
          :height="lottie_hieght" 
        />
      </v-col>
      <v-col cols="12" xl="7" lg="6" md="7" class="d-flex justify-center align-center">
        <div class="text-center text-sm-left pa-4">
          <span class="font-weight-bold hero-text">Hello Everyone!</span>
          <p> I'm a web developer specializing in modern, scalable web applications. Let's turn your ideas into reality! </p>
          <v-btn color="primary" class="mt-4" large>Get Started</v-btn>
        </div>
      </v-col>
      </v-row> -->
    </div>

    <v-divider></v-divider>

    <!-- About Section -->
    <div id="aboutSection" style="height: 100vh;">
      <v-row no-gutters>
        <v-col cols="12" sm="3">
          <Vue3Lottie
            animation-link="https://lottie.host/0ca72e44-48e0-41f1-8d62-cdc6e74d836f/K6l39awhRn.json"
            :height="lottie_hieght"
          />
        </v-col>

        <v-col cols="12" sm="8" class="d-flex justify-center align-center">
          <div class="text-center" >
            <p style="color: #E7EBEC;">
              <u class="font-weight-bold text-h5"> About Me </u>
            </p>
            <p class="mt-3 text-sm-left">
              I’m a passionate and results-driven web developer with expertise in creating dynamic, user-focused web applications.
              With a strong foundation in modern web technologies, I specialize in building scalable, intuitive, 
              and efficient websites and applications that deliver seamless user experiences.
            </p>
          </div>
        </v-col>

        <v-col cols="12" >
          <div class="mt-5 text-center">
            <p class="font-weight-bold text-h5" style="color: #E7EBEC;"> <u> My Expertise </u> </p>
          </div>
          <!-- <div class="d-flex">
            <Vue3Lottie
            animation-link="https://lottie.host/e48a964d-73a4-4224-93ca-4592910eace0/5vz6vW8Haf.json"
            :height="$vuetify.display.sm ? 100 : 700"
            :width="$vuetify.display.sm ? 100 : 700"
          />
           <Vue3Lottie
            animation-link="https://lottie.host/d9d46582-efb0-4ade-8a08-3fed29ad8529/Sc9HLdZfOq.json"
            :height="$vuetify.display.sm ? 100 : 700"
            :width="$vuetify.display.sm ? 100 : 700"
          />
           <Vue3Lottie
            animation-link="https://lottie.host/86d26680-5a5e-49fe-9740-5d37aa87d364/LyDsd7kx0N.json"
            :height="$vuetify.display.sm ? 100 : 700"
            :width="$vuetify.display.sm ? 100 : 700"
          />
          <Vue3Lottie
            animation-link="https://lottie.host/23fbd81c-89ca-4b80-a533-5cf8a965cdf2/t0QpgtFtpv.json"
            :height="$vuetify.display.sm ? 100 : 700"
            :width="$vuetify.display.sm ? 100 : 700"
          />
          <Vue3Lottie
            animation-link="https://lottie.host/0ddc05e4-479a-4a0f-9666-3a7c593ed0c6/GErY1sZqU8.json"
            :height="$vuetify.display.sm ? 100 : 700"
            :width="$vuetify.display.sm ? 100 : 700"
          />
          
          </div> -->
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
 import { useDisplay } from 'vuetify'
const { name } = useDisplay()

definePageMeta({
  layout: 'default',
});

const lottie_hieght = computed(() => {
    switch (name.value) {
      case 'xs': return 600
      case 'sm': return 300
      case 'md': return 500
      case 'lg': return 600
      case 'xl': return 800
      case 'xxl': return 1200
    }
})

const lottie_width = computed(() => {
    switch (name.value) {
      case 'xs': return 100
      case 'sm': return 400
      case 'md': return 500
      case 'lg': return 600
      case 'xl': return 800
      case 'xxl': return 1200
    }
})

const social_apps = ref([
  {
    icon : 'mdi-github',
    link : 'https://github.com/Hplarozner',
    color: ''
  },
  {
    icon : 'mdi-linkedin',
    link : 'https://www.linkedin.com/in/hplarozner/',
    color: 'blue'
  }
])

</script>

<style scoped>
  .hero {
    height: 100vh;
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .hero-image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-image {
    width: 100%;
    height: 100vh;
    background: url('/public/hero.jpg')
      no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 960px) {
    .hero {
      background: url('/public/hero.jpg')
        no-repeat center center;
      background-size: cover;
      color: white;
      text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    }
    .hero-image-wrapper {
      display: none;
    }
  }
</style>
