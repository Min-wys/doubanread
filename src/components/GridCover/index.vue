<template>
  <div class="coverBgc">
    <img :src="url" alt="" />
  </div>
</template>

<script>
export default {
  name: "GridCover",
  props: ["url"],
};
</script>

<style lang="less" scoped>
img {
  widows: 120px;
  height: 180px;
}
</style>
