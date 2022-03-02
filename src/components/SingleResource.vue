<template>
  <div>
    <a v-bind:href="resource.bookLink" target="_blank">
      <p class="book-label">{{ resource.label }}</p>
      <div class="book-jacket">
        <img v-bind:src="resource.bookImg" v-bind:alt="resource.title" />
      </div>
      <div class="resource-card_content">
        <h4>"{{ titleSnippet }}"</h4>
        <p class="resource-author">
          Author / Editor :
          <span class="resource-authorName">{{ resource.author }}</span>
        </p>
        <p class="resource-description">{{ snippet }}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["resource"],
  setup(props) {
    const snippet = computed(() => {
      return props.resource.bookDescription.substring(0, 125) + "...";
    });
    const titleSnippet = computed(() => {
      return props.resource.title.substring(0, 20) + "...";
    });
    return { snippet, titleSnippet };
  },
};
</script>

<style>
.book-jacket {
  width: 100%;
  background: var(--color-champagne);
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-content: center;
  justify-content: center;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.45);
}
.book-jacket img {
  margin: 20px;
  max-height: 200px;
  box-shadow: var(--shadow-subtle);
  width: auto;
  transition: var(--transition-longer);
}
.book-label {
  position: absolute;
  z-index: 100;
  margin: 10px;
  padding: 4px 15px;
  border-radius: 20px;
  background: var(--color-periwinkle-dark);
  box-shadow: var(--shadow);
  color: var(--color-periwinkle-light);
  font-weight: 600;
  text-align: right;
  display: flex;
  align-self: flex-end;
}
.resource-card_content {
  padding: 10px 15px 15px;
}
.resource-description {
  font-size: 16px;
}
.resource-author {
  font-size: 16px;
}
.resource-card:hover {
  background: white;
  /* border: 1px solid var(--periwinkle-light); */
  box-shadow: var(--shadow-bold);
}
.resource-card:hover .book-jacket {
  /* opacity: .75; */
}
.resource-card:hover .book-label {
  box-shadow: var(--shadow-bold);
  background: var(--color-periwinkle);
  color: white;
}
.resource-card:hover img {
  transform: scale(1.1);
  opacity: 0.85;
}
</style>
