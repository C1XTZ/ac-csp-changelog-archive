"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[9492],{1553:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"changelogs/0-2-4p1","title":"v0.2.4-preview1","description":"*   Version ID: 3045","source":"@site/docs/changelogs/0-2-4p1.md","sourceDirName":"changelogs","slug":"/changelogs/0-2-4p1","permalink":"/ac-csp-changelog-archive/changelogs/0-2-4p1","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"v0.2.4-preview1"},"sidebar":"versionSidebar","previous":{"title":"v0.2.4","permalink":"/ac-csp-changelog-archive/changelogs/0-2-4"},"next":{"title":"v0.2.3","permalink":"/ac-csp-changelog-archive/changelogs/0-2-3"}}');var r=i(4848),l=i(8453);const a={title:"v0.2.4-preview1"},t="Changelog",o={},d=[{value:"New features, options and improvements",id:"new-features-options-and-improvements",level:2},{value:"Extended physics",id:"extended-physics",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Configs and tools",id:"configs-and-tools",level:2},{value:"Lua",id:"lua",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Version ID: 3045"}),"\n",(0,r.jsx)(n.li,{children:"Size: ??.?? MB"}),"\n"]}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"changelog",children:"Changelog"})}),"\n",(0,r.jsx)(n.h2,{id:"new-features-options-and-improvements",children:"New features, options and improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"WeatherFX: option to increase conditions limits allowing for controllers to set temperatures and wind speed outside of safe ranges;"}),"\n",(0,r.jsx)(n.li,{children:"New experimental option in General/Development (at the bottom) enabling instant replays online;"}),"\n",(0,r.jsx)(n.li,{children:"New apps switcher appearing with Ctrl+Tab (Tab button no longer shows leaderboard if any modifier is pressed);"}),"\n",(0,r.jsx)(n.li,{children:"New taskbar: desktop icons are replaced with previews (use settings to select icons instead if needed);"}),"\n",(0,r.jsxs)(n.li,{children:["Default WeatherFX style:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New upper clouds layers;"}),"\n",(0,r.jsx)(n.li,{children:"Falling stars at night (pretty small chance to see them though)"}),"\n",(0,r.jsx)(n.li,{children:"Auroras look slightly improved;"}),"\n",(0,r.jsx)(n.li,{children:"All extra effects are now optional;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Physics experiments:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Early collider activation is enabled by default again, this time much safer and uses number of wheels touching ground instead;"}),"\n",(0,r.jsx)(n.li,{children:"New experiment for tweaking car collider meshes: makes sure early collider activation won\u2019t have any problems like before;"}),"\n",(0,r.jsx)(n.li,{children:"New experiment for expanding collider boxes vertically: decreases changes of a box phasing through the ground and, as a result, whole car passing through if falling flat;"}),"\n",(0,r.jsx)(n.li,{children:"New experiment for smooth transition to 0\xb0 steering angle when AC is paused (to make sure nothing would break because of sudden change like that);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Radio update (in case you were missing music in AC, thanks to badradio.nz for the idea):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"List of stations and the actual playback are now handled on CSP side, while Lua scripts can connect to it and control things;"}),"\n",(0,r.jsx)(n.li,{children:"Default list of stations updated, including more up-to-date ones;"}),"\n",(0,r.jsx)(n.li,{children:"CSP uses advanced API provided by radio.co and laut.fm to collect extra information about currently playing music;"}),"\n",(0,r.jsx)(n.li,{children:"Android Auto: playback moved to CSP side, support for new features such as album covers and track info (if available);"}),"\n",(0,r.jsx)(n.li,{children:"New Internet Radio app on App Shelf: automatically resumes playback on launches (optional, enabled by default), convenient UI to manage list of stations;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Photo mode app:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use mouse wheel for zooming when viewing a complete screenshot;"}),"\n",(0,r.jsx)(n.li,{children:"Screenshots with resolution multiplier use FSR for downsampling (unless zoomed in);"}),"\n",(0,r.jsx)(n.li,{children:"Hotkey for preview shot is working again, now switched to Alt+F8 (apparently Ctrl+F8 toggles mouse);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Smart Shadows:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Option to compute splits automatically based on distance for simpler adjustments and better splits arrangement;"}),"\n",(0,r.jsx)(n.li,{children:"Option to draw shadows around camera instead of drawing them in front;"}),"\n",(0,r.jsx)(n.li,{children:"Shadows stabilization is greatly improved;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"New AI Spline Editor app: load an AI spline and tweak its trajectory and sides by dragging them around;"}),"\n",(0,r.jsx)(n.li,{children:"New CPU optimization preventing loading of certain audio samples for other cars (might help a bit with 30+ car servers);"}),"\n",(0,r.jsx)(n.li,{children:"New option in Small Tweaks to increase GPU priority of web browser backend processes (enabled by default, should prevent issues with HAGS in Windows 11);"}),"\n",(0,r.jsx)(n.li,{children:"GUI: option to draw AC apps together with IMGUI UI for better interoperability and similar blurred backgrounds;"}),"\n",(0,r.jsx)(n.li,{children:"ExtraFX: options to only use effects in replays;"}),"\n",(0,r.jsx)(n.li,{children:"CSP Debug app: option to render car colliders;"}),"\n",(0,r.jsx)(n.li,{children:"New pause: admins can restart or skip sessions from there directly;"}),"\n",(0,r.jsx)(n.li,{children:"Traffic planner: copy a lane with an offset, specify vertical offset when exporting splines."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"extended-physics",children:"Extended physics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["SurfacesFX fixed and adjusted, new ",(0,r.jsx)(n.code,{children:"TYPE_HINT = GRAVEL"})," for tyres and more gravel-related options;"]}),"\n",(0,r.jsx)(n.li,{children:"Differential bug (211 only) fixed;"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TORQUE_MODE_EX"})," now disabled entirely for axle suspension types (prevents any potential issues that may arise from it);"]}),"\n",(0,r.jsx)(n.li,{children:"Some gyro FFB stuff with cosmic fixed."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Textures deduplication no longer freezes AC if one texture has failed to load;"}),"\n",(0,r.jsx)(n.li,{children:"Cosmic suspension no longer crashes with AIs and custom track physics active;"}),"\n",(0,r.jsx)(n.li,{children:"30 FPS background limit should work now;"}),"\n",(0,r.jsxs)(n.li,{children:["Linear color space:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Heating materials glow properly;"}),"\n",(0,r.jsx)(n.li,{children:"Distant headlights glare is no longer affected by brightness multiplier;"}),"\n",(0,r.jsx)(n.li,{children:"Brake disk lights intensity adjusted;"}),"\n",(0,r.jsx)(n.li,{children:"Bounced light for headlights and brakes (non-ExtraFX one) works properly;"}),"\n",(0,r.jsx)(n.li,{children:"License plate lights are a bit dimmer, fallback emissive fixed;"}),"\n",(0,r.jsx)(n.li,{children:"nePBR shaders should look closer to how they looked before LCS;"}),"\n",(0,r.jsx)(n.li,{children:"Disabled LCS no longer should draw debug lines overly bright;"}),"\n",(0,r.jsx)(n.li,{children:"Issue with rendering breaking on some reloads with LCS enabled (and things turning blue) fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Skidmarks with SkidmarksFX disabled should look a bit better;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Default WeatherFX style:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enabled LCS no longer affects lights range;"}),"\n",(0,r.jsx)(n.li,{children:"Tunnels brightness fixed, shouldn\u2019t jump around anymore;"}),"\n",(0,r.jsx)(n.li,{children:"Fog above (hiding upper parts of tall buildings on some tracks) fixed;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RainFX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Drop hits no longer disappear for a frame from time to time, intensity is now adjustable;"}),"\n",(0,r.jsx)(n.li,{children:"Rain AI splines no longer created on tracks with splines longer than 50 km or with more than 100k points;"}),"\n",(0,r.jsx)(n.li,{children:"AIs can handle cars with street and semislick tyres, no longer spam logs if a Lua app stops AIs from visiting pits to change tyres;"}),"\n",(0,r.jsx)(n.li,{children:"AIs no longer change rain tyres on the last laps;"}),"\n",(0,r.jsx)(n.li,{children:"Issue with RainFX misbehaving if other cars are driven in areas unvisited by player before causing all sorts of problems fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Fallback data in areas with no puddles computed has also been fixed (was using water instead of wetness often resulting in increased slipperiness);"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"ExtraFX works again with MSAA disabled;"}),"\n",(0,r.jsx)(n.li,{children:"SSLR should work better, especially with LCS active;"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[PITS_SPEED_LIMITER] SPEED_KMH=\u2026"})," no longer breaks ERS and such;"]}),"\n",(0,r.jsx)(n.li,{children:"Extra G/J in replays fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Look of Earth from space fixed, free camera no longer jumps around in space on smaller tracks;"}),"\n",(0,r.jsx)(n.li,{children:"GPU constant buffers data is now 64-bytes aligned to work a tiny bit faster;"}),"\n",(0,r.jsx)(n.li,{children:"Raycasting static meshes checks AABB as well for a slight speedup;"}),"\n",(0,r.jsx)(n.li,{children:"Win keys stop Ctrl-based AC shortcuts as well;"}),"\n",(0,r.jsx)(n.li,{children:"AI-activating shortcut working without Ctrl held down fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Hood/bumper cameras shaking adjusted;"}),"\n",(0,r.jsx)(n.li,{children:"Advanced chunks optimization leading for tyre grooves to turn black on some tracks fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Fixing tyre grooves option that was causing them to turn black on some tracks fixed;"}),"\n",(0,r.jsxs)(n.li,{children:["Missing material variable warnings in ",(0,r.jsx)(n.code,{children:"log.txt"})," should be muted now (pretty pointless warning anyway);"]}),"\n",(0,r.jsx)(n.li,{children:"Fix for a handshake for custom online servers;"}),"\n",(0,r.jsx)(n.li,{children:"Cars should no longer spawn on roofs with aligned teleportation of custom tracks physics;"}),"\n",(0,r.jsx)(n.li,{children:"Shadows not working properly on a distant square when sun is low fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Removed broken Python shared library option (it wasn\u2019t of much use);"}),"\n",(0,r.jsxs)(n.li,{children:["SkidmarksFX: fading on loading fixed (config wasn\u2019t respected), fading values are now printed in CSP log with ",(0,r.jsx)(n.code,{children:"Skidmarks fading"})," prefix;"]}),"\n",(0,r.jsx)(n.li,{children:"Spotify music detection removed (wasn\u2019t that reliable or informative, and everybody has moved to Windows 10 with much better music status system);"}),"\n",(0,r.jsx)(n.li,{children:"Logic for disallowing overlapping of AC forms updated, now shouldn\u2019t cause apps to jump around too much; overlapping highlight is fixed too;"}),"\n",(0,r.jsx)(n.li,{children:"Users with non-latin usernames can be tagged by typing first latin symbol or digit instead and pressing Tab;"}),"\n",(0,r.jsx)(n.li,{children:"CSP should be able to handle files in UTF-16/32 BE/LE with/without BOM encodings (might lead to change in behavior if you\u2019d be using a car with some config incorrectly saved in UTF-16 and failing to be parsed before);"}),"\n",(0,r.jsx)(n.li,{children:"App Shelf: main lua file is extracted last and renamed after extracting, should ensure there\u2019ll be no failed installations;"}),"\n",(0,r.jsx)(n.li,{children:"As seemingly proven to not cause issues, AABB for reflections option is hidden and enabled by default;"}),"\n",(0,r.jsx)(n.li,{children:"GrassFX transitions are smoother;"}),"\n",(0,r.jsx)(n.li,{children:"Collapsed apps with automatic sizing load their previous sizes properly;"}),"\n",(0,r.jsx)(n.li,{children:"Mouse steering should work properly with pause menu;"}),"\n",(0,r.jsx)(n.li,{children:"VAO-only and normals views are working with linear color space now (by switching to old shaders sets);"}),"\n",(0,r.jsx)(n.li,{children:"New driver tags no longer stop working with paused race or replay;"}),"\n",(0,r.jsx)(n.li,{children:"IMGUI glow in transparent areas fixed;"}),"\n",(0,r.jsx)(n.li,{children:"GPU priority increased by default;"}),"\n",(0,r.jsx)(n.li,{children:"Smoke interaction with fast driving cars adjusted;"}),"\n",(0,r.jsx)(n.li,{children:"Skidmarks, grass and fake shadows should be better clipped for interior cameras;"}),"\n",(0,r.jsx)(n.li,{children:"AC should no longer crash when a mesh selected in Objects Inspector has been removed;"}),"\n",(0,r.jsx)(n.li,{children:"Other smaller fixes."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configs-and-tools",children:"Configs and tools"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Distant lights can pair with associated meshes with a new ",(0,r.jsx)(n.code,{children:"[LIGHTS_DISTANT_LAYER_\u2026]"})," meshes list and ",(0,r.jsx)(n.code,{children:"DISTANT_LAYER"})," lights option stopping them from contributing to overall lights limit (docs are coming soon);"]}),"\n",(0,r.jsx)(n.li,{children:"Lights with large radius or fade-out distance now will end up in a separate 4 km chunks thing (previously it was only 800 m chunks, and fade-out distance wasn\u2019t taken into account at all);"}),"\n",(0,r.jsx)(n.li,{children:"Lights with fade-out or range larger than 4 km will count as dynamic and remain outside of chunks;"}),"\n",(0,r.jsxs)(n.li,{children:["New online option: ",(0,r.jsx)(n.code,{children:"CUSTOM_MOTION = 1, RESET"})," resetting interpolation when car teleports (once tested and verified, will be enabled by default for all servers);"]}),"\n",(0,r.jsxs)(n.li,{children:["Tracks: add alternative splines named ",(0,r.jsx)(n.code,{children:"ext_alt_fast_lane_?.ai"})," to ",(0,r.jsx)(n.code,{children:"ai"})," folder and CSP would use those for random cars for something like alternative paths NFS5 Porsche style (not used by track day car respawning for now);"]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"MATERIAL_FLAG_1 = 1"})," on MultiMap_emissive shaders to switch to UV2 for txEmissive;"]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"MATERIAL_FLAG_2 = 1"})," on MultiMap_NMDetail shaders to use alpha of txDetail as a multiplier for reflectivity as well;"]}),"\n",(0,r.jsx)(n.li,{children:"UV2 patches no longer load if generated from non-triangulated meshes (CM update filtering things on its side is coming soon);"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"emSkipDiffuseMap"})," for emissive shaders now takes values in-between of 0 and 1, allowing to limit txDiffuse contribution;"]}),"\n",(0,r.jsxs)(n.li,{children:["Set ",(0,r.jsx)(n.code,{children:"emSkipDiffuseMap"})," to -1 (or use ",(0,r.jsx)(n.code,{children:"CustomEmissive_UseDetailInsteadOfDiffuse"})," mixin) to switch emissive shaders to use txDetail as a multiplier to txEmissive (instead of txDiffuse);"]}),"\n",(0,r.jsxs)(n.li,{children:["Add a second argument 1 to ",(0,r.jsx)(n.code,{children:"CLUSTER_THRESHOLD"})," for lights and such in track configs to switch to clustering in 3D (slightly slower);"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"[BASIC] INTERIOR_CLIPPING = \u2026"})," option for cars specifying if grass, skidmarks and fake shadows should be clipped for interior views (by default enabled for non-open wheelers);"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"FORCE_MINUS_TWO_LOD_BIAS"})," thing for shader replacements (please don\u2019t use unless really have to);"]}),"\n",(0,r.jsx)(n.li,{children:"New trees: AO baking now can be adjusted;"}),"\n",(0,r.jsxs)(n.li,{children:["Hidden experimental option ",(0,r.jsx)(n.code,{children:"general.ini/DEV/NANORT_SCENE_RAYCAST"})," to build accelerating structures for faster mesh raycasting (might increase memory consumption and make first raycasts slow);"]}),"\n",(0,r.jsxs)(n.li,{children:["Hidden experimental option ",(0,r.jsx)(n.code,{children:"general.ini/DEV/VIRTUAL_REPLAYS_ALLOCATION"})," to use a magical VirtualAlloc function for replays instead of allocating small bits of memory and increasing them as more frames are being recorded;"]}),"\n",(0,r.jsx)(n.li,{children:"Trees Inspector now shows more details about selected tree;"}),"\n",(0,r.jsxs)(n.li,{children:["Volume peak: devices are filtered based on regexps in ",(0,r.jsx)(n.code,{children:"small_tweaks.ini"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"lua",children:"Lua"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Common API:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"string.pack()"}),", ",(0,r.jsx)(n.code,{children:"string.packsize()"})," and ",(0,r.jsx)(n.code,{children:"string.unpack()"})," compatible with Lua 5.3 behavior;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"string.urlCheck()"}),", ",(0,r.jsx)(n.code,{children:"string.urlNext()"})," and ",(0,r.jsx)(n.code,{children:"os.parseDate()"})," functions;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.StructItem.explicit()"})," modifier for preserving order of items passed into structure constructors;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.onTrackPointCrossed()"})," for measuring custom sectors;"]}),"\n",(0,r.jsxs)(n.li,{children:["Functions to work with view and projection matrices, including getting matrices from ",(0,r.jsx)(n.code,{children:"ac.GeometryShot"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.OnlineEvent()"})," got an option to receive messages that could have been sent before app has loaded (also, issue with messed up data when receiving two messages at once fixed);"]}),"\n",(0,r.jsxs)(n.li,{children:["Time spend on executing Lua callbacks callbacks time set by functions such as ",(0,r.jsx)(n.code,{children:"render.on()"})," is measured;"]}),"\n",(0,r.jsxs)(n.li,{children:["Calling ",(0,r.jsx)(n.code,{children:"ac.store('key', false)"})," clears out a value to fix compatibility with some cars (please keep it mind it\u2019s only meant to store strings or numbers though);"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["WeatherFX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.setWeatherLightsRangeFactor()"}),": override default range multiplier based on lights intensity multiplier;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.useMinDepthResolution()"}),": change the way depth buffer MSAA is resolved depending on what you want to use it for;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["State API:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cars timing and sectors related info in car states online fixed;"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.getSim().currentSessionTime"})," and ",(0,r.jsx)(n.code,{children:"ac.getSession().hasAdditionalLap"})," fixed in online races;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.getCarPhysics().wheels[].discCoreTemperature"})," for custom physics brakes;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.getSim().isLinearColorSpaceActive"})," for active linear color space fix;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.getSim().currentVAOMode"})," for current VAO debugging state;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.getSim().cameraJumped"})," will be set to ",(0,r.jsx)(n.code,{children:"true"})," for a first frame after camera has been teleported;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.getSim().isMakingScreenshot"})," will be set to ",(0,r.jsx)(n.code,{children:"true"})," if currently accumulating frames for a screenshot;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["New shared libraries (to avoid standard library to grow too massive and slow down scripts loading, extra functions are being added like this instead):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"shared/sim/ghost"}),": create new ghosts, reload them live and more;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"shared/utils/chat"}),": share setups in chat, change car color;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"shared/utils/steam"}),":  access some of Steam API functions;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"shared/utils/appshelf"}),": any script can use it to ask user to install a trusted app;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"shared/utils/binary"}),": effortless and fast reading and writing binary data;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"shared/utils/playing"}),": override info about currently playing music, for example, if your app is playing something;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Lua apps:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.setWindowBackground()"})," for changing background color and optionally painting titles black;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"DARK_HEADER"})," flag for windows if background used is white (title text and icons will be black);"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"itemValues: number[]"})," field for ",(0,r.jsx)(n.code,{children:"ac.getSetupSpinners()"})," for CSP entries using LUTs;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["UI & scene API:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.SceneReference:ensureMaterialsUnique()"})," shouldn\u2019t leak or cause crashes anymore;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ui.renderShader()"})," respects IMGUI clip area;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ui.addSettings()"})," uses name if ID is not set, for more reliable state saving;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ui.onChat()"})," allowing to replace entire chat app;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ui.onExclusiveHUD()"})," can return 'apps' to let CSP know it can draw IMGUI apps;"]}),"\n",(0,r.jsxs)(n.li,{children:["Experimental functions ",(0,r.jsx)(n.code,{children:"ui.pushAlignment()"})," and ",(0,r.jsx)(n.code,{children:"ui.popAlignment()"})," for aligning UI without usual complications;"]}),"\n",(0,r.jsxs)(n.li,{children:["Dumped shader replacements, or replacements collected from a KN5 file, no longer affect CSP functional shaders (such as wipers) by adding a new ",(0,r.jsx)(n.code,{children:"LEAVE_FUNCTIONAL_SHADERS=1"})," parameter to config entries;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ui.MediaPlayer"}),": FMOD integration improved (but the option is still hidden), unloading media works better;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"render.BlendMode.OpaqueForced"})," (overriding disabled opaque blending for transparent passes) and ",(0,r.jsx)(n.code,{children:"render.DepthMode.WriteOnly"})," values;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Physics AI API: assign a new spline for a certain AI car (experimental);"}),"\n",(0,r.jsxs)(n.li,{children:["FFB post-processing scripts: new ",(0,r.jsx)(n.code,{children:"ac.disableLowSpeedFFBReduction()"}),", just in case;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.ControlButton:setDisabled()"}),": AC hotkeys can be disabled as well (at least some of them);"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"car::kn5::\u2026"})," textures should work fine with encrypted cars now;"]}),"\n",(0,r.jsx)(n.li,{children:"Encoded Lua canvases should be readable by ImageMagick;"}),"\n",(0,r.jsx)(n.li,{children:"Small chance of a fatal crash on Lua script unload (if it was using logging or something like that in any disposing functions) fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Car physics scripts are better compatible with AC locking car controls."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>t});var s=i(6540);const r={},l=s.createContext(r);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);