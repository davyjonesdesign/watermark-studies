<template>
  <div>
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <!-- <button v-on:click="changeRoute()">
          <h3>next</h3>
    </button> -->
      <!-- <router-link :to="{ name: 'Details', params: { id: post.id } }" replace>
          <h3>next</h3>
    </router-link> -->
      <div class="post-page_img">
        <img v-bind:src="post.image" v-bind:alt="post.verse" />
      </div>

      <div class="post-page">
        <h2>{{ post.verse }}</h2>
        <h3>{{ post.title }}</h3>

        <!-- content section1 -->
        <h4 v-if="post.subtitle1">{{ post.subtitle1 }}</h4>
        <p v-if="post.paragraph1">{{ post.paragraph1 }}</p>
        <p v-if="post.paragraph1b">{{ post.paragraph1b }}</p>
        <p v-if="post.paragraph1c">{{ post.paragraph1c }}</p>
        <p v-if="post.paragraph1d">{{ post.paragraph1d }}</p>
        <div v-if="post.quest1" class="post-quest">
          <h4>Question:</h4>
          <p>{{ post.quest1 }}</p>
        </div>
        <ul v-for="list in post.list1" :key="list">
          <li>
            <span v-if="list.bold" style="font-weight: 600">{{
              list.bold
            }}</span>
            {{ list.item }}
            <p class="quote" v-if="list.quote">“{{ list.quote }}”</p>
            {{ list.item2 }}
            <p class="quote" v-if="list.quote2">“{{ list.quote2 }}”</p>
            {{ list.item3 }}
            <p class="quote" v-if="list.quote3">“{{ list.quote3 }}”</p>
            {{ list.item4 }}
            <p class="quote" v-if="list.quote4">“{{ list.quote4 }}”</p>
            {{ list.item5 }}
          </li>
        </ul>
        <p class="quote" v-if="post.quote1">“{{ post.quote1 }}”</p>

        <!-- content section 2 -->
        <h4 v-if="post.subtitle2">{{ post.subtitle2 }}</h4>
        <p v-if="post.paragraph2">{{ post.paragraph2 }}</p>
        <p v-if="post.paragraph2b">{{ post.paragraph2b }}</p>
        <p v-if="post.paragraph2c">{{ post.paragraph2c }}</p>
        <div v-if="post.quest2" class="post-quest">
          <h4>Question:</h4>
          <p>{{ post.quest2 }}</p>
        </div>
        <div v-if="post.list2">
          <ul v-for="list in post.list2" :key="list">
            <li>
              <span v-if="list.bold" style="font-weight: 600">{{
                list.bold
              }}</span>
              {{ list.item }}
              <p class="quote" v-if="list.quote">“{{ list.quote }}”</p>
              {{ list.item2 }}
              <p class="quote" v-if="list.quote2">“{{ list.quote2 }}”</p>
              {{ list.item3 }}
              <p class="quote" v-if="list.quote3">“{{ list.quote3 }}”</p>
              {{ list.item4 }}
              <p class="quote" v-if="list.quote4">“{{ list.quote4 }}”</p>
              {{ list.item5 }}
            </li>
          </ul>
        </div>
        <p class="quote" v-if="post.quote2">“{{ post.quote2 }}”</p>

        <!-- content section 3 -->
        <h4 v-if="post.subtitle3">{{ post.subtitle3 }}</h4>
        <p v-if="post.paragraph3">{{ post.paragraph3 }}</p>
        <p v-if="post.paragraph3b">{{ post.paragraph3b }}</p>
        <p v-if="post.paragraph3c">{{ post.paragraph3c }}</p>
        <div v-if="post.quest3" class="post-quest">
          <h4>Question:</h4>
          <p>{{ post.quest3 }}</p>
        </div>
        <div v-if="post.list3">
          <ul v-for="list in post.list3" :key="list">
            <li>
              <span v-if="list.bold" style="font-weight: 600">{{
                list.bold
              }}</span>
              {{ list.item }}
              <p class="quote" v-if="list.quote">“{{ list.quote }}”</p>
              {{ list.item2 }}
              <p class="quote" v-if="list.quote2">“{{ list.quote2 }}”</p>
              {{ list.item3 }}
              <p class="quote" v-if="list.quote3">“{{ list.quote3 }}”</p>
              {{ list.item4 }}
              <p class="quote" v-if="list.quote4">“{{ list.quote4 }}”</p>
              {{ list.item5 }}
            </li>
          </ul>
        </div>
        <p class="quote" v-if="post.quote3">“{{ post.quote3 }}”</p>

        <!-- content section 4 -->
        <h4 v-if="post.subtitle4">{{ post.subtitle4 }}</h4>
        <p v-if="post.paragraph4">{{ post.paragraph4 }}</p>
        <p v-if="post.paragraph4b">{{ post.paragraph4b }}</p>
        <p v-if="post.paragraph4c">{{ post.paragraph4c }}</p>
        <div v-if="post.quest4" class="post-quest">
          <h4>Question:</h4>
          <p>{{ post.quest4 }}</p>
        </div>
        <div v-if="post.list4">
          <ul v-for="list in post.list4" :key="list">
            <li>
              <span v-if="list.bold" style="font-weight: 600">{{
                list.bold
              }}</span>
              {{ list.item }}
              <p class="quote" v-if="list.quote">“{{ list.quote }}”</p>
              {{ list.item2 }}
              <p class="quote" v-if="list.quote2">“{{ list.quote2 }}”</p>
              {{ list.item3 }}
              <p class="quote" v-if="list.quote3">“{{ list.quote3 }}”</p>
              {{ list.item4 }}
              <p class="quote" v-if="list.quote4">“{{ list.quote4 }}”</p>
              {{ list.item5 }}
            </li>
          </ul>
        </div>
        <p class="quote" v-if="post.quote4">“{{ post.quote4 }}”</p>

        <!-- content section 5 -->
        <h5 v-if="post.subtitle5">{{ post.subtitle5 }}</h5>
        <p v-if="post.paragraph5">{{ post.paragraph5 }}</p>
        <p v-if="post.paragraph5b">{{ post.paragraph5b }}</p>
        <p v-if="post.paragraph5c">{{ post.paragraph5c }}</p>
        <div v-if="post.quest5" class="post-quest">
          <h4>Question:</h4>
          <p>{{ post.quest5 }}</p>
        </div>
        <div v-if="post.list5">
          <ul v-for="list in post.list5" :key="list">
            <li>
              <span v-if="list.bold" style="font-weight: 600">{{
                list.bold
              }}</span>
              {{ list.item }}
              <p class="quote" v-if="list.quote">“{{ list.quote }}”</p>
              {{ list.item2 }}
              <p class="quote" v-if="list.quote2">“{{ list.quote2 }}”</p>
              {{ list.item3 }}
              <p class="quote" v-if="list.quote3">“{{ list.quote3 }}”</p>
              {{ list.item4 }}
              <p class="quote" v-if="list.quote4">“{{ list.quote4 }}”</p>
              {{ list.item5 }}
            </li>
          </ul>
        </div>
        <p class="quote" v-if="post.quote5">“{{ post.quote5 }}”</p>

        <!-- content section 6 -->
        <h5 v-if="post.subtitle6">{{ post.subtitle6 }}</h5>
        <p v-if="post.paragraph6">{{ post.paragraph6 }}</p>
        <p v-if="post.paragraph6b">{{ post.paragraph6b }}</p>
        <p v-if="post.paragraph6c">{{ post.paragraph6c }}</p>
        <div v-if="post.quest6" class="post-quest">
          <h4>Question:</h4>
          <p>{{ post.quest6 }}</p>
        </div>
        <div v-if="post.list6">
          <ul v-for="list in post.list6" :key="list">
            <li>
              <span v-if="list.bold" style="font-weight: 600">{{
                list.bold
              }}</span>
              {{ list.item }}
              <p class="quote" v-if="list.quote">“{{ list.quote }}”</p>
              {{ list.item2 }}
              <p class="quote" v-if="list.quote2">“{{ list.quote2 }}”</p>
              {{ list.item3 }}
              <p class="quote" v-if="list.quote3">“{{ list.quote3 }}”</p>
              {{ list.item4 }}
              <p class="quote" v-if="list.quote4">“{{ list.quote4 }}”</p>
              {{ list.item5 }}
            </li>
          </ul>
        </div>
        <p class="quote" v-if="post.quote6">“{{ post.quote6 }}”</p>
        <h3 class="rule rule-content">Resources</h3>
        <div v-for="resource in resources" :key="resource">
          <a v-bind:href="resource.bookLink" target="_blank">
            <span>"{{ resource.title }}"</span>
          </a>
          <span> | {{ resource.author }}</span>
          <span> | {{ resource.label }}</span>
        </div>
        <!-- <div v-for="resource in resources" :key="resource.id" class="post-list_wrapper">
            <SingleResource :resource="resource" />
        </div> -->
      </div>
    </div>

    <div v-else class="spinner">
      <Loader />
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import getResources from "../composables/getResources";
// import SingleResource from '../components/SingleResource.vue'
import Loader from "@/components/Loader.vue";
// import router from '../router'
// import {  } from '@vue/runtime-core'
import { ref } from "vue";

