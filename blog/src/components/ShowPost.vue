<template>
  <div class="container-fluid mt-4">
    <div class="card previewContainer">
        <!-- Default card contents -->
        <h3 class="card-header text-center bg-dark text-white">
            {{ post.title }}
        </h3>
        <div class="card-footer publishDate">
            <span class="badge badge-light">published {{ formatDate(post.createdAt) }}</span>
        </div>
        
        <div class="card-body" v-html="post.body">
            {{ post.body }}
        </div>
        

    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      post: {
          title: '',
          createdAt: '',
          body: ''
      },
      id: this.$route.params.id
    }
  },
  async created () {
    this.loading = true
    this.post = await api.getPost(this.id)
    this.loading = false
  },
  methods: {}
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

    .previewObject {
        margin-bottom: 1rem;
    }
    .previewHeader {
        font-size: 22px;
    }
    .publishDate {
        font-size: 1.1rem;
        padding: 0px 1.5rem !important;
    }
</style>