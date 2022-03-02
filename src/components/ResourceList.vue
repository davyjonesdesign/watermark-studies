<template>
  <div>
    <div class="resource-head">
      <h2>Resources</h2>
      <select v-model="bookSelect" class="book-select">
        <option v-for="book in books" :key="book">{{ book }}</option>
      </select>
    </div>
    <!-- <CustomSelect
        v-model="bookSelect"
        :options="books"
        :default="bookSelect"
        :value="bookSelect"
        class="select"
        /> -->

    <!-- <div class="search-wrapper">
            <div class="select-search">
                <select v-model="bookSelect" class="book-select" >
                        <option v-for="book in books" :key="book">{{ book }}</option>
                    </select>
                    <input type="text" v-model="search" placeholder="Search studies..."/>
            </div>
        </div> -->
    <div class="resource-cards">
      <div
        v-for="resource in bookFilter"
        :key="resource.id"
        class="resource-card"
      >
        <SingleResource :resource="resource" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "@vue/runtime-core";
import SingleResource from "./SingleResource.vue";

export default {
  props: ["resources"],
  components: { SingleResource },
  setup(props) {
    const bookSelect = ref("All Books");
    const books = ref(["All Books", "Ezra", "Nehemiah", "Esther", "Matthew"]);
    const tempResources = ref(props.resources);
    console.log(tempResources);
    watch(bookSelect, () => {
      console.log("watched bookSelect");
    });
    const bookFilter = computed(() => {
      var tempResources = props.resources;

      tempResources = tempResources.filter((resource) => {
        if (bookSelect.value !== "All Books") {
          return resource.label.includes(bookSelect.value);
        } else {
          return props.resources;
        }
      });

      tempResources = tempResources.reduce(
        (acc, x) => acc.concat(acc.find((y) => y.title === x.title) ? [] : [x]),
        []
      );
      return tempResources;
    });
    return { tempResources, books, bookSelect, bookFilter };
  },
};
</script>

<style>
.resource-head {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-self: flex-start;
  align-items: flex-end;
  width: 100%;
  border-bottom: 1px solid var(--color-gray-lighter);
  margin-bottom: 20px;
}
.resource-head h2 {
  margin: 0;
  padding: 40px 0 20px;
  color: white;
}
.resource-head select {
  margin: 40px 0 20px;
  border-radius: 10px;
}
.resource-cards {
  /* margin: 20px auto 40px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
  align-content: space-between;
  min-height: 100vh;
}
.resource-card {
  background: var(--color-gray-lightest);
  /* padding: 15px; */
  border-radius: 10px;
  /* height: 100%; */
  /* max-width: 400px; */
  width: 32%;
  min-width: 275px;
  margin-bottom: calc(1vh + 7px);
  display: flex;
  transition: var(--transition);
  /* border: 1px solid rgba(0, 0, 0, 0); */
}
.resource-card a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  text-decoration: none;
  color: #444;
}
@media (max-width: 960px) {
  .resource-card {
    width: 48%;
  }
}
@media (max-width: 600px) {
  .resource-card {
    width: 100%;
  }
}
</style>
