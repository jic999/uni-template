<script setup lang="ts">

</script>

<template>
  <div py-12>
    <TheHeader />
    <div>
      <button type="primary" mx-auto w-xl>
        Start
      </button>
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
