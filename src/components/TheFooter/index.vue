<script setup lang="ts" name="TheFooter">
const msgRef = ref('A simple and easy to use uni-app starter template.')
</script>

<template>
  <div py-20rpx flex-center text-24 text-gray-500>
    <p w-6_10 text-center>
      {{ msgRef }}
    </p>
  </div>
</template>
