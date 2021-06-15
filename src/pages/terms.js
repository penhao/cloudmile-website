// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../src/pages_/terms'

export default function Page({ _ns, _lang, ...p }){
  return (
    <I18nProvider
      lang={_lang}
      namespaces={_ns}  
      
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

Page.getInitialProps = async ctx => {
      const _lang = ctx.locale || ctx.router?.locale || 'en'
  const ns0 = await import(`../../locales/${_lang}/common`).then(m => m.default)
const ns1 = await import(`../../locales/${_lang}/form`).then(m => m.default)
  const _ns = { 'common': ns0, 'form': ns1 }
  
      let res = typeof C.getInitialProps === 'function' ? C.getInitialProps(ctx) : {}
      if(typeof res.then === 'function') res = await res
      console.warn('[next-translate] In Next 10.0.0 there is an issue related to i18n and getInitialProps. We recommend that you change getInitialProps to getServerSideProps. Issue: https://github.com/vercel/next.js/issues/18396')
    
      return { ...res,  _ns, _lang }
    }






