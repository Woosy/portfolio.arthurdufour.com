<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default bg-gradient-warning shape-skew">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">
                  Second stage - <a
                    href="http://road-b-score.fr"
                    target="_blank"
                    class="text-white"
                    rel="noopener noreferrer"
                  >Road-b-Score</a>
                  <span>Développeur full-stack</span>
                </h1>
                <p class="lead text-white">
                  Road-b-Score est une startup lyonnaise sépcialisée dans
                  l'hyperconnaissance client, le scoring prédictif et les
                  sciences cognitives.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="http://www.road-b-score.fr/"
                    target="_blank"
                    class="mb-3 mb-sm-0"
                    type="primary"
                    icon="fa fa-code"
                  >
                    Site de Road-b-Score
                  </base-button>
                  <base-button
                    tag="a"
                    href="/pdf/rapport-stage-road-b-score-arthur-dufour.pdf"
                    target="_blank"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="ni ni-cloud-download-95"
                  >
                    Rapport de stage
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card
                  class="border-0"
                  hover
                  shadow
                  body-classes="py-5"
                >
                  <h6 class="text-primary text-uppercase">
                    Développement back-end
                  </h6>
                  <p class="description mt-3 text-justify">
                    Développement d'APIs web internes en Node.js
                    en suivant l'architecture RESTful, avec
                    rédaction de tests d'intégrations, envoie
                    de mails etc...
                  </p>
                  <div>
                    <badge
                      type="primary"
                      rounded
                    >
                      Node.js
                    </badge>
                    <badge
                      type="primary"
                      rounded
                    >
                      APIs REST
                    </badge>
                    <badge
                      type="primary"
                      rounded
                    >
                      Tests
                    </badge>
                  </div>
                  <base-button
                    tag="a"
                    href="https://nodejs.org/"
                    target="_blank"
                    type="primary"
                    class="mt-4"
                  >
                    En savoir plus
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card
                  class="border-0"
                  hover
                  shadow
                  body-classes="py-5"
                >
                  <h6 class="text-success text-uppercase">
                    Développement front-end
                  </h6>
                  <p class="description mt-3 text-justify">
                    Développement de plusieurs fronts en utilisant
                    un framework Javascript moderne, à savoir Vue.js,
                    ainsi que la librairie de composants Bootstrap.
                  </p>
                  <div>
                    <badge
                      type="success"
                      rounded
                    >
                      Vue.js
                    </badge>
                    <badge
                      type="success"
                      rounded
                    >
                      Vuex
                    </badge>
                    <badge
                      type="success"
                      rounded
                    >
                      Bootstrap
                    </badge>
                  </div>
                  <base-button
                    tag="a"
                    href="https://vuejs.org/"
                    target="_blank"
                    type="success"
                    class="mt-4"
                  >
                    En savoir plus
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card
                  class="border-0"
                  hover
                  shadow
                  body-classes="py-5"
                >
                  <h6 class="text-warning text-uppercase">
                    SGBD NoSQL
                  </h6>
                  <p class="description mt-3 text-justify">
                    Le cahier des charges des applications développées
                    justifiait l'utilisation d'une base de données NoSQL,
                    à savoir MongoDB.
                  </p>
                  <div>
                    <badge
                      type="warning"
                      rounded
                    >
                      NoSQL
                    </badge>
                    <badge
                      type="warning"
                      rounded
                    >
                      MongoDB
                    </badge>
                    <badge
                      type="warning"
                      rounded
                    >
                      mongoose
                    </badge>
                  </div>
                  <base-button
                    tag="a"
                    href="https://www.mongodb.com/"
                    target="_blank"
                    type="warning"
                    class="mt-4"
                  >
                    En savoir plus
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Card from '@/components/Card.vue'
import Badge from '@/components/Badge.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    Card,
    Badge,
    BaseButton
  },
  data: function () {
    return {
    }
  }
}
</script>
<style scoped>

</style>
