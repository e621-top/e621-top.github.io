<script setup lang="ts">
useHead({
  meta: [
    { name: "description", content: "Top popular artists and characters from favorites on e621.net" }
  ]
});
const { getFavorites } = useESIX();

const username = ref("");
const tags = ref<FavoriteTags>();
const pending = ref(false);
const pageLimit = ref(10);
const tagLimit = ref(100);

async function apply() {
  if (!username.value) { return; }
  try {
    pending.value = true;
    tags.value = await getFavorites(username.value, pageLimit.value);
  } catch (error) {
    console.error(error);
  } finally {
    pending.value = false;
  }
}

onMounted(() => {
  const { getItem, setItem } = useLocalStorage();
  const data = getItem("favorites");
  username.value = data?.username ?? "";
  tags.value = data?.tags;

  watch(tags, () => {
    if (!tags.value) { return; }
    setItem("favorites", {
      username: username.value,
      tags: tags.value
    }
    );
  });
});
</script>
<template>
  <div class="container p-3">
    <Title>Favorites Top</Title>
    <ClientOnly>
      <div id="input" class="font-monospace m-auto">
        <div class="input-group mb-1">
          <span id="inputPageLimit" v-tooltip class="input-group-text" title="Number of pages to search">Page Limit</span>
          <input v-model="pageLimit" :disabled="pending" type="number" class="form-control" aria-label="Page Limit" aria-describedby="inputPageLimit">
          <span id="inputTagLimit" v-tooltip class="input-group-text" title="Number of tags in lists">Tag Limit</span>
          <input v-model="tagLimit" :disabled="pending" type="number" class="form-control" aria-label="Tag Limit" aria-describedby="inputTagLimit">
        </div>
        <div class="input-group mb-1">
          <span id="inputUsername" class="input-group-text">Username</span>
          <input v-model="username" :disabled="pending" type="text" class="form-control" aria-label="Username" aria-describedby="inputUsername">
          <button class="btn btn-primary" :disabled="pending" @click="apply">
            Apply
          </button>
        </div>
      </div>
    </ClientOnly>
    <div class="d-flex align-items-start justify-content-center flex-wrap">
      <div v-if="tags?.artist.length" class="card m-1">
        <div class="card-header text-muted text-center">
          Favorite Artists
        </div>
        <div class="card-body">
          <TableTagCount :tags="tags.artist.slice(0, tagLimit)" />
        </div>
      </div>
      <div v-if="tags?.artist.length" class="card m-1">
        <div class="card-header text-muted text-center">
          Favorite Character
        </div>
        <div class="card-body">
          <TableTagCount :tags="tags.character.slice(0, tagLimit)" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#input {
  max-width: 50rem;
}

.input-group-text {
  width: 7.5rem;
}

div {
  max-width: 80rem;
}
</style>
