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
                PPE n°3 - ScanMeds
              </h2>
              <p class="lead text-white">
                ScanMeds est une application mobile permettant à ses utilisateurs de scanner un code-barre sur une boîte de médicament, et ainsi d'accéder à toutes les inforamations le concernant.
              </p>
            </div>
          </div>
          <div class="row row-grid mt-5">
            <div class="col-lg-4">
              <icon
                name="ni ni-settings"
                size="lg"
                gradient="white"
                shadow
                round
                color="primary"
              />
              <h5 class="text-white mt-3">
                Application hybride
              </h5>
              <p class="text-white mt-3">
                ScanMeds est développée en Flutter.<br>
                Ce framework open-source permet le développement d'application native à la fois IOS & Android.
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
                Simple d'utilisation
              </h5>
              <p class="text-white mt-3">
                Une fois l'application installée, vous pouvez scanner n'importe quelle boîte de médicament avec l'objectif de votre smartphone !
              </p>
            </div>
            <div class="col-lg-4">
              <icon
                name="ni ni-atom"
                size="lg"
                gradient="white"
                shadow
                round
                color="primary"
              />
              <h5 class="text-white mt-3">
                Informations 100% sûres
              </h5>
              <p class="text-white mt-3">
                Les données affichées par ScanMeds proviennent de la <a
                  href="http://base-donnees-publique.medicaments.gouv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white text-underline"
                >base de données publique des médicaments</a>, créée par le gouvernement.
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
                      Application mobile IOS et Android.
                    </h3>
                    <p class="lead text-white mt-3">
                      ScanMeds est disponible sous IOS et sous Android, mais n'était ni sur l'AppStore ni sur le Play Store pour des raison financières, vous devrez passer par ses sources pour l'installer.
                    </p>
                  </div>
                  <div class="col-lg-3 ml-lg-auto">
                    <base-button
                      tag="a"
                      href="https://github.com/Woosy/scanmeds"
                      target="_blank"
                      type="white"
                      block
                      size="lg"
                    >
                      Accéder aux sources
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
                <div
                  class="row justify-content-center"
                  style="margin-top: 30px"
                >
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
