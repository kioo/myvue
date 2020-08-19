<template>
  <div id="app">
    <router-link to="/main">首页</router-link> <!-- 1. 添加 component 的路由地址-->
    <router-link to="/content">内容页</router-link>
    <router-view></router-view> <!--2. 添加路由组件显示的位置 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

