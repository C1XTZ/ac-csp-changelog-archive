"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[5808],{3139:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"changelogs/0-1-37","title":"v0.1.37","description":"*   Version ID: 919","source":"@site/docs/changelogs/0-1-37.md","sourceDirName":"changelogs","slug":"/changelogs/0-1-37","permalink":"/ac-csp-changelog-archive/changelogs/0-1-37","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"v0.1.37"},"sidebar":"versionSidebar","previous":{"title":"v0.1.38","permalink":"/ac-csp-changelog-archive/changelogs/0-1-38"},"next":{"title":"v0.1.36","permalink":"/ac-csp-changelog-archive/changelogs/0-1-36"}}');var l=i(4848),r=i(8453);const o={title:"v0.1.37"},t=void 0,a={},d=[{value:"Changelog",id:"changelog",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Version ID: 919"}),"\n",(0,l.jsx)(n.li,{children:"Size: 44.62 MB"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Weather FX update:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Second version clouds shader with volumetric noise and low-res mask to speed things up;"}),"\n",(0,l.jsx)(n.li,{children:"Secondary ambient lighting ignoring vertex AO, to lit things up inside (should not depend on time of day or weather);"}),"\n",(0,l.jsx)(n.li,{children:"Clouds shadows;"}),"\n",(0,l.jsx)(n.li,{children:"Clouds sorting based on user-set factor;"}),"\n",(0,l.jsx)(n.li,{children:"Clouds covering sun fixed;"}),"\n",(0,l.jsx)(n.li,{children:"Shadows disabling fixed;"}),"\n",(0,l.jsx)(n.li,{children:"Per-cloud fog multiplier;"}),"\n",(0,l.jsxs)(n.li,{children:["New functions for WeatherFX implementation:","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Sample camera AO;"}),"\n",(0,l.jsx)(n.li,{children:"Set overall brightness;"}),"\n",(0,l.jsx)(n.li,{children:"Adjust sky brightness separately;"}),"\n",(0,l.jsx)(n.li,{children:"Check if bounced light in Extra FX is enabled;"}),"\n",(0,l.jsx)(n.li,{children:"Alternative versions of existing functions to reduce GC load;"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Default Weather FX implementation is available (might still need some work though);"}),"\n",(0,l.jsxs)(n.li,{children:["YEBIS extension (Yebisest):","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Now with settings;"}),"\n",(0,l.jsx)(n.li,{children:"Disable anamorphic glare or ghost glare in first person view;"}),"\n",(0,l.jsxs)(n.li,{children:["New values for PP filters:","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Custom color grading intensity;"}),"\n",(0,l.jsx)(n.li,{children:"Alternative glare shape for first person view;"}),"\n",(0,l.jsx)(n.li,{children:"A few extra options for anamorphic glare for color and shape;"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["New GUI extension:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Various GUI tweaks moved from general settings in there (sorry for the inconvenience);"}),"\n",(0,l.jsxs)(n.li,{children:["New look for PP filter selector app:","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Dropdown list with grouping;"}),"\n",(0,l.jsx)(n.li,{children:"Context menus for management;"}),"\n",(0,l.jsx)(n.li,{children:"Built-in editor (in context menu for selected filter or filters in the list);"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Better highlight for objects inspector, plus it shows the position and click point properly;"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Fake Shadows FX:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Depth bias improved;"}),"\n",(0,l.jsx)(n.li,{children:"Shadows regeneration during loading, with better settings;"}),"\n",(0,l.jsx)(n.li,{children:"Shadows change shape depending on lighting;"}),"\n",(0,l.jsxs)(n.li,{children:["Only with Extra FX:","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Same thing soft particles use, for smoother blending;"}),"\n",(0,l.jsx)(n.li,{children:"Proper geometry-aware shadow mapping;"}),"\n",(0,l.jsx)(n.li,{children:"Extended rendering to make sure affected area is properly covered;"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Lighting FX:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Dynamic ambient disabled for good;"}),"\n",(0,l.jsx)(n.li,{children:"Cars won\u2019t use full range headlights if free camera is padding by;"}),"\n",(0,l.jsx)(n.li,{children:"Annoying merging if car is seen from behind is fixed;"}),"\n",(0,l.jsx)(n.li,{children:"Extra limits to speed things up a bit more;"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Grass FX (complete rework, now third attempt):","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Textures are back;"}),"\n",(0,l.jsx)(n.li,{children:"Base configuration, with up to four extra configurations selected via local adjusments;"}),"\n",(0,l.jsx)(n.li,{children:"Set size, width, tidyness, how cut the grass is;"}),"\n",(0,l.jsx)(n.li,{children:"Four parameters for color-based spawning which was also rewritten;"}),"\n",(0,l.jsx)(n.li,{children:"New per-mesh adjustments with optional custom localized areas within;"}),"\n",(0,l.jsx)(n.li,{children:"Texture-based adjustments are also available;"}),"\n",(0,l.jsx)(n.li,{children:"Custom textures;"}),"\n",(0,l.jsx)(n.li,{children:"Extra sprites from custom textures, with custom probabilities, size and behaviour modifiers;"}),"\n",(0,l.jsx)(n.li,{children:"Optional offset for day-based trim period;"}),"\n",(0,l.jsx)(n.li,{children:"If needed, use conditions as inputs;"}),"\n",(0,l.jsx)(n.li,{children:"Five different presets;"}),"\n",(0,l.jsx)(n.li,{children:"Optional advanced blending (alpha-to-coverage);"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Particles FX:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Option to control fireworks;"}),"\n",(0,l.jsx)(n.li,{children:"Few tweaks for dirty dust on grass;"}),"\n",(0,l.jsx)(n.li,{children:"Behaviour around car causing smoke to fly asymmetrically fixed;"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Extra FX:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Bounced light fixed, now it\u2019s proper HDR;"}),"\n",(0,l.jsx)(n.li,{children:"SSLR optimized a bit;"}),"\n",(0,l.jsx)(n.li,{children:"Motion blur will ignore spinning wheels instead of messing them up better than before;"}),"\n",(0,l.jsx)(n.li,{children:"Fog is taken into account as it should;"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Reflections FX:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Interior masking fixed (with some cars, it wasn\u2019t masking enough because of mistake with materials);"}),"\n",(0,l.jsx)(n.li,{children:"New option for interior masking: discard spherical areas from meshes names or position with radius (with discarding rear view mirror by default);"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Nice Screenshots extension:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Resolution multiplier now works with accumulation motion blur;"}),"\n",(0,l.jsx)(n.li,{children:"Problem with messed up brightness fixed by replacing old approach with mixing of HDR data;"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Python extension:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["New ",(0,l.jsx)(n.code,{children:"ac.ext_markLapAsSpoiled()"})," function;"]}),"\n",(0,l.jsxs)(n.li,{children:["Functions ",(0,l.jsx)(n.code,{children:"ac.ext_debugWiperSoundState()"})," and ",(0,l.jsx)(n.code,{children:"ac.ext_mirrorDebug()"})," are removed;"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["New car paints (",(0,l.jsx)(n.code,{children:"common/material_carpaint.ini"}),"):","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Clear coat specular (aka sun specular) is not affected by custom specular color;"}),"\n",(0,l.jsx)(n.li,{children:"Option for localizing special effects like chameleon paint or rainbow reflections with txDiffuse alpha channel;"}),"\n",(0,l.jsx)(n.li,{children:"Transparency based on txMaps\u2019s alpha channel;"}),"\n",(0,l.jsx)(n.li,{children:"Rainbow car paints updated and fixed;"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Option for track configs to completely ignore default auto-loaded config;"}),"\n",(0,l.jsxs)(n.li,{children:["New ",(0,l.jsx)(n.code,{children:"ksMultilayer_fresnel_nm4"})," shader with four normal maps;"]}),"\n",(0,l.jsxs)(n.li,{children:["New ",(0,l.jsx)(n.code,{children:"ksPerPixel_horizon"})," shader for those horizon meshes looking like a tube around the track for fixing some existing tracks, with complex color adjusments;"]}),"\n",(0,l.jsx)(n.li,{children:"Smooth transition between shadow cascades;"}),"\n",(0,l.jsx)(n.li,{children:"Custom emissive: subtraction of next fixed;"}),"\n",(0,l.jsx)(n.li,{children:"Speculars on water shader adjusted;"}),"\n",(0,l.jsx)(n.li,{children:"Initial support for chat-based commands from server (for something like dynamic weather online);"}),"\n",(0,l.jsx)(n.li,{children:"New DXGI flip model now works again, only on Windows 10;"}),"\n",(0,l.jsx)(n.li,{children:"Texture mapping optimized;"}),"\n",(0,l.jsx)(n.li,{children:"Constant buffers mapping optimized;"}),"\n",(0,l.jsx)(n.li,{children:"Use more than 10 model adjustments for cars if needed;"}),"\n",(0,l.jsxs)(n.li,{children:["That bug with INI parser mistreating ",(0,l.jsx)(n.code,{children:"\\"})," fixed;"]}),"\n",(0,l.jsx)(n.li,{children:"No more SSAO outlines with lower level of details;"}),"\n",(0,l.jsx)(n.li,{children:"Applying track config via Python app fixed;"}),"\n",(0,l.jsx)(n.li,{children:"Extended tyres raytracing fixed;"}),"\n",(0,l.jsx)(n.li,{children:"Regular expressions for mesh or material filters in configs fixed;"}),"\n",(0,l.jsx)(n.li,{children:"Wind speed for visuals (like smoke or water) fixed;"}),"\n",(0,l.jsx)(n.li,{children:"Live reload for shader replacements for shader changes fixed;"}),"\n",(0,l.jsx)(n.li,{children:"Smaller fixes and optimizations."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var s=i(6540);const l={},r=s.createContext(l);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);