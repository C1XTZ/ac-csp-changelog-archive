"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[3107],{8753:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"changelogs/0-1-78","title":"v0.1.78","description":"*   Version ID: 2051","source":"@site/docs/changelogs/0-1-78.md","sourceDirName":"changelogs","slug":"/changelogs/0-1-78","permalink":"/ac-csp-changelog-archive/changelogs/0-1-78","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"v0.1.78"},"sidebar":"versionSidebar","previous":{"title":"v0.1.79","permalink":"/ac-csp-changelog-archive/changelogs/0-1-79"},"next":{"title":"v0.1.77","permalink":"/ac-csp-changelog-archive/changelogs/0-1-77"}}');var r=i(4848),t=i(8453);const l={title:"v0.1.78"},o="Changelog",a={},c=[{value:"New features, options and improvements",id:"new-features-options-and-improvements",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Configs",id:"configs",level:2},{value:"Lua",id:"lua",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Version ID: 2051"}),"\n",(0,r.jsx)(n.li,{children:"Size: 80.75 MB"}),"\n",(0,r.jsx)(n.li,{children:"Published: 2022-06-08"}),"\n"]}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"changelog",children:"Changelog"})}),"\n",(0,r.jsx)(n.h2,{id:"new-features-options-and-improvements",children:"New features, options and improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"VR update:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Single Pass Stereo, cutting number of draw calls by two;"}),"\n",(0,r.jsx)(n.li,{children:"Variable Rate Shading (aka foveated rendering) for NVIDIA 16\u2026-, 20\u2026- and 30\u2026-gen GPUs;"}),"\n",(0,r.jsx)(n.li,{children:"Optional single YEBIS pass;"}),"\n",(0,r.jsx)(n.li,{children:"Support for corner masking optimization (stops shading in areas covered by lens to speed things up);"}),"\n",(0,r.jsx)(n.li,{children:"ASW 2.0 support for Oculus;"}),"\n",(0,r.jsx)(n.li,{children:"Also, for Oculus: CSP now updates AC manifest, updates assets to show details about the race, closes AC if its VR element is closed;"}),"\n",(0,r.jsxs)(n.li,{children:["Better OpenComposite (previously known as OpenOVR) support, for both OpenCompositeACC and regular OpenComposite version (fixing crash with ",(0,r.jsx)(n.code,{children:"ipdOffset"}),");"]}),"\n",(0,r.jsx)(n.li,{children:"Crashes in VR now shut down AC first and show errors in a separate process, to make sure VR environment would switch back to desktop;"}),"\n",(0,r.jsx)(n.li,{children:"X-ray rendering for HUD to stop things looking weird if there is some geometry in front of HUD;"}),"\n",(0,r.jsx)(n.li,{children:"Controllers integration: interact with HUD, adjust rear view mirrors, use touchscreens, press car buttons and more (if car has those set);"}),"\n",(0,r.jsx)(n.li,{children:"Experimental option to get driver hands to follow VR controllers;"}),"\n",(0,r.jsx)(n.li,{children:"Optional extra dithering, might help with overly compressed image with Oculus Air Link;"}),"\n",(0,r.jsx)(n.li,{children:"FPS counter for custom VR mirroring;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Custom GamepadFX script updated:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Improved implementation;"}),"\n",(0,r.jsx)(n.li,{children:"Separate drifting and racing modes which can be switched while driving;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"WeatherFX:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Various improvements for cloud covers;"}),"\n",(0,r.jsx)(n.li,{children:"Accurate moon eclipses (need to be enabled by WeatherFX scripts to ensure compatibility);"}),"\n",(0,r.jsx)(n.li,{children:"New API for implementation scripts to create custom effects;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Default WeatherFX script:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Distant thunder effects;"}),"\n",(0,r.jsx)(n.li,{children:"Rain haze;"}),"\n",(0,r.jsx)(n.li,{children:"Rain audio;"}),"\n",(0,r.jsx)(n.li,{children:"Auroras (try February of 2022 on a track further than 60\xb0 of latitude, such as Ahvenisto Race Circuit);"}),"\n",(0,r.jsx)(n.li,{children:"Fixes for fog, fog covering tops of tall buildings;"}),"\n",(0,r.jsx)(n.li,{children:"Size of planets, sun and the moon fixed;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Extra server options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"An experimental option to pause collisions for a bit if remote car would suddenly jump;"}),"\n",(0,r.jsx)(n.li,{children:"Explicitly defined timezone and coordinates to ensure lighting would match with custom tracks with no such properties defined;"}),"\n",(0,r.jsx)(n.li,{children:"Syncing of wheel angles now includes caster;"}),"\n",(0,r.jsx)(n.li,{children:"Custom cars motion fixed, now shouldn\u2019t cause issues with remote cars acting slightly differently when colliding;"}),"\n",(0,r.jsxs)(n.li,{children:["An extra option for custom cars motion: smooth motion for slower cars helping with cars shaking on larger tracks (can be activated with ",(0,r.jsx)(n.code,{children:"CUSTOM_MOTION = 1, SMOOTH"}),");"]}),"\n",(0,r.jsx)(n.li,{children:"Options to reset car if it got stuck in a collision or falling through ground, with optional penalty;"}),"\n",(0,r.jsx)(n.li,{children:"New core options: force custom cars physics, force custom track physics, hide pit crews to speed up loading (support in CM is coming soon);"}),"\n",(0,r.jsx)(n.li,{children:"Commands to show a message and override ban message, available as new direct TCP commands or compatible chat commands;"}),"\n",(0,r.jsxs)(n.li,{children:["Issue with some of ",(0,r.jsx)(n.code,{children:"EXTRA_RULES"})," values allowing to access setup menu without going to pits fixed (set new CSP build ID as a minimum required version);"]}),"\n",(0,r.jsx)(n.li,{children:"New rule requiring to finish the lap before going through pit penalty (so people couldn\u2019t reverse back through pits instead);"}),"\n",(0,r.jsx)(n.li,{children:"Set some CSP modules to be required for a server;"}),"\n",(0,r.jsx)(n.li,{children:"If server requires any CSP module using that option, or requires WeatherFX or RainFX using older methods, live settings reload will be disabled;"}),"\n",(0,r.jsx)(n.li,{children:"Option to hide default map app;"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Features for custom server implementations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Custom packet format: support for types less than a byte (",(0,r.jsx)(n.code,{children:"CUSTOM_UPDATE_V2"}),");"]}),"\n",(0,r.jsxs)(n.li,{children:["Batch update fix fixed (new ID is ",(0,r.jsx)(n.code,{children:"BATCH_FIX_V2"}),");"]}),"\n",(0,r.jsxs)(n.li,{children:["Servers changing tracks often can specify ",(0,r.jsx)(n.code,{children:"FREQUENT_TRACK_CHANGES"})," feature which will force CSP to update track ID to actual one before connecting;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Python:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Better errors handling;"}),"\n",(0,r.jsx)(n.li,{children:"Optional caching to speed up loading;"}),"\n",(0,r.jsxs)(n.li,{children:["A compatibility fix: can help if installing an older app breaks a newer app (forces apps to use newest ",(0,r.jsx)(n.code,{children:"sim_info"})," library);"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"New built-in apps (written in Lua):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Controller tweaks: adjust FFB, gamepad or keyboard control options during the race with changes applying live;"}),"\n",(0,r.jsx)(n.li,{children:"Mirrors configurator: adjust Real Mirrors with convenient sliders;"}),"\n",(0,r.jsx)(n.li,{children:"Setup Exchange: publish car setups, load and apply setups made by other people in pits (pits integration is disabled by default, can be enabled in app settings);"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Remote cars no longer have their steering wheel angle limited by 127\xb0;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"CSP soundbank with sounds for wipers is included now;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Water shader: few fixes, new depth-aware mode for smooth blending, caustics (for both refraction and reflection);"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"New water drain shader for water in water drains filling with rain;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"New rainbow stickers material for cars;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"New ChromaFlair car paint;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["UV2 support for car paints and ",(0,r.jsx)(n.code,{children:"nePerPixelMultiMap_AT_NMDetail_stickers"})," shader, for an extra layer with stickers and similar things;"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Showroom mode: loads showrooms from ",(0,r.jsx)(n.code,{children:"content/showroom"})," with some AC features disabled for faster loading;"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Some misconfigured car soundbanks now get fixed before loading (thanks to Chr0m3 for the solution);"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"ProTyres and Camber Extravaganza apps now function correctly with virtual tyres (such as automatically generated rain tyres);"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Blown tyres now make a different sound;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Few further optimizations for loading speed;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"AC apps now can be dragged all the way to the top of the screen;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"GUI controller integration: bind specific keys if necessary (for example, in case you don\u2019t have D-Pads)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Updated default GrassFX texture, few small improvements for its shading;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Engine explosions now produce more smoke;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Android Auto recreation: radio app now allows to add more stations in-game;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"New Planetarium filter (also, cartoon filter updated);"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DDS textures now can have LZ4 compression applied to them to reduce file sizes;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A new experimental feature for creating custom external AI implementations;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"New experimental chunks optimization mode increasing FPS on large tracks;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Basic chunks optimization now uses adaptive chunk size, increasing performance for tracks with smaller objects grouped in a separate KN5s;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Optional clearing of system shaders cache when CSP version changes (enabled by default, solves issue with loading getting stuck with some hardware);"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Option to stop AC from creating setup folders for every installed track (also saves time during loading);"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Option to pause rendering if AC is in background;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Option to use memory mapping for loading textures and VAO patches (might increase loading speed);"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Option to use Time-To-Speech for chat messages online."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Issue with new procedural wipers getting deformed, especially in VR, should be fixed now;"}),"\n",(0,r.jsx)(n.li,{children:"Some replays failing to load fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Mouse steering fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Wind not affecting trees fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Mumble link is more reliable;"}),"\n",(0,r.jsx)(n.li,{children:"VAO: first version of extra samples now loads correctly;"}),"\n",(0,r.jsx)(n.li,{children:"Smoke from brakes online fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Skidmarks now get cleared during loading to avoid having too many layers in a single area, to improve performance;"}),"\n",(0,r.jsx)(n.li,{children:"Audio pauses when making a screenshot in replays;"}),"\n",(0,r.jsx)(n.li,{children:"Shadow biases fixed, now taking into account shadow resolution;"}),"\n",(0,r.jsx)(n.li,{children:"New DDS loader now ignores textures without MIPs;"}),"\n",(0,r.jsx)(n.li,{children:"Pixelated smoke fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Issue with new pause menu resulting in broken shading fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Fix for shading: certain materials that used to change in brightness based on distance to camera now should do it less;"}),"\n",(0,r.jsxs)(n.li,{children:["Godrays not working without ",(0,r.jsx)(n.code,{children:"ac.setGodraysCustomColor()"})," call fixed;"]}),"\n",(0,r.jsx)(n.li,{children:"Pause menu not opening correctly on first try fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Scriptable filters fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Hold mode for high/low beams button fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Shader for distant glow fixed, now works better with different fog configurations;"}),"\n",(0,r.jsx)(n.li,{children:"Compatibility with ReShade improved;"}),"\n",(0,r.jsx)(n.li,{children:"Hiding car labels on some online servers fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Issue with fonts rendering causing first draw call of a bit of text to fail fixed;"}),"\n",(0,r.jsx)(n.li,{children:"GUI controller integration not working with certain controller configurations fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Android Auto no longer takes screenshots when both pedals are pressed;"}),"\n",(0,r.jsx)(n.li,{children:"Flickering lighting on tyres for stationary cars fixed;"}),"\n",(0,r.jsx)(n.li,{children:"AC is considered to be in foreground if VR is active (if not in foreground, certain things like reacting to keyboard presses pause);"}),"\n",(0,r.jsx)(n.li,{children:"Wind acting on water fixed (now water follows wind direction);"}),"\n",(0,r.jsx)(n.li,{children:"FOV for Real Mirrors changes with distance in VR as well;"}),"\n",(0,r.jsx)(n.li,{children:"Driver tags shown for disconnected cars with triple screen fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Default water normals texture is no longer so overly compressed;"}),"\n",(0,r.jsx)(n.li,{children:"Overly blurry FSR with VR fixed (although it\u2019s not compatible with SPS at the moment or VRS at all);"}),"\n",(0,r.jsx)(n.li,{children:"New pause: camera no longer shifts in VR, that looked weird;"}),"\n",(0,r.jsx)(n.li,{children:"Walking-out-thing no longer breaks with AI flood active;"}),"\n",(0,r.jsx)(n.li,{children:"TAA flickering on sky/track boundary fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Flammable objects (such as hay) now work even if they are perfectly aligned with axis;"}),"\n",(0,r.jsx)(n.li,{children:"Exterior wiper traces now showing on some systems fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Options to show icon for active manual pits speed limiter and disabled automatic pits speed limiter;"}),"\n",(0,r.jsx)(n.li,{children:"Manual pits speed limiter resets with session change or restart;"}),"\n",(0,r.jsx)(n.li,{children:"Refracting headlights: emissive part absorbed by glass is colored accordingly now;"}),"\n",(0,r.jsx)(n.li,{children:"Sparks flying from contacts with roads don\u2019t fly up as much if car is not moving fast enough or if car is not the right type (can be customized in car config);"}),"\n",(0,r.jsx)(n.li,{children:"Skidmarks and grass disappearing on some tracks with certain view angles fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Skidmarks not rendering correctly in triple mode with separate FSR multiplier for sides fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Refracting headlights no longer break if transparency flag for surface meshes is set;"}),"\n",(0,r.jsx)(n.li,{children:"A couple of issues related to tyre tester app are fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Stars map fixed (rolled back to previous correct version);"}),"\n",(0,r.jsx)(n.li,{children:"Scriptable filters no longer break with TAA;"}),"\n",(0,r.jsx)(n.li,{children:"Audio switching between interior and exterior of fast moving cars with F5 camera fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Loading of some unusually saved replays fixed;"}),"\n",(0,r.jsx)(n.li,{children:"Smaller fixes and stability improvements."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configs",children:"Configs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New things for dynamic objects on tracks with custom track physics:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adjust mass;"}),"\n",(0,r.jsx)(n.li,{children:"Alter collision properties;"}),"\n",(0,r.jsx)(n.li,{children:"Enable self-collision (use with caution);"}),"\n",(0,r.jsx)(n.li,{children:"Replace mesh colliders with geometry colliders;"}),"\n",(0,r.jsx)(n.li,{children:"Move center-of-gravity;"}),"\n",(0,r.jsx)(n.li,{children:"Automatically detect boxes and replace their colliders with fitting box colliders, also fixing center-of-gravity;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Live reload for track cameras;"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"[BASIC] NEEDS_LIGHTS_FIX = 1"})," parameter for cars which have their lighting configured for older broken version of CSP and now having lights that are too bright;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"[BASIC] SPECTATOR_COCKPIT_HR_DISTANCE = N"})," parameter to increase high-res cockpit distance for spectators, free and track cameras (somewhat fixes dark interior of BMW E30 DTM);"]}),"\n",(0,r.jsxs)(n.li,{children:["New option for trees: use ",(0,r.jsx)(n.code,{children:"MATERIAL_FLAG_0 = 1"})," with ",(0,r.jsx)(n.code,{children:"[SHADER_REPLACEMENT_...]"})," to fade away triangles facing along view direction;"]}),"\n",(0,r.jsx)(n.li,{children:"Android Auto recreation: better support for smaller displays, offset no longer breaks clicking;"}),"\n",(0,r.jsx)(n.li,{children:"Fix for partial reload: now material adjustments, lights and such reload when track conditions are edited;"}),"\n",(0,r.jsx)(n.li,{children:"Car configs now can override tyre and rim width and offset, to get skidmarks and particles to fit properly on some unusual tyres;"}),"\n",(0,r.jsx)(n.li,{children:"Car paints: flag to force sharp reflections on clear coat;"}),"\n",(0,r.jsx)(n.li,{children:"Custom cars physics: get tyres to blow up with suspension damage;"}),"\n",(0,r.jsx)(n.li,{children:"Custom track physics: slightly randomize spawning positions;"}),"\n",(0,r.jsx)(n.li,{children:"Material for distant geometry fixed, now it no longer needs options and, with some caveats, doesn\u2019t have any distance limitations;"}),"\n",(0,r.jsx)(n.li,{children:"Subdivide track meshes (helpful for distant geometry fix applying to a giant plane for the ground, like on Shuto);"}),"\n",(0,r.jsxs)(n.li,{children:["New simple ",(0,r.jsx)(n.code,{children:"ksPerPixelAT_NM_emissive"})," shader for some basic track objects with alpha in ",(0,r.jsx)(n.code,{children:"txDiffuse"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"VRS_FIX"})," option for shader replacements which should help with some materials getting too dark nearby (and looking horribly with VRS);"]}),"\n",(0,r.jsx)(n.li,{children:"Accurate PBR materials for tracks with optional displacement (currently in experimental stage)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"lua",children:"Lua"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Custom car physics script:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Access car state (",(0,r.jsx)(n.code,{children:"ac.StateCar"})," as ",(0,r.jsx)(n.code,{children:"car"}),", it doesn\u2019t update at physics rate, but for some things it should work all right);"]}),"\n",(0,r.jsx)(n.li,{children:"Change CD_GAIN and CL_GAIN for wings;"}),"\n",(0,r.jsx)(n.li,{children:"Access and alter body damage and tyres inflation (set to 0 to blow them);"}),"\n",(0,r.jsx)(n.li,{children:"Access more of wheels state;"}),"\n",(0,r.jsx)(n.li,{children:"Move box colliders;"}),"\n",(0,r.jsxs)(n.li,{children:["File ",(0,r.jsx)(n.code,{children:"script.lua"})," would be loaded only if ",(0,r.jsx)(n.code,{children:"data.acd"})," is not present, otherwise CSP will search for a file in ",(0,r.jsx)(n.code,{children:"data.acd"}),";"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Improved handling of custom shaders:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Warnings get printed in log;"}),"\n",(0,r.jsx)(n.li,{children:"Now it\u2019s possible to load shaders from files and use includes;"}),"\n",(0,r.jsx)(n.li,{children:"Line numbers in reported messages match;"}),"\n",(0,r.jsx)(n.li,{children:"Load 3D textures, cubemaps and texture arrays from DDS files;"}),"\n",(0,r.jsx)(n.li,{children:"Bind textures with number of channels other than 4;"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Library definitions updated to better support updated Lua extension by sumneko;"}),"\n",(0,r.jsx)(n.li,{children:"Lua interpreter updated to include the latest improvements added by Mike Pall;"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"ui.GIFPlayer()"})," helper allowing to use animated GIFs in UI and as textures;"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"os.addDLLDirectory()"})," function to simplify loading extra DLLs for things like socket library (also, ",(0,r.jsx)(n.code,{children:"package.add()"})," now adds ",(0,r.jsx)(n.code,{children:"cpath"})," as well);"]}),"\n",(0,r.jsx)(n.li,{children:"Socket library is included by default now;"}),"\n",(0,r.jsx)(n.li,{children:"Lua apps now can create new UI elements for car setup, save and load setups, access setup items and change them;"}),"\n",(0,r.jsx)(n.li,{children:"When creating extra canvases, it\u2019s now possible to specify format, including HDR formats;"}),"\n",(0,r.jsxs)(n.li,{children:["Textures are now reference counted and unload automatically (you\u2019d still need to use ",(0,r.jsx)(n.code,{children:"ui.unloadTexture()"})," to unload textures used in UI);"]}),"\n",(0,r.jsx)(n.li,{children:"Functions to render quads and quads with custom shader, function for optimized fullscreen pass for extra canvases;"}),"\n",(0,r.jsxs)(n.li,{children:["Sim value ",(0,r.jsx)(n.code,{children:"currentServerTime"})," stays synced with session change;"]}),"\n",(0,r.jsx)(n.li,{children:"Access lap splits in sim state;"}),"\n",(0,r.jsx)(n.li,{children:"WeatherFX: skip first MIPs when loading a texture, access scene API;"}),"\n",(0,r.jsx)(n.li,{children:"INI parser fixed (previously, it could occasionally fail);"}),"\n",(0,r.jsx)(n.li,{children:"Car scripts now can switch to neutral gear (could be bound to a mesh button);"}),"\n",(0,r.jsx)(n.li,{children:"Car mesh buttons now can be set with local mesh coordinates for moving geometry (like steering wheel buttons);"}),"\n",(0,r.jsx)(n.li,{children:"Textureless car scripts now can use mesh buttons too;"}),"\n",(0,r.jsx)(n.li,{children:"Force-apply driver animation: allows to add and blend custom rig movements on top of existing animation;"}),"\n",(0,r.jsxs)(n.li,{children:["See the state of extra canvases with Lua Debug App by assigning them a name with ",(0,r.jsx)(n.code,{children:":setName()"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"GamepadFX: access to gamepad settings and more details about car state;"}),"\n",(0,r.jsx)(n.li,{children:"Get state of VR controllers, use it to create interactive objects, set controllers vibration or recenter VR headset;"}),"\n",(0,r.jsxs)(n.li,{children:["Instead of ",(0,r.jsx)(n.code,{children:"web.loadRemoteModel()"})," and ",(0,r.jsx)(n.code,{children:"web.loadRemoteAnimation()"}),", there is a new ",(0,r.jsx)(n.code,{children:"web.loadRemoteAssets()"})," function which can be used for both and more;"]}),"\n",(0,r.jsx)(n.li,{children:"New functions to get details about drivers: names, teams, nationalities, numbers (uses explicitly set values or, if not set, skin JSONs);"}),"\n",(0,r.jsxs)(n.li,{children:["Any Lua script now runs only after full sim initialization, thus ensuring state of ",(0,r.jsx)(n.code,{children:"ac.getSim()"})," would be valid;"]}),"\n",(0,r.jsx)(n.li,{children:"Access shared memory files;"}),"\n",(0,r.jsx)(n.li,{children:"Physics API: override or offset user steering, access original steering value;"}),"\n",(0,r.jsx)(n.li,{children:"New physics rigidbodies now can be kinetic (have velocity and impact scene, but not get impacted back) and use geometric colliders instead of mesh one;"}),"\n",(0,r.jsx)(n.li,{children:"Tracks can allow for scripts to manipulate extra rigidbodies without accessing the rest of physics API, allowing to create dynamic and new kinetic rigidbodies;"}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"physics.setRestrictor()"})," and ",(0,r.jsx)(n.code,{children:"physics.setBallast()"})," functions for scripts that can alter physics state;"]}),"\n",(0,r.jsx)(n.li,{children:"Scene API: new functions for basic set operations on scene references, async loading for new models;"}),"\n",(0,r.jsx)(n.li,{children:"Text inputs are no longer limited by 256 symbols;"}),"\n",(0,r.jsx)(n.li,{children:"Web requests no longer throw errors if URL is malformed, instead they return errors via callbacks;"}),"\n",(0,r.jsxs)(n.li,{children:["New parameter for web requests to load headers only, without the payload (not all servers respect ",(0,r.jsx)(n.code,{children:"HEAD"})," method);"]}),"\n",(0,r.jsx)(n.li,{children:"Car state: pit speed limiter works correctly (aware of session-specified maximum speed, takes into account manually operating limiter);"}),"\n",(0,r.jsx)(n.li,{children:"New functions: check if Lua app window is pinned or make a screenshot;"}),"\n",(0,r.jsxs)(n.li,{children:["Check time gap between cars with ",(0,r.jsx)(n.code,{children:"ac.getGapBetweenCars()"}),";"]}),"\n",(0,r.jsx)(n.li,{children:"New functions allowing to access extra options and teleport function on server that has it set;"}),"\n",(0,r.jsxs)(n.li,{children:["Base library: ",(0,r.jsx)(n.code,{children:"string.split"})," and ",(0,r.jsx)(n.code,{children:"string.trim"})," reworked and optimized, new string functions including functions adding regular expressions support;"]}),"\n",(0,r.jsxs)(n.li,{children:["Function ",(0,r.jsx)(n.code,{children:"ac.findCarAtPlace()"})," is fixed;"]}),"\n",(0,r.jsx)(n.li,{children:"A lot of other smaller fixes."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);