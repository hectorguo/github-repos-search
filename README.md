# vue

A simple single page application for searching github repositories and issues. 
Powered by Vue 2.0

[Demo Here](https://hectorguo.com/github-repos-search/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Route config:

### /
Open Home page

### /repos?name={repoName} 
Open repos list by repo name


### /repos/{owner}/{repoName}
Open repo issues by repo name and owner