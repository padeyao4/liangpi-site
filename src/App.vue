<script lang="ts" setup>
import { faker } from '@faker-js/faker';
import DownloadButton from '@/components/DownloadButton.vue';
import PageSection from '@/components/PageSection.vue';
</script>

<template>
  <header class="sticky top-0 border-b bg-white">
    <nav class="mx-4 flex justify-between py-4">
      <h1 class="text-2xl font-bold">Possible</h1>
      <ul class="flex gap-4">
        <li class="flex items-center justify-center p-2 hover:bg-gray-200"><a href="#">主页</a></li>
        <li class="flex items-center justify-center p-2 hover:bg-gray-200"><a href="#">关于</a></li>
        <li class="flex items-center justify-center p-2 hover:bg-gray-200"><a href="#">下载</a></li>
        <li class="flex items-center justify-center p-2 hover:bg-gray-200"><a href="#">联系</a></li>
      </ul>
    </nav>
  </header>
  <main class="flex flex-col">
    <page-section v-for="_ in 3" :key="_" style="min-height: 600px; max-height: 800px">
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
    </page-section>
    <page-section style="height: 800px">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row items-center justify-center gap-4">
          <h1>{{ faker.location.country() }}</h1>
          <download-button />
        </div>
        <div>
          <ul class="flex flex-row gap-2">
            <li v-for="_ in 3" :key="_">
              <el-text>
                {{ faker.person.fullName() }}
              </el-text>
            </li>
          </ul>
        </div>
      </div>
    </page-section>
    <page-section class="h-screen">
      <h1>联系我们</h1>
    </page-section>
  </main>
</template>
