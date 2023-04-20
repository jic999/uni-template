<script setup lang="ts" name="Mine">
const counterStore = useCounterStore()
</script>

<template>
  <div py-md text-center text-teal-600>
    Mine View
  </div>
  <div py-xl text="center gray-500 128" italic>
    Jic999
  </div>
  <div text="center gray-600">
    The current value of the counter is <span mx-xs text-64>{{ counterStore.count }}</span>
  </div>
</template>
