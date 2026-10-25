import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 以「项目站点」形式发布：
  //   https://prompt-to-harness.github.io/ch02-pages-lab-20261025/
  // 站点挂在 /ch02-pages-lab-20261025/ 子路径下，而不是站点根目录，
  // 因此构建产物里的资源路径必须带上这一层前缀，否则浏览器会去
  // https://prompt-to-harness.github.io/assets/... 请求而 404。
  base: '/ch02-pages-lab-20261025/',
})
