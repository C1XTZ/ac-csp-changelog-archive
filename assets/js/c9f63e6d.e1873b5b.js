"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[3289],{9743:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"changelogs/0-1-62","title":"v0.1.62","description":"*   Version ID: 1079","source":"@site/docs/changelogs/0-1-62.md","sourceDirName":"changelogs","slug":"/changelogs/0-1-62","permalink":"/ac-csp-changelog-archive/changelogs/0-1-62","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"v0.1.62"},"sidebar":"versionSidebar","previous":{"title":"v0.1.63","permalink":"/ac-csp-changelog-archive/changelogs/0-1-63"},"next":{"title":"v0.1.61","permalink":"/ac-csp-changelog-archive/changelogs/0-1-61"}}');var r=i(4848),o=i(8453);const t={title:"v0.1.62"},l=void 0,a={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Fixes",id:"fixes",level:2},{value:"For new content and configs",id:"for-new-content-and-configs",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Version ID: 1079"}),"\n",(0,r.jsx)(n.li,{children:"Size: 45.96 MB"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsx)(n.p,{children:"There is no rain in this build yet, still working on. However, there are some other new things:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Dynamic shadows;"}),"\n",(0,r.jsxs)(n.li,{children:["HDR support (requires DXGI flip model and, most likely, adjusted PP-filter);","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Now PP-filters can have two sets of tonemapping options, for LDR and HDR modes;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["GUI:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Option to apply MSAA to original UI (if you have an app drawing aliased shapes, that should help);"}),"\n",(0,r.jsx)(n.li,{children:"New driver tags working in VR and mirrors (show blue and yellow flags);"}),"\n",(0,r.jsx)(n.li,{children:"New simple radar app with focus on performance;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Controllers:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New keybinding to shift to neutral gear quickly;"}),"\n",(0,r.jsx)(n.li,{children:"New clutch keybinding for keyboard input method;"}),"\n",(0,r.jsx)(n.li,{children:"Option for order fixing, taking into account instance GUIDs as well (again, update for Content Manager with those is coming);"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Support for CSP-only servers in Content Manager (update for it is coming soon);"}),"\n",(0,r.jsxs)(n.li,{children:["Regular sun shadows optimized a bit:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New faster rendering traversal;"}),"\n",(0,r.jsx)(n.li,{children:"No cars in third split;"}),"\n",(0,r.jsx)(n.li,{children:"Single draw call for remote cars using mesh from LOD D (with fallback to collider mesh if there is no LOD D);"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Smart Mirror: optional subtle shaking for older cars on high speeds;"}),"\n",(0,r.jsx)(n.li,{children:"Smooth particles work in VR and triple screen with and without MSAA (but post-processing is still required);"}),"\n",(0,r.jsx)(n.li,{children:"New simpler refraction for new glass shader, works in single, VR and triple screen (post-processing is required), good for flat or too bumpy glass, much easier to set;"}),"\n",(0,r.jsx)(n.li,{children:"Fake Shadows FX: taking dynamic lights into account (good with dynamic shadows), plus additional fix for neon lights not working properly because of fake shadows;"}),"\n",(0,r.jsxs)(n.li,{children:["Weather FX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Option for sharper higher quality stars (sharpening and altered sampling);"}),"\n",(0,r.jsx)(n.li,{children:"Option for increased clouds fidelity;"}),"\n",(0,r.jsx)(n.li,{children:"Option for mirage-like reflections for especially hot conditions;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Extra FX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Motion blur is applied after TAA;"}),"\n",(0,r.jsx)(n.li,{children:"Fog blur is applied after TAA, but before motion blur;"}),"\n",(0,r.jsx)(n.li,{children:"New heat distortion option for fog blur (combined with mirage-like reflections from Weather FX, both take fast moving cars into account);"}),"\n",(0,r.jsx)(n.li,{children:"Some optimizations;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Wiper modes reworked: from three modes on modern cars (intermittent, slow and fast) to just a single mode on very old cars, possible to redefine;"}),"\n",(0,r.jsx)(n.li,{children:"Wipers sync online;"}),"\n",(0,r.jsx)(n.li,{children:"New FFB tweak for more accurate calculation of FFB with MacPherson struct suspension by Stereo (applied to a few rare cars with a certain unusual configuration, wouldn\u2019t affect Kunos cars);"}),"\n",(0,r.jsx)(n.li,{children:"New photo app option forcing flames on;"}),"\n",(0,r.jsx)(n.li,{children:"Broken glass shader reworked, now with a bit of refraction and custom parameters;"}),"\n",(0,r.jsx)(n.li,{children:"Optimized draw order and caching generated grids and payloads are now enabled by default, and default lights brightness changed to 100%;"}),"\n",(0,r.jsx)(n.li,{children:"New small tweak to hide driver model completely in first person view in VR, for cars with H-shifter (but still show it in rear view mirrors);"}),"\n",(0,r.jsx)(n.li,{children:"Support for Spotify desktop player for navigators (and new car stereo thing, check out Abarth 500)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Extended physics sometimes physics thread to misbehave and crash to brown/pink screen fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Live reload for extended physics causing all sorts of crashes or not applying any changes should be fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Chunks optimization works now properly (before, it was always disabled);"}),"\n",(0,r.jsx)(n.li,{children:"Tyres FX: custom textures work in mirrors now;"}),"\n",(0,r.jsx)(n.li,{children:"Fake Shadows FX: issue with fog backlit fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Windscreen FX raindrops (old ones) now shouldn\u2019t these jumps when wiper state changes;"}),"\n",(0,r.jsx)(n.li,{children:"VHS filter works on screenshots, also, font is now shipped with CSP;"}),"\n",(0,r.jsx)(n.li,{children:"Nice Screenshots now shouldn\u2019t use rotation for vertical aspect ratios with incompatible effects, plus an option to turn off rotation completely;"}),"\n",(0,r.jsx)(n.li,{children:"Sparks online disabled for now, need more testing;"}),"\n",(0,r.jsx)(n.li,{children:"Lights handling reworked to speed things up on tracks with thousands of those and fix that issue with them slowly coming on as camera jumps a long distance;"}),"\n",(0,r.jsx)(n.li,{children:"Now up to 12 cars can have their headlights mirrored instead in replays and such, instead of 4 as before (that looked horrible);"}),"\n",(0,r.jsx)(n.li,{children:"Analog clocks on tracks fixed;"}),"\n",(0,r.jsx)(n.li,{children:"New chat app: symbols from Latin Extended sets and Currency sets are supported, failed login should allow to try again, color changing should allow to cancel;"}),"\n",(0,r.jsx)(n.li,{children:"Track volumetric lights now can be wider, but that would make them shorter;"}),"\n",(0,r.jsx)(n.li,{children:"Orbit (F5) camera wouldn\u2019t get out of focus now unless that new photo mode app is active;"}),"\n",(0,r.jsx)(n.li,{children:"Messed up glass backlit fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Sky artifacts with somewhat extreme settings fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Ground occlusion for tyres fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Refracting headlights in rear view mirror fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Weather FX: default script doesn\u2019t mess up sun rays anymore;"}),"\n",(0,r.jsx)(n.li,{children:"A few smaller fixes and optimizations."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"for-new-content-and-configs",children:"For new content and configs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New fur material for car interiors (might be a bit too expensive to use too often);"}),"\n",(0,r.jsx)(n.li,{children:"New car stereo thing for cars, showing current artist and track and source icon, or time, or some simple animation;"}),"\n",(0,r.jsx)(n.li,{children:"New properies to filter nodes, meshes and materials by (for making cars and track configs);"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"MOVE_MESH_IN_FRONT_OF"})," option for ",(0,r.jsx)(n.code,{children:"[SHADER_REPLACEMENT_\u2026]"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"FADE_FAKE_SHADOW"})," option for car lights: set it to something like 0.8 for neon lights to reduce opacity of fake shadows when lights are on;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"[SMOOTH_NORMALS_\u2026]"})," adjustment for smoothing out normals of certain meshes (great for some Kunos tracks);"]}),"\n",(0,r.jsxs)(n.li,{children:["New bending shader for cars, with optional tessellation, used for:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Wipers bending to follow curvature of windscreen and reduce gaps: ",(0,r.jsx)(n.code,{children:"[BENDING_WIPER_\u2026]"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Side nets (next to side windows on some racing cars) shaking: ",(0,r.jsx)(n.code,{children:"[SIDE_NET_\u2026]"}),"; can be used for antennas and such as well;"]}),"\n",(0,r.jsxs)(n.li,{children:["Shaking exhausts without any nodes rearrangement: ",(0,r.jsx)(n.code,{children:"[SHAKING_EXHAUST_\u2026]"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Wobbly meshes similar to wobbly bits, but without the need for skinning: ",(0,r.jsx)(n.code,{children:"[WOBBLY_MESH_\u2026]"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"Please note: whole thing is pretty primitive, simply adding certain offset based on closeness to certain areas, without any rotation;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"New conditioned animator for tracks, moving, rotating and scaling based on conditions;"}),"\n",(0,r.jsx)(n.li,{children:"Track displays: option to use actual track cameras, option to use Office-style placeholder;"}),"\n",(0,r.jsx)(n.li,{children:"Object inspector: local and in-car coordinates, scene nodes tree;"}),"\n",(0,r.jsx)(n.li,{children:"Colorful vertex AO is no longer supported, converted to regular one during loading;"}),"\n",(0,r.jsx)(n.li,{children:"Set custom wiper modes for cars: specify speed and delay between runs;"}),"\n",(0,r.jsx)(n.li,{children:"New Python functions to select a mode or check number of modes (old functions still work as well);"}),"\n",(0,r.jsxs)(n.li,{children:["New wiper-related car inputs: ",(0,r.jsx)(n.code,{children:"WIPERS_MODE"})," and ",(0,r.jsx)(n.code,{children:"WIPERS_PROGRESS"})," (for animation progress);"]}),"\n",(0,r.jsxs)(n.li,{children:["New car inputs for turn signal without hazards: ",(0,r.jsx)(n.code,{children:"TURNSIGNAL_NOHAZARD_LEFT"}),", ",(0,r.jsx)(n.code,{children:"TURNSIGNAL_NOHAZARD_RIGHT"}),", ",(0,r.jsx)(n.code,{children:"TURNSIGNAL_NOHAZARD"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"Adjust intensity of Extra FX bounced light in track config;"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"DISABLE_WITH_BOUNCED_LIGHT"})," option for track lights: please use it if you set light to act like fake ambient lighting;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"EXTRA_FX/DELAYED_RENDER_INTERIOR"})," option for cars, to list meshes which should only be rendered after Extra FX in first person view;"]}),"\n",(0,r.jsxs)(n.li,{children:["Now ",(0,r.jsx)(n.code,{children:"INCLUDE_IN_CUBEMAP"})," option of ",(0,r.jsx)(n.code,{children:"[SHADER_REPLACEMENT_\u2026]"})," wouldn\u2019t mess with world detail level;"]}),"\n",(0,r.jsxs)(n.li,{children:["Shader ",(0,r.jsx)(n.code,{children:"ksMultilayer_fresnel_nm"})," uses tiling fix and anisotropic filtration for its normal map now;"]}),"\n",(0,r.jsx)(n.li,{children:"Occlusion behaviour for PBR shaders adjusted to work better with new OptiX bakery with bouncing light;"}),"\n",(0,r.jsx)(n.li,{children:"Grass FX: smoother mask for custom texture separating colored and non-colored areas;"}),"\n",(0,r.jsxs)(n.li,{children:["Set list of heating areas for heat distortion and mirage effect with ",(0,r.jsx)(n.code,{children:"[HEATING_SURFACES] MESHES = \u2026"})," and ",(0,r.jsx)(n.code,{children:"MATERIALS = \u2026"})," (or CSP would try to guess);"]}),"\n",(0,r.jsx)(n.li,{children:"New extended physics addition, speed limiter (fixed and static, meant for trucks racing)."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(6540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);