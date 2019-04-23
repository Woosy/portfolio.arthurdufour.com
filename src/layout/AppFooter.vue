<template>
  <footer
    class="footer has-cards"
    style="padding-top: 400px !important"
  >
    <div class="container">
      <!-- Me contacter -->
      <div class="row row-grid align-items-center my-md">
        <!-- Titre -->
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">
            Merci pour votre visite !
          </h3>
          <h4 class="mb-0 font-weight-light">
            N'hésitez pas à me contacter via les plateformes suivantes :
          </h4>
        </div>

        <!-- Réseaux -->
        <div class="col-lg-6 text-lg-center btn-wrapper">
          <!-- Mail -->
          <a
            href="mailto:dufourarthur.perso@gmail.com"
            class="btn btn-neutral btn-icon-only btn-mail btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Envoyez moi un mail"
          >
            <i class="fa fa-envelope" />
          </a>
          <!-- Twitter -->
          <a
            target="_blank"
            href="https://twitter.com/Woosy__"
            class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Suivez-moi"
          >
            <i class="fa fa-twitter" />
          </a>
          <!-- LinkedIn -->
          <a
            target="_blank"
            href="https://www.linkedin.com/in/arthur-d-145019132/"
            class="btn btn-neutral btn-icon-only btn-linkedin btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Contactez-moi"
          >
            <i class="fa fa-linkedin" />
          </a>
          <!-- GitHub -->
          <a
            target="_blank"
            href="https://github.com/Woosy"
            class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Mes projets"
          >
            <i class="fa fa-github" />
          </a>
        </div>
      </div>

      <hr>

      <!-- Footer footer -->
      <div class="row align-items-center justify-content-md-between">
        <!-- Copyright -->
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ date }}
            <a
              href="https://www.arthurdufour.com"
              target="_blank"
            >Arthur Dufour</a>.
          </div>
        </div>

        <!-- Navigation -->
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <!-- License -->
            <li class="nav-item">
              <a
                href="https://choosealicense.com/licenses/mit/"
                class="nav-link"
                target="_blank"
              >License MIT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <br>
  </footer>
</template>

<script>
export default {
  data: function () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style>
</style>
