<template>
  <section>
    <div class="position-relative">
      <!-- ======================================================= -->
      <!-- == index section - hero                                 -->
      <!-- ======================================================= -->
      <div class="section-hero section-shaped my-0">
        <!-- background circles -->
        <div class="shape shape-style-1 shape-primary">
          <span class="span-150 floating" />
          <span class="span-50 floating" />
          <span class="span-50 floating" />
          <span class="span-75 floating" />
          <span class="span-100 floating" />
          <span class="span-75 floating" />
          <span class="span-50 floating" />
          <span class="span-100 floating" />
          <span class="span-50 floating" />
          <span class="span-100 floating" />
        </div>

        <div class="container shape-container d-flex align-items-center">
          <div class="col px-0">
            <div class="row justify-content-center align-items-center">
              <!-- main -->
              <div
                class="col-lg-7 text-center pt-lg"
                style="margin-top: -75px"
              >
                <!-- title -->
                <h1 id="title" />
                <!-- description -->
                <p class="lead text-white mt-4 mb-5">
                  Mon portfolio pour l'épreuve E6 du BTS SIO parcours SLAM !
                </p>
                <!-- buttons -->
                <div class="btn-wrapper">
                  <!-- contact button -->
                  <base-button
                    tag="a"
                    href="https://arthurdufour.com"
                    class="btn-lg mb-3 mb-sm-0"
                    type="white"
                    icon="fa fa-envelope"
                  >
                    Retour à l'accueil
                  </base-button>
                  <!-- github button -->
                  <a
                    href="https://github.com/Woosy/"
                    target="_blank"
                    class="btn btn-lg btn-github btn-icon mb-sm-0"
                  >
                    <span class="btn-inner--icon"><i class="fa fa-github" /></span>
                    <span class="btn-inner--text">
                      Visitez ma page <span class="text-warning">GitHub</span></span>
                  </a>
                </div>
              </div>

              <!-- built with argon by creative tim -->
              <div
                class="align-items-center justify-content-around col-sm-4"
                style="text-align: center; margin: 5em"
              >
                <span class="text-white alpha-7">Fièrement développé avec</span><br>
                <img
                  src="img/brand/white.png"
                  style="height: 22px; margin-top: -3px"
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ======================================================= -->
      <!-- == about section - presentation of myself               -->
      <!-- ======================================================= -->
      <div
        class="container"
        style="margin-top: 5rem; margin-bottom: 5rem"
      >
        <div class="row row-grid align-items-center">
          <!-- Présentation -->
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex px-3">
              <div class="col-lg-16 text-center">
                <h2 class="display-3">
                  A propos de moi<span class="text-warning">Étudiant en ingénierie informatique</span>
                </h2>
                <div class="icon icon-lg icon-shape icon-shape-warning  rounded-circle mt-2 mb-0">
                  <i class="ni ni-settings" />
                </div>

                <p class="lead">
                  Je suis actuellement étudiant en deuxième année à l'EPSI, où je compte achever un Bac+5, ainsi qu'un BTS SIO parcours SLAM en parallèle.
                  Passionné par le développement, je n'hésite pas à me plonger dans tout ce qui me passe sous la
                  main.<br>
                  Ce site web présente le travail que j'ai effectué dans le cadre de la préparation au BTS SIO.<br>
                </p>
              </div>
            </div>
          </div>
          <!-- Image vectorisée (droite) -->
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5 mb-4">
              <img
                src="img/theme/man-with-computer.svg"
                class="img-center img-fluid"
              >
              <a
                href="img/public/resume-arthurdufour.pdf"
                target="_blank"
              >
                <button
                  class="btn btn-icon btn-3 btn-primary img-center mt-5"
                  type="button"
                >
                  <span class="btn-inner--icon"><i class="fa fa-file-text-o" /></span>
                  <span class="btn-inner--text">Voir mon CV</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- ======================================================= -->
      <!-- == about section - presentation of the BTS SIO          -->
      <!-- ======================================================= -->
      <section class="section section section-shaped my-0 overflow-hidden text-white">
        <div class="shape shape-style-1 bg-gradient-primary shape-skew">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div class="container py-0">
          <div
            class="container"
            style="margin-bottom: 125px"
          >
            <div class="row row-grid align-items-center">
              <div class="col-md-6 order-md-2">
                <img
                  src="img/theme/promo-1.png"
                  class="img-fluid floating"
                >
              </div>
              <div class="col-md-6 order-md-1">
                <div class="pr-md-5">
                  <div class="icon icon-lg icon-shape icon-shape-white rounded-circle shadow mt-2 mb-5">
                    <i class="ni ni-settings" />
                  </div>

                  <h3>A propos du BTS SIO</h3>
                  <p class="text-justify">
                    Le BTS SIO (Services Informatiques aux Organisations), créé en 2011, est le nouveau BTS IG (Informatique de Gestion). Il forme à la mise en place de solutions informatiques au sein des entreprises et propose 2 options : SISR « Solutions d’Infrastructure, Systèmes et Réseaux » et SLAM « Solutions Logicielles et Applications Métiers ».
                  </p>
                  <ul class="list-unstyled mt-5">
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <span class="badge mr-3 badge-white badge-circle shadow">
                          <i class="ni ni-settings" />
                        </span>
                        <h6 class="mb-0">
                          Niveau Bac+2
                        </h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <span class="badge mr-3 badge-white badge-circle shadow">
                          <i class="ni ni-settings" />
                        </span>
                        <h6 class="mb-0">
                          Dimplôme reconnu par l'État
                        </h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <span class="badge mr-3 badge-white badge-circle shadow">
                          <i class="ni ni-settings" />
                        </span>
                        <h6 class="mb-0">
                          Préparé en candidat libre
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import TypeIt from 'typeit'
import BaseButton from '../components/BaseButton'

export default {
  components: {
    BaseButton
  },
  mounted () {
    new TypeIt('#title')
      .options({
        speed: 70,
        loop: true
      })
      .type('Bienvenue sur')
      .pause(500)
      .type('<br>mon portfolio !')
      // .pause(1500)
      // .delete(16)
      // .pause(500)
      // .type('mon site perso !')
      .pause(2500)
      .delete()
      .go()
  }
}
</script>

<style scoped>
/* title */
#title {
  font-family: 'Secular One', sans-serif;
  color: white;
  font-size: 34px;
}

/* override section's text color */
.text-white h3 {
  font-weight: 700;
  color: white;
}
.text-white h6 {
  color: white;
}
</style>
