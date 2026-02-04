<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="(item, index) in newsList" :key="item.id">
        <!-- <RouterLink 
          :to="{
            path: '/news/detail',
            query:{
              id: item.id,
              title: item.title,
              content: item.content
            }
          }"
        >
        {{ item.title }}
        </RouterLink> -->
        <button @click="showNewsDetail(item)">查看新闻</button>
        <RouterLink 
          :to="{
            name: 'detail-page',
            params:{
              id: item.id,
              title: item.title,
              content: item.content
            }
          }"
        >
        {{ item.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';

  let newsList = reactive([
    {id:'asfdtrfay01',title:'很好的抗癌食物',content:'西蓝花'},
    {id:'asfdtrfay02',title:'如何一夜暴富',content:'学IT'},
    {id:'asfdtrfay03',title:'震惊，万万没想到',content:'明天是周一'},
    {id:'asfdtrfay04',title:'好消息！好消息！',content:'快过年了'}
  ])

  const router = useRouter()

  interface NewsInter {
    id: string,
    title: string,
    content: string
  }

  function showNewsDetail(item:NewsInter){
    router.replace({
      name: 'detail-page',
      params:{
        id: item.id,
        title: item.title,
        content: item.content
      }
    })
  }
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>