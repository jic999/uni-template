<script setup lang="ts" name="Index">
import { onLoad } from '@dcloudio/uni-app'

const counterStore = useCounterStore()

console.log('counterStore', counterStore)

onLoad(() => {
  console.log('loaded')
  req({
    method: 'GET',
    url: '/api/posts',
  })
    .then((res) => {
      console.log('res', res)
    })
    .catch((msg) => {
      console.log('msg', msg)
    })
})
</script>

<template>
  <div py-12>
    <TheHeader />
    <div>
      <button type="primary" mx-auto w-xl>
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

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
