<template>
  <v-card
    :class="$vuetify.breakpoint.name == 'xs' ? 'pa-2 mx-0 ' : 'pa-10'"
    elevation="3"
  >
    <v-card-subtitle class="py-1">
      <time :datetime="article.createdAt">
        {{ $dateFns.format(new Date(article.createdAt), 'yyyy/MM/dd') }}
      </time>
    </v-card-subtitle>
    <v-card-title class="px-1">{{ article.title }}</v-card-title>
    <NuxtContent :document="article" />
  </v-card>
</template>

<script>
import Prism from '@/plugins/prism'
export default {
  mounted() {
    Prism.highlightAll()
    this.renderMathJax()
  },
  methods: {
    renderMathJax() {
      if (window.MathJax) {
        window.MathJax.Hub.Config({
          TeX: { equationNumbers: { autoNumber: 'AMS' } },
          tex2jax: {
            inlineMath: [
              ['$', '$'],
              ['\\(', '\\)'],
            ],
            processEscapes: true,
          },
          'HTML-CSS': { matchFontHeight: false },
          displayAlign: 'center',
          displayIndent: '2em',
        })
        window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub])
      }
    },
  },
  // params.slugは.mdのslug(ファイル名)
  async asyncData({ $content, query }) {
    // const article = await $content('/articles/blog/', params.slug).fetch()
    const article = await $content(query.url).fetch()
    return {
      article,
    }
  },
}
</script>

<style>
.v-application code {
  all: unset !important;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  background: none;
}

h1,
h2 {
  border-bottom: 1px solid #ccc;
  margin: 2rem 0;
}
h3 {
  margin: 1rem 0;
}
ul {
  margin: 1rem 0;
}
</style>
