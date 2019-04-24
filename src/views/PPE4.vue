<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default bg-gradient-primary shape-skew">
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
        <div
          class="container pt-lg pb-300"
          style="padding-top: 175px !important"
        >
          <div class="row text-center justify-content-center">
            <div class="col-lg-10">
              <h2 class="display-3 text-white">
                PPE n°4 - ScanMeds' Web Dashboard
              </h2>
              <p class="lead text-white">
                Pour accompagner notre application mobile ScanMeds, nous avons développé un tableau de bord sous forme de site web, qui permet de centraliser les informations d'ordre médical de ses utilisateurs.
              </p>
            </div>
          </div>
          <div class="row row-grid mt-5 justify-content-center">
            <div class="col-lg-4">
              <icon
                name="ni ni-settings"
                size="lg"
                gradient="white"
                shadow
                round
                color="primary"
                class=""
              />
              <h5 class="text-white mt-3">
                Informations médicaments
              </h5>
              <p class="text-white mt-3">
                Vous pourrez retrouver toutes les informations que vous souhaitez sur l'intégralité des médicaments commercialisés en France.
              </p>
            </div>
            <div class="col-lg-4">
              <icon
                name="ni ni-ruler-pencil"
                size="lg"
                gradient="white"
                shadow
                round
                color="primary"
              />
              <h5 class="text-white mt-3">
                Dossier médical
              </h5>
              <p class="text-white mt-3">
                Constituez votre dossier médical, accessible par vos médecins, et centralisez ainsi l'intégralité des informations concernant votre santé. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-lg pt-0">
        <div class="container container-lg">
          <div class="row mt--200">
            <div class="col-md-6 mb-5 mb-md-0">
              <div class="card card-lift--hover shadow border-0">
                <img
                  v-lazy="'img/theme/landing.jpg'"
                  class="card-img"
                >
              </div>
            </div>
            <div class="col-md-6 mb-5 mb-lg-0">
              <div class="card card-lift--hover shadow border-0">
                <img
                  v-lazy="'img/theme/profile.jpg'"
                  class="card-img"
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-lg pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <card
              gradient="default"
              no-body
              shadow-size="lg"
              class="border-0"
            >
              <div class="p-5">
                <div class="row align-items-center">
                  <div class="col-lg-8">
                    <h3 class="text-white">
                     Un seul site web, toutes vos informations
                    </h3>
                    <p class="lead text-white mt-3">
                      ScanMeds a pour but de centraliser l'intégralité de vos informations médicales afin de vous faciliter la vie.
                    </p>
                  </div>
                  <div class="col-lg-3 ml-lg-auto">
                    <base-button
                      tag="a"
                      href="https://scanmeds.arthurdufour.com/"
                      target="_blank"
                      type="white"
                      block
                      size="lg"
                    >
                      Accéder au site
                    </base-button>
                  </div>
                </div>
              </div>
            </card>
          </div>
        </div>
      </section>

      <section class="section section section-shaped my-0 overflow-hidden">
        <div class="shape shape-style-1 bg-gradient-primary shape-skew">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div class="container text-white">
          <div class="row row-grid justify-content-center pb-200">
            <div class="col-lg-8 text-center">
              <h2 class="display-3 text-white">
                Documents divers
              </h2>
              <p class="lead">
                Vous trouverez ci-dessous un ensemble de documents liés à la présentation de ce projet au BTS SIO parcours SLAM.
              </p>
              <div class="text-center">
                <div class="row justify-content-center" style="margin-top: 30px">
                  <div
                    v-b-tooltip.hover.bottom
                    title="Description de la situation professionnelle"
                    class="col-lg-2 col-4"
                  >
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <icon
                        name="fa fa-sticky-note-o"
                        size="lg"
                        gradient="white"
                        shadow
                        round
                        color="primary"
                      />
                    </a>
                  </div>
                  <div
                    v-b-tooltip.hover.bottom
                    title="Tableau des compétences"
                    class="col-lg-2 col-4"
                  >
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <icon
                        name="fa fa-table"
                        size="lg"
                        gradient="white"
                        shadow
                        round
                        color="primary"
                      />
                    </a>
                  </div>
                  <div
                    v-b-tooltip.hover.bottom
                    title="Code source"
                    class="col-lg-2 col-4"
                  >
                    <a
                      href="http://github.com/Woosy/ScanMeds"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <icon
                        name="fa fa-github"
                        size="lg"
                        gradient="white"
                        shadow
                        round
                        color="primary"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import BTooltip from 'bootstrap-vue/es/directives/tooltip/tooltip'
import BPopover from 'bootstrap-vue/es/directives/popover/popover'

import Icon from '@/components/Icon.vue'
import Card from '@/components/Card.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    Icon,
    Card,
    BaseButton
  },
  directives: {
    BPopover,
    BTooltip
  },
  data: function () {
    return {
    }
  }
}
</script>
<style scoped>

</style>
