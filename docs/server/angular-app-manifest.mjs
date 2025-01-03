
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 4937, hash: 'd9670751ec511a0abd188687da22961cfbfe5ed86cfd525bf1bf3cf68918b6f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '718e0b8c0bd335984db4b04e03a33bad598f4826a4d61b30d084c798cefd30c1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 13180, hash: '28cf25c14f569ebaea8a32be45a6971a3f08d9a937affcaa0f5ea80133b6a24d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 18943, hash: '838073172634c807aef14cfcbf8234e3be8878f312ed7bc87d007006934b8c7e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-SW4ZNXUH.css': {size: 231715, hash: 'vJV+QMMRhFo', text: () => import('./assets-chunks/styles-SW4ZNXUH_css.mjs').then(m => m.default)}
  },
};
