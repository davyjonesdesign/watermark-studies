<template>
    <div>
        <!-- <CustomSelect
        v-model="bookSelect"
        :options="books"
        :default="bookSelect"
        :value="bookSelect"
        class="select"
        /> -->
        
        <div class="search-wrapper">
            <div class="select-search">
                <select v-model="bookSelect" class="book-select" >
                        <option v-for="book in books" :key="book">{{ book }}</option>
                    </select>
                    <input type="text" v-model="search" placeholder="Search studies..."/>
            </div>
        </div>
    <div class="post-lists">
        
        <div v-for="post in filteredPosts" :key="post.id" class="post-list_wrapper">
            <SinglePost :post="post" />
        </div>

    </div>
    </div>

</template>

<script>
import { computed, ref, watch } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
// import $ from 'jquery'
// import CustomSelect from './CustomSelect.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        const search = ref('')
        const bookSelect = ref('All Books')
        const books = ref(['All Books','Ezra', 'Nehemiah', 'Esther', 'Matthew'])
        const tempPosts = ref(props.posts)
        console.log(tempPosts)
        watch(search, () => {
            console.log('watched search')
        })
        watch(bookSelect, () => {
            console.log('watched bookSelect')
        } )
      
        // console.log(props.posts)
        // onMounted(() => console.log('mount'))
        // onUnmounted(() => console.log('unmounted'))
        // onUpdated(() => console.log('updated'))

        // const filteredPosts = computed(() => {
        //     var tempPosts = props.posts
        //     if (search != '' && search) {
        //         tempPosts = tempPosts.filter((post) => {
        //             return post.verse
        //             .toLowerCase()
        //             .includes(search.value.toLowerCase())
        //         })
        //     } 
        //     return tempPosts
        // })
        // const bookFilter = computed(() => {
        //     var tempPosts = props.posts

        //     tempPosts = tempPosts.filter(post => {
        //         if (bookSelect.value !== '') {
        //             return post.book.includes(bookSelect.value)
        //         }
        //     })
        //     console.log(tempPosts)

        // })
        // const flattenedBooks = computed(() => {
        //     const tempBooks = props.posts
        //     const tempBooksNew = tempBooks.reduce((acc, x) => 
        //     acc.concat(acc.find(y => y.book === x.book) ? []: [x]), []);
        //     return tempBooksNew
        // })
        const booksList = computed(() => {
            var tempBooks = books
            console.log(tempBooks)
        })

        const filteredPosts = computed(() => {
            var tempPosts = props.posts

            tempPosts = tempPosts.filter(post => {
                if (bookSelect.value !== 'All Books') {
                    return post.book.toLowerCase().includes(bookSelect.value.toLowerCase())
                } else { return tempPosts }
            })
            
            tempPosts = tempPosts.filter((post) => {
                
                if (post.verse.toLowerCase().includes(search.value.toLowerCase()) > 0) {
                    return post.verse.toLowerCase().includes(search.value.toLowerCase())
                } else if (
                    (post.title.toLowerCase().includes(search.value.toLowerCase())) &&
                    (search.value.toLowerCase() !== 'ezra') &&
                    (search.value.toLowerCase() !== 'nehemiah') &&
                    (search.value.toLowerCase() !== 'esther')) {
                        return post.title.toLowerCase().includes(search.value.toLowerCase())
                    // } else if (
                    // (post.content.toLowerCase().includes(search.value.toLowerCase())) &&
                    // (search.value.toLowerCase() !== 'ezra') &&
                    // (search.value.toLowerCase() !== 'nehemiah') &&
                    // (search.value.toLowerCase() !== 'esther')) {
                    //     return post.content.toLowerCase().includes(search.value.toLowerCase())
                    // } else if (bookSelect.value !== 'all') {
                    //         return post.book.toLowerCase().includes(bookSelect.value.toLowerCase())
                        }
            })
            
            return tempPosts
        })
        return {books, booksList, bookSelect, search, filteredPosts }
    }
}
</script>

<style>

.post-lists {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 960px;
    margin: auto;
    justify-content: space-between;
    align-content: space-between;
    min-height: 100vh;
}
.post-list_wrapper {
    width: 48%;
}
.post-lists p {
    /* color: white; */
}
.search-wrapper {
    
    position: sticky;
    
    
    /* max-width: 960px; */
    margin: 20px auto 20px;
    padding: 10px 0;
    top: 50px;
    /* left: 0; */
    background: var(--color-tobacco);
    height: 50px;
    z-index: 10000000;
}
.select-search {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 960px;
    height: 50px;
}


</style>