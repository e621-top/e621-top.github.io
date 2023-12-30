<template>
  <header class="navbar navbar-expand-lg navbar-dark px-3 sticky-top">
    <nav class="container font-monospace align-content-center">
      <NuxtLink class="navbar-brand mx-auto" to="/">
        <img height="30" src="/img/logo-top.png" alt="e621-top">
        e621-top
      </NuxtLink>
      <button aria-controls="global-navbar" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbar" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/artist/" active-class="active">
              Artists
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/character/" active-class="active">
              Characters
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="https://e621.net/" target="_blank">
              e621.net
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="https://e926.net/" target="_blank">
              e926.net
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped>
nav {
  max-width: 50rem;
}
</style>
