import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(
        "https://api.npoint.io/b7585bd7cfa104aceca3/studies/" + id
      );
      if (!data.ok) {
        throw Error("that post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
