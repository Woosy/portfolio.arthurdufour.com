<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary bg-gradient-default shape-skew alpha-4">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
    <section class="section section-skew">
      <div
        class="container"
        style="margin-top: -350px"
      >
        <card
          shadow
          class="card-profile mt--200"
          no-body
          :hover="false"
        >
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      v-lazy="'img/brand/rgpd.jpg'"
                      class="rounded-circle"
                    >
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <a
                    href="https://cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <base-button
                      type="info"
                      size="sm"
                      class="mr-4"
                    >
                      Site officiel
                    </base-button>
                  </a>
                  <a
                    href="https://www.google.com/search?q=données%20personnelles"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <base-button
                      type="default"
                      size="sm"
                      class="float-right"
                    >
                      Rechercher
                    </base-button>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">10</span>
                    <span class="description">Articles</span>
                  </div>
                  <div>
                    <span class="heading">5</span>
                    <span class="description">Alertes</span>
                  </div>
                  <div>
                    <span class="heading">89</span>
                    <span class="description">Commentaires</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>
                Veille juridique
              </h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2" />par Arthur Dufour
              </div>
              <div class="h4 mt-4">
                <i class="ni business_briefcase-24 mr-2" />RGDP
              </div>
              <div><i class="ni education_hat mr-2" />La protection des données personnelles en Europe.</div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>
                    Dans un secteur où les choses évoluent en permanence, et ce extrêmement rapidement, il est important de se tenir à jour sur l'actualité d'une technologie. D'où l'importance d'effectuer une veille technologique.
                    <br>
                    Cette veille consiste à surveiller les évolutions et inovations dans un secteur d’activité donnée. Elle comprend notamment la surveillance, la collecte, le partage et la diffusion d’information permettant d’anticiper ou de s’informer sur des changements en matière de recherche, développement, brevets, lancement de nouveaux produits, concepts etc...
                  </p>

                  <a
                    v-show="!afficherSuite"
                    class="nav-link"
                    @click="afficherSuite = true"
                  >Afficher la suite</a>
                </div>
              </div>

              <!-- v-show doesn't work ?? -->
              <div
                v-if="afficherSuite"
                class="row justify-content-center mt-4"
              >
                <div class="col-lg-9">
                  <iframe
                    src="//www.pearltrees.com/arthurdufour/rgpd-donnees-personnelles/id24809547?embed=2&d=201904241033"
                    width="400"
                    height="310"
                    style="border:0px;"
                    allowtransparency="true"
                  /><span style="display:block; padding-top:2px; color:#818181; font-size:13px;"><a
                    href="http://www.pearltrees.com/arthurdufour/rgpd-donnees-personnelles/id24809547"
                    style=" color:#818181; font-size:13px;"
                    target="_blank"
                  /><a
                    href="http://www.pearltrees.com/arthurdufour"
                    style=" color:#818181; font-size:13px;"
                    target="_blank"
                  >Accéder à mon dossier Pearltrees</a></span>

                  <a
                    v-show="afficherSuite"
                    class="nav-link mt-4"
                    @click="afficherSuite = false"
                  >Réduire</a>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import Card from '@/components/Card.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    Card,
    BaseButton
  },
  data: function () {
    return {
      afficherSuite: false
    }
  }
}
</script>
<style scoped>
.nav-link {
  color: #899aff !important;
}
.nav-link:hover {
  color: #6275e2 !important;
  cursor: pointer !important;
  text-decoration: underline !important;
}
</style>
