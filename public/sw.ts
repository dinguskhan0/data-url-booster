// https://stackoverflow.com/a/56374158
declare var self: ServiceWorkerGlobalScope
export {}

self.addEventListener('install', async (event) => {
  await self.skipWaiting()
})

self.addEventListener('activate', async (event) => {
  await self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)

  if (url.origin === location.origin) {
    const dataURL = url.searchParams.get('data')
    if (dataURL) {
      const split = dataURL.split(',', 1)
      const data = split[1]
      const header = split[0].split(';')
      const mime = header.filter((v) => v !== 'base64')

      const useBase64 = header.includes('base64')

      const headers = new Headers()
      headers.append('Content-Type', mime.join(';'))

      const res = new Response(
        useBase64 ? Uint8Array.from(atob(data), (v) => v.charCodeAt(0)) : data,
        { headers }
      )

      event.respondWith(res)
      return
    }
  }

  event.respondWith(fetch(event.request))
})
