const h = [
  "/new-perspectives/internal/immutable/start-00ab5856.js",
  "/new-perspectives/internal/immutable/pages/__layout.svelte-ffd85efb.js",
  "/new-perspectives/internal/immutable/assets/__layout-d25969e8.css",
  "/new-perspectives/internal/immutable/assets/Header-1ef2fb5e.css",
  "/new-perspectives/internal/immutable/error.svelte-2c12e5aa.js",
  "/new-perspectives/internal/immutable/pages/about.svelte-ca6346d0.js",
  "/new-perspectives/internal/immutable/assets/about-9682aba9.css",
  "/new-perspectives/internal/immutable/pages/index.svelte-8e2ed99d.js",
  "/new-perspectives/internal/immutable/assets/index-b1915aa1.css",
  "/new-perspectives/internal/immutable/chunks/index-bb97c4eb.js",
  "/new-perspectives/internal/immutable/chunks/index-8e23e67f.js",
  "/new-perspectives/internal/immutable/chunks/paths-86ffdd15.js"
], m = [
  "/new-perspectives/android-chrome-192x192.png",
  "/new-perspectives/android-chrome-512x512.png",
  "/new-perspectives/apple-touch-icon.png",
  "/new-perspectives/browserconfig.xml",
  "/new-perspectives/favicon-16x16.png",
  "/new-perspectives/favicon-32x32.png",
  "/new-perspectives/favicon.ico",
  "/new-perspectives/logo.png",
  "/new-perspectives/maskable_icon_x512.png",
  "/new-perspectives/mstile-150x150.png",
  "/new-perspectives/robots.txt",
  "/new-perspectives/safari-pinned-tab.svg",
  "/new-perspectives/site.webmanifest"
], i = "1659138306004", n = self, r = `cache${i}`, p = `offline${i}`, w = ["/"], u = [
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap",
  "https://unpkg.com/ress/dist/ress.min.css",
  "https://fonts.gstatic.com/s/inter/v11/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2"
], f = (e) => e.map((s) => self.location.origin + s), d = f([
  ...m.filter((e) => !/\/icons\/(apple.*?|original.png)/.test(e)),
  ...h,
  ...w
]), o = [...d, ...u], v = new Set(o);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(r).then((s) => s.addAll(o)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== r && t !== p && await caches.delete(t);
      n.clients.claim();
    })
  );
});
async function b(e) {
  const s = await caches.open(p);
  try {
    const t = await fetch(e);
    return s.put(e, t.clone()), t;
  } catch (t) {
    const c = await s.match(e);
    if (c)
      return c;
    throw t;
  }
}
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), t = s.protocol.startsWith("http"), c = s.hostname === self.location.hostname && s.port !== self.location.port, a = v.has(s.href), l = e.request.cache === "only-if-cached" && !a;
  t && !c && !l && e.respondWith(
    (async () => a && await caches.match(e.request) || b(e.request))()
  );
});
