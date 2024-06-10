<script>
import { store } from '../../data/store';
import axios from 'axios';


export default {
  components: {
    
  },
  name: 'ProjectCard',
  data() {
    return {
      store,
      project: {},
    };
  },
  props: {
    project: {
      type: Object,
    },
    type: {
      type: Object,
    },
    technology: {
      type: Object,
    },
  },
  methods: {
    getApi() {
      const slug = this.$route.params.slug;
      axios.get(store.apiUrl + 'projects_by_slug/' + slug)
        .then(result => {
          this.loading = false;
          console.log(result.data);
          this.project = result.data.project;
        })
        .catch(error => {
          this.loading = false;
          console.log(error.message);
        });
    }
  },
  // Computed properties are cached based on their dependencies. A computed property will only re-evaluate when some of its dependencies have changed.
  computed: {
    type() {
      if (!this.project.type) {
        return 'Type not found';
      }
      return this.project.type.title;
    }
  },
  mounted() {
    this.getApi();
  }
}
</script>

<template>
<div class="col">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <p class="card-text">{{ project.description }}</p>
      <h5 class="card-title">
        {{ project.title }}
      </h5>
      <p v-for="(technology, index) in project.technologies" :key="index" class="btn btn-warning">{{ technology.title }}
      </p>
      <p class="badge"> {{ type }}</p>
      <router-link :to="{name:'projectDetail', params:{slug: project.slug}}" class="btn btn-primary">View Project
      </router-link>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
p {
  font-size: 1.2rem;
  color: black;
}
</style>
