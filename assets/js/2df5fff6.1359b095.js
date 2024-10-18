"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[3362],{2824:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var s=i(4848),r=i(8453);const o={title:"v0.1.74-preview63"},l=void 0,t={id:"Changelogs/0-1-74p63",title:"v0.1.74-preview63",description:"*   Version ID: ????",source:"@site/docs/Changelogs/0-1-74p63.md",sourceDirName:"Changelogs",slug:"/Changelogs/0-1-74p63",permalink:"/ac-csp-changelog-archive/Changelogs/0-1-74p63",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"v0.1.74-preview63"},sidebar:"versionSidebar",previous:{title:"v0.1.74-preview98",permalink:"/ac-csp-changelog-archive/Changelogs/0-1-74p98"},next:{title:"v0.1.73",permalink:"/ac-csp-changelog-archive/Changelogs/0-1-73"}},a={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Fixes",id:"fixes",level:2},{value:"For new content and configs",id:"for-new-content-and-configs",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Version ID: ????"}),"\n",(0,s.jsx)(n.li,{children:"Tags: untested"}),"\n",(0,s.jsx)(n.li,{children:"Size: ??.?? MB"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"New generic configs affecting all cars and tracks (wouldn\u2019t do much at the moment);"}),"\n",(0,s.jsx)(n.li,{children:"Major rewrite of advanced culling to improve its performance;"}),"\n",(0,s.jsxs)(n.li,{children:["DXGI tweaks got a few more options (unrelated to flip model):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use GPU based on selected screen in AC video settings;"}),"\n",(0,s.jsx)(n.li,{children:"True borderless mode;"}),"\n",(0,s.jsx)(n.li,{children:"Triple buffering and custom maximum frame latency;"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Option for SIMD-accelerated culling for tracks;"}),"\n",(0,s.jsx)(n.li,{children:"Option to disable audio if AC is minimized or in background;"}),"\n",(0,s.jsx)(n.li,{children:"Smart mirror: option to override mirrors rendering distance;"}),"\n",(0,s.jsx)(n.li,{children:"Radar app: settings for colors, updated look;"}),"\n",(0,s.jsx)(n.li,{children:"Loading smoothness and informativeness greatly improved, thanks to new built-in loading profiler;"}),"\n",(0,s.jsx)(n.li,{children:"Loading should be faster now, with option to speed it up further with caching (enabled by default);"}),"\n",(0,s.jsx)(n.li,{children:"VAO darkness fixed with dynamically adjustable gamma;"}),"\n",(0,s.jsx)(n.li,{children:"Reworked crash messages, now with additional checks and tips;"}),"\n",(0,s.jsx)(n.li,{children:"Crash reports include CSP settings preset;"}),"\n",(0,s.jsx)(n.li,{children:"Sound speed takes temperature and other stuff into account;"}),"\n",(0,s.jsx)(n.li,{children:"GUI: optional warning for throttle and brake pedals overlap;"}),"\n",(0,s.jsx)(n.li,{children:"Custom colors online now saved across sessions;"}),"\n",(0,s.jsx)(n.li,{children:"Option for adaptive near clip plane to improve the look with camera far away from cars and track;"}),"\n",(0,s.jsx)(n.li,{children:"Custom VR mirroring: new mode showing right eye only;"}),"\n",(0,s.jsx)(n.li,{children:"Teleporting destinations list is more compact, supports grouping and can filter points;"}),"\n",(0,s.jsx)(n.li,{children:"Few small optimizations."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Crashes on certain tracks fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Option for smoother loading shouldn\u2019t make it that much longer now;"}),"\n",(0,s.jsx)(n.li,{children:"\u201cShow on screen\u201d now works properly, including negative coordinates or fullscreen;"}),"\n",(0,s.jsx)(n.li,{children:"Non-mirrory mirrors on other cars fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Reflection cubemap messing up rendering order and causing some meshes to not be visible fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Pinned app are no longer resizable;"}),"\n",(0,s.jsx)(n.li,{children:"Changed general settings during the race now won\u2019t trigger full CSP reload;"}),"\n",(0,s.jsx)(n.li,{children:"WeatherFX: cloud shadows and cloud rendering fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Navigators occasionally showing random mess on map fixed, also now work without GUI module enabled;"}),"\n",(0,s.jsx)(n.li,{children:"Major performance issue appearing on some GPUs as a strange FPS limiter fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Crashes with car instruments module disabled fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Heating effect not working properly without bounced light enabled fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Meshes on distant cars disappearing too early fixed;"}),"\n",(0,s.jsx)(n.li,{children:"TyresFX now works in mirrors properly;"}),"\n",(0,s.jsx)(n.li,{children:"PBR shader with clear coat: dynamic lights fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Exterior glancing head trajectory fixed to avoid clipping through the roof in some cars;"}),"\n",(0,s.jsx)(n.li,{children:"Accessible color now uses 32 bpp instead of 64 to help with performance;"}),"\n",(0,s.jsx)(n.li,{children:"Forced throttle and neutral gear button for keyboard input mode fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Fireworks audio and visual fixed, now reflected in cubemaps;"}),"\n",(0,s.jsx)(n.li,{children:"Crash with mouse steering on certain tracks with very short AI spline fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Mirrors breaking and cockit switching to LR version with F6 cameras when other cars are close fixed;"}),"\n",(0,s.jsx)(n.li,{children:"TyresFX no longer breaks after session restart;"}),"\n",(0,s.jsx)(n.li,{children:"Inverted reflections (for example, causing black blobs on some tyres at night) fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Few smaller fixes."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"for-new-content-and-configs",children:"For new content and configs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TyresFX: specify tyres pattern for certain tyre types in config;"}),"\n",(0,s.jsxs)(n.li,{children:["Extended physics for cars:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Option to use real mass online to improve collisions for heavy cars;"}),"\n",(0,s.jsx)(n.li,{children:"Options to redefine collision parameters;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Extended physics for tracks:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Option to use real mass for cars online;"}),"\n",(0,s.jsx)(n.li,{children:"Options to redefine collision parameters for different surfaces;"}),"\n",(0,s.jsx)(n.li,{children:"Option to use rigid collision between surface and car mesh colliders, to try and prevent cars falling through in some extreme cases;"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"INIpp: includes now can be optional, with expressions for file names, new functions to access and modify stuff that\u2019s already been parsed;"}),"\n",(0,s.jsxs)(n.li,{children:["New inputs for ",(0,s.jsx)(n.code,{children:"read()"})," for car and track configs;"]}),"\n",(0,s.jsxs)(n.li,{children:["WeatherFX: new ",(0,s.jsx)(n.code,{children:"ac.setVAOExponent(gamma)"})," function;"]}),"\n",(0,s.jsxs)(n.li,{children:["Python function ",(0,s.jsx)(n.code,{children:"ac.ext_loadIniFileAsJson()"})," fixed, ",(0,s.jsx)(n.code,{children:"ac.ext_parseIniFileToJson()"})," renamed to ",(0,s.jsx)(n.code,{children:"ac.ext_parseIniAsJson()"})," (old name also works for compatibility);"]}),"\n",(0,s.jsxs)(n.li,{children:["New parameter ",(0,s.jsx)(n.code,{children:"SHOW_IN_REFLECTIONS"})," for track lights (please use it carefully, by default only lights with range above 10 meters is included to speed things up);"]}),"\n",(0,s.jsx)(n.li,{children:"Car lights: tint for high and low beams;"}),"\n",(0,s.jsx)(n.li,{children:"Car lights and custom emissives: separate lag up/down, custom heating color and other parameters;"}),"\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.code,{children:"set observeDigital 1"})," shouldn\u2019t crash AC now;"]}),"\n",(0,s.jsxs)(n.li,{children:["New Lua function ",(0,s.jsx)(n.code,{children:"ac.getSoundSpeedMs()"})," to get accurate sound speed;"]}),"\n",(0,s.jsx)(n.li,{children:"Lua audio events got a new pitch parameter;"}),"\n",(0,s.jsx)(n.li,{children:"Extended raytracing for advanced tyre collision detection uses fewer samples to speed things up;"}),"\n",(0,s.jsx)(n.li,{children:"Photoelastic PBR glass now supports multi-emissives as well."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var s=i(6540);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);