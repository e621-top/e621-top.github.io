<template>
  <div class="container p-3">
    <div class="card">
      <div class="card-header text-center">
        <b>
          e621-top
        </b>
      </div>
      <div class="card-body">
        <p>
          Automatically updated top of popular artists and characters on e621.net
        </p>
        <ul>
          <li>
            <NuxtLink to="/artist/">
              <b>
                Artist
              </b>
            </NuxtLink>
            <div>
              All artist tags with 200+ posts
            </div>
          </li>
          <li>
            <NuxtLink to="/character/">
              <b>
                Character
              </b>
            </NuxtLink>
            <div>
              All character tags with 100+ posts
            </div>
          </li>
          <li>
            <NuxtLink to="/favorites/">
              <b>
                Favorites
              </b>
            </NuxtLink>
            <div>
              Top popular artists and characters by specified user
            </div>
          </li>
        </ul>
      </div>
      <div class="card-footer text-center text-muted">
        Artist and Character lists are updated daily
      </div>
    </div>
  </div>
</template>
<style scoped>
div {
  max-width: 50rem;
}
</style>
