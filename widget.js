(function(){var e=`https://bun.warrenwebsites.co.uk/api/cloudflare-region`,t=`[chatbot-widget]`,n=document.currentScript,r=null,i=null,a=[];function o(e){return e instanceof Error?{name:e.name,message:e.message,stack:e.stack}:{name:typeof e,message:String(e)}}function s(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function c(){let e=s(`style`);e.textContent=`
    .cbw-launcher {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 2147483647;
      width: 54px;
      height: 54px;
      border: 0;
      border-radius: 50%;
      background: #111827;
      color: white;
      box-shadow: 0 18px 40px rgba(0,0,0,.24);
      cursor: pointer;
      font: 600 22px/1 system-ui, sans-serif;
    }

    .cbw-panel {
      position: fixed;
      right: 20px;
      bottom: 86px;
      z-index: 2147483647;
      display: none;
      width: min(380px, calc(100vw - 32px));
      height: min(560px, calc(100vh - 120px));
      overflow: hidden;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      background: white;
      color: #111827;
      box-shadow: 0 24px 70px rgba(0,0,0,.28);
      font: 14px/1.45 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .cbw-panel[data-open="true"] {
      display: flex;
      flex-direction: column;
    }

    .cbw-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      padding: 0 14px;
      border-bottom: 1px solid #e5e7eb;
      font-weight: 650;
    }

    .cbw-close {
      border: 0;
      background: transparent;
      color: #4b5563;
      cursor: pointer;
      font: 20px/1 system-ui, sans-serif;
    }

    .cbw-messages {
      flex: 1;
      overflow-y: auto;
      padding: 14px;
      background: #f9fafb;
    }

    .cbw-message {
      max-width: 82%;
      margin: 0 0 10px;
      padding: 9px 11px;
      border-radius: 10px;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    .cbw-message-user {
      margin-left: auto;
      background: #111827;
      color: white;
    }

    .cbw-message-assistant {
      border: 1px solid #e5e7eb;
      background: white;
      color: #111827;
    }

    .cbw-error {
      display: none;
      padding: 8px 12px;
      border-top: 1px solid #fecaca;
      background: #fef2f2;
      color: #991b1b;
      font-size: 13px;
    }

    .cbw-error[data-visible="true"] {
      display: block;
    }

    .cbw-form {
      display: flex;
      gap: 8px;
      padding: 10px;
      border-top: 1px solid #e5e7eb;
      background: white;
    }

    .cbw-input {
      min-width: 0;
      flex: 1;
      resize: none;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      padding: 9px 10px;
      font: inherit;
    }

    .cbw-send {
      width: 42px;
      border: 0;
      border-radius: 8px;
      background: #111827;
      color: white;
      cursor: pointer;
      font: 700 16px/1 system-ui, sans-serif;
    }
  `,document.head.appendChild(e)}function l(e,n){if(n===void 0){console.debug(t,e);return}console.debug(t,e,n)}function u(e,n){if(n===void 0){console.log(t,e);return}console.log(t,e,n)}function d(e){return`${e.replace(/\/$/,``)}/api/chatbot`}async function f(){return i||(r||=(async()=>{u(`Resolving API base`,{regionLookupUrl:e,scriptSrc:n?.src||null});let t=await fetch(e,{method:`GET`,headers:{Accept:`application/json`}}),r=await t.text();if(u(`Region lookup response received`,{ok:t.ok,status:t.status,statusText:t.statusText,rawResponse:r}),!t.ok)throw Error(`Region lookup failed (${t.status} ${t.statusText}).`);let a;try{a=JSON.parse(r)}catch{throw Error(`Invalid region lookup response (${t.status} ${t.statusText}).`)}let o=a[`data-api-base`];if(typeof o!=`string`||!o.trim())throw Error(`Region lookup response did not include data-api-base.`);return i=o,u(`API base resolved`,{apiBase:i}),i})().catch(e=>{throw r=null,e}),r)}u(`Widget loaded`,{regionLookupUrl:e,scriptSrc:n?.src||null,pageUrl:window.location.href,pageOrigin:window.location.origin,userAgent:navigator.userAgent});function p(){c();let n=s(`button`,`cbw-launcher`);n.type=`button`,n.textContent=`?`,n.setAttribute(`aria-label`,`Open chat`);let r=s(`section`,`cbw-panel`),p=s(`div`,`cbw-header`),m=s(`span`),h=s(`button`,`cbw-close`),g=s(`div`,`cbw-messages`),_=s(`div`,`cbw-error`),v=s(`form`,`cbw-form`),y=s(`textarea`,`cbw-input`),b=s(`button`,`cbw-send`);m.textContent=`Chat`,h.type=`button`,h.textContent=`x`,h.setAttribute(`aria-label`,`Close chat`),y.rows=1,y.placeholder=`Message...`,b.type=`submit`,b.textContent=`>`,p.append(m,h),v.append(y,b),r.append(p,g,_,v),document.body.append(r,n);function x(e){_.textContent=e??``,_.dataset.visible=e?`true`:`false`}function S(e){let t=s(`div`,`cbw-message cbw-message-${e.role}`);t.textContent=e.content,g.appendChild(t),g.scrollTop=g.scrollHeight}n.addEventListener(`click`,()=>{r.dataset.open=r.dataset.open===`true`?`false`:`true`,f(),r.dataset.open===`true`&&y.focus()}),h.addEventListener(`click`,()=>{r.dataset.open=`false`}),v.addEventListener(`submit`,async n=>{n.preventDefault();let r=y.value.trim();if(!r)return;y.value=``,y.disabled=!0,b.disabled=!0,x(null);let s={role:`user`,content:r};a.push(s),S(s);let c={messages:a};console.groupCollapsed(`${t} send`),u(`Send clicked`,{apiBase:i,apiBaseResolved:!!i,regionLookupUrl:e,pageOrigin:window.location.origin,online:navigator.onLine,messageCount:a.length,payload:c,payloadJson:JSON.stringify(c)});try{let e=await f(),t=d(e);l(`Submitting chat request`,{apiUrl:t,apiBase:e,messageCount:a.length,messages:a}),u(`Fetch starting`,{method:`POST`,url:t,headers:{"Content-Type":`application/json`}});let n=await fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(c)}),r=await n.text();u(`Fetch response received`,{ok:n.ok,status:n.status,statusText:n.statusText,contentType:n.headers.get(`content-type`),accessControlAllowOrigin:n.headers.get(`access-control-allow-origin`),rawResponse:r}),l(`Raw response received`,{ok:n.ok,status:n.status,statusText:n.statusText,rawResponse:r});let i;try{i=JSON.parse(r)}catch{throw Error(`Invalid JSON response (${n.status} ${n.statusText}).`)}if(!n.ok||`error`in i){a.pop();let e=`error`in i?i.error:`Chat request failed.`;throw l(`Chat request failed`,{status:n.status,statusText:n.statusText,errorMessage:e}),Error(e)}let o={role:`assistant`,content:i.text};a.push(o),S(o),u(`Assistant message appended`,{model:i.model,textLength:i.text.length,messageCount:a.length})}catch(e){let n=o(e);console.error(t,`Request error`,e,{apiUrl:i?d(i):null,apiBase:i,messageCount:a.length,pageOrigin:window.location.origin,online:navigator.onLine,errorDetails:n}),u(`Fetch failed before a readable response`,{apiUrl:i?d(i):null,likelyCauses:[`CORS/preflight rejected`,`network/DNS/TLS failure`,`Shopify sandbox/content policy blocked the request`,`ad blocker/privacy tool blocked the request`],errorDetails:n}),x(e instanceof Error?e.message:`Chat request failed.`)}finally{y.disabled=!1,b.disabled=!1,y.focus(),console.groupEnd()}})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,p,{once:!0}):p()})();