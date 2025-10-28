import { h, nextTick, onMounted, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'

import './style.css'
import './custom.css'
import './print.css'

import YouTubeVideo from './components/YouTubeVideo.vue'
import LuaFunctionDoc from './components/LuaFunctionDoc.vue'
import ElectraPresetLink from './components/ElectraPresetLink.vue'
import PageBreak from './components/PageBreak.vue'
import SysexBytesDescription from './components/SysexBytesDescription.vue'
import JsonAttributes from './components/JsonAttributes.vue'
import DownloadButton from './components/DownloadButton.vue'
import DownloadLink from './components/DownloadLink.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  enhanceApp({ app }) {
    app.component('YouTubeVideo', YouTubeVideo)
    app.component('LuaFunctionDoc', LuaFunctionDoc)
    app.component('ElectraPresetLink', ElectraPresetLink)
    app.component('PageBreak', PageBreak)
    app.component('SysexBytesDescription', SysexBytesDescription)
    app.component('JsonAttributes', JsonAttributes)
    app.component('DownloadButton', DownloadButton)
    app.component('DownloadLink', DownloadLink)
  },
  setup() {
    const route = useRoute()
    watch(
      () => route.path,
      () => nextTick(() => {
        if (inBrowser)
          mediumZoom('[data-zoomable]')
      }),
      { immediate: true },
    )
  }
}
