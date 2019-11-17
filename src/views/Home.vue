<template>
  <div class="home" @click="$router.push('/about')">
    <img src="../assets/kurumi/block-bride.png" alt />
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  img {
    max-width: 100%;
  }
}
</style>
