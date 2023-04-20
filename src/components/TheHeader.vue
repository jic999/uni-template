<script setup lang="ts">
const titleRef = ref('Uni Template')
</script>

<template>
  <div flex-center flex-col py-24rpx text-teal-600>
    <div my-xs text-36>
      {{ titleRef }}
    </div>
    <div i-carbon:sprout text-256 />
    <div flex justify-center gap-x-xs py-md>
      <div w-72 h-72 rounded-full bg-green-600 />
      <div w-72 h-72 rounded-full bg-blue-600 />
      <div w-72 h-72 rounded-full bg-orange-600 />
      <div w-72 h-72 rounded-full bg-sky-600 />
      <div w-72 h-72 rounded-full bg-rose-600 />
      <div w-72 h-72 rounded-full bg-purple-600 />
    </div>
  </div>
</template>
