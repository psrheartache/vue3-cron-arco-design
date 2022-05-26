# vue3-cron

这是一个 cron 表达式生成插件,基于 vue3.0 与 Arco-Design 实现
[demo](https://github.com/psrheartache/vue3-cron-arco-design/)
参考项目：
[vue3-cron](https://github.com/sugdove/vue3-cron)

## 项目地址

- github : https://github.com/psrheartache/vue3-cron-arco-design

- github 项目启动: 1.yarn install 2.yarn serve

## 依赖

- Vue 3.0.0+
- ArcoDesign

## 全局引入方式

```javascript
//前置配置
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import vueCron from '../packages/index.js'
const app = createApp(App)
app
  .use(vueCron)
  .use(ArcoVue)
  .mount('#app') //使用方式：<vueCron></vueCron>
```

## 局部引入方式

```javascript
//局部引入
import { vueCron } from 'vue-cron'
export default {
  template: '<vueCron/>',
  components: { vueCron },
}
```

## 示例

```vue
<template>
  <div class="app-container">
    <h1>vue3-cron</h1>
    <div class="cron">
      <a-popover v-model:popup-visible="state.cronPopover" position="bottom" width="700px" trigger="click">
        <a-input v-model="state.cron" placeholder="* * * * * ? *" disabled class="mt-20"></a-input>
        <template #content>
          <vueCron :cron-value="state" @change-cron="changeCron" @close="closePopover"></vueCron>
        </template>
      </a-popover>
    </div>
  </div>
</template>

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      cronPopover: false,
      cron: '',
      userSetting: null,
    })
    const changeCron = (arr) => {
      [state.cron, state.userSetting] = arr
    }
    const closePopover = () => {
      state.cronPopover = false
    }
    return {
      state,
      changeCron,
      closePopover,
    }
  },
})
</script>

<style lang="less" scoped>
.app-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .cron {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
  }
  h1 {
    margin-top: 100px;
    font-size: 50px !important;
    text-align: center;
  }
}
</style>
```

在示例中我使用了 es6(es2015)语法,你可能需要引入 babel-polyfill 才能正常运行,或者你也可以用 es5 的写法

## 参数

- cron-value

  - 参数 `{Object} cronValue` 保存cron表达式值，用户操作状态值。

  国际化支持

## 事件

- change(cronText)

  - 参数：`{String} cronText` cron 表达式的值

  当 corn 表达式的值发生变化变化时触发

- close()

  - 参数：无

  当点击 corn 表达式选择框取消按钮时触发

## 联系方式

邮箱: chenmr.cyf@qq.com

如果对您有帮助, 欢迎 star!

## 鸣谢
[sugdove](https://github.com/sugdove): https://github.com/sugdove

[网站](http://www.githubs.cloud/): http://www.githubs.cloud/

邮箱: 849809724@qq.com

