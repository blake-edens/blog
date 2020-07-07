<template>
  <div class="container-fluid mt-4">
    <div class="card previewContainer">
        <!-- Default card contents -->
        <h3 class="card-header text-center bg-dark text-white">
            <button class="fa fa-arrow-left"></button>{{ post.title }} HELLO FRIEND
        </h3>
        
        <div class="card-body previewBody">
            {{ post.body }}
        </div>
        <div class="card-footer publishDate">
            <span class="badge badge-light">published {{ formatDate(post.createdAt) }}</span>
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
      }
    }
  },
  props: ['id'],
  methods: {
      async getPost (id) {
      this.loading = true
      this.post = await api.getPost(id)
      this.loading = false
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