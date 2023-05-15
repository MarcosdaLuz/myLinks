import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'


const root = resolve(__dirname, 'public')
const outDir = resolve(__dirname)

// https://vitejs.dev/config/
  export default defineConfig(({ command, mode, ssrBuild }) => {
    plugins: [react()]
    if (command === 'serve') {
      return {

        outDir: '../dist',
        emptyOutDir: false,
        rollupOptions:{
          input:{
            main: resolve(root,'index.html')
          }
        }
      }
    }else {
      return {

        outDir:'../dist',
        emptyOutDir: false,
        rollupOptions:{
          input:{
            main: resolve(root,'index.html')
          }
        }
      }
    }
  })
