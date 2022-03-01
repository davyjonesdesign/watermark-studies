import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('https://api.npoint.io/b7585bd7cfa104aceca3/studies')
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { posts, error, load }
}

export default getPosts