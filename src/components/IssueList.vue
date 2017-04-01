<template>
  <div>
    <button class="btn btn-back" @click="goBack">Back</button>

    <h2>{{$route.params.repo}}</h2>
    <h3>Author: {{$route.params.owner}}</h3>
    <div v-if="isNotEmpty">
      <ul>
        <li v-for="item in issues" class="repo">
          <input type="checkbox" :checked="isClosed(item.state)" disabled="disabled">
          {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getIssues } from '../scripts/githubServices';
export default {
  name: 'IssueList',
  data () {
    return {
      issues: []
    }
  },
  computed: {
    isNotEmpty() {
      return this.issues && this.issues.length;
    }
  },
  created() {
    const owner = this.$route.params.owner;
    const repoName = this.$route.params.repo;

    if(repoName && owner) {
      getIssues(repoName, owner)
      .then((res) => {
        this.issues = res;
      });
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); // go back by one record
    },
    isClosed(state) {
      return state === 'closed';
    }
  }
}
</script>
