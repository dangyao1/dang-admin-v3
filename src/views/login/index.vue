<template>
  <div class="login-container">
    <div class="content">
      <t-card>
        <h1>Dang Admin</h1>
        <t-form
          ref="form"
          :data="loginForm"
          class="login-form"
          :colon="true"
          :rules="rules"
          :label-width="0"
          @submit="handleLogin"
        >
          <t-form-item name="username">
            <t-input
              v-model="loginForm.username"
              clearable
              placeholder="请输入用户名"
            >
              <template #prefix-icon>
                <icon name="desktop"></icon>
              </template>
            </t-input>
          </t-form-item>

          <t-form-item name="password">
            <t-input
              v-model="loginForm.password"
              type="password"
              clearable
              placeholder="请输入密码"
            >
              <template #prefix-icon>
                <icon name="lock-on"></icon>
              </template>
            </t-input>
          </t-form-item>

          <t-form-item>
            <t-button theme="primary" type="submit" block :loading="loading"
              >登录</t-button
            >
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon, MessagePlugin, type SubmitContext } from 'tdesign-vue-next'
import { reactive, ref } from 'vue'
import type { FormRules } from 'tdesign-vue-next'
import type { TokenRequest } from '@/api/types'
import { useAppStore } from '@/store/app'
import { useRouter } from 'vue-router'

const router = useRouter()

interface IRules {
  username: any[]
  password: any[]
}
const loginForm = reactive<TokenRequest>({
  username: 'admin',
  password: 'admin123'
})

const appStore = useAppStore()
// 登录
// 按钮加载状态
const loading = ref(false)

const handleLogin = async ({ validateResult }: SubmitContext) => {
  if (validateResult !== true) {
    return
  }
  loading.value = true
  try {
    await appStore.loginAction(loginForm)
    await MessagePlugin.success('登录成功!')
    router.push({ name: 'dashboard' })
  } finally {
    loading.value = false
  }
}
// onMounted(() => {
//   createTokenApi(loginForm).then((res) => console.log(res))
// })
const rules: FormRules<IRules> = {
  username: [
    {
      required: true,
      message: '必须输入用户名',
      type: 'error',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码', type: 'error', trigger: 'blur' },
    {
      min: 6,
      max: 11,
      message: '密码必须6-11位',
      type: 'error',
      trigger: 'blur'
    }
  ]
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 300px;
    margin-bottom: 150px;
    h1 {
      text-align: center;
    }
    .login-form {
      margin-top: 20px;
    }
  }
}
</style>
