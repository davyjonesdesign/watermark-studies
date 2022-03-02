<template>
  <div class="home">
    <!-- <div class="postList-filters">
      <button>test</button>
    </div> -->
    <!-- <div class="study-page_img splash-img">
        <img src="https://mdl.artvee.com/sftb/508010ld.jpg" alt="bible">
    </div> -->
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

    <!-- <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button> -->
    <!-- <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name"> {{ name }} </div>
    <button @click="handleClick">stop watching</button> -->

    <!-- <h2> Refs </h2>
    <p> {{ ninjaOne.name }} - {{ ninjaOne.age }} </p>
    <button @click="updateNinjaOne">Update ninja one</button> -->

    <!-- <p> My name is {{ name }} and my age is {{ age }}.</p>    
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>

    <input type="text" v-model="name"> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import SignupForm from "@/components/SignupForm.vue"
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import getResources from "../composables/getResources";
import Loader from "../components/Loader.vue";

// import { ref } from 'vue'
// import { computed } from'vue'

export default {
  name: "Home",
  components: { PostList, Loader },
  setup() {
    const { posts, error, load } = getPosts();
    const { resources, errorR, loadR } = getResources();

    // const posts = ref([])
    // const error = ref(null)

    // const load = async () => {
    //   try {
    //     let data = await fetch('http://localhost:3000/posts')
    //     if (!data.ok) {
    //       throw Error('no data available')
    //     }
    //     posts.value = await data.json()
    //   }
    //   catch (err) {
    //     error.value = err.message
    //     console.log(error.value)
    //   }
    // }

    load();
    loadR();

    // const showPosts = ref(true)

    return { posts, error, resources, errorR };

    // const search = ref('')
    // const names = ref(['mario', 'luigi', 'toad', 'bowser', 'koopa'])

    // const stopWatch = watch(search, () => {
    //   console.log('watch function run')
    // })

    // const stopEffect = watchEffect(() => {
    //   console.log('watchEffect function run', search.value)
    // })

    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value))
    // })

    // const handleClick = () => {
    //   stopWatch()
    //   stopEffect()
    // }

    // return { names, search, matchingNames, handleClick }

    // const ninjaOne = ref({ name: 'mario', age: 30 })
    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40
    // }
    // return { ninjaOne, updateNinjaOne }

    // const name = ref('mario')
    // const age = ref(30)
    // const handleClick = () => {
    //   name.value = 'luigi'
    //   age.value = 35
    // }
    // return { name, age, handleClick}
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
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  display: flex;
  height: 25vh;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  z-index: -7;
  background-image: linear-gradient(0deg, rgba(0 0 0 / 15%), rgba(0 0 0 / 60%)),
    url("https://mdl.artvee.com/sftb/508010ld.jpg");
  background-position: center;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
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
  .splash-txt {
    height: 35vh;
  }
  .splash-txt h2 {
    margin: 10px;
    font-size: 20px;
  }
}
</style>
