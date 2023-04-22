<script setup lang="ts" name="Start">
const name = ref<string>('unknown')
onLoad((params) => {
  console.log('Start page is loaded', params)
  if (params?.name)
    name.value = params.name
})
</script>

<template>
  <h2 text="center blue-500 64" py-xs>
    Start
  </h2>
  <div text-center lh-175>
    <p>
      This is a page in a subpackage
    </p>
    <p>
      Starter's name is <span text-32 font-600>{{ name }}</span>
    </p>
  </div>
  <navigator open-type="navigateBack" w-xl mx-auto my-md>
    <button type="default">
      Back
    </button>
  </navigator>
</template>

<style lang="scss" scoped>

</style>
