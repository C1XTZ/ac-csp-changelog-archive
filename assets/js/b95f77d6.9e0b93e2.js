"use strict";(self.webpackChunkgh_page=self.webpackChunkgh_page||[]).push([[7701],{8618:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=n(4848),r=n(8453);const t={title:"v0.1.80-preview428"},l=void 0,o={id:"changelogs/0-1-80p428",title:"v0.1.80-preview428",description:"*   Version ID: 2583",source:"@site/docs/changelogs/0-1-80p428.md",sourceDirName:"changelogs",slug:"/changelogs/0-1-80p428",permalink:"/ac-csp-changelog-archive/changelogs/0-1-80p428",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"v0.1.80-preview428"},sidebar:"versionSidebar",previous:{title:"v0.2.0",permalink:"/ac-csp-changelog-archive/changelogs/0-2-0"},next:{title:"v0.1.80-preview346",permalink:"/ac-csp-changelog-archive/changelogs/0-1-80p346"}},a={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Car &amp; track configs",id:"car--track-configs",level:2},{value:"Lua &amp; Python scripting",id:"lua--python-scripting",level:2}];function d(e){const i={code:"code",h2:"h2",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Version ID: 2583"}),"\n",(0,s.jsx)(i.li,{children:"Size: ??.?? MB"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"RainFX: handling of lightweight racing cars improved;"}),"\n",(0,s.jsx)(i.li,{children:"NeckFX: redefine behaviour with a Lua script, helmet rendering got a blur option (and also now works properly, and compatible with RainFX);"}),"\n",(0,s.jsx)(i.li,{children:"OBS integration: install an OBS plugin to access additional views, such as view without HUD, HUD only, extra cameras, separate AC apps, etc. (third-party Lua scripts can add their own OBS views too);"}),"\n",(0,s.jsx)(i.li,{children:"Default WeatherFX script: optional simplified and faster post-processing alternative to YEBIS (requires new CM to show those new script-specific settings);"}),"\n",(0,s.jsx)(i.li,{children:"New Unbound app (on App Shelf): access functions you might have forgotten to bound with a mouse, from pedals to working with brake balance or turn signals;"}),"\n",(0,s.jsx)(i.li,{children:"New WebBrowser app: browse web, pin webpages as new apps and more;"}),"\n",(0,s.jsx)(i.li,{children:"New Pocket Technician app: edit car setup outside of pits in offline practice sessions;"}),"\n",(0,s.jsx)(i.li,{children:"Emoji support for both regular and IMGUI text (15.0 version, Twemoji pack, works for driver names online as well), emoticon selector in chat is replaced with emoji selector (optional, enabled by default);"}),"\n",(0,s.jsx)(i.li,{children:"Few physics experiments moved to be always active in all modes, new experimental car extrapolation option added;"}),"\n",(0,s.jsx)(i.li,{children:"Support for gamma sliders for other wheel axis in controls settings (needs a CM update);"}),"\n",(0,s.jsx)(i.li,{children:"Yebisest: option to run post-processing in full resolution;"}),"\n",(0,s.jsx)(i.li,{children:"BrakeDiscFX glow uses physics temperature if available (which also will be stored in replays now), light intensity reduced to stop things looking that broken;"}),"\n",(0,s.jsx)(i.li,{children:"Option to render UI on top of other HUD elements (such as AC driver names or the proximity thing);"}),"\n",(0,s.jsx)(i.li,{children:"Hotkeys to alter FOV live;"}),"\n",(0,s.jsx)(i.li,{children:"Audio volume sliders for wipers and car Lua scripts;"}),"\n",(0,s.jsx)(i.li,{children:"Curved monitor filter now can adjust render scale;"}),"\n",(0,s.jsx)(i.li,{children:"New tonemapping function available in filter editor;"}),"\n",(0,s.jsx)(i.li,{children:"Option to use detailed shadows and high-quality shading in mirrors in lights settings (very expensive);"}),"\n",(0,s.jsx)(i.li,{children:"Option for free camera to automatically switch to single screen mode for triple screen rendering;"}),"\n",(0,s.jsx)(i.li,{children:"Option to use real-time car positions for AC leaderboards (such as the one shown with F9);"}),"\n",(0,s.jsx)(i.li,{children:"Loading progress is shown on Windows taskbar;"}),"\n",(0,s.jsx)(i.li,{children:"CSP Debug app now shows relative position of contact points in its physics tab;"}),"\n",(0,s.jsx)(i.li,{children:"Autopilot (Ctrl+C) can be turned off (apps would still think it\u2019s AI driving to avoid messing up stats), old behaviour can be reactivated in settings."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Ghost fixed, also got some shading improvements;"}),"\n",(0,s.jsx)(i.li,{children:"Various Cosmic suspension bug fixes;"}),"\n",(0,s.jsx)(i.li,{children:"Compatibility with Sandy Bridge Intel CPUs (and other CPUs without F16C instruction set) fixed;"}),"\n",(0,s.jsx)(i.li,{children:"FSR and screenshots scale interaction fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Both body flex and driver weight shift fixed, ready to be used properly;"}),"\n",(0,s.jsx)(i.li,{children:"Early collider activation physics tweak is disabled by default until it can support unusual mods;"}),"\n",(0,s.jsx)(i.li,{children:"Sliding fix physics tweak is stronger (car still slides a bit though, might need a different approach);"}),"\n",(0,s.jsx)(i.li,{children:"Tyres no longer burst into flames on some cars where they should not do that;"}),"\n",(0,s.jsx)(i.li,{children:"ExtraFX emissives fixed, working properly with Pure without requiring a reload;"}),"\n",(0,s.jsx)(i.li,{children:"Transparent surfaces rendered on top of smoke for interior cameras fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Autopilot (Ctrl+C) can handle rain and drive out of pits properly;"}),"\n",(0,s.jsx)(i.li,{children:"Flags shading (overdarken ambient and translucency with insane logic) fixed;"}),"\n",(0,s.jsx)(i.li,{children:"IMGUI blending fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Issue with skinned meshes positioned wrongly for a frame with LOD changes fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Headlights won\u2019t activate anymore at the start of the race based on old weather item selected with WeatherFX active;"}),"\n",(0,s.jsx)(i.li,{children:"AI Flood fixed (AI drivers should be more resilient);"}),"\n",(0,s.jsx)(i.li,{children:"Walking Out module: FFB fixes, better support for DualSense and GamepadFX scripts, few other fixes and improvements;"}),"\n",(0,s.jsx)(i.li,{children:"Depth map is available to WeatherFX and other modules even if soft particles are disabled;"}),"\n",(0,s.jsx)(i.li,{children:"Lua apps opened in a previous session load first;"}),"\n",(0,s.jsx)(i.li,{children:"Teleporting to pits button fixed, better compatible with the way CM treated those, with reduced delays as well;"}),"\n",(0,s.jsx)(i.li,{children:"If paused in background option is active, AC will be paused when its window is collapsed;"}),"\n",(0,s.jsx)(i.li,{children:"Android Auto: rear view mirror and YouTube app fixed;"}),"\n",(0,s.jsx)(i.li,{children:"New render stats app: performance tips crash fixed;"}),"\n",(0,s.jsx)(i.li,{children:"BrakeDiscFX light casting fixed;"}),"\n",(0,s.jsx)(i.li,{children:"New SSLR quality levels added some time ago (such as Hi-Z) looking horrible on some GPUs fixed, blur quality is also improved;"}),"\n",(0,s.jsx)(i.li,{children:"Static reflections breaking with new emissives option fixed (also, they won\u2019t include fireworks);"}),"\n",(0,s.jsx)(i.li,{children:"Dynamic lights should put less load on CPU;"}),"\n",(0,s.jsxs)(i.li,{children:["Track icon during loading now generates properly, not relying on ",(0,s.jsx)(i.code,{children:"outline_cropped.png"})," produced by CM anymore;"]}),"\n",(0,s.jsx)(i.li,{children:"Post-processing auto-exposure no longer resets on changing filters or resizing AC (was causing issues with brightness when making a screenshot with a different render scale);"}),"\n",(0,s.jsx)(i.li,{children:"Virtual mirror is better compatible with Real Mirrors;"}),"\n",(0,s.jsx)(i.li,{children:"Compact mirrors format works with MSAA;"}),"\n",(0,s.jsx)(i.li,{children:"Mumble FMOD integration (as well as other audio events streaming audio to FMOD) is fixed, no longer producing artefacts;"}),"\n",(0,s.jsx)(i.li,{children:"Caching for IMGUI texture atlases improves loading times by about 0.6 s;"}),"\n",(0,s.jsxs)(i.li,{children:["Automatically controlled headlights (or AI headlights) rewritten, switching instantly if time has jumped (WeatherFX scripts now need to call ",(0,s.jsx)(i.code,{children:"ac.setAiHeadlightsSuggestion()"})," with a number instead of the old function for a smoother transition);"]}),"\n",(0,s.jsx)(i.li,{children:"Thing for searching apps in taskbar without switching keyboard layout fixed;"}),"\n",(0,s.jsx)(i.li,{children:"VRSS is switching off for Lua render targets and such;"}),"\n",(0,s.jsx)(i.li,{children:"Crashes with associating AC with a specific GPU fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Optional handbrake bar in built-in pedals app supports app scaling and works in replays;"}),"\n",(0,s.jsx)(i.li,{children:"Impulse tachometer switches telltale to be impulse as well;"}),"\n",(0,s.jsx)(i.li,{children:"File saving performance fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Surface colors are loaded properly in replays (was causing some issues with skidmarks and such);"}),"\n",(0,s.jsx)(i.li,{children:"Win+V and Win+. should work as expected;"}),"\n",(0,s.jsx)(i.li,{children:"Shift+Click on IMGUI text inputs adds selection;"}),"\n",(0,s.jsx)(i.li,{children:"IMGUI keeps its state even if game is exited too soon after a change;"}),"\n",(0,s.jsx)(i.li,{children:"New trees culling issue with trees wider than taller fixed, also issue with uneven LOD fading has been fixed as well;"}),"\n",(0,s.jsx)(i.li,{children:"New trees are not as shiny during the rain;"}),"\n",(0,s.jsx)(i.li,{children:"Trees are a bit less sharp now to both improve performance and reduce aliasing in VR, banding replaced with strict alpha testing;"}),"\n",(0,s.jsx)(i.li,{children:"Escape no longer stops a replay when making an accumulative screenshot;"}),"\n",(0,s.jsx)(i.li,{children:"Fake car shadows realignment causing flicker for stationary cars fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Turning lights work properly even if there are no emissives linked to them;"}),"\n",(0,s.jsx)(i.li,{children:"Dragging car around with CSP Debug works a lot better with physics worker;"}),"\n",(0,s.jsx)(i.li,{children:"POV thing on gamepads moving mouse and quick pits menu fixed a bit more;"}),"\n",(0,s.jsx)(i.li,{children:"Exposure difference between eyes in VR with automatic exposure with SPS option enabled should be fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Disabled track seasonal adjustments also deactivate seasonal color shift for particles and skidmarks (also, those will fade as days pass);"}),"\n",(0,s.jsx)(i.li,{children:"A few more fixes for curved filter;"}),"\n",(0,s.jsx)(i.li,{children:"The way AC apps are checked for intersection and possible placement reworked to be more user-friendly, allowing to position apps everywhere by holding a Ctrl button;"}),"\n",(0,s.jsx)(i.li,{children:"Car scripts and such not working with cars with two LOD A models shown at once (like a passenger model) fixed;"}),"\n",(0,s.jsx)(i.li,{children:"VRS shouldn\u2019t cause additional textures to become damaged;"}),"\n",(0,s.jsx)(i.li,{children:"AC apps pinned while being placed too high up will have their pin buttons moved lower so they could be unpinned;"}),"\n",(0,s.jsx)(i.li,{children:"Bending shader is compatible with RainFX;"}),"\n",(0,s.jsx)(i.li,{children:"Rain drops on screen wrongly appearing for some cars with roofs fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Rain shouldn\u2019t break rear view mirrors anymore;"}),"\n",(0,s.jsx)(i.li,{children:"Rain maps flicker with low quality fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Rain occluders are loaded properly, getting rid of rain in tunnels and such;"}),"\n",(0,s.jsx)(i.li,{children:"Rain occasionally messing up normal maps for tyres fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Drying line resets with session restarts;"}),"\n",(0,s.jsx)(i.li,{children:"Driver head no longer jitters with G-forces when applying an extra driver animation;"}),"\n",(0,s.jsx)(i.li,{children:"Hotkey for saving a replay clip can be edited in CM;"}),"\n",(0,s.jsx)(i.li,{children:"AIs respect non-standard pitlane speed limit (also, the restriction with automatic limiter disabled is a bit softer now);"}),"\n",(0,s.jsx)(i.li,{children:"CM storage parsing fixed (might have been messing up driver tags loading before);"}),"\n",(0,s.jsxs)(i.li,{children:["IMGUI fonts contain more symbols loaded from ",(0,s.jsx)(i.code,{children:"data_imgui_symbols.txt"}),";"]}),"\n",(0,s.jsx)(i.li,{children:"Any key is redirected from AC to IMGUI if any input text is currently active, not just a select few as before;"}),"\n",(0,s.jsx)(i.li,{children:"Compatibility with stylus-supporting mode (activated by Paintshop) fixed some more;"}),"\n",(0,s.jsxs)(i.li,{children:["Node filters ",(0,s.jsx)(i.code,{children:"first:\u2026"})," and ",(0,s.jsx)(i.code,{children:"last:\u2026"})," fixed, now supporting ",(0,s.jsx)(i.code,{children:"no"})," as a value;"]}),"\n",(0,s.jsx)(i.li,{children:"Keyboard input uses a different function to speed things up a bit and improve stability;"}),"\n",(0,s.jsx)(i.li,{children:"Broken Lua apps shouldn\u2019t stop subsequent apps from loading anymore;"}),"\n",(0,s.jsx)(i.li,{children:"Model encryption no longer breaks when extended physics option is enabled in Content Manager;"}),"\n",(0,s.jsx)(i.li,{children:"Split-screen mode fixed, now compatible with custom physics;"}),"\n",(0,s.jsx)(i.li,{children:"Weather transitions in replays fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Positions estimation for racing leaderboards slightly improved;"}),"\n",(0,s.jsx)(i.li,{children:"GrassFX shading updated and fixed, with a bit of nearby clipping added for interior shots;"}),"\n",(0,s.jsx)(i.li,{children:"Piece particles glitching and stretching over viewport fixed;"}),"\n",(0,s.jsx)(i.li,{children:"AC and Python apps forcefully pushed into the screen area fixed, allowing to be poking out from the bottom or the right side of the screen;"}),"\n",(0,s.jsx)(i.li,{children:"Digital LEDs merging malfunctioning with some ERS bars and similar fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Taskbar icons load on-demand, solving that lag happening first time taskbar is opened;"}),"\n",(0,s.jsx)(i.li,{children:"Motion extrapolation online fixed;"}),"\n",(0,s.jsx)(i.li,{children:"Few smaller fixes and optimizations."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"car--track-configs",children:"Car & track configs"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The way multiple configs are handled has been changed, giving more priority to subsequent configs (meaning, for example, ",(0,s.jsx)(i.code,{children:"[SHADER_REPLACEMENT_\u2026]"})," from skin config will be applied after ",(0,s.jsx)(i.code,{children:"[SHADER_REPLACEMENT_\u2026]"})," from car config);"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"[MESH_SPLIT_\u2026]"})," can work based on UV (had to split 70s helmet for NeckFX helmet rendering);"]}),"\n",(0,s.jsxs)(i.li,{children:["New parameter for extra lights: ",(0,s.jsx)(i.code,{children:"AFFECTS_TRACK = INTERIOR_ONLY"})," stopping light from affecting car exteriors as well (fits well for GT3 interior light, for example);"]}),"\n",(0,s.jsxs)(i.li,{children:["Car scripts can use conditions (like ",(0,s.jsx)(i.code,{children:"INPUT = \u2026"}),") to only activate when something special happens;"]}),"\n",(0,s.jsxs)(i.li,{children:["New car inputs: ",(0,s.jsx)(i.code,{children:"FPS"}),", ",(0,s.jsx)(i.code,{children:"FRAME_TIME_MS"}),";"]}),"\n",(0,s.jsx)(i.li,{children:"Car navigators got a few fixes and improvements, such as better camera movement, a new scale widget (for custom oldschool layouts) or a font scale option;"}),"\n",(0,s.jsx)(i.li,{children:"InteriorPBR shader is compatible with bending effects;"}),"\n",(0,s.jsx)(i.li,{children:"Oil pressure estimate is slightly lower in corners;"}),"\n",(0,s.jsx)(i.li,{children:"Custom textures reload live as well;"}),"\n",(0,s.jsx)(i.li,{children:"New trees: warning about mishandled compiled trees, GrassFX surface is taken as surface by default now to ensure normals synchronization (lack of synchronization breaks fake shadows), draw calls and triangles are counted properly;"}),"\n",(0,s.jsx)(i.li,{children:"Referring to a flashing condition as an input for another condition now works properly;"}),"\n",(0,s.jsxs)(i.li,{children:["Hide meshes from secondary views (like mirrors) with ",(0,s.jsx)(i.code,{children:"INCLUDE_IN_SECONDARY_VIEWS=0"})," of shader replacement section;"]}),"\n",(0,s.jsx)(i.li,{children:"Mesh splits and mesh optimization hints are working again;"}),"\n",(0,s.jsxs)(i.li,{children:["A warning for cars with tyres of version below 3 with ",(0,s.jsx)(i.code,{children:"RIM_RADIUS"})," parameter (might mean somebody set the version wrong and maybe even missed a zero there);"]}),"\n",(0,s.jsxs)(i.li,{children:["New filters: ",(0,s.jsx)(i.code,{children:"insideNthWheel:N"}),", ",(0,s.jsx)(i.code,{children:"insideNthSuspension:N"}),", ",(0,s.jsx)(i.code,{children:"driverRoot:N"}),", ",(0,s.jsx)(i.code,{children:"driverNeck:N"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"lua--python-scripting",children:"Lua & Python scripting"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Preprocessor was rewritten, now inlining enums, computing ",(0,s.jsx)(i.code,{children:"bit."})," calls with enums and a lot more (docs are coming soon), even having access to some of CSP API, currently disabled by default to make sure things won\u2019t break until it would be properly tested;"]}),"\n",(0,s.jsx)(i.li,{children:"Hold Ctrl to automatically align new pinned windows in Lua Debug app;"}),"\n",(0,s.jsx)(i.li,{children:"Lua calls are faster, meaning AC can run more scripts;"}),"\n",(0,s.jsx)(i.li,{children:"Visual Code extension updated, sees shared libraries properly as well (documentation is also updated fixing issue with multiline table bug);"}),"\n",(0,s.jsx)(i.li,{children:"Scripts such as WeatherFX, NeckFX, Chaser Camera or scriptable filters reload automatically if user settings changed (and CM can show those user settings in CSP settings section);"}),"\n",(0,s.jsxs)(i.li,{children:["Common API:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["New string functions: ",(0,s.jsx)(i.code,{children:":replace(\u2026)"}),", ",(0,s.jsx)(i.code,{children:":urlEncode()"}),", ",(0,s.jsx)(i.code,{children:":nextEmoji()"}),", ",(0,s.jsx)(i.code,{children:":findIgnoreCase()"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Structures (",(0,s.jsx)(i.code,{children:"ac.StructItem"}),") can store tightly packed matrices;"]}),"\n",(0,s.jsx)(i.li,{children:"Online events: with custom Assetto Server there is no size limit and optional UDP transport mode available;"}),"\n",(0,s.jsx)(i.li,{children:"Load full car and track INI configs;"}),"\n",(0,s.jsx)(i.li,{children:"Timers are more precise, especially interval ones (time of calls would still fluctuate, but it\u2019ll average out perfectly);"}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ac.DataLUT11"})," can be serialized with ",(0,s.jsx)(i.code,{children:"stringify()"})," (also, its parser can handle two types of format now);"]}),"\n",(0,s.jsxs)(i.li,{children:["Helper ",(0,s.jsx)(i.code,{children:"ac.DriverTags"})," now reads colors from custom CM tags, also added ",(0,s.jsx)(i.code,{children:"ac.getDriverChatNameColor()"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Function ",(0,s.jsx)(i.code,{children:"ac.getSkyFeatureDirection()"})," returns correct direction for ISS;"]}),"\n",(0,s.jsx)(i.li,{children:"Web functions can load 16 things at the same time instead of old limit of 4, but it\u2019s still no more than 4 simultaneous requests per domain;"}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ac.getPerformanceCPUAndGPUTime()"})," for measuring performance live;"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["New state values:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Cars:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Static: ",(0,s.jsx)(i.code,{children:"hasFlashingLights"}),", ",(0,s.jsx)(i.code,{children:"hasTurningLights"}),", ",(0,s.jsx)(i.code,{children:"hasHornAudioEvent"}),", ",(0,s.jsx)(i.code,{children:"hasAnalogTelltale"}),", ",(0,s.jsx)(i.code,{children:"hasCockpitSwitchForUserSpeedLimiter"}),", ",(0,s.jsx)(i.code,{children:"hasLowBeams"}),", ",(0,s.jsx)(i.code,{children:"sirenHorn"}),", ",(0,s.jsx)(i.code,{children:"fuelMaps"}),", ",(0,s.jsx)(i.code,{children:"tractionControl2Modes"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Dynamic: ",(0,s.jsx)(i.code,{children:"isUserControlled"}),", ",(0,s.jsx)(i.code,{children:"wiperSelectedMode"}),", ",(0,s.jsx)(i.code,{children:"autoShift"}),", ",(0,s.jsx)(i.code,{children:"justJumped"}),", ",(0,s.jsx)(i.code,{children:"resetCounter"}),", ",(0,s.jsx)(i.code,{children:"fuelMap"}),", ",(0,s.jsx)(i.code,{children:"speedMs"}),", matrices to transform to and from graphics offset;"]}),"\n",(0,s.jsxs)(i.li,{children:["Property ",(0,s.jsx)(i.code,{children:"localVelocity"})," should work in replays;"]}),"\n",(0,s.jsx)(i.li,{children:"New methods to quickly access some strings;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Sim:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Static: ",(0,s.jsx)(i.code,{children:"directUDPMessagingAvailable"}),", ",(0,s.jsx)(i.code,{children:"isPitsSpeedLimiterForced"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Dynamic: ",(0,s.jsx)(i.code,{children:"frame"}),", ",(0,s.jsx)(i.code,{children:"gameTime"}),", ",(0,s.jsx)(i.code,{children:"systemTime"}),", ",(0,s.jsx)(i.code,{children:"isMakingScreenshot"}),", ",(0,s.jsx)(i.code,{children:"gravity"}),", ",(0,s.jsx)(i.code,{children:"orbitOnboardCamera"}),", ",(0,s.jsx)(i.code,{children:"idealLineShown"}),", ",(0,s.jsx)(i.code,{children:"damageDisplayerShown"}),", ",(0,s.jsx)(i.code,{children:"driverNamesShown"}),";"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Session: ",(0,s.jsx)(i.code,{children:"leaderboard"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["UI: ",(0,s.jsx)(i.code,{children:"currentDesktop"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["UI:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ui.inputTextCommand()"})," for controlling input texts;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ui.iteractiveArea()"})," and updated ",(0,s.jsx)(i.code,{children:"ui.captureKeyboard()"})," allowing more direct access to current keyboard state;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ui.setNextTextSpanStyle()"})," for coloring bits of text differently or adding bold style (also, a ",(0,s.jsx)(i.code,{children:"ui.setNextTextBold()"})," shortcut);"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ui.windowResizing()"}),", ",(0,s.jsx)(i.code,{children:"ui.windowPinned()"})," and ",(0,s.jsx)(i.code,{children:"ui.windowScrolling()"})," for checking the state of current window;"]}),"\n",(0,s.jsxs)(i.li,{children:["Shortcut ",(0,s.jsx)(i.code,{children:"ui.configureStyle()"})," for quickly altering accent color for subsequent widgets;"]}),"\n",(0,s.jsxs)(i.li,{children:["If you want to draw extra things with context menus in title bar, use ",(0,s.jsx)(i.code,{children:"ui.setTitleBarContentHint()"})," to specify their position so that original context menu would be hidden;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"relativePadding"})," option for ",(0,s.jsx)(i.code,{children:"ui.setNextItemIcon()"})," making it a lot more usable;"]}),"\n",(0,s.jsx)(i.li,{children:"Vector icons for creating pixel-perfect things;"}),"\n",(0,s.jsxs)(i.li,{children:["Function ",(0,s.jsx)(i.code,{children:"ui.addSettings()"})," now allows to create new temporary apps outside of settings section, now with optional callbacks for removing and context menu from list of apps, as well as options for background color and such;"]}),"\n",(0,s.jsx)(i.li,{children:"Add new items to context menu of your window;"}),"\n",(0,s.jsxs)(i.li,{children:["Create popups and new windows with ",(0,s.jsx)(i.code,{children:"ui.popup()"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Other popup-related functions: ",(0,s.jsx)(i.code,{children:"ui.closePopup()"}),", ",(0,s.jsx)(i.code,{children:"ui.menuItem()"}),", ",(0,s.jsx)(i.code,{children:"ui.beginMenu()"}),", etc."]}),"\n",(0,s.jsxs)(i.li,{children:["Function ",(0,s.jsx)(i.code,{children:"ui.beginGroup()"})," with explicit width now alters default item width too;"]}),"\n",(0,s.jsxs)(i.li,{children:["Get file icons with ",(0,s.jsx)(i.code,{children:"ui.FileIcon"})," helper;"]}),"\n",(0,s.jsx)(i.li,{children:"Updating extra canvases copies and restores render target automatically (shouldn\u2019t break anything unless you were doing something very unusual);"}),"\n",(0,s.jsxs)(i.li,{children:["New dynamic textures: ",(0,s.jsx)(i.code,{children:"dynamic::final"}),", ",(0,s.jsx)(i.code,{children:"dynamic::mirror"})," and more;"]}),"\n",(0,s.jsxs)(i.li,{children:["Set callback to be called when IMGUI pass is done with ",(0,s.jsx)(i.code,{children:"ui.onUIFinale()"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["New library ",(0,s.jsx)(i.code,{children:"shared/web/browser"})," allowing to easily integrate Chromium engine to any of your scripts, such a custom web browser, web page acting as a car dashboard or a track display, a simple tab with the rest removed with custom CSS turning into a video or music player supporting modern formats and services, or even just an AC widget with transparency support (actual 100 MB engine will be downloaded with first usage);"]}),"\n",(0,s.jsx)(i.li,{children:"Rotating text should work better, with fewer issues with clipping;"}),"\n",(0,s.jsxs)(i.li,{children:["Popping something from a stack (like ",(0,s.jsx)(i.code,{children:"ui.popDisabled()"}),") in the wrong moment will throw an error instead of crashing entire game;"]}),"\n",(0,s.jsxs)(i.li,{children:["Dialog ",(0,s.jsx)(i.code,{children:"ui.modalPrompt()"})," allows user to input empty strings;"]}),"\n",(0,s.jsxs)(i.li,{children:["Dialog ",(0,s.jsx)(i.code,{children:"ui.modalDialog()"})," got a close callback;"]}),"\n",(0,s.jsx)(i.li,{children:"New flag for text input for retaining selection;"}),"\n",(0,s.jsx)(i.li,{children:"New flag for selectable to span clip rect, for creating proper menus;"}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:":gaussianBlurFrom()"})," method for extra canvases;"]}),"\n",(0,s.jsx)(i.li,{children:"Higher UI scale no longer affects dwrite text for offscreen render targets;"}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ui.setForcedImagesCaching()"})," function forcing CSP to ignore HTTP headers and just cache things;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ui.onExclusiveHUD()"})," for drawing fullscreen HUD and hiding the rest;"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Render API:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"render.measure()"})," function for estimating;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"render.onSceneReady()"})," event for drawing things right between mirrors and cubemap finished updating but the main render pass hasn\u2019t started yet;"]}),"\n",(0,s.jsxs)(i.li,{children:["Geometry shots can use track cameras with ",(0,s.jsx)(i.code,{children:":updateWithTrackCamera()"}),", also reenable driver and steering wheel if they\u2019re hidden with current camera;"]}),"\n",(0,s.jsxs)(i.li,{children:["Both ",(0,s.jsx)(i.code,{children:"ac.GeometryShot"})," and ",(0,s.jsx)(i.code,{children:"ui.ExtraCanvas"})," got some sort of API merge, both got access to functions like ",(0,s.jsx)(i.code,{children:":setName()"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Antialiasing modes for ",(0,s.jsx)(i.code,{children:"ac.GeometryShot"})," and ",(0,s.jsx)(i.code,{children:"ui.ExtraCanvas"})," fixed, new YEBIS mode running YEBIS post-processing added;"]}),"\n",(0,s.jsx)(i.li,{children:"Accessing texture data works faster with textures pooling;"}),"\n",(0,s.jsxs)(i.li,{children:["Share and access textures to/from other Lua scripts or other Windows processes with ",(0,s.jsx)(i.code,{children:"ui.SharedTexture()"})," and ",(0,s.jsx)(i.code,{children:":sharedHandle()"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Blurring (",(0,s.jsx)(i.code,{children:"ui.beginBlurring()"}),") fixed, uses mipmaps to improve quality and performance;"]}),"\n",(0,s.jsxs)(i.li,{children:["Functions taking shader to render something custom work a lot faster, no longer depending on shader string size, with an extra parameter ",(0,s.jsx)(i.code,{children:"directValuesExchange"})," for extra boosted performance;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"render.projectPoint()"})," function properly handling VR;"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Scene API:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Hide things from reflection cubemap or from extra views (like rear view mirrors);"}),"\n",(0,s.jsxs)(i.li,{children:["New method ",(0,s.jsx)(i.code,{children:":contains()"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Method ",(0,s.jsx)(i.code,{children:":loadKN5Async()"})," fixed, shouldn\u2019t fail to find files anymore;"]}),"\n",(0,s.jsxs)(i.li,{children:["Access to depth map of ",(0,s.jsx)(i.code,{children:"render.shaderedQuad()"})," fixed, new parameters to draw a billboard quad (always facing camera);"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:":setAlternativeShadowsSet()"})," method for geometry shots switching to a different shadows set (expensive);"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["I/O:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"io.getFileName()"})," function;"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Lua apps:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Manifests will be parsed with extended INIpp features allowing to use expressions;"}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"FLOATING_TITLE_BAR"})," flag working together with ",(0,s.jsx)(i.code,{children:"NO_BACKGROUND"})," to create nicer windows for apps that don\u2019t need title bar and such;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"FUNCTION_MENU"})," callback for windows for adding more items to title context menu;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"[AWAKE_TRIGGERS] URL = <RegExp>"})," parameter for awakening your app if URL has been clicked (use ",(0,s.jsx)(i.code,{children:"ac.onURL()"})," to get it when awoken);"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"[CORE] IMMEDIATE = 1"})," parameter for forcing app to load instantly (use very carefully, it\u2019ll make loading slower);"]}),"\n",(0,s.jsx)(i.li,{children:"Override car controls and trigger AC hotkey commands and more (pretty much what Unbound is using for simulating user input reliably);"}),"\n",(0,s.jsx)(i.li,{children:"Similar to background workers, some scripts can create physics workers to access some of physics API from physics thread;"}),"\n",(0,s.jsx)(i.li,{children:"Access list of all app windows, hide, show and move windows around, redirect any app windows to a separate texture (could be used for something like projecting certain AC apps onto separate objects in VR);"}),"\n",(0,s.jsxs)(i.li,{children:["Change current desktop with ",(0,s.jsx)(i.code,{children:"ac.setCurrentDesktop()"}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Stop apps from working with ",(0,s.jsx)(i.code,{children:"[CORE] FLAGS = DISABLED_OFFLINE"})," and others (docs are coming soon);"]}),"\n",(0,s.jsx)(i.li,{children:"Issue with collapsed windows triggering apps to load fixed;"}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ac.setVRSConfigurationForVR()"})," function which together with ",(0,s.jsx)(i.code,{children:"ac.getPerformanceCPUAndGPUTime()"})," might be useful to adjusting quality live;"]}),"\n",(0,s.jsx)(i.li,{children:"Setup items can be edited outside of setup menu in sessions with physics API access;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Car physics scripts:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Function ",(0,s.jsx)(i.code,{children:"script.reset()"})," will be called when car resets;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"car.limiterInAction"})," property, as well as functions ",(0,s.jsx)(i.code,{children:"ac.overrideGasInput()"})," and ",(0,s.jsx)(i.code,{children:"ac.disableEngineLimiter()"})," for custom limiter logic if needed;"]}),"\n",(0,s.jsx)(i.li,{children:"New API for altering joints live;"}),"\n",(0,s.jsx)(i.li,{children:"Alter FFB;"}),"\n",(0,s.jsx)(i.li,{children:"Block extra switches in a way that can\u2019t be altered by editing car config;"}),"\n",(0,s.jsx)(i.li,{children:"Override turbo BOV value (and handle it on FMOD side the way you need);"}),"\n",(0,s.jsx)(i.li,{children:"Read (and change, but that\u2019s not recommended) any setup values;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Car scripts:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Read & write access to F6 cameras;"}),"\n",(0,s.jsx)(i.li,{children:"Alter properties of more audio events, such as skidmarks or wheels;"}),"\n",(0,s.jsxs)(i.li,{children:["Set custom navigator text with ",(0,s.jsx)(i.code,{children:"ac.setNavigatorText()"}),";"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Car access API (car scripts, apps, and more):","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["New functions ",(0,s.jsx)(i.code,{children:"ac.getExtraSwitchName()"})," and ",(0,s.jsx)(i.code,{children:"ac.isExtraSwitchAvailable()"})," (they can still switch those unless blocked by physics script);"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Scripts with I/O access:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Can listen to URLs and capture events from further processing (and eventually being opened in system browser);"}),"\n",(0,s.jsx)(i.li,{children:"Can access SQLite3 functions, so those can be used with a SQLite FFI Lua library;"}),"\n",(0,s.jsxs)(i.li,{children:["Processes started with ",(0,s.jsx)(i.code,{children:"os.runConsoleProcess()"})," shouldn\u2019t get stuck on exit anymore;"]}),"\n",(0,s.jsx)(i.li,{children:"File opening dialog can handle multiple files selection;"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Physics API:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["New functions ",(0,s.jsx)(i.code,{children:"physics.forceUserClutchFor()"}),", ",(0,s.jsx)(i.code,{children:"physics.forceUserHandbrakeFor()"}),";"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["WeatherFX:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Option to intercept post-processing application and alter all parameters, swap input by a custom texture (thus adding new preprocessing steps) or even replace entire YEBIS with a custom implementation;"}),"\n",(0,s.jsxs)(i.li,{children:["New rendering callback ",(0,s.jsx)(i.code,{children:"script.renderSceneEnd()"}),";"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"Post-processing scripts now can ask for a custom render scale to do things like scene reprojection and alter triple side params live;"}),"\n",(0,s.jsx)(i.li,{children:"Some functions, such as replay seeking, postpone during accumulative shots;"}),"\n",(0,s.jsx)(i.li,{children:"Pause car scripts (physics and others) until a certain condition is met to save more time;"}),"\n",(0,s.jsxs)(i.li,{children:["Scripts without I/O access can work with memory mapped files with names starting with ",(0,s.jsx)(i.code,{children:"AcTools.CSP.Limited."}),";"]}),"\n",(0,s.jsxs)(i.li,{children:["Python:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ac.ext_takeAStepBack()"}),", ",(0,s.jsx)(i.code,{children:"ac.ext_getHandbrake()"})," fixed;"]}),"\n",(0,s.jsxs)(i.li,{children:["New ",(0,s.jsx)(i.code,{children:"ac.ext_setEmojiActive(active: boolean)"})," (by default emojis are disabled for compatibility);"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"A bunch of issues with exchanging data between scripts causing crashes fixed."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var s=n(6540);const r={},t=s.createContext(r);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);