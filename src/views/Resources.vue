<template>
  <div class="resources-wrapper">
    
    <div v-if="errorR">
      {{ error }}
    </div>
    
    <div v-if="resources.length">
      <ResourceList :resources="resources" />
    </div>
    <div v-else class="spinner"> 
      <Loader />
    </div>
  </div>
</template>
<script>
import ResourceList from '../components/ResourceList.vue'
import getResources from '../composables/getResources'
import Loader from '../components/Loader.vue'

export default {
  name: "Home",
  components: { ResourceList, Loader },
  setup() {
    const { resources, errorR, loadR } = getResources()
    
    
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

    // load()
    loadR()

    // const showPosts = ref(true)

    return { resources, errorR }

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
}
</script>

<style scoped>
.resources-wrapper {
  padding: 20px 60px;
  max-width: 960px;
  margin: auto;
}

</style>
