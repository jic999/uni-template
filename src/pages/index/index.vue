<script setup lang="ts" name="Index">
const counterStore = useCounterStore()

const name = ref('')

function go() {
  uni.navigateTo({ url: `/pages_index/start/index?name=${name.value}` })
}

onLoad(() => {
  console.log('loaded')
  uni.req('GET', '/api/posts')
    .then((res) => {
      console.log('res', res)
    })
    .catch((msg) => {
      console.log('msg', msg)
    })
    .finally(() => {
      console.log('finally')
    })
})
</script>

<template>
  <div py-12>
    <TheHeader />
    <div>
      <input v-model="name" focus placeholder="Input your name" w-lg mx-auto my-xs p-xs text-center>
      <button type="primary" mx-auto w-xl @click="go">
        Start
      </button>
      <div flex-center my-md>
        <button type="default" w-xs @click="counterStore.reduce">
          -
        </button>
        <div>{{ counterStore.count }}</div>
        <button type="default" w-xs @click="counterStore.increment">
          +
        </button>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
