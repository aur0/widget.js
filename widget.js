(function(){var e=`https://bun.warrenwebsites.co.uk/api/cloudflare-region`,t=`[chatbot-widget]`,n=`myapp_chat_id`,r=document.currentScript,i=null,a=null,o=[];function s(){let e=localStorage.getItem(n);if(e)return e;let t=crypto.randomUUID();return localStorage.setItem(n,t),t}function c(){localStorage.removeItem(n);let e=crypto.randomUUID();return localStorage.setItem(n,e),e}function l(e){return e instanceof Error?{name:e.name,message:e.message,stack:e.stack}:{name:typeof e,message:String(e)}}function u(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function d(){let e=u(`style`);e.textContent=`
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
      gap: 8px;
      height: 48px;
      padding: 0 14px;
      border-bottom: 1px solid #e5e7eb;
      font-weight: 650;
    }

    .cbw-header > span {
      flex: 1;
      min-width: 0;
    }

    .cbw-header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .cbw-close {
      border: 0;
      background: transparent;
      color: #4b5563;
      cursor: pointer;
      font: 20px/1 system-ui, sans-serif;
    }

    .cbw-new-chat {
      border: 1px solid #d1d5db;
      border-radius: 999px;
      background: white;
      color: #374151;
      cursor: pointer;
      font: 600 12px/1 system-ui, sans-serif;
      padding: 7px 10px;
      white-space: nowrap;
    }

    .cbw-new-chat:hover {
      background: #f9fafb;
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
  `,document.head.appendChild(e)}function f(e,n){if(n===void 0){console.debug(t,e);return}console.debug(t,e,n)}function p(e,n){if(n===void 0){console.log(t,e);return}console.log(t,e,n)}function m(e){return`${e.replace(/\/$/,``)}/api/chatbot`}async function h(){return a||(i||=(async()=>{p(`Resolving API base`,{regionLookupUrl:e,scriptSrc:r?.src||null});let n=await fetch(e,{method:`GET`,headers:{Accept:`application/json`}}),i=await n.text();if(console.log(t,`Region lookup raw response`,i),p(`Region lookup response received`,{ok:n.ok,status:n.status,statusText:n.statusText,rawResponse:i}),!n.ok)throw Error(`Region lookup failed (${n.status} ${n.statusText}).`);let o;try{o=JSON.parse(i)}catch{throw Error(`Invalid region lookup response (${n.status} ${n.statusText}).`)}let s=o[`data-api-base`];if(typeof s!=`string`||!s.trim())throw Error(`Region lookup response did not include data-api-base.`);return a=s,p(`API base resolved`,{apiBase:a}),a})().catch(e=>{throw i=null,e}),i)}p(`Widget loaded`,{regionLookupUrl:e,scriptSrc:r?.src||null,pageUrl:window.location.href,pageOrigin:window.location.origin,userAgent:navigator.userAgent});function g(){d();let n=u(`button`,`cbw-launcher`);n.type=`button`,n.textContent=`?`,n.setAttribute(`aria-label`,`Open chat`);let r=u(`section`,`cbw-panel`),i=u(`div`,`cbw-header`),g=u(`div`,`cbw-header-actions`),_=u(`span`),v=u(`button`,`cbw-close`),y=u(`button`,`cbw-new-chat`),b=u(`div`,`cbw-messages`),x=u(`div`,`cbw-error`),S=u(`form`,`cbw-form`),C=u(`textarea`,`cbw-input`),w=u(`button`,`cbw-send`);_.textContent=`Chat`,v.type=`button`,v.textContent=`x`,v.setAttribute(`aria-label`,`Close chat`),y.type=`button`,y.textContent=`New Chat`,y.setAttribute(`aria-label`,`Start a new chat`),C.rows=1,C.placeholder=`Message...`,w.type=`submit`,w.textContent=`>`,g.append(y,v),i.append(_,g),S.append(C,w),r.append(i,b,x,S),document.body.append(r,n);function T(e){x.textContent=e??``,x.dataset.visible=e?`true`:`false`}function E(e){let t=u(`div`,`cbw-message cbw-message-${e.role}`);t.textContent=e.content,b.appendChild(t),b.scrollTop=b.scrollHeight}function D(){o.length=0,b.replaceChildren(),T(null),C.value=``,c(),C.focus()}n.addEventListener(`click`,()=>{r.dataset.open=r.dataset.open===`true`?`false`:`true`,h(),r.dataset.open===`true`&&C.focus()}),v.addEventListener(`click`,()=>{r.dataset.open=`false`}),y.addEventListener(`click`,()=>{D()}),S.addEventListener(`submit`,async n=>{n.preventDefault();let r=C.value.trim();if(!r)return;C.value=``,C.disabled=!0,w.disabled=!0,T(null);let i={role:`user`,content:r};o.push(i),E(i);let c=s(),u={chatId:c,messages:o};console.groupCollapsed(`${t} send`),p(`Send clicked`,{apiBase:a,apiBaseResolved:!!a,regionLookupUrl:e,pageOrigin:window.location.origin,online:navigator.onLine,chatId:c,messageCount:o.length,payload:u,payloadJson:JSON.stringify(u)});try{let e=await h(),t=m(e);f(`Submitting chat request`,{apiUrl:t,apiBase:e,chatId:c,messageCount:o.length,messages:o}),p(`Fetch starting`,{method:`POST`,url:t,chatId:c,headers:{"Content-Type":`application/json`}});let n=await fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(u)}),r=await n.text();p(`Fetch response received`,{ok:n.ok,status:n.status,statusText:n.statusText,contentType:n.headers.get(`content-type`),accessControlAllowOrigin:n.headers.get(`access-control-allow-origin`),rawResponse:r}),f(`Raw response received`,{ok:n.ok,status:n.status,statusText:n.statusText,rawResponse:r});let i;try{i=JSON.parse(r)}catch{throw Error(`Invalid JSON response (${n.status} ${n.statusText}).`)}if(!n.ok||`error`in i){o.pop();let e=`error`in i?i.error:`Chat request failed.`;throw f(`Chat request failed`,{status:n.status,statusText:n.statusText,errorMessage:e}),Error(e)}let a={role:`assistant`,content:i.text};o.push(a),E(a),p(`Assistant message appended`,{model:i.model,textLength:i.text.length,messageCount:o.length})}catch(e){let n=l(e);console.error(t,`Request error`,e,{apiUrl:a?m(a):null,apiBase:a,chatId:c,messageCount:o.length,pageOrigin:window.location.origin,online:navigator.onLine,errorDetails:n}),p(`Fetch failed before a readable response`,{apiUrl:a?m(a):null,likelyCauses:[`CORS/preflight rejected`,`network/DNS/TLS failure`,`Shopify sandbox/content policy blocked the request`,`ad blocker/privacy tool blocked the request`],errorDetails:n}),T(e instanceof Error?e.message:`Chat request failed.`)}finally{C.disabled=!1,w.disabled=!1,C.focus(),console.groupEnd()}})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,g,{once:!0}):g()})();