<template>
  <header class="header-global">
    <base-nav
      class="navbar-main"
      transparent
      type=""
      effect="light"
      expand
    >
      <!-- ============================================== -->
      <!-- == arthurdufour logo                           -->
      <!-- ============================================== -->
      <router-link
        slot="brand"
        class="navbar-brand mr-lg-5"
        to="/"
      >
        <img src="img/brand/logo.png">
      </router-link>

      <!-- responsive logo -->
      <div
        slot="content-header"
        slot-scope="{closeMenu}"
        class="row"
      >
        <div class="col-6 collapse-brand">
          <router-link to="/">
            <img src="img/brand/logo-black.png">
          </router-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu" />
        </div>
      </div>

      <!-- ============================================== -->
      <!-- == navigation                                  -->
      <!-- ============================================== -->

      <!-- Stages -->
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown
          class="nav-item"
          menu-classes="dropdown-menu-xl"
        >
          <a
            slot="title"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-ui-04 d-lg-none" />
            <span class="nav-link-inner--text">Stages</span>
          </a>
          <div class="dropdown-menu-inner">
            <!-- Stage TeePy -->
            <router-link
              to="/stage1"
              class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship" />
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">
                  1ère année - TeePy
                </h6>
                <p class="description d-none d-md-inline-block mb-0">
                  Premier stage en entreprise effectué en mai 2018 dans une startup lyonnaise en tant que développeur web.
                </p>
              </div>
            </router-link>

            <!-- Stage Road-b-Score -->
            <router-link
              to="/stage2"
              class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-ui-04" />
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">
                  2ème année - Road-b-Score
                </h5>
                <p class="description d-none d-md-inline-block mb-0">
                  Stage effectué en janvier 2019 en tant que développeur full-stack, dans une assurtech.
                </p>
              </div>
            </router-link>
          </div>
        </base-dropdown>
      </ul>

      <!-- PPE -->
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown
          class="nav-item"
          menu-classes="dropdown-menu-xl"
        >
          <a
            slot="title"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-ui-04 d-lg-none" />
            <span class="nav-link-inner--text">PPE</span>
          </a>

          <div class="dropdown-menu-inner">
            <router-link
              to="/ppe3"
              class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship" />
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">
                  PPE 3 - ScanMeds mobile application
                </h6>
                <p class="description d-none d-md-inline-block mb-0">
                  Retrouvez toutes les informations concernant l'application mobile "ScanMeds" que j'ai développé dans le cadre du PPE n°3.
                </p>
              </div>
            </router-link>
            <router-link
              to="/ppe4"
              class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-ui-04" />
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">
                  PPE 4 - ScanMeds web dashboard
                </h5>
                <p class="description d-none d-md-inline-block mb-0">
                  Retrouvez toutes les informations concernant le dashboard web que j'ai développé dans le cadre du PPE n°4.
                </p>
              </div>
            </router-link>
          </div>
        </base-dropdown>
      </ul>

      <!-- Veilles -->
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown
          class="nav-item"
          menu-classes="dropdown-menu-xl"
        >
          <a
            slot="title"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-ui-04 d-lg-none" />
            <span class="nav-link-inner--text">Veilles</span>
          </a>
          <div class="dropdown-menu-inner">
            <router-link
              to="/veille-technologique"
              class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship" />
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">
                  Veille technologique
                </h6>
                <p class="description d-none d-md-inline-block mb-0">
                  Accédez à la veille technologique j'ai effectué dans le cadre de la préparation du BTS SIO parcours SLAM.
                </p>
              </div>
            </router-link>

            <router-link
              to="/veille-juridique"
              class="media d-flex align-items-center"
            >
              <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                <i class="ni ni-ui-04" />
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">
                  Veillez juridique
                </h5>
                <p class="description d-none d-md-inline-block mb-0">
                  Accédez à la veille technologique j'ai effectué dans le cadre de la préparation du BTS SIO parcours SLAM.
                </p>
              </div>
            </router-link>
          </div>
        </base-dropdown>
      </ul>

      <!-- ============================================== -->
      <!-- == right part                                  -->
      <!-- ============================================== -->
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
        <!-- Documents annexes -->
        <base-dropdown
          tag="li"
          class="nav-item"
        >
          <a
            slot="title"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none" />
            <span class="nav-link-inner--text">Documents annexes</span>
          </a>
          <router-link
            to="/"
            class="dropdown-item"
          >
            Convocation
          </router-link>
          <router-link
            to="/"
            class="dropdown-item"
          >
            Un autre fichier
          </router-link>
          <router-link
            to="/"
            class="dropdown-item"
          >
            Encore un fichier
          </router-link>
          <router-link
            to="/"
            class="dropdown-item"
          >
            Un autre fichier
          </router-link>
        </base-dropdown>

        <!-- autres projets -->
        <base-dropdown
          tag="li"
          class="nav-item"
        >
          <a
            slot="title"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none" />
            <span class="nav-link-inner--text">Autres projets</span>
          </a>
          <router-link
            to="/"
            class="dropdown-item"
          >
            CalendarBot
          </router-link>
          <router-link
            to="/"
            class="dropdown-item"
          >
            API EDT
          </router-link>
          <router-link
            to="/"
            class="dropdown-item"
          >
            Tweether
          </router-link>
          <router-link
            to="/"
            class="dropdown-item"
          >
            git-deploy
          </router-link>
          <router-link
            to="/"
            class="dropdown-item"
          >
            arthurdufour.com
          </router-link>
        </base-dropdown>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from '@/components/BaseNav'
import BaseDropdown from '@/components/BaseDropdown'
import CloseButton from '@/components/CloseButton'

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
}
</script>
<style scoped>
/* router history mode broke the router-links' style */
.dropdown-item.active {
  color: black;
  background-color: white;
}
.dropdown-item.active:hover {
  background-color: #f6f9fc;
}
.dropdown-item.active:active {
  color: white;
  background-color: #5e72e4;
}
</style>
