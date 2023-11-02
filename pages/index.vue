<template>
  <div class="container bg-white">
    434
  </div>
</template>

<script>
export default {
  layout: 'blog',
  name: 'IndexPage',
  asyncData(context) {
    const {
      app,
      store,
      route,
      params,
      query,
      env,
      isDev,
      isHMR,
      redirect,
      error,
      $config
    } = context
    // console.log('asyncData参数2', e)
    // console.log(window)
    // console.log('window===', context)
    // console.log(document)
    // console.log(typeof document)
    if (route.path == '/') {
      redirect(302, '/js/promise/promiseAll')
    }


  }
}
</script>
