"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[8833],{2440:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"changelogs/0-2-2","title":"v0.2.2","description":"*   Version ID: 2744","source":"@site/docs/changelogs/0-2-2.md","sourceDirName":"changelogs","slug":"/changelogs/0-2-2","permalink":"/ac-csp-changelog-archive/changelogs/0-2-2","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"v0.2.2"},"sidebar":"versionSidebar","previous":{"title":"v0.2.3-preview1","permalink":"/ac-csp-changelog-archive/changelogs/0-2-3p1"},"next":{"title":"v0.2.2-preview1","permalink":"/ac-csp-changelog-archive/changelogs/0-2-2p1"}}');var r=s(4848),l=s(8453);const o={title:"v0.2.2"},a="Changelog",t={},c=[{value:"New features, options and improvements",id:"new-features-options-and-improvements",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Car, track &amp; server configs",id:"car-track--server-configs",level:2},{value:"Lua &amp; Python scripting",id:"lua--python-scripting",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Version ID: 2744"}),"\n",(0,r.jsx)(n.li,{children:"Size: 93.38 MB"}),"\n",(0,r.jsx)(n.li,{children:"Published: 2023-12-22"}),"\n"]}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"changelog",children:"Changelog"})}),"\n",(0,r.jsx)(n.h2,{id:"new-features-options-and-improvements",children:"New features, options and improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New bindings for sequential gear shifts (should be a lot more reliable than secondary CM bindings);"}),"\n",(0,r.jsx)(n.li,{children:"Collider-based LODs updated: shading and shape are a lot closer to actual models;"}),"\n",(0,r.jsx)(n.li,{children:"New splitscreen race mode (moved from Custom Rendering Modes module, with a bunch of fixes too);"}),"\n",(0,r.jsx)(n.li,{children:"New option for hiding distant drivers;"}),"\n",(0,r.jsx)(n.li,{children:"Traffic mode got a top speed multiplier option, as well as a bunch of fixes and performance improvements;"}),"\n",(0,r.jsx)(n.li,{children:"Delaying system bindings works in fullscreen mode (requires the upcoming CM version)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lua audio fixed;"}),"\n",(0,r.jsx)(n.li,{children:"AI drivers no longer leave pits all at once;"}),"\n",(0,r.jsx)(n.li,{children:"OpenVR postponed swap doesn\u2019t affect FFB anymore;"}),"\n",(0,r.jsx)(n.li,{children:"Collider-based LODs are compatible with LODless cars limit;"}),"\n",(0,r.jsx)(n.li,{children:"New audio app: transmission volume can be linked to engine volume;"}),"\n",(0,r.jsx)(n.li,{children:"Loading custom transmission volume setting fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Bindings for car switches G/H/I/J added to the list;"}),"\n",(0,r.jsx)(n.li,{children:"Setup tabs order for cars with custom physics fixed again;"}),"\n",(0,r.jsx)(n.li,{children:"New Modes and Custom Rendering Modes modules are always active (they won\u2019t waste any resources unless activated);"}),"\n",(0,r.jsx)(n.li,{children:"VAO patch is correctly applied to driver LOD B;"}),"\n",(0,r.jsx)(n.li,{children:"Shadowed wheels and driver apply to more than just the few nearest cars;"}),"\n",(0,r.jsx)(n.li,{children:"Plank wear should be included when saving car state;"}),"\n",(0,r.jsx)(n.li,{children:"Custom driver modes load faster, issues with LOD B are fixed;"}),"\n",(0,r.jsx)(n.li,{children:"AI payloads cache refreshes if KN5s have been changed;"}),"\n",(0,r.jsx)(n.li,{children:"Rare crash with extra replay streams (like with brakes with temperature) fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Issue with controls conflict message when binding POVs should be fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Some crashes when trying to load some super broken DDS textures fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Few smaller bugfixes and stability improvements."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"car-track--server-configs",children:"Car, track & server configs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Full reload reloads lights properly;"}),"\n",(0,r.jsx)(n.li,{children:"Most of custom physics no longer reloads live to keep things more stable;"}),"\n",(0,r.jsx)(n.li,{children:"Applying skinned to non-skinned shader replacement (or vice versa) won\u2019t work;"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ALLOWED_TYRES_OUT"})," in ",(0,r.jsx)(n.code,{children:"race.ini"})," is respected in offline races (unless value is negative)."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"lua--python-scripting",children:"Lua & Python scripting"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.blockSystemMessages()"})," to filter out some of the messages;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.StateCar.isDriverSeatbeltOn"})," flag;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.GeometryShot():setOpaqueAlphaFix()"})," for drawing objects with transparent background properly;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.applyLiveConfigEdit()"})," works with ",(0,r.jsx)(n.code,{children:"custom_rendering_modes.ini"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.loadCarControlsConfiguration()"})," for Lua apps for some very special cases;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"physics.setAllowedTyresOut()"})," (available for new modes even if the rest of physics API is not);"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.StateCphysCar.fuelConsumption"})," and ",(0,r.jsx)(n.code,{children:"ac.setFuelConsumption()"})," for car physics scripts;"]}),"\n",(0,r.jsx)(n.li,{children:"Finite check in physics and custom physics script API changed, should be more informative and less crashy;"}),"\n",(0,r.jsx)(n.li,{children:"Releasing named Lua textures fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Disposing Lua textures should clear them too, just in case;"}),"\n",(0,r.jsx)(n.li,{children:"System messages no longer show for scripts attached to AI driven cars;"}),"\n",(0,r.jsxs)(n.li,{children:["Memory leak and performance issues of ",(0,r.jsx)(n.code,{children:"ac.SceneReference:loadKN5LOD()"})," fixed;"]}),"\n",(0,r.jsx)(n.li,{children:"A few new Python functions."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(6540);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);