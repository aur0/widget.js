(function(){var e=`https://bun.warrenwebsites.co.uk`,t=`[chatbot-widget]`,n=document.currentScript??document.querySelector(`script[data-api-base]`),r=n?.dataset.apiBase||e,i=`${r.replace(/\/$/,``)}/api/chatbot`,a=[];function o(e){return e instanceof Error?{name:e.name,message:e.message,stack:e.stack}:{name:typeof e,message:String(e)}}function s(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function c(){let e=s(`style`);e.textContent=`
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
  `,document.head.appendChild(e)}function l(e,n){if(n===void 0){console.debug(t,e);return}console.debug(t,e,n)}function u(e,n){if(n===void 0){console.log(t,e);return}console.log(t,e,n)}u(`Widget loaded`,{apiBase:r,apiUrl:i,scriptSrc:n?.src||null,pageUrl:window.location.href,pageOrigin:window.location.origin,userAgent:navigator.userAgent});function d(){c();let e=s(`button`,`cbw-launcher`);e.type=`button`,e.textContent=`?`,e.setAttribute(`aria-label`,`Open chat`);let n=s(`section`,`cbw-panel`),d=s(`div`,`cbw-header`),f=s(`span`),p=s(`button`,`cbw-close`),m=s(`div`,`cbw-messages`),h=s(`div`,`cbw-error`),g=s(`form`,`cbw-form`),_=s(`textarea`,`cbw-input`),v=s(`button`,`cbw-send`);f.textContent=`Chat`,p.type=`button`,p.textContent=`x`,p.setAttribute(`aria-label`,`Close chat`),_.rows=1,_.placeholder=`Message...`,v.type=`submit`,v.textContent=`>`,d.append(f,p),g.append(_,v),n.append(d,m,h,g),document.body.append(n,e);function y(e){h.textContent=e??``,h.dataset.visible=e?`true`:`false`}function b(e){let t=s(`div`,`cbw-message cbw-message-${e.role}`);t.textContent=e.content,m.appendChild(t),m.scrollTop=m.scrollHeight}e.addEventListener(`click`,()=>{n.dataset.open=n.dataset.open===`true`?`false`:`true`,n.dataset.open===`true`&&_.focus()}),p.addEventListener(`click`,()=>{n.dataset.open=`false`}),g.addEventListener(`submit`,async e=>{e.preventDefault();let n=_.value.trim();if(!n)return;_.value=``,_.disabled=!0,v.disabled=!0,y(null);let s={role:`user`,content:n};a.push(s),b(s);let c={messages:a};console.groupCollapsed(`${t} send`),u(`Send clicked`,{apiUrl:i,apiBase:r,pageOrigin:window.location.origin,online:navigator.onLine,messageCount:a.length,payload:c,payloadJson:JSON.stringify(c)}),l(`Submitting chat request`,{apiUrl:i,apiBase:r,messageCount:a.length,messages:a});try{u(`Fetch starting`,{method:`POST`,url:i,headers:{"Content-Type":`application/json`}});let e=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(c)}),t=await e.text();u(`Fetch response received`,{ok:e.ok,status:e.status,statusText:e.statusText,contentType:e.headers.get(`content-type`),accessControlAllowOrigin:e.headers.get(`access-control-allow-origin`),rawResponse:t}),l(`Raw response received`,{ok:e.ok,status:e.status,statusText:e.statusText,rawResponse:t});let n;try{n=JSON.parse(t)}catch{throw Error(`Invalid JSON response (${e.status} ${e.statusText}).`)}if(!e.ok||`error`in n){a.pop();let t=`error`in n?n.error:`Chat request failed.`;throw l(`Chat request failed`,{status:e.status,statusText:e.statusText,errorMessage:t}),Error(t)}let r={role:`assistant`,content:n.text};a.push(r),b(r),u(`Assistant message appended`,{model:n.model,textLength:n.text.length,messageCount:a.length})}catch(e){let n=o(e);console.error(t,`Request error`,e,{apiUrl:i,apiBase:r,messageCount:a.length,pageOrigin:window.location.origin,online:navigator.onLine,errorDetails:n}),u(`Fetch failed before a readable response`,{apiUrl:i,likelyCauses:[`CORS/preflight rejected`,`network/DNS/TLS failure`,`Shopify sandbox/content policy blocked the request`,`ad blocker/privacy tool blocked the request`],errorDetails:n}),y(e instanceof Error?e.message:`Chat request failed.`)}finally{_.disabled=!1,v.disabled=!1,_.focus(),console.groupEnd()}})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,d,{once:!0}):d()})();