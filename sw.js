// My Worklist 앱 설치용 서비스 워커 — 아무것도 저장(캐시)하지 않습니다.
// 늘 인터넷에서 최신 화면을 받아 오므로, 앱을 고쳐도 옛 화면이 남지 않아요.
// 구글 드라이브·날씨 등 바깥 주소로 가는 요청은 전혀 건드리지 않습니다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(fetch(e.request));
});
