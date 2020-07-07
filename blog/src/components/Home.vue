<template>
  <div class="container-fluid mt-4">
    <FullArticle v-if="articleDisplay" v-bind="selected_id"></FullArticle>
    <div class="card previewContainer" v-if="!articleDisplay">
        <!-- Default card contents -->
        <h3 class="card-header text-center bg-dark text-white">
            Latest Articles
        </h3>
        <div class="card-body bg-light">
            <div class="card previewObject border-dark" v-for="post in posts" :key="post.id">
                <div class="card-header text-white bg-primary previewHeader" v-on:click="fullView(post)">
                    {{ post.title }}
                </div>
                <div class="card-body previewBody">
                    {{ post.body }}
                </div>
                <div class="card-footer publishDate">
                    <span class="badge badge-light">published {{ formatDate(post.createdAt) }}</span>
                </div>
            </div>
        </div>
    </div>

    <br><br><br><hr>
    <center><h1 class="h1">Latest Articles</h1></center>
    <br><br>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <div class="previewContainer2" v-for="(post, index) in posts" :key="post.id">
        <hr v-if="index > 0">
        <span class="h4 previewHeader">{{ post.title }}</span>
        <span class="publishDate">published {{ formatDate(post.createdAt) }}</span>
        <div class="previewBody">{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import FullArticle from './FullArticle.vue'
export default {
  data () {
    return {
      loading: false,
      articleDisplay: false,
      selected_id: 0,
      posts: [],
      model: {}
    }
  },
  components: {
    FullArticle
  },
  async created () {
    this.refreshPosts()
  },
  methods: {
    async refreshPosts () {
      this.loading = true
      this.posts = await api.getPosts()
      this.loading = false
    },
    previewBody (body) {
      return body.substring(0, 100) + ' ...'
    },
    fullView (id) {
      this.id = id
      this.articleDisplay = true
    }
  }
}
</script>

<style>
    .previewContainer {
        margin: auto;
        display: block;
        width: 100%;
        line-height: 2.2rem;
        font-family: 'Signika Negative', sans-serif;
    }
    .previewContainer2 {
        margin: auto;
        display: block;
        width: 50%;
        line-height: 3rem;
        padding-bottom: 2rem;
        font-family: 'Signika Negative', sans-serif;
    }
    .previewObject {
        margin-bottom: 1rem;
    }
    .previewHeader {
        font-size: 22px;
    }
    .previewBody {
        max-height: 300px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .publishDate {
        font-size: 1.1rem;
        padding: 0px 1.5rem !important;
    }
</style>