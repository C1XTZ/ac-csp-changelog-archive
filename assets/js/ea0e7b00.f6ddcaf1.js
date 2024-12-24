"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[9195],{6170:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"changelogs/0-1-75","title":"v0.1.75","description":"*   Version ID: 1614","source":"@site/docs/changelogs/0-1-75.md","sourceDirName":"changelogs","slug":"/changelogs/0-1-75","permalink":"/ac-csp-changelog-archive/changelogs/0-1-75","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"v0.1.75"},"sidebar":"versionSidebar","previous":{"title":"v0.1.76-preview63","permalink":"/ac-csp-changelog-archive/changelogs/0-1-76p63"},"next":{"title":"v0.1.74","permalink":"/ac-csp-changelog-archive/changelogs/0-1-74"}}');var r=i(4848),o=i(8453);const t={title:"v0.1.75"},l=void 0,a={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Fixes",id:"fixes",level:2},{value:"For new content and configs",id:"for-new-content-and-configs",level:2},{value:"For new apps and scripts",id:"for-new-apps-and-scripts",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Version ID: 1614"}),"\n",(0,r.jsx)(n.li,{children:"Size: 52.83 MB"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AMD FidelityFX Super Resolution integration (works with either PP and FXAA enabled in AC video settings, or in VR mode with any configuration);"}),"\n",(0,r.jsx)(n.li,{children:"FXAA replacement options in Graphics Adjustments now apply to VR as well;"}),"\n",(0,r.jsx)(n.li,{children:"Option to save last 30 seconds of replay as a small clip with a shortcut (servers can also set an upload URL for those for more automated reporting);"}),"\n",(0,r.jsx)(n.li,{children:"Mumble integration for voice chat with positional audio with option to adjust scale in server configuration;"}),"\n",(0,r.jsx)(n.li,{children:"New way to animate wipers of most shapes and forms, doesn\u2019t need to split meshes, automatically snaps them onto windscreen and more;"}),"\n",(0,r.jsx)(n.li,{children:"New Colorized Shadowing module for windscreen banners to cast colorful shadows and colorize ambient lighting nearby;"}),"\n",(0,r.jsx)(n.li,{children:"Interior reflections masking reworked, now applied to all nearby cars;"}),"\n",(0,r.jsx)(n.li,{children:"A bit of occlusion for driver model for enclosed cars, similar to Shadowed Wheels module;"}),"\n",(0,r.jsx)(n.li,{children:"With free camera, nearest car within 10 meters now counts as focused;"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Limit audio"})," option updated, now with proper fading and further optimizing;"]}),"\n",(0,r.jsx)(n.li,{children:"Caching for precomputed CSP data (such as new fake shadows for cars) reworked, old entries will be removed automatically;"}),"\n",(0,r.jsx)(n.li,{children:"NeckFX: option for horizon lock to lock camera to track surface instead of horizon;"}),"\n",(0,r.jsx)(n.li,{children:"New module with tweaks for triple screen mode, allows to alter how image is split between three cameras;"}),"\n",(0,r.jsx)(n.li,{children:"Default normals textures for spectators redrawn properly, with updated shading;"}),"\n",(0,r.jsx)(n.li,{children:"Ghost car recorder saves its file immediately after a new record instead of waiting for session to end;"}),"\n",(0,r.jsx)(n.li,{children:"Digital displays for mirrors now optional, with an option for better LDR simulation;"}),"\n",(0,r.jsx)(n.li,{children:"Default WeatherFX implementation updated, with adjusted lighting and clouds, AIs now turn on headlights in time as well;"}),"\n",(0,r.jsx)(n.li,{children:"Option for simpler render style of new UI, to speed things up a bit for simpler GPUs;"}),"\n",(0,r.jsx)(n.li,{children:"Speculars in reflection cubemap are disabled to reduce flickering;"}),"\n",(0,r.jsx)(n.li,{children:"Debug mode for Origin Shift is removed to prevent people from activating it accidentally."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fake track shadows added in 0.1.74 now can be linked to meshes to disappear on certain layouts where meshes are missing;"}),"\n",(0,r.jsx)(n.li,{children:"Flying wipers on LODs of some cars and similar issues where animation breaks when applied to LOD are fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Caching AC data to speed up loading breaking car skins fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Cars with VAO looking too dark until VAO is switched a few times fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Few performance issues related to IBL reflections fixed;"}),"\n",(0,r.jsx)(n.li,{children:"VAO gamma now applies to VAO samples affecting car brightness as well;"}),"\n",(0,r.jsx)(n.li,{children:"Driver Interview mode fixed (winning condition was missing), difficulty reduced, now working with track from assettocorsamods.net as well;"}),"\n",(0,r.jsx)(n.li,{children:"Digital screens shader updated for more accurate TN color distortion;"}),"\n",(0,r.jsx)(n.li,{children:"Boosted edge refraction for sides of glass is fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Cars falling through ground on some rare tracks fixed (bug in 0.1.74);"}),"\n",(0,r.jsx)(n.li,{children:"After making an accumulation blur store, state of particles will be restored;"}),"\n",(0,r.jsx)(n.li,{children:"URLs in welcome message: parsing fixed, support for TeamSpeak and Mumble URLs, context menu to copy URL to clipboard;"}),"\n",(0,r.jsx)(n.li,{children:"Custom clip planes from Graphics Adjustments now apply with VR mode selected unless camera is inside a car;"}),"\n",(0,r.jsx)(n.li,{children:"AI flood: disabling colour randomization now works;"}),"\n",(0,r.jsx)(n.li,{children:"CPU cars heightmap used for detecting where the camera is fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Origin Shift works with post-processing disabled;"}),"\n",(0,r.jsx)(n.li,{children:"Sped up reflections now work properly, no longer breaking on some tracks;"}),"\n",(0,r.jsx)(n.li,{children:"WeatherFX: occlusion estimation fixed, clipped clouds fixed;"}),"\n",(0,r.jsx)(n.li,{children:"TAA for refracting headlights fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Default normals textures for spectators only apply to default spectators textures;"}),"\n",(0,r.jsx)(n.li,{children:"Horizon object detection improved to fix background glitch on some tracks;"}),"\n",(0,r.jsx)(n.li,{children:"Issue with things getting blurred on LODs switching fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Virtual mirror breaking UI in certain combination of settings fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Displays with cameras on tracks work with origin shift and show smoke, flames and fireworks;"}),"\n",(0,r.jsx)(n.li,{children:"Visual oil spills getting stuck fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Crashes on exit fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Speculars from dynamic lights on car paint shader fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Few smaller fixes and optimizations."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"for-new-content-and-configs",children:"For new content and configs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Human surface material now can be set in car config;"}),"\n",(0,r.jsxs)(n.li,{children:["GrassFX: option to adjust texture brightness in track config (for colored parts);","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Variations of Highlands textures are removed to save space, instead for compatibility CSP will use a brightness adjustment for them;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Apps for track conditions and track occluders are removed;"}),"\n",(0,r.jsx)(n.li,{children:"Instead, they\u2019re added as tools in Objects Inspector to stop cluttering apps list, more apps will be moved and added soon;"}),"\n",(0,r.jsx)(n.li,{children:"Fake track shadows tool is reworked, now it can link shadows to meshes and manage all the shadows at once;"}),"\n",(0,r.jsx)(n.li,{children:"Default specular multiplier for track lights is changed to 1 now (with tracks generic config);"}),"\n",(0,r.jsxs)(n.li,{children:["New way to create digital instruments, displays ",(0,r.jsx)(n.code,{children:"[SCRIPTABLE_DISPLAY_...]"})," scriptable with Lua;"]}),"\n",(0,r.jsxs)(n.li,{children:["New addition for cars, ",(0,r.jsx)(n.code,{children:"[EXTRA_SHAPE_...]"})," allowing to create new geometry (for example, for Kunos cars missing some indicators or properly mapped displays);"]}),"\n",(0,r.jsxs)(n.li,{children:["New templates for easy creation of new displays and indicators with ",(0,r.jsx)(n.code,{children:"[EXTRA_SHAPE...]"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"RESOLUTION_LIMIT"})," option for dynamic textures, to make sure unusually set scaling wouldn\u2019t make them too big;"]}),"\n",(0,r.jsx)(n.li,{children:"New mode for digital screen material, VA matrix;"}),"\n",(0,r.jsx)(n.li,{children:"Navigators now can use car textures as loading logos (look at BMW M4 config for an example);"}),"\n",(0,r.jsxs)(n.li,{children:["All other references to textures (in ",(0,r.jsx)(n.code,{children:"[SHADER_REPLACEMENT_...]"}),", for example, can use car textures too;"]}),"\n",(0,r.jsxs)(n.li,{children:["Parameter ",(0,r.jsx)(n.code,{children:"ALPHA_MODE"})," for features using bending shader now applied correctly;"]}),"\n",(0,r.jsxs)(n.li,{children:["INIpp:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Macros in templates now can\u2019t override values set by macros in main section;"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"@GENERATOR_STARTING_INDEX"})," parameter for templates used in generators to change staring index;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[PARTICLES_FX_EXHAUST_...]"}),": direction is now optional, oriented backwards by default;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[MESH_ADJUSTMENT_...]"})," and ",(0,r.jsx)(n.code,{children:"[NODE_ADJUSTMENT_...]"})," updated:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Now work the same for tracks and cars;"}),"\n",(0,r.jsx)(n.li,{children:"Moving meshes to different nodes updates their vertices so they would be positioned in the same place, great to get mesh coordinates to match car coordinates;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SKINS"})," filter now can use complex queries such as ",(0,r.jsx)(n.code,{children:"SKINS = '{ ( red?, green? ) & !?_matte }'"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Visualize pits for currently active cars (loaded and not disconnected):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Toggle garage doors or animate them;"}),"\n",(0,r.jsx)(n.li,{children:"New track condition inputs to check if corresponding cars are present;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Split track mesh elements into separate meshes (increases number of draw calls, use carefully);"}),"\n",(0,r.jsxs)(n.li,{children:["Shader ",(0,r.jsx)(n.code,{children:"stPerPixelNM_UVflow"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Parameters for UV multiplier and offset (bind offset to an animated condition for transition effect);"}),"\n",(0,r.jsx)(n.li,{children:"Parameter to use alpha-channel from txDiffuse instead of txNormal;"}),"\n",(0,r.jsx)(n.li,{children:"Parameter to clip out everything outside of 0\u20261 texture coordinates;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Hex colors in material adjustments now work;"}),"\n",(0,r.jsx)(n.li,{children:"Digital displays for mirrors: option to adjust the angle;"}),"\n",(0,r.jsxs)(n.li,{children:["Wrongly set ",(0,r.jsx)(n.code,{children:"OUT"})," values in lods.ini now fixed automatically to match ",(0,r.jsx)(n.code,{children:"IN"})," of a following definition;"]}),"\n",(0,r.jsx)(n.li,{children:"Masking pass now works with delayed render (great for colorful windscreen banners);"}),"\n",(0,r.jsxs)(n.li,{children:["New interior cars material ",(0,r.jsx)(n.code,{children:"[Material_WindscreenBanner]"})," with everything for windscreen banners, frames and so on for easy colored shadowing and RainFX integration."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"for-new-apps-and-scripts",children:"For new apps and scripts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Structures with state extended, containing a lot more data now;"}),"\n",(0,r.jsx)(n.li,{children:"Lua API generator rewritten, now ensures type safety and adds automatic conversions where possible;"}),"\n",(0,r.jsx)(n.li,{children:"Few fixes for Lua API (now vectors only equal to vectors and such);"}),"\n",(0,r.jsxs)(n.li,{children:["WeatherFX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.setCameraOcclusionDepthBoost()"})," value to adjust cubemap-based occlusion estimation;"]}),"\n",(0,r.jsxs)(n.li,{children:["New cloud material property ",(0,r.jsx)(n.code,{children:".alphaSmoothTransition"})," for adjusting alpha gradient;"]}),"\n",(0,r.jsxs)(n.li,{children:["Cloud properly ",(0,r.jsx)(n.code,{children:".extraFidelity"})," can be set below zero to blur pattern instead of adding an extra layer;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["New modes:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["API to draw UI moved from ",(0,r.jsx)(n.code,{children:"ac.ui\u2026"})," to ",(0,r.jsx)(n.code,{children:"ui.\u2026"})," (sorry about this, I usually try not to break compatibility, but it\u2019s just been released and I think it\u2019s better to fix this one sooner);"]}),"\n",(0,r.jsx)(n.li,{children:"API to draw things in 3D-space;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Automatically generated definitions now include types."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(6540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);