
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Harivaigundam.github.io/AGM/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://Harivaigundam.github.io/AGM/home"
  },
  {
    "renderMode": 2,
    "route": "/https://Harivaigundam.github.io/AGM/contact"
  },
  {
    "renderMode": 2,
    "route": "/https://Harivaigundam.github.io/AGM/**"
  }
],
  assets: {
    'index.csr.html': {size: 4972, hash: '5fe0dda827cc7871db54cb11b3a07bf7caa15e783624984daa42e38d2a1c9217', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1071, hash: '77e8d33e4867f4952da1ac65eade5378ab6dfcaf9e0aa3a8dab9e5d6c3f782fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 19083, hash: 'f2f81c751c545b04845ff8fcee872c976b653161ed4292465e7b135500f56819', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19083, hash: 'f2f81c751c545b04845ff8fcee872c976b653161ed4292465e7b135500f56819', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-SW4ZNXUH.css': {size: 231715, hash: 'vJV+QMMRhFo', text: () => import('./assets-chunks/styles-SW4ZNXUH_css.mjs').then(m => m.default)}
  },
};
