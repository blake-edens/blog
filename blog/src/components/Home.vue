<template>
  <div class="container-fluid mt-4">
    <div class="card previewContainer">
        <!-- Default card contents -->
        <h3 class="card-header text-center bg-dark text-white">
            Latest Articles
        </h3>
        <div class="card-body bg-light">
            <div class="card previewObject border-dark" v-for="post in posts" :key="post.id">
                <div class="card-header text-white bg-primary previewHeader" v-on:click="fullView(post.id)">
                    {{ post.title }}
                </div>
                <div class="card-body previewBody" v-html="post.body">
                    {{ post.body }}
                </div>
                <div class="card-footer publishDate">
                    <span class="badge badge-light">published {{ formatDate(post.createdAt) }}</span>
                </div>
            </div>
        </div>
    </div>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      loading: false,
      posts: [],
      model: {}
    }
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
      this.$router.push({ path: `post/${id}` })
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
        transition: background-color 0.5s;
    }
    .previewHeader:hover  {
      background-color: #0057aa !important;
      cursor: pointer;
      transition: background-color 0.5s;
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