<script lang="ts" setup>
import PageSection from '@/components/PageSection.vue';
</script>

<template>
  <div class="bg-gradient-to-br from-pink-50 to-blue-100 min-h-screen text-gray-900 font-sans">
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <nav class="container mx-auto flex items-center justify-between px-6 py-4 max-w-6xl">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 mr-4" viewBox="0 0 512 512">
            <use href="/favicon.svg" />
          </svg>
          <h1
            class="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Possible
          </h1>
        </div>
        <ul class="flex gap-6 items-center">
          <li>
            <a href="#about"
              class="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-lg font-medium">关于</a>
          </li>
          <li>
            <a href="#features"
              class="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-lg font-medium">特性</a>
          </li>
          <li>
            <a href="#download"
              class="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-lg font-medium">下载</a>
          </li>
          <li>
            <a href="https://possible.liangpi.site" target="_blank"
              class="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
              在线体验
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="container max-w-6xl mx-auto px-6">
      <page-section class="min-h-screen flex items-center" id="about">
        <div class="text-center max-w-4xl mx-auto">
          <div class="mb-12 space-y-4">
            <h2
              class="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 leading-tight">
              释放你的创造力
            </h2>
            <p class="text-2xl text-gray-700 leading-relaxed">
              Possible - 不仅仅是任务管理，更是梦想实现的画布
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div
              class="bg-white/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 backdrop-blur-sm">
              <div class="text-5xl mb-5 text-pink-500">🚀</div>
              <h3 class="text-2xl font-bold mb-4 text-gray-900">可视化时间轴</h3>
              <p class="text-gray-700 leading-relaxed">
                像绘画一样管理任务，每一个目标都是独特的艺术品
              </p>
            </div>
            <div
              class="bg-white/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 backdrop-blur-sm">
              <div class="text-5xl mb-5 text-purple-500">🧠</div>
              <h3 class="text-2xl font-bold mb-4 text-gray-900">智能任务助理</h3>
              <p class="text-gray-700 leading-relaxed">
                AI智能推荐，帮你筛选最重要的任务，释放生产力
              </p>
            </div>
            <div
              class="bg-white/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 backdrop-blur-sm">
              <div class="text-5xl mb-5 text-blue-500">🌈</div>
              <h3 class="text-2xl font-bold mb-4 text-gray-900">社交协作</h3>
              <p class="text-gray-700 leading-relaxed">
                任务可分享，与伙伴一起追逐梦想，互相激励
              </p>
            </div>
          </div>
        </div>
      </page-section>

      <page-section class="min-h-screen flex items-center justify-center" id="download">
        <div class="text-center max-w-3xl mx-auto">
          <h2
            class="mb-8 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 leading-tight">
            开启你的效率之旅
          </h2>
          <p class="text-xl text-gray-700 mb-12 leading-relaxed">
            Possible不仅是一款软件，更是实现梦想的起点。现在就下载，开启属于你的精彩人生！
          </p>
          <div class="flex justify-center space-x-6">
            <a href="https://github.com/padeyao4/possible/releases" target="_blank"
              class="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center text-lg shadow-xl hover:shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub 发行版
            </a>
            <a href="https://possible.liangpi.site" target="_blank"
              class="px-10 py-4 border-2 border-pink-500 text-pink-600 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center text-lg shadow-md hover:shadow-xl">
              🌐 在线体验
            </a>
          </div>
        </div>
      </page-section>
    </main>
  </div>
</template>

<style>
body {
  background: linear-gradient(135deg, #fdf1f5 0%, #e6f2ff 100%);
}
</style>
