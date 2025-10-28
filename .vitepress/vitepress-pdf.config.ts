import type { DefaultTheme } from 'vitepress'
import { defineUserConfig } from 'vitepress-export-pdf'

const routeOrder = [
  '/developers/luaext.html',
]

const headerTemplate = `<div style="margin-top: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; font-size: 10px;">
  <span class="title"></span>
</div>`

const footerTemplate =  '<div style="margin-left: 1.0cm; margin-right: 1.0cm; margin-bottom: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-top: solid lightgray 1px; font-size: 10px;">Page <span class="pageNumber"></span></div>'


export default defineUserConfig({
  outFile: 'ElectraOne-mk2-Documentation.pdf',
  outDir: 'pdf',
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate,
    footerTemplate,
    margin: {
      bottom: 30,
      left: 25,
      right: 25,
      top: 45,
    },
  },
  urlOrigin: 'https://docs.electra.one/',
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex(route => route === pageA.path)
    const bIndex = routeOrder.findIndex(route => route === pageB.path)
    return aIndex - bIndex
  },
  routePatterns: ['!/'],
})