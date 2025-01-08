"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[4947],{5907:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"changelogs/0-2-4","title":"v0.2.4","description":"*   Version ID: 3116","source":"@site/docs/changelogs/0-2-4.md","sourceDirName":"changelogs","slug":"/changelogs/0-2-4","permalink":"/ac-csp-changelog-archive/changelogs/0-2-4","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"v0.2.4"},"sidebar":"versionSidebar","previous":{"title":"v0.2.5-preview1","permalink":"/ac-csp-changelog-archive/changelogs/0-2-5p1"},"next":{"title":"v0.2.4-preview1","permalink":"/ac-csp-changelog-archive/changelogs/0-2-4p1"}}');var r=i(4848),l=i(8453);const o={title:"v0.2.4"},t="Changelog",a={},d=[{value:"New features, options and improvements",id:"new-features-options-and-improvements",level:2},{value:"Extended physics",id:"extended-physics",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Configs and tools",id:"configs-and-tools",level:2},{value:"Lua",id:"lua",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Version ID: 3116"}),"\n",(0,r.jsx)(n.li,{children:"Size: 110.58 MB"}),"\n"]}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"changelog",children:"Changelog"})}),"\n",(0,r.jsx)(n.h2,{id:"new-features-options-and-improvements",children:"New features, options and improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New Surfaces FX module for off-road physics (documentation on how to prepare a car or a track coming soon);"}),"\n",(0,r.jsx)(n.li,{children:"New Rally Stage mode for Quick Drive;"}),"\n",(0,r.jsx)(n.li,{children:"New Rally Copilot app on App Shelf for rally modes or just learning an unfamiliar track;"}),"\n",(0,r.jsx)(n.li,{children:"New Dynamic Return app on App Shelf for perfecting driving through custom track sectors;"}),"\n",(0,r.jsxs)(n.li,{children:["New options:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Center UI for wide screens with single screen mode;"}),"\n",(0,r.jsx)(n.li,{children:"Prevent replays from interpolating car teleports (enabled by default);"}),"\n",(0,r.jsx)(n.li,{children:"Save size and position of Assetto Corsa window between sessions;"}),"\n",(0,r.jsx)(n.li,{children:"New physics experiment to use pit positions for spawning if other spawn points are not set properly;"}),"\n",(0,r.jsx)(n.li,{children:"New optimization for virtual memory allocation for replays;"}),"\n",(0,r.jsxs)(n.li,{children:["Show white flag on the last race lap (and optionally hide ",(0,r.jsx)(n.code,{children:"leader on last lap"})," message);"]}),"\n",(0,r.jsx)(n.li,{children:"Stop camera switch on replay activation;"}),"\n",(0,r.jsx)(n.li,{children:"New Behavior: tweak to stop AIs from teleporting when stuck;"}),"\n",(0,r.jsx)(n.li,{children:"Automatically flip AI spline on up/downhill tracks where creator forgot to do so;"}),"\n",(0,r.jsx)(n.li,{children:"Force reverb for audio active at all times;"}),"\n",(0,r.jsx)(n.li,{children:"Hide missing driver model instead of using default one (in case there are some issues with rig compatibility);"}),"\n",(0,r.jsx)(n.li,{children:"Temporary tweak stopping replays from recording state of track objects if there are too many of them, to save on VRAM;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Grass FX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New wind implementation;"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fuPBR_\u2026"})," and ",(0,r.jsx)(n.code,{children:"ksMultilayer_objsp_nm4"})," shaders are compatible with grass;"]}),"\n",(0,r.jsx)(n.li,{children:"Issue with grass missing on edges of the screen with camera rotation fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Better compatibility with LCS;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Tyres FX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Normals and color are fading with wear;"}),"\n",(0,r.jsx)(n.li,{children:"Flex uses actual data with extended physics active;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Photo app:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Button to reset exposure;"}),"\n",(0,r.jsx)(n.li,{children:"Option to use focal length units for zoom;"}),"\n",(0,r.jsx)(n.li,{children:"Removing stored points saves changes now;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Triple tweaks:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New method for uneven sides actually matching scene;"}),"\n",(0,r.jsx)(n.li,{children:"Options to redefine triple behavior for different types of cameras;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Android Auto:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New web browser app (replacing car info app);"}),"\n",(0,r.jsx)(n.li,{children:"Cars can add extra apps (requires signing for now);"}),"\n",(0,r.jsx)(n.li,{children:"Hover mouse over virtual keyboard to use actual keyboard for typing;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Handbrake syncs online (using a single bit for now);"}),"\n",(0,r.jsx)(n.li,{children:"Tracks surface type detection improved, no longer thrown off by an uppercase (improves Surfaces FX);"}),"\n",(0,r.jsxs)(n.li,{children:["Search in taskbar treats spaces better (query for ",(0,r.jsx)(n.code,{children:"renderstats"})," will find ",(0,r.jsx)(n.code,{children:"Render Stats"})," app);"]}),"\n",(0,r.jsx)(n.li,{children:"CSP Debug app: colliders are shown for three nearest cars, for easier investigation of online collisions;"}),"\n",(0,r.jsx)(n.li,{children:"Chaser Camera: different scripts for first and second camera;"}),"\n",(0,r.jsx)(n.li,{children:"Default WeatherFX style: a bit of extra chromatic aberration for glare;"}),"\n",(0,r.jsx)(n.li,{children:"Walking Out: gamepad controls, a lot of fixes, main car now can be teleported;"}),"\n",(0,r.jsxs)(n.li,{children:["CSP verifies its version number against ",(0,r.jsx)(n.code,{children:"data_manifest.ini"})," to try and detect corrupted installations;"]}),"\n",(0,r.jsx)(n.li,{children:"Servers can send a certain packet to update admin state of a player explicitly;"}),"\n",(0,r.jsxs)(n.li,{children:["Missing ",(0,r.jsx)(n.code,{children:"driver_base_pos.knh"})," no longer leads to a crash;"]}),"\n",(0,r.jsx)(n.li,{children:"Rain FX racing line is affected differently by different types of tyres (a very rough estimate for now);"}),"\n",(0,r.jsx)(n.li,{children:"CSP-generated car previews are sharper now;"}),"\n",(0,r.jsx)(n.li,{children:"New Modes can disable yellow and blue flags, also disabled with track day mode;"}),"\n",(0,r.jsx)(n.li,{children:"Hidden config line to specify list of textures affected by color changes in chat online."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"extended-physics",children:"Extended physics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cosmic suspension:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Improved calculation efficiencies for coilovers;"}),"\n",(0,r.jsx)(n.li,{children:"Fixed position setup adjustments for joints using asymmetrical geometry;"}),"\n",(0,r.jsx)(n.li,{children:"Fixed bug with torsion bar preload angle;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Extended physics brakes:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added compatibility for vanilla ERS;"}),"\n",(0,r.jsx)(n.li,{children:"Vanilla steerbrake should now be compatible;"}),"\n",(0,r.jsx)(n.li,{children:"Improved accuracy of air density effect on cooling (v2 thermal model only);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Extended physics tires:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Improved accuracy of air density effect on cooling (v2 thermal model only);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Extended physics ERS:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New (WIP) ERS model added, documentation will be available on the wiki soon;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Extended car physics stores more data in the car state."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New pause menu fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Turbo adjustment stopping to work fixed;"}),"\n",(0,r.jsx)(n.li,{children:"IME support (such as virtual keyboards, Windows Emoji selector or something more complex) improved, but just in case it can be disabled now in GUI section;"}),"\n",(0,r.jsx)(n.li,{children:"Odometer loading should be fixed (and for cases without CM used, CSP will keep its own track of total driven distance);"}),"\n",(0,r.jsx)(n.li,{children:"Extra FX TAA works a bit better with LCS enabled (sharpening with it active is reduced now), no longer makes sun black;"}),"\n",(0,r.jsx)(n.li,{children:"Extra FX SSLR should work better with LCS enabled;"}),"\n",(0,r.jsx)(n.li,{children:"Ctrl+Shift+A/T selects previous mode (some other bindings from that group need more fixing, working on it);"}),"\n",(0,r.jsx)(n.li,{children:"Ctrl+Shift+U switches to a previous desktop;"}),"\n",(0,r.jsx)(n.li,{children:"CSP integration of system keybindings fixed, now MGU ones support controllers again, engine brake works properly including held down Shift button;"}),"\n",(0,r.jsx)(n.li,{children:"Automatic shadow splits no longer take FOV into account for interior shots, splits are shown in LightingFX app;"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[CUSTOM_PHYSICS] EXTRAPOLATE_STATE = 1"})," for online servers is removed (please set to 0 anyway if your servers require CSP newer than 2784, to fix issues with 0.2.3);"]}),"\n",(0,r.jsx)(n.li,{children:"Dust particles keep their colors for longer;"}),"\n",(0,r.jsx)(n.li,{children:"Radio no longer keeps playing after restarting AC if it was paused, or in replays;"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fuPBR\u2026"})," shaders with parallax reduce its contribution at grazing angles, preventing some visual glitches;"]}),"\n",(0,r.jsxs)(n.li,{children:["Surface colors synchronization for smoke, particles and skidmarks better handles broken materials with widely different ",(0,r.jsx)(n.code,{children:"ksAmbient"})," and ",(0,r.jsx)(n.code,{children:"ksDiffuse"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"CSP showroom no longer crashes with a certain tonemapping function;"}),"\n",(0,r.jsx)(n.li,{children:"Cars with tyres with insane dimensions no longer break skidmarks, GrassFX and such;"}),"\n",(0,r.jsx)(n.li,{children:"Using track camera for extra shots no longer affects audio (also, Lua scripts can specify cameras set to use);"}),"\n",(0,r.jsx)(n.li,{children:"Origin shift activates sooner to prevent wobbling on some tracks;"}),"\n",(0,r.jsx)(n.li,{children:"Objects Inspector shows state of integer values properly (for example, flags);"}),"\n",(0,r.jsxs)(n.li,{children:["Loading original car textures with ",(0,r.jsx)(n.code,{children:"kn5::"})," works much better with encrypted models;"]}),"\n",(0,r.jsx)(n.li,{children:"HUD toasts (popup messages in the bottom left corner) no longer steal focus on appearing;"}),"\n",(0,r.jsx)(n.li,{children:"Web Browser with its Ctrl+Tab no longer conflicts with Apps Switcher;"}),"\n",(0,r.jsx)(n.li,{children:"Taskbar icons are positioned in a more stable way to prevent flickering;"}),"\n",(0,r.jsx)(n.li,{children:"A bunch of fixes for random crashes when editing configs and such;"}),"\n",(0,r.jsx)(n.li,{children:"Distant headlights glare is removed for now until I\u2019ll redo it in a way that doesn\u2019t rely on cars having accurate headlight light source placement;"}),"\n",(0,r.jsx)(n.li,{children:"Matte glass taking distance into account to adjust blurriness (introduced in 0.2.3) fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Visual part for deforming track walls fixed;"}),"\n",(0,r.jsxs)(n.li,{children:["Surfaces FX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AIs no longer break when driving off-track;"}),"\n",(0,r.jsx)(n.li,{children:"AIs will try and select gravel tyres where appropriate;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Rain FX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AI tyre selection fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Water splashes from wheels fixed, now spawn in the right place and look correctly as well;"}),"\n",(0,r.jsx)(n.li,{children:"Few other small visual improvements;"}),"\n",(0,r.jsx)(n.li,{children:"Whitish fake shadows outline with ExtraFX should be fixed;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Tyres FX: rain tyre patterns are better compatible with grass and damage, color has been fixed as well;"}),"\n",(0,r.jsx)(n.li,{children:"Domain zone finally fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Mesh raycasting missing some flat static meshes fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Crashes with extended physics setup items happening if \u2212 or + buttons were held are fixed (also, the whole thing should be a bit more stable overall);"}),"\n",(0,r.jsxs)(n.li,{children:["Track sections set in ",(0,r.jsx)(n.code,{children:"sections.ini"})," going through starting line should work now;"]}),"\n",(0,r.jsx)(n.li,{children:"Gamepad and keyboard keyboard bindings ignore presses if keyboard modifiers are pressed (apart from gear up/down and handbrake for keyboard controls, in case somebody would use Ctrl, Alt or Shift for - gas or brakes); wheel keyboard bindings should already filter out those presses;"}),"\n",(0,r.jsx)(n.li,{children:"Toggling replay mode or seeking its time bar marks cars as jumped preventing some issues with animated entities;"}),"\n",(0,r.jsx)(n.li,{children:"New trees use track occlusion planes (both distant billboards and closer 3D trees), shading slightly improved;"}),"\n",(0,r.jsx)(n.li,{children:"Advanced chunks optimization no longer messes up TAA and motion blur on some tracks;"}),"\n",(0,r.jsx)(n.li,{children:"Yellow and blue flags shouldn\u2019t flicker in obscure cases anymore;"}),"\n",(0,r.jsx)(n.li,{children:"Trees are drawn in mirrors with high quality reflections (with shadows);"}),"\n",(0,r.jsx)(n.li,{children:"Camera app restores DOF settings to previous when closed (for free and F5 cameras);"}),"\n",(0,r.jsx)(n.li,{children:"WindscreenFX forcefully adds transparent flag to windscreen meshes to help some poorly made mods;"}),"\n",(0,r.jsx)(n.li,{children:"A fix for looped lanes without intersections for traffic planner and mode;"}),"\n",(0,r.jsx)(n.li,{children:"Origin Shift is triggered less often, no longer messes up reflections or flexing cars on shift;"}),"\n",(0,r.jsx)(n.li,{children:"60s driver model helmet drawn with NeckFX is fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Skin driver model overrides are ignored if skin driver model is missing;"}),"\n",(0,r.jsx)(n.li,{children:"Meshes with premultiplied blending should be better compatible with ExtraFX;"}),"\n",(0,r.jsx)(n.li,{children:"Mesh deduplication got some stability improvements, but also disabled by default for now;"}),"\n",(0,r.jsx)(n.li,{children:"Android Auto: YouTube fixed (ytp-dl updated);"}),"\n",(0,r.jsx)(n.li,{children:"Few smaller stability improvements."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configs-and-tools",children:"Configs and tools"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Animated car mud flaps;"}),"\n",(0,r.jsx)(n.li,{children:"New modifier for flag shader to act as a tent roof (wobbling with wind, soaking up with rain);"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nePBR\u2026"})," and ",(0,r.jsx)(n.code,{children:"nePerPixelMultiMap_bending"})," now support UV2-mapped stickers;"]}),"\n",(0,r.jsx)(n.li,{children:"Default settings for driver model extra shadowing adjusted for better visuals;"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"GEAR_RAW"})," format type for CSP digital instruments (regular ",(0,r.jsx)(n.code,{children:"GEAR"})," now shows the custom gear label if set);"]}),"\n",(0,r.jsx)(n.li,{children:"Specify car to take audio from if car audio is missing (also, missing car audio no longer causes a crash);"}),"\n",(0,r.jsxs)(n.li,{children:["Car configs can use ",(0,r.jsx)(n.code,{children:"[AUDIO_VOLUME_EXT]"})," to set alternative volume multipliers for exterior views only;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"[PITSTOP_CAMERA] THETA=, PHI=, RADIUS=, FOV="})," parameters for track configs altering camera used for tyre changes animation;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"[START_CAMERA] BLOCK_TRAJECTORIES=, POSITION_OFFSET="})," parameters for track configs altering starting camera;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ksPerPixelMultiMap_AT_NMDetail"})," should support seasonal changes better;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ksTree_bush"})," shader, acts just like ",(0,r.jsx)(n.code,{children:"ksTree"})," (including A2C support), but receives per-pixel shadows;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[SHADER_REPLACEMENT_\u2026]"})," entries load ",(0,r.jsx)(n.code,{children:"SHADER"})," value as a list now, using the last entry that is available;"]}),"\n",(0,r.jsx)(n.li,{children:"New parameter for UV-based mesh splitting, UV_REGIONS_USE_SIZE, for simpler configuration;"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"BLEND_MODE = PREMULTIPLIED"})," value for shader replacements;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ksWindscreen"}),": new ",(0,r.jsx)(n.code,{children:"alphaGamma"})," parameter for quickly adjusting transparency;"]}),"\n",(0,r.jsxs)(n.li,{children:["Shaders ",(0,r.jsx)(n.code,{children:"ksPerPixelMultiMap"}),", ",(0,r.jsx)(n.code,{children:"ksPerPixelMultiMap_NMDetail"})," and ",(0,r.jsx)(n.code,{children:"ksPerPixelMultiMap_damage_dirt"})," now can receive traces from wipers as well;"]}),"\n",(0,r.jsxs)(n.li,{children:["Tracks load dirt, dust and grass color properly (generic config stops working if sections are present), also loading colors from ",(0,r.jsx)(n.code,{children:"[DIRT]"})," section if ",(0,r.jsx)(n.code,{children:"[TYRES_FX]"})," section is missing."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"lua",children:"Lua"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Common API:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tyreRadius"})," in car state updates with changes in selected tyres;"]}),"\n",(0,r.jsx)(n.li,{children:"Shared signing library for some advanced trickery using RSA;"}),"\n",(0,r.jsx)(n.li,{children:"Shared library for raycasting track physics geometry with extra details;"}),"\n",(0,r.jsx)(n.li,{children:"Shared library for storing data using SQLite as backend;"}),"\n",(0,r.jsx)(n.li,{children:"Capturing starting camera is safer;"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.takeAStepBack()"})," takes a distance argument;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.markLapAsSpoiled()"})," got an option to hide the spoiled lap message;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.isControllerGear<Up/Down>Pressed()"})," should be triggered by apps such as Unbound as well;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.getCarGearLabel()"})," for getting the label of currently engaged gear;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.<log/warn/error/debug>()"})," have been moved to C++ side for better performance, now can be deactivated AC-wide (see developer settings in general group);"]}),"\n",(0,r.jsx)(n.li,{children:"Load tables from car, track or online script configs;"}),"\n",(0,r.jsx)(n.li,{children:"Leaderboard in Lua state works properly in races with multiple sessions;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Audio:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Group events have volume multipliers set to 100% by default;"}),"\n",(0,r.jsx)(n.li,{children:"A certain DSP entry to access volume peaks live;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Scene API:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Loading extra KN5s with skinned meshes should work now;"}),"\n",(0,r.jsx)(n.li,{children:"Loading different KN5s from the same folder no longer causes issues if they share a texture name;"}),"\n",(0,r.jsx)(n.li,{children:"Extra human models can be loaded to car root much more reliably, applying human surface materials and more;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["UI API:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ui.onChat()"})," is fixed;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ui.onDriverNameTag()"})," force activates new tags for the current session;"]}),"\n",(0,r.jsxs)(n.li,{children:["Web browser engine: few stability improvements, new ",(0,r.jsx)(n.code,{children:":onCrash()"})," method, new ",(0,r.jsx)(n.code,{children:":texture()"})," method for accessing raw texture directly;"]}),"\n",(0,r.jsx)(n.li,{children:"Premultiplied UI modifier works much better;"}),"\n",(0,r.jsxs)(n.li,{children:["New functions: ",(0,r.jsx)(n.code,{children:"ui.<begin/end>MIPBias()"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"New icons: redo, reset, up (alt.);"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ui.onDriverTags()"}),": smoother fading nearby, optional table to override tag settings;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ui.DWriteFont()"})," supports font variations, such as slant, with new ",(0,r.jsx)(n.code,{children:":axis()"})," method;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Gameplay API:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.setAILevel()"})," upper limit has been raised from 1 to 2;"]}),"\n",(0,r.jsx)(n.li,{children:"Define new audio volume levels to be shown in Audio Volumes app (see Rally Copilot volume);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Car physics scripts:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Override ABS behavior;"}),"\n",(0,r.jsxs)(n.li,{children:["Values in ",(0,r.jsx)(n.code,{children:"ac.accessCarPhysics()"})," are no longer zero at the start of the script;"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ac.setExtraMass()"})," no longer messes up car resets or pushes player car when AIs teleport;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["New Modes:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Few fixes for general look and feel;"}),"\n",(0,r.jsx)(n.li,{children:"Extended physics is now available;"}),"\n",(0,r.jsx)(n.li,{children:"Option to fallback to pit positions if start positions are missing;"}),"\n",(0,r.jsx)(n.li,{children:"Specify Lua apps to open automatically if not (won\u2019t be saved as opened at the end of the session);"}),"\n",(0,r.jsx)(n.li,{children:"Reload on restart now happens after the user car has been teleported;"}),"\n",(0,r.jsx)(n.li,{children:"Finish fade time is customizable;"}),"\n",(0,r.jsx)(n.li,{children:"Mouse shouldn\u2019t get stuck on session results anymore (might also apply to other AC modes such as drift or time attack);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Lua apps:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.setWindowIcon()"})," (if icon updates rarely, works much better than a live icon);"]}),"\n",(0,r.jsx)(n.li,{children:"Ability to run a bit of code in semi-background (used by updated Setup Exchange app to show number of available setups on its icon);"}),"\n",(0,r.jsx)(n.li,{children:"Windows can be registered as Object Inspector tools instead;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["WeatherFX:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ac.setExtraAmbientDistance()"})," function for WeatherFX styles;"]}),"\n",(0,r.jsx)(n.li,{children:"Graphics Adjustments FFX CAS should pass HDR values above 1 through (without applying sharpening to them), for targeting HDR displays;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Car instrument scripts can override letter used for current gear, allowing to create proper automatic gearboxes;"}),"\n",(0,r.jsxs)(n.li,{children:["Online scripts can use ",(0,r.jsx)(n.code,{children:"ac.storageSetPath()"})," to share settings between different servers."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var s=i(6540);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);