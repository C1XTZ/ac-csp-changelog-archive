"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[8180],{4257:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"changelogs/0-1-63","title":"v0.1.63","description":"*   Version ID: 1149","source":"@site/docs/changelogs/0-1-63.md","sourceDirName":"changelogs","slug":"/changelogs/0-1-63","permalink":"/ac-csp-changelog-archive/changelogs/0-1-63","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"v0.1.63"},"sidebar":"versionSidebar","previous":{"title":"v0.1.64","permalink":"/ac-csp-changelog-archive/changelogs/0-1-64"},"next":{"title":"v0.1.62","permalink":"/ac-csp-changelog-archive/changelogs/0-1-62"}}');var r=i(4848),o=i(8453);const l={title:"v0.1.63"},t=void 0,a={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Fixes",id:"fixes",level:2},{value:"For new content and configs",id:"for-new-content-and-configs",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Version ID: 1149"}),"\n",(0,r.jsx)(n.li,{children:"Size: 47.2 MB"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsx)(n.p,{children:"Rain is not here yet, but it\u2019s almost ready, its visual part is pretty much finished now. Just a few more things left. As for this update, mainly it\u2019s a lot of fixes, but there are some new features too:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New screen-space ambient occlusion mode, ASSAO;"}),"\n",(0,r.jsx)(n.li,{children:"New shader for tyre grooves with improved look and oil spills for cars with broken engines (will be used automatically);"}),"\n",(0,r.jsx)(n.li,{children:"New more accurate sky shader for Weather FX;"}),"\n",(0,r.jsx)(n.li,{children:"Clutch is recorded in replays;"}),"\n",(0,r.jsx)(n.li,{children:"Accumulation DOF;"}),"\n",(0,r.jsx)(n.li,{children:"New photo app: slider for \u0192-number to adjust DOF intensity;"}),"\n",(0,r.jsx)(n.li,{children:"Back to four wiper modes by default for modern cars;"}),"\n",(0,r.jsx)(n.li,{children:"Maximum amount of lights working simultaneously is increased slightly;"}),"\n",(0,r.jsx)(n.li,{children:"Better shadows for accumulation screenshots, with a bit of accurate distance-based blur;"}),"\n",(0,r.jsx)(n.li,{children:"Tyres FX: reflection occlusion, to reduce reflectiveness under wheel arches;"}),"\n",(0,r.jsx)(n.li,{children:"Option to start the race with throttle pedal, right trigger or associated button (in GUI section);"}),"\n",(0,r.jsx)(n.li,{children:"A couple of options to improve FPS limiter behaviour (in General section)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SSLR blurring fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Refraction breaking after taking a screenshot fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Most objects turning black in certain places on some tracks fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Mirage and atmosphere distortion now don\u2019t fade away that much with cars driving by;"}),"\n",(0,r.jsx)(n.li,{children:"Fake car shadows now occlude SSLR properly;"}),"\n",(0,r.jsx)(n.li,{children:"Fake Shadows FX fixed: no more weird offsets for wheels, no more missing shadows (hopefully);"}),"\n",(0,r.jsx)(n.li,{children:"Weather FX issue with brighter sky in reflections fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Tyres FX fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Few issues with extended physics, including the problem with P13c, fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Reduced flicker with refraction;"}),"\n",(0,r.jsx)(n.li,{children:"Clipping issues with Graphics Adjustments in VR fixed;"}),"\n",(0,r.jsx)(n.li,{children:"No more offline cars on that new radar app;"}),"\n",(0,r.jsx)(n.li,{children:"Issue with smoke rendered above windscreen without Extra FX fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Crashes and various glitches related to shader replacement fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Broken glass shader updated to make it less noisy;"}),"\n",(0,r.jsxs)(n.li,{children:["Issue with normal map with ",(0,r.jsx)(n.code,{children:"ksMultilayer_fresnel_nm_ps"})," fixed;"]}),"\n",(0,r.jsx)(n.li,{children:"New name tags function properly online;"}),"\n",(0,r.jsx)(n.li,{children:"Few other performance and stability issues fixed."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"for-new-content-and-configs",children:"For new content and configs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Shader stFlow is now included thanks to @Stereo;"}),"\n",(0,r.jsx)(n.li,{children:"Improved tyres shader with an option to use txNormal\u2019s alpha channel as a roughness map;"}),"\n",(0,r.jsx)(n.li,{children:"Now it\u2019s possible to combine navigators, car stereos and analog odometers within a single mesh (a lot of new extensions for dynamic textures in cars are coming soon);"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"FALLBACK_BASE_COLOR"})," and ",(0,r.jsx)(n.code,{children:"FALLBACK_IDLE_COLOR"})," options for custom emissives;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"DEPTH_MODE"})," value, ",(0,r.jsx)(n.code,{children:"NORMAL_FORCED"}),", which can override ",(0,r.jsx)(n.code,{children:"READ_ONLY"})," behaviour for transparent meshes;"]}),"\n",(0,r.jsx)(n.li,{children:"ABS input for car instruments returns actual mode instead of simply being 0 or 1;"}),"\n",(0,r.jsxs)(n.li,{children:["Mesh filter keywords ",(0,r.jsx)(n.code,{children:"alphaBlend:no"})," and ",(0,r.jsx)(n.code,{children:"alphaTest:no"})," now work;"]}),"\n",(0,r.jsxs)(n.li,{children:["New object filter keywords: ",(0,r.jsx)(n.code,{children:"driverPiece:yes"})," for things within driver model;"]}),"\n",(0,r.jsxs)(n.li,{children:["PBR glass shader now has an option for blurring things behind it, great for edges on glass of open wheelers;","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Also, it now has an option for edge detection, finding edges facing a certain point;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Masking pass (the one for colored glass) now works with windscreen shader;"}),"\n",(0,r.jsx)(n.li,{children:"Normals smoothing now can be applied to physics meshes as well (normals don\u2019t affect physics anyway);"}),"\n",(0,r.jsxs)(n.li,{children:["Minor navigator update with new controls and a new navigator theme ",(0,r.jsx)(n.code,{children:"[Navigator_StyleNavitel]"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Shader ",(0,r.jsx)(n.code,{children:"ksPerPixelAT_NM"})," now has an option for light bouncing back;"]}),"\n",(0,r.jsx)(n.li,{children:"Windows shader (with fake interior lights) got an option for a bit of distortion to its reflections and a small fix for when it\u2019s viewed from above;"}),"\n",(0,r.jsx)(n.li,{children:"Double reload on config change should happen less now;"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"bannerMode"})," option for ",(0,r.jsx)(n.code,{children:"ksWindscreen"}),", perfect for tinted glass or banners;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"MOVE_IN_FRONT"})," option for ",(0,r.jsx)(n.code,{children:"NODE_ADJUSTMENT"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"A bit of backlit and boost for dynamic lights for trees and grass shaders;"}),"\n",(0,r.jsx)(n.li,{children:"Carved look for new brake disks shader is more noticeable;"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.setGlareBloomLuminanceGamma()"})," function for Weather FX."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var s=i(6540);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);