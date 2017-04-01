<template>
  <div>
    <button class="btn btn-back" @click="goBack">Back</button>

    <div v-if="isNotEmpty">
      <ul>
        <li v-for="item in repos.items" class="repo">
          <a @click="gotoIssues(item)" class="repo-link">
            <h2 class="repo-title">{{item.name}} <span class="repo-star">(Star: {{item.stargazers_count}})</span></h2>
            <p class="repo-des">{{item.description}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRepos } from '../scripts/githubServices';
export default {
  name: 'RepoList',
  data () {
    return {
      repos: {}
    }
  },
  computed: {
    isNotEmpty() {
      return this.repos && this.repos.items && this.repos.items.length;
    }
  },
  created() {
    const queryName = this.$route.query.name;
    
    if(queryName) {
      getRepos(queryName)
      .then((res) => {
        this.repos = res;
      });
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); // go back by one record
    },
    gotoIssues(repo) {
      this.$router.push({name: 'issues', params: {repo: repo.name, owner: repo.owner.login}})
    }
  }
}
</script>

<style lang="scss">
.repo {
  margin-top: 0;
  margin-bottom: 15px;
  display: flex;
  -webkit-flex-flow: row wrap;

  .repo-link {
    display: block;
    background: #e2e2e2;
    padding: 10px;
    width: 100%;
    text-decoration: none;
  }

  .repo-title {
    flex-grow: 1;
  }

  .repo-star {
    font-size: 0.8em;
  }

  .repo-des {
    flex-grow: 2
  }
}
</style>