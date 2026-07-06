(function(){var e=`https://rexchat.ted3.workers.dev`,t=`[chatbot-widget]`,n=`myapp_chat_id`,r=document.currentScript,i=[];function a(){let e=localStorage.getItem(n);if(e)return e;let t=crypto.randomUUID();return localStorage.setItem(n,t),t}function o(){localStorage.removeItem(n);let e=crypto.randomUUID();return localStorage.setItem(n,e),e}function s(e){return e instanceof Error?{name:e.name,message:e.message,stack:e.stack}:{name:typeof e,message:String(e)}}function c(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function l(){let e=c(`style`);e.textContent=`
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
  `,document.head.appendChild(e)}function u(e,n){if(n===void 0){console.debug(t,e);return}console.debug(t,e,n)}function d(e,n){if(n===void 0){console.log(t,e);return}console.log(t,e,n)}function f(e){return`${e.replace(/\/$/,``)}/api/chatbot`}async function p(){return e}d(`Widget loaded`,{apiBaseUrl:e,scriptSrc:r?.src||null,pageUrl:window.location.href,pageOrigin:window.location.origin,userAgent:navigator.userAgent});function m(){l();let n=c(`button`,`cbw-launcher`);n.type=`button`,n.textContent=`?`,n.setAttribute(`aria-label`,`Open chat`);let r=c(`section`,`cbw-panel`),m=c(`div`,`cbw-header`),h=c(`div`,`cbw-header-actions`),g=c(`span`),_=c(`button`,`cbw-close`),v=c(`button`,`cbw-new-chat`),y=c(`div`,`cbw-messages`),b=c(`div`,`cbw-error`),x=c(`form`,`cbw-form`),S=c(`textarea`,`cbw-input`),C=c(`button`,`cbw-send`);g.textContent=`Chat`,_.type=`button`,_.textContent=`x`,_.setAttribute(`aria-label`,`Close chat`),v.type=`button`,v.textContent=`New Chat`,v.setAttribute(`aria-label`,`Start a new chat`),S.rows=1,S.placeholder=`Message...`,C.type=`submit`,C.textContent=`>`,h.append(v,_),m.append(g,h),x.append(S,C),r.append(m,y,b,x),document.body.append(r,n);function w(e){b.textContent=e??``,b.dataset.visible=e?`true`:`false`}function T(e){let t=c(`div`,`cbw-message cbw-message-${e.role}`);t.textContent=e.content,y.appendChild(t),y.scrollTop=y.scrollHeight}function E(){i.length=0,y.replaceChildren(),w(null),S.value=``,o(),S.focus()}n.addEventListener(`click`,()=>{r.dataset.open=r.dataset.open===`true`?`false`:`true`,p(),r.dataset.open===`true`&&S.focus()}),_.addEventListener(`click`,()=>{r.dataset.open=`false`}),v.addEventListener(`click`,()=>{E()}),x.addEventListener(`submit`,async n=>{n.preventDefault();let r=S.value.trim();if(!r)return;S.value=``,S.disabled=!0,C.disabled=!0,w(null);let o={role:`user`,content:r};i.push(o),T(o);let c=a(),l={chatId:c,messages:i};console.groupCollapsed(`${t} send`),d(`Send clicked`,{apiBase:e,apiBaseResolved:!0,pageOrigin:window.location.origin,online:navigator.onLine,chatId:c,messageCount:i.length,payload:l,payloadJson:JSON.stringify(l)});try{let e=await p(),t=f(e);u(`Submitting chat request`,{apiUrl:t,apiBase:e,chatId:c,messageCount:i.length,messages:i}),d(`Fetch starting`,{method:`POST`,url:t,chatId:c,headers:{"Content-Type":`application/json`}});let n=await fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(l)}),r=await n.text();d(`Fetch response received`,{ok:n.ok,status:n.status,statusText:n.statusText,contentType:n.headers.get(`content-type`),accessControlAllowOrigin:n.headers.get(`access-control-allow-origin`),rawResponse:r}),u(`Raw response received`,{ok:n.ok,status:n.status,statusText:n.statusText,rawResponse:r});let a;try{a=JSON.parse(r)}catch{throw Error(`Invalid JSON response (${n.status} ${n.statusText}).`)}if(!n.ok||`error`in a){i.pop();let e=`error`in a?a.error:`Chat request failed.`;throw u(`Chat request failed`,{status:n.status,statusText:n.statusText,errorMessage:e}),Error(e)}let o={role:`assistant`,content:a.text};i.push(o),T(o),d(`Assistant message appended`,{model:a.model,textLength:a.text.length,messageCount:i.length})}catch(n){let r=s(n);console.error(t,`Request error`,n,{apiUrl:f(e),apiBase:e,chatId:c,messageCount:i.length,pageOrigin:window.location.origin,online:navigator.onLine,errorDetails:r}),d(`Fetch failed before a readable response`,{apiUrl:f(e),likelyCauses:[`CORS/preflight rejected`,`network/DNS/TLS failure`,`Shopify sandbox/content policy blocked the request`,`ad blocker/privacy tool blocked the request`],errorDetails:r}),w(n instanceof Error?n.message:`Chat request failed.`)}finally{S.disabled=!1,C.disabled=!1,S.focus(),console.groupEnd()}})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,m,{once:!0}):m()})();