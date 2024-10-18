"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[5384],{6798:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=n(4848),o=n(8453);const t={title:"v0.2.1-preview2"},r=void 0,l={id:"Changelogs/0-2-1p2",title:"v0.2.1-preview2",description:"*   Version ID: 2654",source:"@site/docs/Changelogs/0-2-1p2.md",sourceDirName:"Changelogs",slug:"/Changelogs/0-2-1p2",permalink:"/Changelogs/0-2-1p2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"v0.2.1-preview2"},sidebar:"versionSidebar",previous:{title:"v0.2.1",permalink:"/Changelogs/0-2-1"},next:{title:"v0.2.0",permalink:"/Changelogs/0-2-0"}},a={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Configs",id:"configs",level:2},{value:"Lua &amp; Python",id:"lua--python",level:2}];function d(e){const i={code:"code",h2:"h2",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Version ID: 2654"}),"\n",(0,s.jsx)(i.li,{children:"Tags: untested"}),"\n",(0,s.jsx)(i.li,{children:"Size: ??.?? MB"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Physics: wheel speed over curbs fixed, additional options for cosmic suspension (already in docs);"}),"\n",(0,s.jsx)(i.li,{children:"Rain: puddle-induced deceleration is more accurate;"}),"\n",(0,s.jsx)(i.li,{children:"WindscreenFX: new optional reflections;"}),"\n",(0,s.jsx)(i.li,{children:"New AgX tonemapping function;"}),"\n",(0,s.jsx)(i.li,{children:"Door audio event is working now (also, door opens immediately at the start of the session);"}),"\n",(0,s.jsx)(i.li,{children:"Monitor mirrors got a new brightness setting;"}),"\n",(0,s.jsx)(i.li,{children:"Few settings in general section hidden to make things a bit cleaner, Yebisest settings moved to WeatherFX module;"}),"\n",(0,s.jsx)(i.li,{children:"Seasons setting moved to track adjustments, now by default applies seasons if date is set;"}),"\n",(0,s.jsx)(i.li,{children:"New physics experiment: update car state before computing ODE for more precise simulation state;"}),"\n",(0,s.jsx)(i.li,{children:"Alternative post-processing updated: reworked film grain, updated glare;"}),"\n",(0,s.jsx)(i.li,{children:"Custom FFB lock got a new option to shift lock area outside for cars with steering lock below controllers\u2019s steering lock;"}),"\n",(0,s.jsx)(i.li,{children:"Option to scale LOD distances for new trees (also, LOD distances increase with zoom);"}),"\n",(0,s.jsx)(i.li,{children:"Save a setup as \u201cext_default.ini\u201d and it\u2019ll be loaded automatically;"}),"\n",(0,s.jsx)(i.li,{children:"Graphics Adjustments: option to force enable FXAA, should help setting things up;"}),"\n",(0,s.jsx)(i.li,{children:"Option for New Behaviour module removing that 200 km/h lookahead limit (experimental and disabled by default);"}),"\n",(0,s.jsx)(i.li,{children:"Newly opened IMGUI windows get focus and move on top of others;"}),"\n",(0,s.jsx)(i.li,{children:"New autopilot no longer changes turbo and some other settings when being activated (optional, enabled by default);"}),"\n",(0,s.jsx)(i.li,{children:"AI on drag tracks creates a new trajectory if started too far from main one;"}),"\n",(0,s.jsx)(i.li,{children:"Small Tweaks: option to unhide steering wheel for cars with some important bits on them;"}),"\n",(0,s.jsx)(i.li,{children:"Scriptable PP-filters can be deactivated based on current game state (like being applied only in replays);"}),"\n",(0,s.jsx)(i.li,{children:"Showroom mode: engine is off by default, icons fixed, orbit camera is better enforced, press Space to toggle doors, option to enable audio;"}),"\n",(0,s.jsx)(i.li,{children:"NeckFX: default settings for Lua script updated;"}),"\n",(0,s.jsx)(i.li,{children:"GamepadFX Gyrosteer script: sensitivity slider;"}),"\n",(0,s.jsx)(i.li,{children:"High beams flashing (hold button instead of pressing) now works with high beams enabled, or with headlight disabled;"}),"\n",(0,s.jsx)(i.li,{children:"Audio delay option updated, now affects more things, including collisions, track type and car position;"}),"\n",(0,s.jsx)(i.li,{children:"Option to use track occluding walls for audio occlusion;"}),"\n",(0,s.jsx)(i.li,{children:"Car LODs logic changed, now distance has a bit of a margin to prevent overly frequent changes;"}),"\n",(0,s.jsx)(i.li,{children:"Few updates for default WeatherFX style improving performance and visuals;"}),"\n",(0,s.jsx)(i.li,{children:"New photo app scene tweak switching high beams."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Boom sound at the session start is gone;"}),"\n",(0,s.jsx)(i.li,{children:"Refracting headlights in VR compatible with SPS;"}),"\n",(0,s.jsx)(i.li,{children:"NeckFX helmet works with VR and triple screen mode;"}),"\n",(0,s.jsx)(i.li,{children:"Jittery NeckFX movement in replays with slow motion fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Wet track materials no longer flicker with a car driving by;"}),"\n",(0,s.jsx)(i.li,{children:"Dynamic shadows can handle accumulation screenshots;"}),"\n",(0,s.jsx)(i.li,{children:"New trees should look more reasonable wet;"}),"\n",(0,s.jsx)(i.li,{children:"Grass, especially wet, is less reflective;"}),"\n",(0,s.jsx)(i.li,{children:"Mouse cursor won\u2019t stuck in window resizing shape anymore;"}),"\n",(0,s.jsx)(i.li,{children:"Bonnet and bumper cameras always count as exterior for some CSP effects, such as RainFX look;"}),"\n",(0,s.jsx)(i.li,{children:"Smoke from sources other than wheels doesn\u2019t look overly dark anymore;"}),"\n",(0,s.jsx)(i.li,{children:"TyresFX reflection occlusion fixed, tyres no longer lose reflectivity with TyresFX module disabled;"}),"\n",(0,s.jsx)(i.li,{children:"Opened doors offset LOD distances forcing main LOD to stay active for longer;"}),"\n",(0,s.jsx)(i.li,{children:"Shadowed wheels and driver work better with LODs;"}),"\n",(0,s.jsx)(i.li,{children:"Accumulation DOF respects photo app slider again;"}),"\n",(0,s.jsx)(i.li,{children:"Car state extrapolation no longer goes beyond physics step, might help with jitter when physics engine is being overloaded;"}),"\n",(0,s.jsxs)(i.li,{children:["Screenshot scale is no longer applied with WeatherFX scripts adding extra effects unless they use ",(0,s.jsx)(i.code,{children:"ac.onResolutionChange()"}),";"]}),"\n",(0,s.jsx)(i.li,{children:"Render/screenshot scale settings is ignored with fullscreen video mode;"}),"\n",(0,s.jsx)(i.li,{children:"Missing distant cars cockpits fixed;"}),"\n",(0,s.jsx)(i.li,{children:"AIs won\u2019t go to pits when rain starts or ends if they don\u2019t need rain tyres;"}),"\n",(0,s.jsx)(i.li,{children:"AI won\u2019t set turbo above 100%;"}),"\n",(0,s.jsx)(i.li,{children:"Brake hint no longer resets for autopilot;"}),"\n",(0,s.jsx)(i.li,{children:"Autopilot no longer stops brake temperatures estimation;"}),"\n",(0,s.jsx)(i.li,{children:"Wind velocity is included in wind audio event;"}),"\n",(0,s.jsx)(i.li,{children:"Overheated tyres no longer produce smoke when on fire;"}),"\n",(0,s.jsx)(i.li,{children:"Windscreen raindrops movement updated to be more realistic, amount increased a bit;"}),"\n",(0,s.jsx)(i.li,{children:"More on-screen drops for intense rain;"}),"\n",(0,s.jsx)(i.li,{children:"Spectators hide in the rain;"}),"\n",(0,s.jsx)(i.li,{children:"Air pressure in replays fixed (that bug was affecting things like audio delay);"}),"\n",(0,s.jsx)(i.li,{children:"Rotating car objects stop rotating when RPM is too low;"}),"\n",(0,s.jsx)(i.li,{children:"Issue with WeatherFX custom post-processing not working without FXAA enabled fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Default WeatherFX style got a bit darker for disabled post-processing;"}),"\n",(0,s.jsx)(i.li,{children:"Photo mode app: layout with disabled post-processing fixed;"}),"\n",(0,s.jsx)(i.li,{children:"LEDs (and other wrongly disabled nodes) on some cars fixed;"}),"\n",(0,s.jsx)(i.li,{children:"AC and Python forms can\u2019t be moved outside of screen;"}),"\n",(0,s.jsx)(i.li,{children:"Smart mirror: monitor mirrors are not affected by viewer position, more compatible with WeatherFX styles shading;"}),"\n",(0,s.jsx)(i.li,{children:"AIs should be able to load extended items from \u201cai_default.ini\u201d;"}),"\n",(0,s.jsx)(i.li,{children:"TyresFX: shadow bias and mode changed to reduce light leaking;"}),"\n",(0,s.jsx)(i.li,{children:"Track occluding walls fixed: faster updates, correctly shown points in the configuration tool;"}),"\n",(0,s.jsx)(i.li,{children:"Heat shimmer no longer outruns braking cars;"}),"\n",(0,s.jsx)(i.li,{children:"Shifting animation no longer plays with starting camera (when there is no driver visible);"}),"\n",(0,s.jsx)(i.li,{children:"Font rendering got some tweaks to speed things up and get emojis to work properly;"}),"\n",(0,s.jsx)(i.li,{children:"NeckFX script deactivates itself on first launch if any adjustments to settings of the previous NeckFX movement are detected (assuming user configured NeckFX to their liking already and don\u2019t need a change like that);"}),"\n",(0,s.jsx)(i.li,{children:"Xbox One triggers shouldn\u2019t vibrate when AC is paused;"}),"\n",(0,s.jsx)(i.li,{children:"Specialized fix for gear indicator of \u201crss_gtn_darche_96\u201d;"}),"\n",(0,s.jsx)(i.li,{children:"Headlights for cars older than 1980 are more narrow and dimmer;"}),"\n",(0,s.jsx)(i.li,{children:"Rare GPU crash on reloading fixed;"}),"\n",(0,s.jsx)(i.li,{children:"A bunch of deinitialization crashes occurring on exit fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Few smaller fixes and optimizations."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"configs",children:"Configs"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"TYPE_HINT=TREADED/VINTAGE_PERFORMANCE/SLICK/SEMISLICK"})," parameter for car tyres to help custom physics to find optimal rain parameters;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"[EXTRA_RULES] MAX_METERS_WRONG_WAY"})," parameter for server configs (default value is 100 m);"]}),"\n",(0,s.jsx)(i.li,{children:"Physics-affecting values of RainFX track configs can be read from \u201csurfaces.ini\u201d, track config or configs included with CSP, to make online racing more fair;"}),"\n",(0,s.jsxs)(i.li,{children:["Shader ",(0,s.jsx)(i.code,{children:"nePerPixelMultiMap_AT_NMDetail_stickers"})," got an optional ",(0,s.jsx)(i.code,{children:"txStickersNormals"})," texture;"]}),"\n",(0,s.jsxs)(i.li,{children:["Fixes for ",(0,s.jsx)(i.code,{children:"ksMultilayer_fresnel_nm4"}),", shader ",(0,s.jsx)(i.code,{children:"ksPerPixel_nosdw"})," is supported now as well;"]}),"\n",(0,s.jsxs)(i.li,{children:["Normal map of ",(0,s.jsx)(i.code,{children:"ksMultilayer_fresnel_nm"})," also uses tiling fix;"]}),"\n",(0,s.jsx)(i.li,{children:"Config \u201cproview_nodes.ini\u201d can be replaced with data_override, with partially functioning live reloads;"}),"\n",(0,s.jsx)(i.li,{children:"JSON parser now can handle trailing commas;"}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"[EXTRA_TWEAKS] MIN_TIME_BETWEEN_COLLISIONS = 5 ; seconds"})," parameter for clients to report collisions sooner and more often;"]}),"\n",(0,s.jsx)(i.li,{children:"Wobbly effects (such as wobbly bits) are compatible with car paint shader now;"}),"\n",(0,s.jsx)(i.li,{children:"Module \u201clighting_fx\u201d can be added to required modules online;"}),"\n",(0,s.jsx)(i.li,{children:"A tool for inspecting new trees added to Object Inspector tools;"}),"\n",(0,s.jsx)(i.li,{children:"Clip planes of bounced light malfunctioning with too many clip points fixed;"}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"NormalsFactor"})," for ",(0,s.jsx)(i.code,{children:"[Material_RoomWindows]"})," fixed"]}),"\n",(0,s.jsx)(i.li,{children:"Custom physics car setup items: click mode parameter is supported now;"}),"\n",(0,s.jsx)(i.li,{children:"Car configs can add checks for audio tweaks (so only certain soundbanks would be affected) and add custom DSP to different audio events;"}),"\n",(0,s.jsx)(i.li,{children:"Trees: LOD padding fixed, surface synchronization no longer uses GrassFX surfaces as fallback, option to offset models vertically so that surface synchronization could still be used."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"lua--python",children:"Lua & Python"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Lua scripts get correct track ID even if track ID set in \u201crace.ini\u201d doesn\u2019t match the online one;"}),"\n",(0,s.jsx)(i.li,{children:"Lua apps can disable emoji for dwrite text, also those are no longer colored;"}),"\n",(0,s.jsxs)(i.li,{children:["New functions ",(0,s.jsx)(i.code,{children:"ac.getJoystickInstanceGUID()"}),", ",(0,s.jsx)(i.code,{children:"ac.getJoystickIndexByInstanceGUID()"}),", ",(0,s.jsx)(i.code,{children:"ac.getJoystickProductGUID()"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"[_EXTENSION] DISABLE_SMOOTH_COLLISIONS=1"})," parameter for tracks with extended physics disabling smooth collisions (just in case);"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"SHOW_E_MESSAGE"})," parameter for walking-out module disabling HUD message;"]}),"\n",(0,s.jsx)(i.li,{children:"AIs no longer switch high beams off if they were changed by a Lua script;"}),"\n",(0,s.jsxs)(i.li,{children:["Helper ",(0,s.jsx)(i.code,{children:"ac.ControlButton()"})," is available to all scripts, now with events model to stop wasting time checking things each frame;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ui.beginPremultipliedAlphaTexture()"}),"/",(0,s.jsx)(i.code,{children:"ui.endPremultipliedAlphaTexture()"})," functions and ",(0,s.jsx)(i.code,{children:"ui.WindowFlags.BitmapCache"})," flag;"]}),"\n",(0,s.jsx)(i.li,{children:"Issue with transformations applied to child windows without explicit activation fixed;"}),"\n",(0,s.jsxs)(i.li,{children:["Better handling of parsing errors in inline scripts (such as ",(0,s.jsx)(i.code,{children:"SCRIPT='actual script'"})," in extended configs);"]}),"\n",(0,s.jsxs)(i.li,{children:["New method ",(0,s.jsx)(i.code,{children:"ac.SceneReference:dumpShaderReplacements()"}),", might help with skins;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ac.setClutchMaxTorque()"})," for custom physics scripts;"]}),"\n",(0,s.jsxs)(i.li,{children:["Function ",(0,s.jsx)(i.code,{children:"physics.resetTrackPhysicsObject()"})," can take a filter now too;"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"io.saveAsync()"})," fixed, consecutive calls should run faster with memory reuse;"]}),"\n",(0,s.jsx)(i.li,{children:"Sanity checks for arguments in physics and custom physics script APIs;"}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"setInterval()"})," no longer freaks out with ",(0,s.jsx)(i.code,{children:"clearInterval()"})," call from its callback, callbacks set for the same time called in order they were set;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ac.signBlob()"})," function for online scripts so that they could send verified requests online;"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ac.getAudioVolume()"})," not working with car-related audio fixed;"]}),"\n",(0,s.jsx)(i.li,{children:"Lua apps can load and save setups without using files, also can change name and track for currently loaded setup;"}),"\n",(0,s.jsx)(i.li,{children:"A bunch of new functions for controlling AI from car physics script;"}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"physics.blockTeleportingToPits()"}),", might be useful for certain online scripts;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ac.clearDebug()"})," option clearing old ",(0,s.jsx)(i.code,{children:"ac.debug()"})," entries;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ac.getSim().sentAdminCommand"})," and ",(0,s.jsx)(i.code,{children:"ac.getCar().useInternalAudio"})," fields;"]}),"\n",(0,s.jsx)(i.li,{children:"Lua scene API: animations can be loaded with relative names as well;"}),"\n",(0,s.jsx)(i.li,{children:"Geometry shots with YEBIS (including OBS ones) are compatible with triple screen mode, an issue with custom tonemapping fixed as well, shows smoke particles properly even if they aren\u2019t visible in main view;"}),"\n",(0,s.jsx)(i.li,{children:"Media players can be redirected to FMOD (disabled for now, needs more testing to make sure it wouldn\u2019t break existing code);"}),"\n",(0,s.jsx)(i.li,{children:"Cars with physics scripts are turned off until script is loaded and ready to run;"}),"\n",(0,s.jsx)(i.li,{children:"WeatherFX depth view should be more compatible with trees, getting rid of that outline;"}),"\n",(0,s.jsx)(i.li,{children:"Python handbrake function fixed."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var s=n(6540);const o={},t=s.createContext(o);function r(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);