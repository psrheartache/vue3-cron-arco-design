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