export default {
  props: ["id"],
  components: {
    Loader,
  },
  setup(props) {
    const { post, error, load } = getPost(props.id);
    const { resources, errorR, loadR } = getResources();
    // const tempResources = ref(resources)
    // console.log(resources)
    const tempResources = ref();

    // const tempResources = resources
    // this.post.id = 4
    // const idNext = this.post.id + 1
    // const idNext = post.value.id + 1
    // const updateNinjaOne = () => {
    //   resources.value.id = post.value.title + 1
    // }
    load();
    loadR();
    // return res
    // console.log(post)
    // const resourceList = computed(() => {
    //   return (resources.filter(x => {
    //     return x.book.includes(post.book)
    //   }))

    // })
    // const resourcesList = computed(() => {
    //         var tempResources =
    //         console.log(tempResources)
    //     })
    // loadR();
    console.log(tempResources);

    return { post, error, resources, errorR, tempResources };
  },
  methods: {
    // changeRoute() {
    //   const idNext = this.post.id + 1
    //   // router.push({ name: 'Details', params: { id: idNext } });
    //   // router.go()
    //   if (idNext) {
    //     router.replace({ name: 'Details', params: { id: idNext } });
    //     console.log(idNext)
    //   }
    // },
    // refresh() {
    //   if (idNext.length) {
    //   router.go()
    //   }
    // }
  },
};
</script>

<style>
.post {
  /* max-width: 1200px; */
  color: #444;

  margin: 0;
}
.post p {
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
.post-page {
  display: flex;
  padding: 20px 60px 40px;
  max-width: 960px;
  margin: 60px auto 40px;
  flex-direction: column;
  background: var(--color-bone);
  border-radius: 15px;
  box-shadow: var(--shadow-subtle);
}
.post-page_img {
  position: fixed;
  opacity: 0.95;
  top: 0;
  z-index: -10;
}
.post-page_img img {
  position: relative;
  object-fit: cover;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  object-position: bottom;
  height: 60vh;
  width: 100vw;
}
@media (max-width: 960px) {
  .post-page {
    margin: 20px 10px 40px;
    padding: 20px 30px 40px;
  }
  .post p {
    margin-top: 10px;
  }
}
</style>
