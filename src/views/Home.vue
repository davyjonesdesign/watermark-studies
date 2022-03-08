<template>
  <div class="home">
    <div class="splash-txt">
      <h2>
        Watemark Bible Studies is dedicated to supplying God's people with
        in-depth, exegetical biblical studies so that they might "become mature,
        attaining to the whole measure of the fullness of Christ."
      </h2>
      <p>Ephesisans 4:13</p>
    </div>
    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else class="spinner">
      <Loader />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import getResources from "../composables/getResources";
import Loader from "../components/Loader.vue";

export default {
  name: "Home",
  components: { PostList, Loader },
  setup() {
    const { posts, error, load } = getPosts();
    const { resources, errorR, loadR } = getResources();

    load();
    loadR();

    return { posts, error, resources, errorR };
  },
};
</script>
<style scoped>
.home {
  margin: 0px 0px 20px;
}
.study-page_img {
  position: relative;
  top: 0;
  z-index: -10;
}
.splash-txt {
  color: #fff;
  flex-direction: column;
  position: relative;
  align-items: center;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  z-index: -7;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.6)
    ),
    url(https://mdl.artvee.com/sftb/508010ld.jpg);
  background-position: 50%;
  filter: grayscale(100%);
  padding: 70px 10px 30px;
}
.splash-txt h2 {
  max-width: 960px;
  text-transform: none;
  /* margin: 0 60px; */
  margin-bottom: 0;
  text-shadow: 1px 1px 6px black;
}
.splash-txt p {
  margin: 5px 0 0 0;
}
@media (max-width: 960px) {
  .splash-txt h2 {
    margin: 10px;
    font-size: 18px;
  }
}
</style>
