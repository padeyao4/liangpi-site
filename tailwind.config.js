/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from '@iconify/tailwind';
import { iconsPlugin } from '@egoist/tailwindcss-icons';
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {}
  },
  plugins: [iconsPlugin(), addDynamicIconSelectors()]
};
