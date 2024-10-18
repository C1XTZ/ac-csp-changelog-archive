"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[898],{7623:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(4848),r=i(8453);const t={title:"v0.1.80-preview346"},o=void 0,l={id:"Changelogs/0-1-80p346",title:"v0.1.80-preview346",description:"*   Version ID: 2501",source:"@site/docs/Changelogs/0-1-80p346.md",sourceDirName:"Changelogs",slug:"/Changelogs/0-1-80p346",permalink:"/Changelogs/0-1-80p346",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"v0.1.80-preview346"},sidebar:"versionSidebar",previous:{title:"v0.1.80-preview428",permalink:"/Changelogs/0-1-80p428"},next:{title:"v0.1.80-preview218",permalink:"/Changelogs/0-1-80p218"}},a={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Car &amp; track configs",id:"car--track-configs",level:2},{value:"Lua &amp; Python scripting",id:"lua--python-scripting",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Version ID: 2501"}),"\n",(0,s.jsx)(n.li,{children:"Tags: untested"}),"\n",(0,s.jsx)(n.li,{children:"Size: ??.?? MB"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["New car physics features:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Body flex;"}),"\n",(0,s.jsx)(n.li,{children:"Driver weight shift (might be useful for karts);"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Experimental physics options (only available offline for testing at the moment):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rim/ground collisions: creates physics contact if wheel is going through the ground past the point of its profile, preventing cars from falling through or driving through some incorrectly set track surfaces;"}),"\n",(0,s.jsx)(n.li,{children:"Car sliding prevention: creates physics contact when car is stationary to prevent car sliding down tilted surface;"}),"\n",(0,s.jsx)(n.li,{children:"Suspensions auto-repair: apply a lot of force to get the wheel in the right place if suspension becomes inverted (very experimental);"}),"\n",(0,s.jsx)(n.li,{children:"Braking jitter prevention: limits braking torque to make sure angular speed wouldn\u2019t go through 0 for wheel to start going back and forth (also prevents brakes from initiating car roll when car is stationary on some cars);"}),"\n",(0,s.jsx)(n.li,{children:"Ground colliders fix: enforces car-ground collisions for all physical ground surfaces (turned out some tracks didn\u2019t have it enabled causing cars to just fall through);"}),"\n",(0,s.jsx)(n.li,{children:"Walls fix: smooths out collision resolution helping tracks with thin or overly complicated walls causing cars to get stuck or worse;"}),"\n",(0,s.jsx)(n.li,{children:"Collisions firmness increase: makes deeper collisions stronger to resolve them faster and prevent things going through other things;"}),"\n",(0,s.jsx)(n.li,{children:"Sooner car colliders activation: helps to stop cars from falling through ground;"}),"\n",(0,s.jsx)(n.li,{children:"Bodies rotation optimization: disables a finite rotation mode enabled in ODE for all entities since nothing in AC is rotating fast enough for it to be needed anyway, as far as I can tell;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Particles:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sparks: collisions with car improved, with better shading in distance, adjusted lifespan and fixed behavior;"}),"\n",(0,s.jsx)(n.li,{children:"Pieces: major rework with increase in number of particles, new visuals and new collision logic for better interaction with car, wipers, walls and ground, bits for blown tyres;"}),"\n",(0,s.jsx)(n.li,{children:"Marbles removed for the time being;"}),"\n",(0,s.jsx)(n.li,{children:"Smoke (as well as skidmarks and pieces) use actual ground color if set in track config;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["New App Shelf app for installing, automatically updating and removing new Lua apps:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Car Mirror;"}),"\n",(0,s.jsx)(n.li,{children:"Controller Tweaks (with a new option to map sticks to gas and breaks, as well as remap triggers);"}),"\n",(0,s.jsx)(n.li,{children:"Flashlight;"}),"\n",(0,s.jsx)(n.li,{children:"Paintshop (now with option to change canvas resolution and performance improvements);"}),"\n",(0,s.jsx)(n.li,{children:"Radar (built-in CSP Radar app has been removed);"}),"\n",(0,s.jsx)(n.li,{children:"Setup Exchange;"}),"\n",(0,s.jsx)(n.li,{children:"Time Shift (go back in time in practice sessions);"}),"\n",(0,s.jsx)(n.li,{children:"More coming soon;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["New physics helpers in CSP Debug App (only available in offline single car sessions, invalidates lap time):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reset car back on the track (or, if driven certain distance, reset it some distance back);"}),"\n",(0,s.jsx)(n.li,{children:"Save and restore car state (stores data across sessions), including velocity and such;"}),"\n",(0,s.jsx)(n.li,{children:"Apply extra force pushing car down or up;"}),"\n",(0,s.jsx)(n.li,{children:"Press a button to do a jump;"}),"\n",(0,s.jsx)(n.li,{children:"Press another button to blow up tyres;"}),"\n",(0,s.jsx)(n.li,{children:"Use mouse to drag car around;"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"VR: options to render HUD without post-processing and to not render HUD in mirrored view;"}),"\n",(0,s.jsx)(n.li,{children:"Move quick pits menu and damage displayer using mouse in-game;"}),"\n",(0,s.jsx)(n.li,{children:"New IMGUI taskbar marks newly installed apps with a green dot (customizable in in-game taskbar settings);"}),"\n",(0,s.jsx)(n.li,{children:"Option to include emissive meshes when rendering static cubemap in WeatherFX settings to slightly improve night look with those;"}),"\n",(0,s.jsx)(n.li,{children:"Option to reproject fake car shadows (helps if you are not using ExtraFX with fake shadows reprojection and driving on a bumpy surface);"}),"\n",(0,s.jsx)(n.li,{children:"Experimental option to get AIs to drive more carefully through very curved corners (like the ones on Trento-Bondone);"}),"\n",(0,s.jsx)(n.li,{children:"New optimization option further decreasing CPU consumption during rendering (enabled by default);"}),"\n",(0,s.jsx)(n.li,{children:"System hotkeys from CM are now supported by CSP directly for better and more reliable experience;"}),"\n",(0,s.jsx)(n.li,{children:"New options in Small Tweaks to disable teleporting to pits or restarting the race in offline races;"}),"\n",(0,s.jsx)(n.li,{children:"TyresFX: new tyres are shinier when very new on modern open wheelers (can be configured in the car config);"}),"\n",(0,s.jsx)(n.li,{children:"FFB Tweaks: extra vibration for dirty tyres (optional, disabled by default);"}),"\n",(0,s.jsx)(n.li,{children:"Orbit (F5) camera starts from a different side for cars in pits based on crew side;"}),"\n",(0,s.jsx)(n.li,{children:"When searching an app in a new taskbar, keyboard layout is ignored (no need to switch back to English);"}),"\n",(0,s.jsx)(n.li,{children:"Hold Ctrl and use mouse wheel with F5 camera to adjust FOV as well;"}),"\n",(0,s.jsx)(n.li,{children:"Options for pause or reduce FPS in background from now on only work if AC window is actually covered by another one to avoid false triggering;"}),"\n",(0,s.jsx)(n.li,{children:"Autopilot (Ctrl+C by default) updated, secondary key press stops AI (stopping the car without regaining control), AIs should be more willing to drive as well, completely restart session to get back the control;"}),"\n",(0,s.jsx)(n.li,{children:"Servers can specify custom loading background image."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GUI: Controllers integration for mouse movement fixed once more (there were some issues regarding quick pits menu);"}),"\n",(0,s.jsx)(n.li,{children:"RainFX: AI tweak to avoid corners crash with some tracks fixed, racing line settings only apply offline (for online, settings should be set in the server configuration);"}),"\n",(0,s.jsx)(n.li,{children:"VR: black stereo mirrors, ASW2, custom VRS and view smoothing fixed (latter is no longer ignores fade and zoom settings as well), few smaller fixes for niche combinations of settings;"}),"\n",(0,s.jsx)(n.li,{children:"New trees should be compatible with NVIDIA VRS;"}),"\n",(0,s.jsx)(n.li,{children:"Old issue with car wipers in RainFX causing all sorts of issues (including not working wipers in exterior views) fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Starting replay mode in VR without custom VR HUD moves HUD with camera;"}),"\n",(0,s.jsx)(n.li,{children:"Dynamic shadows, especially from headlights, fixed to be smoother and more stable;"}),"\n",(0,s.jsx)(n.li,{children:"Any surface without grip adding dirt counts as gravel for particles and such;"}),"\n",(0,s.jsx)(n.li,{children:"New skidmarks: parallax fixed to no longer be so vomit-inducing (especially in VR), tyre tread prints are rendered correctly for distant cars, other tweaks and small improvements;"}),"\n",(0,s.jsx)(n.li,{children:"Compatibility with Reshade fixed;"}),"\n",(0,s.jsx)(n.li,{children:"BrakeDiscFX got more stable, should work for all cars now;"}),"\n",(0,s.jsx)(n.li,{children:"Rendering scene traversal fully rewritten for improved stability and performance;"}),"\n",(0,s.jsx)(n.li,{children:"LightingFX preparation rewritten to avoid wasting time doing the same things over and over again;"}),"\n",(0,s.jsx)(n.li,{children:"Rendering of text nodes has been rewritten to be faster and use anisotropic antialiasing;"}),"\n",(0,s.jsx)(n.li,{children:"Series of display nodes (such as RPM series) gets grouped into a single draw call to be a lot more efficient;"}),"\n",(0,s.jsx)(n.li,{children:"Slightly faster shadows rendering;"}),"\n",(0,s.jsx)(n.li,{children:"Issue with exterior wipers not always working in some conditions fixed;"}),"\n",(0,s.jsx)(n.li,{children:"File changes monitoring fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Some optimizations for rendering and loading times;"}),"\n",(0,s.jsx)(n.li,{children:"Freer camera no longer takes a step forward on activation (other similar false keypress detections should be fixed as well);"}),"\n",(0,s.jsx)(n.li,{children:"Some occasional incompatibilities with certain GPUs causing crashes and unstable behavior fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Accumulation DOF preview message can be hidden;"}),"\n",(0,s.jsx)(n.li,{children:"Sky dome in reflections is smoother;"}),"\n",(0,s.jsx)(n.li,{children:"Pressing Alt in windowed mode won\u2019t pause render anymore;"}),"\n",(0,s.jsx)(n.li,{children:"AC\u2019s flip recovery has been rewritten so it could be triggered if car would fall through the ground;"}),"\n",(0,s.jsx)(n.li,{children:"Issue with previews generation not working if \u201cdefault\u201d PP filter is missing fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Physics objects (like cones) fully stop on session reset;"}),"\n",(0,s.jsx)(n.li,{children:"Cars no longer fall asleep if not touching ground;"}),"\n",(0,s.jsx)(n.li,{children:"Compatibility between game scale, UI scale and pen (used by Paintshop) fixed;"}),"\n",(0,s.jsx)(n.li,{children:"GamepadFX scripts will no longer show an error message at the start if loaded too soon;"}),"\n",(0,s.jsx)(n.li,{children:"Shading of new glass materials rendering them too dark is fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Backlit for glass shader fixed (as in, severely reduced to avoid broken look in some conditions);"}),"\n",(0,s.jsx)(n.li,{children:"Orientation-based culling no longer causes certain meshes to appear with a single frame delay in some cases (like when switching cameras);"}),"\n",(0,s.jsx)(n.li,{children:"AI spline recorder should be compatible with AI spline optimizations of New Behaviour now;"}),"\n",(0,s.jsx)(n.li,{children:"If new render stats app is enabled, old one will be hidden;"}),"\n",(0,s.jsx)(n.li,{children:"A bit more distributed initialization for smoother AC launchers;"}),"\n",(0,s.jsx)(n.li,{children:"Trees AO baking fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Alpha-to-coverage dithering for trees fixed, new trees no longer look crazy with NVIDIA VRSS enabled;"}),"\n",(0,s.jsx)(n.li,{children:"Lua apps optimized: many apps shouldn\u2019t affect loading time, inactive apps won\u2019t affect real time performance, so it should be possible to install them in hundreds without issues;"}),"\n",(0,s.jsx)(n.li,{children:"GrassFX: cars no longer cast ambient shadow on grass if flipped (same as with regular fake shadows), those ambient shadows occlude dynamic lights as well;"}),"\n",(0,s.jsx)(n.li,{children:"Screen smoke of new smoke particles no longer appears for interior cameras;"}),"\n",(0,s.jsx)(n.li,{children:"Kunos\u2019 G Meter app counts as built-in (since it\u2019s built-in even if written in Python);"}),"\n",(0,s.jsx)(n.li,{children:"Blown tyres no longer misbehave in replays;"}),"\n",(0,s.jsx)(n.li,{children:"IMGUI sliders respect grabbed position allowing for some precise finetuning;"}),"\n",(0,s.jsx)(n.li,{children:"Disabling reflections in AC video settings shouldn\u2019t make AC more unstable anymore (now with a fallback the most basic reflections too);"}),"\n",(0,s.jsxs)(n.li,{children:["Few issues with loading parameters of ExtraFX bounced light clipping plane fixed, weight (fourth parameter of ",(0,s.jsx)(n.code,{children:"CLIP_POINT_..."}),") works as it should;"]}),"\n",(0,s.jsx)(n.li,{children:"Slightly adjusted visuals of worn tyres;"}),"\n",(0,s.jsx)(n.li,{children:"Reflections at nights are somewhat improved, with fixes to blurry reflection map as well;"}),"\n",(0,s.jsx)(n.li,{children:"ExtraFX TAA now leaves sparks be;"}),"\n",(0,s.jsx)(n.li,{children:"Older PBR shaders with clear coat better integrate with dynamic lights;"}),"\n",(0,s.jsx)(n.li,{children:"Fur shader fixed to be compatible with more materials;"}),"\n",(0,s.jsx)(n.li,{children:"CSP car previews: cars with animated suspension don\u2019t shuffle initial wheel rotation anymore;"}),"\n",(0,s.jsx)(n.li,{children:"Issue with car lights without active post-processing not working for some cars fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Refracting headlights are compatible with more advanced shaders used for internal meshes without emissive effect getting stuck;"}),"\n",(0,s.jsx)(n.li,{children:"Smoke and flames for overheated tyres now can be disabled;"}),"\n",(0,s.jsx)(n.li,{children:"Server communication: handshake exchange fixed;"}),"\n",(0,s.jsx)(n.li,{children:"New spectators renderer now no longer makes spectators wider towards edges of the screen;"}),"\n",(0,s.jsx)(n.li,{children:"Custom hand-drawn normal maps for default spectators fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Curved filter fixed, now working with single screen mode;"}),"\n",(0,s.jsx)(n.li,{children:"CSP analog instruments now disable original AC analog instruments for better compatibility;"}),"\n",(0,s.jsx)(n.li,{children:"AC no longer reloads when restoring from collapsed state;"}),"\n",(0,s.jsx)(n.li,{children:"Keybindings no longer work if AC is in background;"}),"\n",(0,s.jsx)(n.li,{children:"Integrity verification for Lua SDK;"}),"\n",(0,s.jsx)(n.li,{children:"Old car mods without properly written flames no longer crash AC;"}),"\n",(0,s.jsx)(n.li,{children:"Improved admin commands compatibility with custom acServer implementations;"}),"\n",(0,s.jsx)(n.li,{children:"Front and rear tyres getting starting pressures mixed up fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Failed to initialize haptics feedback for DualSense won\u2019t crash AC anymore;"}),"\n",(0,s.jsx)(n.li,{children:"VRAM consumption slightly reduced;"}),"\n",(0,s.jsx)(n.li,{children:"Some smaller fixes and improvements;"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"car--track-configs",children:"Car & track configs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Flames got a new parameter SCALE instead of old SIZE, which now actually works;"}),"\n",(0,s.jsx)(n.li,{children:"Car and track configs now can specify textures drawn with IMGUI, optionally based on existing textures (a bit mad, but with it refraction for front lights of Supra should work now);"}),"\n",(0,s.jsx)(n.li,{children:"Configs referring to textures will no longer grab wrong ones if there is a strange substring occurrence happening (only ones from the corresponding KN5);"}),"\n",(0,s.jsx)(n.li,{children:"AC\u2019s file monitoring for digital instruments and such now responds faster;"}),"\n",(0,s.jsx)(n.li,{children:"Track adjustments no longer limited by 0\u202699 items (and load faster);"}),"\n",(0,s.jsxs)(n.li,{children:["Any track configs with \u201c_MESHES\u201d and \u201c_MATERIALS\u201d postfixes (well, most of those, the newer ones) now also read \u201c",(0,s.jsx)(n.em,{children:"MESHES_EXCLUDE"}),"\u2026\u201d and \u201c",(0,s.jsx)(n.em,{children:"MATERIALS_EXLCUDE"}),"\u2026\u201d if you need to simply exclude certain meshes from defaults;"]}),"\n",(0,s.jsx)(n.li,{children:"Live reloading for material adjustments and shader replacements works more reliably;"}),"\n",(0,s.jsx)(n.li,{children:"Track custom physics: option for new way of parsing physics meshes skipping meshes with nothing but digits in names;"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lua--python-scripting",children:"Lua & Python scripting"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Python apps: new ",(0,s.jsx)(n.code,{children:"ac.ext_getSimDateTime()"})," function returning UTC time stamp;"]}),"\n",(0,s.jsxs)(n.li,{children:["General API:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unpack and repack ZIP files (including working with in-memory ZIP files);"}),"\n",(0,s.jsx)(n.li,{children:"Lua function dumping disabled due to internal ABI change (I can\u2019t really guarantee any ABI stability anyway, API only: LuaJIT keeps developing, and there are alternatives that might become feasible later on too);"}),"\n",(0,s.jsx)(n.li,{children:"Point-by-point 1D LUT creation fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Background workers: arguments and results exchange fixed, now keep running if there are any single-call callbacks to be called or if there are any timers set;"}),"\n",(0,s.jsxs)(n.li,{children:["Functions ",(0,s.jsx)(n.code,{children:"ac.iterateCars()"})," and ",(0,s.jsx)(n.code,{children:"ac.iterateCars.ordered()"})," to quickly iterate cars (from first to last or in sorted by distance to camera);"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["UI:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Using TTF fonts for DWrite UI functions doesn\u2019t require to specify the exact font name anymore, instead a simple \u201cfilename.ttf\u201d name would work as well selecting the first font."}),"\n",(0,s.jsxs)(n.li,{children:["New ",(0,s.jsx)(n.code,{children:"ui.iconButton()"})," instead of completely broken ",(0,s.jsx)(n.code,{children:"ui.imageButton()"})," (now deprecated);"]}),"\n",(0,s.jsxs)(n.li,{children:["New ",(0,s.jsx)(n.code,{children:"ui.setNextItemIcon()"})," function;"]}),"\n",(0,s.jsxs)(n.li,{children:["Function ",(0,s.jsx)(n.code,{children:"ui.beginGroup()"})," takes optional width allowing to arrange UI in neat columns easily;"]}),"\n",(0,s.jsx)(n.li,{children:"Specify size to create a multi-line text input area;"}),"\n",(0,s.jsxs)(n.li,{children:["New ",(0,s.jsx)(n.code,{children:"ui.beginSubtraction()"})," and ",(0,s.jsx)(n.code,{children:"ui.endSubtraction()"})," for some advanced cases;"]}),"\n",(0,s.jsx)(n.li,{children:"Extra canvas items can copy their content from geometry shots and any other textures (including in icon format) quickly;"}),"\n",(0,s.jsx)(n.li,{children:"INI: load controls config directly;"}),"\n",(0,s.jsxs)(n.li,{children:["Popup color pickers update ",(0,s.jsx)(n.code,{children:"ui.itemEdited()"})," flag properly;"]}),"\n",(0,s.jsxs)(n.li,{children:["Broken ",(0,s.jsx)(n.code,{children:"ui.renderShader()"})," is working properly now;"]}),"\n",(0,s.jsx)(n.li,{children:"Function for setting custom driver icons now can set additional icons instead of overriding the main one;"}),"\n",(0,s.jsx)(n.li,{children:"Functions drawing images now can keep aspect ratio by fitting an image, not just cropping it;"}),"\n",(0,s.jsx)(n.li,{children:"GIF players fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Access to TrackIR input data;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Scene API:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enable outline for scene references;"}),"\n",(0,s.jsxs)(n.li,{children:["A few more functions to make dealing with scene references simpler, such as ",(0,s.jsx)(n.code,{children:":subtract()"})," or ",(0,s.jsx)(n.code,{children:":clone()"})," (cloning actual reference, not its content);"]}),"\n",(0,s.jsxs)(n.li,{children:["Geometry shot:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Shader types fixed, new option to enforce the best possible render (as close to original lighting conditions as possible);"}),"\n",(0,s.jsx)(n.li,{children:"Shadows shaders type produces proper shadow map for meshes casting shadows (if you were using it for advancing shaders, your code will still work though, there is a new value for shadows);"}),"\n",(0,s.jsx)(n.li,{children:"Passed scene reference now taken by pointer, allowing to alter the reference later without the need to recreate the shot;"}),"\n",(0,s.jsx)(n.li,{children:"Alternatively, now callbacks for opaque and transparent stages can be passed along (or instead) of the scene reference for adding custom shaded quads, circles and such;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["New ",(0,s.jsx)(n.code,{children:"render.mesh()"})," function to go along with ",(0,s.jsx)(n.code,{children:"render.quad()"})," and such, allowing to quicky render some simplified entities (or actual meshes) with custom pixel shaders;"]}),"\n",(0,s.jsx)(n.li,{children:"Projecting things on meshes is faster now (with right UV, several times faster);"}),"\n",(0,s.jsx)(n.li,{children:"Mouse rays for raycasting no longer return some crazy values if mouse is outside of left top corner;"}),"\n",(0,s.jsx)(n.li,{children:"Issue with shaders with different defines still acting as the same shader if parameter and texture keys are the same fixed;"}),"\n",(0,s.jsx)(n.li,{children:"Custom shaders for scene objects now can access cloud shadows;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Lua apps:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Record and replay extra data in replays;"}),"\n",(0,s.jsx)(n.li,{children:"New functions for restarting session, opening race menu or teleport to pits (acts the same as those AC\u2019s UDP commands, but more directly);"}),"\n",(0,s.jsx)(n.li,{children:"Function to capture a regular screenshot directly (includes UI, data gets passed directly to callback instead of being saved in a file);"}),"\n",(0,s.jsx)(n.li,{children:"Set a list of tags for windows for easier search;"}),"\n",(0,s.jsxs)(n.li,{children:["Car resetting function fixed, new functions for saving and loading car state added (working in offline single car races, invalidates lap time, to check if available use ",(0,s.jsx)(n.code,{children:"ac.isCarResetAllowed()"}),");"]}),"\n",(0,s.jsx)(n.li,{children:"Set window size constraints;"}),"\n",(0,s.jsx)(n.li,{children:"Define background services to be ran occasionally in background threads to check things or collect driving data in background without affecting performance;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Gameplay API (available to new modes, Lua apps, online scripts and such):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["New ",(0,s.jsx)(n.code,{children:"ac.disableCarRecovery()"})," function;"]}),"\n",(0,s.jsxs)(n.li,{children:["New ",(0,s.jsx)(n.code,{children:"ac.checkIfServerRequiresPasswordAsync()"})," function;"]}),"\n",(0,s.jsx)(n.li,{children:"Driver tooltips now can be not only extended, but also completely overridden;"}),"\n",(0,s.jsx)(n.li,{children:"Access track conditions (name and index-based for monitoring, debugging or something else);"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Physics API:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AI-related API can move AI cars around or disable AI entirely;"}),"\n",(0,s.jsx)(n.li,{children:"Available to Lua apps in offline single car sessions (invalidating lap time and such);"}),"\n",(0,s.jsxs)(n.li,{children:["New ",(0,s.jsx)(n.code,{children:"physics.getPointVelocity()"}),", ",(0,s.jsx)(n.code,{children:"physics.addWheelTorque()"})," and ",(0,s.jsx)(n.code,{children:"physics.setWheelAngularVelocity()"})," functions;"]}),"\n",(0,s.jsx)(n.li,{children:"All functions receiving wheels mask now take 0\u20263 values for wheel index as well (hopefully you were using enum and not the actual numerical values in your code);"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Car physics scripts:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Override damper settings;"}),"\n",(0,s.jsx)(n.li,{children:"Override brakes;"}),"\n",(0,s.jsx)(n.li,{children:"Override engine torque;"}),"\n",(0,s.jsx)(n.li,{children:"Override differential settings;"}),"\n",(0,s.jsx)(n.li,{children:"Override preload value for central differential of AWD1;"}),"\n",(0,s.jsx)(n.li,{children:"Add torque to car body or force to wheels;"}),"\n",(0,s.jsx)(n.li,{children:"Alter tyre temperature;"}),"\n",(0,s.jsx)(n.li,{children:"Get final engine torque, dampers velocity, suspension travel, contact point, normal, tyre velocity and more;"}),"\n",(0,s.jsx)(n.li,{children:"Set turbo boost value below 1;"}),"\n",(0,s.jsx)(n.li,{children:"Draw debug shapes (don\u2019t forget to mark checkbox in CSP Debug App to see them);"}),"\n",(0,s.jsx)(n.li,{children:"Include other Lua files from data folder: now works with packed data as well;"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Car scripts: access properties of rendering cameras, texture preprocessing and lights defined in car config directly for reading and updating;"}),"\n",(0,s.jsx)(n.li,{children:"New modes: specify opponents explicitly along with custom spawn points;"}),"\n",(0,s.jsx)(n.li,{children:"FFB postprocessing: slight update, now with access to original steer axis input and final steer angle input and ability to override steering angle, AC no longer crashes when paused;"}),"\n",(0,s.jsx)(n.li,{children:"IO API: recycling now can work with directories too;"}),"\n",(0,s.jsx)(n.li,{children:"Lua Debug App has been rewritten to be more usable: now with customizable and less obstructing UI, with helpful tooltips for debugged values, copyable logging entries, updated profiler and a lot more."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);