<template>
  <div class="container p-3">
    <div class="card">
      <div class="card-header">
        <b>
          e621-top
        </b>
      </div>
      <div class="card-body">
        <p>
          Automatically updated artist and character tag tops of e621.net
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
        </ul>
        <p>
          The lists are updated daily
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
div {
  max-width: 50rem;
}
</style>
