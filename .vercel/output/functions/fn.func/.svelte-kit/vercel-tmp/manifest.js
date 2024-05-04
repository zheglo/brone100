export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/e/.DS_Store","assets/e/aletter.svg","assets/e/dletter.svg","assets/e/eeletter.svg","assets/e/eletter.svg","assets/e/iletter.svg","assets/e/nletter.svg","assets/e/oletter.svg","assets/e/rletter.svg","assets/e/sletter.svg","assets/e/soderzhani.svg","assets/e/zhletter.svg","assets/footer/br.svg","assets/hero/arrowB.svg","assets/hero/arrowL.svg","assets/hero/arrowR.svg","assets/jubilee/.DS_Store","assets/jubilee/5.svg","assets/jubilee/greenTheater.webp","assets/jubilee/joke.png","assets/jubilee/jokeYellow.webp","assets/jubilee/vprogramme.svg","assets/program/.DS_Store","assets/program/Evgeny_Kalachev_by_HominiLupus.webp","assets/program/Pakava.webp","assets/program/bostonskoe.webp","assets/program/greenTheaterYellow.png","assets/program/greenTheaterYellow2.png","assets/program/nordLogo.svg","assets/program/nordLogoW.svg","assets/program/otzvuki.webp","assets/program/purba.webp","assets/program/sever.webp","assets/program/ship.webp","assets/program/shipLogo.svg","assets/punkvideo/.DS_Store","assets/punkvideo/probrone.mp4","assets/punkvideo/probrone.webm","favicon.svg","fonts/.DS_Store","fonts/MagicalChildhood-Rprjl.woff","fonts/Montserrat.woff2","fonts/Playfair_Display.woff2"]),
	mimeTypes: {".svg":"image/svg+xml",".webp":"image/webp",".png":"image/png",".mp4":"video/mp4",".webm":"video/webm",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.DS7v_P2o.js","app":"_app/immutable/entry/app.DVWjxaLp.js","imports":["_app/immutable/entry/start.DS7v_P2o.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/entry/app.DVWjxaLp.js","_app/immutable/chunks/scheduler.DLmczG9q.js","_app/immutable/chunks/index.B20sN6f-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/destiny",
				pattern: /^\/destiny\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/heritage",
				pattern: /^\/heritage\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/hero",
				pattern: /^\/hero\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/international/[[lang]]",
				pattern: /^\/international(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/jubilee",
				pattern: /^\/jubilee\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/program",
				pattern: /^\/program\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
