import { onUnmounted } from 'vue'

type PollFn = () => Promise<void>

export function usePoll(pollFn: PollFn, delay = 3000) {
  let timer: number | null = null
  let isActive = true

  // 启动轮询
  const start = () => {
    isActive = true
    const loop = async () => {
      if (!isActive) return
      await pollFn().catch(console.error)
      timer = window.setTimeout(loop, delay)
    }
    loop()
  }

  // 停止轮询
  const stop = () => {
    isActive = false
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  // 组件自动销毁
  onUnmounted(() => {
    stop()
  })

  return { start, stop }
}