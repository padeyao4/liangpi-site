<script lang="ts" setup>
import { faker } from '@faker-js/faker';
import DownloadButton from '@/components/DownloadButton.vue';
import PageSection from '@/components/PageSection.vue';
import Detail from '@/assets/detail.png';
</script>

<template>
  <header class="sticky top-0 border-b bg-white">
    <nav class="mx-4 flex justify-between py-4">
      <h1 class="text-2xl font-bold">Possible</h1>
      <ul class="flex gap-4">
        <li class="flex items-center justify-center p-2 hover:bg-gray-200">
          <a href="#about">关于</a>
        </li>
        <li class="flex items-center justify-center p-2 hover:bg-gray-200">
          <a href="#download">下载</a>
        </li>
        <!--        <li class="flex items-center justify-center p-2 hover:bg-gray-200">-->
        <!--          <a href="#contact">联系</a>-->
        <!--        </li>-->
      </ul>
    </nav>
  </header>
  <main class="flex flex-col">
    <!--    <page-section v-for="_ in 3" :key="_" class="h-screen" id="about">
      <div>
        {{ faker.lorem.paragraphs(5) }}
      </div>
      <el-image
        src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        style="position: static !important"
      >
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
    </page-section>-->
    <page-section class="h-screen" id="about">
      <div>
        <div class="mb-8 ml-0 text-gray-500">
          这是一个使用 Vue + Vite + Electron 开发的可视化的方式目标管理软件
        </div>
        <ul class="font-light text-gray-500 mx-4" style="font-size: 15px; list-style-type: disc">
          <li>使用带有时间轴的画布来显示任务，可以清晰地显示任务之间的关联关系。</li>
          <li>任务可以发布在公共空间,任何人都可以通过关注来查看和参与任务。(待实现)</li>
          <li>软件会每天筛选出当天需要执行的任务，显示在每日任务中。</li>
        </ul>
      </div>
      <el-image :src="Detail" style="position: static !important; width: 50% ">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
    </page-section>
    <page-section class="h-screen" id="download">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row items-center justify-center gap-4">
          <h1>Possible</h1>
          <download-button />
        </div>
        <div>
          <ul class="flex flex-row gap-2">
<!--            <li v-for="_ in 3" :key="_">-->
<!--              <el-text>-->
<!--                {{ faker.person.fullName() }}-->
<!--              </el-text>-->
<!--            </li>-->
          </ul>
        </div>
      </div>
    </page-section>
    <!--    <page-section class="h-screen" id="contact">-->
    <!--      <h1>联系我们</h1>-->
    <!--    </page-section>-->
  </main>
</template>
