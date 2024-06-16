async function register() {
  if (!('serviceWorker' in navigator)) {
    return
  }

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    location.reload()
  })

  const registration = await navigator.serviceWorker.getRegistration()
  if (registration) {
    registration.update()
  } else {
    await new Promise((r) => setTimeout(r, 3000))
    navigator.serviceWorker.register(
      new URL('/public/sw.ts', import.meta.url),
      { type: 'module', scope: '/' }
    )
  }
}

register()
