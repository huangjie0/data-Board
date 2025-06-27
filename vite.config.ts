import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from "@vitejs/plugin-legacy";
import path from 'path'
import vueJsx from "@vitejs/plugin-vue-jsx";

const pathSrc = path.resolve(__dirname, "src")
//自动导入插件
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
// ElementPlus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    base: `${env.VITE_BASE_PATH}/`,
    plugins: [
      vue(),
      vueJsx(),
      legacy({
        targets: ["chrome 72"]
      }),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports:["vue"],
        eslintrc:{
          enabled:true,  // 是否自动生成 eslint 规则，建议生成之后设置 false 
          filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
        },
        dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
        resolvers: [ElementPlusResolver()]
      }),
    ],
    build: {
      sourcemap: false,
      target: "es5",
      rollupOptions: {
        output: {
          format: "iife", // 使用兼容旧浏览器的格式
        },
      },
    },
    server:{
      host: '0.0.0.0',//指定服务器应该监听哪个 IP 地址
      port:10010     
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: 'true; @import "@/assets/style/main.less"'
          },
          javascriptEnabled: true
        }
      }
    }
  }
})
