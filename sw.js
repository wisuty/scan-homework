// Service worker ขั้นต่ำ — ทำให้ติดตั้งเป็น PWA ได้ (ไม่ทำ offline cache เพราะข้อมูลต้องสดเสมอ)
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){
  // ปล่อยให้โหลดจากเน็ตตามปกติ (ข้อมูลการบ้าน/สแกน ต้องเรียลไทม์)
  return;
});
