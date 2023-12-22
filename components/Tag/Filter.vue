<script setup lang="ts">
const filter = useFilter();

const hideMLP = ref(false);
const include = ref("");
const exclude = ref("");

function apply() {
  filter.value = {
    ...filter.value,
    hideMLP: hideMLP.value,
    include: include.value,
    exclude: exclude.value
  };
}

function clear() {
  include.value = "";
  exclude.value = "";
  apply();
}
</script>
<template>
  <div class="font-monospace">
    <div class="input-group mb-1">
      <span id="inputInclude" class="input-group-text">Include</span>
      <input v-model="include" type="text" class="form-control" placeholder="Input regex" aria-label="Include" aria-describedby="inputInclude">
    </div>
    <div class="input-group mb-1">
      <span id="inputExclude" class="input-group-text">Exclude</span>
      <input v-model="exclude" type="text" class="form-control" placeholder="Input regex" aria-label="Exclude" aria-describedby="inputExclude">
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="form-check">
        <input id="checkHideMLP" v-model="hideMLP" class="form-check-input" type="checkbox" @change="apply">
        <label class="form-check-label" for="checkHideMLP">
          Hide MLP
        </label>
      </div>
      <div class="btn-group">
        <button class="btn btn-primary" @click="apply">
          Apply
        </button>
        <button class="btn btn-primary" @click="clear">
          Clear
        </button>
      </div>
    </div>
  </div>
  <!-- <div>{{ filter.hideMLP }} {{ filter.include }}</div> -->
</template>
