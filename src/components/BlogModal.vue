<template>
  <hr style="border: 50px solid green" />
  <div class="container my-5 p-5">
    <div class="blog-title pb-4">
      <h1>{{ blogData.name }}</h1>
    </div>
    <div class="blog-img pb-5">
      <img
        style="overflow: hidden; max-width: 100%; border-radius: 10px"
        :src="blogData.image"
        alt="Image"
      />
    </div>
    <div class="blog-desc pb-5" v-if="blogData.fullDescription">
      {{ blogData.fullDescription }}
    </div>
    <div class="blog-desc pb-5" v-else>
      {{ blogData.description }}
    </div>
    <button @click="closeModal">Close</button>
  </div>
</template>

<script>
export default {
  props: {
    blogData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.blog-img {
  width: 100%;
}
</style>
