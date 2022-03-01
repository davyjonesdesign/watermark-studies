<template>
  <div >
      <router-link :to="{ name: 'Details', params: { id: post.id } }" class="postCard">
          <div class="card-img">
              <img :src="post.image" alt="post.verse">
          </div>
          <div class="post-content">
              <h2 class="post-title">{{ post.verse }}</h2>
              <h4 class="post-verse">{{ post.title }}</h4>
            <p class="post-snippet">{{ snippet }}</p>
            <button class="postCard-btn">Go to Full Study</button>
          </div>
          

      </router-link>
      
      <span v-for="tag in post.tags" :key="tag">
          #{{ tag }}
      </span>
  </div>
</template>

<script>
import { computed } from'vue'

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.content.substring(0,225) + '....'
        })

        return { snippet }
        
    }
}
</script>

<style>
.postCard {
  background: var(--color-bone);
  flex: 32%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 3vw;
  width: 100%;
  box-shadow: var(--shadow-subtle);
  overflow: hidden;
  /* max-width: 960px; */
}
.postCard img {
  display: block;
  height: 100%;
  width: 100%;
  object-position: top;
  overflow: hidden;
  object-fit: cover;
  transition: var(--transition-longer);
}
.card-img {
  background-color: var(--color-periwinkle-dark);
  overflow: hidden;
  /* width: 600px; */
  height: 300px;
}
.post-content {
  margin: 10px 15px 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.post-verse {
  font-size: 18px;
  margin: 5px 0;
  align-self: flex-start;
  color: var(--color-periwinkle);
    /* position: absolute; */
}
.post-title {
  margin: 5px 0;
  font-size: 26px;
  text-decoration: none;
  color: var(--color-gray-darkest);

}
.post-snippet {
  margin: 5px 0 15px;
  color: var(--color-gray-dark);
  width: 90%;
  font-size: 16px;
}
.postCard-btn {
  background-color: var(--color-periwinkle); /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0 10px;
}
.postCard-btn:hover {
  box-shadow: var(--shadow-bold);
  background: var(--color-periwinkle-dark);
}

.postCard:hover {
  box-shadow: var(--shadow-bold);
  background: white;

}
.postCard:hover img {
  transform: scale(1.1);
  opacity: 0.65;
}
</style>