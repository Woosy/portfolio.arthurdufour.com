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
        <div class="container shape-container  d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">
                  Premier stage - <a
                    href="https://teepy-entrepreneur.com"
                    target="_blank"
                    class="text-white"
                    rel="noopener noreferrer"
                  >TeePy</a>
                  <span>Développeur web stagiaire</span>
                </h1>
                <p class="lead text-white">
                  TeePy est un réseau professionnel et une plateforme de services pour les artisans, les commerçants, les auto-entrepreneurs, les professions libérales et les dirigeants de très petites entreprises.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="https://www.teepy-entrepreneur.com/"
                    target="_blank"
                    class="mb-3 mb-sm-0"
                    type="danger"
                    icon="fa fa-code"
                  >
                    Site de TeePy
                  </base-button>
                  <base-button
                    tag="a"
                    href="/pdf/rapport-stage-teepy-arthur-dufour.pdf"
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
                    Certaines tâches ont nécéssité des développements
                    côté serveur, telles que le traitement de formulaires
                    pour insertion en base de données...
                  </p>
                  <div>
                    <badge
                      type="primary"
                      rounded
                    >
                      PHP
                    </badge>
                    <badge
                      type="primary"
                      rounded
                    >
                      Ajax
                    </badge>
                    <badge
                      type="primary"
                      rounded
                    >
                      SQL
                    </badge>
                  </div>
                  <base-button
                    tag="a"
                    href="https://www.php.net/"
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
                    J'ai également eu à intégrer plusieurs maquettes,
                    nécéssitant la création d'animations, tout en visant
                    une expérience utilisateur optimale.
                  </p>
                  <div>
                    <badge
                      type="success"
                      rounded
                    >
                      HTML/CSS
                    </badge>
                    <badge
                      type="success"
                      rounded
                    >
                      Javascript
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
                    href="https://getbootstrap.com/"
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
                    Utilisation d'un CMS
                  </h6>
                  <p class="description mt-3 text-justify">
                    Afin de faciliter le développement et de limiter
                    les coûts pour l'entreprise, nous travaillions sur
                    une base d'un CMS WordPress.
                  </p>
                  <div>
                    <badge
                      type="warning"
                      rounded
                    >
                      CMS
                    </badge>
                    <badge
                      type="warning"
                      rounded
                    >
                      WordPress
                    </badge>
                  </div>
                  <base-button
                    tag="a"
                    href="https://fr.wordpress.org/"
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
