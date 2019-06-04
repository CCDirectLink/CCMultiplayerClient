declare let LOAD_LEVEL_ON_GAME_START: string;

declare namespace ig {
	class Class {
	}
	class EventStepBase extends ig.StepBase {
	}
	class ActionStepBase extends ig.StepBase {
	}
	interface EnemyReactionBase extends ig.Class {
		name: string;
		type: number;
		action: any;
		postSwitchState: any;
		ignoreStun: boolean;
		restartPrevAction: boolean;
		constructor(name?: any, data?: any);
		init: (name?: any, data?: any) => any;
		onActivate: any;
		preApply: any;
		apply: (entity?: any, actions?: any) => any;
		check: any;
	}
	class Config extends Class {
		_data: any;
		constructor(a?: any);
		init: (a?: any) => any;
		copy: () => any;
	}
	class Worker extends Class {
		lastId: number;
		runningTasks: {[key: string]: any};
		worker: any;
		key: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		doTask: (a?: any, b?: any, c?: any) => any;
		_onMessage: (a?: any) => any;
	}
	class Cacheable extends Class {
		cacheType: any;
		cacheKey: any;
		referenceCount: number;
		emptyMapChangeCount: number;
		staticInstantiate: () => any;
		constructor();
		init: () => any;
		increaseRef: () => any;
		decreaseRef: () => any;
		getCacheKey: any;
		onCacheCleared: any;
	}
	class Loadable extends Cacheable {
		loaded: boolean;
		failed: boolean;
		path: string;
		tolerateMissingResources: boolean;
		loadListeners: any;
		loadCollectors: any;
		constructor(a?: any);
		init: (a?: any) => any;
		onInstanceReused: () => any;
		getCacheKey: (a?: any) => any;
		load: (a?: any) => any;
		loadingFinished: (a?: any) => any;
		addLoadListener: (a?: any) => any;
	}
	class JsonLoadable extends Loadable {
		constructor(a?: any);
		init: (a?: any) => any;
		loadInternal: () => any;
		onJsonLoaded: (a?: any) => any;
		onJsonError: () => any;
	}
	class SingleLoadable extends Class {
		loaded: boolean;
		failed: boolean;
		path: string;
		staticInstantiate: () => any;
		constructor();
		init: () => any;
		load: (a?: any) => any;
		loadingFinished: (a?: any) => any;
	}
	class Loader extends Class {
		resources: any;
		prevResourcesCnt: number;
		status: number;
		done: boolean;
		lastPath: string;
		gameObjectCreated: boolean;
		_unloaded: any;
		_drawStatus: number;
		_intervalId: number;
		_loadCallbackBound: any;
		_loadIndex: number;
		_nextStepFunction: any;
		constructor(a?: any);
		init: (a?: any) => any;
		load: () => any;
		loadResource: (a?: any) => any;
		end: () => any;
		onEnd: () => any;
		finalize: () => any;
		draw: () => any;
		_loadCallback: (a?: any, b?: any, c?: any) => any;
	}
	class LoadCollector extends Class {
		listener: any;
		resources: any;
		constructor(a?: any);
		init: (a?: any) => any;
		finalizeLoadableFetching: () => any;
		addResource: (a?: any) => any;
		setResourceLoaded: (a?: any) => any;
		done: () => any;
	}
	class JsonTemplate extends Class {
		templates: any;
		constructor();
		init: () => any;
		register: (a?: any, b?: any) => any;
		resolve: (b?: any) => any;
	}
	class Image extends Loadable {
		cacheType: string;
		data: any;
		filtered: {[key: string]: any};
		width: number;
		height: number;
		toBeFiltered: {[key: string]: any};
		additionalCallbacks: any;
		constructor(a?: any);
		init: (a?: any) => any;
		loadInternal: () => any;
		onCacheCleared: () => any;
		addCallback: (a?: any) => any;
		addFiltered: (a?: any, b?: any, c?: any) => any;
		hasFiltered: (a?: any) => any;
		_createFiltered: (a?: any, b?: any, c?: any) => any;
		reload: () => any;
		onload: () => any;
		onresized: (a?: any) => any;
		onfiltered: (a?: any) => any;
		onerror: () => any;
		getTileSrc: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		resize: (a?: any) => any;
		draw: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, m?: any) => any;
		drawCheck: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any) => any;
		drawTileCheck: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, m?: any) => any;
		drawTile: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any) => any;
		createPattern: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		getTileModFragment: (a?: any, b?: any, c?: any, d?: any) => any;
		getMaxTileIdx: (a?: any, b?: any) => any;
	}
	class ImageCanvasWrapper extends Class {
		data: any;
		width: number;
		height: number;
		loaded: boolean;
		filtered: {[key: string]: any};
		constructor(a?: any);
		init: (a?: any) => any;
		draw: any;
	}
	class ImagePattern extends Class {
		image1: any;
		image2: any;
		pattern: any;
		sourceImage: any;
		optMode: number;
		sourceX: number;
		sourceY: number;
		width: number;
		height: number;
		totalWidth: number;
		totalHeight: number;
		usePatternDraw: boolean;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
		initBuffer: () => any;
		clearCached: () => any;
		draw: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
	}
	class SimpleColor extends Class {
		color: any;
		constructor(a?: any);
		init: (a?: any) => any;
		draw: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	class ComplexLineCircleBox extends Class {
		color: any;
		circleColor: any;
		target: {
			x: number;
			y: number;
		};
		radius: number;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		draw: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	class SimpleCircle extends Class {
		color: any;
		borderColor: any;
		radius: number;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		draw: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	class TransitionColor extends Class {
		colorA: any;
		colorB: any;
		colorBWeight: number;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		setColorBWeight: (a?: any) => any;
		draw: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	class DoubleColor extends Class {
		color1: any;
		color2: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
	}
	class ImagePatternSheet extends Cacheable {
		cacheType: string;
		image: any;
		patternTileWidth: number;
		patternTileHeight: number;
		offX: number;
		offY: number;
		xCount: number;
		yCount: number;
		optimization: any;
		patterns: any;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any) => any;
		getCacheKey: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any) => any;
		onCacheCleared: () => any;
		onImageLoaded: () => any;
		getPattern: (a?: any) => any;
	}
	class ImageModFragment extends Class {
		image: number;
		sourceX: number;
		sourceY: number;
		width: number;
		height: number;
		resX: any;
		resY: any;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
		prepare: (a?: any, b?: any) => any;
		draw: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any) => any;
	}
	class ImageAtlas extends Class {
		buffers: any;
		debugActive: boolean;
		lines: any;
		scale: number;
		constructor();
		init: () => any;
		getFragment: (a?: any, b?: any, c?: any) => any;
		fillFragments: () => any;
		defragment: (a?: any) => any;
		release: (a?: any) => any;
		_getFragment: (a?: any, b?: any, c?: any) => any;
		_createLine: (a?: any) => any;
		_createBuffer: () => any;
		_splitEntry: (a?: any, b?: any, c?: any) => any;
	}
	class ImageAtlasFragment extends Class {
		buffer: any;
		offX: number;
		offY: number;
		width: number;
		height: number;
		fillCallback: any;
		filled: boolean;
		lineIdx: number;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		invalidate: () => any;
		release: () => any;
		draw: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any) => any;
		_fill: () => any;
	}
	class ScreenBuffer extends Class {
		width: number;
		height: number;
		buffer: any;
		scroll: {
			x: number;
			y: number;
		};
		off: {
			x: number;
			y: number;
		};
		shift: {
			x: number;
			y: number;
			full: boolean;
		};
		redrawFull: boolean;
		ownerMap: any;
		constructor(a?: any);
		init: (a?: any) => any;
		clearCached: () => any;
		resetBuffer: () => any;
		fetchBuffer: () => any;
		update: (a?: any) => any;
		draw: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
		setGridTile: (a?: any, b?: any, c?: any, d?: any) => any;
		_redrawFull: (a?: any) => any;
		_redrawShift: (a?: any) => any;
		_splitDraw: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
	}
	class Font extends Image {
		cacheType: string;
		widthMap: any;
		indicesX: any;
		indicesY: any;
		firstChar: number;
		charHeight: number;
		sizeIndex: number;
		color: any;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		onload: (a?: any) => any;
		widthForString: (a?: any) => any;
		draw: () => any;
		getSystemFont: (a?: any) => any;
		_drawChar: (a?: any, b?: any, c?: any, d?: any) => any;
		_drawSystemChar: (a?: any, b?: any, c?: any, d?: any) => any;
		getSystemCharWidth: (a?: any) => any;
		_loadMetrics: (a?: any) => any;
	}
	class MultiFont extends Font {
		cacheType: string;
		fontStyles: any;
		iconSets: any;
		mapping: {[key: string]: any};
		indexMapping: any;
		iconChangeListeners: any;
		colorSets: any;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		pushIconSet: (b?: any) => any;
		setIconSet: (b?: any, c?: any) => any;
		addIconChangeListener: (a?: any) => any;
		removeIconChangeListener: (a?: any) => any;
		callChangeListeners: () => any;
		setMapping: (b?: any) => any;
		pushColorSet: (a?: any, b?: any, c?: any) => any;
		_getActualIndex: (a?: any) => any;
		getLineWidth: (a?: any, b?: any, c?: any) => any;
		getTextDimensions: (a?: any, b?: any) => any;
		wrapText: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		drawLines: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
		getCharWidth: (a?: any) => any;
	}
	class TextBlock extends Class {
		font: any;
		maxWidth: number;
		parsedText: string;
		commands: any;
		speed: number;
		padding: number;
		align: any;
		size: {
			x: number;
			y: number;
			lines: any;
		};
		currentLine: number;
		currentIndex: number;
		currentCmd: number;
		currentSpeed: number;
		timer: number;
		onFinish: any;
		prerendered: boolean;
		drawCallback: any;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		setText: (a?: any) => any;
		setDrawCallback: (a?: any) => any;
		prerender: () => any;
		clearPrerendered: () => any;
		reset: () => any;
		getState: () => any;
		setState: (a?: any) => any;
		setSpeed: (a?: any) => any;
		finish: () => any;
		isFinished: () => any;
		_updateCommands: () => any;
		update: () => any;
		draw: (a?: any, b?: any) => any;
		onIconChange: () => any;
	}
	class WebAudio extends Class {
		context: any;
		timeOffset: number;
		constructor();
		init: () => any;
		getDestination: () => any;
		getSampleRate: () => any;
		decodeAudioData: (a?: any, b?: any, c?: any) => any;
		getCurrentTime: () => any;
		getCurrentTimeRaw: () => any;
		createGain: () => any;
		createDynamicCompressor: () => any;
		createPanner: () => any;
		createBufferGain: (a?: any, b?: any, c?: any) => any;
		_createContext: () => any;
	}
	class SoundManager extends Class {
		clips: {[key: string]: any};
		volume: number;
		format: any;
		context: any;
		buffers: {[key: string]: any};
		volumes: {
			master: any;
			music: any;
			sound: any;
		};
		namedSounds: {[key: string]: any};
		soundHandles: any;
		soundStack: any;
		soundGroups: {[key: string]: any};
		requestedGroups: any;
		tracksToUpdate: any;
		hasWebAudio: boolean;
		constructor();
		init: () => any;
		reset: () => any;
		update: () => any;
		playSoundHandle: (a?: any, b?: any) => any;
		stopSoundHandle: (a?: any) => any;
		pushPaused: (a?: any) => any;
		popPaused: () => any;
		_getGroup: (a?: any) => any;
		_solveGroupRequests: (a?: any) => any;
		requestPlaySoundHandle: (a?: any, b?: any) => any;
		getSampleRate: () => any;
		_createWebAudioContext: () => any;
		connectSound: (a?: any) => any;
		disconnectSound: (a?: any) => any;
		connectMusic: (a?: any) => any;
		disconnectMusic: (a?: any) => any;
		setSoundVolume: (a?: any) => any;
		setMusicVolume: (a?: any) => any;
		setMasterVolume: (a?: any) => any;
		onWindowFocusLost: () => any;
		onWindowFocusGained: () => any;
		addNamedSound: (a?: any, b?: any) => any;
		getNamedSounds: (a?: any) => any;
		stopNamedSounds: (a?: any) => any;
		getBuffer: (a?: any) => any;
		loadWebAudio: (c?: any, d?: any) => any;
		registerTrack: (a?: any) => any;
		unregisterTrack: (a?: any) => any;
		_updateTracks: () => any;
		load: (c?: any, d?: any, e?: any) => any;
		_increaseChannels: (a?: any, b?: any, c?: any, d?: any) => any;
		get: (a?: any) => any;
		getChannel: (a?: any, b?: any) => any;
		freeMultiAudio: (a?: any) => any;
		freeWebAudioBuffer: (a?: any) => any;
	}
	class MultiAudio extends Loadable {
		cacheType: string;
		channelCount: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		get: () => any;
		getChannel: (a?: any) => any;
		onCacheCleared: () => any;
		loadInternal: () => any;
		onload: (a?: any, b?: any, c?: any) => any;
	}
	class WebAudioBuffer extends Loadable {
		cacheType: string;
		constructor(a?: any);
		init: (a?: any) => any;
		get: () => any;
		onCacheCleared: () => any;
		loadInternal: () => any;
		onload: (a?: any, b?: any) => any;
	}
	class Music extends Class {
		inBetweenTrack: any;
		currentTrack: any;
		trackStack: any;
		paused: boolean;
		_volume: number;
		_interval: number;
		_timer: any;
		_fadeInTime: number;
		_nextTrackReset: boolean;
		_transitionType: number;
		constructor();
		init: () => any;
		play: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		push: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		pop: (a?: any, b?: any) => any;
		inbetween: (a?: any, b?: any, c?: any, d?: any) => any;
		pause: (a?: any) => any;
		resume: (a?: any) => any;
		getStackSize: () => any;
		isTrackPlaying: (a?: any, b?: any) => any;
		getVolume: () => any;
		setVolume: (a?: any) => any;
		_checkCurrentTrackEquality: () => any;
		_getTopTrack: () => any;
		_pushNextTrack: (a?: any, b?: any, c?: any) => any;
		_setFadeOut: (a?: any, b?: any) => any;
		_startInterval: () => any;
		_intervalStep: () => any;
		_playTopSong: () => any;
		_endFadeIn: () => any;
		_trackEnded: () => any;
		onWindowFocusLost: () => any;
		onWindowFocusGained: () => any;
	}
	class TrackDefault extends Cacheable {
		cacheType: string;
		multiAudio: any;
		introMultiAudio: any;
		loopEnd: number;
		introEnd: number;
		endCallback: any;
		baseVolume: number;
		sound: any;
		swapSound: any;
		introSound: any;
		introPlayed: boolean;
		loop: boolean;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		getCacheKey: (a?: any, b?: any, c?: any, d?: any) => any;
		onCacheCleared: () => any;
		setVolume: (a?: any) => any;
		getVolume: () => any;
		reset: () => any;
		play: () => any;
		pause: () => any;
		_initSounds: () => any;
		_initSound: (a?: any) => any;
		_endedCallback: (a?: any) => any;
		_timeUpdateCallback: (a?: any) => any;
		_loopTrack: () => any;
		_endIntro: () => any;
	}
	class TrackWebAudio extends Cacheable {
		cacheType: string;
		bufferHandle: any;
		introBufferHandle: any;
		loopEnd: number;
		introEnd: number;
		endCallback: any;
		baseVolume: number;
		loop: boolean;
		playing: boolean;
		soundBuffer: any;
		introBuffer: any;
		currentNode: any;
		nextNode: any;
		introNode: any;
		_context: any;
		_volume: number;
		_startTime: number;
		_pauseTime: any;
		_loopCount: number;
		_nextOffset: number;
		_introBufferDuration: number;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		getCacheKey: (a?: any, b?: any, c?: any, d?: any) => any;
		onCacheCleared: () => any;
		_initAudioBuffers: () => any;
		checkForEndCallback: () => any;
		setVolume: (a?: any) => any;
		getVolume: () => any;
		reset: () => any;
		_recreateNodes: () => any;
		_clearNodes: () => any;
		play: () => any;
		pause: () => any;
	}
	class SoundDefault extends Class {
		group: any;
		multiAudio: any;
		volume: number;
		currentClip: any;
		multiChannel: boolean;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		clone: () => any;
		clearCached: () => any;
		play: (a?: any) => any;
		stop: () => any;
	}
	class SoundWebAudio extends Class {
		group: any;
		webAudioBuffer: any;
		volume: number;
		variance: number;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		clone: () => any;
		clearCached: () => any;
		play: (a?: any, b?: any) => any;
		stop: () => any;
	}
	class SoundHandleBase extends Class {
		pos: any;
		setFixPosition: (a?: any, b?: any, c?: any) => any;
		setEntityPosition: (a?: any, b?: any, c?: any, d?: any, f?: any) => any;
		_updateEntityPos: (a?: any) => any;
	}
	class SoundHandleDefault extends SoundHandleBase {
		group: any;
		position: any;
		_time: number;
		_duration: number;
		_offset: number;
		_startTime: number;
		_clip: any;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		update: () => any;
		setSize: () => any;
		play: () => any;
		stop: () => any;
		isLooping: () => any;
		getPlayTime: () => any;
		pause: () => any;
		onActionEndDetach: () => any;
		onEntityKillDetach: () => any;
	}
	class SoundHandleWebAudio extends SoundHandleBase {
		group: any;
		_buffer: any;
		_volume: number;
		_speed: number;
		_time: number;
		_duration: number;
		_offset: number;
		_startTime: number;
		_nodeSource: any;
		_nodePosition: any;
		_loop: boolean;
		_width: number;
		_height: number;
		_playing: boolean;
		_fadeTimer: number;
		_fadeIn: boolean;
		_fadeDuration: number;
		_contextTimeOnStart: number;
		_contextTimeOnPause: any;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		update: () => any;
		isLooping: () => any;
		setSize: (a?: any, b?: any) => any;
		play: () => any;
		stop: () => any;
		_disconnect: () => any;
		getPlayTime: () => any;
		pause: (a?: any) => any;
		_setPosition: () => any;
		onActionEndDetach: () => any;
		onEntityKillDetach: () => any;
	}
	class Timer extends Class {
		target: number;
		base: number;
		last: number;
		stopped: boolean;
		constructor(a?: any);
		init: (a?: any) => any;
		set: (a?: any, b?: any) => any;
		reverseRelativeDelta: () => any;
		stop: () => any;
		resume: () => any;
		reset: () => any;
		tick: () => any;
		weight: () => any;
		delta: () => any;
	}
	class WeightTimer extends Class {
		duration: number;
		timer: number;
		actualTick: boolean;
		mode: any;
		repeatCount: number;
		_rndBool: boolean;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		set: (a?: any, b?: any) => any;
		getRemainingTime: () => any;
		setRemainingTime: (a?: any) => any;
		tick: () => any;
		done: () => any;
		getTimePassed: () => any;
		get: () => any;
		getTotalWeight: () => any;
		hasRepeated: () => any;
		getRepeatCount: () => any;
		onBlinkDecline: () => any;
	}
	class Vars extends Class {
		currentLevelName: any;
		varAccessors: any;
		entityAccessors: any;
		storage: {
			map: {[key: string]: any};
			maps: {[key: string]: any};
			tmp: {[key: string]: any};
			call: {[key: string]: any};
			session: {
				map: {[key: string]: any};
				maps: {[key: string]: any};
			};
		};
		constructor();
		init: () => any;
		get: (a?: any) => any;
		_get: (a?: any) => any;
		_getAccessObject: (a?: any) => any;
		set: (a?: any, b?: any) => any;
		setDefault: (a?: any, b?: any) => any;
		add: (a?: any, b?: any) => any;
		sub: (a?: any, b?: any) => any;
		mul: (a?: any, b?: any) => any;
		div: (a?: any, b?: any) => any;
		mod: (a?: any, b?: any) => any;
		and: (a?: any, b?: any) => any;
		or: (a?: any, b?: any) => any;
		xor: (a?: any, b?: any) => any;
		append: (a?: any, b?: any) => any;
		prepend: (a?: any, b?: any) => any;
		setupCallScope: (a?: any) => any;
		clear: () => any;
		getVarAccessor: (a?: any) => any;
		forwardEntityVarAccess: (a?: any, b?: any, c?: any) => any;
		resolveObjectAccess: (a?: any, b?: any, c?: any) => any;
		registerVarAccessor: (a?: any, b?: any, c?: any) => any;
		pushEntityAccessor: (a?: any) => any;
		popEntityAccessor: (a?: any) => any;
		_getVariable: (b?: any, c?: any) => any;
		onLevelChange: (a?: any) => any;
		getJson: () => any;
		clearTemp: () => any;
		restoreFromJson: (a?: any) => any;
	}
	class VarCondition extends Class {
		condition: any;
		code: string;
		pretty: string;
		vars: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setCondition: (a?: any) => any;
		evaluate: () => any;
		toString: () => any;
	}
	class System extends Class {
		fps: number;
		frameSkip: number;
		width: number;
		height: number;
		contextWidth: number;
		contextHeight: number;
		realWidth: number;
		realHeight: number;
		screenWidth: number;
		screenHeight: number;
		zoomFocus: {
			x: number;
			y: number;
		};
		zoom: number;
		scale: number;
		contextScale: number;
		systemFontScale: number;
		focusLost: boolean;
		focusListeners: any;
		windowFocusLost: boolean;
		imageSmoothingKey: any;
		imageSmoothingDisabled: boolean;
		crashed: boolean;
		cursorType: any;
		skipMode: boolean;
		timeFactor: number;
		totalTimeFactor: number;
		rawTick: number;
		tick: number;
		actualTick: number;
		ingameTick: number;
		intervalId: number;
		newGameClass: any;
		running: boolean;
		delegate: any;
		clock: any;
		inputDom: any;
		canvas: any;
		context: any;
		smoothPositioning: boolean;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
		resize: (a?: any, b?: any, c?: any) => any;
		setGame: (a?: any) => any;
		setGameNow: (a?: any) => any;
		setDelegate: (a?: any) => any;
		setZoom: (a?: any) => any;
		setZoomFocus: (a?: any, b?: any) => any;
		stopRunLoop: () => any;
		startRunLoop: () => any;
		getZoomMinOffset: (a?: any) => any;
		getScreenFromMapPos: (a?: any, b?: any, c?: any) => any;
		getMapFromScreenPos: (a?: any, b?: any, c?: any) => any;
		getMapFromScrollPos: (a?: any, b?: any, c?: any, d?: any) => any;
		clear: (a?: any) => any;
		startZoomedDraw: () => any;
		endZoomedDraw: () => any;
		setTimeFactor: (a?: any) => any;
		run: () => any;
		getBufferContext: (a?: any) => any;
		error: (a?: any) => any;
		hasFocusLost: () => any;
		getDrawPos: (a?: any) => any;
		createImageBuffer: (a?: any, b?: any, c?: any) => any;
		setWindowFocus: (a?: any) => any;
		callFocusListeners: () => any;
		clearCursorType: () => any;
		setCursorType: (a?: any) => any;
		updateCursorClass: () => any;
		setCanvasSize: (a?: any, b?: any, c?: any) => any;
		setFocusLost: () => any;
		regainFocus: () => any;
		addFocusListener: (a?: any) => any;
		removeFocusListener: (a?: any) => any;
		setMasterVolume: (a?: any) => any;
		setSoundVolume: (a?: any) => any;
		setMusicVolume: (a?: any) => any;
	}
	class Input extends Class {
		bindings: {[key: string]: any};
		actions: {[key: string]: any};
		presses: {[key: string]: any};
		keyups: {[key: string]: any};
		locks: {[key: string]: any};
		delayedKeyup: any;
		currentDevice: any;
		isUsingMouse: boolean;
		isUsingKeyboard: boolean;
		isUsingAccelerometer: boolean;
		mouse: {
			x: number;
			y: number;
		};
		accel: {
			x: number;
			y: number;
			z: number;
		};
		mouseGuiActive: boolean;
		lastMousePos: {
			x: number;
			y: number;
		};
		ignoreKeyboard: boolean;
		constructor();
		init: () => any;
		initMouse: () => any;
		initKeyboard: () => any;
		initAccelerometer: () => any;
		mousewheel: (a?: any) => any;
		mousemove: (a?: any) => any;
		mouseout: () => any;
		mouseOutOfScreen: () => any;
		contextmenu: (a?: any) => any;
		isInIframe: () => any;
		isInIframeAndUnfocused: () => any;
		keydown: (a?: any) => any;
		keyup: (a?: any) => any;
		blur: (a?: any) => any;
		focus: () => any;
		devicemotion: (a?: any) => any;
		bind: (a?: any, b?: any) => any;
		bindTouch: (a?: any, b?: any) => any;
		unbind: (a?: any) => any;
		unbindAll: () => any;
		state: (a?: any) => any;
		pressed: (a?: any) => any;
		keyupd: (a?: any) => any;
		clearPressed: () => any;
		touchStart: (a?: any, b?: any) => any;
		touchEnd: (a?: any, b?: any) => any;
	}
	class Lang extends SingleLoadable {
		cacheType: string;
		labels: {[key: string]: any};
		_responseCount: number;
		constructor();
		init: () => any;
		get: (b?: any) => any;
		loadInternal: () => any;
		onerror: () => any;
		onload: (a?: any) => any;
		grammarReplace: (a?: any, b?: any, d?: any) => any;
		_doCallback: () => any;
	}
	class LangLabel extends Class {
		value: any;
		data: any;
		langUid: any;
		originFile: any;
		constructor(a?: any);
		init: (a?: any) => any;
		getSaveData: () => any;
		toString: () => any;
	}
	class SpriteEffectBase extends Class {
		delay: number;
		duration: number;
		constructor(b?: any);
		init: (b?: any) => any;
		updateSprite: (b?: any, a?: any, d?: any) => any;
		apply: () => any;
	}
	class TileSheet extends Class {
		width: number;
		height: number;
		offX: number;
		offY: number;
		xCount: number;
		image: any;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
		generateHit: () => any;
		getTileSrc: (a?: any, b?: any) => any;
		clearCached: () => any;
	}
	class Animation extends Class {
		sheet: any;
		shapeType: any;
		frameTime: number;
		stop: boolean;
		flip: {
			x: boolean;
			y: boolean;
		};
		pivot: {
			x: number;
			y: number;
		};
		centerPivot: boolean;
		wallY: number;
		aboveZ: number;
		sequence: any;
		sequenceSpriteOff: any;
		framesGfxOffset: any;
		framesAlpha: any;
		framesAngle: any;
		framesFlipX: any;
		angle: number;
		offset: any;
		gfxOffset: any;
		size: any;
		renderMode: any;
		guiSprites: boolean;
		globalTiming: boolean;
		fx: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		getDuration: () => any;
		getFrameCount: () => any;
		onAnimationStart: any;
		onUpdate: any;
		updateSprite: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	class MultiEntityAnimationPart extends Class {
		name: any;
		group: any;
		persistAnim: any;
		collType: number;
		heightShape: number;
		padding: any;
		size: {
			x: number;
			y: number;
			z: number;
		};
		pos: {
			x: number;
			y: number;
			z: number;
		};
		animSheet: any;
		synced: boolean;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		createSubEntity: (a?: any, b?: any) => any;
	}
	class MultiEntityAnimation extends Class {
		parts: any;
		baseSize: any;
		anchor: any;
		frameTime: number;
		frameCount: number;
		stop: boolean;
		flipDir: boolean;
		partAnims: {[key: string]: any};
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		getAnchorOffset: (a?: any) => any;
		getDuration: () => any;
		getFrameCount: () => any;
		onAnimationStart: (a?: any) => any;
		onUpdate: (a?: any, b?: any) => any;
		updateSprite: (a?: any, b?: any, c?: any) => any;
	}
	class AnimationState extends Class {
		animations: any;
		followUp: any;
		timer: number;
		loopCount: number;
		alpha: number;
		angle: number;
		scaleX: number;
		scaleY: number;
		flipX: boolean;
		colorOverlays: any;
		animMods: any;
		constructor();
		init: () => any;
		reset: () => any;
		shuffleTime: () => any;
		hasAnimations: () => any;
		setAnimation: (a?: any, b?: any) => any;
		addColorOverlay: (a?: any) => any;
		getFrame: () => any;
		isStatic: () => any;
		isRepeat: () => any;
		hasStopped: () => any;
		rewind: () => any;
		update: (a?: any, b?: any) => any;
		updateSprite: (a?: any) => any;
		updateSpriteColor: (a?: any) => any;
	}
	class AnimModification extends Class {
		entity: any;
		name: any;
		spriteIdx: number;
		tileOffset: number;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		remove: () => any;
		onActionEndDetach: () => any;
	}
	class ColorOverlay extends Class {
		color: any;
		alpha: any;
		spriteFilter: any;
		lighter: boolean;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		clear: () => any;
	}
	class SingleDirAnimationSet extends Class {
		animations: any;
		constructor(a?: any);
		init: (a?: any) => any;
		getAnimations: () => any;
		getAnchorOffset: (a?: any, b?: any) => any;
		getDuration: () => any;
		merge: (a?: any) => any;
	}
	class MultiDirAnimationSet extends Class {
		numDirs: number;
		animations: any;
		anchorOffsetX: any;
		anchorOffsetY: any;
		anchorOffsetZ: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setAnimations: (a?: any, b?: any) => any;
		addAnimation: (a?: any) => any;
		merge: (a?: any) => any;
		getAnchorOffset: (a?: any, b?: any) => any;
		getAnimations: (a?: any) => any;
		getDuration: () => any;
	}
	class AnimationSheet extends JsonLoadable {
		cacheType: string;
		namedSheets: {[key: string]: any};
		createdSheets: any;
		anims: {[key: string]: any};
		sharedAnimData: any;
		replaceAnimationSet: (a?: any, b?: any) => any;
		removeAnimSet: (a?: any) => any;
		hasAnimation: (a?: any) => any;
		addAnimationSet: (a?: any, b?: any) => any;
		clearCached: () => any;
		getJsonPath: () => any;
		onload: (b?: any) => any;
		_getSheet: (a?: any) => any;
	}
	class CollEntry extends Class {
		entity: any;
		_active: boolean;
		_inCollisionMap: boolean;
		_killed: boolean;
		type: number;
		updateType: any;
		shape: number;
		heightShape: any;
		size: {
			x: number;
			y: number;
			z: number;
		};
		alwaysRender: boolean;
		padding: {
			x: number;
			y: number;
		};
		ignoreCollision: boolean;
		groundConnect: any;
		groundSlip: boolean;
		edgeSlipInward: boolean;
		weight: any;
		friction: {
			ground: number;
			air: number;
			terrain: number;
			ignoreTerrain: boolean;
		};
		accelSpeed: number;
		maxVel: number;
		relativeVel: number;
		bounciness: number;
		zBounciness: number;
		minBounceVelocity: number;
		zGravityFactor: number;
		float: {
			height: number;
			variance: number;
			maxSpeed: number;
			accel: number;
		};
		time: {
			factor: number;
			logicFactor: number;
			moveXYFactor: number;
			globalStatic: boolean;
			animStatic: boolean;
			parent: any;
			parentAnimToGlobal: boolean;
		};
		pos: any;
		level: number;
		baseZPos: number;
		shadow: {
			type: any;
			size: number;
			scaleY: number;
			offset: any;
		};
		vel: any;
		pushVel: any;
		accelDir: any;
		parentColl: any;
		parentGroup: any;
		subColls: any;
		totalBlockTimer: number;
		partlyBlockTimer: number;
		updated: number;
		_collData: any;
		_collisionList: any;
		_collisionListData: any;
		constructor(a?: any);
		init: (a?: any) => any;
		initCollData: () => any;
		reset: () => any;
		setPos: (a?: any, b?: any, d?: any, g?: any) => any;
		setType: (a?: any) => any;
		setUpdateType: (a?: any) => any;
		setSize: (a?: any, d?: any, f?: any, g?: any, h?: any) => any;
		setPadding: (a?: any, b?: any) => any;
		getCenter: (a?: any) => any;
		addSubCollEntry: (a?: any) => any;
		getTick: (a?: any, b?: any) => any;
		update: () => any;
		contains: (a?: any, b?: any, d?: any) => any;
		intersectsWith: (a?: any, b?: any, d?: any, g?: any, h?: any, i?: any, j?: any, k?: any, l?: any) => any;
		trace: (b?: any, d?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, l?: any, o?: any) => any;
		getOverlapCenterCoords: (a?: any, b?: any) => any;
		setGroundEntry: (a?: any) => any;
		getOverlapHeight: (a?: any, b?: any, d?: any, g?: any, h?: any) => any;
		handleMovementTrace: (a?: any) => any;
	}
	class Entity extends Class {
		id: number;
		uid: number;
		mapId: number;
		settings: {[key: string]: any};
		name: any;
		coll: any;
		sprites: any;
		entityAttached: any;
		_hidden: boolean;
		_hideRequest: boolean;
		_killed: boolean;
		_wm: Config;
		constructor(a?: any, b?: any, d?: any, g?: any);
		init: (a?: any, b?: any, d?: any, g?: any) => any;
		reset: (a?: any, b?: any, d?: any, g?: any) => any;
		initSprites: () => any;
		setPos: (a?: any, b?: any, d?: any, g?: any) => any;
		setZPos: (a?: any) => any;
		setSize: (a?: any, b?: any, d?: any) => any;
		getCenter: (a?: any) => any;
		getAlignedPos: (a?: any, b?: any) => any;
		getOverlapCenterCoords: (a?: any, b?: any) => any;
		getHitDir: (a?: any, b?: any) => any;
		getCollideSide: (a?: any) => any;
		update: () => any;
		handleMovementTrace: (a?: any) => any;
		setSpriteCount: (a?: any, b?: any) => any;
		updateSprites: () => any;
		addEntityAttached: (a?: any) => any;
		removeEntityAttached: (a?: any) => any;
		clearEntityAttached: (a?: any) => any;
		show: () => any;
		hide: () => any;
		onHideRequest: any;
		kill: (a?: any) => any;
		onKill: () => any;
		erase: () => any;
		getOverlappingEntities: (a?: any) => any;
		setSlipThrough: (a?: any) => any;
		distanceTo: (a?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
		check: () => any;
		collideWith: () => any;
		animationEnded: () => any;
		onFallFromEdge: any;
		onTouchGround: any;
	}
	class AnimatedEntity extends Entity {
		animSheet: any;
		animState: any;
		animSpeedFactor: number;
		currentAnim: any;
		followUpAnim: any;
		callbackOnFinish: boolean;
		_createdAnimSheet: boolean;
		constructor(a?: any, b?: any, d?: any, g?: any);
		init: (a?: any, b?: any, d?: any, g?: any) => any;
		reset: (a?: any, b?: any, d?: any, g?: any) => any;
		onKill: (a?: any) => any;
		initSprites: () => any;
		initAnimations: (a?: any) => any;
		getCurrentAnimFaceCount: () => any;
		rewindAnim: () => any;
		setCurrentAnim: (a?: any, b?: any, d?: any, g?: any, h?: any) => any;
		updateAnim: () => any;
		update: () => any;
		updateSprites: () => any;
	}
	class AnimationPartEntity extends AnimatedEntity {
		partName: any;
		owner: any;
		persistAnim: any;
		constructor(a?: any, b?: any, d?: any, g?: any);
		init: (a?: any, b?: any, d?: any, g?: any) => any;
	}
	class StepBase extends Class {
		_nextStep: any;
		_cacheIsCleared: boolean;
		branches: any;
		constructor();
		init: () => any;
		start: () => any;
		run: () => any;
		getNext: () => any;
		getJumpLabelName: any;
	}
	class EventManager extends Class {
		runningEventCalls: any;
		blockingEventCall: any;
		blockedEventCallQueue: any;
		constructor();
		init: () => any;
		callEvent: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		getBlockingEventCall: () => any;
		hasBlockingEventCallHint: (b?: any) => any;
		isInterruptible: () => any;
		update: () => any;
		clearQueue: () => any;
		clear: () => any;
		_startEventCall: (b?: any) => any;
		_endEventCall: (b?: any) => any;
	}
	class EventCall extends Class {
		runType: number;
		done: boolean;
		blocked: boolean;
		stack: any;
		eventAttached: any;
		pauseParallel: boolean;
		onStart: any;
		onEnd: any;
		callEntity: any;
		data: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		hasHint: (b?: any) => any;
		callInlineEvent: (b?: any, a?: any) => any;
		addEventAttached: (b?: any) => any;
		setDone: () => any;
		isBlocked: () => any;
		isRunning: () => any;
		performStep: (b?: any) => any;
		update: () => any;
	}
	class Event extends Class {
		name: any;
		rootStep: any;
		labeledSteps: {[key: string]: any};
		hints: any;
		constructor(b?: any);
		init: (b?: any) => any;
		addHint: (b?: any) => any;
		hasHint: (b?: any) => any;
		clearCached: () => any;
		setupInput: (b?: any) => any;
	}
	class CubeSprite extends Class {
		pos: {
			x: number;
			y: number;
			z: number;
		};
		size: {
			x: number;
			y: number;
			z: number;
		};
		shadow: {
			x: number;
			y: number;
			z: number;
			diameter: number;
			scaleY: number;
		};
		gfxOffset: {
			x: number;
			y: number;
		};
		gfxCut: {
			top: number;
			bottom: number;
			left: number;
			right: number;
		};
		tmpOffset: {
			x: number;
			y: number;
			z: number;
		};
		wallY: number;
		image: any;
		src: {
			x: number;
			y: number;
		};
		alpha: number;
		flip: {
			x: boolean;
			y: boolean;
		};
		scale: {
			x: number;
			y: number;
		};
		rotate: number;
		pivot: {
			x: number;
			y: number;
		};
		overlay: {
			color: any;
			alpha: number;
		};
		lighterOverlay: {
			color: any;
			alpha: number;
		};
		aboveZ: number;
		mergeTop: boolean;
		renderData: {[key: string]: any};
		gui: boolean;
		renderMode: any;
		alwaysRender: boolean;
		noOverlapSolving: boolean;
		constructor(b?: any);
		init: (b?: any) => any;
		clear: (b?: any) => any;
		kill: () => any;
		setPos: (b?: any, a?: any, d?: any) => any;
		setGfxOffset: (b?: any, a?: any) => any;
		setGfxCut: (b?: any, a?: any, d?: any, c?: any) => any;
		setShadow: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		setSize: (b?: any, a?: any, d?: any, c?: any) => any;
		setImageSrc: (b?: any, a?: any, d?: any) => any;
		setFlip: (b?: any, a?: any) => any;
		setPivot: (b?: any, a?: any) => any;
		setTransform: (b?: any, a?: any, d?: any) => any;
		setAlpha: (b?: any) => any;
		setOverlayColor: (b?: any, a?: any) => any;
		setLighterOverlayColor: (b?: any, a?: any) => any;
		setInvisible: () => any;
		setSizeFromEntity: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		setImageSrcFromEntity: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		setShadowFromEntity: (b?: any) => any;
		setPosFromEntity: (b?: any, a?: any, d?: any, c?: any) => any;
		centerPivot: (b?: any) => any;
		setEntityDefault: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any) => any;
		assign: (b?: any) => any;
	}
	class SpritePool extends Class {
		sprites: any;
		get: (b?: any) => any;
	}
	class Renderer2d extends Class {
		spriteSlots: any;
		guiSpriteSlots: any;
		constructor();
		init: () => any;
		prepareDraw: (a?: any, b?: any) => any;
		drawLayers: (a?: any, c?: any) => any;
		drawLight: () => any;
		drawPostLayerSprites: () => any;
		drawEntities: (b?: any) => any;
		drawAnimation: (a?: any, b?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any) => any;
		mapCleared: () => any;
	}
	class Physics extends Class {
		cellSize: number;
		collUpdateList: any;
		collOutOfScreenList: any;
		collEntryMap: any;
		_updateCount: number;
		_trackEntityTouch: boolean;
		mapCleared: () => any;
		mapLoaded: () => any;
		update: () => any;
		updateCollEntry: (a?: any, b?: any) => any;
		getEntitiesInRectangle: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any) => any;
		getEntitiesInCircle: (a?: any, b?: any, d?: any, f?: any, g?: any, h?: any, i?: any, r?: any, v?: any, q?: any, s?: any) => any;
		initTraceResult: (a?: any) => any;
		trace: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, q?: any, s?: any, u?: any, y?: any) => any;
		addCollEntry: (a?: any) => any;
		removeCollEntry: (a?: any) => any;
		addToUpdateList: (a?: any) => any;
		removeFromUpdateList: (a?: any) => any;
		addToCollMap: (a?: any) => any;
		removeFromCollMap: (a?: any) => any;
		moveEntity: (c?: any, f?: any) => any;
		moveEntityXY: (a?: any, c?: any, e?: any, f?: any, g?: any) => any;
		isGroundDanger: (a?: any) => any;
		isGroundEntityDanger: (a?: any) => any;
		groundDangerCallback: any;
		groundEntityDangerCallback: any;
		moveEntityZ: (d?: any, e?: any, f?: any) => any;
		forcePushEntry: (a?: any, b?: any, c?: any, d?: any) => any;
		updateGroundEntity: (a?: any, c?: any, d?: any, e?: any, f?: any) => any;
		updateBaseZPos: (a?: any, b?: any, c?: any, d?: any) => any;
		getBaseZPos: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		traceOnEntryMap: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, q?: any, s?: any, u?: any, y?: any) => any;
		getGroundEntry: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any) => any;
	}
	class GameState extends Class {
		game: {
			screen: {
				x: number;
				y: number;
			};
			size: {
				x: number;
				y: number;
			};
			paused: boolean;
			entities: any;
			mapEntities: any;
			shownEntities: any;
			freeEntityIds: any;
			namedEntities: {[key: string]: any};
			_deferredDetach: any;
			conditionalEntities: any;
			maps: any;
			levels: {[key: string]: any};
			maxLevel: number;
			minLevelZ: number;
			masterLevel: number;
		};
		system: {
			zoomFocus: {
				x: number;
				y: number;
			};
			zoom: number;
		};
		physics: {
			collUpdateList: any;
			collOutOfScreenList: any;
			collEntryMap: any;
		};
		physicsInitialized: boolean;
		renderer: {
			spriteSlots: any;
			guiSpriteSlots: any;
		};
		constructor();
		init: () => any;
		clear: () => any;
		initEmpty: (b?: any, a?: any) => any;
		initFromGame: (b?: any) => any;
		forceUpdate: () => any;
		forceDraw: (b?: any, a?: any) => any;
		onEnd: (b?: any) => any;
		onStart: (b?: any) => any;
	}
	class Map extends Class {
		tilesize: number;
		width: number;
		height: number;
		data: any;
		zHeight: number;
		zTileOff: number;
		moveSpeed: {
			x: number;
			y: number;
		};
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		copy: (a?: any) => any;
		clear: () => any;
		getTile: (a?: any, b?: any) => any;
		getGridTile: (a?: any, b?: any) => any;
		setTile: (a?: any, b?: any, c?: any) => any;
		setGridTile: (a?: any, b?: any, c?: any) => any;
	}
	class ChunkedMap extends Map {
		scroll: {
			x: number;
			y: number;
		};
		distance: number;
		yDistance: number;
		repeat: boolean;
		enabled: boolean;
		preRender: boolean;
		screenRender: boolean;
		screenBuffer: boolean;
		preRenderedChunks: any;
		chunkSizeX: number;
		chunkSizeY: number;
		debugDraw: boolean;
		merged: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		clear: () => any;
		clearPreRenderedChunks: () => any;
		setScreenPos: (a?: any, d?: any) => any;
		setGridTile: (a?: any, b?: any, c?: any) => any;
		preRenderMapToChunks: (a?: any) => any;
		readyToDraw: () => any;
		preRenderChunk: () => any;
		preRenderScreen: () => any;
		redrawChunkTile: () => any;
		_draw: (a?: any, d?: any, c?: any, e?: any) => any;
		draw: (a?: any, b?: any, c?: any, e?: any) => any;
		drawAnimated: any;
		drawFromScreenBuffer: (a?: any, b?: any, c?: any, e?: any) => any;
		drawPreRendered: (a?: any, b?: any, c?: any, e?: any) => any;
		drawTiled: () => any;
	}
	class TileInfoList extends SingleLoadable {
		tiledata: any;
		constructor();
		init: () => any;
		loadInternal: () => any;
		onerror: () => any;
		onload: (b?: any) => any;
	}
	class TileInfo extends Class {
		animatedTiles: {[key: string]: any};
		constructor(b?: any);
		init: (b?: any) => any;
		getAnimTiles: (b?: any) => any;
	}
	class GlobalSettings extends SingleLoadable {
		cacheType: string;
		data: {[key: string]: any};
		modified: boolean;
		constructor();
		init: () => any;
		getGlobalSettingOptions: (b?: any, a?: any) => any;
		getGlobalSetting: (b?: any, a?: any, d?: any) => any;
		storeGlobalSetting: (b?: any, a?: any, d?: any, c?: any) => any;
		resolveEntitySettings: (b?: any, a?: any) => any;
		loadInternal: () => any;
		onerror: () => any;
		onload: (b?: any) => any;
	}
	class ExtensionManager extends Class {
		enabled: {[key: string]: any};
		list: any;
		listeners: {[key: string]: any};
		constructor();
		init: () => any;
		addListener: (a?: any, b?: any) => any;
		load: () => any;
		getExtensionList: () => any;
		getExtension: (a?: any) => any;
		hasExtension: (a?: any) => any;
		setExtensionEnabled: (a?: any, b?: any) => any;
		onExtensionLoaded: (a?: any) => any;
	}
	class ExtensionList extends SingleLoadable {
		extensions: {[key: string]: any};
		get: (a?: any) => any;
		loadInternal: () => any;
		loadExtensionsPHP: () => any;
		_getExtensionFolder: () => any;
		loadExtensionsNWJS: () => any;
		onDirRead: (a?: any, b?: any) => any;
		onExtensionListLoaded: (a?: any) => any;
	}
	class Extension extends JsonLoadable {
		cacheType: string;
		files: any;
		entries: any;
		name: any;
		description: any;
		getJsonPath: () => any;
		onload: (a?: any) => any;
		checkFileList: () => any;
		addFileForwarding: (a?: any) => any;
	}
	class UniformRNG extends Class {
		lastIndex: number;
		values: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		get: () => any;
	}
	class Game extends Class {
		clearColor: string;
		gravity: number;
		screen: {
			x: number;
			y: number;
		};
		soundPos: {
			x: number;
			y: number;
		};
		size: {
			x: number;
			y: number;
		};
		paused: boolean;
		mapRenderingBlocked: boolean;
		isReset: boolean;
		shadowImage: any;
		previousMap: any;
		mapName: any;
		currentLoadingResource: string;
		entities: any;
		mapEntities: any;
		shownEntities: any;
		freeEntityIds: any;
		namedEntities: {[key: string]: any};
		conditionalEntities: any;
		maps: any;
		levels: {[key: string]: any};
		maxLevel: number;
		minLevelZ: number;
		masterLevel: number;
		backgroundAnims: {[key: string]: any};
		backgroundAnimTimer: number;
		cellSize: number;
		events: EventManager;
		renderer: Renderer2d;
		physics: Physics;
		_deferredDetach: any;
		_levelToLoad: any;
		playerEntity: any;
		marker: string;
		postPlacementAction: any;
		teleporting: {
			active: boolean;
			timer: number;
			position: any;
			clearCache: boolean;
			levelData: any;
		};
		addons: {
			all: any;
			levelLoadStart: any;
			levelLoaded: any;
			teleport: any;
			preUpdate: any;
			postUpdate: any;
			deferredUpdate: any;
			preDraw: any;
			midDraw: any;
			postDraw: any;
			varsChanged: any;
			reset: any;
		};
		states: any;
		staticInstantiate: () => any;
		constructor();
		init: () => any;
		pushState: (b?: any) => any;
		popState: () => any;
		printGameAddonsString: () => any;
		printGameAddonsStringFromArray: (b?: any, a?: any) => any;
		getLevelIdx: (b?: any) => any;
		getLevelHeight: (b?: any) => any;
		getHeightFromLevelOffset: (b?: any) => any;
		getEntityByName: (b?: any) => any;
		getEntityByMapId: (b?: any) => any;
		swapNamedEntities: (b?: any, a?: any) => any;
		getEntityCount: () => any;
		getObjectMaps: (b?: any) => any;
		isMapTileEmpty: (b?: any, a?: any) => any;
		getEntitiesInRectangle: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
		getOverlapEntities: (b?: any) => any;
		getEntitiesInCircle: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any) => any;
		getEntitiesByType: (b?: any) => any;
		getEntitiesOnTop: (b?: any) => any;
		isInterruptible: () => any;
		isEventStartReady: () => any;
		isPlayerTouch: (b?: any, a?: any, d?: any) => any;
		isControlBlocked: () => any;
		getErrorData: () => any;
		onExternalMessageReceived: (b?: any, a?: any) => any;
		sendExternalMessage: (b?: any, a?: any) => any;
		setPaused: (b?: any) => any;
		spawnEntity: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		showEntity: (b?: any) => any;
		hideEntity: (b?: any) => any;
		requestEntityHide: (b?: any) => any;
		removeEntity: (b?: any) => any;
		detachEntity: (b?: any) => any;
		onVarAccess: (b?: any, a?: any) => any;
		reset: () => any;
		teleport: (b?: any, a?: any, d?: any, c?: any) => any;
		isTeleporting: () => any;
		onTeleportStart: () => any;
		onTeleportEnd: () => any;
		createPlayer: () => any;
		getVersion: () => any;
		preloadLevel: (b?: any) => any;
		clearMap: (b?: any) => any;
		loadLevel: (b?: any, a?: any) => any;
		loadingComplete: () => any;
		hasLightLayer: () => any;
		preDrawMaps: () => any;
		preDrawLevel: (b?: any, a?: any) => any;
		run: () => any;
		update: () => any;
		deferredUpdate: () => any;
		deferredMapEntityUpdate: () => any;
		draw: () => any;
		finalDraw: () => any;
		varsChanged: () => any;
		varsChangedDeferred: () => any;
		isAreaBlocked: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		isOverHole: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		traceEntity: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any) => any;
		trace: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, l?: any, o?: any) => any;
	}
	class GameAddon extends Class {
		levelLoadStartOrder: number;
		levelLoadedOrder: number;
		teleportOrder: number;
		preUpdateOrder: number;
		postUpdateOrder: number;
		deferredUpdateOrder: number;
		preDrawOrder: number;
		midDrawOrder: number;
		postDrawOrder: number;
		resetOrder: number;
		varsChangedOrder: number;
		name: string;
		onLevelLoadStart: any;
		onLevelLoaded: any;
		onTeleport: any;
		onPreUpdate: any;
		onPostUpdate: any;
		onDeferredUpdate: any;
		onPreDraw: any;
		onMidDraw: any;
		onPostDraw: any;
		onReset: any;
		onVarsChanged: any;
		constructor(b?: any);
		init: (b?: any) => any;
	}
	class TeleportPosition extends Class {
		pos: any;
		face: any;
		marker: any;
		level: number;
		baseZPos: number;
		size: {
			x: number;
			y: number;
		};
		constructor(b?: any);
		init: (b?: any) => any;
		setFromData: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		setFromJson: (b?: any) => any;
		getJson: () => any;
	}
	class Database extends SingleLoadable {
		cacheType: string;
		data: any;
		entries: {[key: string]: any};
		constructor();
		init: () => any;
		register: (b?: any, a?: any, d?: any, c?: any) => any;
		get: (b?: any) => any;
		loadInternal: () => any;
		onerror: (b?: any) => any;
		onload: (b?: any) => any;
	}
	class GamepadManager extends GameAddon {
		gamepads: {[key: string]: any};
		activeGamepads: any;
		handlers: any;
		constructor();
		init: () => any;
		preUpdateOrder: number;
		onPreUpdate: () => any;
		deferredUpdateOrder: number;
		onDeferredUpdate: () => any;
		isButtonPressed: (a?: any) => any;
		isButtonReleased: (a?: any) => any;
		isButtonDown: (a?: any) => any;
		getButtonValue: (a?: any) => any;
		getAxesValue: (a?: any, b?: any) => any;
		isAxesDown: (a?: any) => any;
		isLeftStickDown: () => any;
		isRightStickDown: () => any;
		isSupported: () => any;
	}
	class Gamepad extends Class {
		buttonDeadzones: any;
		axesDeadzones: any;
		buttonStates: any;
		axesStates: any;
		pressedStates: any;
		releasedStates: any;
		constructor();
		init: () => any;
		updateButton: (a?: any, b?: any) => any;
		updateAxes: (a?: any, b?: any) => any;
	}
	class Html5GamepadHandler extends Class {
		constructor();
		init: () => any;
		update: (d?: any) => any;
	}
	class NWFGamepadHandler extends Class {
		mainGamepad: any;
		constructor();
		init: () => any;
		update: (a?: any) => any;
	}
	class Action extends Class {
		name: string;
		rootStep: any;
		labeledSteps: {[key: string]: any};
		eventAction: boolean;
		parallelMove: boolean;
		repeating: boolean;
		hint: any;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		clearCached: () => any;
		inlineStart: (b?: any, a?: any) => any;
		run: (b?: any) => any;
	}
	class ActorConfig extends Class {
		empty: boolean;
		data: {[key: string]: any};
		original: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		get: (a?: any) => any;
		overwrite: (a?: any, b?: any) => any;
		clearOverwrite: () => any;
		loadFromConfig: (a?: any) => any;
		loadFromData: (a?: any, b?: any) => any;
		loadFromEntity: (a?: any) => any;
		apply: (a?: any) => any;
	}
	class ActorEntity extends AnimatedEntity {
		animSheet: {
			anims: {[key: string]: any};
		};
		face: any;
		currentAnim: any;
		followUpAnim: any;
		faceDirFixed: boolean;
		forceFaceDirFixed: boolean;
		animationFixed: boolean;
		floatHeightOnMove: number;
		fly: {
			height: number;
			minHeight: number;
			lastZ: number;
			keepHeight: boolean;
			blocked: boolean;
		};
		walkAnimsName: any;
		walkAnims: {
			idle: any;
			preMove: any;
			move: any;
			moveRev: any;
			moveLeft: any;
			run: any;
			runRev: any;
			runLeft: any;
			brake: any;
			preIdle: any;
			jump: any;
			fall: any;
			hover: any;
			preHoverMove: any;
			hoverMove: any;
			hoverMoveRev: any;
			land: any;
		};
		storedWalkAnims: {
			none: {[key: string]: any};
		};
		currentAction: any;
		currentActionStep: any;
		stepTimer: number;
		stepSync: number;
		stepData: {[key: string]: any};
		keepStateAfterAction: boolean;
		inlineActionStack: any;
		stashed: {
			action: any;
			step: number;
			timer: number;
			data: any;
		};
		defaultConfig: ActorConfig;
		jumpingEnabled: boolean;
		jumping: boolean;
		floatJump: number;
		preJumpStats: {
			maxVel: number;
			accelSpeed: number;
			zGravityFactor: number;
		};
		actionAttached: any;
		attributes: {[key: string]: any};
		faceToTarget: {
			active: boolean;
			offset: number;
			speed: number;
		};
		constructor(a?: any, b?: any, d?: any, g?: any);
		init: (a?: any, b?: any, d?: any, g?: any) => any;
		onKill: (a?: any) => any;
		initAnimations: (a?: any) => any;
		hasAction: () => any;
		setDefaultConfig: (a?: any) => any;
		setAttribute: (a?: any, b?: any) => any;
		getAttribute: (a?: any) => any;
		getAttribVec2: (a?: any) => any;
		getAttribVec3: (a?: any) => any;
		getAttribString: (a?: any) => any;
		getAttribCondition: (a?: any) => any;
		setFace: (a?: any) => any;
		getTarget: () => any;
		getFaceOffset: () => any;
		setAction: (a?: any, b?: any, d?: any) => any;
		forceExecuteAction: () => any;
		cancelAction: (a?: any) => any;
		pushInlineAction: (a?: any, b?: any, d?: any) => any;
		popInlineAction: () => any;
		stashAction: (a?: any) => any;
		hasStashedAction: () => any;
		clearStashedAction: () => any;
		resumeStashedAction: (a?: any) => any;
		cancelJump: () => any;
		addActionAttached: (a?: any) => any;
		removeActionAttached: (a?: any) => any;
		clearActionAttached: (a?: any, b?: any) => any;
		setWalkAnims: (a?: any) => any;
		storeWalkAnims: (a?: any, b?: any) => any;
		update: () => any;
		_checkForUpwardJump: () => any;
		onTouchGround: () => any;
		_savePreJumpStats: () => any;
		_loadPreJumpStats: () => any;
		doJump: (a?: any, b?: any, d?: any, g?: any, h?: any) => any;
		doFloatJump: (a?: any, b?: any, d?: any) => any;
		onFallFromEdge: (a?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
		onJump: () => any;
	}
	class EntityHideManager extends Class {
		hideCondition: any;
		hideTimer: number;
		hidden: boolean;
		efficientMode: boolean;
		constructor(a?: any);
		init: (a?: any) => any;
		update: (a?: any) => any;
		isBusy: () => any;
		varsChanged: (a?: any) => any;
	}
	class SaveSlot extends Class {
		src: any;
		data: any;
		constructor(a?: any);
		init: (a?: any) => any;
		getData: () => any;
		getSrc: () => any;
		mergeData: (a?: any) => any;
	}
	class StorageData extends Class {
		loaded: boolean;
		data: any;
		saveDataStack: any;
		path: any;
		cacheType: string;
		ioState: any;
		loadPathStack: any;
		constructor(a?: any);
		init: (a?: any) => any;
		load: (a?: any) => any;
		_loadFromList: () => any;
		_loadResponse: (a?: any, b?: any) => any;
		save: (a?: any) => any;
		_saveToFile: () => any;
		_doIoStep: (a?: any) => any;
		_saveResponse: (b?: any) => any;
		_resolveSave: () => any;
		_getSaveFilePathList: () => any;
		_loadStorageFromData: (a?: any) => any;
		getData: () => any;
	}
	class Storage extends GameAddon {
		mapSaveEnabled: boolean;
		resetAfterTeleport: boolean;
		slot: number;
		slots: any;
		autoSlot: any;
		lastUsedSlot: any;
		listeners: any;
		saveObject: {[key: string]: any};
		globalData: {[key: string]: any};
		checkPointSave: {[key: string]: any};
		data: StorageData;
		currentLoadFile: any;
		checkpointCondCallback: any;
		autoSaveCondCallback: any;
		loadHint: any;
		constructor();
		init: () => any;
		setAutoSaveCondCallback: (a?: any) => any;
		setCheckpointCondCallback: (a?: any) => any;
		register: (a?: any) => any;
		saveCheckpoint: (a?: any, b?: any, c?: any) => any;
		getLastSlotData: (a?: any) => any;
		getAutoSlotData: (a?: any) => any;
		hasSaves: () => any;
		getSlotData: (a?: any, b?: any) => any;
		pushSlotData: (a?: any) => any;
		saveAutoSlot: (a?: any) => any;
		save: (a?: any) => any;
		_saveToStorage: () => any;
		_saveState: (a?: any, b?: any, c?: any) => any;
		saveGlobals: () => any;
		loadSlot: (a?: any, b?: any) => any;
		deleteSlot: (a?: any) => any;
		loadCheckpoint: () => any;
		_isEncrypted: (a?: any) => any;
		_encrypt: (a?: any, b?: any) => any;
		_decrypt: (a?: any, b?: any) => any;
		_createCopyTeleportPosition: (a?: any) => any;
		onLevelLoadStart: (a?: any) => any;
		levelLoadedOrder: any;
		onLevelLoaded: () => any;
		onTeleport: (a?: any, b?: any, c?: any) => any;
		getSlot: (a?: any) => any;
		hasSaveSlotData: (a?: any) => any;
		hasSlots: () => any;
	}
	class BgmTrack extends Class {
		name: any;
		track: any;
		constructor(a?: any);
		init: (a?: any) => any;
		get: () => any;
		clearCached: () => any;
		copy: () => any;
	}
	class BgmTrackSet extends Class {
		name: any;
		entries: any;
		constructor(a?: any);
		init: (a?: any) => any;
		get: (a?: any) => any;
		clearCached: () => any;
		copy: () => any;
	}
	class Bgm extends GameAddon {
		defaultTrackSet: any;
		defaultTrackTypeStack: any;
		trackStack: any;
		overloadDefault: boolean;
		defaultMode: string;
		mapDefaultTrackSet: any;
		delayedResume: number;
		pauseAutoResumeBlock: boolean;
		resumeOnChange: any;
		constructor();
		init: () => any;
		loadTrack: (a?: any) => any;
		loadTrackSet: (a?: any) => any;
		setDefault: (a?: any, b?: any, c?: any) => any;
		isPlayingDefault: () => any;
		getDefaultTrackTypeCount: () => any;
		hasDefaultTrackType: (a?: any) => any;
		pushDefaultTrackType: (a?: any, b?: any) => any;
		popDefaultTrackType: (a?: any) => any;
		setResumeOnChange: (a?: any) => any;
		clearResumeOnChange: () => any;
		resumeDefault: (a?: any) => any;
		play: (a?: any, b?: any, c?: any) => any;
		push: (a?: any, b?: any, c?: any) => any;
		pop: (a?: any) => any;
		clear: (a?: any) => any;
		inbetween: (a?: any, b?: any, c?: any) => any;
		pause: (a?: any) => any;
		resume: (a?: any) => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
		onStoragePostLoad: (a?: any) => any;
		levelLoadStartOrder: number;
		onLevelLoadStart: (a?: any) => any;
		levelLoadedOrder: number;
		onLevelLoaded: () => any;
		onReset: () => any;
		onDeferredUpdate: () => any;
		_getModeData: (a?: any) => any;
		_getDefaultTrackEntry: () => any;
	}
	class EventSheet extends JsonLoadable {
		cacheType: string;
		events: {[key: string]: any};
		onCacheCleared: () => any;
		getJsonPath: () => any;
		onload: (b?: any) => any;
		getEvent: (b?: any) => any;
	}
	class Camera extends GameAddon {
		targets: any;
		namedTargets: {[key: string]: any};
		_currentPos: any;
		_currentZ: number;
		_currentZoom: number;
		_currentZoomPos: any;
		_zSlow: boolean;
		_lastPos: any;
		_lastZoom: number;
		_lastZoomPos: any;
		_duration: number;
		_time: number;
		_transitionFunction: any;
		_cameraInBounds: boolean;
		constructor();
		init: () => any;
		postUpdateOrder: number;
		onPostUpdate: () => any;
		levelLoadStartOrder: number;
		onLevelLoadStart: (a?: any) => any;
		pushTarget: (a?: any, b?: any, c?: any, d?: any) => any;
		removeNamedTarget: (a?: any, b?: any, c?: any) => any;
		removeTarget: (a?: any, b?: any, c?: any) => any;
		popTarget: (a?: any, b?: any) => any;
		replaceTarget: (a?: any, b?: any, c?: any, d?: any) => any;
		getTargetCount: () => any;
		isTargetReached: () => any;
		retarget: (a?: any, b?: any) => any;
		isActiveTarget: (a?: any) => any;
		getTimeUntilTargetReached: () => any;
		_limitPos: (a?: any, b?: any, c?: any) => any;
		_applyFinalState: () => any;
		_saveLastPos: () => any;
		_getNewZoom: () => any;
		_getNewPos: (a?: any, b?: any, c?: any) => any;
		_getDuration: (b?: any) => any;
	}
	class Rumble extends GameAddon {
		rumbles: any;
		namedRumbles: {[key: string]: any};
		offset: any;
		constructor();
		init: () => any;
		postUpdateOrder: number;
		onPostUpdate: () => any;
		onReset: () => any;
		addRumble: (b?: any) => any;
		removeRumble: (b?: any) => any;
		getRumble: (b?: any) => any;
	}
	class ParticleHandle extends Class {
		entity: any;
		syncFace: boolean;
		timer: number;
		maxTime: number;
		postAnimTime: number;
		pData: any;
		particleState: any;
		startAngle: number;
		angleSync: any;
		flipX: number;
		moveWithTarget: number;
		cancelable: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		cancel: () => any;
		setData: (a?: any) => any;
		onUpdate: () => any;
		initSprite: (a?: any) => any;
		updateSprite: (a?: any) => any;
		initAnimState: (a?: any) => any;
		updateAnimState: (a?: any) => any;
		initAnimations: (a?: any) => any;
	}
	class EffectConfig extends Config {
		constructor(c?: any);
		init: (c?: any) => any;
	}
	class ParticleState extends Class {
		alpha: any;
		scale: any;
		rotate: any;
		constructor(a?: any);
		init: (a?: any) => any;
		_convertEntry: (a?: any, b?: any) => any;
		getMaxEndTime: (a?: any) => any;
		getAlpha: (a?: any, b?: any, c?: any) => any;
		getScale: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
		getRotate: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
		initAnimState: (a?: any, b?: any, c?: any) => any;
		updateAnimState: (a?: any, b?: any, c?: any, h?: any, i?: any, j?: any, k?: any) => any;
		initSprite: (a?: any, b?: any, c?: any) => any;
		updateSprite: (a?: any, b?: any, c?: any, d?: any, i?: any, j?: any, k?: any) => any;
		_getEntryWeight: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	class EffectSheet extends JsonLoadable {
		cacheType: string;
		animSheet: any;
		faceAnimSheet: any;
		effects: {[key: string]: any};
		onCacheCleared: () => any;
		getJsonPath: () => any;
		onload: (a?: any) => any;
		hasEffect: (a?: any) => any;
		spawnOnTarget: (a?: any, b?: any, c?: any) => any;
		spawnFixed: (a?: any, b?: any, c?: any, d?: any, i?: any, j?: any) => any;
	}
	class Effect extends Class {
		id: any;
		steps: any;
		loopStartIdx: number;
		loopStartTime: number;
		loopEndIdx: any;
		loopEndTime: any;
		maxTime: number;
		constructor(a?: any, b?: any, d?: any);
		init: (a?: any, b?: any, d?: any) => any;
		clearCached: () => any;
		update: (a?: any) => any;
		isEnding: (a?: any) => any;
		isDone: (a?: any) => any;
		getRemainingTime: (a?: any) => any;
	}
	class EffectStepBase extends Class {
		time: number;
		start: () => any;
		getDuration: () => any;
	}
	class EffectHandle extends Class {
		effectSheet: any;
		name: any;
		externalSheet: boolean;
		constructor(a?: any);
		init: (a?: any) => any;
		clearCached: () => any;
		spawnOnTarget: (a?: any, b?: any) => any;
		spawnFixed: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
	}
	class EffectTimeRunner extends Class {
		step: any;
		data: any;
		duration: number;
		_timer: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: (a?: any) => any;
		cancel: (a?: any, b?: any) => any;
	}
	class EffectParticleRunner extends Class {
		step: any;
		data: any;
		totalParticles: number;
		currentParticle: number;
		duration: number;
		_timer: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: (a?: any) => any;
		cancel: (a?: any) => any;
	}
	class SlowMotion extends GameAddon {
		slowMotions: any;
		namedSlowMotions: {[key: string]: any};
		constructor();
		init: () => any;
		forceUpdate: () => any;
		update: () => any;
		hasSlowMotion: (b?: any) => any;
		getNonInvertSlowDown: () => any;
		postUpdateOrder: number;
		onPostUpdate: () => any;
		onLevelLoadStart: () => any;
		onReset: () => any;
		add: (b?: any, a?: any, d?: any) => any;
		clearNamed: (b?: any, a?: any) => any;
	}
	class SlowMotionHandle extends Class {
		factor: number;
		transitionTime: number;
		name: any;
		timer: number;
		cleared: boolean;
		inverers: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		clear: (b?: any) => any;
		update: () => any;
		addInverseEntity: (b?: any) => any;
		getFactor: () => any;
		onActionEndDetach: () => any;
	}
	class Gui extends GameAddon {
		guiHooks: any;
		namedGuiElements: {[key: string]: any};
		screenBlocked: boolean;
		renderer: i;
		mouseListenerHooks: any;
		controlModule: any;
		constructor();
		init: () => any;
		setControlModule: (a?: any) => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
		deferredUpdateOrder: number;
		onDeferredUpdate: () => any;
		postDrawOrder: number;
		onPostDraw: () => any;
		onVarsChanged: () => any;
		onReset: () => any;
		logGUIArray: () => any;
		createEventGui: (a?: any, b?: any, c?: any, d?: any) => any;
		spawnEventGui: (a?: any) => any;
		freeEventGui: (a?: any) => any;
		addGuiElement: (a?: any) => any;
		sortGui: () => any;
		removeGuiElement: (a?: any) => any;
		_updateGuiMouse: () => any;
		_updateRecursive: (b?: any, c?: any, f?: any, g?: any, h?: any, i?: any, k?: any, q?: any, s?: any, u?: any, y?: any) => any;
		_drawRecursive: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		_addMouseListenerHook: (a?: any) => any;
		_removeMouseListenerHook: (a?: any) => any;
	}
	class GuiHook extends Class {
		pos: any;
		size: {
			x: number;
			y: number;
		};
		pivot: {
			x: number;
			y: number;
		};
		scroll: {
			x: number;
			y: number;
		};
		align: {
			x: any;
			y: any;
		};
		parentHook: any;
		children: any;
		mouseRecord: boolean;
		screenCoords: any;
		mouseOver: boolean;
		localAlpha: number;
		zIndex: number;
		pauseGui: boolean;
		invisibleUpdate: boolean;
		screenBlocking: boolean;
		stateCallback: any;
		clip: boolean;
		temporary: boolean;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		gui: any;
		currentState: {
			offsetX: number;
			offsetY: number;
			alpha: number;
			scaleX: number;
			scaleY: number;
			angle: number;
		};
		currentStateName: string;
		anim: {
			targetState: any;
			initState: any;
			timer: number;
			maxTime: number;
			timeFunction: any;
		};
		removeAfterTransition: boolean;
		posTransition: any;
		scrollTransition: any;
		_visible: boolean;
		_subState: {
			subtreeTransition: boolean;
		};
		mapGuiInfo: any;
		drawSteps: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setMouseRecord: (a?: any) => any;
		onAttach: (a?: any) => any;
		onDetach: () => any;
		getChildGuiIndex: (a?: any) => any;
		getChildGuiByIndex: (a?: any) => any;
		addChildHook: (a?: any) => any;
		insertChildHook: (a?: any, b?: any) => any;
		removeChildHook: (a?: any) => any;
		removeChildHookByIndex: (a?: any) => any;
		removeAllChildren: () => any;
		doStateTransition: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		getStateTransitionProgress: () => any;
		doTempStateTransition: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		setScale: (a?: any, b?: any) => any;
		_setStateData: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		doPosTranstition: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		doScrollTransition: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		hasTransition: () => any;
		getTransitionFactor: () => any;
		setStateValue: (a?: any, b?: any, c?: any) => any;
		updateState: () => any;
	}
	class GuiDrawable extends Class {
		pos: {
			x: number;
			y: number;
		};
		size: {
			x: number;
			y: number;
		};
		src: {
			x: number;
			y: number;
		};
		gfxSource: any;
		gfxType: number;
		flip: {
			x: boolean;
			y: boolean;
		};
		alpha: number;
		compositionMode: string;
		setPos: (a?: any, b?: any) => any;
		setSize: (a?: any, b?: any) => any;
		setSrc: (a?: any, b?: any) => any;
		setAlpha: (a?: any) => any;
		setColor: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		setCompositionMode: (a?: any) => any;
		setGfx: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any) => any;
		setGfxTile: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any) => any;
		setVideo: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		setGameStateDraw: (a?: any, b?: any, c?: any) => any;
		setPattern: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		setText: (a?: any, b?: any, c?: any) => any;
		draw: (a?: any, b?: any) => any;
		kill: () => any;
		clear: () => any;
	}
	class GuiTransform extends Class {
		translate: {
			x: number;
			y: number;
		};
		scale: {
			x: number;
			y: number;
		};
		rotate: number;
		pivot: {
			x: number;
			y: number;
		};
		alpha: number;
		clip: {
			x: number;
			y: number;
		};
		prePos: {
			x: number;
			y: number;
		};
		preAlpha: number;
		setAlpha: (a?: any) => any;
		setClip: (a?: any, b?: any) => any;
		setTranslate: (a?: any, b?: any) => any;
		setScale: (a?: any, b?: any) => any;
		setRotate: (a?: any) => any;
		setPivot: (a?: any, b?: any) => any;
		isComplex: () => any;
		transform: (a?: any, b?: any) => any;
		kill: () => any;
		clear: () => any;
	}
	class GuiStepPool extends Class {
		get: (a?: any) => any;
		free: (a?: any) => any;
	}
	class GuiElementBase extends Class {
		hook: any;
		constructor();
		init: () => any;
		setPos: (a?: any, b?: any) => any;
		getDestPos: () => any;
		setScroll: (a?: any, b?: any) => any;
		getDestScroll: () => any;
		setSize: (a?: any, b?: any) => any;
		setPivot: (a?: any, b?: any) => any;
		setAlign: (a?: any, b?: any) => any;
		isVisible: () => any;
		getChildGuiIndex: (a?: any) => any;
		getChildGuiByIndex: (a?: any) => any;
		addChildGui: (a?: any) => any;
		insertChildGui: (a?: any, b?: any) => any;
		removeChildGui: (a?: any) => any;
		removeChildGuiByIndex: (a?: any) => any;
		removeAllChildren: () => any;
		update: () => any;
		updateDrawables: () => any;
		remove: (a?: any) => any;
		onAttach: any;
		onDetach: any;
		onVisibilityChange: any;
		isMouseOver: any;
		hide: () => any;
		show: () => any;
		doStateTransition: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		doTempStateTransition: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		doPosTranstition: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		doScrollTransition: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		hasTransition: () => any;
		getTransitionFactor: () => any;
		setStateValue: (a?: any, b?: any, c?: any) => any;
	}
	class GuiImageContainer extends GuiElementBase {
		constructor(b?: any);
		init: (b?: any) => any;
	}
	class GuiImage extends GameAddon {
		guiImages: {[key: string]: any};
		containerBelowGui: any;
		containerOverGui: any;
		constructor();
		init: () => any;
		showImage: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		moveImage: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		removeImage: (b?: any) => any;
		_createGuiState: (b?: any) => any;
		onStorageSave: () => any;
		onStoragePreLoad: () => any;
		onReset: () => any;
	}
	class NinePatch extends Class {
		tile: {
			width: number;
			height: number;
			top: number;
			bottom: number;
			left: number;
			right: number;
			offsets: {
				default: {
					x: number;
					y: number;
				};
			};
		};
		skipTile: {[key: string]: any};
		pattern: {[key: string]: any};
		gfx: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		initPattern: () => any;
		draw: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		drawComposite: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
	}
	class BoxGui extends GuiElementBase {
		gfx: {[key: string]: any};
		ninepatch: any;
		currentTileOffset: string;
		skipTile: {[key: string]: any};
		flipped: boolean;
		flippedY: boolean;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		setSize: (b?: any, a?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class LightHandle extends Class {
		targetEntity: any;
		lastPos: any;
		size: any;
		fadeIn: number;
		fadeOut: number;
		duration: number;
		maxAlpha: number;
		glow: boolean;
		timer: number;
		offset: any;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
		setOffset: (a?: any, b?: any, c?: any) => any;
		onActionEndDetach: () => any;
		onEntityKillDetach: () => any;
		stop: () => any;
		update: () => any;
		draw: (a?: any, d?: any) => any;
	}
	class DarknessHandle extends Class {
		useActualTick: boolean;
		timer: number;
		temporary: boolean;
		entity: any;
		duration: number;
		fadeIn: number;
		fadeOut: number;
		oldIntensity: number;
		targetIntensity: number;
		constructor(a?: any);
		init: (a?: any) => any;
		setIntensity: (a?: any, b?: any) => any;
		setTemporary: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		onActionEndDetach: () => any;
		onEntityKillDetach: () => any;
		stop: () => any;
		update: () => any;
		getIntensity: () => any;
	}
	class ScreenFlashHandle extends Class {
		targetEntity: any;
		fadeIn: number;
		fadeOut: number;
		duration: number;
		color: any;
		timer: number;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		onActionEndDetach: () => any;
		onEntityKillDetach: () => any;
		stop: () => any;
		update: () => any;
		draw: () => any;
	}
	class GlowColor extends Cacheable {
		cacheType: string;
		canvas: any;
		gfx: any;
		constructor(a?: any);
		init: (a?: any) => any;
		getCacheKey: (a?: any) => any;
		onCacheCleared: () => any;
	}
	class CondLights extends Class {
		condition: any;
		lights: any;
		hasLight: boolean;
		hasGlow: boolean;
		isOn: boolean;
		timer: number;
		constructor(a?: any);
		init: (a?: any) => any;
		addLight: (a?: any, b?: any, c?: any, e?: any) => any;
		update: () => any;
		getAlpha: () => any;
		drawGlow: () => any;
		drawLight: () => any;
		_draw: (a?: any) => any;
	}
	class Light extends GameAddon {
		lightCanvas: any;
		lightContext: any;
		shadowProviders: any;
		lightHandles: any;
		darknessHandles: any;
		screenFlashHandles: any;
		hasShadow: boolean;
		lightMapDarkness: number;
		lightMapBrightness: number;
		lightmapGfx: Image;
		mainGlowColor: boolean;
		condLights: {[key: string]: any};
		condLightList: any;
		constructor();
		init: () => any;
		setMainGlowColor: (a?: any) => any;
		getMainGlowGfx: () => any;
		addDarknessHandle: (a?: any) => any;
		removeDarknessHandle: (a?: any) => any;
		addScreenFlashHandle: (a?: any) => any;
		removeScreenFlashHandle: (a?: any) => any;
		addCondLight: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		addLightHandle: (a?: any) => any;
		addShadowProvider: (a?: any) => any;
		removeShadowProvider: (a?: any) => any;
		levelLoadStartOrder: number;
		onLevelLoadStart: () => any;
		onDeferredUpdate: () => any;
		preDrawOrder: number;
		onPreDraw: () => any;
		midDrawOrder: number;
		onMidDraw: () => any;
	}
	class Clouds extends Class {
		gfx: Image;
		currentClouds: any;
		density: number;
		vel: any;
		cloudRange: any;
		timer: number;
		maxTime: number;
		alpha: number;
		shadowOrder: number;
		constructor();
		init: () => any;
		clearClouds: (b?: any) => any;
		setClouds: (b?: any, a?: any, d?: any, c?: any) => any;
		spawnCloudLine: (b?: any) => any;
		addCloud: (b?: any, a?: any, d?: any) => any;
		moveClouds: (b?: any, a?: any, d?: any, c?: any) => any;
		update: () => any;
		drawShadows: () => any;
	}
	class Fog extends Class {
		patterns: ImagePatternSheet;
		vel: any;
		scroll: any;
		alpha: number;
		prevAlpha: number;
		timer: number;
		shadowOrder: number;
		zoom: number;
		constructor();
		init: () => any;
		clearFog: (a?: any) => any;
		setFog: (a?: any, b?: any, c?: any, e?: any) => any;
		update: () => any;
		drawShadows: () => any;
	}
	class RainDropEntity extends AnimatedEntity {
		animSheet: AnimationSheet;
		constructor(a?: any, b?: any, e?: any, f?: any);
		init: (a?: any, b?: any, e?: any, f?: any) => any;
		reset: (a?: any, b?: any, e?: any, f?: any) => any;
		_initRainDrop: () => any;
		animationEnded: () => any;
	}
	class Rain extends Class {
		gfx: ImagePatternSheet;
		strength: any;
		entries: any;
		timer: number;
		dropTimer: number;
		updateSound: number;
		currentSound: any;
		soundHandle: any;
		constructor();
		init: () => any;
		setRain: (a?: any, b?: any) => any;
		clearRain: (a?: any) => any;
		onReset: () => any;
		update: () => any;
		spawnRain: () => any;
		spawnRainDrop: () => any;
		moveRain: () => any;
		draw: () => any;
	}
	class WeatherInstance extends Cacheable {
		cacheType: string;
		name: any;
		config: any;
		particleSpawners: any;
		constructor(b?: any);
		init: (b?: any) => any;
		getCacheKey: (b?: any) => any;
		onCacheCleared: () => any;
	}
	class Weather extends GameAddon {
		levelWeather: any;
		currentWeather: WeatherInstance;
		clouds: Clouds;
		fog: Fog;
		rain: Rain;
		darknessHandle: any;
		outside: boolean;
		lightMapDarkness: {
			last: number;
			target: number;
			timer: number;
		};
		subOverlay: any;
		lightMapBrightness: {
			last: number;
			target: number;
			timer: number;
		};
		extraParticles: any;
		constructor();
		init: () => any;
		setWeather: (b?: any, a?: any) => any;
		addExtraParticles: (b?: any, a?: any) => any;
		removeExtraParticles: (b?: any, a?: any) => any;
		levelLoadStartOrder: number;
		onLevelLoadStart: (b?: any) => any;
		levelLoadedOrder: number;
		onLevelLoaded: () => any;
		deferredUpdateOrder: number;
		onDeferredUpdate: () => any;
		midDrawOrder: number;
		onMidDraw: () => any;
		onReset: () => any;
		updateWeather: (b?: any) => any;
		restoreParticles: (b?: any) => any;
	}
	class PathNode extends Class {
		id: number;
		height: number;
		min: any;
		max: any;
		center: any;
		neighbours: any;
		airNeighbours: any;
		airNode: boolean;
		airConnected: boolean;
		edges: {
			north: any;
			east: any;
			south: any;
			west: any;
			down: any;
			up: any;
			upStairs: any;
			block: any;
			airBlock: any;
		};
		tmpSearchId: number;
		tmpCameFromNode: any;
		tmpCameFromPos: any;
		tmpCameFromNeighbour: any;
		tmpClosed: boolean;
		tmpGScore: number;
		tmpFScore: number;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
		erase: (a?: any, b?: any, d?: any, f?: any) => any;
		isClosed: (a?: any) => any;
		setClosed: (a?: any, b?: any) => any;
		getCameFromNode: (a?: any) => any;
		getCameFromNeighbour: (a?: any) => any;
		getCameFromPos: (a?: any) => any;
		setCameFrom: (a?: any, b?: any, c?: any, e?: any) => any;
		getGScore: (a?: any) => any;
		setGScore: (a?: any, b?: any) => any;
		getFScore: (a?: any) => any;
		setFScore: (a?: any, b?: any) => any;
		hasGScore: () => any;
	}
	class PathNodeConnect extends Class {
		edges: any;
		waypointMin: any;
		waypointMax: any;
		maxEdgeLength: number;
		type: number;
		jumpInfo: any;
		reverse: any;
		externalData: {[key: string]: any};
		searchData: {
			idx: number;
			pos: any;
			fromEdge: any;
			fromNode: any;
			toNode: any;
			gScore: any;
			fScore: any;
			closed: boolean;
		};
		constructor(a?: any);
		init: (a?: any) => any;
		getSearchData: (a?: any) => any;
		setExternalData: (a?: any, b?: any) => any;
	}
	class Navigation extends GameAddon {
		tilesize: any;
		dodgeEntities: any;
		cachedFailure: {[key: string]: any};
		mapVersion: number;
		empty: boolean;
		influencers: any;
		constructor();
		init: () => any;
		isTargetReachable: (a?: any, b?: any, d?: any, e?: any) => any;
		isPathAvailable: (a?: any, b?: any) => any;
		isEntityReached: (a?: any, b?: any) => any;
		isPointReached: (b?: any, d?: any) => any;
		getClosePosition: (b?: any, d?: any, e?: any, f?: any, h?: any, i?: any, j?: any, k?: any, w?: any, m?: any) => any;
		getDodgePosition: (a?: any, b?: any, e?: any, f?: any, h?: any) => any;
		clearCachedFailures: () => any;
		addCachedFailure: (a?: any, b?: any, c?: any) => any;
		isCachedFailure: (a?: any, b?: any, c?: any) => any;
		_getCacheKey: (a?: any, b?: any, c?: any) => any;
		getNavPath: (a?: any) => any;
		onLevelLoadStart: () => any;
		onLevelLoaded: () => any;
		connectAirNodes: () => any;
		getNavBlock: (a?: any) => any;
		registerInfluencer: (a?: any) => any;
		applyInfluencers: () => any;
		getNodeConnection: (b?: any, c?: any, d?: any) => any;
	}
	class NavBlocker extends Class {
		entity: any;
		pos: any;
		size: any;
		blockType: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: (a?: any) => any;
		embedInNavMap: () => any;
		removeFromNavMap: () => any;
		remove: () => any;
	}
	class NavPath extends Class {
		mapVersion: number;
		searcher: any;
		startRelativeVel: number;
		targetEntity: any;
		targetPos: any;
		retargetPos: any;
		retargetNode: any;
		maxDistance: number;
		precise: boolean;
		options: any;
		path: any;
		pathIdx: any;
		pathLength: number;
		nextNodeData: {
			startPos: any;
			endPos: any;
			jump: boolean;
			height: number;
		};
		overNodePass: boolean;
		pathComplete: boolean;
		triedNodePassChange: boolean;
		triedRandom: any;
		doBackUp: boolean;
		triedBackUp: any;
		avoidTarget: any;
		avoidTarget2: any;
		firstMovement: boolean;
		targetDir: any;
		targetDist: number;
		failCount: number;
		wrongNodeTimer: number;
		lastSideWayDir: any;
		constructor(a?: any);
		init: (a?: any) => any;
		toEntity: (a?: any, b?: any, c?: any, d?: any) => any;
		toPoint: (a?: any, b?: any, c?: any) => any;
		redoPathDeferred: () => any;
		sideways: (a?: any, b?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any) => any;
		dodge: (a?: any, b?: any, c?: any) => any;
		runAway: (a?: any, b?: any, d?: any) => any;
		runToFace: (a?: any, b?: any, e?: any, f?: any, h?: any) => any;
		_moveCircle: (a?: any, b?: any, c?: any, e?: any, f?: any, h?: any, i?: any, j?: any, k?: any) => any;
		getDistance: () => any;
		getJumpCount: () => any;
		isDestReachable: () => any;
		redoPath: (b?: any, d?: any) => any;
		interrupt: () => any;
		isCurrentNodeInvalid: () => any;
		moveEntity: () => any;
		avoidEntities: () => any;
		runPath: () => any;
		selectNextTargetPos: () => any;
	}
	class MapStyle extends GameAddon {
		currentStyle: any;
		_wmLoad: boolean;
		constructor();
		init: () => any;
		get: (b?: any) => any;
		levelLoadStartOrder: number;
		onLevelLoadStart: (b?: any) => any;
	}
	class DoorMat extends AnimatedEntity {
		dir: string;
		isActive: boolean;
		constructor(a?: any, b?: any, c?: any, e?: any);
		init: (a?: any, b?: any, c?: any, e?: any) => any;
		setActive: (a?: any) => any;
	}
	class PropSheet extends JsonLoadable {
		cacheType: string;
		props: {[key: string]: any};
		onCacheCleared: () => any;
		getJsonPath: () => any;
		onload: (b?: any) => any;
		handlePropEntry: (b?: any) => any;
		getProp: (b?: any) => any;
	}
	class ScalePropSheet extends JsonLoadable {
		cacheType: string;
		entries: {[key: string]: any};
		onCacheCleared: () => any;
		getJsonPath: () => any;
		onload: (a?: any) => any;
		getScalableProp: (a?: any) => any;
	}
	class MapImageManager extends GameAddon {
		images: {[key: string]: any};
		constructor();
		init: () => any;
		showMapImage: (b?: any, a?: any) => any;
		removeMapImage: (b?: any) => any;
	}
	class MapImageEntity extends AnimatedEntity {
		img: any;
		_wm: Config;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		remove: () => any;
		initSprites: () => any;
		updateSprites: () => any;
	}
	class OverlayGui extends GuiElementBase {
		color: any;
		lighter: boolean;
		constructor();
		init: () => any;
		updateDrawables: (b?: any) => any;
	}
	class AlphaTransitionHandler extends Class {
		timer: any;
		startAlpha: number;
		targetAlpha: number;
		blinkAlpha: any;
		constructor();
		init: () => any;
		update: () => any;
		getAlpha: () => any;
		set: (b?: any, a?: any, d?: any) => any;
	}
	class OverlayCornerGui extends GuiElementBase {
		gfx: any;
		alphaHandler: any;
		constructor(b?: any);
		init: (b?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		setAlpha: (b?: any, a?: any, d?: any) => any;
	}
	class Overlay extends GameAddon {
		colorOld: {
			r: number;
			g: number;
			b: number;
			a: number;
		};
		colorNew: {
			r: number;
			g: number;
			b: number;
			a: number;
		};
		lighter: boolean;
		timer: number;
		max: number;
		gfx: {
			WHITE: Image;
			RED: Image;
			BLACK: Image;
		};
		colorGui: any;
		cornerGui: any;
		constructor();
		init: () => any;
		deferredUpdateOrder: number;
		onDeferredUpdate: () => any;
		onReset: () => any;
		setColor: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		setAlpha: (b?: any, a?: any) => any;
		setCorner: (b?: any, a?: any, d?: any, c?: any) => any;
		_getCurrentColor: () => any;
	}
	class DreamAssets extends Class {
		shadowGfx: any;
		sideGfx: any;
		edgeGfx: any;
		dotGfx: any;
		constructor();
		init: () => any;
		clone: () => any;
		clearCached: () => any;
	}
	class DreamCircleShadowGui extends GuiElementBase {
		assets: any;
		centerColor: {
			old: RGBColor;
			new: RGBColor;
		};
		borderColor: {
			old: RGBColor;
			new: RGBColor;
		};
		colorTimer: number;
		colorDuration: number;
		circleSize: {
			old: number;
			new: number;
			timer: number;
			duration: number;
		};
		wobbleTimer: number;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		setColors: (a?: any, b?: any, c?: any) => any;
		_getCurrentColor: (a?: any, b?: any) => any;
		_getCurrentSize: () => any;
		setCircleSize: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class DreamSideGui extends GuiElementBase {
		assets: any;
		particles: any;
		spawnTimer: number;
		lastRight: boolean;
		rng: {
			left: UniformRNG;
			right: UniformRNG;
		};
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		spawnParticle: () => any;
	}
	class DreamDotGui extends GuiElementBase {
		assets: any;
		particles: any;
		spawnTimer: number;
		rng: UniformRNG;
		rotate: number;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		spawnParticle: () => any;
	}
	class DreamFx extends GameAddon {
		assets: any;
		circleShadowGui: any;
		sideGui: any;
		dotGui: any;
		constructor();
		init: () => any;
		onReset: () => any;
		start: (a?: any, b?: any) => any;
		clear: () => any;
		setColors: (a?: any, b?: any, c?: any) => any;
		setCircleSize: (a?: any, b?: any) => any;
		isActive: () => any;
	}
	class ImageGui extends GuiElementBase {
		image: any;
		offsetX: number;
		offsetY: number;
		renderMode: any;
		flipX: boolean;
		flipY: boolean;
		pivotOverride: boolean;
		frames: any;
		xCount: number;
		frameTime: number;
		timer: number;
		loop: boolean;
		stopped: boolean;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		setImage: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		setAnimation: (b?: any, a?: any, d?: any, c?: any) => any;
		restartAnimation: () => any;
		onLoadableComplete: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
	}
	class ColorGui extends GuiElementBase {
		color: any;
		renderMode: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class SequenceGui extends GuiElementBase {
		timer: any;
		timeLineIndex: number;
		gfx: any;
		gui: any;
		timeLine: any;
		reachedLabels: any;
		currentSkipLabel: any;
		constructor(b?: any);
		init: (b?: any) => any;
		initTimeLine: (b?: any, a?: any, d?: any) => any;
		update: () => any;
		_setLabelReached: (b?: any) => any;
		start: () => any;
		end: () => any;
		notifyCallback: (b?: any, a?: any) => any;
		skip: () => any;
		jumpTo: (b?: any) => any;
		hasEnded: () => any;
		isLabelReached: (b?: any) => any;
	}
	class SimpleGui extends GuiElementBase {
		hide: (b?: any, a?: any) => any;
		show: (b?: any, a?: any) => any;
	}
	class Parallax extends JsonLoadable {
		cacheType: string;
		gfx: {[key: string]: any};
		gui: {[key: string]: any};
		timeLine: any;
		cancelSkip: boolean;
		skipBlock: boolean;
		constructor(b?: any);
		init: (b?: any) => any;
		onCacheCleared: () => any;
		getJsonPath: () => any;
		onload: (b?: any) => any;
		_convertEntries: (b?: any, a?: any) => any;
		_convertSequence: (b?: any) => any;
		_copyStateValues: (b?: any, a?: any) => any;
	}
	class ParallaxGui extends SequenceGui {
		parallax: any;
		keepOnEnd: boolean;
		_wm: Config;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		clearCached: () => any;
		onLoadableComplete: () => any;
		onAttach: () => any;
		start: (b?: any) => any;
		end: () => any;
	}
	class ScreenBlur extends GameAddon {
		buffer: any;
		context: any;
		backBuffer: any;
		backContext: any;
		systemBuffer: any;
		systemContext: any;
		minAlpha: number;
		maxAlpha: number;
		repeatTimer: number;
		repeatCycle: number;
		firstDraw: boolean;
		timer: any;
		zooms: any;
		namedZooms: {[key: string]: any};
		constructor();
		init: () => any;
		setAlpha: (a?: any) => any;
		clear: () => any;
		clearZooms: () => any;
		addZoom: (a?: any) => any;
		fadeOutZoom: (a?: any, b?: any) => any;
		onPostUpdate: () => any;
		preDrawOrder: number;
		onPreDraw: () => any;
		postDrawOrder: number;
		onPostDraw: () => any;
		onReset: () => any;
		_getAlpha: () => any;
	}
	class ZoomBlurHandle extends Class {
		name: any;
		config: any;
		alphaStep: number;
		fullTimer: any;
		repeatTimer: any;
		fadeInTime: number;
		duration: number;
		fadeOutTime: number;
		target: any;
		state: number;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any, g?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any) => any;
		update: () => any;
		onActionEndDetach: () => any;
		setFadeOut: (a?: any) => any;
		draw: (a?: any, d?: any, c?: any, e?: any, f?: any) => any;
	}
	class Terrain extends SingleLoadable {
		cacheType: string;
		idToName: {[key: string]: any};
		nameToId: {[key: string]: any};
		tilesetIds: {[key: string]: any};
		dangerTerrains: any;
		fallTerrain: any;
		constructor();
		init: () => any;
		registerDangerTerrain: (a?: any, b?: any) => any;
		isDangerTerrain: (a?: any) => any;
		isFallTerrain: (a?: any) => any;
		getTerrain: (a?: any, d?: any, c?: any) => any;
		getPointTerrain: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		getMapTerrain: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		_checkMaps: (a?: any, b?: any, c?: any) => any;
		getTerrainOfMapTile: (a?: any, b?: any) => any;
		loadInternal: () => any;
		onerror: () => any;
		onload: (a?: any) => any;
	}
	class InteractEntry extends Class {
		isActive: () => any;
		onConnect: () => any;
		onDisconnect: () => any;
		update: () => any;
	}
	class InteractManager extends GameAddon {
		blockTimer: number;
		entries: any;
		constructor();
		init: () => any;
		addEntry: (b?: any) => any;
		removeEntry: (b?: any) => any;
		setBlockDelay: (b?: any) => any;
		isBlocked: () => any;
		deferredUpdateOrder: number;
		onDeferredUpdate: () => any;
	}
	class ButtonGroup extends Class {
		buttonInteract: any;
		elements: any;
		selectionCallbacks: any;
		pressCallbacks: any;
		mouseFocusLostCallback: any;
		backButton: any;
		current: {
			x: number;
			y: number;
		};
		regain: {
			x: number;
			y: number;
		};
		largestIndex: {
			x: number;
			y: number;
		};
		loopButtons: boolean;
		soundsOnPressed: boolean;
		enableMultiPressed: boolean;
		ignoreActiveFocus: boolean;
		selectionType: any;
		_lastInvokedPress: any;
		_isParallel: boolean;
		sounds: {
			focus: any;
		};
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		addFocusGui: (b?: any, a?: any, d?: any, c?: any) => any;
		fillEmptySpace: () => any;
		insertFocusGui: (b?: any, a?: any, d?: any) => any;
		removeFocusGui: (b?: any, a?: any) => any;
		addNull: (b?: any, a?: any) => any;
		makeEmptyGrid: (b?: any, a?: any) => any;
		invokeCurrentButton: () => any;
		invokeBackButton: () => any;
		setMouseFocusLostCallback: (b?: any) => any;
		addPressCallback: (b?: any) => any;
		removePressCallback: (b?: any) => any;
		addSelectionCallback: (b?: any) => any;
		removeSelectionCallback: (b?: any) => any;
		clearSelectionCallbacks: () => any;
		stepRight: () => any;
		stepLeft: () => any;
		stepDown: (b?: any) => any;
		stepUp: (b?: any) => any;
		_activate: () => any;
		_deactivate: () => any;
		clear: () => any;
		doButtonTraversal: () => any;
		getCurrentElement: () => any;
		isNonMouseMenuInput: () => any;
		isEmpty: () => any;
		isPositionValid: (b?: any, a?: any) => any;
		isActive: () => any;
		setLastInvokedButton: (b?: any) => any;
		setMouseOverGui: () => any;
		setCurrentFocus: (b?: any, a?: any) => any;
		setRegainFocus: (b?: any, a?: any) => any;
		focusCurrentButtonX: (b?: any) => any;
		focusCurrentButtonY: (b?: any) => any;
		focusCurrentButton: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		regainFocusOnKeyboard: (b?: any) => any;
		unfocusCurrentButton: () => any;
		getCurrentX: () => any;
		getCurrentY: () => any;
		setPressedFocusGui: (b?: any) => any;
		_setBackButton: (b?: any) => any;
		_invokeSelectionCallbacks: (b?: any) => any;
		_invokePressCallbacks: (b?: any, a?: any) => any;
	}
	class ButtonInteractEntry extends InteractEntry {
		buttonGroupStack: any;
		parallelGroups: any;
		globalButtons: any;
		hotkeyCallbacks: any;
		mouseOverGui: any;
		mouseOverGuiClickPre: boolean;
		mouseIsOver: boolean;
		pushButtonGroup: (b?: any) => any;
		removeButtonGroup: (b?: any) => any;
		addGlobalButton: (b?: any, a?: any, d?: any) => any;
		removeGlobalButton: (b?: any) => any;
		addParallelGroup: (b?: any) => any;
		removeParallelGroup: (b?: any) => any;
		clearAllButtons: () => any;
		pause: (b?: any) => any;
		onConnect: () => any;
		onDisconnect: () => any;
		clearMouseOverFocus: () => any;
		update: () => any;
		setMouseOverGui: (b?: any) => any;
		getTopButtonGroup: () => any;
		_invokeMouseFocusLostCallbacks: () => any;
	}
	class PressRepeater extends Class {
		currentPressed: any;
		lastPressed: any;
		timer: number;
		firstDelay: number;
		repeatDelay: number;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		setDown: (b?: any) => any;
		getPressed: () => any;
	}
	class FocusGui extends GuiElementBase {
		focus: boolean;
		buttonGroup: any;
		buttonInteract: any;
		active: boolean;
		keepPressed: boolean;
		pressed: boolean;
		keepMouseFocus: boolean;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		onMouseInteract: (b?: any) => any;
		focusGained: () => any;
		focusLost: () => any;
		invokeButtonPress: () => any;
		onButtonPress: () => any;
		canPlayFocusSounds: () => any;
		canLeaveFocus: () => any;
		setPressed: (b?: any) => any;
		setActive: (b?: any) => any;
		isSameAs: (b?: any) => any;
	}
	class EnvParticleSpawner extends Cacheable {
		cacheType: string;
		name: any;
		animSheet: any;
		config: any;
		levels: any;
		constructor(a?: any);
		init: (a?: any) => any;
		getCacheKey: (a?: any) => any;
		onCacheCleared: () => any;
		_initLevels: () => any;
		setQuantity: (a?: any, b?: any) => any;
		update: () => any;
		spawnParticle: (a?: any) => any;
		updateParticles: (b?: any, c?: any) => any;
		draw: () => any;
		drawLevel: (a?: any) => any;
	}
	class EnvParticles extends GameAddon {
		activeSpawners: any;
		width: number;
		height: number;
		constructor();
		init: () => any;
		addSpawner: (a?: any, b?: any, e?: any) => any;
		clear: (a?: any) => any;
		deferredUpdateOrder: number;
		onDeferredUpdate: () => any;
		midDrawOrder: number;
		onMidDraw: () => any;
	}
	class MapSoundEntry extends Class {
		name: any;
		loopSounds: any;
		segments: any;
		loopHandles: any;
		currentSegment: any;
		currentEntry: number;
		timer: number;
		constructor(b?: any);
		init: (b?: any) => any;
		clearCached: () => any;
		start: () => any;
		update: () => any;
		stop: () => any;
		_createSegment: (b?: any) => any;
		_selectSegment: () => any;
	}
	class MapSounds extends GameAddon {
		mapEntry: any;
		currentEntry: any;
		constructor();
		init: () => any;
		setEntry: (b?: any) => any;
		onReset: () => any;
		levelLoadStartOrder: number;
		onLevelLoadStart: (b?: any) => any;
		levelLoadedOrder: number;
		onLevelLoaded: () => any;
		deferredUpdateOrder: number;
		onDeferredUpdate: () => any;
	}
	class Video extends Loadable {
		cacheType: string;
		video: any;
		onEndCallback: any;
		_fadeTimer: number;
		_fadeMaxTime: number;
		_lastTime: number;
		_fadeHandle: any;
		constructor(a?: any);
		init: (a?: any) => any;
		loadInternal: () => any;
		onload: () => any;
		onerror: (a?: any) => any;
		play: (a?: any) => any;
		pause: () => any;
		reset: () => any;
		fadeOutAudio: (a?: any) => any;
		_fadeAudioCallback: () => any;
		draw: (a?: any, b?: any, c?: any, e?: any) => any;
		_onVideoEnded: () => any;
	}
	class VideoGui extends GuiElementBase {
		video: any;
		playing: boolean;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		play: (b?: any) => any;
		pause: () => any;
		reset: () => any;
		updateDrawables: (b?: any) => any;
	}
	class VideoPlayerGui extends GuiElementBase {
		videoGui: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		onEndCallback: any;
		screenInteract: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		start: (b?: any) => any;
		_startVideo: () => any;
		_stopVideo: () => any;
		onInteraction: () => any;
		_onEnd: () => any;
		updateDrawables: (b?: any) => any;
	}
	class Influencer extends Class {
		entity: any;
		entries: any;
		callbacks: any;
		constructor(a?: any);
		init: (a?: any) => any;
		hasPush: () => any;
		addInfluence: (a?: any) => any;
		removeInfluence: (a?: any) => any;
		removeActionInfluences: () => any;
		updateCallbacks: () => any;
		onUpdate: () => any;
		updateInfluencerState: (a?: any) => any;
		onPostSpriteUpdate: () => any;
	}
	class InfluenceEntry extends Class {
		fadeTimer: any;
		timeScale: number;
		slowmoScale: number;
		logicTimeScale: number;
		moveXYScale: number;
		groundSinkZ: number;
		updateInfluencer: any;
		state: any;
		push: any;
		constructor();
		init: () => any;
		setPushType: (a?: any, b?: any, d?: any, g?: any) => any;
		setPushEntityCenter: (a?: any) => any;
		setPushCenter: (a?: any) => any;
		getPush: (b?: any, d?: any) => any;
		setFadeOut: (a?: any) => any;
		getFactor: () => any;
	}
	class InfluenceConnection extends Class {
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		updateImmediately: () => any;
		clear: () => any;
		onActionEndDetach: () => any;
	}
	class Greenworks extends GameAddon {
		greenworks: any;
		steps: any;
		constructor();
		init: () => any;
		isActive: () => any;
		hasSteamStartArgument: () => any;
		activateAchievement: (b?: any, a?: any) => any;
		clearAchievement: (b?: any) => any;
	}
	class BurstSpawnerEntity extends Entity {
		combatant: any;
		target: any;
		attack: any;
		moveSpeed: number;
		spawnCount: number;
		spawnInterval: number;
		effect: any;
		damageDelay: number;
		radius: number;
		zHeight: number;
		steerDegree: number;
		adjustTime: number;
		timer: number;
		spawnList: any;
		isThreat: boolean;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		getCombatant: () => any;
		handleMovementTrace: (b?: any) => any;
		update: () => any;
		startSpawn: () => any;
		updateSpawn: (b?: any) => any;
	}
	class MessageOverlayGui extends GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		messageArea: any;
		privateMsgBg: any;
		topBar: any;
		bottomBar: any;
		bottomShadow: any;
		constructor();
		init: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
		onPostMenuMode: () => any;
	}
	class MessageAreaGui extends GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		clickToContinue: boolean;
		entries: {[key: string]: any};
		portraits: {[key: string]: any};
		boardMsg: any;
		leftOffEntry: any;
		rightOffEntry: any;
		messages: any;
		choiceGui: any;
		bottomShadow: any;
		PORTRAIT_GAP: number;
		MESSAGE_GAP: number;
		constructor();
		init: () => any;
		update: () => any;
		modelChanged: (a?: any, d?: any, c?: any) => any;
		onTextFinished: () => any;
		clearMessages: () => any;
		skip: () => any;
		_reorderPortraits: (a?: any) => any;
		_pushVisibleDisplayName: (a?: any) => any;
	}
	class QuickSand extends Class {
		influence: any;
		timer: number;
		teleportDelay: number;
		effects: {
			sheet: EffectSheet;
			handle: any;
		};
		constructor();
		init: () => any;
		onUpdate: (b?: any, a?: any) => any;
		endQuicksand: (b?: any, a?: any) => any;
	}
	class Spiderweb extends Class {
		influence: any;
		timer: number;
		effects: {
			sheet: EffectSheet;
			handle: any;
		};
		constructor();
		init: () => any;
		onUpdate: (b?: any, a?: any) => any;
		endSpiderweb: (b?: any, a?: any) => any;
	}
	class LangEdit extends GameAddon {
		mapEntries: any;
		recentEntries: any;
		maskVisible: boolean;
		mask: any;
		form: any;
		panels: {
			user: any;
			map: any;
			recent: any;
		};
		userName: any;
		userpassword: any;
		mapEntryList: any;
		saveLabel: any;
		errorLabel: any;
		constructor();
		init: () => any;
		submitCustomFile: (b?: any, a?: any, d?: any, c?: any) => any;
		submitMap: (b?: any, a?: any) => any;
		submitRecent: (b?: any, a?: any) => any;
		isWhatRecent: (b?: any) => any;
		toggleMask: () => any;
		showMask: () => any;
		closeMask: () => any;
		_createMask: () => any;
		_createEntryList: (b?: any) => any;
		_resetEntryList: (b?: any) => any;
		_onUserSubmit: () => any;
		_updateUserText: () => any;
		_submit: () => any;
		_saveResponse: (b?: any) => any;
		levelLoadStartOrder: any;
		onLevelLoadStart: () => any;
	}
	namespace SPRITE_FX {
		class SLIDE extends SpriteEffectBase {
			dir: any;
			start: number;
			end: number;
			keySpline: any;
			constructor(b?: any);
			init: (b?: any) => any;
			apply: (b?: any, a?: any) => any;
		}
	}
	namespace Renderer2d {
		class SpriteDrawSlot extends Class {
			cubeSprite: any;
			ground: boolean;
			yIndex: number;
			zMin: number;
			zMax: number;
			spriteIdx: number;
			drawShadow: boolean;
			constructor(a?: any, b?: any, c?: any);
			init: (a?: any, b?: any, c?: any) => any;
			update: (a?: any) => any;
			draw: (a?: any, b?: any) => any;
		}
	}
	namespace MAP {
		class Collision extends Map {
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			prepare: (a?: any, b?: any) => any;
			isTileGround: (a?: any, b?: any) => any;
			isTileAreaBlocked: (b?: any, c?: any, e?: any, f?: any) => any;
			isGridHole: (d?: any, c?: any) => any;
			isOverHole: (d?: any, c?: any, e?: any, f?: any, g?: any) => any;
			trace: (d?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any) => any;
		}
		class Background extends ChunkedMap {
			tiles: any;
			tilesetName: string;
			tileInfo: any;
			hasAnimatedTiles: boolean;
			screenRender: boolean;
			lighter: boolean;
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			clearCached: () => any;
			readyToDraw: () => any;
			checkAnimatedTiles: () => any;
			setTileset: (a?: any) => any;
			preRenderChunk: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
			preRenderScreen: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
			drawAnimated: (a?: any, d?: any, c?: any, e?: any) => any;
			redrawChunkTile: (a?: any, b?: any, c?: any, e?: any) => any;
			drawTiled: (a?: any, b?: any, c?: any, e?: any) => any;
		}
		class MovingParallax extends Background {
			_wm: Config;
			moveTimer: number;
			stopped: boolean;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			setStopped: (a?: any) => any;
			update: () => any;
			setScreenPos: (a?: any, b?: any) => any;
		}
		class Light extends ChunkedMap {
			lightmapGfx: Image;
			_wm: Config;
			lightSources: any;
			glowSources: any;
			noMerge: boolean;
			lightCanvas: any;
			shadowOrder: number;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			clear: () => any;
			preRenderChunk: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
			drawShadows: () => any;
			drawGlow: () => any;
			draw: () => any;
			drawTiled: () => any;
		}
		class HeightMap extends Map {
			_wm: Config;
			noMerge: boolean;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			draw: () => any;
			drawTiled: () => any;
		}
		class Navigation extends Map {
			nodes: any;
			freeNodeIds: any;
			initialized: boolean;
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			levelInit: (b?: any) => any;
			reparse: (b?: any, c?: any, d?: any, e?: any, f?: any) => any;
			connectAirNodes: (a?: any) => any;
			draw: (a?: any) => any;
			_getGridValue: (a?: any, b?: any, c?: any) => any;
			_setGridValue: (a?: any, b?: any, c?: any, d?: any) => any;
			_setGridFlag: (a?: any, b?: any, c?: any, d?: any) => any;
			_clearGridFlag: (a?: any, b?: any, c?: any, d?: any) => any;
			getEntityFlagValue: (a?: any, b?: any, c?: any) => any;
			setEntityFlagValue: (a?: any, b?: any, c?: any, d?: any) => any;
			increaseEntityFlagValue: (a?: any, b?: any, c?: any) => any;
			decreaseEntityFlagValue: (a?: any, b?: any, c?: any) => any;
			getGridAreaFlag: (a?: any, b?: any) => any;
			getGridForceGround: (a?: any, b?: any) => any;
			getGridNode: (a?: any, b?: any) => any;
			getGridNodeId: (a?: any, b?: any) => any;
			setGridNodeId: (a?: any, b?: any, c?: any) => any;
			getGridBuildFlags: (a?: any, b?: any) => any;
			setGridBuildFlag: (a?: any, b?: any, c?: any) => any;
			clearGridBuildFlags: (a?: any, b?: any) => any;
			getNode: (a?: any, b?: any) => any;
		}
	}
	namespace ACTION_STEP {
		class LABEL extends ActionStepBase {
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
		}
		class GOTO_LABEL extends ActionStepBase {
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getJumpLabelName: () => any;
		}
		class SELECT_RANDOM extends ActionStepBase {
			options: any;
			branches: {[key: string]: any};
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getBranchNames: () => any;
			getNext: () => any;
		}
		class RESET_ACTOR extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class WAIT extends ActionStepBase {
			time: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL extends ActionStepBase {
			condition: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_RANDOM extends ActionStepBase {
			maxTime: number;
			minTime: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class IF extends ActionStepBase {
			condition: any;
			withElse: boolean;
			branches: {[key: string]: any};
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getBranchNames: () => any;
			getNext: () => any;
		}
		class WAIT_UNTIL_ON_GROUND extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_PLAYER_ON_TOP extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class MOVE_FORWARD extends ActionStepBase {
			target: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SLIDE_OUT extends ActionStepBase {
			target: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class MOVE_BACKWARD extends ActionStepBase {
			target: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class MOVE_TO_ENTITY_DISTANCE extends ActionStepBase {
			entity: number;
			min: number;
			max: number;
			maxTime: number;
			subRadius: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class MOVE_TO_ENTITY_CLOSEST_OFFSET extends ActionStepBase {
			entity: number;
			min: number;
			max: number;
			maxTime: number;
			subRadius: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class MOVE_TO_POINT extends ActionStepBase {
			target: any;
			precise: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SYNC_ACTION_WITH_ENTITY extends ActionStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_Z_VEL extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_FLOAT_HEIGHT extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_FLOAT_PARAMS extends ActionStepBase {
			speed: any;
			accel: any;
			variance: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_FLY_HEIGHT extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_FLY_KEEP_HEIGHT extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class FORCE_FLY_HEIGHT extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_Z_DISTANCE extends ActionStepBase {
			distance: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_Z_ZENITH extends ActionStepBase {
			minWait: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class STOP_Z_ZENITH extends ActionStepBase {
			minWait: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class FLY_TO_POINT extends ActionStepBase {
			target: any;
			precise: boolean;
			maxFlySpeed: number;
			flyVariance: number;
			keepFloating: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class MOVE_TO_DIR extends ActionStepBase {
			dir: any;
			time: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (b?: any) => any;
		}
		class MOVE_TO_LINE extends ActionStepBase {
			target1: any;
			target2: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (b?: any) => any;
		}
		class MOVE_RANDOM extends ActionStepBase {
			minTime: number;
			maxTime: number;
			dirChanges: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_WALK_ANIMS extends ActionStepBase {
			config: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class STOP_XY extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class JUMP extends ActionStepBase {
			jumpSpeed: any;
			wait: boolean;
			ignoreSound: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class JUMP_TO_POINT extends ActionStepBase {
			adjustAbove: number;
			offset: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (b?: any) => any;
			run: (b?: any) => any;
		}
		class SET_GROUND_CONNECTED extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_JUMPING extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_Z_GRAVITY_FACTOR extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_SIZE extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_SPEED extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_RELATIVE_SPEED extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_ACCEL_SPEED extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_STATIC_TIME extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class DETACH_TIME_PARENT extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class SET_WEIGHT extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_FRICTION extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_AIR_FRICTION extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_TERRAIN_FRICTION_IGNORE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_SHADOW extends ActionStepBase {
			size: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_Z_BOUNCINESS extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_BOUNCINESS extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_FACE_FIX extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_FACE extends ActionStepBase {
			face: any;
			rotate: boolean;
			rotateSpeed: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
			run: (b?: any) => any;
		}
		class SET_CLOSEST_FACE extends ActionStepBase {
			face: any;
			rotate: boolean;
			rotateSpeed: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (b?: any) => any;
			run: (b?: any) => any;
		}
		class SET_FACE_TO_VEL extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class ROTATE_FACE extends ActionStepBase {
			time: number;
			turn: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_FACE_TO_DIR extends ActionStepBase {
			dir: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (b?: any) => any;
		}
		class SET_FACE_TO_ENTITY extends ActionStepBase {
			entity: any;
			rotate: boolean;
			rotateSpeed: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_COLL_TYPE extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_COLL_SHAPE extends ActionStepBase {
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_SLIP_THROUGH extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_ANIMATION extends ActionStepBase {
			anim: any;
			followUp: any;
			wait: any;
			viaWalkConfig: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_ANIM_LOOP_END extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
			run: (a?: any) => any;
		}
		class SHOW_PART_ANIMATION extends ActionStepBase {
			anim: any;
			followUp: any;
			wait: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SHOW_RANDOM_ANIMATION extends ActionStepBase {
			randAnims: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SHOW_EXTERN_ANIM extends ActionStepBase {
			animSheet: any;
			animName: any;
			followUpSheet: any;
			followUpName: any;
			wait: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class CLEAR_ANIMATION extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class SET_COLL_SIZE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class CHANGE_VAR_NUMBER extends ActionStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_RANDOM_VAR_NUMBER extends ActionStepBase {
			varName: any;
			min: number;
			max: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: () => any;
		}
		class CHANGE_VAR_BOOL extends ActionStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class CHANGE_VAR_STRING extends ActionStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class CHANGE_VAR_LANG extends ActionStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_ATTRIB_VEC2 extends ActionStepBase {
			name: any;
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_ATTRIB_BOOL extends ActionStepBase {
			name: any;
			value: any;
			_wm: Config;
			init: any;
			run: any;
		}
		class SET_ATTRIB_STRING extends ActionStepBase {
			name: any;
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_ATTRIB_NUMBER extends ActionStepBase {
			attribName: any;
			changeOperator: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_ATTRIB_NUMBER_RANDOM extends ActionStepBase {
			attribName: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_ATTRIB_FACE extends ActionStepBase {
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: () => any;
		}
		class SET_ATTRIB_POS extends ActionStepBase {
			name: any;
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: () => any;
		}
		class PLAY_SOUND extends ActionStepBase {
			sound: any;
			global: boolean;
			loop: boolean;
			settings: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class STOP_SOUNDS extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class PLAY_RANDOM_SOUND extends ActionStepBase {
			sounds: any;
			global: boolean;
			loop: boolean;
			settings: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class HIDE extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class HIDE_OTHER extends ActionStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: () => any;
		}
		class SET_POS extends ActionStepBase {
			newPos: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class ROUND_POSITION extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class ADD_Z_POS_DELTA extends ActionStepBase {
			zDelta: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class TELEPORT_TO_ATTRIB_POS extends ActionStepBase {
			newPos: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class INTERPOLATE_POSITION extends ActionStepBase {
			newPos: any;
			duration: number;
			keySpline: any;
			timePerTile: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class Z_INTERPOLATE extends ActionStepBase {
			newZPos: number;
			duration: number;
			keySpline: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class DO_ATTRIB_ACTION extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class ADD_ANIM_MOD extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class REMOVE_ANIM_MOD extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class FOCUS_CAMERA extends EventStepBase {
			offsetX: number;
			offsetY: number;
			speed: number;
			transition: any;
			wait: boolean;
			waitSkip: number;
			zoom: number;
			_wm: Config;
			constructor(d?: any);
			init: (d?: any) => any;
			start: (b?: any) => any;
			run: () => any;
		}
		class RESET_CAMERA extends EventStepBase {
			speed: number;
			transition: any;
			wait: boolean;
			waitSkip: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: () => any;
		}
		class SET_CAMERA_ZOOM extends EventStepBase {
			duration: number;
			transition: any;
			wait: boolean;
			waitSkip: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: () => any;
		}
		class RUMBLE_SCREEN extends ActionStepBase {
			rumbleType: any;
			name: any;
			duration: number;
			power: number;
			speed: number;
			fade: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: () => any;
		}
		class ADD_SLOW_MOTION extends ActionStepBase {
			factor: number;
			time: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any) => any;
		}
		class CLEAR_SLOW_MOTION extends ActionStepBase {
			time: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any) => any;
		}
		class SHOW_EFFECT extends ActionStepBase {
			effect: any;
			duration: number;
			offset: any;
			align: number;
			rotateFace: number;
			wait: boolean;
			waitSkip: number;
			group: any;
			partName: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (d?: any) => any;
			run: (a?: any) => any;
		}
		class CLEAR_EFFECTS extends ActionStepBase {
			entity: any;
			group: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			entityAttachedCondition: (a?: any) => any;
			actionAttachedCondition: (a?: any) => any;
			run: (a?: any) => any;
		}
		class ADD_DARKNESS extends EventStepBase {
			intensity: number;
			duration: number;
			fadeIn: number;
			fadeOut: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any) => any;
		}
		class CLEAR_DARKNESS extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (b?: any) => any;
		}
		class NAVIGATE_TO_TARGET extends ActionStepBase {
			maxTime: number;
			forceTime: boolean;
			distance: number;
			planOnly: boolean;
			targetType: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class NAVIGATE_ESCAPE_TARGET extends ActionStepBase {
			maxTime: number;
			distance: number;
			throwing: boolean;
			planOnly: boolean;
			targetType: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class NAVIGATE_SIDEWAYS_TARGET extends ActionStepBase {
			maxTime: number;
			distance: number;
			distVariance: number;
			throwing: boolean;
			planOnly: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class NAVIGATE_TO_ENTITY extends ActionStepBase {
			entity: any;
			maxTime: number;
			distance: number;
			ignoreBelow: number;
			planOnly: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class NAVIGATE_ESCAPE_ENTITY extends ActionStepBase {
			entity: any;
			maxTime: number;
			distance: number;
			throwing: boolean;
			planOnly: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class NAVIGATE_DODGE extends ActionStepBase {
			maxTime: number;
			distance: number;
			planOnly: boolean;
			dodgeType: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class NAVIGATE_TO_POINT extends ActionStepBase {
			target: boolean;
			maxTime: number;
			distance: number;
			precise: boolean;
			planOnly: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (b?: any) => any;
			run: (c?: any) => any;
		}
		class DO_NAVIGATION extends ActionStepBase {
			maxTime: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class CANCEL_IF_NAVIGATION_FAILED extends ActionStepBase {
			time: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_ATTRIB_CLOSE_TARGET_POS extends ActionStepBase {
			name: any;
			distance: number;
			searchType: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (b?: any) => any;
		}
		class SET_ATTRIB_NAV_TARGET_POS extends ActionStepBase {
			name: any;
			distance: number;
			searchType: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class ENTER_DOOR extends ActionStepBase {
			door: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: (b?: any) => any;
		}
		class SET_ZOOM_BLUR extends ActionStepBase {
			zoomType: any;
			fadeIn: number;
			duration: number;
			fadeOut: number;
			name: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any) => any;
		}
		class FADE_OUT_ZOOM_BLUR extends ActionStepBase {
			name: any;
			fadeOut: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class ADD_TEMP_INFLUENCE extends ActionStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (a?: any) => any;
		}
		class CLEAR_TEMP_INFLUENCE extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class SHOW_AR_MSG extends ActionStepBase {
			text: any;
			time: any;
			mode: boolean;
			color: any;
			actionDetached: boolean;
			partName: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class CLEAR_AR_MSG extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class SET_SOUNDTYPE extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class CHANGE_STAT_MAP_NUMBER extends ActionStepBase {
			map: string;
			stat: string;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class CIRCLE_ENTITY extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
			run: (e?: any) => any;
		}
		class FACE_TO_TARGET extends ActionStepBase {
			value: boolean;
			immediately: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class UNLOCK_ENEMY extends ActionStepBase {
			enemy: any;
			asSpecial: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: () => any;
		}
		class FACE_TO_TARGET_OFFSET extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class FACE_TO_TARGET_SPEED extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class FACE_ALIGN extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_THROW_FX extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class COMBAT_ART_CHARGE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			chargeStep: (a?: any) => any;
			run: (a?: any) => any;
		}
		class MOVE_TO_DISTANCE extends ActionStepBase {
			min: number;
			max: number;
			maxTime: number;
			offset: any;
			forceTime: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class MOVE_TO_PINPOINT extends ActionStepBase {
			maxTime: number;
			offset: any;
			forceTime: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			_calculateDir: (a?: any, b?: any) => any;
			run: (a?: any) => any;
		}
		class SET_ATTRIB_CLOSEST_ENTITY extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class MOVE_TO_ATTRIB_ENTITY extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_COMBATANT_PARTY extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class JUMP_TO_TARGET extends ActionStepBase {
			jumpSpeed: number;
			adjustAbove: number;
			offset: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class JUMP_TARGET_MOVEMENT extends ActionStepBase {
			adjustAbove: number;
			offset: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_MISSILE_SPEED extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class ESCAPE_FROM_TARGET extends ActionStepBase {
			distance: number;
			minTime: number;
			maxTime: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class CIRCLE_TARGET extends ActionStepBase {
			minTime: number;
			maxTime: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class STICK_TO_TARGET extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class STICKY_CIRCLE_AROUND extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_CIRCLE_AROUND_POS extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			_getDeltaVector: (a?: any, b?: any) => any;
		}
		class TACKLE extends ActionStepBase {
			time: number;
			missReactTime: any;
			attack: any;
			cancelOnHit: boolean;
			withBranches: boolean;
			rotateSpeed: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
			getBranchNames: () => any;
			getNext: (a?: any) => any;
		}
		class CIRCLE_ATTACK extends ActionStepBase {
			circleSettings: any;
			attack: any;
			fixPos: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class COMBAT_SWEEP extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_TARGET_Z_VEL extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class PUSH_PULL_FORCE extends ActionStepBase {
			pushPullSettings: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class SET_INVINCIBLE extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class MOD_GENERIC_PROXY extends ActionStepBase {
			killEffect: any;
			clearKillEffect: boolean;
			hp: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class CONNECT_PROXY_TO_TARGET extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class DISCONNECT_PROXY_FROM_TARGET extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class SET_ELEMENT_FILTER extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class DODGE_FREE_LINE extends ActionStepBase {
			time: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class ENABLE_REACTION extends ActionStepBase {
			reaction: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_SPIKE_DAMAGE extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class DISABLE_REACTION extends ActionStepBase {
			reaction: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_DAMAGE_FACTOR extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_HIT_STABLE extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_DAMAGE_CEILING extends ActionStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class CLEAR_DAMAGE_CEILING extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_ENEMY_STATE extends ActionStepBase {
			enemyState: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHOOT_PROXY extends ActionStepBase {
			proxySrc: any;
			offset: {
				x: number;
				y: number;
				z: number;
			};
			align: any;
			dir: any;
			posType: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class SET_HIT_PROXY extends ActionStepBase {
			proxySrc: any;
			offset: {
				x: number;
				y: number;
				z: number;
			};
			align: any;
			posType: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class SET_PROXY_OWNER_TO_POS extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class CLEAR_HIT_PROXY extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class SHOOT_PROXY_RANGE extends ActionStepBase {
			forceSettings: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class SHOOT_PROXY_GRID extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class STOP_REPEATING_FORCE extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class UNSTICK_STICKING_PROXIES extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class REMOVE_PROXIES extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class FANCY_AIM extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_PLAYER_ACTION extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHARE_PROXY_TEMP_TARGET extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class WAIT_UNTIL_PROXIES_DONE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_COMBAT_TRUE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_TRAP_OVER extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_TARGET_DEFEATED extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SPAWN_BURSTS extends ActionStepBase {
			offset: {
				x: number;
				y: number;
				z: number;
			};
			dir: any;
			inFaceDir: boolean;
			burstSettings: any;
			dirRotate: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class DIRECT_HIT extends ActionStepBase {
			directHitSettings: any;
			effect: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class CLEAR_STUN_LOCKED extends ActionStepBase {
			directHitSettings: any;
			effect: any;
			_wm: Config;
			constructor();
			init: () => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class REGEN_HP extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class HEAL_STATUS extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class CLEAR_STATUS_BAR extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class SET_ENEMY_STATUS_VISIBILITY extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_HP_CRITICAL extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class REDUCE_HP extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_HIT_IGNORE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class WAIT_UNTIL_GUARDED extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class ABSORB_BLOCKED_DAMAGE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class ABSORB_DAMAGE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class ABSORB_DAMAGE_VIA_SUM extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class CONSUME_SP extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_FREE_LINE_CMD extends ActionStepBase {
			time: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class ADD_SHIELD extends ActionStepBase {
			name: any;
			shield: any;
			actionDetached: boolean;
			perfectGuardTime: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class REMOVE_SHIELD extends ActionStepBase {
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SPAWN_ASSAULT extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_COMBAT_MSG extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class ADD_TARGET_STUN_LOCK extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class THROW_ENERGY_DROPS extends ActionStepBase {
			target: any;
			dropType: any;
			healValue: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class THROW_GENERIC_DROP extends ActionStepBase {
			target: any;
			dropType: any;
			minVal: any;
			maxVal: any;
			varIncrease: any;
			circleEffect: any;
			pickupEffect: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class NAVIGATE_TO_SPAWN_POINT extends ActionStepBase {
			maxTime: number;
			maxDistance: number;
			precise: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class DO_DAMAGE_MOVEMENT extends ActionStepBase {
			flyLevel: any;
			breaking: boolean;
			stable: boolean;
			wait: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class COMBAT_IF extends ActionStepBase {
			conditions: any;
			withElse: boolean;
			branches: {[key: string]: any};
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getBranchNames: () => any;
			getNext: (a?: any) => any;
		}
		class CHANGE_COLLAB_VAR extends ActionStepBase {
			varName: any;
			changeOperator: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_COLLAB_BREAK_TYPE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class ASSIGN_COLLAB_POINTS extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_ATTRIB_TARGET_VALUE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_COLLAB_ENTITY extends ActionStepBase {
			entityType: any;
			entityLabel: any;
			labelFilter: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class STORE_IN_COLLAB_PARTNER extends ActionStepBase {
			label: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class CONNECT_HP_TO_STORED_ENEMIES extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class CONNECT_HP_TO_TYPES_ENEMIES extends EventStepBase {
			target: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class UPDATE_RESPAWN_POINT extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class SEND_ENEMY_MSG extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class RESET_TRACKER extends ActionStepBase {
			tracker: any;
			forceValue: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class RESET_FREQUENCY extends ActionStepBase {
			tracker: any;
			forceValue: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class RELEASE_STORED_ENEMIES extends ActionStepBase {
			align: any;
			distance: number;
			centralAngle: number;
			startAngle: number;
			actionName: any;
			uniformRandom: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class REASSIGN_TARGET extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class DESTROY_DESTRUCTIBLES extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SPAWN_ENEMIES extends ActionStepBase {
			forceSettings: any;
			enemyInfo: any;
			enemyType: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class SPAWN_ENEMY_CLOSEBY extends ActionStepBase {
			forceSettings: any;
			enemyInfo: any;
			enemyType: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class KILL_ENEMIES extends ActionStepBase {
			enemyType: any;
			noRumble: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SELF_DESTRUCT extends ActionStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_TEMP_TARGET extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_ATTRIB_TARGET_ENTITY extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_CLOSE_TEMP_TARGET extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_OWNER_REPLACE_TARGET extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class SET_POI_TEMP_TARGET extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_PROXY_TEMP_TARGET extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class REDUCE_PROXY_HP extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class CLEAR_TEMP_TARGET extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class CLEAR_PREV_HIT extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class CLEAR_TARGET extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class DETOUR_COMPRESSOR_THREAT extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class ADD_ACTION_BUFF extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class MOD_ACTION_BUFF_PARAM extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_ATTRIB_POS_COMBAT extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class CHANGE_ENEMY_ANNOTATION extends ActionStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: (b?: any) => any;
		}
		class DO_ENEMY_ACTION extends ActionStepBase {
			actionName: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: (b?: any) => any;
		}
		class DO_ENEMY_ACTION_INLINE extends ActionStepBase {
			actionName: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: (b?: any) => any;
		}
		class SET_AGGRESSION extends ActionStepBase {
			value: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: (b?: any) => any;
		}
		class SET_ENEMY_ELEMENT_MODE extends ActionStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any) => any;
		}
		class SHOW_DREAM_MSG extends EventStepBase {
			text: any;
			time: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class RESET_NPC extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			run: (b?: any) => any;
		}
		class APPLY_NPC_CONFIG extends EventStepBase {
			config: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: (b?: any) => any;
		}
		class SHOOT_PROXY_PLAYER extends ActionStepBase {
			proxySrc: any;
			elementProxy: any;
			align: number;
			startDist: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_PLAYER_ACTION_BLOCK extends ActionStepBase {
			blockTypes: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SET_PLAYER_ANIM_SHEET extends ActionStepBase {
			animSheet: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class CLEAR_PLAYER_ANIM_SHEET extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class SET_PLAYER_INVINCIBLE extends ActionStepBase {
			factor: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class PLAYER_ADJUST_FACE extends ActionStepBase {
			time: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class PLAYER_ADJUST_MOVE_DIR extends ActionStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class PLAYER_MOVE_TO_DIR extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class ADD_PLAYER_CAMERA_TARGET extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class REMOVE_PLAYER_CAMERA_TARGET extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class ADD_PLAYER_SHIELD extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			run: (a?: any) => any;
		}
		class START_ITEM_CONSUME extends ActionStepBase {
			item: any;
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class SHOW_FOOD_ICON extends ActionStepBase {
			icon: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class CHANGE_FOOD_ICON extends ActionStepBase {
			state: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class CONSUME_ITEM extends ActionStepBase {
			item: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class OPEN_CHEST extends ActionStepBase {
			entity: number;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class ALIGN_PUSH_PULL_POS extends ActionStepBase {
			component: any;
			duration: number;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class DO_WAVE_TELEPORT extends ActionStepBase {
			entity: any;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class THROW_BOMB extends ActionStepBase {
			gfx: any;
			offset: any;
			align: any;
			speed: any;
			zVel: any;
			timeAdvance: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class RAIN_BOMB extends ActionStepBase {
			gfx: any;
			count: any;
			offset: any;
			align: any;
			area: any;
			zVary: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class SHOOT_BUBBLE extends ActionStepBase {
			gfx: any;
			offset: any;
			align: any;
			speed: any;
			zVel: any;
			timeAdvance: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class SET_ELEMENT_POLE_TIMER extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class PLACE_WAVE_TELEPORT extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class PLACE_TESLA_COIL extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class PLACE_ELEMENT_SHIELD extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class WAIT_UNTIL_ELEMENT_SHIELD_USED extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class STOP_PLAYER_ELEMENT_SHIELD extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class DO_PLATFORM_SHOCKWAVE extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class SET_PARTY_TEMP_TARGET extends ActionStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (b?: any) => any;
		}
		class CONSUME_PARTY_SANDWICH extends ActionStepBase {
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
	}
	namespace EVENT_STEP {
		class SELECT_RANDOM extends EventStepBase {
			options: any;
			branches: {[key: string]: any};
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getBranchNames: () => any;
			getNext: () => any;
		}
		class LABEL extends EventStepBase {
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
		}
		class GOTO_LABEL extends EventStepBase {
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getJumpLabelName: () => any;
		}
		class GOTO_LABEL_WHILE extends EventStepBase {
			name: any;
			condition: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getJumpLabelName: () => any;
		}
		class WAIT extends EventStepBase {
			time: number;
			_timer: number;
			ignoreSlowDown: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_RANDOM extends EventStepBase {
			maxTime: number;
			minTime: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_TRUE extends EventStepBase {
			condition: any;
			_timer: number;
			ignoreSlowDown: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class WAIT_UNTIL_ACTION_DONE extends EventStepBase {
			entity: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
			run: (a?: any) => any;
		}
		class STOP_SKIP_MODE extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SET_ENTITY_STATIC_TIME extends EventStepBase {
			entity: any;
			value: boolean;
			global: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_ENTITY_POS extends EventStepBase {
			entity: any;
			position: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_ENTITY_POS_TO_ENTITY extends EventStepBase {
			entity: any;
			position: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_ENTITY_ON_TOP_OTHER extends EventStepBase {
			entity: any;
			groundEntity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class ADJUST_ENTITY_POS extends EventStepBase {
			entity: any;
			offset: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class HIDE_ENTITY extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SHOW_ENTITY extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SHOW_ANIMATION extends EventStepBase {
			entity: any;
			anim: any;
			reset: boolean;
			followUp: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SHOW_EXTERN_ANIM extends EventStepBase {
			entity: any;
			animSheet: any;
			animName: any;
			followUpSheet: any;
			followUpName: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any, b?: any) => any;
		}
		class CLEAR_ANIMATION extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class DO_ACTION extends EventStepBase {
			entity: number;
			action: any;
			wait: boolean;
			keepState: boolean;
			_actionEntity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any, b?: any) => any;
			run: (a?: any) => any;
		}
		class TELEPORT extends EventStepBase {
			map: string;
			marker: string;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class IF extends EventStepBase {
			condition: any;
			withElse: boolean;
			branches: {[key: string]: any};
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getBranchNames: () => any;
			getNext: () => any;
		}
		class CHANGE_VAR_NUMBER extends EventStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_RANDOM_VAR_NUMBER extends EventStepBase {
			varName: any;
			min: number;
			max: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class ROUND_VAR_NUMBER extends EventStepBase {
			varName: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_VAR_TIME extends EventStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class CHANGE_VAR_VEC2 extends EventStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class CHANGE_VAR_VEC3 extends EventStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class CHANGE_VAR_BOOL extends EventStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class CLEAR_TEMP_STORAGE extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class CHANGE_VAR_STRING extends EventStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class CHANGE_VAR_LANG extends EventStepBase {
			varName: any;
			changeType: any;
			value: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_ATTRIB_VEC2 extends EventStepBase {
			actor: number;
			name: any;
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_ATTRIB_VEC3 extends EventStepBase {
			actor: number;
			name: any;
			value: any;
			_wm: Config;
			init: any;
			start: any;
		}
		class SET_ATTRIB_STRING extends EventStepBase {
			actor: number;
			name: any;
			value: any;
			_wm: Config;
			init: any;
			start: any;
		}
		class PLAY_SOUND extends EventStepBase {
			sound: any;
			position: {
				x: number;
				y: number;
			};
			loop: boolean;
			settings: any;
			name: any;
			speed: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class STOP_SOUND extends EventStepBase {
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_MOVING_LAYER_STOP extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class CONSOLE_LOG extends EventStepBase {
			text: any;
			consoleType: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class PLAY_BGM extends EventStepBase {
			track: any;
			volume: any;
			mode: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			run: () => any;
		}
		class PAUSE_BGM extends EventStepBase {
			mode: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: () => any;
		}
		class RESUME_BGM extends EventStepBase {
			mode: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: () => any;
		}
		class PUSH_BGM extends EventStepBase {
			track: any;
			volume: any;
			mode: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			run: () => any;
		}
		class POP_BGM extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: () => any;
		}
		class PLAY_IN_BETWEEN_BGM extends EventStepBase {
			track: any;
			volume: any;
			mode: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			run: () => any;
		}
		class SET_DEFAULT_BGM extends EventStepBase {
			trackSet: any;
			mode: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			run: () => any;
		}
		class RESUME_DEFAULT_BGM extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			run: () => any;
		}
		class CALL_EVENT_FROM_SHEET extends EventStepBase {
			eventSheet: any;
			eventName: any;
			eventInput: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			getInlineEvent: () => any;
			getInlineEventInput: () => any;
		}
		class SET_CAMERA_TARGET extends EventStepBase {
			entity: any;
			offsetX: number;
			offsetY: number;
			speed: number;
			transition: any;
			wait: boolean;
			waitSkip: number;
			zoom: number;
			lockZ: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
			run: () => any;
		}
		class SET_CAMERA_POS extends EventStepBase {
			pos: any;
			speed: number;
			transition: any;
			wait: boolean;
			waitSkip: number;
			zoom: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
			run: () => any;
		}
		class SET_CAMERA_BETWEEN extends EventStepBase {
			entity1: any;
			entity2: any;
			speed: number;
			transition: any;
			wait: boolean;
			waitSkip: number;
			zoom: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
			run: () => any;
		}
		class RESET_CAMERA extends EventStepBase {
			speed: number;
			transition: any;
			wait: boolean;
			waitSkip: number;
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
			run: () => any;
		}
		class UNDO_CAMERA extends EventStepBase {
			speed: number;
			transition: any;
			wait: boolean;
			waitSkip: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
			run: () => any;
		}
		class SET_CAMERA_ZOOM extends EventStepBase {
			duration: number;
			transition: any;
			wait: boolean;
			waitSkip: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
			run: () => any;
		}
		class RUMBLE_SCREEN extends EventStepBase {
			rumbleType: any;
			name: any;
			duration: number;
			power: number;
			speed: number;
			fade: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class RUMBLE_STOP_CONTINUES extends EventStepBase {
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class ADD_SLOW_MOTION extends EventStepBase {
			name: any;
			factor: number;
			time: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CLEAR_SLOW_MOTION extends EventStepBase {
			name: any;
			time: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SHOW_EFFECT extends EventStepBase {
			entity: any;
			effect: any;
			duration: number;
			offset: any;
			group: any;
			wait: boolean;
			waitSkip: number;
			target2: any;
			target2Offset: any;
			target2Align: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (b?: any, c?: any) => any;
			run: (a?: any) => any;
		}
		class CLEAR_EFFECTS extends EventStepBase {
			entity: any;
			group: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			entityAttachedCondition: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class ADD_GUI extends EventStepBase {
			name: any;
			guiInfo: any;
			guiElement: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
			clearCached: () => any;
		}
		class REMOVE_GUI extends EventStepBase {
			name: any;
			guiInfo: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CHANGE_GUI_STATE extends EventStepBase {
			name: any;
			guiState: any;
			immediate: boolean;
			remove: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SHOW_IMAGE extends EventStepBase {
			name: any;
			image: any;
			guiState: any;
			alignX: any;
			alignY: any;
			renderMode: any;
			overGui: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
			clearCached: () => any;
		}
		class MOVE_IMAGE extends EventStepBase {
			name: any;
			guiState: any;
			time: any;
			keySpline: any;
			removeAfterwards: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class REMOVE_IMAGE extends EventStepBase {
			name: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class NUDGE_PROP extends EventStepBase {
			prop: any;
			playSound: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any, a?: any) => any;
		}
		class OPEN_DOOR extends EventStepBase {
			door: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CLOSE_DOOR extends EventStepBase {
			door: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SHOW_MAP_IMAGE extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
			clearCached: () => any;
		}
		class REMOVE_MAP_IMAGE extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_OVERLAY extends EventStepBase {
			color: any;
			alpha: number;
			time: number;
			lighter: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_OVERLAY_CORNER extends EventStepBase {
			color: any;
			alpha: number;
			time: number;
			blinkAlpha: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class START_DREAM_FX extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class CLEAR_DREAM_FX extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SET_DREAM_FX_COLORS extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_DREAM_FX_CIRCLE_SIZE extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SHOW_PARALLAX extends EventStepBase {
			parallaxGui: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			start: () => any;
			run: () => any;
		}
		class SET_SCREEN_BLUR extends EventStepBase {
			alpha: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CLEAR_SCREEN_BLUR extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SET_ZOOM_BLUR extends EventStepBase {
			zoomType: any;
			fadeIn: number;
			duration: number;
			fadeOut: number;
			name: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class FADE_OUT_ZOOM_BLUR extends EventStepBase {
			name: any;
			fadeOut: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_ENV_PARTICLES extends EventStepBase {
			spawner: number;
			quantity: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class CLEAR_ENV_PARTICLES extends EventStepBase {
			spawner: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class SET_WEATHER extends EventStepBase {
			weather: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class RESTORE_WEATHER_PARTICLES extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_MAP_SOUNDS extends EventStepBase {
			soundEntry: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class ADD_TIMER extends EventStepBase {
			name: any;
			mode: any;
			duration: number;
			area: any;
			temp: any;
			showGui: boolean;
			millis: boolean;
			quest: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class REMOVE_TIMER extends EventStepBase {
			name: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class RESET_TIMER extends EventStepBase {
			name: any;
			mode: any;
			duration: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class PAUSE_TIMER extends EventStepBase {
			name: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class RESUME_TIMER extends EventStepBase {
			name: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class ENABLED_STATS extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class DISABLE_STATS extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class UNLOCK_TROPHY extends EventStepBase {
			trophy: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class ADD_STAT_MAP_NUMBER extends EventStepBase {
			map: any;
			stat: any;
			value: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_STAT_MAP_NUMBER extends EventStepBase {
			map: any;
			stat: any;
			value: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class START_AUTO_CTRL extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (b?: any, a?: any) => any;
		}
		class END_AUTO_CTRL extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (b?: any, a?: any) => any;
		}
		class SET_AUTO_CTRL_MOUSE extends EventStepBase {
			pos: any;
			duration: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_AUTO_CTRL_STICK extends EventStepBase {
			stick: any;
			value: any;
			duration: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_AUTO_CTRL_ACTION extends EventStepBase {
			action: any;
			value: any;
			hold: boolean;
			deviceFilter: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CLEAR_AUTO_CTRL_ACTION extends EventStepBase {
			action: any;
			deviceFilter: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class STOP_TIMER extends EventStepBase {
			hide: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SHOW_AR_MSG extends EventStepBase {
			entity: any;
			text: any;
			time: any;
			mode: boolean;
			color: any;
			partName: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class CLEAR_AR_MSG extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, d?: any) => any;
		}
		class SET_TELEPORT_COLOR extends EventStepBase {
			color: any;
			lighter: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_TELEPORT_TIME extends EventStepBase {
			color: any;
			lighter: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class LOAD extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SAVE extends EventStepBase {
			marker: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class GOTO_TITLE extends EventStepBase {
			_wm: Config;
			start: () => any;
		}
		class ADD_MONEY extends EventStepBase {
			amount: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class REMOVE_MONEY extends EventStepBase {
			amount: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class DROP_ITEM_ENTITY extends EventStepBase {
			entity: any;
			item: number;
			amount: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class GIVE_ITEM extends EventStepBase {
			item: number;
			amount: number;
			skip: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class REMOVE_ITEM extends EventStepBase {
			item: number;
			amount: number;
			unequip: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_VAR_ENTITY_STAT extends EventStepBase {
			varName: any;
			stat: any;
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, d?: any) => any;
		}
		class SPAWN_ENEMY extends EventStepBase {
			position: any;
			enemyInfo: any;
			enemyType: any;
			targetPlayer: boolean;
			name: any;
			noEffects: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class SPAWN_DESTRUCTIBLE extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SPAWN_ENEMY_ON_ENTITY extends EventStepBase {
			entity: any;
			enemyInfo: any;
			enemyType: any;
			targetPlayer: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any, b?: any) => any;
		}
		class KILL_ENEMIES extends EventStepBase {
			enemyType: any;
			noRumble: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_ENEMY_STATE extends EventStepBase {
			enemy: number;
			enemyState: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_ENEMY_TARGET extends EventStepBase {
			enemy: number;
			target: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_SCREEN_ENEMY_TARGET extends EventStepBase {
			target: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_ALL_ENEMY_TARGET extends EventStepBase {
			target: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class REMOVE_ALL_ENEMY_TARGET extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class RESET_SP extends EventStepBase {
			target: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_RELATIVE_HP extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class REGEN_HP extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_TYPED_ENEMY_TARGET extends EventStepBase {
			target: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_ENEMIES_NAV_TOLERANT extends EventStepBase {
			target: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_FINAL_DRAMATIC_EFFECT extends EventStepBase {
			effectType: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_COMBAT_SPEED extends EventStepBase {
			speed: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class MASS_REPLACE_ENTITIES_WITH_ENEMY extends EventStepBase {
			regExp: any;
			spawnEnemyInfo: any;
			enemyType: any;
			target: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (b?: any, d?: any) => any;
		}
		class SWAP_ENTITY_WITH_ENEMY extends EventStepBase {
			entity: any;
			spawnEnemyInfo: any;
			enemyType: any;
			manualKill: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (b?: any, d?: any) => any;
		}
		class SWAP_BACK_ENEMY_WITH_ENTITY extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (b?: any, d?: any) => any;
		}
		class SET_COMBAT_ACTIVE extends EventStepBase {
			active: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class DO_ENEMY_ACTION extends EventStepBase {
			enemy: any;
			actionName: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_VAR_COMBAT_STAT extends EventStepBase {
			varName: any;
			stat: any;
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class MANUAL_COMBATANT_KILL extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class MANUAL_COMBATANT_REVIVE extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_COMBATANT_MANUAL_KILL extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class START_PVP_BATTLE extends EventStepBase {
			winPoints: number;
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class PREPARE_PVP_ROUND extends EventStepBase {
			autoContinue: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
			run: () => any;
		}
		class START_PVP_ROUND extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class STOP_PVP_BATTLE extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SET_RESPAWN_POINT extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class COMBAT_IF extends EventStepBase {
			conditions: any;
			withElse: boolean;
			branches: {[key: string]: any};
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getBranchNames: () => any;
			getNext: () => any;
		}
		class REMOVE_PROXIES extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class OPEN_RHOMBUS_MAP extends EventStepBase {
			_wm: Config;
			_characterName: any;
			_mapName: any;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any, a?: any) => any;
			run: (b?: any) => any;
		}
		class MOVE_ELEVATOR extends EventStepBase {
			entity: any;
			floorOption: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any, a?: any) => any;
			run: () => any;
		}
		class MOVE_ELEVATOR_START extends EventStepBase {
			entity: any;
			floorOption: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any, a?: any) => any;
			run: () => any;
		}
		class UNTRIGGER_PROP extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any, a?: any) => any;
		}
		class START_DEMO_HIGHSCORE_TIMER extends EventStepBase {
			_wm: Config;
			start: () => any;
		}
		class STOP_DEMO_HIGHSCORE_TIMER extends EventStepBase {
			observatory: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_TASK extends EventStepBase {
			task: any;
			keepDisplayed: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_PERMA_TASK extends EventStepBase {
			task: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_PAUSE_MUSIC_STOP extends EventStepBase {
			stop: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_MOBILITY_BLOCK extends EventStepBase {
			value: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class ACTIVATE_CANCEL_BUTTON extends EventStepBase {
			text: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CLEAR_CANCEL_BUTTON extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SET_FORCE_COMBAT extends EventStepBase {
			value: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class INCREASE_COMBAT_RANK extends EventStepBase {
			value: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CLEAR_TASK extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SET_PLAYER_CORE extends EventStepBase {
			core: any;
			value: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_PLAYER_SP_LEVEL extends EventStepBase {
			level: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class INCREASE_PLAYER_SP_LEVEL extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class ADD_PLAYER_EXP extends EventStepBase {
			exp: number;
			level: number;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_ALL_PLAYER_CORE extends EventStepBase {
			value: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SHOW_MSG extends EventStepBase {
			person: any;
			charExpression: any;
			message: any;
			autoContinue: boolean;
			hiCount: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: () => any;
			run: () => any;
		}
		class RING_PRIVATE_MSG extends EventStepBase {
			outgoing: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
			run: () => any;
		}
		class START_PRIVATE_MSG extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
			run: () => any;
		}
		class END_PRIVATE_MSG extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
			run: () => any;
		}
		class SHOW_OFFSCREEN_MSG extends EventStepBase {
			leftSide: any;
			message: any;
			autoContinue: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
			run: () => any;
		}
		class SHOW_CHOICE extends EventStepBase {
			person: any;
			charExpression: any;
			columns: any;
			forceWidth: number;
			options: any;
			branches: {[key: string]: any};
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: () => any;
			run: () => any;
			getBranchNames: () => any;
			getNext: () => any;
		}
		class ADD_MSG_PERSON extends EventStepBase {
			charExpression: any;
			side: number;
			order: number;
			clearSide: boolean;
			name: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class REMOVE_MSG_PERSON extends EventStepBase {
			person: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_MSG_EXPRESSION extends EventStepBase {
			person: any;
			charExpression: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class CLEAR_MSG extends EventStepBase {
			side: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SHOW_CENTER_MSG extends EventStepBase {
			titleText: any;
			text: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_DREAM_MSG extends EventStepBase {
			titleText: any;
			text: any;
			time: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_TUTORIAL_START extends EventStepBase {
			msgType: any;
			title: any;
			content: any;
			imageSrc: any;
			branches: {[key: string]: any};
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
			getBranchNames: () => any;
			getNext: (a?: any) => any;
		}
		class SHOW_MODAL_CHOICE extends EventStepBase {
			text: any;
			options: any;
			branches: {[key: string]: any};
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
			getBranchNames: () => any;
			getNext: (a?: any) => any;
		}
		class SHOW_TUTORIAL_MSG extends EventStepBase {
			pos: any;
			size: any;
			text: any;
			direction: any;
			connectPos: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_TUTORIAL_PLAYER_MSG extends EventStepBase {
			pos: any;
			size: any;
			text: any;
			direction: any;
			connectPos: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (b?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_DEMO_HIGHSCORE extends EventStepBase {
			observatory: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_DEMO_TIME extends EventStepBase {
			observatory: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_GET_MSG extends EventStepBase {
			text: any;
			track: any;
			wordLearned: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
			run: (a?: any) => any;
		}
		class SHOW_SIDE_MSG extends EventStepBase {
			charExpression: any;
			message: any;
			hiCount: number;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class CLEAR_SIDE_MSG extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SHOW_BOARD_MSG extends EventStepBase {
			text: any;
			title: any;
			center: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
			run: () => any;
		}
		class CLEAR_BOARD_MSG extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class DO_THE_SHAKE extends EventStepBase {
			person: any;
			expression: any;
			message: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			start: () => any;
			run: () => any;
		}
		class RESET_NPC extends EventStepBase {
			npc: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any, a?: any) => any;
		}
		class SET_NPC_RUNNERS extends EventStepBase {
			frequency: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class RESET_NPC_RUNNERS extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SET_NPC_CONFIG extends EventStepBase {
			npc: any;
			config: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any, a?: any) => any;
		}
		class SAVE_PLAYER_MODEL_VALUE extends EventStepBase {
			modelType: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class ADD_PLAYER_CAMERA_TARGET extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class REMOVE_PLAYER_CAMERA_TARGET extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class REMOVE_ALL_PLAYER_CAMERAS extends EventStepBase {
			speed: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class LEARN_SKILL extends EventStepBase {
			skill: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class DO_INLINE_LEVELUP extends EventStepBase {
			skill: any;
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
			run: () => any;
		}
		class RESET_SKILL_TREE extends EventStepBase {
			element: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_ELEMENT_LOAD extends EventStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SWITCH_PLAYER_CONFIG extends EventStepBase {
			name: any;
			config: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class WAIT_UNTIL_PLAYER_CHARGED extends EventStepBase {
			level: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: () => any;
		}
		class SWITCH_ELEMENT_MODE extends EventStepBase {
			element: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SWITCH_TO_ELEMENT_WITH_COMBAT_ART extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class HIDE_PETS extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class ACTIVATE_CROSSHAIR extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, c?: any) => any;
		}
		class DEACTIVATE_CROSSHAIR extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SET_CROSSHAIR_TARGET extends EventStepBase {
			pos: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_CROSSHAIR_SPEED extends EventStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class REDUCE_CROSSHAIR_PRECISION extends EventStepBase {
			value: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class GET_CROSSHAIR_DIR extends EventStepBase {
			variable: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class DESTROY_DESTRUCTIBLE extends EventStepBase {
			entity: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class RESET_PUSH_PULL_POS extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SPAWN_BOMB extends EventStepBase {
			gfx: any;
			pos: any;
			offset: any;
			align: any;
			area: any;
			zVary: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class SPAWN_BUBBLE extends EventStepBase {
			offset: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class DESTROY_BOMBS extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			clearCached: () => any;
			start: () => any;
		}
		class STOP_PLAYER_ELEMENT_SHIELD extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class FIX_SHOCKWAVE_PLATFORMS extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class RELEASE_FIXED_PLATFORMS extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class ADD_PLANT extends EventStepBase {
			key: any;
			anim: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class UNLOCK_ENEMY extends EventStepBase {
			enemy: any;
			asSpecial: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class UNLOCK_LORE extends EventStepBase {
			lore: any;
			notify: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class UNLOCK_LORE_ALL extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class UNLOCK_LORE_FIRST_TIME extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class UNLOCK_LORE_ENTRY extends EventStepBase {
			lore: any;
			entry: any;
			notify: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class ACTIVATE_LANDMARK extends EventStepBase {
			area: any;
			landmark: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SET_LANDMARK_ACTIVE_STATE extends EventStepBase {
			area: any;
			landmark: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class UNDO_OPENED_CHEST_TRACK extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class OPEN_SHOP extends EventStepBase {
			shop: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class OPEN_QUEST_HUB extends EventStepBase {
			hub: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class UNDO_VISITED_AREA extends EventStepBase {
			hub: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			start: () => any;
		}
		class START_FORCE_INPUT extends EventStepBase {
			inputEntry: any;
			title: any;
			textKeyboard: any;
			textGamepad: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
			run: () => any;
		}
		class CLEAR_FORCE_INPUT extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class RESET_TRADER extends EventStepBase {
			trader: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class START_NPC_TRADE_MENU extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any, a?: any) => any;
			run: (b?: any) => any;
			getBranchNames: () => any;
			getNext: () => any;
		}
		class CREATE_QUEST extends EventStepBase {
			settings: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class START_STATIC_QUEST extends EventStepBase {
			quest: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SOLVE_QUEST_CONDITION extends EventStepBase {
			questId: any;
			label: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class UPDATE_QUEST_LOCATION extends EventStepBase {
			questId: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class RESET_QUEST_TASK extends EventStepBase {
			quest: any;
			index: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class OPEN_QUEST_DIALOG extends EventStepBase {
			quest: any;
			acceptVar: any;
			npc: any;
			_wm: Config;
			_characterName: any;
			_mapName: any;
			constructor(b?: any);
			init: (b?: any) => any;
			getBranchNames: () => any;
			start: (b?: any, a?: any) => any;
			run: (b?: any) => any;
			getNext: (b?: any) => any;
		}
		class FINISH_STATIC_QUEST extends EventStepBase {
			quest: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class RESOLVE_FINISHED_QUESTS extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (b?: any) => any;
			run: (b?: any) => any;
		}
		class SET_CONTACT_ONLINE extends EventStepBase {
			member: any;
			online: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_MEMBER_LOCKED extends EventStepBase {
			member: any;
			locked: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_CONTACT_TYPE extends EventStepBase {
			member: any;
			status: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_CONTACT_TYPE_ALL extends EventStepBase {
			status: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class ADD_PARTY_MEMBER extends EventStepBase {
			member: any;
			npc: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class SET_PARTY_MEMBER_LEVEL extends EventStepBase {
			member: any;
			level: any;
			exp: any;
			updateEquipment: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_PARTY_MEMBER_NO_DIE extends EventStepBase {
			noDie: boolean;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_PARTY_MEMBER_SP_LEVEL extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_PARTY_MEMBER_ALL_ELEMENTS extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class REMOVE_PARTY_MEMBER extends EventStepBase {
			member: any;
			npc: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any, b?: any) => any;
		}
		class REVIVE_PARTY_MEMBER extends EventStepBase {
			member: any;
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class SET_PARTY_AI extends EventStepBase {
			_wm: Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
		}
		class PARTY_KEEP_MAP_DUNGEON extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class TRIGGER_COMMON_EVENTS extends EventStepBase {
			commonEventType: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CALL_EVENT extends EventStepBase {
			callEvent: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CANCEL_COMMON_EVENTS extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class SHOW_CREDIT_SECTION extends EventStepBase {
			name: any;
			credits: any;
			guiElement: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
			clearCached: () => any;
		}
		class WAIT_UNTIL_CREDIT_TRIGGER extends EventStepBase {
			credits: any;
			trigger: any;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any) => any;
			run: (b?: any) => any;
		}
		class WAIT_UNTIL_CREDIT_SECTION_DONE extends EventStepBase {
			name: any;
			offscreen: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any) => any;
			run: (b?: any) => any;
		}
		class RESET_ARENA_CHAIN extends EventStepBase {
			_wm: Config;
			start: () => any;
		}
		class INCREASE_ARENA_CHAIN extends EventStepBase {
			_wm: Config;
			amount: number;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class ADD_ARENA_SCORE_IGNORE extends EventStepBase {
			_wm: Config;
			scoreType: any;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class REMOVE_ARENA_SCORE_IGNORE extends EventStepBase {
			_wm: Config;
			scoreType: any;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class CLEAR_ARENA_SCORE_IGNORE extends EventStepBase {
			_wm: Config;
			start: () => any;
		}
		class ADD_ARENA_IGNORE_TYPE extends EventStepBase {
			_wm: Config;
			enemy: any;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class ADD_ARENA_SCORE extends EventStepBase {
			_wm: Config;
			type: any;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class OPEN_ARENA_MENU extends EventStepBase {
			arenaCache: any;
			custom: boolean;
			noWait: boolean;
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
			run: () => any;
			clearCached: () => any;
		}
		class START_ARENA_CUP extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class END_ARENA_CUP extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class SPAWN_ARENA_WAVE extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class START_ARENA_ROUND extends EventStepBase {
			_wm: Config;
			score: boolean;
			time: boolean;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
		}
		class TP_TO_CUR_ARENA_ROUND extends EventStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: () => any;
		}
		class PREP_ARENA_ROUND_END extends EventStepBase {
			_wm: Config;
			start: () => any;
		}
		class END_ARENA_ROUND extends EventStepBase {
			_wm: Config;
			onDeath: boolean;
			constructor(b?: any);
			init: (b?: any) => any;
			start: () => any;
			run: () => any;
		}
		class SHOW_ARENA_ROUND_GUI extends EventStepBase {
			_wm: Config;
			constructor(b?: any);
			init: (b?: any) => any;
			start: (b?: any) => any;
			run: (b?: any) => any;
		}
	}
	namespace ENTITY {
		class Marker extends Entity {
			name: string;
			dir: any;
			face: any;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			update: () => any;
			applyMarkerPosition: (b?: any) => any;
		}
		class ObjectLayerView extends AnimatedEntity {
			maps: any;
			spritesInitialized: boolean;
			hideManager: any;
			wallY: number;
			fx: {
				show: any;
				hide: any;
				handle: any;
				isHiding: boolean;
			};
			_wm: Config;
			constructor(a?: any, b?: any, e?: any, f?: any);
			init: (a?: any, b?: any, e?: any, f?: any) => any;
			onKill: (a?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: () => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
		}
		class TouchTrigger extends Entity {
			name: string;
			face: any;
			touchType: number;
			touchedCnt: number;
			startCondition: any;
			isOn: boolean;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			update: () => any;
			setOn: () => any;
			setOff: () => any;
		}
		class SoundSource extends Entity {
			sound: any;
			soundHandle: any;
			radius: number;
			rangeType: any;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			show: (b?: any) => any;
			stop: () => any;
			update: () => any;
			hide: () => any;
			onKill: (b?: any) => any;
		}
		class Effect extends Entity {
			offset: {
				x: number;
				y: number;
				z: number;
			};
			rotOffset: any;
			angle: number;
			flipX: boolean;
			duration: number;
			state: any;
			effect: any;
			target: any;
			spriteFilter: any;
			timelineIndex: number;
			timer: number;
			looped: boolean;
			particles: any;
			runners: any;
			align: any;
			target2: {
				point: any;
				entity: any;
				align: any;
				offset: any;
			};
			attachGroup: any;
			callback: any;
			rotateFace: number;
			flipLeftFace: boolean;
			constructor(a?: any, b?: any, e?: any, f?: any);
			init: (a?: any, b?: any, e?: any, f?: any) => any;
			reset: (a?: any, b?: any, e?: any, f?: any) => any;
			_initEffect: (b?: any) => any;
			attachToAction: (a?: any) => any;
			setTimeEntity: (a?: any) => any;
			setIgnoreSlowdown: () => any;
			getTarget2Pos: (a?: any) => any;
			stop: () => any;
			isDone: () => any;
			getRemainingTime: () => any;
			setCallback: (a?: any) => any;
			onActionEndDetach: () => any;
			onEntityKillDetach: () => any;
			spawnParticle: (a?: any, b?: any, e?: any, f?: any) => any;
			update: () => any;
			deferredUpdate: () => any;
			updateRunners: () => any;
			cancelRunners: (a?: any) => any;
			onKill: (a?: any) => any;
		}
		class Particle extends AnimatedEntity {
			handle: any;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initParticle: (a?: any) => any;
			update: () => any;
		}
		class FaceParticle extends AnimatedEntity {
			handle: any;
			face: {
				x: number;
				y: number;
			};
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initFaceParticle: (a?: any) => any;
			update: () => any;
		}
		class CopyParticle extends Entity {
			handle: any;
			color: any;
			colorAlpha: any;
			noLighter: boolean;
			oldPos: any;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initCopyParticle: (a?: any) => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
		}
		class DebrisParticle extends AnimatedEntity {
			handle: any;
			minZVel: number;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initDeprisParticle: (a?: any) => any;
			update: () => any;
			onTouchGround: () => any;
		}
		class OffsetParticle extends Particle {
			startFactor: number;
			moveOffset: any;
			alongZ: boolean;
			keySpline: any;
			inverse: boolean;
			moveRotate: number;
			rotateWithTime: boolean;
			rotateGfx: boolean;
			normalMoveDist: number;
			moveDuration: number;
			prevWeight: number;
			moveTimer: number;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initOffsetParticle: (a?: any) => any;
			_updatePos: () => any;
			update: () => any;
		}
		class RhombusParticle extends Particle {
			startFactor: number;
			moveFactor: number;
			radius: number;
			alongZ: boolean;
			keySpline: any;
			prevWeight: number;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initOffsetParticle: (a?: any) => any;
			_updatePos: () => any;
			_getRhombusOffset: (a?: any, b?: any, c?: any) => any;
			update: () => any;
		}
		class HomingParticle extends Particle {
			inverse: boolean;
			flyType: any;
			ownerEffect: number;
			normalXY: number;
			normalZ: number;
			moveTimer: number;
			phaseDurations: any;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initOffsetParticle: (a?: any) => any;
			_updatePos: (a?: any) => any;
			update: () => any;
		}
		class LaserParticle extends Entity {
			handle: any;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initLaserParticle: (a?: any) => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
		}
		class EffectPreviewer extends ActorEntity {
			cameraHandle: any;
			currentEffectSheet: any;
			newEffectData: any;
			currentEffectHandle: any;
			spawnData: any;
			resetTimer: number;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			update: () => any;
			stopCurrentEffect: () => any;
			resetEntity: () => any;
			onExternalMessage: (b?: any, a?: any) => any;
			onLoadableComplete: (b?: any, a?: any) => any;
		}
		class ConditionalLight extends Entity {
			glowColor: any;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			onKill: (b?: any) => any;
			update: () => any;
		}
		class HiddenBlock extends Entity {
			terrain: number;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
		}
		class HiddenSkyBlock extends Entity {
			terrain: number;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
		}
		class Door extends AnimatedEntity {
			doorType: any;
			condition: any;
			map: string;
			marker: string;
			dir: string;
			doorMat: any;
			active: boolean;
			openTimer: number;
			hasDoorMat: boolean;
			hasDoorGlow: boolean;
			hideManager: any;
			blockEvent: any;
			blockEventCondition: any;
			openEffect: any;
			sounds: {
				activate: Sound;
				deactivate: Sound;
			};
			fx: {
				sheet: EffectSheet;
			};
			openSound: any;
			_wm: Config;
			constructor(a?: any, d?: any, c?: any, e?: any);
			init: (a?: any, d?: any, c?: any, e?: any) => any;
			onKill: (a?: any) => any;
			show: (a?: any) => any;
			update: () => any;
			close: () => any;
			open: (a?: any) => any;
			varsChanged: () => any;
			collideWith: (a?: any, d?: any) => any;
			enterEntity: (a?: any) => any;
			leaveEntity: () => any;
			getEnterActionData: (a?: any) => any;
			getEnterEventData: (a?: any) => any;
			getStartPoint: (a?: any) => any;
			getEndPoint: () => any;
			applyMarkerPosition: (a?: any) => any;
		}
		class TeleportStairs extends Entity {
			gfx: any;
			map: string;
			marker: string;
			stairType: any;
			blockEvent: any;
			blockEventCondition: any;
			spawnDistance: number;
			transitionType: number;
			npcRunnerProb: number;
			centerWalkThrough: boolean;
			objMaps: any;
			_wm: Config;
			constructor(a?: any, c?: any, d?: any, e?: any);
			init: (a?: any, c?: any, d?: any, e?: any) => any;
			onKill: (a?: any) => any;
			initSprites: () => any;
			updateSprites: () => any;
			collideWith: (a?: any, b?: any) => any;
			enterEntity: (a?: any) => any;
			leaveEntity: () => any;
			getEnterActionData: (a?: any) => any;
			getStartPoint: (a?: any) => any;
			applyMarkerPosition: (a?: any) => any;
			getRunnerDestination: () => any;
		}
		class NPCWaypoint extends Entity {
			name: string;
			wpConnection: any;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			initWayPoints: () => any;
			getWPConnect: () => any;
		}
		class TeleportGround extends Entity {
			map: string;
			marker: string;
			dir: string;
			blockEvent: any;
			blockEventCondition: any;
			spawnDistance: number;
			transitionType: number;
			npcRunnerProb: number;
			centerWalkThrough: boolean;
			wpConnection: any;
			_wm: Config;
			constructor(a?: any, d?: any, c?: any, e?: any);
			init: (a?: any, d?: any, c?: any, e?: any) => any;
			collideWith: (a?: any, d?: any) => any;
			enterEntity: (a?: any) => any;
			leaveEntity: () => any;
			getEnterActionData: () => any;
			applyMarkerPosition: (a?: any) => any;
			getRunnerDestination: () => any;
			getWPConnect: () => any;
		}
		class GlowingGround extends Entity {
			color1: string;
			color2: string;
			duration: number;
			timer: number;
			colorGfx: any;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
		}
		class Prop extends AnimatedEntity {
			terrain: number;
			face: any;
			propSet: any;
			propName: any;
			propAnim: any;
			nudging: {
				active: boolean;
				timer: number;
				variance: number;
				onFall: boolean;
			};
			collideSound: any;
			condAnims: any;
			touchVar: any;
			_triggered: boolean;
			shuffleAnims: boolean;
			interact: any;
			currentInteract: any;
			ballKill: any;
			effects: {
				initPerma: boolean;
				sheet: any;
				show: any;
				hide: any;
				hideHandle: any;
				showOverload: any;
				hideOverload: any;
				permaEffect: any;
				permaHandle: any;
				interactPermaHandle: any;
			};
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			show: (b?: any) => any;
			initPermaEffects: () => any;
			onHideRequest: () => any;
			initSprites: () => any;
			onLoadableComplete: (b?: any) => any;
			onKill: (b?: any) => any;
			update: () => any;
			onEffectEvent: (b?: any) => any;
			updateSprites: () => any;
			collideWith: (b?: any) => any;
			onGroundAdd: (b?: any) => any;
			nudge: (b?: any, a?: any) => any;
			untriggerProp: () => any;
			varsChanged: () => any;
			changeInteract: (b?: any) => any;
			ballHit: (b?: any) => any;
			_updateAnimations: () => any;
		}
		class ScalableProp extends AnimatedEntity {
			terrain: number;
			propConfig: any;
			scalePropSheet: any;
			hasSize: boolean;
			gfx: any;
			patternSheet: any;
			patternOffset: {
				x: number;
				y: number;
			};
			pivot: any;
			wallY: number;
			renderHeight: number;
			renderMode: any;
			gfxEnds: any;
			animFrames: any;
			animTime: any;
			timePadding: number;
			timer: number;
			touchVar: any;
			_triggered: boolean;
			effects: {
				sheet: any;
				show: any;
				hide: any;
				hideHandle: any;
			};
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			createSkyBlock: () => any;
			onHideRequest: () => any;
			onLoadableComplete: (a?: any) => any;
			initSprites: () => any;
			onKill: (a?: any) => any;
			update: () => any;
			onEffectEvent: (a?: any) => any;
			updateSprites: () => any;
			collideWith: (a?: any) => any;
			varsChanged: () => any;
			ballHit: (a?: any) => any;
		}
		class Note extends Entity {
			text: string;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
		}
		class Projectile extends AnimatedEntity {
			speedVary: {
				_type: string;
				_info: string;
			};
			combatant: any;
			hitProxy: any;
			remainingHits: number;
			maxHits: number;
			alreadyCollided: any;
			skipBounce: boolean;
			noMoveRotate: boolean;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			spawnHitProxy: (b?: any, a?: any, d?: any) => any;
			update: () => any;
			handleMovementTrace: (b?: any) => any;
			onKill: (b?: any) => any;
			collideWith: (b?: any) => any;
			clearIgnored: () => any;
			addIgnore: (b?: any) => any;
			getHitCenter: (b?: any, a?: any) => any;
			getHitVel: (b?: any, a?: any) => any;
			getElement: () => any;
			getCombatant: () => any;
			getCombatantRoot: () => any;
			getAttackInfo: () => any;
		}
		class Ball extends Projectile {
			isBall: boolean;
			party: number;
			target: any;
			params: any;
			attackInfo: any;
			multiHit: boolean;
			maxTime: number;
			timer: number;
			timeBoni: any;
			effects: any;
			effectKeys: any;
			speed: number;
			speedFactor: number;
			lightHandle: any;
			grab: any;
			destroyProxySrc: any;
			bounceProxySrc: any;
			behaviors: any;
			behaviorData: any;
			hitSideways: boolean;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			getTarget: () => any;
			setBallInfo: (b?: any, c?: any) => any;
			grabPoint: (a?: any, b?: any) => any;
			changeSpeed: (a?: any, b?: any) => any;
			resetSpeed: () => any;
			changeDirection: (a?: any) => any;
			onBounce: (a?: any, b?: any) => any;
			destroy: () => any;
			_spawnBounceProxy: (a?: any, c?: any) => any;
			onProjectileKill: (a?: any, b?: any, c?: any) => any;
			onProjectileHit: (a?: any, b?: any) => any;
			update: () => any;
			getElement: () => any;
			getHitVel: (a?: any, b?: any) => any;
			resetBounceCount: () => any;
			resetTime: (a?: any) => any;
			cleanDirection: (a?: any) => any;
		}
		class CombatantMarble extends AnimatedEntity {
			tileSheet: TileSheet;
			effects: EffectSheet;
			startPos: any;
			startZPos: number;
			target: any;
			timer: number;
			maxZHeight: number;
			maxTime: number;
			lineHandle: any;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			update: () => any;
		}
		class HitNumber extends sc.HitNumberEntityBase {
			timer: number;
			blockerEntry: any;
			combatant: any;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initHitNumber: (a?: any) => any;
			clear: () => any;
			update: () => any;
			unlock: () => any;
			onKill: (a?: any) => any;
		}
		class HitNumberSum extends sc.HitNumberEntityBase {
			timer: number;
			disappear: boolean;
			combatant: any;
			entityOff: any;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			reset: (a?: any, b?: any, c?: any, d?: any) => any;
			_initHitNumber: (a?: any) => any;
			updateEntityOffset: () => any;
			updateSum: (a?: any) => any;
			clear: () => any;
			update: () => any;
			deferredUpdate: () => any;
			_updatePos: () => any;
			onKill: (a?: any) => any;
		}
		class Combatant extends sc.BasicCombatant {
			params: any;
			isCombatant: boolean;
			party: number;
			material: any;
			damageTimer: number;
			defeatNotified: boolean;
			dying: any;
			skipRumble: boolean;
			deathEffect: any;
			manualKill: any;
			invincibleTimer: number;
			stunThreshold: number;
			stunCombatant: any;
			stunSteps: any;
			stunData: {
				time: number;
				hits: number;
				damage: number;
				resetTimer: number;
				stunEscapeTime: number;
				damageSum: number;
				damageSumHits: number;
				damageSumEntity: any;
				lastHitElement: number;
				hitNumberEntities: any;
				damageSumTimer: number;
			};
			targetedBy: any;
			threat: any;
			regenFactor: number;
			regenTimer: number;
			walkAnims: {
				idle: any;
				preMove: any;
				move: any;
				moveRev: any;
				run: any;
				runRev: any;
				brake: any;
				preIdle: any;
				jump: any;
				fall: any;
				hover: any;
				preHoverMove: any;
				hoverMove: any;
				hoverMoveRev: any;
				land: any;
				damage: any;
				postDamage: any;
				damageFly: any;
				damageFall: any;
				pvpDown: any;
			};
			hitStable: number;
			hitIgnore: boolean;
			statusGui: any;
			shieldsConnections: any;
			spikeDmg: {
				baseFactor: number;
				tmpFactor: number;
				receiveStash: any;
			};
			pvp: {
				active: boolean;
				enemies: any;
				round: number;
				points: {[key: string]: any};
			};
			respawn: {
				dmgFactor: number;
				pos: any;
				oldPos: any;
				timer: number;
				terrain: any;
			};
			effects: {
				death: EffectSheet;
			};
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			show: (a?: any) => any;
			hide: () => any;
			hasStun: () => any;
			setRespawnPoint: (a?: any) => any;
			isDefeated: () => any;
			cancelStun: () => any;
			onStunEnd: any;
			setTarget: (a?: any, b?: any) => any;
			setReplaceTarget: (a?: any) => any;
			_addTargetedBy: (a?: any) => any;
			_removeTargetedBy: (a?: any) => any;
			onEnemyEvent: any;
			sendEnemyEvent: (a?: any, b?: any) => any;
			hasShield: (a?: any) => any;
			updateShields: () => any;
			addShield: (a?: any, b?: any) => any;
			removeShield: (a?: any) => any;
			removeNamedShield: (a?: any) => any;
			damage: (a?: any, b?: any, c?: any) => any;
			isShielded: (a?: any, b?: any, c?: any, d?: any) => any;
			getSpikeShieldFactor: () => any;
			onPreDamageModification: () => any;
			onPerfectDash: () => any;
			onStunLockClear: () => any;
			onDamage: (a?: any, c?: any, g?: any) => any;
			regenPvp: (a?: any) => any;
			onPvpEnd: (a?: any) => any;
			setCombatStat: (a?: any, b?: any) => any;
			getCombatStat: (a?: any, b?: any) => any;
			addCombatStat: (a?: any, b?: any) => any;
			_onDeathHit: (a?: any) => any;
			addSpikeDamage: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
			updateSpikeDamage: () => any;
			instantDamage: (a?: any, d?: any, e?: any) => any;
			doDamageMovement: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, n?: any) => any;
			onTargetHit: (a?: any, b?: any, c?: any) => any;
			heal: (a?: any, b?: any) => any;
			instantDefeat: (a?: any, b?: any) => any;
			selfDestruct: (a?: any) => any;
			doManualKill: (a?: any) => any;
			doManualRevive: (a?: any) => any;
			onKill: (a?: any) => any;
			update: () => any;
			resetStunData: () => any;
			clearDamageSum: () => any;
			onTerrainUpdate: () => any;
			checkQuickRespawn: () => any;
			quickFall: (a?: any) => any;
			handleRespawn: () => any;
			doQuickRespawn: (a?: any, b?: any, c?: any) => any;
			onDefeat: () => any;
			getAnimPartyEntityClass: () => any;
		}
		class Enemy extends Combatant {
			party: any;
			aggression: any;
			enemyName: any;
			enemyType: any;
			enemyGroup: any;
			defeatVarIncrease: any;
			enemyTypeInitialized: boolean;
			dropHealOrb: number;
			hpAttached: {
				enemy: any;
				value: number;
			};
			spawnPoint: any;
			currentState: any;
			postStun: {
				choice: any;
				collab: any;
			};
			nextState: any;
			nextTimerChange: any;
			stateTimers: {[key: string]: any};
			trackers: {[key: string]: any};
			deferredPerformedConds: any;
			targetLoseTimer: number;
			reactions: {
				enabled: any;
				current: any;
				running: any;
				restartAction: any;
			};
			dodge: {
				count: number;
				timer: number;
				blocked: number;
				counterReactTime: number;
				counterCooldown: number;
				counterCooldownMax: number;
			};
			annotate: {
				active: number;
				passive: number;
				weapon: number;
				element: number;
				extra: any;
			};
			hpBreakReached: number;
			lastPoICheck: any;
			targetFixed: boolean;
			collaboration: any;
			collabAttribs: any;
			elementModes: any;
			storedEnemies: any;
			ownerEnemy: any;
			cameraZFocus: number;
			startEffect: any;
			targetOnSpawn: boolean;
			boosterState: number;
			level: {
				override: any;
				setting: any;
			};
			visibility: {
				analyzable: boolean;
				hpBar: any;
			};
			_wm: Config;
			constructor(a?: any, b?: any, d?: any, g?: any);
			init: (a?: any, b?: any, d?: any, g?: any) => any;
			setElementMode: (a?: any, b?: any) => any;
			getQuickMenuSettings: () => any;
			connectHpToEnemies: (a?: any) => any;
			setLevelOverride: (a?: any) => any;
			getLevel: () => any;
			storeEnemy: (a?: any) => any;
			onStoredRelease: () => any;
			onEnemyEvent: (a?: any, b?: any, d?: any) => any;
			onMagnetStart: () => any;
			onMagnetEnd: () => any;
			isBoss: () => any;
			getHeadIdx: () => any;
			show: (b?: any) => any;
			onHideRequest: () => any;
			hide: () => any;
			onKill: (a?: any) => any;
			regenPvp: (a?: any) => any;
			update: () => any;
			onTargetHit: (a?: any, b?: any, d?: any, g?: any, h?: any) => any;
			setCounterCooldown: () => any;
			onFallBehavior: (a?: any) => any;
			postActionUpdate: () => any;
			onStunEnd: () => any;
			changeState: (a?: any, b?: any) => any;
			onPreDamageModification: (a?: any, d?: any, f?: any, g?: any, h?: any, i?: any, j?: any) => any;
			_delegateDamage: () => any;
			onInstantDamage: (a?: any, d?: any) => any;
			_checkHitReactions: (a?: any, d?: any, f?: any, g?: any) => any;
			collabReady: (a?: any) => any;
			doCollabReaction: (a?: any) => any;
			doEnemyAction: (a?: any, b?: any, d?: any) => any;
			onDamage: (a?: any, b?: any, d?: any) => any;
			onNavigationFailed: (a?: any) => any;
			onDefeat: (a?: any) => any;
			enableReactions: (a?: any) => any;
			enableReaction: (a?: any) => any;
			disableReaction: (a?: any) => any;
			onVarAccess: (a?: any, b?: any) => any;
		}
		class EnemySpawner extends Entity {
			enemyTypes: any;
			maxEnemies: number;
			respawnTimer: number;
			initialSpawn: boolean;
			effectInitialSpawn: boolean;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			show: (b?: any) => any;
			onKill: (b?: any) => any;
			_storeState: (b?: any) => any;
			_getVarPrefix: () => any;
			update: () => any;
			respawnEnemies: (b?: any, a?: any) => any;
			spawnEnemy: (b?: any, a?: any) => any;
		}
		class RespawnBlocker extends Entity {
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
		}
		class Stone extends Projectile {
			party: number;
			target: any;
			params: any;
			attackInfo: any;
			multiHit: boolean;
			remainingGroundHits: number;
			effects: any;
			effectKeys: any;
			lightHandle: any;
			grab: any;
			behaviors: any;
			behaviorData: any;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			setStoneInfo: (a?: any) => any;
			onBounce: (a?: any, b?: any) => any;
			onProjectileKill: () => any;
			onProjectileHit: (a?: any) => any;
			onTouchGround: () => any;
			getElement: () => any;
		}
		class Elevator extends Entity {
			markerDir: any;
			markerFaceDir: any;
			elevatorData: any;
			ground: any;
			groundGfx: any;
			condition: any;
			startZ: number;
			targetZ: any;
			stopDelay: number;
			elevatorVel: number;
			destinations: any;
			stuckTimer: number;
			blockEvent: any;
			blockEventCondition: any;
			switchEntity: any;
			sounds: {[key: string]: any};
			doTeleport: boolean;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			initDestinatins: (a?: any) => any;
			initSprites: () => any;
			onKill: (a?: any) => any;
			show: (a?: any) => any;
			pressSwitch: () => any;
			moveToDestination: (a?: any) => any;
			performTeleport: (a?: any) => any;
			_addMoveEvent: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
			showElevatorOptions: () => any;
			_addWaitSteps: (a?: any) => any;
			update: () => any;
			setArrived: () => any;
			deferredUpdate: () => any;
			varsChanged: () => any;
			updateSprites: () => any;
			applyMarkerPosition: (a?: any) => any;
			onPostPlacementAction: () => any;
			placeEntity: (a?: any, d?: any) => any;
		}
		class JumpPanel extends AnimatedEntity {
			effects: EffectSheet;
			jumpHeightData: any;
			condition: any;
			_wm: Config;
			constructor(a?: any, c?: any, d?: any, e?: any);
			init: (a?: any, c?: any, d?: any, e?: any) => any;
			onTopEntityJump: (a?: any) => any;
			varsChanged: () => any;
			onNavMapInfluence: () => any;
		}
		class JumpPanelFar extends AnimatedEntity {
			panelType: any;
			effects: EffectSheet;
			jumpHeightData: any;
			condition: any;
			_wm: Config;
			constructor(a?: any, b?: any, d?: any, f?: any);
			init: (a?: any, b?: any, d?: any, f?: any) => any;
			onTopEntityJumpFar: (a?: any) => any;
			varsChanged: () => any;
			onNavMapInfluence: () => any;
		}
		class JumpPanelFloat extends AnimatedEntity {
			panelType: any;
			effects: EffectSheet;
			jumpHeightData: any;
			condition: any;
			dir: any;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			collideWith: (a?: any) => any;
			varsChanged: () => any;
			onNavMapInfluence: () => any;
		}
		class TeleportCentral extends Entity {
			map: string;
			marker: string;
			effects: EffectSheet;
			fxHandle: any;
			npcRunnerEnterProb: number;
			npcRunnerExitProb: number;
			landmark: any;
			landmarkTarget: any;
			landmarkCondition: any;
			landmarkDetectDelay: number;
			hasEffects: boolean;
			detectType: string;
			wpConnection: any;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			update: () => any;
			onKill: (a?: any) => any;
			show: (a?: any) => any;
			enterEntity: () => any;
			leaveEntity: () => any;
			applyMarkerPosition: (a?: any) => any;
			getRunnerDestination: () => any;
			getWPConnect: () => any;
		}
		class TeleportField extends AnimatedEntity {
			centralName: any;
			map: any;
			marker: any;
			dir: string;
			glowHandle: any;
			glowFxReplace: any;
			initialized: boolean;
			longTelCond: any;
			teleportIcon: sc.MapInteractIcon;
			interactEntry: any;
			effects: {
				upgrade: EffectSheet;
				puzzle: EffectSheet;
				teleport: EffectSheet;
				hideHandle: any;
			};
			blockEvent: any;
			blockEventCondition: any;
			gfxType: any;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			onKill: (a?: any) => any;
			hasInteract: () => any;
			collideWith: (a?: any) => any;
			update: () => any;
			recheckGlowStart: () => any;
			startGlow: () => any;
			enterEntity: (a?: any) => any;
			leaveEntity: (a?: any) => any;
			getEnterActionData: (a?: any, b?: any) => any;
			_addMoveEvent: (a?: any, b?: any, c?: any, d?: any) => any;
			onInteraction: () => any;
			varsChanged: () => any;
			applyMarkerPosition: (a?: any) => any;
			onPostPlacementAction: (a?: any) => any;
			_addPartyEnterSteps: (a?: any, b?: any) => any;
			_addEnterSteps: (a?: any) => any;
			isRunnerDestBlocked: () => any;
		}
		class RhombusPoint extends Entity {
			_wm: Config;
			title: any;
			description: any;
			condition: any;
			map: any;
			marker: any;
			icon: number;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
		}
		class EventTrigger extends Entity {
			eventType: any;
			startCondition: any;
			endCondition: any;
			event: any;
			eventCall: any;
			triggerVar: any;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			onKill: (a?: any) => any;
			update: () => any;
			varsChanged: () => any;
		}
		class LocationEvent extends Entity {
			startCondition: any;
			event: any;
			triggerVar: any;
			_wm: Config;
			constructor(a?: any, d?: any, c?: any, e?: any);
			init: (a?: any, d?: any, c?: any, e?: any) => any;
			onKill: (a?: any) => any;
			update: () => any;
		}
		class NPC extends sc.ActorEntity {
			characterName: any;
			character: any;
			npcStates: any;
			npcStatesData: any;
			activeStateIdx: any;
			configs: {[key: string]: any};
			hidden: boolean;
			interactEntry: any;
			eventBlocked: boolean;
			deferredReset: boolean;
			npcEffects: EffectSheet;
			interactIcons: {
				normal: sc.MapInteractIcon;
				shop: sc.MapInteractIcon;
				quest: sc.MapInteractIcon;
				arena: sc.MapInteractIcon;
				newMsg: sc.MapInteractIcon;
				trade: sc.MapInteractIcon;
				xeno: sc.MapInteractIcon;
				xenoEvent: sc.MapInteractIcon;
			};
			lookAtAction: any;
			eventCall: any;
			doPostEventAction: boolean;
			xenoDialog: any;
			xenoDialogGui: any;
			permaEffect: any;
			displayName: any;
			displayTrigger: any;
			displayNameRandom: any;
			respawn: {
				pos: any;
			};
			_wm: Config;
			hideHandle: any;
			hideManager: any;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			onTerrainUpdate: () => any;
			setRespawnPoint: (a?: any) => any;
			checkQuickRespawn: () => any;
			doQuickRespawn: () => any;
			getQuickMenuSettings: () => any;
			onLoadableComplete: (c?: any) => any;
			onKill: (a?: any) => any;
			update: () => any;
			onPartySwapHide: () => any;
			postActionUpdate: () => any;
			varsChanged: () => any;
			resetNpcState: (a?: any) => any;
			setConfig: (a?: any) => any;
			hasNpcStateChanged: () => any;
			updateNpcState: (b?: any, c?: any) => any;
			setMapInteractIcon: (a?: any) => any;
			setXenoDialog: (a?: any) => any;
			isXenoTextFinished: () => any;
			cancelXenoDialog: () => any;
			_initXenoDialogGui: () => any;
			onInteraction: () => any;
			onEventStart: () => any;
			onEventEnd: () => any;
			startTradeMenu: () => any;
			cancelPostEventAction: () => any;
		}
		class Crosshair extends Entity {
			offset: {
				x: number;
				y: number;
				z: number;
			};
			tileSheet: TileSheet;
			thrower: any;
			controller: any;
			rangeStart: any;
			aimTime: number;
			maxAngleMove: any;
			chargeActive: boolean;
			rangeCurrent: number;
			currentCharge: number;
			speedFactor: number;
			baseSpeedFactor: number;
			doBlink: boolean;
			gamepadMode: boolean;
			active: boolean;
			special: boolean;
			circleGlow: number;
			_lastDir: any;
			_aimDir: any;
			_dots: any;
			_currentDot: number;
			sounds: {
				charged: Sound;
			};
			soundTimer: number;
			dirHelperDrawInfo: any;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			initSprites: () => any;
			getDir: (a?: any) => any;
			getThrowDir: (a?: any) => any;
			isThrowCharged: () => any;
			setThrown: () => any;
			setBaseSpeedFactor: (a?: any) => any;
			setSpeedFactor: (a?: any) => any;
			setCircleGlow: () => any;
			reducePrecision: (a?: any) => any;
			setSpecial: (a?: any) => any;
			setActive: (a?: any) => any;
			deferredUpdate: () => any;
			updateSprites: () => any;
			onKill: (a?: any) => any;
			_updateCrossHair: (b?: any, e?: any, g?: any, h?: any, i?: any, j?: any, v?: any, q?: any, s?: any) => any;
			_getThrowerPos: (a?: any) => any;
		}
		class CrosshairDot extends AnimatedEntity {
			blocks: {[key: string]: any};
			tileSheet: TileSheet;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			update: () => any;
		}
		class Player extends sc.PlayerBaseEntity {
			skin: {
				appearanceFx: any;
				appearance: any;
				stepFx: any;
				auraFx: any;
				auraFxHandle: any;
				pet: any;
			};
			proxies: any;
			model: any;
			state: number;
			throwCounter: number;
			attackCounter: number;
			attackResetTimer: number;
			throwDir: any;
			throwDirData: any;
			doAttack: boolean;
			lastMoveDir: any;
			dashCount: number;
			dashAttackCount: number;
			maxDash: number;
			keepLastMoveDir: number;
			moveDirStartedTimer: number;
			jumpPoint: any;
			jumpForwardDir: any;
			idle: {
				timer: number;
				actions: any;
				petAction: any;
			};
			gui: {[key: string]: any};
			cameraHandle: any;
			cameraTargets: any;
			mapStartPos: any;
			actionBlocked: {
				action: number;
				charge: number;
				dash: number;
				reaim: number;
				move: number;
			};
			combatStats: {
				lastTarget: any;
			};
			dashDir: any;
			dashDirData: any;
			dashTimer: number;
			dashBlock: number;
			doEscapeTimer: number;
			stunEscapeDash: boolean;
			dashPerfect: boolean;
			perfectGuardCooldown: number;
			charging: {
				time: any;
				cancelTime: number;
				swapped: boolean;
				type: any;
				maxLevel: number;
				fx: any;
				block: number;
				msg: any;
				executeLevel: number;
				prefDir: any;
			};
			chargeThrowCharged: boolean;
			floating: boolean;
			recordInput: boolean;
			interactObject: any;
			explicitAimStart: number;
			levelUpNotifier: any;
			itemConsumer: any;
			isPlayer: boolean;
			hidePets: boolean;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			initModel: () => any;
			replaceAnimSheet: (a?: any) => any;
			initIdleActions: () => any;
			doPetAction: () => any;
			updateAnimSheet: (a?: any) => any;
			updateSkinStepFx: () => any;
			updateSkinAura: () => any;
			updateSkinPet: (a?: any) => any;
			onEffectEvent: (a?: any) => any;
			regenPvp: (a?: any) => any;
			updateModelStats: (a?: any) => any;
			hasCameraTarget: (a?: any) => any;
			addCameraTarget: (a?: any, b?: any) => any;
			removeCameraTarget: (a?: any, b?: any) => any;
			removeAllCameraTargets: (a?: any) => any;
			_updateCameraHandle: (a?: any) => any;
			onPlayerPlaced: () => any;
			onMoveEffect: (a?: any) => any;
			setAction: (a?: any, b?: any, c?: any) => any;
			doCombatAction: (a?: any) => any;
			setActionBlocked: (a?: any) => any;
			clearActionBlocked: () => any;
			showChargeEffect: (a?: any) => any;
			clearCharge: () => any;
			onKill: (a?: any) => any;
			show: () => any;
			getChargeType: (a?: any, b?: any) => any;
			getCurrentChargeLevel: () => any;
			getMaxChargeLevel: (a?: any) => any;
			startCharge: (a?: any) => any;
			getChargeAction: (a?: any, b?: any) => any;
			quickStateSwitch: (a?: any) => any;
			isElementChangeBlocked: () => any;
			isControlBlocked: () => any;
			update: () => any;
			gatherInput: () => any;
			handleDash: (a?: any, b?: any, c?: any, d?: any) => any;
			handleGuard: (a?: any, b?: any) => any;
			handleCharge: (a?: any, c?: any) => any;
			handleStateChange: (a?: any, b?: any) => any;
			updatePlayerMovement: (a?: any, b?: any) => any;
			handleStateStart: (a?: any, b?: any) => any;
			startThrowAction: (a?: any, b?: any) => any;
			startCloseCombatAction: (a?: any, b?: any) => any;
			startDash: () => any;
			deferredUpdate: () => any;
			postActionUpdate: () => any;
			cancelInteract: () => any;
			onPreDamageModification: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
			onPlayerShieldBreak: () => any;
			onPerfectDash: () => any;
			onDamageTaken: (a?: any, b?: any) => any;
			onHeal: (a?: any, b?: any) => any;
			onTargetHit: (a?: any, b?: any, c?: any, d?: any) => any;
			onJump: (a?: any, b?: any) => any;
			onPhysicsSquish: (a?: any) => any;
			varsChanged: () => any;
			modelChanged: (a?: any, b?: any, c?: any) => any;
			copyModelSkills: () => any;
			doQuickRespawn: (a?: any, b?: any, c?: any) => any;
			onRespawnEnd: () => any;
			isThrowCharged: () => any;
			setOverrideBall: (a?: any) => any;
			useItem: (a?: any) => any;
			onVarAccess: (a?: any, b?: any) => any;
		}
		class Block extends AnimatedEntity {
			tileSheet: TileSheet;
			timer: number;
			style: number;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			update: () => any;
			collideWith: () => any;
		}
		class Blocker extends AnimatedEntity {
			active: boolean;
			maxHeight: number;
			minHeight: number;
			variable: any;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			update: () => any;
			varsChanged: () => any;
			animationEnded: () => any;
		}
		class BombPanel extends AnimatedEntity {
			respawnTimer: number;
			bomb: any;
			_wm: Config;
			effects: {
				bomb: EffectSheet;
			};
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			update: () => any;
			spawnBomb: (a?: any) => any;
			hasBomb: () => any;
			onBombStart: () => any;
			onBombExplode: () => any;
		}
		class WaterBubblePanel extends AnimatedEntity {
			respawnTimer: number;
			currentBubble: any;
			active: boolean;
			_wm: Config;
			effects: {
				sheet: EffectSheet;
			};
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			update: () => any;
			spawnBubble: (a?: any) => any;
			onBubbleStart: () => any;
			onBubbleBurst: () => any;
		}
		class Compressor extends AnimatedEntity {
			chargeState: number;
			dischargeTimer: number;
			currentElement: number;
			compressorBall: any;
			ballHeight: number;
			_wm: Config;
			effects: {
				sheet: EffectSheet;
				hideHandle: any;
			};
			sounds: {
				charge: Sound;
			};
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			createCompressorBall: () => any;
			update: () => any;
			resetCharge: () => any;
			updateSprites: () => any;
			ballHit: (a?: any) => any;
			isBallAdjust: () => any;
			doBallAdjust: (a?: any, b?: any, c?: any) => any;
			isBallDestroyer: (a?: any, b?: any, c?: any) => any;
		}
		class AntiCompressor extends AnimatedEntity {
			_wm: Config;
			effects: {
				sheet: EffectSheet;
			};
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			ballHit: (a?: any) => any;
		}
		class CompressorBouncer extends AnimatedEntity {
			_wm: Config;
			effects: {
				sheet: EffectSheet;
			};
			face: any;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			ballHit: (a?: any) => any;
			varsChanged: () => any;
		}
		class WaterBlock extends AnimatedEntity {
			blockType: number;
			state: number;
			changeDuration: number;
			timer: number;
			compressorSlow: number;
			effects: {
				sheet: EffectSheet;
				handle: any;
				hitHandle: any;
			};
			_wm: Config;
			constructor(a?: any, c?: any, e?: any, f?: any);
			init: (a?: any, c?: any, e?: any, f?: any) => any;
			onKill: (a?: any) => any;
			steam: (a?: any, b?: any) => any;
			isFrozen: () => any;
			turnIce: () => any;
			melt: () => any;
			onEffectEvent: (a?: any) => any;
			reform: () => any;
			bounce: () => any;
			collideWith: (b?: any, c?: any) => any;
			onGroundAdd: (a?: any) => any;
			ballHit: (b?: any) => any;
			update: () => any;
		}
		class KeyPanel extends AnimatedEntity {
			_wm: Config;
			effects: {
				key: EffectSheet;
				activeHandle: any;
				chargedHandle: any;
			};
			throwerEntity: any;
			active: boolean;
			keyType: any;
			constructor(a?: any, d?: any, c?: any, e?: any);
			init: (a?: any, d?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			setThrower: (a?: any) => any;
			setActive: (a?: any) => any;
			hasKeys: () => any;
			update: () => any;
			collideWith: (a?: any) => any;
		}
		class BallChanger extends AnimatedEntity {
			isOn: boolean;
			condition: any;
			changerType: any;
			disableTimer: number;
			disableBall: any;
			ballTime: number;
			resetBounce: boolean;
			_wm: Config;
			fx: {
				sheet: EffectSheet;
			};
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			update: () => any;
			varsChanged: () => any;
			ballHit: (a?: any) => any;
		}
		class WallBase extends Entity {
			condition: any;
			active: boolean;
			wallCollType: number;
			wallZHeight: number;
			wallBlockers: any;
			skipRender: boolean;
			noNavMapBlock: boolean;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			onKill: (a?: any) => any;
			updateWallBlockers: (a?: any) => any;
			varsChanged: () => any;
		}
		class WallHorizontal extends WallBase {
			gfx: any;
			patterns: any;
			leftEnd: number;
			rightEnd: number;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
		}
		class WallVertical extends WallBase {
			gfx: any;
			patterns: any;
			topEnd: number;
			bottomEnd: number;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
		}
		class WallBlocker extends Entity {
			maxHeight: number;
			colorGfx: any;
			timer: number;
			MOVE_TIME: number;
			GLOW_TIME: number;
			skipRender: boolean;
			navBlocker: any;
			noNavMapBlock: boolean;
			effectPattern: any;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			onKill: (a?: any) => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
			setActive: (a?: any, b?: any) => any;
		}
		class GlowingLine extends Entity {
			patterns: any;
			timer: number;
			glowing: boolean;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
			varsChanged: () => any;
		}
		class Lorry extends AnimatedEntity {
			lorryType: any;
			respawnTimer: number;
			moveType: any;
			initDir: any;
			moving: boolean;
			maxSpeed: number;
			currentSpeed: number;
			slowDownAccel: number;
			pauseTimer: number;
			lightHandle: any;
			bombSnap: boolean;
			fxHandle: any;
			moveDest: {
				prevRail: any;
				currentRail: any;
				nextRail: any;
				points: any;
				pointIdx: number;
			};
			_wm: Config;
			constructor(a?: any, b?: any, d?: any, g?: any);
			init: (a?: any, b?: any, d?: any, g?: any) => any;
			show: (a?: any) => any;
			resetPos: (a?: any, e?: any) => any;
			setMove: (a?: any, b?: any) => any;
			update: () => any;
			moveLorry: () => any;
			collideWith: (a?: any) => any;
			varsChanged: () => any;
			stepPoint: () => any;
			flip: () => any;
			grabRail: (a?: any) => any;
			applyMarkerPosition: (a?: any) => any;
		}
		class LorryRespawner extends AnimatedEntity {
			lorrySrc: any;
			lorry: any;
			initDir: any;
			lastAlpha: number;
			_wm: Config;
			constructor(a?: any, b?: any, d?: any, g?: any);
			init: (a?: any, b?: any, d?: any, g?: any) => any;
			fetchLorry: () => any;
			update: () => any;
		}
		class LorryRail extends AnimatedEntity {
			entries: any;
			currentEntry: any;
			connectedNeighbours: boolean;
			_wm: Config;
			constructor(a?: any, b?: any, d?: any, g?: any);
			init: (a?: any, b?: any, d?: any, g?: any) => any;
			initSprites: () => any;
			show: (a?: any) => any;
			connectNeighbours: () => any;
			connectNeighboursForEntry: (a?: any) => any;
			pushEntry: (a?: any, b?: any) => any;
			getInitialPoints: (b?: any, d?: any, f?: any) => any;
			getGoalDistance: (a?: any, b?: any, d?: any) => any;
			getPoints: (a?: any, b?: any) => any;
			_getPointsForEntry: (a?: any, b?: any, d?: any, g?: any) => any;
			_transferPoints: (a?: any, b?: any, d?: any) => any;
			updateEntry: (a?: any) => any;
			update: () => any;
			onKill: (a?: any) => any;
			setEntrySprite: (a?: any, b?: any) => any;
			updateSprites: () => any;
			varsChanged: () => any;
		}
		class OneTimeSwitch extends AnimatedEntity {
			hitCondition: any;
			ballDestroyer: boolean;
			timer: number;
			fullZHeight: number;
			variable: string;
			isOn: boolean;
			sounds: {
				hit: Sound;
				bing: Sound;
			};
			switchType: any;
			data: any;
			fx: {[key: string]: any};
			fxHandle: any;
			fxHideHandle: any;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			show: (b?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (b?: any) => any;
			onKill: (b?: any) => any;
			update: () => any;
			ballHit: (b?: any) => any;
			animationEnded: (b?: any) => any;
			setOn: () => any;
			finalizeOn: () => any;
			varsChanged: () => any;
			setOff: () => any;
		}
		class ElementShieldSrc extends AnimatedEntity {
			respawnTimer: number;
			currentShield: any;
			active: boolean;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			update: () => any;
			spawnShield: (a?: any) => any;
			onShieldReset: () => any;
		}
		class FloorSwitch extends AnimatedEntity {
			hitCondition: any;
			ballDestroyer: boolean;
			switchType: any;
			variable: string;
			isOn: boolean;
			lockCondition: any;
			setOnDelay: number;
			effects: {
				sheet: EffectSheet;
			};
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			show: (b?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (b?: any) => any;
			_isStillPressed: () => any;
			update: () => any;
			activate: (b?: any) => any;
			deactivate: () => any;
			varsChanged: () => any;
			collideWith: (b?: any) => any;
			onGroundAdd: (b?: any) => any;
			checkEntityArraySupport: (b?: any) => any;
			isEntitySupported: (b?: any) => any;
		}
		class Magnet extends AnimatedEntity {
			dir: number;
			targetDir: number;
			defaultDir: number;
			face: any;
			altDirs: any;
			pull: {
				timer: number;
				entities: any;
				pulling: any;
				moved: any;
				done: boolean;
			};
			effects: {
				sheet: EffectSheet;
				handle: any;
			};
			_wm: Config;
			constructor(a?: any, b?: any, e?: any, f?: any);
			init: (a?: any, b?: any, e?: any, f?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			update: () => any;
			startPull: () => any;
			fetchPullEntities: () => any;
			isPullActive: () => any;
			pullEntities: () => any;
			varsChanged: () => any;
			updateDir: (a?: any) => any;
			ballHit: (a?: any) => any;
		}
		class MultiHitSwitch extends AnimatedEntity {
			hitCondition: any;
			ballDestroyer: boolean;
			activeZHeight: number;
			variable: string;
			isOn: boolean;
			hitsToActive: number;
			currentHits: number;
			decreaseDelay: number;
			decreaseRepeat: number;
			timerUntilDecrease: number;
			timerDecreaseStep: number;
			hitSound: Sound;
			countSound: Sound;
			activateSound: Sound;
			fx: {[key: string]: any};
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			show: (b?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (b?: any) => any;
			onKill: (b?: any) => any;
			update: () => any;
			ballHit: (b?: any) => any;
			animationEnded: (b?: any) => any;
			_setAnimation: () => any;
		}
		class BounceSwitch extends AnimatedEntity {
			ballDestroyer: boolean;
			variable: any;
			group: any;
			isOn: boolean;
			effects: EffectSheet;
			sounds: {
				hit: Sound;
				bing: Sound;
				fail: Sound;
			};
			timer: number;
			cameraHandle: any;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			update: () => any;
			ballHit: (b?: any) => any;
			animationEnded: (b?: any) => any;
			onGroupReset: () => any;
			onGroupResolve: () => any;
		}
		class BounceBlock extends AnimatedEntity {
			group: any;
			blockState: number;
			maxZHeight: number;
			timer: any;
			cameraAction: any;
			effects: EffectSheet;
			ballTime: number;
			sounds: {
				bing: Sound;
			};
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			ballHit: (b?: any, a?: any) => any;
			onGroupResolve: (b?: any) => any;
			onGroupReset: () => any;
			update: () => any;
			updateSprites: () => any;
		}
		class ElementPole extends AnimatedEntity {
			data: any;
			gfx: any;
			group: any;
			active: boolean;
			charge: {
				state: any;
				element: number;
				prevElement: number;
				timer: number;
				lightHandles: any;
			};
			effects: {
				sheet: EffectSheet;
				handle: any;
				hideHandle: any;
			};
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			onKill: (a?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
			chargeElement: (a?: any, b?: any, c?: any, d?: any) => any;
			resetTimer: (b?: any) => any;
			addLight: (a?: any) => any;
			discharge: (b?: any) => any;
			showEffect: (b?: any, c?: any, d?: any) => any;
			ballHit: (c?: any) => any;
			onComplete: () => any;
			onDestInit: (b?: any) => any;
			onFinalize: () => any;
			onCancel: () => any;
			isBallAdjust: () => any;
			doBallAdjust: (a?: any, b?: any, c?: any, d?: any) => any;
			isBallDestroyer: () => any;
		}
		class ElementPoleDest extends AnimatedEntity {
			group: any;
			element: any;
			state: any;
			_wm: Config;
			effects: {
				sheet: EffectSheet;
				handle: any;
				lightHandle: any;
			};
			constructor(a?: any, b?: any, d?: any, e?: any);
			init: (a?: any, b?: any, d?: any, e?: any) => any;
			onKill: (a?: any) => any;
			update: () => any;
			isOn: () => any;
			onPoleHit: (a?: any, b?: any, d?: any) => any;
			onEffectEvent: (a?: any) => any;
			onCancel: () => any;
			turnOn: () => any;
			turnOnGfx: () => any;
			turnOff: () => any;
		}
		class PushPullBlock extends AnimatedEntity {
			_wm: Config;
			effects: {
				sheet: EffectSheet;
				hideHandle: any;
			};
			pushPullable: any;
			squishRespawn: boolean;
			compressorSlow: number;
			pushPullDirection: number;
			bombSnap: boolean;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			show: (b?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (b?: any) => any;
			update: () => any;
			deferredUpdate: () => any;
			resetPos: (b?: any, a?: any) => any;
			onInteraction: () => any;
			onInteractionEnd: () => any;
			onKill: (b?: any) => any;
			onMagnetStart: () => any;
			onMagnetEnd: (b?: any) => any;
		}
		class WavePushPullBlock extends AnimatedEntity {
			_wm: Config;
			pushPullable: any;
			phased: boolean;
			squishRespawn: boolean;
			compressorSlow: number;
			bombSnap: boolean;
			effects: {
				sheet: EffectSheet;
				hideHandle: any;
			};
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			show: (b?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (b?: any) => any;
			update: () => any;
			deferredUpdate: () => any;
			onInteraction: () => any;
			onInteractionEnd: () => any;
			onKill: (b?: any) => any;
			resetPos: (b?: any, a?: any) => any;
			onEntityKillDetach: () => any;
			doTeleport: () => any;
			ballHit: (b?: any) => any;
			onMagnetStart: () => any;
			onMagnetEnd: (b?: any) => any;
		}
		class PushPullDest extends AnimatedEntity {
			variable: any;
			zMove: number;
			saveType: number;
			placedData: any;
			placed: boolean;
			zStart: number;
			placeTimer: number;
			delayed: boolean;
			effects: EffectSheet;
			sound: {
				lockIn: Sound;
			};
			_wm: Config;
			constructor(a?: any, b?: any, f?: any, g?: any);
			init: (a?: any, b?: any, f?: any, g?: any) => any;
			onPushPullableDetect: (a?: any, d?: any) => any;
			onPushPullablePlaced: (a?: any) => any;
			savePushPullable: (a?: any) => any;
			loadPushPullable: () => any;
			initPushPullable: () => any;
			_getVarName: () => any;
			update: () => any;
			deferredUpdate: () => any;
			onInteraction: () => any;
			onInteractionEnd: () => any;
		}
		class SlidingBlock extends AnimatedEntity {
			_wm: Config;
			moving: boolean;
			moveDir: any;
			bombSnap: boolean;
			squishRespawn: boolean;
			effects: {
				sheet: EffectSheet;
				handle: any;
			};
			constructor(a?: any, b?: any, e?: any, f?: any);
			init: (a?: any, b?: any, e?: any, f?: any) => any;
			ballHit: (d?: any) => any;
			update: () => any;
		}
		class Switch extends AnimatedEntity {
			ballDestroyer: boolean;
			variable: string;
			isOn: boolean;
			sounds: {
				hit: Sound;
				bing: Sound;
			};
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			ballHit: (b?: any) => any;
			varsChanged: () => any;
		}
		class Destructible extends AnimatedEntity {
			enemyInfo: any;
			permaDestruct: any;
			onDestructIncrease: any;
			onPreDestructIncrease: any;
			hitSide: any;
			hitCount: number;
			conditionFunction: any;
			sounds: {
				hit: Sound;
				block: Sound;
			};
			effects: {
				base: EffectSheet;
				pre: any;
				boom: any;
				debris: any;
				debrisAngle: number;
				debrisDelay: number;
				preHandle: any;
				boomHandle: any;
			};
			range: {
				key: any;
				delay: number;
				killTimer: any;
				padding: number;
			};
			keyConsume: any;
			hitSound: any;
			blockNavMap: boolean;
			navBlocker: any;
			blinkTimer: number;
			noBlinking: boolean;
			varState: number;
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			onKill: (a?: any) => any;
			onSave: () => any;
			getDestructVarName: () => any;
			update: () => any;
			onEffectEvent: (a?: any) => any;
			ballHit: (a?: any) => any;
			startDestruction: () => any;
			destroy: (a?: any) => any;
			setVariables: () => any;
			invokeRangeKill: (a?: any) => any;
			onRangeKill: (a?: any, b?: any) => any;
			throwDebris: () => any;
			isBallDestroyer: (a?: any, b?: any) => any;
		}
		class ItemDestruct extends AnimatedEntity {
			_wm: Config;
			blinkTimer: number;
			dropped: boolean;
			itemDrops: any;
			typeData: any;
			permaDeath: boolean;
			globalKey: any;
			enemyInfo: any;
			enemyChance: any;
			boomEffect: any;
			debrisEffect: any;
			trigger: string;
			indestructible: boolean;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			_getVarPrefix: () => any;
			onKill: (a?: any) => any;
			update: () => any;
			ballHit: (a?: any) => any;
			destroy: () => any;
			setDropped: () => any;
			dropItem: () => any;
			isBallDestroyer: () => any;
		}
		class RegenDestruct extends AnimatedEntity {
			hitSide: any;
			conditionFunction: any;
			effects: {
				base: EffectSheet;
				boom: any;
				debris: any;
				regen: any;
				boomHandle: any;
				regenHandle: any;
			};
			blockNavMap: boolean;
			navBlocker: any;
			blinkTimer: number;
			regenMaxTime: number;
			regenTimer: number;
			collType: any;
			collideCallback: any;
			zHeight: number;
			_wm: Config;
			constructor(a?: any, b?: any, e?: any, f?: any);
			init: (a?: any, b?: any, e?: any, f?: any) => any;
			show: (a?: any) => any;
			onKill: (a?: any) => any;
			startRegen: () => any;
			isActive: () => any;
			regenerate: () => any;
			regenComplete: () => any;
			update: () => any;
			onEffectEvent: (a?: any) => any;
			ballHit: (a?: any) => any;
			destroy: (a?: any, b?: any) => any;
			varsChanged: () => any;
			collideWith: (a?: any, b?: any) => any;
			throwDebris: () => any;
			isBallDestroyer: (a?: any, b?: any) => any;
		}
		class ExtractPlatform extends AnimatedEntity {
			_wm: Config;
			condition: any;
			terrain: any;
			zTimer: number;
			zTime: number;
			activeZHeight: number;
			inactiveZHeight: number;
			activeState: boolean;
			_baseZ: number;
			_startZ: number;
			_targetZ: number;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			update: () => any;
			varsChanged: () => any;
		}
		class DynamicPlatform extends ActorEntity {
			_wm: Config;
			currentState: any;
			states: any;
			pauseCondition: any;
			pauseAnimation: any;
			baseConfig: any;
			paused: boolean;
			skipWaitForAction: boolean;
			_switchState: boolean;
			_stateReached: boolean;
			fx: {[key: string]: any};
			constructor(a?: any, d?: any, c?: any, e?: any);
			init: (a?: any, d?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			update: () => any;
			postActionUpdate: () => any;
			onKill: (a?: any) => any;
			updateStates: (a?: any) => any;
			playCurrentState: (a?: any) => any;
			varsChanged: () => any;
			updatePause: () => any;
		}
		class OLPlatform extends Entity {
			_wm: Config;
			terrain: any;
			maps: any;
			startPos: any;
			states: any;
			speed: number;
			staticSpeed: boolean;
			squishRespawn: boolean;
			usePositionalSound: boolean;
			sound: {
				move: Sound;
			};
			_lastPos: any;
			timer: any;
			currentState: any;
			spritesInitialized: boolean;
			navBlocker: any;
			quickNavUpdate: boolean;
			constructor(a?: any, b?: any, e?: any, f?: any);
			init: (a?: any, b?: any, e?: any, f?: any) => any;
			show: (a?: any) => any;
			onKill: () => any;
			updateState: (b?: any) => any;
			update: () => any;
			updateSprites: () => any;
			varsChanged: () => any;
		}
		class EnemyCounter extends AnimatedEntity {
			gfx: any;
			enemyGroup: any;
			enemyCount: number;
			preCount: number;
			postCount: number;
			preVariable: any;
			postVariable: any;
			done: boolean;
			shuffleCondition: any;
			timer: number;
			MAX_FLASH_TIME: number;
			sounds: {
				count: Sound;
				done: Sound;
			};
			effects: {
				sheet: EffectSheet;
				hideHandle: any;
			};
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			initSprites: () => any;
			update: () => any;
			onCombatEvent: (a?: any, b?: any) => any;
			onCombatMarbleReach: () => any;
			updateSprites: () => any;
			onKill: (a?: any) => any;
			decreaseCount: () => any;
		}
		class KillCounter extends Entity {
			enemyGroup: any;
			killCount: number;
			mode: any;
			preCount: number;
			variable: any;
			done: boolean;
			_wm: Config;
			constructor(a?: any, d?: any, c?: any, e?: any);
			init: (a?: any, d?: any, c?: any, e?: any) => any;
			onCombatEvent: (a?: any, d?: any) => any;
			onKill: (a?: any) => any;
		}
		class GroupSwitch extends AnimatedEntity {
			hitCondition: any;
			ballDestroyer: boolean;
			activeCondition: any;
			group: any;
			updateType: any;
			activeBoolVar: any;
			activeCountVar: any;
			activeZHeight: number;
			firstTrigger: any;
			isOn: boolean;
			sounds: {
				hit: Sound;
				bing: Sound;
			};
			time: number;
			timer: number;
			isSpinning: boolean;
			_wm: Config;
			constructor(a?: any, d?: any, c?: any, e?: any);
			init: (a?: any, d?: any, c?: any, e?: any) => any;
			onKill: (a?: any) => any;
			setOff: () => any;
			setOn: () => any;
			update: () => any;
			ballHit: (a?: any) => any;
			animationEnded: (a?: any) => any;
		}
		class Chest extends AnimatedEntity {
			_wm: Config;
			mapIcons: sc.MapInteractIcon;
			mapIconsKey: sc.MapInteractIcon;
			effects: {
				sheet: EffectSheet;
				handle: any;
			};
			interactEntry: any;
			hideHandle: any;
			isOpen: boolean;
			chestVariable: boolean;
			item: any;
			amount: number;
			chestType: any;
			lockedIcon: boolean;
			_itemName: any;
			_trigger: any;
			_initialized: boolean;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			_initGfx: () => any;
			onEffectEvent: (b?: any) => any;
			show: (b?: any) => any;
			_updateIcon: () => any;
			onHideRequest: () => any;
			update: () => any;
			onInteraction: () => any;
			openUp: () => any;
			_reallyOpenUp: () => any;
			isOpened: () => any;
			animationEnded: (b?: any) => any;
			varsChanged: () => any;
		}
		class QuicksandHole extends AnimatedEntity {
			_wm: Config;
			effects: {
				sheet: EffectSheet;
			};
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			show: (b?: any) => any;
			update: () => any;
			onQuickSandFall: (b?: any) => any;
			onGroundAdd: (b?: any) => any;
			onGroundRemove: (b?: any) => any;
		}
		class SteamPipe extends Entity {
			pipeType: any;
			gfx: any;
			steam: {
				startPoint: number;
				duration: number;
				startTimer: number;
				endTimer: number;
				lightTimer: number;
				propagated: boolean;
				glowEntity: any;
			};
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			onKill: (a?: any) => any;
			initSprites: () => any;
			update: () => any;
			updateSprites: () => any;
			_cutSprite: (a?: any, b?: any, c?: any) => any;
			receiveSteam: (a?: any, b?: any, c?: any) => any;
		}
		class SteamTurnout extends AnimatedEntity {
			turnDefault: any;
			turnAlt: any;
			condition: any;
			points: any;
			isOn: boolean;
			effects: {
				sheet: EffectSheet;
			};
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			receiveSteam: (a?: any, b?: any, c?: any) => any;
			varsChanged: () => any;
		}
		class SteamOven extends AnimatedEntity {
			effects: {
				sheet: EffectSheet;
				handle: any;
			};
			_wm: Config;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			collideWith: (a?: any, b?: any) => any;
			startSteam: () => any;
		}
		class TeslaCoil extends AnimatedEntity {
			chargeTimer: number;
			chargeHitExceptions: any;
			source: boolean;
			fast: boolean;
			effects: {
				sheet: EffectSheet;
				handle: any;
			};
			effectAlign: any;
			_wm: Config;
			constructor(a?: any, b?: any, e?: any, f?: any);
			init: (a?: any, b?: any, e?: any, f?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			onActionEndDetach: () => any;
			extendCharge: (a?: any) => any;
			dischargeAction: any;
			discharge: (d?: any) => any;
			update: () => any;
			ballHit: (a?: any) => any;
		}
		class WaveTeleport extends AnimatedEntity {
			effects: {
				sheet: EffectSheet;
				handle: any;
				hideHandle: any;
			};
			teleportTimer: number;
			teleportTargets: any;
			_wm: Config;
			permaRemove: boolean;
			delayedHide: boolean;
			constructor(a?: any, b?: any, d?: any, g?: any);
			init: (a?: any, b?: any, d?: any, g?: any) => any;
			show: (a?: any) => any;
			onActionEndDetach: () => any;
			onHideRequest: () => any;
			onEffectEvent: (a?: any) => any;
			startTeleport: () => any;
			doTeleport: () => any;
			update: () => any;
			hasBlockOnTop: () => any;
			ballHit: (a?: any) => any;
			isBallDestroyer: (a?: any, b?: any, d?: any) => any;
		}
		class RotateBlocker extends AnimatedEntity {
			_wm: Config;
			active: boolean;
			currentDir: number;
			currentAngle: number;
			destAngle: number;
			turnTimer: number;
			interactIcons: {
				vertical: sc.MapInteractIcon;
			};
			effects: {
				sheet: any;
			};
			constructor(a?: any, d?: any, c?: any, e?: any);
			init: (a?: any, d?: any, c?: any, e?: any) => any;
			show: (a?: any) => any;
			onHideRequest: () => any;
			setActive: (a?: any, d?: any) => any;
			onEffectEvent: (a?: any) => any;
			onKill: (a?: any) => any;
			onInteraction: () => any;
			ballHit: (a?: any) => any;
			turn: (a?: any) => any;
			update: () => any;
			updateSprites: () => any;
			varsChanged: () => any;
		}
		class BossPlatform extends Entity {
			_wm: Config;
			terrain: any;
			maps: any;
			startPos: any;
			movements: any;
			fixedHeight: number;
			fixedState: number;
			color: any;
			colorAlpha: number;
			respawnOkay: boolean;
			gfx: any;
			constructor(a?: any, b?: any, e?: any, f?: any);
			init: (a?: any, b?: any, e?: any, f?: any) => any;
			show: (a?: any) => any;
			onKill: () => any;
			update: () => any;
			nudge: (a?: any, b?: any, e?: any, f?: any, g?: any) => any;
			setFixedHeight: (a?: any) => any;
			releaseHeightFix: () => any;
			updateSprites: () => any;
		}
		class Analyzable extends Entity {
			_wm: Config;
			color: any;
			text: any;
			visible: any;
			constructor(a?: any, d?: any, c?: any, e?: any);
			init: (a?: any, d?: any, c?: any, e?: any) => any;
			isQuickMenuVisible: () => any;
			getQuickMenuSettings: () => any;
		}
		class XenoDialog extends Entity {
			_wm: Config;
			dialog: any;
			members: any;
			running: boolean;
			blockTimer: number;
			padTimer: number;
			currentTextIndex: any;
			currentEntity: any;
			currentText: string;
			currentEvent: any;
			fx: {
				sheet: EffectSheet;
				handle: any;
			};
			once: boolean;
			hasRunOnce: boolean;
			ignoreZ: boolean;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			onHideRequest: () => any;
			onKill: (a?: any) => any;
			update: () => any;
			startDialog: () => any;
			cancelDialog: () => any;
			getCurrentText: () => any;
			getCallbackEvent: () => any;
			onEventStart: () => any;
			onEventEnd: () => any;
			_clearFx: () => any;
			_showFx: () => any;
			_showNextMessage: () => any;
			_clearCurrentIndex: () => any;
			_isInRange: (a?: any, b?: any) => any;
			_initMembers: () => any;
		}
		class ArenaSpawn extends Entity {
			text: string;
			_wm: Config;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
		}
	}
	namespace Camera {
		class PosTarget extends Class {
			pos: any;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
			getPos: (a?: any) => any;
		}
		class EntityTarget extends Class {
			entity: any;
			_zSlow: boolean;
			_currentZ: number;
			_lockZ: boolean;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: () => any;
			getPos: (a?: any) => any;
		}
		class MultiEntityTarget extends Class {
			entities: any;
			_zSlow: boolean;
			_prevFloat: boolean;
			_currentZ: number;
			keepFirstTarget: boolean;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: () => any;
			_getEntitiesZ: () => any;
			getPos: (a?: any) => any;
		}
		class TargetHandle extends Class {
			target: any;
			offset: any;
			zoomOffset: any;
			keepZoomFocusAligned: boolean;
			_offsetDuration: number;
			_offsetTime: number;
			_currentOffset: any;
			_currentZoomOffset: any;
			_lastOffset: any;
			_lastZoomOffset: any;
			zoomTimer: any;
			oldZoom: number;
			targetZoom: number;
			keyspline: any;
			lockZ: boolean;
			constructor(a?: any, b?: any, c?: any);
			init: (a?: any, b?: any, c?: any) => any;
			setOffset: (a?: any, b?: any, c?: any, d?: any, i?: any, j?: any) => any;
			setZoomFocus: () => any;
			setZoom: (a?: any, b?: any, c?: any) => any;
			update: () => any;
			getZoom: () => any;
			onEventEndDetach: () => any;
			onActionEndDetach: () => any;
		}
	}
	namespace Rumble {
		class RumbleHandle extends Class {
			type: number;
			name: any;
			power: number;
			shakeDuration: number;
			time: number;
			fade: boolean;
			offset: any;
			_target: any;
			_start: any;
			_temp: any;
			_timer: number;
			_duration: number;
			_shakeTimer: number;
			ignoreSlowDown: boolean;
			constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any);
			init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
			onEntityKillDetach: () => any;
			update: () => any;
			_updatePosition: (b?: any) => any;
			_lerp: (b?: any, a?: any, d?: any) => any;
			stop: () => any;
			isDone: () => any;
			set: (b?: any, a?: any, d?: any, c?: any) => any;
		}
	}
	namespace EFFECT_ENTRY {
		class RUMBLE extends Class {
			rumbleType: any;
			duration: number;
			power: number;
			speed: number;
			fade: boolean;
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
		}
		class CLEAR_RUMBLE extends Class {
			rumbleType: any;
			duration: number;
			power: number;
			speed: number;
			fade: boolean;
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class WAIT extends EffectStepBase {
			_wm: Config;
		}
		class LOOP_START extends EffectStepBase {
			_wm: Config;
		}
		class LOOP_END extends EffectStepBase {
			_wm: Config;
		}
		class PLAY_ANIM extends EffectStepBase {
			_wm: EffectConfig;
			particleData: any;
			offset: {
				x: number;
				y: number;
				z: number;
			};
			rotOffset: any;
			useTargetAngle: boolean;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
			getDuration: () => any;
		}
		class PLAY_FACE_ANIM extends EffectStepBase {
			particleData: any;
			offset: {
				x: number;
				y: number;
				z: number;
			};
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
			getDuration: () => any;
		}
		class PLAY_ANIM_RANGE extends EffectStepBase {
			particleData: any;
			offset: {
				x: number;
				y: number;
				z: number;
			};
			radius: number;
			duration: number;
			numParticles: number;
			useTargetAngle: boolean;
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			getDuration: () => any;
			start: () => any;
			update: (b?: any, c?: any, d?: any) => any;
		}
		class PLAY_ANIMS_OVER_ENTITY extends EffectStepBase {
			particleData: any;
			duration: number;
			xScale: number;
			yScale: number;
			circular: boolean;
			offset: {
				x: number;
				y: number;
				z: number;
			};
			numParticles: number;
			keySpline: number;
			moveZDist: number;
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
			getDuration: () => any;
			update: (b?: any, d?: any, f?: any, g?: any) => any;
		}
		class DEBRIS_OVER_ENTITY extends EffectStepBase {
			particleData: any;
			xScale: number;
			yScale: number;
			circular: boolean;
			offset: {
				x: number;
				y: number;
				z: number;
			};
			numParticles: number;
			debrisSize: number;
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
			getDuration: () => any;
		}
		class PLAY_SOUND extends EffectStepBase {
			sound: any;
			global: boolean;
			loop: boolean;
			attachHandle: boolean;
			settings: any;
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class PLAY_RANDOM_SOUND extends EffectStepBase {
			sounds: any;
			global: boolean;
			loop: boolean;
			settings: any;
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			clearCached: () => any;
			start: (a?: any) => any;
		}
		class STOP_SOUNDS extends EffectStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
		}
		class PARTICLE_BOX extends EffectStepBase {
			particleData: any;
			padding: {
				x: number;
				y: number;
			};
			boxSide: number;
			numParticles: number;
			flipRightParticles: boolean;
			minSpeed: number;
			maxSpeed: number;
			collision: boolean;
			random: number;
			moveZ: number;
			moveZVariance: number;
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			getDuration: () => any;
			start: (a?: any) => any;
			spawnBoxLine: (f?: any, h?: any, i?: any) => any;
		}
		class FLASH_COLOR extends EffectStepBase {
			color: any;
			alpha: number;
			keepDuration: number;
			duration: number;
			_wm: Config;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			start: (b?: any) => any;
			getDuration: () => any;
			update: (b?: any, a?: any, d?: any, c?: any) => any;
			finish: (b?: any, a?: any) => any;
		}
		class BLINK_COLOR extends EffectStepBase {
			color: any;
			maxAlpha: number;
			minAlpha: number;
			blinkDuration: number;
			blinkCount: number;
			_wm: Config;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			start: (b?: any) => any;
			getDuration: () => any;
			update: (b?: any, a?: any, d?: any, c?: any) => any;
			cancel: (b?: any, a?: any) => any;
			finish: (b?: any, a?: any) => any;
		}
		class FADE_COLOR extends EffectStepBase {
			color: any;
			alpha: number;
			fadeIn: number;
			fadeOut: number;
			duration: number;
			_wm: Config;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			start: (b?: any) => any;
			getDuration: () => any;
			update: (b?: any, a?: any, d?: any, c?: any) => any;
			cancel: (b?: any, a?: any) => any;
			finish: (b?: any, a?: any) => any;
		}
		class CHANGE_ALPHA extends EffectStepBase {
			alpha: number;
			duration: number;
			_wm: Config;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			getDuration: () => any;
			start: (b?: any) => any;
			update: (b?: any, a?: any, d?: any, c?: any) => any;
			finish: (b?: any) => any;
		}
		class CHANGE_SCALE extends EffectStepBase {
			scaleX: number;
			scaleY: number;
			duration: number;
			spline: any;
			_wm: Config;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			getDuration: () => any;
			start: (b?: any) => any;
			update: (b?: any, a?: any, d?: any, c?: any) => any;
			finish: (b?: any) => any;
		}
		class OFFSET_PARTICLE_CIRCLE implements ig.EnemyReactionBase {
			moveDist: number;
			moveVariance: number;
			keySpline: any;
			moveRotate: number;
			rotateWithTime: boolean;
			inverse: boolean;
			normalMoveDist: number;
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			spawn: (a?: any, b?: any, c?: any, d?: any) => any;
		}
		class PARTICLE_CIRCLE implements ig.EnemyReactionBase {
			minSpeed: number;
			maxSpeed: number;
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			spawnVel: (a?: any, b?: any, c?: any) => any;
		}
		class DEBRIS_CIRCLE implements ig.EnemyReactionBase {
			minSpeed: number;
			maxSpeed: number;
			minZSpeed: number;
			maxZSpeed: number;
			zGravityFactor: number;
			zBounciness: any;
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			spawnVel: (a?: any, b?: any, c?: any) => any;
		}
		class SHOOT_HOMING_PARTICLE extends EffectStepBase {
			_wm: EffectConfig;
			particleData: any;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
			_spawnParticles: (a?: any, d?: any, c?: any) => any;
			update: (a?: any, b?: any, c?: any) => any;
			getDuration: () => any;
		}
		class LIGHT extends EffectStepBase {
			size: any;
			fadeIn: number;
			fadeOut: number;
			duration: number;
			maxAlpha: number;
			glow: any;
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
			getDuration: () => any;
		}
		class CLEAR_LIGHT extends EffectStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (a?: any) => any;
			getDuration: () => any;
		}
		class DARKNESS extends EffectStepBase {
			fadeIn: number;
			fadeOut: number;
			duration: number;
			intensity: number;
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
			getDuration: () => any;
		}
		class CLEAR_DARKNESS extends EffectStepBase {
			_wm: Config;
			constructor();
			init: () => any;
			start: (b?: any) => any;
			getDuration: () => any;
		}
		class SCREEN_FLASH extends EffectStepBase {
			color: any;
			fadeIn: number;
			fadeOut: number;
			duration: number;
			intensity: number;
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
			getDuration: () => any;
		}
		class COPY_SPRITE extends EffectStepBase {
			particleData: any;
			color: any;
			colorAlpha: number;
			offset: {
				x: number;
				y: number;
				z: number;
			};
			_wm: EffectConfig;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			start: (b?: any) => any;
		}
		class LASER_SPRITE extends EffectStepBase {
			particleData: any;
			_wm: EffectConfig;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			clearCached: () => any;
			start: (b?: any) => any;
		}
		class PARTICLE_RHOMBUS extends EffectStepBase {
			particleData: any;
			duration: number;
			numParticles: number;
			scale: number;
			radiusSub: number;
			offset: {
				x: number;
				y: number;
				z: number;
			};
			moveDistance: number;
			moveVariance: number;
			randomDirFlip: boolean;
			keySpline: any;
			alongZ: any;
			zRange: number;
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (a?: any) => any;
			getDuration: () => any;
			update: (d?: any, c?: any, e?: any, f?: any) => any;
		}
		class MOVE_OFFSET extends EffectStepBase {
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			getDuration: () => any;
			start: (a?: any) => any;
			update: (a?: any, d?: any, f?: any) => any;
			finish: () => any;
			setEntityOffset: (a?: any, b?: any, d?: any) => any;
		}
		class WIPE extends EffectStepBase {
			dir: number;
			startValue: number;
			endValue: number;
			duration: number;
			_wm: Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			getDuration: () => any;
			start: (a?: any) => any;
			update: (a?: any, b?: any, d?: any, g?: any) => any;
			finish: (a?: any) => any;
			setEntityClipping: (a?: any, b?: any, d?: any, g?: any, h?: any, i?: any, j?: any) => any;
		}
		class WIPE_PARTICLES extends EffectStepBase {
			particleData: any;
			dir: number;
			startValue: number;
			endValue: number;
			duration: number;
			numParticles: number;
			moveOffset: any;
			keySpline: any;
			inverse: boolean;
			_wm: EffectConfig;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			start: (b?: any) => any;
			getDuration: () => any;
			update: (a?: any, e?: any, f?: any, g?: any) => any;
		}
	}
	namespace GUI {
		class IntroScreen extends SequenceGui {
			gfx: {
				rfgLogo: Image;
				rfgText: Image;
				techBG: Image;
				html5Logo: Image;
				impactLogo: Image;
			};
			gui: {
				baseBG: {
					color: string;
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				rfgLogo: {
					gfx: string;
					pos: {
						x: number;
						y: any;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								offsetY: any;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				rfgText: {
					gfx: string;
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								scaleY: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				whiteBG: {
					color: string;
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				techBG: {
					gfx: string;
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								offsetY: number;
								scaleY: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				html5Logo: {
					gfx: string;
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								offsetY: any;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				impactLogo: {
					gfx: string;
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								offsetY: any;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				blackBG: {
					color: string;
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
			};
			timeLine: any;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			screenInteract: any;
			constructor(b?: any);
			init: (b?: any) => any;
			onInteraction: () => any;
			updateDrawables: (b?: any) => any;
			start: () => any;
			end: () => any;
		}
		class TitleLogo extends SequenceGui {
			gfx: {
				logo: Image;
			};
			gui: {
				logoBG: {
					gfx: string;
					src: {
						x: number;
						y: number;
						w: number;
						h: number;
					};
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								scaleX: number;
								scaleY: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				logoC1: {
					gfx: string;
					src: {
						x: number;
						y: number;
						w: number;
						h: number;
					};
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						HIDDEN: {
							state: {
								alpha: number;
								offsetX: number;
							};
							time: number;
							timeFunction: any;
						};
						STATE1: {
							state: {
								offsetX: number;
							};
							time: number;
							timeFunction: any;
						};
						STATE2: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
					};
				};
				logoC2: {
					gfx: string;
					src: {
						x: number;
						y: number;
						w: number;
						h: number;
					};
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						HIDDEN: {
							state: {
								alpha: number;
								offsetX: any;
							};
							time: number;
							timeFunction: any;
						};
						STATE1: {
							state: {
								offsetX: any;
							};
							time: number;
							timeFunction: any;
						};
						STATE2: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
					};
				};
				logoRoss: {
					gfx: string;
					src: {
						x: number;
						y: number;
						w: number;
						h: number;
					};
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								scaleY: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				logoOde: {
					gfx: string;
					src: {
						x: number;
						y: number;
						w: number;
						h: number;
					};
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								scaleY: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				logoTechDemo: {
					gfx: string;
					src: {
						x: number;
						y: number;
						w: number;
						h: number;
					};
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								scaleY: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
				logoTechDemo2: {
					gfx: string;
					src: {
						x: number;
						y: number;
						w: number;
						h: number;
					};
					pos: {
						x: number;
						y: number;
					};
					align: {
						x: any;
						y: any;
					};
					transitions: {
						DEFAULT: {
							state: {[key: string]: any};
							time: number;
							timeFunction: any;
						};
						HIDDEN: {
							state: {
								alpha: number;
								scaleY: number;
							};
							time: number;
							timeFunction: any;
						};
					};
				};
			};
			timeLine: any;
			constructor(b?: any);
			init: (b?: any) => any;
		}
		class PauseScreenLabel extends GuiElementBase {
			timer: number;
			timerTime: number;
			gfx: Image;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			constructor();
			init: () => any;
			update: () => any;
			updateDrawables: (b?: any) => any;
		}
		class CreditsScreen extends GuiElementBase {
			_wm: Config;
			credits: {
				ideaConcept: {
					title: string;
					names: any;
				};
				mainProgramming: {
					title: string;
					names: any;
				};
				graphics: {
					title: string;
					names: any;
				};
				conceptart: {
					title: string;
					names: any;
				};
				leveldesign: {
					title: string;
					names: any;
				};
				sound: {
					title: string;
					names: any;
				};
				music: {
					title: string;
					names: any;
				};
				betatesters: {
					title: string;
					names: any;
				};
				thanks: {
					title: string;
					names: any;
				};
			};
			timeLine: any;
			timer: number;
			timeLineIndex: number;
			done: boolean;
			startCreditsUpdate: boolean;
			variable: any;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				ROLL: {
					state: {
						offsetY: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			logoGui: any;
			constructor(b?: any);
			init: (b?: any) => any;
			clearCached: () => any;
			onAttach: () => any;
			update: () => any;
			_logoDone: () => any;
			_setVar: () => any;
		}
		class GamepadBox extends GuiElementBase {
			transitions: {
				DEFAULT: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			gfx: Image;
			infoButton: any;
			text: any;
			gamepadActive: boolean;
			constructor(b?: any, a?: any, d?: any);
			init: (b?: any, a?: any, d?: any) => any;
			varsChanged: () => any;
			updateDrawables: (b?: any) => any;
		}
		class CounterHud extends sc.RightHudBoxGui {
			maxCount: number;
			currentCount: number;
			variable: any;
			zIndex: number;
			_wm: Config;
			maxNumberGui: any;
			constructor(b?: any);
			init: (b?: any) => any;
			varsChanged: () => any;
			updateNumber: () => any;
			remove: () => any;
			modelChanged: (b?: any, a?: any) => any;
			onSpawn: () => any;
		}
		class ScoreHud extends sc.RightHudBoxGui {
			currentCount: number;
			variable: any;
			zIndex: number;
			_wm: Config;
			numberGui: any;
			_cutscene: boolean;
			constructor(b?: any);
			init: (b?: any) => any;
			varsChanged: () => any;
			remove: () => any;
			modelChanged: (b?: any, a?: any) => any;
			onSpawn: () => any;
		}
		class Information extends sc.SideBoxGui {
			text: any;
			altText: any;
			altCondition: any;
			_wm: Config;
			useAltText: boolean;
			textGui: any;
			hidden: boolean;
			constructor(b?: any);
			init: (b?: any) => any;
			onAttach: () => any;
			onDetach: () => any;
			updateText: () => any;
			modelChanged: (b?: any, a?: any) => any;
			varsChanged: () => any;
			remove: () => any;
		}
		class BarWidget extends sc.BigGenericBar {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				CUTSCENE: {
					state: {
						offsetY: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						scaleX: number;
						scaleY: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			_wm: Config;
			labelGui: any;
			variable: any;
			barType: any;
			prevValue: any;
			hideWhite: boolean;
			constructor(d?: any);
			init: (d?: any) => any;
			onAttach: () => any;
			onDetach: () => any;
			modelChanged: (a?: any, b?: any) => any;
			updateValue: (a?: any, c?: any) => any;
			varsChanged: () => any;
			remove: () => any;
		}
		class LevelUpHud extends SimpleGui {
			transitions: {
				DEFAULT: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			screenInteract: any;
			currentEntry: number;
			timer: number;
			sideStatGui: any;
			lineBox: any;
			constructor(a?: any);
			init: (a?: any) => any;
			update: () => any;
			onInteraction: () => any;
			remove: () => any;
		}
		class Social extends SimpleGui {
			transitions: {
				DEFAULT: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			_wm: Config;
			constructor();
			init: () => any;
			remove: () => any;
		}
		class TimerGui extends sc.SlickBoxRawGui {
			pos: {
				x: number;
				y: number;
			};
			size: {
				x: number;
				y: number;
			};
			pivot: {
				x: number;
				y: number;
			};
			align: {
				x: any;
				y: any;
			};
			_wm: Config;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
						offsetX: any;
					};
					time: number;
					timeFunction: any;
				};
			};
			gfx: Image;
			centiseconds: any;
			seconds: any;
			minutes: any;
			time: number;
			running: boolean;
			zIndex: number;
			constructor(b?: any);
			init: (b?: any) => any;
			update: () => any;
			start: () => any;
			stop: () => any;
			remove: () => any;
		}
		class SergeyMode extends GuiElementBase {
			_wm: Config;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			cornerImage: any;
			patternSheet: any;
			startSound: any;
			endSound: any;
			scroll: number;
			constructor();
			init: () => any;
			clearCached: () => any;
			onAttach: () => any;
			update: () => any;
			updateDrawables: (b?: any) => any;
			remove: () => any;
		}
		class QuestSolvedDialog extends sc.QuestDialogWrapper {
			constructor(a?: any);
			init: (a?: any) => any;
			onCollectRewards: () => any;
		}
		class ARBox extends GuiElementBase {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						scaleX: number;
						scaleY: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			gfx: Image;
			target: any;
			text: any;
			timer: number;
			maxTime: number;
			prevMove: any;
			delta: any;
			arrowX: number;
			mode: any;
			color: any;
			finished: boolean;
			hideOutsideOfScreen: boolean;
			tracker: any;
			constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
			init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
			setTracker: (b?: any) => any;
			update: () => any;
			updateDrawables: (b?: any) => any;
			remove: () => any;
			isFinished: () => any;
			onActionEndDetach: () => any;
			onEntityKillDetach: () => any;
			_getCurrentNumber: () => any;
			_updatePos: (b?: any) => any;
		}
		class StatusBar extends GuiElementBase {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						scaleX: number;
						scaleY: number;
						angle: any;
					};
					time: number;
					timeFunction: any;
				};
			};
			gfx: Image;
			barIconTiles: TileSheet;
			target: any;
			replaceTarget: any;
			currentHp: number;
			targetHp: number;
			timer: number;
			largeTimer: number;
			subHpHandler: any;
			subHpType: number;
			statusEntries: {[key: string]: any};
			statusDisplayOrder: any;
			constructor(a?: any);
			init: (a?: any) => any;
			showHpBar: () => any;
			initWithParams: () => any;
			updateSubHpHandler: () => any;
			modelChanged: (a?: any, b?: any, e?: any) => any;
			initStatusEntries: () => any;
			_shiftFrontStatusDisplayOrder: (a?: any, b?: any) => any;
			setStatusEntry: (a?: any, b?: any) => any;
			updateStatusEntry: (a?: any, b?: any) => any;
			setReplaceTarget: (a?: any) => any;
			setStatusEntryStick: (a?: any, b?: any) => any;
			clearStatusEntry: (a?: any) => any;
			clearAllStatusEntries: () => any;
			setHp: (a?: any, b?: any) => any;
			update: () => any;
			_updateStatusEntry: (a?: any) => any;
			updateDrawables: (a?: any) => any;
			_drawHpBar: (a?: any) => any;
			drawStatusEntry: (b?: any, c?: any, e?: any, f?: any) => any;
			remove: () => any;
			forceRemove: () => any;
		}
		class Interact extends GuiElementBase {
			iconState: number;
			transitions: {
				DEFAULT: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				NEAR: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				AWAY: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						scaleX: number;
						scaleY: number;
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			gfx: Image;
			target: any;
			offset: any;
			icon: any;
			timer: number;
			offsetTimer: number;
			overlayIcon: any;
			subGui: any;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			setIconState: (a?: any) => any;
			setSubGui: (a?: any) => any;
			update: () => any;
			remove: () => any;
			_updatePos: () => any;
		}
		class CreditSection extends GuiElementBase {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			credits: any;
			imageContent: any;
			content: any;
			contentWidth: number;
			finished: boolean;
			isOffscreen: boolean;
			triggers: {[key: string]: any};
			constructor(b?: any);
			init: (b?: any) => any;
			update: () => any;
			onAttach: () => any;
			onDetach: () => any;
			varsChanged: () => any;
			remove: () => any;
			createSection: () => any;
			createImage: (b?: any, a?: any) => any;
			createHeader: (b?: any, a?: any, d?: any) => any;
			createColumnGuis: (b?: any, a?: any) => any;
			createNames: (b?: any, a?: any, d?: any, c?: any) => any;
			createTrigger: (b?: any, a?: any) => any;
			getAlignPos: (b?: any) => any;
		}
	}
	namespace MessageOverlayGui {
		class BlackBar extends GuiElementBase {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN_TOP: {
					state: {
						alpha: number;
						offsetY: any;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN_BOTTOM: {
					state: {
						alpha: number;
						offsetY: any;
					};
					time: number;
					timeFunction: any;
				};
			};
			constructor();
			init: () => any;
			updateDrawables: (a?: any) => any;
		}
		class BottomShadow extends GuiElementBase {
			gfx: Image;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			constructor();
			init: () => any;
			updateDrawables: (a?: any) => any;
		}
		class Entry extends GuiElementBase {
			name: any;
			isEntry: boolean;
			lookRight: boolean;
			order: number;
			beepSound: Sound;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN_LEFT: {
					state: {
						alpha: number;
						offsetX: any;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN_RIGHT: {
					state: {
						alpha: number;
						offsetX: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			constructor(a?: any, b?: any, c?: any, e?: any, f?: any);
			init: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
			addMessage: (a?: any, d?: any) => any;
			hasMessages: () => any;
			clearMessages: () => any;
			setDisplayNameVisible: (a?: any) => any;
			setDisplayName: (a?: any) => any;
			setLookRight: (a?: any) => any;
			remove: () => any;
		}
		class Portrait extends GuiElementBase {
			name: any;
			charExpression: any;
			lookRight: boolean;
			order: number;
			timer: number;
			displayName: any;
			transitions: {
				DEFAULT: {
					state: {
						scaleX: any;
					};
					time: number;
					timeFunction: any;
				};
				DEFAULT_RIGHT: {
					state: {
						scaleX: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN_LEFT: {
					state: {
						scaleX: any;
						alpha: number;
						offsetX: any;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN_RIGHT: {
					state: {
						scaleX: number;
						alpha: number;
						offsetX: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			constructor(a?: any, b?: any, c?: any, e?: any);
			init: (a?: any, b?: any, c?: any, e?: any) => any;
			setLookRight: (a?: any) => any;
			setExpression: (a?: any, b?: any) => any;
			remove: () => any;
			update: () => any;
			updateDrawables: (a?: any) => any;
		}
		class DisplayName extends GuiElementBase {
			ninepatch: NinePatch;
			transitions: {
				DEFAULT: {
					state: {
						scaleX: any;
					};
					time: number;
					timeFunction: any;
				};
				DEFAULT_RIGHT: {
					state: {
						scaleX: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN_LEFT: {
					state: {
						scaleX: any;
						alpha: number;
						offsetY: any;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN_RIGHT: {
					state: {
						scaleX: number;
						alpha: number;
						offsetY: any;
					};
					time: number;
					timeFunction: any;
				};
			};
			text: any;
			constructor(a?: any);
			init: (a?: any) => any;
			updateDrawables: (a?: any) => any;
			setText: (a?: any) => any;
		}
	}
}
declare namespace sc {
	class StartLoader extends ig.Loader {
		timer: ig.Timer;
		endTimer: number;
		draw: () => any;
		_drawBar: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		onEnd: () => any;
	}
	class WPConnection extends ig.Class {
		owner: any;
		connections: any;
		initialized: boolean;
		connectedWPs: any;
		middle: boolean;
		searchData: {
			idx: number;
			cameFrom: any;
			gScore: any;
			fScore: any;
			closed: any;
		};
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		_initWaypoints: () => any;
		addWayPoint: (b?: any) => any;
		getDistance: (b?: any) => any;
		getWayPointConnections: () => any;
		getSearchData: (b?: any) => any;
	}
	class VerionChangeLog extends ig.SingleLoadable {
		major: number;
		minor: number;
		patch: number;
		hotfix: number;
		special: string;
		saveVersion: number;
		oldMajor: number;
		oldMinor: number;
		oldPatch: number;
		changelog: any;
		constructor();
		init: () => any;
		saveCurrentVersion: () => any;
		getLogsBetweenVersions: (b?: any) => any;
		toString: () => any;
		toOnlyNumberString: () => any;
		hasVersionChanged: () => any;
		loadInternal: () => any;
		onerror: (b?: any) => any;
		onload: (b?: any) => any;
		getLastSlotDataUpdated: () => any;
		updateSaveSlotVersion: (b?: any) => any;
		_getVersionString: (b?: any, a?: any, d?: any) => any;
		_toObject: () => any;
	}
	class VersionTracker extends ig.GameAddon {
		loadedVersion: any;
		loadedSaveVersion: any;
		constructor();
		init: () => any;
		onReset: () => any;
		onStorageSave: (b?: any) => any;
		onStoragePreLoad: (b?: any) => any;
	}
	class GlobalInput extends ig.GameAddon {
		constructor();
		init: () => any;
		preUpdateOrder: number;
		onPreUpdate: () => any;
		postUpdateOrder: number;
		onPostUpdate: () => any;
	}
	class Control extends ig.Class {
		repeater: ig.PressRepeater;
		repeaterPressed: boolean;
		autoControl: any;
		_getAttackButton: () => any;
		_getSpecialButton: () => any;
		_getDashButton: () => any;
		_getQuickMenuButton: () => any;
		_getMeleeButton: () => any;
		setAutoControl: (a?: any) => any;
		getMouseX: () => any;
		getMouseY: () => any;
		getGuiClickPre: () => any;
		getGuiClick: () => any;
		getGuiPressed: () => any;
		getGuiHold: () => any;
		getAxesValue: (a?: any) => any;
		isLeftStickDown: () => any;
		isRightStickDown: () => any;
		updateRepeater: () => any;
		aimStart: () => any;
		aiming: () => any;
		attacking: () => any;
		fullScreenAttacking: () => any;
		chargeThrowSwap: () => any;
		chargeAttackSwap: () => any;
		thrown: () => any;
		melee: () => any;
		charge: () => any;
		autoThrown: () => any;
		dashing: () => any;
		dashHold: () => any;
		guarding: () => any;
		moveDir: (b?: any, d?: any, f?: any) => any;
		pause: () => any;
		menu: () => any;
		quickmenu: () => any;
		quickmenuPress: () => any;
		skipCutscene: () => any;
		menuConfirm: () => any;
		menuBack: () => any;
		menuHotkeyHelp: () => any;
		menuHotkeyHelp2: () => any;
		menuHotkeyHelp3: () => any;
		menuHotkeyHelp4: () => any;
		menuSkillLeft: (a?: any) => any;
		menuSkillRight: (a?: any) => any;
		menuSkillUp: (a?: any) => any;
		menuSkillDown: (a?: any) => any;
		menuCircleLeft: () => any;
		menuCircleRight: () => any;
		menuListUp: () => any;
		menuListDown: () => any;
		questCircleLeft: () => any;
		questCircleRight: () => any;
		menuMapLeftDown: (a?: any) => any;
		menuMapRightDown: (a?: any) => any;
		menuMapUpDown: (a?: any) => any;
		menuMapDownDown: (a?: any) => any;
		menuScrollUp: () => any;
		menuScrollDown: () => any;
		arenaScrollUp: () => any;
		arenaScrollDown: () => any;
		scrollUp: () => any;
		scrollDown: () => any;
		interactPressed: (a?: any, b?: any) => any;
		interactDown: () => any;
		leftPressed: () => any;
		rightPressed: () => any;
		upPressed: () => any;
		downPressed: () => any;
		leftPressedSticks: () => any;
		rightPressedSticks: () => any;
		upPressedSticks: () => any;
		downPressedSticks: () => any;
		leftDown: () => any;
		rightDown: () => any;
		upDown: () => any;
		downDown: () => any;
		loreDown: () => any;
		loreUp: () => any;
		elementModeScroll: () => any;
		elementModeSwitch: () => any;
	}
	class StatChange extends ig.Class {
		params: {
			hp: number;
			attack: number;
			defense: number;
			focus: number;
			elemFactor: any;
		};
		modifiers: {[key: string]: any};
		iconString: string;
		constructor(a?: any);
		init: (a?: any) => any;
		multiply: (a?: any, c?: any) => any;
		add: (a?: any, b?: any) => any;
		clear: () => any;
		getStatFactor: (a?: any) => any;
		hasTimer: boolean;
		getTimeFactor: () => any;
		intersectsWith: (b?: any) => any;
	}
	class ItemBuff extends StatChange {
		timer: number;
		time: number;
		itemID: any;
		constructor(a?: any, b?: any, e?: any);
		init: (a?: any, b?: any, e?: any) => any;
		update: () => any;
		clear: () => any;
		reset: (a?: any) => any;
		hasTimer: boolean;
		getTimeFactor: () => any;
	}
	class ActionBuff extends StatChange {
		active: boolean;
		name: any;
		hacked: boolean;
		constructor(a?: any, b?: any, e?: any);
		init: (a?: any, b?: any, e?: any) => any;
		update: () => any;
		onActionEndDetach: () => any;
		onEntityKillDetach: () => any;
		clear: () => any;
		reset: (a?: any) => any;
		hasTimer: boolean;
		getTimeFactor: () => any;
	}
	class FontSystem extends ig.GameAddon {
		gamepadIcons: boolean;
		icons: {
			global: ig.Font;
			globalSmall: ig.Font;
			keyboard: ig.Font;
			gamepad: ig.Font;
			items: ig.Font;
			stats: ig.Font;
			stats_large: ig.Font;
			langs: ig.Font;
		};
		colors: {
			red: ig.Image;
			green: ig.Image;
			purple: ig.Image;
			grey: ig.Image;
			orange_mid: ig.Image;
			orange_tiny: ig.Image;
			purple_mid: ig.Image;
			grey_mid: ig.Image;
			grey_tiny: ig.Image;
			red_mid: ig.Image;
			red_tiny: ig.Image;
			green_mid: ig.Image;
			green_tiny: ig.Image;
		};
		font: ig.MultiFont;
		smallFont: ig.MultiFont;
		tinyFont: ig.MultiFont;
		switchIndex: number;
		gamepadIconStyle: any;
		constructor();
		init: () => any;
		changeKeyCodeIcon: (a?: any, b?: any) => any;
		changeGamepadIcon: (a?: any, b?: any) => any;
		setGamepadIconStyle: (a?: any) => any;
		updateGamepadSwapMap: () => any;
		hasIcon: (a?: any) => any;
		onVarsChanged: () => any;
	}
	class TextGui extends ig.GuiElementBase {
		font: any;
		text: string;
		textBlock: any;
		beepSound: any;
		bleepDelay: number;
		playSound: boolean;
		stopped: boolean;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		onVisibilityChange: (b?: any) => any;
		setBeepSound: (b?: any) => any;
		setMaxWidth: (b?: any) => any;
		setTextAlign: (b?: any) => any;
		setTextSpeed: (b?: any) => any;
		setFont: (b?: any, a?: any) => any;
		setDrawCallback: (b?: any) => any;
		setText: (b?: any) => any;
		clear: () => any;
		finish: () => any;
		update: () => any;
		stop: () => any;
		reset: () => any;
		resume: () => any;
		getTextState: () => any;
		setTextState: (b?: any) => any;
		updateDrawables: (b?: any) => any;
		onAttach: () => any;
		onDetach: () => any;
	}
	class MouseButtonGroup extends ig.ButtonGroup {
		sounds: {
			focus: ig.Sound;
		};
		_counter: number;
		constructor();
		init: () => any;
		addFocusGui: (b?: any) => any;
		clear: () => any;
		onButtonTraversal: any;
		doButtonTraversal: (b?: any) => any;
		isNonMouseMenuInput: () => any;
	}
	class ButtonGroup extends ig.ButtonGroup {
		sounds: {
			focus: ig.Sound;
		};
		repeater: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		setRegainFocus: () => any;
		regainCurrentFocus: (b?: any, a?: any, d?: any) => any;
		isNonMouseMenuInput: () => any;
		onButtonTraversal: any;
		doButtonTraversal: (b?: any) => any;
		getRepeaterValue: () => any;
		activate: () => any;
	}
	class RowButtonGroup extends ButtonGroup {
		rowIndex: any;
		currentRow: any;
		usePrevRowIndex: boolean;
		_lastRowIndex: number;
		leftRightCallback: any;
		constructor();
		init: () => any;
		addFocusGui: (b?: any, a?: any, d?: any) => any;
		addEmptyRow: (b?: any) => any;
		setLeftRightCallback: (b?: any) => any;
		getCurrentCellIndex: () => any;
		regainCurrentFocus: (b?: any, a?: any, d?: any) => any;
		setCurrentRowIndexes: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		isPositionValid: (b?: any, a?: any) => any;
		clear: () => any;
		stepRight: () => any;
		stepLeft: () => any;
		stepDown: () => any;
		stepUp: () => any;
		getCurrentElement: () => any;
		getCurrentX: () => any;
		getCurrentY: () => any;
	}
	class ButtonBgGui extends ig.BoxGui {
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
	}
	class ButtonHighlightGui extends ig.GuiElementBase {
		focusWeight: any;
		gfx: any;
		pattern: any;
		flipped: boolean;
		highlight: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class ButtonGui extends ig.FocusGui {
		text: any;
		bgGui: any;
		highlightGui: any;
		gfx: ig.Image;
		focusTimer: number;
		alphaTimer: number;
		buttonType: any;
		submitSound: any;
		blockedSound: any;
		data: any;
		noFocusOnPressed: boolean;
		animateOnPress: boolean;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		textChild: any;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
		invokeButtonPress: (a?: any) => any;
		setData: (a?: any) => any;
		setWidth: (a?: any) => any;
		setHeight: (a?: any) => any;
		setText: (a?: any, b?: any) => any;
		resetText: () => any;
		unsetFocus: () => any;
		update: () => any;
		getButtonText: () => any;
		setActive: (a?: any) => any;
	}
	class CheckboxGui extends ButtonGui {
		hookGui: any;
		constructor(a?: any, d?: any, c?: any);
		init: (a?: any, d?: any, c?: any) => any;
		setPressed: (a?: any) => any;
		invokeButtonPress: () => any;
	}
	class RegularBoxGui extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		PADDING_X: number;
		PADDING_Y: number;
		constructor(a?: any);
		init: (a?: any) => any;
		setContent: (a?: any) => any;
	}
	class WhiteLineBox extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
	}
	class ArrowBoxGui extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		PADDING_X: number;
		PADDING_Y: number;
		PADDING_POINTER: number;
		pointerType: number;
		constructor(a?: any, d?: any, f?: any);
		init: (a?: any, d?: any, f?: any) => any;
		resize: (a?: any, b?: any) => any;
		setPointerDown: () => any;
		updateDrawables: (a?: any) => any;
	}
	class PointingBoxGui extends ig.BoxGui {
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		direction: number;
		constructor();
		init: () => any;
		setPointerDown: () => any;
		updateDrawables: (a?: any) => any;
	}
	class LineGui extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		constructor(a?: any);
		init: (a?: any) => any;
	}
	class BlackGrayBox extends ig.BoxGui {
		text: any;
		ninepatch: ig.NinePatch;
		constructor(a?: any, b?: any, d?: any);
		init: (a?: any, b?: any, d?: any) => any;
	}
	class BlackWhiteBox extends ig.BoxGui {
		text: any;
		ninepatch: ig.NinePatch;
		constructor(a?: any, b?: any, d?: any);
		init: (a?: any, b?: any, d?: any) => any;
	}
	class SideBorderBox extends ig.BoxGui {
		text: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			FLIPPED: {
				state: {
					scaleX: any;
					scaleY: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		setHeight: (a?: any) => any;
	}
	class SideBoxGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		titleGui: any;
		contentEntries: any;
		right: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		pushContent: (a?: any, b?: any, d?: any, g?: any) => any;
		replaceContent: (a?: any, b?: any) => any;
		removeContent: (a?: any) => any;
		clearContent: () => any;
		popContent: () => any;
		rearrangeContent: (a?: any) => any;
		hide: (a?: any, b?: any) => any;
		show: (a?: any, b?: any) => any;
		remove: () => any;
	}
	class CenterBoxGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		iconGfx: ig.Image;
		msgContent: any;
		centerBox: any;
		borderLeftGui: any;
		borderRightGui: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		remove: () => any;
		resize: () => any;
	}
	class SmallEntityBox extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			START: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_SMALL: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		entity: any;
		textGui: any;
		timer: number;
		rumbleTime: number;
		finished: boolean;
		entityOff: any;
		offY: number;
		fixedPos: any;
		hideSmall: boolean;
		constructor(a?: any, b?: any, d?: any, g?: any, h?: any);
		init: (a?: any, b?: any, d?: any, g?: any, h?: any) => any;
		setFixedPos: () => any;
		stopRumble: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		_updatePos: () => any;
		remove: () => any;
		isFinished: () => any;
	}
	class LineBoxGui extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		content: any;
		paddingX: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class SmallBlackBoxGui extends ig.BoxGui {
		text: any;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		constructor(a?: any);
		init: (a?: any) => any;
	}
	class NumberGui extends ig.GuiElementBase {
		gfx: ig.Image;
		maxNumber: number;
		digits: number;
		realDigits: number;
		signed: boolean;
		showPlus: boolean;
		metrics: any;
		color: any;
		targetNumber: number;
		initNumber: number;
		numTransitionTime: number;
		numTransitionScale: number;
		timer: any;
		noZero: boolean;
		leadingZeros: number;
		showPlusOnZero: boolean;
		scramble: boolean;
		dots: boolean;
		zeroAsGrey: boolean;
		constructor(d?: any, c?: any);
		init: (d?: any, c?: any) => any;
		setSize: (a?: any) => any;
		setNumber: (a?: any, c?: any) => any;
		getNumber: () => any;
		setMaxNumber: (a?: any) => any;
		setColor: (a?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		_getCurrentNumber: () => any;
	}
	class MaxNumberGui extends ig.GuiElementBase {
		gfx: ig.Image;
		currentNumberGui: any;
		maxNumberGui: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		getMaxNumber: () => any;
		setMaxNumber: (a?: any, b?: any) => any;
		setNumber: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class PercentNumber extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		number: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		setNumber: (a?: any, b?: any) => any;
		setColor: (a?: any) => any;
		hide: () => any;
		updateDrawables: (a?: any) => any;
	}
	class NewUnlockButton extends ButtonGui {
		gfx: ig.Image;
		overlay: any;
		constructor(a?: any, b?: any, c?: any, d?: any, i?: any, j?: any, k?: any);
		init: (a?: any, b?: any, c?: any, d?: any, i?: any, j?: any, k?: any) => any;
		activateNewOverlay: (a?: any) => any;
		deactivateNewOverlay: () => any;
	}
	class NewUnlockOverlay extends ig.ImageGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		overlayActive: boolean;
		small: boolean;
		timer: number;
		alpha: number;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		activate: () => any;
		deactivate: (a?: any, b?: any) => any;
	}
	class BuffInfo extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			FADE_OUT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		text: any;
		_width: number;
		constructor();
		init: () => any;
		setText: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class InfoBar extends ig.GuiElementBase {
		text: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					offsetY: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		sizeTransition: any;
		skipRender: any;
		alpha: number;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		doSizeTransition: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
		setText: (a?: any, b?: any) => any;
	}
	class DummyContainer extends ig.GuiElementBase {
		constructor(a?: any);
		init: (a?: any) => any;
	}
	class ListBoxButton extends ig.FocusGui {
		numberGfx: ig.Image;
		gfx: ig.Image;
		button: any;
		data: any;
		_actualLineWidth: number;
		_width: number;
		blockedSound: any;
		level: number;
		constructor(a?: any, b?: any, c?: any, d?: any, i?: any, j?: any, k?: any, l?: any);
		init: (a?: any, b?: any, c?: any, d?: any, i?: any, j?: any, k?: any, l?: any) => any;
		setButtonText: (a?: any) => any;
		setLevel: (a?: any) => any;
		setWidth: (a?: any, b?: any) => any;
		setData: (a?: any) => any;
		setDrawCallback: (a?: any) => any;
		updateDrawables: (a?: any) => any;
		focusGained: () => any;
		setText: (a?: any) => any;
		focusLost: () => any;
		setActive: (a?: any) => any;
		invokeButtonPress: () => any;
	}
	class ItemBoxButton extends ListBoxButton {
		amount: any;
		constructor(a?: any, b?: any, c?: any, d?: any, i?: any, j?: any, k?: any, l?: any, o?: any, m?: any, n?: any);
		init: (a?: any, b?: any, c?: any, d?: any, i?: any, j?: any, k?: any, l?: any, o?: any, m?: any, n?: any) => any;
	}
	class ToggleSet extends ig.GuiElementBase {
		header: any;
		background: any;
		buttons: any;
		set: any;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		updateTogglesStates: (a?: any) => any;
	}
	class ItemMenuToggleAnimation extends ig.GuiElementBase {
		gfx: ig.Image;
		timer: number;
		index: number;
		callback: any;
		radio: boolean;
		frames: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class SimpleStatusDisplay extends ig.GuiElementBase {
		gfx: ig.Image;
		name: string;
		lineID: number;
		iconID: number;
		usePercent: boolean;
		iconIndex: any;
		currentValueGui: any;
		changeValueGui: any;
		nameGui: any;
		arrowGui: any;
		percentCurrentGui: any;
		percentChangeGui: any;
		simpleMode: boolean;
		noPercentMode: boolean;
		stayWhite: boolean;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		width: number;
		constructor(a?: any, b?: any, c?: any, d?: any, i?: any, j?: any, k?: any, l?: any);
		init: (a?: any, b?: any, c?: any, d?: any, i?: any, j?: any, k?: any, l?: any) => any;
		setCurrentValue: (a?: any, b?: any) => any;
		setChangeValue: (a?: any, b?: any, c?: any) => any;
		fadeChangeValues: (a?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class PercentChar extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			FADE: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		state: number;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
	}
	class MenuPanel extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		sizeTransition: any;
		constructor(a?: any);
		init: (a?: any) => any;
		update: () => any;
		doSizeTransition: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
	}
	class HeaderMenuPanel extends MenuPanel {
		headerPatch: ig.NinePatch;
		header: any;
		title: string;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
		removeAllChildren: () => any;
	}
	class MenuScanLines extends ig.GuiElementBase {
		gfx: ig.Image;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
	}
	class ScrollPane extends ig.GuiElementBase {
		box: any;
		scrollType: any;
		scrollbarV: any;
		scrollbarH: any;
		showTopBar: boolean;
		showBottomBar: boolean;
		constructor(a?: any);
		init: (a?: any) => any;
		setContent: (a?: any) => any;
		scrollX: (a?: any, c?: any) => any;
		scrollY: (a?: any, c?: any, d?: any, h?: any) => any;
		setScrollY: (a?: any, c?: any, d?: any, h?: any) => any;
		recalculateScrollBars: (a?: any) => any;
		recalculateBar: (a?: any, b?: any, c?: any, d?: any) => any;
		updateDrawables: (a?: any) => any;
		setSize: (a?: any, b?: any) => any;
		getScrollY: () => any;
	}
	class Slider extends ig.GuiElementBase {
		offset: any;
		inset: {
			top: number;
			right: number;
			bottom: number;
			left: number;
		};
		minValue: number;
		maxValue: number;
		value: number;
		vertical: boolean;
		scaleThumb: boolean;
		prefWidth: number;
		prefHeight: number;
		thumb: any;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		updateDrawables: (a?: any) => any;
		range: (a?: any) => any;
		calcThumbArea: () => any;
		setThumbPos: (a?: any) => any;
		setPreferredThumbSize: (a?: any, b?: any) => any;
		addValue: (a?: any, b?: any) => any;
		setValue: (a?: any, b?: any) => any;
		setMinMaxValue: (a?: any, b?: any, c?: any) => any;
		getRange: () => any;
		getWidth: () => any;
		getHeight: () => any;
	}
	class TimeAndMoneyGUI extends MenuPanel {
		gfx: ig.Image;
		timeGfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			DEFAULT_FAST: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_FAST: {
				state: {
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		credit: any;
		timeSec: any;
		timeMin: any;
		timeHour: any;
		_lastSec: any;
		_lastMin: any;
		_lastHour: any;
		constructor();
		init: () => any;
		updateCredit: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
	}
	class ChangeLogScrollContainer extends ig.GuiElementBase {
		scrollPane: any;
		content: any;
		constructor();
		init: () => any;
		setElement: (a?: any) => any;
		scroll: (a?: any, b?: any) => any;
		getScrollY: () => any;
		clear: () => any;
		setSize: (a?: any, b?: any) => any;
		_updateContentHeight: () => any;
	}
	class PrevNextText extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		icon: any;
		text: any;
		active: boolean;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
	}
	class ChangelogGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		msgBox: any;
		content: any;
		back: any;
		browseLeft: any;
		browserRight: any;
		scrollContainer: any;
		header: any;
		compiledButton: any;
		buttonInteract: any;
		buttonGroup: any;
		compiledMode: boolean;
		compileList: any;
		compileEntry: any;
		logs: any;
		currentIndex: any;
		constructor();
		init: () => any;
		showLog: () => any;
		hideLog: () => any;
		clearLogs: () => any;
		setHeaderText: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		onBackButtonCheck: () => any;
		onCompileButtonCheck: () => any;
		onToggleCompileMode: () => any;
		onLeftPressed: () => any;
		onRightPressed: () => any;
		setCompiledList: () => any;
		setLogEntry: (a?: any) => any;
		createHeaderEntry: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		createTextEntry: (a?: any, b?: any, c?: any, e?: any) => any;
		createLogEntries: () => any;
		createContent: () => any;
	}
	class DLCScrollContainer extends ig.GuiElementBase {
		scrollPane: any;
		content: any;
		constructor();
		init: () => any;
		setElement: (b?: any) => any;
		scroll: (b?: any, a?: any) => any;
		getScrollY: () => any;
		clear: () => any;
		setSize: (b?: any, a?: any) => any;
		_updateContentHeight: () => any;
	}
	class DLCGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		msgBox: any;
		content: any;
		back: any;
		browseLeft: any;
		browserRight: any;
		scrollContainer: any;
		header: any;
		compiledButton: any;
		buttonInteract: any;
		buttonGroup: any;
		compiledMode: boolean;
		compileList: any;
		compileEntry: any;
		logs: any;
		currentIndex: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		clearLogs: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		onBackButtonCheck: () => any;
		createDLCList: () => any;
		createHeaderEntry: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		createTextEntry: (b?: any, a?: any, d?: any) => any;
		createContent: () => any;
	}
	class RightHudGui extends ig.GuiElementBase {
		taskTitle: any;
		maxCount: number;
		currentCount: number;
		variable: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HALF: {
				state: {
					scaleX: number;
					scaleY: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		boxes: any;
		doReorder: boolean;
		constructor();
		init: () => any;
		update: () => any;
		addHudBox: (b?: any, a?: any) => any;
		addHudBoxBefore: (b?: any, a?: any) => any;
		removeHudBox: (b?: any) => any;
		reorder: () => any;
		modelChanged: (b?: any, a?: any) => any;
		updateSize: () => any;
	}
	class RightHudBoxGui extends SideBoxGui {
		hidden: boolean;
		justAdded: boolean;
		parentPanel: any;
		constructor(b?: any);
		init: (b?: any) => any;
		show: (b?: any, a?: any) => any;
		hide: (b?: any, a?: any) => any;
		remove: () => any;
	}
	class TimersHudEntry extends ig.GuiElementBase {
		gfx: ig.Image;
		millis: any;
		seconds: any;
		minutes: any;
		hours: any;
		hourPoint: any;
		timer: any;
		constructor(b?: any);
		init: (b?: any) => any;
		update: () => any;
		updateTime: () => any;
	}
	class TimersHud extends RightHudBoxGui {
		entry: any;
		_cutscene: boolean;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		update: () => any;
		delayedRemove: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class TimersModel extends ig.GameAddon {
		observers: any;
		timers: {[key: string]: any};
		constructor();
		init: () => any;
		onPostUpdate: () => any;
		onReset: () => any;
		onLevelLoadStart: () => any;
		addTimer: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any) => any;
		stopTimer: (a?: any) => any;
		resumeTimer: (a?: any) => any;
		resetTimer: (a?: any, b?: any, c?: any) => any;
		removeTimer: (a?: any) => any;
		getRemainingTimerTime: (a?: any, b?: any) => any;
		getPassedTime: (a?: any) => any;
		formatTime: (a?: any, d?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
	}
	class TimerEntry extends ig.Class {
		name: any;
		mode: any;
		timer: number;
		duration: number;
		temp: boolean;
		millis: boolean;
		area: any;
		quest: any;
		stopped: boolean;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
		tick: () => any;
		stop: () => any;
		resume: () => any;
		reset: (a?: any, b?: any) => any;
		getRemainingTime: () => any;
		done: () => any;
		getSaveData: () => any;
	}
	class StatsModel extends ig.GameAddon {
		observers: any;
		values: {[key: string]: any};
		_deferredCallbacks: any;
		_deferredTimer: number;
		statsEnabled: boolean;
		constructor();
		init: () => any;
		postUpdateOrder: any;
		onPostUpdate: () => any;
		onReset: () => any;
		onVarAccess: (b?: any, a?: any) => any;
		set: (b?: any, a?: any) => any;
		setMax: (b?: any, a?: any) => any;
		setMin: (b?: any, a?: any) => any;
		add: (b?: any, a?: any) => any;
		subtract: (b?: any, a?: any) => any;
		setMap: (b?: any, a?: any, d?: any) => any;
		addMap: (b?: any, a?: any, d?: any) => any;
		subMap: (b?: any, a?: any, d?: any) => any;
		setMapMin: (b?: any, a?: any, d?: any) => any;
		setMapMax: (b?: any, a?: any, d?: any) => any;
		get: (b?: any) => any;
		getMap: (b?: any, a?: any) => any;
		printValues: () => any;
		setActive: (b?: any) => any;
		updateBoots: (b?: any) => any;
		onStorageSave: (b?: any) => any;
		onStoragePreLoad: (b?: any) => any;
		_notify: (b?: any, a?: any) => any;
		_checkDuplicates: (b?: any, a?: any) => any;
	}
	class TrophyManager extends ig.GameAddon {
		observers: any;
		trophies: any;
		totalPoints: number;
		version: number;
		subLists: any;
		latest: any;
		constructor();
		init: () => any;
		getTotalTrophiesUnlocked: (a?: any, b?: any, c?: any) => any;
		getTotalTrophies: (a?: any, b?: any, c?: any) => any;
		varsChangedOrder: number;
		onVarsChanged: () => any;
		onVarAccess: (a?: any, b?: any) => any;
		updateAll: () => any;
		triggerTrophy: (a?: any) => any;
		clearTrophies: () => any;
		validateFeatPoints: () => any;
		getTotalPoints: () => any;
		getTrophy: (a?: any) => any;
		getTrophyName: (a?: any) => any;
		isTrophyUnlocked: (a?: any) => any;
		_addToLatest: (a?: any) => any;
		_initSubLists: () => any;
		_updateSubList: (a?: any) => any;
		_notifyNewTrophy: (a?: any) => any;
		_compare: (a?: any, b?: any, c?: any) => any;
		onStorageGlobalSave: (a?: any) => any;
		onStorageGlobalLoad: (a?: any) => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class AutoControl extends ig.GameAddon {
		mouse: {
			current: any;
			start: any;
			target: any;
			timer: number;
			duration: number;
		};
		axis: {
			left: {
				x: number;
				y: number;
				timer: number;
			};
			right: {
				x: number;
				y: number;
				timer: number;
			};
		};
		actions: {[key: string]: any};
		constructor();
		init: () => any;
		get: (b?: any) => any;
		isActive: () => any;
		setActive: (b?: any) => any;
		preUpdateOrder: number;
		onPreUpdate: () => any;
		setMouse: (b?: any, a?: any, d?: any) => any;
		setStick: (b?: any, a?: any, d?: any, c?: any) => any;
		setAction: (b?: any, a?: any, d?: any) => any;
		clearAction: (b?: any) => any;
	}
	class Inventory extends ig.SingleLoadable {
		items: any;
		constructor();
		init: () => any;
		getItem: (b?: any) => any;
		getItemName: (b?: any) => any;
		getItemByName: (b?: any) => any;
		getItemLevel: (b?: any) => any;
		getItemID: (b?: any) => any;
		getBuffString: (b?: any, a?: any, d?: any) => any;
		areStatChangesRanksUniform: (b?: any) => any;
		isBuffID: (b?: any) => any;
		isEquipID: (b?: any) => any;
		getRaritySuffix: (b?: any) => any;
		getItemNameWithIcon: (b?: any) => any;
		getItemIcon: (b?: any) => any;
		getItemDescription: (b?: any) => any;
		getItemRarity: (b?: any) => any;
		getItemSubType: (b?: any) => any;
		isConsumable: (b?: any) => any;
		getTotalItemsUnlocked: (b?: any, a?: any, d?: any) => any;
		loadInternal: () => any;
		onerror: (b?: any) => any;
		onload: (b?: any) => any;
		_isBuff: (b?: any) => any;
	}
	class CombatParams extends ig.Class {
		combatant: any;
		observers: any;
		baseParams: {
			hp: number;
			attack: number;
			defense: number;
			focus: number;
			elemFactor: any;
			statusInflict: any;
			statusEffect: any;
		};
		modifiers: any;
		buffs: any;
		currentHp: number;
		maxSp: number;
		currentSp: number;
		spHoldTimer: number;
		currentItemBuffs: number;
		tmpElemFactor: any;
		tmpStatusInflict: any;
		damageFactor: number;
		ballFactor: number;
		defeated: boolean;
		statusStates: any;
		hpRegTime: number;
		hpHealTimer: number;
		criticalDmgFactor: number;
		lockedBy: any;
		stats: {[key: string]: any};
		constructor(a?: any);
		init: (a?: any) => any;
		setCombatStat: (a?: any, b?: any) => any;
		getCombatStat: (a?: any, b?: any) => any;
		addCombatStat: (a?: any, b?: any) => any;
		healStatus: () => any;
		revive: (a?: any) => any;
		setCombatant: (a?: any) => any;
		initStatusFx: () => any;
		setModifiers: (a?: any) => any;
		startLock: (a?: any) => any;
		endLock: (a?: any) => any;
		clearLock: () => any;
		isLocked: () => any;
		isLockedBy: (a?: any) => any;
		onActionEndDetach: (a?: any) => any;
		_decreaseLock: (a?: any) => any;
		reset: (a?: any) => any;
		resetStatusConditions: () => any;
		resetSp: () => any;
		setMaxSp: (a?: any) => any;
		setBaseParams: (a?: any, b?: any) => any;
		getStat: (a?: any, b?: any) => any;
		getStatBuffFactor: (a?: any) => any;
		getModifier: (a?: any) => any;
		getDamage: (e?: any, g?: any, h?: any, i?: any, j?: any) => any;
		applyDamage: (a?: any, b?: any, c?: any) => any;
		getHealAmount: (a?: any) => any;
		reduceHp: (a?: any) => any;
		setRelativeHp: (a?: any) => any;
		setCritical: () => any;
		increaseHp: (a?: any) => any;
		getHpFactor: () => any;
		addSp: (a?: any, b?: any) => any;
		consumeSp: (a?: any) => any;
		setRelativeSp: (a?: any) => any;
		getSp: () => any;
		getRelativeSp: () => any;
		notifySpConsume: (a?: any) => any;
		setDefeated: () => any;
		isDefeated: () => any;
		addItemBuff: (a?: any, b?: any, c?: any) => any;
		removeIntersectingItemBuff: (a?: any) => any;
		addBuff: (a?: any) => any;
		modifyBuff: (a?: any, b?: any, c?: any) => any;
		removeBuff: (a?: any) => any;
		removeAllBuffs: () => any;
		getMaxBuffs: () => any;
		hasMaxBuffs: () => any;
		update: (a?: any) => any;
	}
	class AttackInfo extends ig.Class {
		type: any;
		visualType: any;
		soundType: any;
		attackerParams: any;
		reverse: boolean;
		ballDamage: boolean;
		hints: any;
		damageFactor: number;
		defenseFactor: number;
		statusInflict: number;
		element: any;
		critFactor: number;
		spFactor: number;
		spRepeatFactor: number;
		fly: any;
		stunSteps: any;
		skillBonus: any;
		guardable: any;
		limiter: any;
		hitInvincible: boolean;
		noIronStance: boolean;
		noHack: boolean;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		hasHint: (a?: any) => any;
		hasNoEffect: () => any;
	}
	class HealInfo extends ig.Class {
		healerParams: any;
		value: number;
		absolute: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		clone: () => any;
	}
	class BallBehavior extends ig.Class {
		onInit: () => any;
		onUpdate: () => any;
	}
	class ProxySpawnerBase extends ig.Class {
		spawn: () => any;
	}
	class HitProxyConnect extends ig.Class {
		proxy: any;
		pos: any;
		align: number;
		offset: any;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		spawn: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
	}
	class PlayerConfig extends ig.JsonLoadable {
		cacheType: string;
		name: any;
		clazz: any;
		character: any;
		combatStyle: {
			comboCount: number;
			throwCount: number;
			throwProb: number;
			sidewaySpeed: number;
			normDistance: number;
			meleeDistance: number;
			minDistance: number;
		};
		animSheet: any;
		proxies: {[key: string]: any};
		headIdx: number;
		stats: any;
		autoequip: any;
		baseConfig: any;
		elementConfigs: {[key: string]: any};
		skillRanking: any;
		constructor(a?: any);
		init: (a?: any) => any;
		getJsonPath: () => any;
		onload: (a?: any) => any;
		getCacheKey: (a?: any) => any;
		onCacheCleared: () => any;
	}
	class PlayerAction extends ig.Class {
		action: any;
		key: any;
		name: any;
		description: any;
		dmgType: any;
		stunType: boolean;
		status: boolean;
		constructor(a?: any, c?: any, e?: any);
		init: (a?: any, c?: any, e?: any) => any;
	}
	class PlayerSubConfig extends ig.Class {
		paramFactors: any;
		skillFactors: {[key: string]: any};
		actions: {[key: string]: any};
		baseParams: {[key: string]: any};
		modifiers: {[key: string]: any};
		activeBalls: {[key: string]: any};
		activeActions: {[key: string]: any};
		constructor(b?: any, c?: any);
		init: (b?: any, c?: any) => any;
		clearCached: () => any;
		preSkillInit: () => any;
		update: (a?: any, b?: any) => any;
		getParam: (a?: any) => any;
		getParamFactor: (a?: any) => any;
		getPlayerAction: (a?: any) => any;
		getActiveCombatArtName: (a?: any) => any;
		getAction: (a?: any) => any;
		getActionMaxLevel: (a?: any) => any;
		getBalls: () => any;
	}
	class PlayerModel extends ig.Class {
		observers: any;
		core: {[key: string]: any};
		config: any;
		loadedConfig: any;
		equip: {
			head: any;
			leftArm: any;
			rightArm: any;
			torso: any;
			feet: any;
		};
		items: any;
		itemFavs: any;
		itemNew: any;
		itemToggles: {[key: string]: any};
		animSheet: any;
		stats: any;
		baseParams: {
			elemFactor: any;
		};
		equipParams: {[key: string]: any};
		equipModifiers: {[key: string]: any};
		params: any;
		name: any;
		character: any;
		credit: number;
		level: number;
		exp: number;
		skills: any;
		skillPoints: any;
		skillPointsExtra: any;
		chapter: number;
		spLevel: number;
		baseConfig: any;
		elementConfigs: {[key: string]: any};
		elementScrollDelay: number;
		levelUpDelta: {
			level: number;
			cp: number;
			hp: number;
			attack: number;
			defense: number;
			focus: number;
		};
		currentElementMode: number;
		elementLoad: number;
		elementLoadTimer: number;
		hasOverload: boolean;
		itemBlockTimer: number;
		chapters: any;
		toggleSets: any;
		constructor();
		init: () => any;
		setConfig: (a?: any) => any;
		updateChapter: (a?: any) => any;
		reset: () => any;
		updateLoop: (a?: any) => any;
		addElementLoad: (a?: any) => any;
		setElementLoad: (a?: any) => any;
		enterElementalOverload: () => any;
		onTargetHit: (a?: any, b?: any, c?: any) => any;
		increaseActionHeat: (a?: any) => any;
		getCharacterName: () => any;
		switchBranch: (a?: any, b?: any, c?: any) => any;
		learnSkill: (a?: any, b?: any) => any;
		unlearnSkill: (a?: any) => any;
		hasSkill: (a?: any) => any;
		hasSkillPoints: (a?: any) => any;
		hasSkillPointsByCp: (a?: any, b?: any) => any;
		addSkillPoints: (a?: any, b?: any, c?: any, d?: any) => any;
		resetSkillTree: (a?: any) => any;
		setSpLevel: (a?: any) => any;
		addItem: (a?: any, c?: any, d?: any, e?: any) => any;
		startItemConsume: () => any;
		endItemConsume: (a?: any) => any;
		useItem: (a?: any) => any;
		getTotalItemsUsed: (a?: any) => any;
		removeItem: (a?: any, c?: any, d?: any, e?: any) => any;
		getItemAmount: (a?: any) => any;
		hasItem: (a?: any) => any;
		getItemAmountWithEquip: (a?: any) => any;
		toggleItem: (a?: any, b?: any) => any;
		forceToggleState: (a?: any, b?: any) => any;
		getToggleItemState: (a?: any) => any;
		hasAnySetItem: (a?: any) => any;
		hasAnyToggleItems: () => any;
		getItemSubList: (a?: any, b?: any, c?: any) => any;
		getNewItemList: () => any;
		getEquipSubList: (a?: any, b?: any, c?: any) => any;
		sortItemList: (a?: any, b?: any, c?: any) => any;
		_addNewItem: (a?: any) => any;
		_removeIDFromNewList: (a?: any) => any;
		_sortOrderFavorite: (b?: any, c?: any) => any;
		_sortOrder: (a?: any, b?: any) => any;
		_sortName: (b?: any, c?: any) => any;
		_sortAmount: (a?: any, b?: any) => any;
		_sortRarity: (b?: any, c?: any) => any;
		_sortLevel: (b?: any, c?: any) => any;
		_sortStat: (b?: any, f?: any) => any;
		canAddFavorite: () => any;
		isFavorite: (a?: any) => any;
		updateFavorite: (a?: any) => any;
		setEquipment: (a?: any, c?: any) => any;
		isEquipped: (a?: any) => any;
		getAvgEquipLevel: () => any;
		setCore: (a?: any, b?: any) => any;
		setCoreAll: (a?: any) => any;
		getCore: (a?: any) => any;
		getCombatCooldownTime: () => any;
		hasElement: (a?: any) => any;
		setLevel: (a?: any) => any;
		addExperience: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		addCredit: (a?: any, b?: any, c?: any) => any;
		removeCredit: (a?: any, b?: any) => any;
		getRawExpGain: (a?: any, b?: any, c?: any) => any;
		regenerate: () => any;
		setElementMode: (a?: any, b?: any, c?: any) => any;
		scrollElementMode: (a?: any, b?: any, c?: any) => any;
		getCurrentElementMode: () => any;
		getCombatArt: (a?: any, b?: any) => any;
		getCombatArtName: (a?: any) => any;
		getActiveCombatArt: (a?: any, b?: any) => any;
		getAction: (a?: any) => any;
		getActionByElement: (a?: any, b?: any) => any;
		getBalls: () => any;
		getOptionFace: () => any;
		updateStats: () => any;
		getCombatArtLevel: (a?: any, b?: any) => any;
		getTopCombatArtElement: (a?: any) => any;
		hasLevelUp: () => any;
		clearLevelUp: () => any;
		onVarAccess: (a?: any, b?: any) => any;
		usedSkillPoints: () => any;
		getMaxSkillPoints: (a?: any) => any;
		getSaveData: () => any;
		preLoad: (a?: any) => any;
		checkBodyPart: (a?: any) => any;
		postLoad: () => any;
	}
	class MessageModel extends ig.GameAddon {
		observers: any;
		sideMessages: any;
		sideMessageStack: any;
		sideMessageDelayedStack: any;
		sideMessageQueuing: boolean;
		displayedSideMessages: number;
		currentPeople: {[key: string]: any};
		stashedPeople: any;
		blocking: boolean;
		currentChoiceOptions: any;
		lastSelectedChoice: any;
		autoContinue: boolean;
		loaded: boolean;
		screenInteract: any;
		privateMode: number;
		boardVisible: boolean;
		boardSide: any;
		menuMode: boolean;
		bottomGap: number;
		constructor();
		init: () => any;
		isBlocking: () => any;
		clearBlocking: () => any;
		onSkipClearBlocking: () => any;
		ringPrivateMessage: (a?: any) => any;
		isPrivateRing: () => any;
		isPrivateActive: () => any;
		startPrivateMessage: () => any;
		endPrivateMessage: (a?: any) => any;
		setMenuMode: (a?: any) => any;
		setBottomGap: (a?: any) => any;
		isMenuMode: () => any;
		showMessage: (a?: any, b?: any, c?: any) => any;
		showOffScreenMessage: (a?: any, b?: any, c?: any) => any;
		showBoardMessage: (a?: any, b?: any, c?: any, e?: any) => any;
		hasBoardMessage: () => any;
		showChoice: (a?: any, b?: any, c?: any, e?: any) => any;
		_isSideMessageDelayed: () => any;
		showSideMessage: (a?: any, b?: any, c?: any) => any;
		_showSideMessage: (a?: any) => any;
		selectChoice: (a?: any) => any;
		clearSideMessages: () => any;
		addPerson: (a?: any, b?: any, c?: any, e?: any) => any;
		setExpression: (a?: any, b?: any) => any;
		removePerson: (a?: any) => any;
		clearSide: (a?: any) => any;
		clearAll: () => any;
		clearBoardMsg: () => any;
		onSceneEnd: (a?: any) => any;
		stashPersons: () => any;
		showStashedPersons: () => any;
		hasPerson: () => any;
		clear: () => any;
		getCharExpression: (a?: any) => any;
		getCharacter: (a?: any) => any;
		getExpression: (a?: any) => any;
		getSide: (a?: any) => any;
		getOrder: (a?: any) => any;
		getDisplayName: (a?: any) => any;
		getNextSideMessage: () => any;
		hasStackedSideMessages: () => any;
		isSideMessageVisible: () => any;
		onInteraction: () => any;
		onLevelLoadStart: () => any;
		onLevelLoaded: () => any;
		onReset: () => any;
		onPreUpdate: () => any;
		onStorageSave: (a?: any) => any;
		_convertSideMessagesToJson: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
		_convertJsonToSideMessage: (a?: any) => any;
		hasChoice: () => any;
		_checkActivePerson: (a?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
	}
	class AreaRoomBounds extends ig.Class {
		zMin: number;
		zMax: number;
		min: {
			x: number;
			y: number;
		};
		max: {
			x: number;
			y: number;
		};
		offset: {
			x: number;
			y: number;
		};
		name: string;
		text: string;
		id: number;
		constructor(a?: any, c?: any, e?: any, f?: any, g?: any);
		init: (a?: any, c?: any, e?: any, f?: any, g?: any) => any;
	}
	class AreaLoadable extends ig.Loadable {
		cacheType: string;
		data: any;
		lowestFloor: number;
		constructor(a?: any);
		init: (a?: any) => any;
		loadInternal: (a?: any) => any;
		onerror: () => any;
		onload: (a?: any) => any;
		_createRooms: () => any;
	}
	class BaseMenu extends ig.GuiElementBase {
		visible: boolean;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
	}
	class ListInfoMenu extends BaseMenu {
		hotkeyHelp: any;
		hotkeySort: any;
		helpGui: any;
		list: any;
		info: any;
		sortMenu: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		updateSortMenuButton: (b?: any) => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		onHotkeySortCheck: () => any;
		onSortButtonPress: () => any;
		onExecuteSort: (b?: any) => any;
		createHelpGui: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		onBackButtonPress: () => any;
		modelChanged: () => any;
	}
	class ButtonListBox extends ScrollPane {
		prototype: typeof ButtonListBox;
		buttonGroup: any;
		contentPane: any;
		paddingTop: number;
		paddingBetween: number;
		columnPadding: number;
		buttonWidth: number;
		useShoulderScroll: boolean;
		forceLastScroll: boolean;
		buttonInteract: any;
		pageSize: number;
		offsets: {
			x: number;
			y: number;
		};
		columns: any;
		_prevIndex: number;
		_skipFirst: boolean;
		_prevScrollBarHeight: number;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		setButtonGroup: (b?: any) => any;
		activate: (b?: any) => any;
		deactivate: (b?: any) => any;
		addSelectionCallback: (b?: any) => any;
		updateContentHeight: () => any;
		addButton: (b?: any, a?: any, d?: any, c?: any) => any;
		addGui: (b?: any) => any;
		insertButton: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		removeButton: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		moveButton: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		getIndex: (b?: any) => any;
		getChildren: () => any;
		onGetHeightAtIndex: any;
		getHeightAtIndex: (b?: any, a?: any) => any;
		getScrollYAtIndex: (b?: any) => any;
		setScrollAtCurrentYIndex: () => any;
		clear: (b?: any) => any;
		scrollToY: (b?: any, a?: any) => any;
		setScrollY: (b?: any, a?: any, d?: any) => any;
		update: () => any;
		onSelectionChange: () => any;
		_repositionButtons: (b?: any, a?: any, d?: any, c?: any) => any;
		_getContentHeight: (b?: any) => any;
		_setContentHeight: (b?: any) => any;
	}
	class ItemListBox extends ig.GuiElementBase {
		list: any;
		select: any;
		quantity: any;
		bg: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		setSize: (b?: any, a?: any) => any;
		clear: (b?: any) => any;
		addButton: (b?: any) => any;
		getChildren: () => any;
	}
	class MultiColumnItemListBox extends ig.GuiElementBase {
		list: any;
		selects: any;
		quantities: any;
		bg: any;
		columns: any;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		addButton: (b?: any, a?: any) => any;
		clear: (b?: any) => any;
		scrollToY: (b?: any, a?: any) => any;
		setSelectState: (b?: any, a?: any) => any;
		setQuantityState: (b?: any, a?: any) => any;
		buttonGroup: () => any;
		activate: () => any;
		deactivate: () => any;
		setSize: (b?: any, a?: any) => any;
	}
	class MainMenu extends ig.GuiElementBase {
		screenBlocking: boolean;
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		submenus: {[key: string]: any};
		topBar: any;
		hotkeyBar: any;
		smallRhombus: any;
		lea: any;
		sline: any;
		moneyTime: any;
		menuDisplay: any;
		backButton: any;
		info: any;
		buffInfo: any;
		subMenuInsertPos: number;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		_checkBackButtonInput: () => any;
		_onBackButton: () => any;
		_enterMenu: () => any;
		_exitMenu: () => any;
		_preCleanUp: () => any;
		_postCleanUp: () => any;
		_switchMenus: (a?: any, b?: any) => any;
		_createMenu: (a?: any) => any;
		_getMenuFromID: (a?: any) => any;
		_makeExtraTransitions: (a?: any, b?: any, e?: any) => any;
		modelChanged: (a?: any, b?: any, e?: any) => any;
	}
	class StartMenu extends BaseMenu {
		gfx: ig.Image;
		buttons: {
			quest: any;
			skills: any;
			equipment: any;
			items: any;
			status: any;
			social: any;
			synopsis: any;
			save: any;
		};
		largeRhombus: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		buttonGroup: any;
		constructor();
		init: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		resetButtonFocus: () => any;
		_createButton: (a?: any, d?: any, c?: any, e?: any, f?: any) => any;
	}
	class SlickTitleGui extends ig.BoxGui {
		text: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
	}
	class SlickBoxRawGui extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
	}
	class SlickBoxGui extends SlickBoxRawGui {
		paddingX: number;
		paddingY: number;
		minWidth: number;
		subGui: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		setContent: (b?: any) => any;
	}
	class SlickBigSideGui extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
	}
	class SlickSmallSideGui extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
	}
	class DebugFocusGui extends ig.FocusGui {
		color: string;
		overColor: string;
		focusColor: string;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class SlopeLine extends ig.GuiElementBase {
		gfx: ig.Image;
		pixel: number;
		right: boolean;
		down: boolean;
		height: number;
		timer: number;
		time: number;
		visible: boolean;
		_tempPixel: number;
		_animating: number;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		show: (b?: any, a?: any) => any;
		hide: (b?: any, a?: any) => any;
	}
	class LabeledNumberGuy extends ig.GuiElementBase {
		numberGui: any;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		setNumber: (b?: any, a?: any) => any;
	}
	class CompactChoiceBoxGui extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		options: any;
		callback: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		onDetach: () => any;
		onButtonPress: (b?: any) => any;
	}
	class CombatHudGui extends ig.GuiElementBase {
		upperGui: any;
		lowerGui: any;
		skipGui: any;
		lineTimer: number;
		isCombat: boolean;
		isRanked: boolean;
		constructor();
		init: () => any;
		update: () => any;
		getLineWidth: () => any;
		modelChanged: (a?: any, b?: any) => any;
	}
	class CombatSkipGui extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleY: number;
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
	}
	class CombatUpperHud extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		sub: {[key: string]: any};
		currentSub: any;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		updateSubGui: (a?: any, b?: any) => any;
		combatChanged: (a?: any, b?: any, c?: any) => any;
		getUpperRightWidth: () => any;
	}
	class CombatLowerHud extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		combatChanged: (a?: any) => any;
	}
	class KeyBinder extends ig.Class {
		constructor();
		init: () => any;
		initBindings: () => any;
		unbind: (a?: any, b?: any) => any;
		updateGamepadIcons: () => any;
		changeBinding: (a?: any, b?: any, d?: any, e?: any) => any;
	}
	class OptionModel extends ig.GameAddon {
		observers: any;
		hdMode: boolean;
		hasChanged: boolean;
		keyBinder: KeyBinder;
		values: {[key: string]: any};
		_loaded: boolean;
		constructor();
		init: () => any;
		onVarAccess: (a?: any, b?: any) => any;
		persistOptions: () => any;
		resetDefaultValues: (a?: any) => any;
		dispatchKeySwappedEvent: () => any;
		set: (a?: any, b?: any, c?: any) => any;
		get: (a?: any, b?: any) => any;
		hasLocal: (a?: any) => any;
		_checkSystemSettings: (b?: any) => any;
		_checkForKeyBindingFailure: () => any;
		_setDisplaySize: () => any;
		_setFullscreen: () => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
		onStorageGlobalSave: (a?: any) => any;
		onStorageGlobalLoad: (a?: any) => any;
	}
	class ItemContent extends ig.GuiElementBase {
		timer: number;
		id: any;
		amount: number;
		textGui: any;
		amountGui: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		updateOption: (b?: any) => any;
		updateTimer: () => any;
		increaseNumber: (b?: any, a?: any) => any;
	}
	class ItemHudBox extends RightHudBoxGui {
		delayedStack: any;
		size: number;
		constructor();
		init: () => any;
		addEntry: (b?: any, a?: any) => any;
		update: () => any;
		_isInEntries: (b?: any) => any;
		_popDelayed: () => any;
		_updateSizes: (b?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class ElementHudGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		timer: number;
		icons: any;
		constructor();
		init: () => any;
		modelChanged: (a?: any, b?: any) => any;
		showElement: (a?: any) => any;
		hide: () => any;
		update: () => any;
		_updatePos: () => any;
	}
	class ElementHudIconGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		iconDir: any;
		currentElement: number;
		bigSize: boolean;
		constructor(a?: any);
		init: (a?: any) => any;
		show: (a?: any, b?: any) => any;
		hide: () => any;
		updateDrawables: (a?: any) => any;
	}
	class MoneyTextGui extends ig.GuiElementBase {
		gfx: ig.Image;
		number: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		noIcon: boolean;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class MoneyContentGui extends ig.GuiElementBase {
		plusGui: any;
		sumGui: any;
		constructor();
		init: () => any;
		showPlus: (b?: any) => any;
		showSum: (b?: any) => any;
		clear: () => any;
	}
	class MoneyHudBox extends RightHudBoxGui {
		contentGui: any;
		addedSum: number;
		timer: number;
		constructor();
		init: () => any;
		update: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
		addMoney: (b?: any) => any;
		showSum: () => any;
	}
	class TaskHudBox extends RightHudBoxGui {
		contentGui: any;
		addedSum: number;
		timer: number;
		constructor();
		init: () => any;
		update: () => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class HpHudGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		criticalText: any;
		hpNumber: any;
		hpBar: any;
		critical: boolean;
		criticalTimer: number;
		constructor(b?: any);
		init: (b?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class HpHudBarGui extends ig.GuiElementBase {
		gfx: ig.Image;
		maxHp: number;
		currentHp: number;
		targetHp: number;
		timer: number;
		expTimer: number;
		params: any;
		width: number;
		height: number;
		expRatio: number;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		onAttach: () => any;
		onDetach: () => any;
		update: () => any;
		setExpRatio: (b?: any) => any;
		resetHp: () => any;
		updateDrawables: (b?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class SpHudGui extends ig.GuiElementBase {
		barHideTimer: number;
		barShowTimer: number;
		hideBack: boolean;
		targetSp: number;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (e?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
	}
	class ParamHudGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		level: any;
		hp: any;
		atk: any;
		def: any;
		foc: any;
		_isOut: boolean;
		constructor();
		init: () => any;
		showParams: (b?: any) => any;
		hideParams: (b?: any) => any;
	}
	class BuffHudEntry extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
			REMOVE: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			SCALED: {
				state: {
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		buff: any;
		id: number;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class BuffHudGui extends ig.GuiElementBase {
		gfx: ig.Image;
		startPiece: any;
		endPiece: any;
		buffSlots: any;
		constructor();
		init: () => any;
		update: () => any;
		sortSlots: () => any;
		addBuff: (b?: any) => any;
		removeAll: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class ItemTimerHudGui extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		numberGui: any;
		player: any;
		maxTime: any;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class QuickMenuModel extends ig.GameAddon {
		observers: any;
		buttonInteract: any;
		activeState: boolean;
		currentState: any;
		previousState: any;
		visible: boolean;
		cursorMoved: boolean;
		cursor: any;
		analFocus: any;
		itemIndex: number;
		infoText: any;
		buffText: any;
		buffID: any;
		skipActiveState: boolean;
		names: any;
		gamepadActive: boolean;
		lastDevice: number;
		itemsBlocked: boolean;
		constructor();
		init: () => any;
		enterQuickMenu: () => any;
		exitQuickMenu: () => any;
		enterItems: () => any;
		enterParty: () => any;
		enterCheck: () => any;
		enterNone: () => any;
		setInfoText: (b?: any, a?: any) => any;
		setBuffText: (b?: any, a?: any, d?: any) => any;
		setItemBlock: (b?: any) => any;
		toggleInputMode: () => any;
		resetCursor: () => any;
		focusEntity: (b?: any, a?: any, d?: any, c?: any) => any;
		unfocusEntity: (b?: any) => any;
		isDeviceSynced: () => any;
		_switchStates: (b?: any) => any;
		isQuickNone: () => any;
		isQuickItems: () => any;
		isQuickParty: () => any;
		isQuickCheck: () => any;
	}
	class MapModel extends ig.GameAddon {
		observers: any;
		activeLandmarks: {[key: string]: any};
		areas: any;
		areasVisited: {[key: string]: any};
		currentPlayerArea: any;
		currentArea: any;
		currentPlayerFloor: number;
		currentFloor: number;
		currentMap: any;
		unknownArea: any;
		teleportEvent: any;
		_usedNames: any;
		constructor();
		init: () => any;
		getTotalAreasFound: (a?: any) => any;
		getTotalLandmarksFound: (a?: any) => any;
		getTotalChestsFound: (a?: any) => any;
		getTotalChests: () => any;
		hasAllAreasFound: () => any;
		getTotalLandmarksFoundInArea: (a?: any) => any;
		levelLoadStartOrder: number;
		onLevelLoadStart: (a?: any) => any;
		levelLoadedOrder: number;
		onLevelLoaded: () => any;
		canUseGenderName: (a?: any, b?: any) => any;
		onReset: () => any;
		onVarAccess: (a?: any, b?: any) => any;
		initAreas: () => any;
		loadArea: (a?: any, b?: any) => any;
		unloadCurrentArea: () => any;
		updateVisitedArea: (a?: any) => any;
		undoVisitedArea: (a?: any, b?: any) => any;
		validateCurrentPlayerFloor: () => any;
		validateCurrentFloor: () => any;
		restore: () => any;
		addLandmark: (a?: any, d?: any, c?: any) => any;
		startTeleport: (a?: any) => any;
		getAreaType: (a?: any) => any;
		isLandmarkValid: (a?: any, b?: any) => any;
		getAreaItemId: (a?: any, b?: any) => any;
		getAreaItemType: (a?: any, b?: any) => any;
		getAreaItemAmount: (a?: any, b?: any) => any;
		getAreaItemToggleState: (a?: any, b?: any) => any;
		isLandmarkActive: (a?: any, b?: any, c?: any) => any;
		setLandmarkActiveState: (a?: any, b?: any, c?: any) => any;
		setAreaLandmarksActiveState: (a?: any, b?: any) => any;
		isDungeon: (a?: any) => any;
		hasAnyAreaUnlocked: () => any;
		getUnlockedAreas: () => any;
		sortAreaList: (a?: any) => any;
		getLandmarkName: (a?: any, b?: any) => any;
		getLandmark: (a?: any, b?: any) => any;
		getCurrentAreaLandmark: (a?: any) => any;
		getCurrentPlayerAreaName: () => any;
		getCurrentAreaName: () => any;
		getAreaOrder: (a?: any) => any;
		getAreaName: (a?: any, b?: any) => any;
		getCurrentMapName: (a?: any) => any;
		getMapName: (a?: any) => any;
		getMapDungeon: (a?: any) => any;
		getCurrentFloorIndex: () => any;
		getCurrentArea: () => any;
		getLandmarkEvent: (a?: any) => any;
		getTeleportEvent: (a?: any) => any;
		getVisitedArea: (a?: any) => any;
		getTeleport: () => any;
		getCurrentChestCount: () => any;
		getChestCount: (a?: any) => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
		onLoadableComplete: () => any;
	}
	class KeyHudGui extends ig.GuiElementBase {
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		areaItemType: any;
		areaItemTypeMaster: any;
		numberGui: any;
		hasMaster: boolean;
		constructor();
		init: () => any;
		updateDrawables: (b?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
		updateVisibility: () => any;
		updateItemCount: () => any;
	}
	class StatusHudGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		battleBgGui: any;
		battleSymbolGui: any;
		upperGui: any;
		lowerGui: any;
		elementBgGui: any;
		elementModeGui: any;
		paramGui: any;
		partyGui: any;
		keyHud: any;
		elementSwitchTimer: number;
		menuMode: boolean;
		constructor();
		init: () => any;
		update: () => any;
		modelChanged: (a?: any, b?: any, d?: any) => any;
		varsChanged: () => any;
		_updateVisibility: () => any;
		_minimizeDisplay: () => any;
		_minimizeDisplayFast: () => any;
		_enterQuickMenuMode: () => any;
		_enterMenuMode: () => any;
		_changeMenuModeVisibility: (a?: any) => any;
		elementSwitchDisplay: () => any;
	}
	class StatusUpperGui extends ig.GuiElementBase {
		constructor();
		init: () => any;
	}
	class StatusLowerGui extends ig.GuiElementBase {
		buffGui: any;
		itemTimerGui: any;
		constructor();
		init: () => any;
		modelChanged: (a?: any, b?: any) => any;
		moveSubGui: (a?: any) => any;
	}
	class ElementalLoadOverlayGui extends ig.GuiElementBase {
		gfx: ig.Image;
		alphaHandler: any;
		currentWarnMode: any;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class StatusElementModeGui extends ig.GuiElementBase {
		gfx: ig.Image;
		timer: number;
		selectBg: boolean;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			QUICKMENU: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			MENU: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			ZOOM: {
				state: {
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class StatusElementBgGui extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			QUICKMENU: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			MENU: {
				state: {
					offsetY: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_MENU: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
	}
	class BattleModeBgGui extends ig.ImageGui {
		bgImage: ig.Image;
		transitions: {
			DEFAULT: {
				state: {
					offsetX: any;
					offsetY: any;
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			MAXIMIZED: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					offsetX: any;
					offsetY: any;
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
	}
	class BattleModeSymbolGui extends ig.ImageGui {
		bgImage: ig.Image;
		transitions: {
			DEFAULT: {
				state: {
					offsetX: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
			MAXIMIZED: {
				state: {
					offsetX: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					offsetX: any;
					offsetY: any;
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
	}
	class ExpEntryGui extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
			MERGE: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		number: any;
		exp: number;
		withLabel: boolean;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		setExp: (b?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class ExpMenuGui extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		_expNumber: any;
		constructor();
		init: () => any;
		updateDrawables: (b?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class ExpHudGui extends ig.GuiElementBase {
		baseEntry: any;
		menuEntry: any;
		timer: number;
		expSum: number;
		expAddEntries: any;
		constructor();
		init: () => any;
		update: () => any;
		addExp: (b?: any) => any;
		mergeExpEntry: () => any;
		mergeAllEntries: () => any;
		reorder: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class SubTaskEntryBase extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		quest: any;
		taskIndex: any;
		subTaskIndex: any;
		subTask: any;
		textGui: any;
		done: boolean;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		setSubTask: (b?: any, a?: any) => any;
		getState: () => any;
	}
	class TaskEntry extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		taskIndex: any;
		quest: any;
		taskText: any;
		taskDoneIcon: any;
		_subtasks: any;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		setTask: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		show: (b?: any, a?: any) => any;
		_addSubTaskTask: () => any;
	}
	class QuestUpdateEntry extends ig.GuiElementBase {
		timer: number;
		id: any;
		textGui: any;
		constructor(a?: any, d?: any);
		init: (a?: any, d?: any) => any;
		updateTimer: () => any;
	}
	class QuestUpdateHud extends RightHudBoxGui {
		delayedStack: any;
		constructor();
		init: () => any;
		addEntry: (a?: any, b?: any) => any;
		_isInEntries: (a?: any) => any;
		_popDelayed: () => any;
		update: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class FavQuestHud extends RightHudBoxGui {
		task: any;
		constructor();
		init: () => any;
		setFavQuest: (a?: any) => any;
		_isVisible: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class LandmarkEntry extends ig.GuiElementBase {
		timer: number;
		id: any;
		textGui: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		updateTimer: () => any;
	}
	class LandmarkHud extends RightHudBoxGui {
		delayedStack: any;
		constructor();
		init: () => any;
		addEntry: (b?: any, a?: any) => any;
		_isInEntries: (b?: any) => any;
		_popDelayed: () => any;
		update: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class LoreModel extends ig.GameAddon {
		observers: any;
		lories: any;
		unlockedLories: {[key: string]: any};
		loaded: boolean;
		constructor();
		init: () => any;
		onReset: () => any;
		onVarAccess: (a?: any, b?: any) => any;
		_createUnlockText: (a?: any, b?: any) => any;
		unlockLoreAll: () => any;
		unlockLore: (a?: any, d?: any, c?: any, e?: any) => any;
		unlockLoreEntry: (a?: any, d?: any, c?: any) => any;
		notifyFirstActivated: () => any;
		getLore: (a?: any) => any;
		getLoreTitle: (a?: any) => any;
		getLoreEntry: (a?: any, b?: any) => any;
		isLoreUnlocked: (a?: any) => any;
		hasAtLeastOneUnlocked: (a?: any) => any;
		isLoreAvailable: (a?: any) => any;
		isLoreEntryUnlocked: (a?: any, b?: any) => any;
		getCategoryList: (a?: any, b?: any) => any;
		sortLoreList: (a?: any, b?: any) => any;
		getCompletionPercent: (a?: any) => any;
		getTotalLoreFound: (a?: any, b?: any) => any;
		getTotalLoreEntriesFound: (a?: any, b?: any) => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
	}
	class LoreUpdateEntry extends ig.GuiElementBase {
		timer: number;
		textGui: any;
		constructor(b?: any);
		init: (b?: any) => any;
		updateTimer: () => any;
	}
	class LoreUpdateHud extends RightHudBoxGui {
		delayedStack: any;
		constructor();
		init: () => any;
		addEntry: (b?: any) => any;
		_isInEntries: (b?: any) => any;
		_popDelayed: () => any;
		update: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class DropUpdateEntry extends ig.GuiElementBase {
		timer: number;
		textGui: any;
		constructor(b?: any);
		init: (b?: any) => any;
		updateTimer: () => any;
	}
	class DropUpdateHud extends RightHudBoxGui {
		delayedStack: any;
		constructor();
		init: () => any;
		addEntry: (b?: any) => any;
		_isInEntries: (b?: any) => any;
		_popDelayed: () => any;
		update: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class PartyHudGui extends ig.GuiElementBase {
		model: any;
		memberGuis: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		modelChanged: (a?: any, b?: any) => any;
		updateVisibility: () => any;
		updatePartySubGui: () => any;
	}
	class MemberHudGui extends ig.GuiElementBase {
		gfx: ig.Image;
		heads: ig.TileSheet;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		model: any;
		hpExpSpGui: any;
		constructor(a?: any);
		init: (a?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		modelChanged: () => any;
		remove: (a?: any) => any;
	}
	class MemberHpExpSpGui extends ig.GuiElementBase {
		gfx: ig.Image;
		model: any;
		hpBar: any;
		spBar: any;
		constructor(a?: any);
		init: (a?: any) => any;
		onDetach: () => any;
		updateDrawables: (a?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
	}
	class SpChangeHudGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			BIG: {
				state: {
					scaleY: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleY: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		currentSp: number;
		consumedSp: number;
		timer: number;
		constructor();
		init: () => any;
		modelChanged: (a?: any, b?: any, d?: any) => any;
		hide: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		_updatePos: () => any;
	}
	class SpMiniHudGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		params: any;
		targetSp: number;
		constructor(b?: any);
		init: (b?: any) => any;
		onDetach: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class TopMsgHudGui extends ig.GuiElementBase {
		topGui: any;
		bottomGui: any;
		iconGui: any;
		visible: boolean;
		timer: number;
		maxTime: number;
		current: any;
		messages: any;
		bgm: {[key: string]: any};
		constructor();
		init: () => any;
		setContent: (a?: any, b?: any, c?: any, d?: any) => any;
		showMessage: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		popMessage: () => any;
		update: () => any;
		clear: () => any;
		hide: () => any;
		animationEnd: () => any;
		checkDuplicates: (a?: any) => any;
		modelChanged: (f?: any, g?: any, h?: any) => any;
	}
	class TopMsgIconGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		icon: number;
		constructor();
		init: () => any;
		setIcon: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class TopMsgTopGui extends ig.ImageGui {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		constructor();
		init: () => any;
	}
	class TopMsgTitleGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		titleTextGui: any;
		subTextGui: any;
		gfx: ig.Image;
		ninePatches: {
			left: ig.NinePatch;
			leftInner: ig.NinePatch;
			rightInner: ig.NinePatch;
			right: ig.NinePatch;
		};
		constructor();
		init: () => any;
		setContent: (a?: any, b?: any, c?: any) => any;
		showSubText: () => any;
		hide: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class TopMsgSubGui extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		constructor();
		init: () => any;
		setContent: (a?: any, b?: any) => any;
	}
	class FeatHudEntry extends ig.GuiElementBase {
		timer: number;
		feat: any;
		textGui: any;
		constructor(b?: any);
		init: (b?: any) => any;
		updateTimer: () => any;
	}
	class FeatHud extends RightHudBoxGui {
		delayedStack: any;
		constructor();
		init: () => any;
		addEntry: (b?: any) => any;
		update: () => any;
		_isInEntries: (b?: any) => any;
		_popDelayed: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class LoadingScreenGui extends ig.GuiElementBase {
		gfx: ig.Image;
		timer: number;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		textBlock: any;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class TitlePresetMenu extends HeaderMenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		buttonInteract: any;
		itemList: any;
		backButton: any;
		submitSound: any;
		slots: any;
		_loadCallback: any;
		_removeCallback: any;
		_doLoad: boolean;
		_loadSlot: any;
		_firstTime: boolean;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		update: () => any;
		setPos: (b?: any, a?: any) => any;
		activate: () => any;
		deactivate: () => any;
		createList: () => any;
	}
	class ModalScreenInteract extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		msgBox: any;
		textGui: any;
		textDone: boolean;
		icon: number;
		screenInteract: any;
		callback: any;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		_onTextFinish: () => any;
		_close: () => any;
		onInteraction: () => any;
	}
	class ModalButtonInteract extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		msgBox: any;
		textGui: any;
		content: any;
		buttons: any;
		icon: number;
		buttonInteract: any;
		buttongroup: any;
		callback: any;
		back: any;
		keepOpen: boolean;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		updateDrawables: (b?: any) => any;
		show: () => any;
		hide: () => any;
		onBackButtonCheck: () => any;
		onDetach: () => any;
	}
	class SaveSlotNewButton extends ig.FocusGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		slot: any;
		slotOver: any;
		text: any;
		constructor(a?: any);
		init: (a?: any) => any;
		focusGained: () => any;
		focusLost: () => any;
		updateDrawables: (a?: any) => any;
	}
	class SaveSlotButton extends ig.FocusGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			MOVE: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			DELETE: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		slot: any;
		slotOver: any;
		level: any;
		location: any;
		time: any;
		credit: any;
		chapter: any;
		party: any;
		elements: any;
		autoSlotMiss: any;
		wrapper: any;
		content: any;
		effect: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		setSave: (a?: any, b?: any, c?: any) => any;
		doNewEffect: () => any;
		doUpdateEffect: (a?: any, b?: any) => any;
		setSlot: (a?: any) => any;
		setSlotOver: (a?: any) => any;
		focusGained: () => any;
		focusLost: () => any;
		updateDrawables: (a?: any) => any;
	}
	class SaveSlotPlayTime extends ig.GuiElementBase {
		gfx: ig.Image;
		hour: any;
		minute: any;
		second: any;
		millis: any;
		color: number;
		hideHours: boolean;
		drawHourDots: boolean;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any, g?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any) => any;
		setColor: (a?: any) => any;
		setTime: (a?: any, b?: any) => any;
		setTimeFromValue: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class SaveSlotLocation extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		location: any;
		version: any;
		constructor();
		init: () => any;
		setLocation: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class SaveSlotParty extends ig.BoxGui {
		headsGfx: ig.Image;
		ninepatch: ig.NinePatch;
		party: any;
		constructor();
		init: () => any;
		setParty: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class SaveSlotElements extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		elements: any;
		constructor();
		init: () => any;
		setElements: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class SaveSlotChapter extends ig.GuiElementBase {
		gfx: ig.Image;
		metaGfx: ig.Image;
		chapter: any;
		textGui: any;
		chapterGui: any;
		metaMarker: any;
		constructor();
		init: () => any;
		setChapter: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class SaveSlotButtonHighlight extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		slot: any;
		focus: boolean;
		slotGui: any;
		constructor();
		init: () => any;
		setSlot: (a?: any) => any;
		updateDrawables: (a?: any) => any;
		setSize: (a?: any) => any;
	}
	class SaveSlotUpdateEffect extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_UPDATE: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT_UPDATE: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			NEW_HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
			NEW_HIDDEN_END: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		playNew: (a?: any) => any;
		playUpdate: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class SaveAutoSaveSlot extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		button: any;
		constructor();
		init: () => any;
	}
	class SaveList extends ig.GuiElementBase {
		gfx: ig.Image;
		list: any;
		buttongroup: any;
		slots: any;
		submitSound: any;
		selectedSlot: any;
		autoSlot: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		onNewSlotPressed: () => any;
		onSlotPressed: (b?: any) => any;
		onSlotLoadPressed: (b?: any) => any;
		onDeleteSlot: () => any;
		loadSlots: (b?: any, a?: any) => any;
		insertNewSlot: () => any;
		deleteSlot: (b?: any, a?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class SaveMenu extends BaseMenu {
		hotkeyHelp: any;
		hotkeyDelete: any;
		hotkeyNew: any;
		helpGui: any;
		list: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		onHotkeyDeleteCheck: () => any;
		onDeleteButtonPressed: () => any;
		onHotkeyNewCheck: () => any;
		onNewButtonPressed: () => any;
		createHelpGui: () => any;
		onAddHotkeys: (a?: any) => any;
		commitHotKeysToTopBar: (a?: any) => any;
		onBackButtonPress: () => any;
		modelChanged: () => any;
	}
	class DebugSaveLoadPanel extends HeaderMenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		buttonInteract: any;
		itemList: any;
		newButton: any;
		deleteButton: any;
		backButton: any;
		load: boolean;
		submitSound: any;
		slots: any;
		_redBackground: any;
		_deleteMode: boolean;
		_loadCallback: any;
		_removeCallback: any;
		_doLoad: boolean;
		_loadSlot: any;
		_firstTime: boolean;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		update: () => any;
		setPos: (a?: any, b?: any) => any;
		toggleDeleteMode: () => any;
		activate: () => any;
		deactivate: () => any;
		loadSlots: (a?: any, b?: any, c?: any) => any;
	}
	class NewGameModeSelectDialog extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		msgBox: any;
		normal: any;
		plus: any;
		header: any;
		content: any;
		info: any;
		buttons: any;
		buttonInteract: any;
		buttongroup: any;
		callback: any;
		constructor(b?: any);
		init: (b?: any) => any;
		updateDrawables: (b?: any) => any;
		show: () => any;
		hide: () => any;
		onBackButtonCheck: () => any;
	}
	class NewGameModeDialogButton extends ButtonGui {
		framePatch: ig.NinePatch;
		gfx: ig.Image;
		frame: any;
		image: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
	}
	class MasterOverlayGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
	}
	class TitleScreenGui extends ig.GuiElementBase {
		background: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		parallax: ig.Parallax;
		bgGui: any;
		startGui: any;
		buttons: any;
		introGui: any;
		screenInteract: any;
		versionGui: any;
		isPostInit: boolean;
		constructor();
		init: () => any;
		postInit: () => any;
		modelChanged: (c?: any, d?: any) => any;
		onInteraction: () => any;
		_startBg: () => any;
		_introDone: () => any;
		_bgCallback: (a?: any, b?: any) => any;
	}
	class TitleScreenStartGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		timer: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		update: () => any;
	}
	class TitleScreenButtonGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		buttonInteract: any;
		buttonGroup: any;
		gamepadGui: any;
		setOptions: any;
		namedButtons: {[key: string]: any};
		presetMenu: any;
		story: any;
		gameplay: any;
		puzzle: any;
		closeButton: any;
		changelogButton: any;
		perfWarnButton: any;
		changelogGui: any;
		gameCodeButton: any;
		background: any;
		perfWarning: any;
		buttons: any;
		_rearrangeAnchor: number;
		_newGamePlus: boolean;
		constructor();
		init: () => any;
		postInit: () => any;
		show: () => any;
		hide: (a?: any) => any;
		checkPerformanceWarning: () => any;
		showPerformanceWarning: (a?: any) => any;
		checkClearSaveFiles: () => any;
		_createButton: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		_enterLoadMenu: () => any;
		_enterOptionsMenu: () => any;
	}
	class PauseScreenGui extends ig.GuiElementBase {
		buttonInteract: any;
		buttonGroup: any;
		resumeButton: any;
		skipButton: any;
		cancelButton: any;
		toTitleButton: any;
		saveGameButton: any;
		optionsButton: any;
		versionGui: any;
		infoGui: any;
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		_waitForMenu: boolean;
		constructor();
		init: () => any;
		updateDrawables: (b?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
		updateButtons: (b?: any) => any;
	}
	class CenterMsgBoxGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		bgColor: any;
		msgBox: any;
		textGui: any;
		textDone: boolean;
		screenInteract: any;
		callback: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		setBoxOffset: (b?: any, a?: any) => any;
		_onTextFinish: () => any;
		onInteraction: () => any;
		_close: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
	}
	class BigGenericBar extends ig.GuiElementBase {
		gfx: ig.Image;
		ninepatchOuter: ig.NinePatch;
		ninepatchInner: ig.NinePatch;
		currentValue: number;
		targetValue: number;
		flowValue: number;
		maxValue: number;
		timer: number;
		splits: any;
		leftOffset: any;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		setMaxValue: (a?: any) => any;
		setValue: (a?: any, b?: any, c?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		updateBarDraw: (a?: any, b?: any, c?: any, d?: any, i?: any, j?: any) => any;
	}
	class BigHpBar extends BigGenericBar {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			CUTSCENE: {
				state: {
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_CUTSCENE: {
				state: {
					scaleX: number;
					scaleY: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		target: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		initWithParams: () => any;
		_isHpBarVisible: () => any;
		modelChanged: (a?: any) => any;
		setHp: (a?: any) => any;
		updateSplits: () => any;
		update: () => any;
		remove: () => any;
		forceRemove: () => any;
	}
	class IndiegogoGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetY: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		button: any;
		goalListGui: any;
		goalsData: any;
		active: boolean;
		constructor();
		init: () => any;
		setData: (a?: any) => any;
		onBarFilled: (a?: any) => any;
		update: () => any;
		show: () => any;
		_dataResponse: (a?: any) => any;
		hide: (a?: any) => any;
	}
	class IndiegogoButton extends ig.FocusGui {
		gfx: ig.Image;
		highlight: any;
		daysGui: any;
		fundBar: any;
		actionText: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setData: (a?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		onButtonPress: () => any;
	}
	class IndiegogoButtonHighlight extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
	}
	class IndiegogoFundBar extends ig.GuiElementBase {
		gfx: ig.Image;
		filledCallback: any;
		fundingGoals: any;
		value: number;
		maxValue: number;
		fillCount: number;
		fadeTimer: number;
		beepSound: ig.Sound;
		beepTimer: number;
		constructor(a?: any);
		init: (a?: any) => any;
		setData: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class IndiegogoGoal extends ig.BoxGui {
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			FADE_1: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			FADE_2: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			FADE_3: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			FADE_4: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		fade: number;
		icon: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setGoalState: (a?: any) => any;
	}
	class IndiegogoGoalList extends ig.GuiElementBase {
		goalGuis: any;
		viewAllMode: boolean;
		reachedGoal: number;
		constructor();
		init: () => any;
		setData: (a?: any) => any;
		updateList: () => any;
		setViewAll: (a?: any) => any;
		setReachedGoal: (a?: any) => any;
	}
	class LevelUpContentGui extends ig.GuiElementBase {
		gfx: ig.Image;
		arrowTimer: number;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class LevelUpSideStatsGui extends SideBoxGui {
		deltaValues: any;
		constructor(a?: any);
		init: (a?: any) => any;
		addDeltaEntry: (a?: any) => any;
	}
	class ItemGui extends ig.GuiElementBase {
		transitions: {
			HIDDEN: {
				state: {
					scaleX: number;
					scaleY: number;
					angle: any;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			END: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		icon: any;
		timer: number;
		target: any;
		moveTimer: number;
		moveTime: number;
		diff: any;
		constructor(a?: any, b?: any, c?: any, d?: any, i?: any);
		init: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
		start: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class ItemGuiLayer extends ig.GuiElementBase {
		constructor();
		init: () => any;
		addItem: (e?: any, f?: any, g?: any) => any;
	}
	class DemoStatsStat extends ig.GuiElementBase {
		nameGui: any;
		valueGui: any;
		totalGui: any;
		name: any;
		value: any;
		updateCallback: any;
		constructor(a?: any, b?: any, e?: any, f?: any);
		init: (a?: any, b?: any, e?: any, f?: any) => any;
		update: () => any;
		setValue: (a?: any) => any;
		addUpdater: (a?: any) => any;
		addTotalNumber: (a?: any) => any;
	}
	class DemoStats extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		bgColor: any;
		msgBox: any;
		content: any;
		callback: any;
		screenInteract: any;
		constructor(a?: any);
		init: (a?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		onInteraction: () => any;
		_createContent: () => any;
		_createStatLine: (a?: any, b?: any, e?: any, f?: any, g?: any) => any;
		_close: () => any;
	}
	class DemoHighscoreEntry extends ig.GuiElementBase {
		nameGui: any;
		valueGui: any;
		name: any;
		value: any;
		constructor(d?: any, c?: any, e?: any);
		init: (d?: any, c?: any, e?: any) => any;
	}
	class DemoHighscore extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		msgBox: any;
		content: any;
		callback: any;
		screenInteract: any;
		second: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		onInteraction: () => any;
		_createContent: () => any;
		_createHighscoreEntryLine: (a?: any, b?: any, e?: any, f?: any) => any;
		_close: () => any;
	}
	class DemoLastTime extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		msgBox: any;
		content: any;
		callback: any;
		screenInteract: any;
		newRecordDone: boolean;
		recordGui: any;
		second: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
		onInteraction: () => any;
		_createContent: () => any;
		_close: () => any;
	}
	class TutorialPointingGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
	}
	class TutorialShadowGui extends ig.GuiElementBase {
		x: number;
		y: number;
		width: number;
		height: number;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class TutorialMarkerGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		shadowGui: any;
		highlightGui: any;
		pointerGui: any;
		callback: any;
		screenInteract: any;
		sounds: {
			start: ig.Sound;
		};
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any) => any;
		onInteraction: () => any;
		_close: () => any;
	}
	class TutorialStartHeaderGui extends ig.GuiElementBase {
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
	}
	class TutorialStartContentGui extends ig.GuiElementBase {
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
	}
	class TutorialStartGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		bgColor: any;
		titleBox: any;
		contentText: any;
		contentImage: any;
		centerBox: any;
		decisionBox: any;
		screenInteract: any;
		pausePushed: boolean;
		sounds: {
			start: ig.Sound;
		};
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		onLoadableComplete: () => any;
		buildContent: () => any;
		onDetach: () => any;
		startPause: () => any;
		clearPause: () => any;
		_close: () => any;
		updateDrawables: (b?: any) => any;
		onChoice: (b?: any) => any;
	}
	class SkipSceneGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		textGui: any;
		timer: number;
		constructor();
		init: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class EquipStatusContainer extends ig.GuiElementBase {
		compareMode: boolean;
		compareOffHand: boolean;
		baseParams: {
			hp: any;
			atk: any;
			def: any;
			foc: any;
			fire: any;
			cold: any;
			shock: any;
			wave: any;
		};
		allModifiers: {[key: string]: any};
		modifiers: {[key: string]: any};
		statusPanel: any;
		modPanel: any;
		modMore: any;
		arrow: any;
		arrow2: any;
		gfx: ig.Image;
		mode: boolean;
		constructor();
		init: () => any;
		showMenu: () => any;
		toggleViewMode: (a?: any) => any;
		updateStatusView: (a?: any) => any;
		updateModText: (a?: any) => any;
		_createStatusDisplay: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, l?: any, o?: any) => any;
		_setParameters: (a?: any, d?: any) => any;
		_calculateDifferenceModifier: (a?: any, b?: any, c?: any, e?: any) => any;
		_calculateDifference: (a?: any, b?: any, c?: any, e?: any) => any;
		_resetChangeValue: (a?: any) => any;
		_setCurrentValues: () => any;
		_setCurrentModifiers: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class EquipLevelOverview extends MenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		playerLevel: any;
		equipLevel: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: (a?: any) => any;
		updateNumbers: (a?: any) => any;
		setColors: (a?: any) => any;
	}
	class BodyPartButton extends ButtonGui {
		otherButton: any;
		callback: any;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		focusGained: () => any;
		focusLost: () => any;
		setPressed: (a?: any) => any;
		setPressedAndUnFocus: (a?: any) => any;
		isSameAs: (a?: any) => any;
	}
	class BodyPartMouseButton extends ig.GuiElementBase {
		gfx: ig.Image;
		button: any;
		slope: any;
		line: any;
		connect: any;
		end: any;
		equip: any;
		sizeTransition: any;
		topY: number;
		bottomY: number;
		_isActiveTop: boolean;
		_hasLine: boolean;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any, g?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any) => any;
		_focusCallback: (a?: any, b?: any) => any;
		update: () => any;
		_updateSize: () => any;
		setEquip: (a?: any, b?: any, c?: any, e?: any) => any;
		setPressedAndUnFocus: (a?: any) => any;
		moveToBottom: () => any;
		moveToTop: () => any;
		showButton: () => any;
		hideButton: () => any;
		showLine: (a?: any) => any;
		hideLine: (a?: any) => any;
		resetLine: () => any;
	}
	class EquipMenuMiddleIcon extends ig.GuiElementBase {
		gfx: ig.Image;
		menuGfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		equipIcon: any;
		animTimer: number;
		animFrame: any;
		constructor();
		init: () => any;
		setEquip: (a?: any, b?: any, c?: any, e?: any) => any;
		getTypeIndex: (a?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class EquipRightContainer extends MenuPanel {
		partChooser: any;
		itemList: any;
		sortTypes: any;
		_itemListActive: boolean;
		_lastEquipState: boolean;
		_globalButtons: any;
		_refocusFromCycle: boolean;
		constructor(b?: any);
		init: (b?: any) => any;
		update: () => any;
		_equipItem: (b?: any, a?: any) => any;
		setCurrentBodypartPressed: () => any;
		setCurrentBodypartUnpressed: () => any;
		_updateItemList: () => any;
		_activateItemList: () => any;
		_deactivateItemList: (b?: any) => any;
		_exitItemList: () => any;
		_makeList: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		isIDEquipped: (b?: any) => any;
		getCurrentSortText: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
		showMenu: () => any;
		hideMenu: () => any;
		tempShowMenu: () => any;
		tempHideMenu: () => any;
	}
	class EquipBodyPartContainer extends ig.GuiElementBase {
		buttonGroup: any;
		buttons: {
			head: any;
			rightArm: any;
			leftArm: any;
			torso: any;
			feet: any;
		};
		constructor(b?: any);
		init: (b?: any) => any;
		showMenu: () => any;
		hideMenu: () => any;
		refocusOnBack: () => any;
		_createButton: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
		_moveButtons: (b?: any) => any;
		_pullInAllButtons: (b?: any) => any;
		_setText: (b?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class HelpAnnoBase extends ig.FocusGui {
		gfx: ig.Image;
		icon: number;
		flipX: boolean;
		flipY: boolean;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class HelpInfoBox extends MenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		title: any;
		description: any;
		line: any;
		content: any;
		constructor();
		init: () => any;
		show: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		hide: () => any;
		getText: (b?: any, a?: any) => any;
	}
	class HelpLevelEntry extends ig.GuiElementBase {
		color: any;
		desc: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
	}
	class HelpBuffEntry extends ig.GuiElementBase {
		icon: any;
		statName: any;
		description: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		getStatName: (b?: any, a?: any, d?: any) => any;
		getStatValue: (b?: any, a?: any, d?: any) => any;
	}
	class HelpScreen extends ig.GuiElementBase {
		hotkeyHelp: any;
		hotkeyBack: any;
		topBar: any;
		bottomBar: any;
		box: any;
		color: any;
		content: any;
		info: any;
		buttonInteract: any;
		buttonGroup: any;
		backCallback: any;
		manualTitle: any;
		manualContent: any;
		manualGui: any;
		base: any;
		addons: any;
		fillEmptySpaces: boolean;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		openMenu: (a?: any) => any;
		exitMenu: () => any;
		createAnnotationsRec: (a?: any, b?: any, c?: any, e?: any) => any;
		createGUI: (a?: any, b?: any, c?: any, e?: any) => any;
		addToButtonGroup: (a?: any, d?: any, c?: any) => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		onHotkeyBackCheck: () => any;
		onBackButtonPressed: () => any;
		createHelpGui: () => any;
		onAddHotkeys: () => any;
		modelChanged: () => any;
	}
	class HelpScreenBorder extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		box: any;
		constructor();
		init: () => any;
		update: () => any;
		show: () => any;
		hide: () => any;
		doSizeTransition: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
	}
	class EquipMenu extends BaseMenu {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		globalButtons: {
			head: any;
			leftArm: any;
			rightArm: any;
			torso: any;
			feet: any;
		};
		statusContainer: any;
		rightContainer: any;
		overview: any;
		quickSelectButtonGroup: any;
		hotkeys: {
			help: any;
			status: any;
			sort: any;
			switch: any;
		};
		sortMenu: any;
		helpGui: any;
		constructor();
		init: () => any;
		initEquipIcon: (b?: any, a?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		_onHelpButtonCheck: () => any;
		_onHelpButtonPressed: () => any;
		createHelpGui: () => any;
		onSortButtonCheck: () => any;
		onSortButtonPress: () => any;
		onStatusButtonCheck: () => any;
		onStatusButtonPress: () => any;
		onHotkeySwitchCheck: () => any;
		_addHotKeys: (b?: any) => any;
		_exitMenu: () => any;
		_moveBodyPartLines: (b?: any, a?: any) => any;
		_pullInAllButtons: (b?: any, a?: any) => any;
		_updateSortHotkey: (b?: any) => any;
		_updateMouseButtons: (b?: any, a?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
		showMenu: (b?: any, a?: any) => any;
		hideMenu: (b?: any, a?: any) => any;
		exitMenu: (b?: any) => any;
	}
	class BaseSkill extends ig.Class {
		id: any;
		level: number;
		element: any;
		type: any;
		skillKey: any;
		icon: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		applyOnConfigs: () => any;
		getName: () => any;
		getDescription: () => any;
		getCPCost: () => any;
		_getElementConfig: (a?: any) => any;
	}
	class StatSkill extends BaseSkill {
		statType: any;
		applyOnConfigs: (a?: any) => any;
		getDescription: () => any;
	}
	class ElementSkill extends BaseSkill {
		counter: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		applyOnConfigs: (a?: any) => any;
		_getFactor: () => any;
		getDescription: () => any;
	}
	class SpecialSkill extends BaseSkill {
		skillType: any;
		branchType: any;
		constructor(b?: any, c?: any, d?: any, e?: any);
		init: (b?: any, c?: any, d?: any, e?: any) => any;
		getName: () => any;
		getDescription: () => any;
		applyOnConfigs: (a?: any) => any;
		getCombatArtLevel: (a?: any, b?: any) => any;
		_getElementName: () => any;
	}
	class SkillTree extends ig.SingleLoadable {
		version: number;
		_trees: any;
		skills: any;
		UID: number;
		constructor();
		init: () => any;
		loadInternal: () => any;
		onerror: (b?: any) => any;
		onload: (b?: any) => any;
		_createSkills: () => any;
		_createElementTreeSkills: (b?: any, a?: any, d?: any) => any;
		_createSkill: (b?: any, a?: any) => any;
		isEmpty: (b?: any) => any;
		autoSkill: (b?: any, a?: any, d?: any) => any;
		_autoSkillElement: (b?: any, a?: any, d?: any, c?: any) => any;
		_addAutoSkillOptions: (b?: any, a?: any) => any;
		_learnSkillOption: (b?: any, a?: any, d?: any) => any;
		getTree: (b?: any) => any;
		getSkill: (b?: any) => any;
	}
	class CircuitSwapCursor extends ig.GuiElementBase {
		gfx: ig.Image;
		focusOffset: {
			x: number;
			y: number;
		};
		focus: boolean;
		_focusTimer: number;
		_focusTime: number;
		_focusOffset: number;
		_lastDevice: number;
		_gamepadActive: boolean;
		_worldmap: boolean;
		_ignoreModel: boolean;
		constructor();
		init: () => any;
		focusOnNode: (b?: any, a?: any) => any;
		unfocus: () => any;
		resetFocusTimer: () => any;
		moveTo: (b?: any, a?: any, d?: any, c?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class CrossPointsOverview extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_MIN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		sizeTransition: any;
		points: any;
		background: any;
		leftButton: any;
		rightButton: any;
		currentElement: any;
		minimized: boolean;
		_elementCount: number;
		constructor();
		init: () => any;
		update: () => any;
		doSizeTransition: (b?: any, a?: any, d?: any, c?: any) => any;
		_addHotkeys: () => any;
		_onHotkeyRight: () => any;
		_onHotkeyLeft: () => any;
		_checkHotkey: () => any;
		_circleTree: (b?: any) => any;
		_cycleElements: (b?: any) => any;
		_selectElement: (b?: any) => any;
		_minimizeOverview: (b?: any) => any;
		_maximizeOverview: (b?: any) => any;
		_resetOverview: () => any;
		_setPositions: (b?: any, a?: any, d?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		removeHotkeys: () => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class DebugSkillLearner extends ig.GuiElementBase {
		buttonInteract: any;
		button: any;
		itemList: any;
		selfUpdate: boolean;
		constructor();
		init: () => any;
		update: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
		_loadSkills: () => any;
		_updateLearned: (b?: any) => any;
	}
	class CiruitCursor extends ig.GuiElementBase {
		gfx: ig.Image;
		focus: boolean;
		_focusTimer: number;
		_focusTime: number;
		_focusOffset: number;
		_lastDevice: number;
		_gamepadActive: boolean;
		constructor();
		init: () => any;
		focusOnNode: (a?: any, b?: any) => any;
		unfocus: () => any;
		moveTo: (a?: any, b?: any, c?: any, d?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
	}
	class CircuitNodeMenu extends MenuPanel {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		activateSound: ig.Sound;
		cost: any;
		costNumber: any;
		costCP: any;
		activate: any;
		cancel: any;
		buttonGroup: any;
		mode: any;
		delta: any;
		_scrollHook: any;
		_currentFocusGui: any;
		_maxOrSkillStep: number;
		_chainMode: boolean;
		constructor(a?: any);
		init: (a?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
		_onActivatePress: () => any;
		_showEffectOnBranch: (a?: any) => any;
		_chainActive: (a?: any) => any;
		_collectSkills: (a?: any, b?: any, c?: any) => any;
		_setContent: (a?: any) => any;
		_getTotalSkillCost: (a?: any, b?: any) => any;
		_onCancelPress: () => any;
		_enterNodeMenu: (a?: any) => any;
		_exitNodeMenu: () => any;
		_onBackButtonPress: () => any;
		_addLine: (a?: any, b?: any, c?: any, d?: any) => any;
		_updatePos: () => any;
		_hasParent: (a?: any) => any;
	}
	class CircuitInfoBox extends MenuPanel {
		ninepatch: ig.NinePatch;
		header: any;
		line: any;
		text: any;
		special: any;
		cpCost: any;
		prevMove: any;
		delta: any;
		jumpFromLastSkill: any;
		lastPos: any;
		lastPosTimer: number;
		_scrollHook: any;
		sizeTransition: any;
		FONT_BOX_OPTIONS: any;
		constructor(a?: any);
		init: (a?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		doSizeTransition: (a?: any) => any;
		update: () => any;
		modelChanged: (a?: any, b?: any) => any;
		_updatePos: (b?: any) => any;
		_updateSize: () => any;
		_setContent: () => any;
		_hideInfo: () => any;
	}
	class CircuitDetailButtonGroup extends ig.ButtonGroup {
		sounds: {
			focus: ig.Sound;
		};
		isNonMouseMenuInput: () => any;
		doButtonTraversal: () => any;
		cycleElements: (a?: any) => any;
	}
	class CircuitMenuButtonGroup extends ig.ButtonGroup {
		sounds: {
			focus: ig.Sound;
		};
		repeater: any;
		constructor();
		init: () => any;
		setButtons: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		isNonMouseMenuInput: () => any;
		doButtonTraversal: (a?: any) => any;
		getRepeaterValue: () => any;
		activate: () => any;
	}
	class CircuitOverviewMenu extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			SCALE: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		buffers: any;
		elements: any;
		buttons: any;
		buttonGroup: any;
		constructor();
		init: () => any;
		onAttach: () => any;
		onFirstTimeAnimationDone: (a?: any) => any;
		onDetach: () => any;
		modelChanged: (a?: any, b?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: (a?: any) => any;
		enterDetailView: () => any;
		leaveDetailView: () => any;
		updateAllBuffers: () => any;
		updateBuffer: (a?: any) => any;
		_createTrees: () => any;
		_updateBufferFromFirstTime: (a?: any) => any;
		_preDrawTree: (a?: any) => any;
		_preDrawTreeNodes: (a?: any, c?: any, e?: any, f?: any, g?: any) => any;
		_preDrawTreeRecursive: (d?: any, e?: any, f?: any, g?: any, h?: any, i?: any) => any;
		_drawLine: (a?: any, d?: any, f?: any, g?: any, h?: any, i?: any) => any;
		_drawLineStraightLine: (a?: any, b?: any, d?: any) => any;
		_drawOrBranchConnection: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any) => any;
		_rotate: (a?: any, c?: any, d?: any) => any;
		_getDrawingDirection: (a?: any) => any;
		isEmpty: (a?: any) => any;
	}
	class CircuitEffectDisplay extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			DEFAULT_LARGE: {
				state: {
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_LARGE: {
				state: {
					scaleX: number;
					scaleY: number;
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		skillGui: any;
		skill: any;
		timer: number;
		display: any;
		container: any;
		effectDone: boolean;
		delay: number;
		large: boolean;
		iconSize: number;
		constructor(b?: any);
		init: (b?: any) => any;
		show: (b?: any, a?: any, d?: any) => any;
		hide: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		onLoaded: (b?: any) => any;
		onEffectEvent: (b?: any) => any;
	}
	class CircuitTreeDetailContainer extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		trees: any;
		cursor: any;
		_lastMousePos: any;
		_dragTimer: number;
		_cameraLastPositions: any;
		_lastDevice: number;
		_gamepadActive: boolean;
		_cursorPos: any;
		_delayedDrag: boolean;
		constructor();
		init: () => any;
		scrollToTree: (a?: any, b?: any, c?: any, d?: any) => any;
		limitCameraPos: (a?: any) => any;
		limitCursorPos: (a?: any) => any;
		switchElementTree: (a?: any, b?: any) => any;
		exitMenu: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		onMouseInteract: (a?: any, b?: any) => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
		_initCursorPos: (a?: any, b?: any) => any;
		_checkLastDevice: () => any;
		_addTreeLazy: (a?: any) => any;
	}
	class CircuitTreeDetail extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		tree: any;
		buttonGroup: any;
		skills: any;
		skillStart: number;
		effectGuis: any;
		constructor(a?: any);
		init: (a?: any) => any;
		updateDrawables: (a?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		activate: (a?: any, b?: any) => any;
		deactivate: (a?: any) => any;
		exit: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
		_showEffect: (a?: any, b?: any, c?: any) => any;
		_onBackButtonPress: () => any;
		_createTree: () => any;
		_createTreeNodesRecursive: (a?: any, b?: any, c?: any, d?: any, f?: any, g?: any, i?: any) => any;
		_createLine: (a?: any, b?: any, c?: any, d?: any, f?: any, g?: any) => any;
	}
	class CircuitSwapBranches extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			SCALE: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		buttonGroup: any;
		cursor: any;
		_gamepadActive: boolean;
		_lastDevice: number;
		_cursorPos: any;
		_firstVisit: boolean;
		effectGuis: any;
		constructor();
		init: () => any;
		update: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		_initCursor: (a?: any) => any;
		_limitCursorPos: () => any;
		_focusButton: () => any;
		_onBackButtonPress: () => any;
		_showEffect: (a?: any) => any;
		modelChanged: (a?: any, b?: any, d?: any) => any;
	}
	class CircuitSwapBranchesInfoBox extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		buttonGroup: any;
		currentFocus: any;
		leftContent: any;
		rightContent: any;
		arrow: any;
		branches: {
			left: any;
			right: any;
		};
		_scrollHook: any;
		delta: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setContent: (a?: any) => any;
		showMenu: () => any;
		hideMenu: () => any;
		modelChanged: (a?: any, b?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
	}
	class CircuitMenu extends BaseMenu {
		overview: any;
		points: any;
		detail: any;
		info: any;
		node: any;
		swap: any;
		bg: any;
		swapInfo: any;
		hotkeySwap: any;
		hotkeyHelp: any;
		helpGui: any;
		constructor();
		init: () => any;
		_onBackButtonPress: () => any;
		_onHelpButtonCheck: () => any;
		_onHelpButtonPressed: () => any;
		createHelpGui: () => any;
		_onSwapButtonCheck: () => any;
		_onSwapButtonPressed: () => any;
		_addHotKeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class ItemStatusEquip extends MenuPanel {
		baseParams: {
			hp: any;
			atk: any;
			def: any;
			foc: any;
			fire: any;
			cold: any;
			shock: any;
			wave: any;
		};
		gfx: ig.Image;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
		_setParameters: (b?: any) => any;
		_resetParameters: () => any;
		_createStatusDisplay: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
	}
	class ItemEquipModifier extends HeaderMenuPanel {
		modifierText: any;
		modifierPool: {[key: string]: any};
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
		_setParameters: (b?: any) => any;
		_resetParameters: () => any;
		_createStatusDisplay: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any) => any;
	}
	class ItemStatusDefaultBar extends ig.GuiElementBase {
		gfx: ig.Image;
		backgroundPatch: ig.NinePatch;
		barPatch: ig.NinePatch;
		type: number;
		name: string;
		maxValue: number;
		currentValue: any;
		targetValue: number;
		timer: number;
		currentNumber: any;
		maxNumber: any;
		buff: any;
		barHeight: number;
		model: any;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
		updateValues: (a?: any, b?: any, c?: any, d?: any) => any;
		resetValues: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		_drawSpBarMinified: (a?: any) => any;
		_drawSpBar: (c?: any) => any;
	}
	class ItemStatusDefault extends MenuPanel {
		menuGfx: ig.Image;
		statusGfx: ig.Image;
		level: any;
		hpBar: any;
		spBar: any;
		expBar: any;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		modelChanged: (a?: any, b?: any) => any;
		_updateElements: (a?: any) => any;
	}
	class ItemStatusBuffs extends HeaderMenuPanel {
		gfx: ig.Image;
		maxBuffs: any;
		currentBuffs: any;
		_removeStartIndex: number;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		modelChanged: (b?: any, a?: any) => any;
		_createBuffs: () => any;
	}
	class ItemBuffHelp extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: (b?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class FavoriteElementGui extends ig.GuiElementBase {
		gfx: ig.Image;
		text: any;
		id: any;
		constructor();
		init: () => any;
		setItem: (b?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class ItemStatusFavorites extends HeaderMenuPanel {
		gfx: ig.Image;
		line: ig.Image;
		maxFavs: any;
		currentFavs: any;
		_favs: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		updateFavorites: () => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class ItemStatusTrade extends HeaderMenuPanel {
		gfx: ig.Image;
		content: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		modelChanged: (a?: any, b?: any, e?: any) => any;
		_setTradeInfo: (a?: any) => any;
	}
	class SortMenu extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		buttongroup: any;
		buttons: any;
		active: boolean;
		yPosition: number;
		callback: any;
		backCallback: any;
		currentSortingText: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		addButton: (b?: any, a?: any, d?: any) => any;
		setButtonKey: (b?: any, a?: any) => any;
		showSortMenu: (b?: any) => any;
		showSortMenuAt: (b?: any, a?: any) => any;
		hideSortMenu: () => any;
		onBackButtonPress: () => any;
		_createButton: (b?: any, a?: any, d?: any, c?: any) => any;
	}
	class ItemSortMenu extends SortMenu {
		constructor();
		init: () => any;
		onButtonPress: (b?: any) => any;
	}
	class ItemTabbedBox extends ig.GuiElementBase {
		gfx: ig.Image;
		list: any;
		tabs: {
			news: any;
			items: any;
			arms: any;
			head: any;
			torso: any;
			feet: any;
			trade: any;
			keys: any;
		};
		sortTypes: {[key: string]: any};
		tabArray: any;
		buttonGroup: any;
		tabGroup: any;
		submitSound: any;
		favSound: any;
		errorSound: any;
		toggleOnSound: any;
		toggleOffSound: any;
		_prevPressed: any;
		_refocusFromCycle: any;
		_lastCursorPos: any;
		_bgRev: any;
		_curElement: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		setFavorite: () => any;
		isNonMouseMenuInput: () => any;
		onButtonTraversal: () => any;
		onItemButtonPressed: (b?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
		getCurrentSortText: () => any;
		_createList: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		addEmpty: () => any;
		_createTabButton: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		_resetButtons: (b?: any, a?: any) => any;
		_rearrangeTabs: () => any;
		_addEquipOverlay: (b?: any, a?: any) => any;
		_addFavoriteOverlay: (b?: any) => any;
		_removeFavoriteOverlay: (b?: any) => any;
	}
	class ItemMenu extends BaseMenu {
		hotkeyHelp: any;
		hotkeyFav: any;
		hotkeySort: any;
		statusEquipBox: any;
		statusModifierBox: any;
		statusDefaultBox: any;
		statusBuffBox: any;
		statusFavs: any;
		statusTrade: any;
		listBox: any;
		consHelp: any;
		sortMenu: any;
		helpGui: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		createHelpGui: () => any;
		onHotkeyFavoriteCheck: () => any;
		onFavButtonPress: () => any;
		onHotkeySortCheck: () => any;
		onSortButtonPress: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		onBackButtonPress: () => any;
		_updateSortMenuButton: (b?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class LandmarkGui extends ig.FocusGui {
		gfx: ig.Image;
		key: any;
		activated: boolean;
		floor: number;
		landmark: any;
		map: any;
		description: any;
		name: any;
		constructor(a?: any, b?: any, c?: any, d?: any, i?: any);
		init: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
		updateDrawables: (a?: any) => any;
		isMouseOver: () => any;
		getDistanceToCursor: () => any;
	}
	class MapCurrentRoomWrapper extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor(a?: any);
		init: (a?: any) => any;
	}
	class MapNameGui extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		text: any;
		constructor();
		init: () => any;
		setText: (a?: any, b?: any, c?: any) => any;
	}
	class WorldmapAreaName extends ig.GuiElementBase {
		gfx: ig.Image;
		name: any;
		hasText: boolean;
		flip: boolean;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		setText: (a?: any, b?: any, c?: any) => any;
		setFlip: (a?: any) => any;
	}
	class MapCursor extends ig.GuiElementBase {
		gfx: ig.Image;
		focusOffset: {
			x: number;
			y: number;
		};
		focus: boolean;
		_focusTimer: number;
		_focusTime: number;
		_focusOffset: number;
		_lastDevice: number;
		_gamepadActive: boolean;
		_worldmap: boolean;
		_ignoreModel: boolean;
		constructor(a?: any);
		init: (a?: any) => any;
		focusOnNode: (a?: any, b?: any) => any;
		unfocus: () => any;
		moveTo: (a?: any, b?: any, c?: any, d?: any) => any;
		looseFocus: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class MapChestDisplay extends ig.GuiElementBase {
		gfx: ig.Image;
		current: any;
		max: any;
		_oldCount: any;
		_oldMax: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class MapStampDisplay extends ig.GuiElementBase {
		gfx: ig.Image;
		current: any;
		max: any;
		_oldCount: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class MapFloorButton extends ig.FocusGui {
		gfx: ig.Image;
		textGui: any;
		name: string;
		level: number;
		alpha: number;
		alphaTimer: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		focusGained: (a?: any) => any;
		onMouseInteract: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class MapFloorButtonContainer extends ig.GuiElementBase {
		gfx: ig.Image;
		buttongroup: any;
		leaIcon: any;
		hasVisitedRooms: any;
		_floors: any;
		_selfUpdate: boolean;
		_submitSound: any;
		_minFloor: number;
		_maxFloor: number;
		constructor();
		init: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		centerMap: () => any;
		update: () => any;
		pressed: (a?: any, b?: any, c?: any) => any;
		onFloorPress: (a?: any) => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
		_createButtons: (a?: any) => any;
		_getFloorName: (a?: any, b?: any) => any;
	}
	class CurrentAreaDisplay extends MenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class DebugFloorView extends MenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		floor: any;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
	}
	class StampGui extends ig.FocusGui {
		gfx: ig.Image;
		key: string;
		icon: {
			x: number;
			y: number;
		};
		floor: number;
		floorGui: any;
		name: string;
		index: any;
		activated: boolean;
		constructor(a?: any, b?: any, c?: any, d?: any, i?: any, j?: any);
		init: (a?: any, b?: any, c?: any, d?: any, i?: any, j?: any) => any;
		setKey: (a?: any) => any;
		updateDrawables: (a?: any) => any;
		isMouseOver: () => any;
		getDistanceToCursor: () => any;
	}
	class StampEditMenu extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		delete: any;
		anchor: any;
		stamps: any;
		buttongroup: any;
		_active: boolean;
		constructor();
		init: () => any;
		show: (c?: any) => any;
		hide: (a?: any) => any;
		createStamps: () => any;
		limitPosition: (c?: any, d?: any) => any;
		unPressAllButtons: () => any;
		pressCurrentStamp: (a?: any) => any;
		updateDrawables: (a?: any) => any;
		onBackPressed: () => any;
	}
	class StampMenuButton extends ButtonGui {
		icons: ig.Image;
		key: string;
		icon: {
			x: number;
			y: number;
		};
		iconGui: any;
		constructor(a?: any);
		init: (a?: any) => any;
	}
	class MapRoom extends ig.GuiElementBase {
		gfx: ig.Image;
		room: any;
		buffer: any;
		floor: any;
		name: string;
		id: number;
		roomAlpha: number;
		tileWidth: number;
		tileHeight: number;
		active: boolean;
		unlocked: boolean;
		prerendered: boolean;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		onVisibilityChange: (a?: any) => any;
		onDetach: () => any;
		updateDrawables: (a?: any) => any;
		preRender: () => any;
		clearPrerendered: () => any;
	}
	class MapIcon extends ig.GuiElementBase {
		gfx: ig.Image;
		offsetX: number;
		offsetY: number;
		map: number;
		icon: string;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		updateDrawables: (a?: any) => any;
		createAreaName: (a?: any, b?: any, c?: any, d?: any) => any;
	}
	class MapFloor extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_FAST: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		floor: any;
		name: string;
		nameGui: any;
		leaGui: any;
		rooms: any;
		activeRoom: any;
		callback: any;
		bounds: {
			x: number;
			y: number;
			width: any;
			height: any;
		};
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		onAttach: () => any;
		update: () => any;
		updateDrawables: () => any;
		showFloor: () => any;
		hideFloor: () => any;
		calculateOpacity: (a?: any, b?: any) => any;
		calculatePosOffset: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		modelChanged: (a?: any, b?: any) => any;
		_updateAlphaOnRooms: () => any;
		_createIcons: (a?: any) => any;
		_createRooms: () => any;
		getBounds: (a?: any) => any;
	}
	class MapArea extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		updateDrawables: () => any;
	}
	class MapAreaContainer extends ig.GuiElementBase {
		gfx: ig.Image;
		background: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_WORLD: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
					angle: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		area: any;
		buttongroup: any;
		_lastMousePos: any;
		_cursorPos: any;
		_dragTimer: number;
		_delayedDrag: boolean;
		_alphaTimer: number;
		_alphaTime: number;
		_alpha: number;
		_firstVisit: boolean;
		_prevFloor: any;
		_vertOffset: number;
		_vertOffsetTarget: number;
		_vertOffsetStart: number;
		_vertOffsetCurrent: number;
		_vertOffsetTimer: number;
		_vertOffsetTime: number;
		_areaCache: {[key: string]: any};
		_gamepadActive: boolean;
		_lastDevice: number;
		mapNameGui: any;
		hoverRoom: any;
		cursor: any;
		landmarks: any;
		stamps: any;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		onMouseInteract: (a?: any, b?: any) => any;
		onLandmarkPressed: (a?: any) => any;
		findMap: (a?: any, b?: any, c?: any, d?: any) => any;
		showLandmarkName: (a?: any) => any;
		loadNewArea: (a?: any) => any;
		onLoadableComplete: (a?: any, b?: any) => any;
		setArea: () => any;
		createLandmarks: (a?: any, b?: any) => any;
		addStamp: () => any;
		isSettable: (a?: any, b?: any, c?: any) => any;
		getCurrentFloorGui: () => any;
		centerCurrentPosition: (a?: any, b?: any) => any;
		limitCameraPos: () => any;
		limitCursorPos: () => any;
		initCursor: (a?: any) => any;
		calculateScrollingOffset: (a?: any) => any;
		showMenu: () => any;
		exitMenu: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class AreaButton extends ig.FocusGui {
		gfx: ig.Image;
		key: any;
		area: any;
		icon: number;
		activeArea: boolean;
		focusCount: number;
		description: string;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		onButtonPress: () => any;
		updateDrawables: (a?: any) => any;
		isMouseOver: () => any;
		getDistanceToCursor: () => any;
	}
	class MapWorldMap extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		buttonGroup: any;
		areas: any;
		cursor: any;
		areaName: any;
		_gamepadActive: boolean;
		_lastDevice: number;
		_cursorPos: any;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		_focusCurrentArea: () => any;
		_initCursor: (a?: any) => any;
		_limitCursorPos: () => any;
		_setAreaName: (a?: any) => any;
		_addAreas: () => any;
		_addAreaButton: (a?: any, b?: any) => any;
		onBackButtonPress: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class MapMenu extends BaseMenu {
		hotkeyHelp: any;
		hotkeyWorldmap: any;
		hotkeyCenter: any;
		area: any;
		floorButtons: any;
		emptyMap: any;
		chestDisplay: any;
		stampDisplay: any;
		worldmap: any;
		curArea: any;
		stamps: any;
		helpGui: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		onHotkeyCenterCheck: () => any;
		onHotkeyWorldmapCheck: () => any;
		onCenterButtonPressed: (b?: any) => any;
		onWorldmapButtonPressed: () => any;
		createHelpGui: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		onBackButtonPress: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class KeyBinderGui extends ig.ColorGui {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		box: any;
		button: any;
		back: any;
		buttonGroup: any;
		buttonInteract: any;
		finishCallback: any;
		bindedKeyCheck: any;
		isAlternative: any;
		constructor();
		init: () => any;
		show: (b?: any, a?: any, d?: any) => any;
		hide: () => any;
		onUnbindPress: () => any;
		onReturnPress: () => any;
		onKeyCheck: (b?: any) => any;
		onGlobalButtonCheck: () => any;
		_isBlackedListed: (b?: any) => any;
	}
	class OptionSlider extends Slider {
		backgroundNinePatch: ig.NinePatch;
		fill: boolean;
		focus: boolean;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		updateDrawables: (b?: any) => any;
		setSize: (b?: any, a?: any) => any;
	}
	class OptionThumb extends ig.GuiElementBase {
		thumbNinePatch: ig.NinePatch;
		currentOffset: string;
		slider: any;
		drag: boolean;
		wasDragged: boolean;
		starValue: number;
		_startPos: any;
		constructor(b?: any);
		init: (b?: any) => any;
		onMouseInteract: (b?: any, a?: any, d?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class OptionFocusSlider extends ig.FocusGui {
		slider: any;
		thumb: any;
		snap: boolean;
		changeCallback: any;
		clickSound: any;
		_hasKeyboardFocus: boolean;
		_buttongroup: any;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		setPreferredThumbSize: (b?: any, a?: any) => any;
		setSize: (b?: any, a?: any, d?: any) => any;
		setValue: (b?: any) => any;
		setMinMaxValue: (b?: any, a?: any) => any;
		getValue: () => any;
		update: () => any;
		focusGained: () => any;
		focusLost: () => any;
		canPlayFocusSounds: () => any;
		canLeaveFocus: () => any;
		onMouseInteract: (b?: any, a?: any) => any;
		onDrag: (b?: any, a?: any, d?: any) => any;
	}
	class OptionLangPopUp extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		buttongroup: any;
		anchor: any;
		callback: any;
		buttons: any;
		active: boolean;
		_prevPressed: any;
		constructor();
		init: () => any;
		createButtons: () => any;
		resetButtons: (b?: any) => any;
		show: (b?: any, a?: any) => any;
		hide: () => any;
		onBackButtonPressed: () => any;
	}
	class OptionInfoBox extends ig.GuiElementBase {
		text: any;
		box: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
	}
	class OptionRow extends ig.GuiElementBase {
		gfx: ig.Image;
		row: any;
		optionName: any;
		option: any;
		optionDes: any;
		local: boolean;
		divider: boolean;
		nameGui: any;
		typeGui: any;
		_hasEntered: boolean;
		_rowGroup: any;
		constructor(a?: any, b?: any, d?: any, g?: any, h?: any, i?: any);
		init: (a?: any, b?: any, d?: any, g?: any, h?: any, i?: any) => any;
		updateDrawables: (a?: any) => any;
		onPressed: (a?: any) => any;
		onLeftRight: (a?: any) => any;
		onMouseInteract: () => any;
	}
	class OptionsTabBox extends ig.GuiElementBase {
		gfx: ig.Image;
		list: any;
		tabs: {
			general: any;
			interface: any;
			video: any;
			audio: any;
			controls: any;
			assists: any;
			arena: any;
		};
		bg: any;
		keyBinder: any;
		tabArray: any;
		tabGroup: any;
		rowButtonGroup: any;
		tabContent: any;
		rows: any;
		prevIndex: any;
		prevPressed: any;
		isLocal: boolean;
		constructor(b?: any);
		init: (b?: any) => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		_createCacheList: (b?: any, a?: any, d?: any, c?: any) => any;
		_createOptionList: (b?: any) => any;
		_resetButtons: (b?: any, a?: any) => any;
		_rearrangeTabs: () => any;
		_createTabButton: (b?: any, a?: any, d?: any) => any;
		isNonMouseMenuInput: () => any;
		onButtonTraversal: () => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class OptionsMenu extends BaseMenu {
		hotkeyHelp: any;
		hotkeyDefault: any;
		listBox: any;
		helpGui: any;
		blackBox: any;
		langGui: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		onHotkeyDefaultCheck: () => any;
		onDefaultButtonPressed: () => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		createHelpGui: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		onBackButtonPress: () => any;
		onLangPopUpClose: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class ShopStartMenu extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_SCALE: {
				state: {
					alpha: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		buy: any;
		sell: any;
		buttongroup: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: (b?: any, a?: any) => any;
		onButtonPress: (b?: any) => any;
	}
	class ShopStartTitle extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetY: any;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_SCALE: {
				state: {
					alpha: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: (b?: any, a?: any) => any;
	}
	class ShopListMenu extends MenuPanel {
		buttongroup: any;
		pagesCache: any;
		list: any;
		repeater: any;
		_prevSortType: any;
		_amp: number;
		_ampTimer: number;
		_ampDir: any;
		constructor();
		init: () => any;
		update: () => any;
		show: () => any;
		hide: () => any;
		getRepeaterValue: () => any;
		getActiveElement: () => any;
		stepRight: () => any;
		stepLeft: () => any;
		changeCount: (b?: any) => any;
		playSound: (b?: any, a?: any) => any;
		updateListEntries: (b?: any) => any;
		updateShopPage: (b?: any) => any;
		createBuyList: (b?: any, a?: any, d?: any, c?: any) => any;
		scrapSellList: (b?: any) => any;
		scrapBuyList: (b?: any) => any;
		onPressCallback: (b?: any) => any;
		onBackButtonPress: () => any;
		leaveList: () => any;
	}
	class ShopPageCounter extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		pageText: any;
		cycleLeft: any;
		cycleRight: any;
		constructor();
		init: () => any;
		updateDrawables: (b?: any) => any;
		show: () => any;
		hide: () => any;
		cycleSellPages: (b?: any) => any;
		cycleOffers: (b?: any) => any;
		onLeftPressCheck: () => any;
		onRightPressCheck: () => any;
	}
	class ShopItemButton extends ListBoxButton {
		symbolGfx: ig.Image;
		cost: any;
		owned: any;
		count: any;
		symbol: any;
		level: number;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		setCountNumber: (b?: any, a?: any) => any;
		keepButtonPressed: () => any;
		unPressButton: () => any;
	}
	class TradeModel extends ig.GameAddon {
		observers: any;
		buttonInteract: any;
		options: any;
		infoText: any;
		buffText: any;
		buffID: any;
		equipID: any;
		visible: boolean;
		sessionTradeCount: number;
		tradeIndex: number;
		statsToggle: boolean;
		statsToggleOffHand: boolean;
		hasEquippedTrade: boolean;
		equippedID1: {
			id: any;
			bodypart: any;
		};
		equippedID2: {
			id: any;
			bodypart: any;
		};
		compareMode: any;
		traders: {[key: string]: any};
		tradersFound: {[key: string]: any};
		constructor();
		init: () => any;
		onStorageSave: (b?: any) => any;
		onStoragePreLoad: (b?: any) => any;
		checkForParents: () => any;
		getTotalTradersFound: (b?: any, a?: any) => any;
		getTotalTraders: (b?: any) => any;
		onReset: () => any;
		onVarAccess: (b?: any, a?: any) => any;
		hasAreaTraders: (b?: any) => any;
		hasTraderInArea: (b?: any) => any;
		hasAnyTraderFound: () => any;
		hasTrader: (b?: any) => any;
		unlockTrader: (b?: any, a?: any) => any;
		unlockParents: (b?: any, a?: any, d?: any) => any;
		resetTrader: (b?: any) => any;
		getTrader: (b?: any) => any;
		getTraderName: (b?: any) => any;
		getTraderAreaName: (b?: any, a?: any) => any;
		getFoundTrader: (b?: any) => any;
		getFoundTraders: (b?: any, a?: any) => any;
		sortList: (b?: any, a?: any) => any;
		enterTrade: (b?: any) => any;
		exitTrade: () => any;
		doTrade: (b?: any) => any;
		setEquippedID: (b?: any, a?: any) => any;
		clearEquippedState: () => any;
		unequipTradeItems: () => any;
		setActiveOffer: (b?: any) => any;
		getCurrentOffer: () => any;
		canTrade: () => any;
		setInfoText: (b?: any, a?: any) => any;
		setBuffText: (b?: any, a?: any, d?: any) => any;
		setEquipID: (b?: any, a?: any) => any;
		toggleCompareMode: () => any;
		_checkBodyPart: (b?: any, a?: any, d?: any, c?: any) => any;
	}
	class TradeInfo extends ig.Class {
		key: string;
		settings: any;
		iconGui: any;
		event: any;
		entity: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		startTradeMenu: () => any;
		clearCached: () => any;
	}
	class TradeToggleStats extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		baseParams: {
			hp: any;
			atk: any;
			def: any;
			foc: any;
			fire: any;
			cold: any;
			shock: any;
			wave: any;
		};
		modifierPool: {[key: string]: any};
		compareText: any;
		compareItem: any;
		compareHelpText: any;
		titleOffset: number;
		lineOffset: number;
		level: number;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		updateDrawables: (b?: any) => any;
		showMenu: () => any;
		hideMenu: () => any;
		_setEquipID: (b?: any) => any;
		_getBodyPartIcon: (b?: any) => any;
		_setParameters: (b?: any) => any;
		_setBaseStats: () => any;
		_resetParameters: () => any;
		_setCompareParameters: (b?: any) => any;
		_calculateDifference: (b?: any, a?: any, d?: any, c?: any) => any;
		_calculateDifferenceModifier: (b?: any, a?: any, d?: any, c?: any) => any;
		_createContent: () => any;
		_createStatusDisplay: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, l?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class ShopEquipStats extends TradeToggleStats {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		constructor();
		init: () => any;
		updateDrawables: (b?: any) => any;
		updateStatsView: () => any;
		reset: () => any;
		show: () => any;
		hide: () => any;
	}
	class ShopCart extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		credits: any;
		value: any;
		rest: any;
		checkout: any;
		enabled: boolean;
		constructor();
		init: () => any;
		resetNumbers: (b?: any) => any;
		updateValue: (b?: any) => any;
		updateDrawables: (b?: any) => any;
		show: () => any;
		hide: () => any;
		setCheckout: (b?: any) => any;
		onCheckoutPress: () => any;
		onCheckoutCheck: () => any;
	}
	class ShopCartEntry extends ig.GuiElementBase {
		gfx: ig.Image;
		text: any;
		number: any;
		hideSymbol: boolean;
		constructor(b?: any);
		init: (b?: any) => any;
		updateDrawables: (b?: any) => any;
		setNumber: (b?: any, a?: any) => any;
	}
	class ShopQuantitySelect extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		buttongroup: any;
		quantityText: any;
		costText: any;
		buttonUp: any;
		buttonDown: any;
		buttonLeft: any;
		buttonRight: any;
		quantity: any;
		cost: any;
		submit: any;
		quantityLine: any;
		itemCostLine: any;
		active: boolean;
		submitCallback: any;
		cancelCallback: any;
		_number: number;
		_max: number;
		_button: any;
		_amp: number;
		_ampTimer: number;
		_ampDir: any;
		repeater: any;
		constructor(e?: any, g?: any);
		init: (e?: any, g?: any) => any;
		update: () => any;
		getRepeaterValue: () => any;
		addDirectionButton: (a?: any, b?: any, c?: any) => any;
		updateCost: () => any;
		updateDirectionButtons: (a?: any) => any;
		playSound: (a?: any, c?: any) => any;
		show: (a?: any, b?: any, c?: any) => any;
		hide: () => any;
		onBackButtonPress: () => any;
		onUpCheck: () => any;
		onDownCheck: () => any;
		onRightCheck: () => any;
		onLeftCheck: () => any;
	}
	class ShopQuanityButton extends ig.FocusGui {
		gfx: ig.Image;
		direction: any;
		highlightTimer: number;
		number: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setColor: (a?: any) => any;
		highlight: () => any;
		show: () => any;
		hide: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		isMouseOver: () => any;
	}
	class ShopSlopLine extends ig.GuiElementBase {
		slop: any;
		line: any;
		hasLine: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		show: (a?: any) => any;
		hide: (a?: any) => any;
	}
	class ShopConfirmDialog extends ModalButtonInteract {
		confirmCallback: any;
		cancelCallback: any;
		list: any;
		listContent: any;
		notifyRaritySell: boolean;
		keepOpen: boolean;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		update: () => any;
		show: () => any;
		createList: () => any;
		onDialogCallback: (b?: any) => any;
	}
	class ShopConfirmEntry extends ig.GuiElementBase {
		gfx: ig.Image;
		item: any;
		amount: any;
		price: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class ShopMenu extends BaseMenu {
		hotkeyHelp: any;
		hotkeySort: any;
		hotkeySwitch: any;
		shopName: any;
		start: any;
		shopList: any;
		pageView: any;
		stats: any;
		cart: any;
		quantity: any;
		confirmDialog: any;
		sortMenu: any;
		helpGui: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		openQuantitySelect: (b?: any) => any;
		updateSortMenuButton: (b?: any) => any;
		resolveStateChange: (b?: any, a?: any) => any;
		onConfirm: () => any;
		buyItems: () => any;
		sellItems: () => any;
		onQuantitySubmit: (b?: any, a?: any) => any;
		onQuantityBack: (b?: any) => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		onHotkeySortCheck: () => any;
		onHotkeySwitchCheck: () => any;
		onSortButtonPress: () => any;
		onExecuteSort: (b?: any) => any;
		createHelpGui: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		onBackButtonPress: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class HelpScrollContainer extends ig.GuiElementBase {
		scrollPane: any;
		content: any;
		constructor();
		init: () => any;
		setElement: (a?: any) => any;
		scroll: (a?: any, b?: any) => any;
		getScrollY: () => any;
		clear: () => any;
		setSize: (a?: any, b?: any) => any;
		_updateContentHeight: () => any;
	}
	class MultiPagePageCounter extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		count: any;
		max: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setCount: (a?: any) => any;
		setMax: (a?: any) => any;
	}
	class MultiPageBoxGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		msgBox: any;
		content: any;
		header: any;
		buttonInteract: any;
		buttonGroup: any;
		defaultHeaderText: string;
		linePadding: number;
		listPadding: number;
		turnLeft: any;
		turnRight: any;
		pageCounter: any;
		pages: any;
		curPage: number;
		backSound: any;
		_width: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		openMenu: () => any;
		closeMenu: () => any;
		addPage: (a?: any, b?: any, c?: any) => any;
		addPages: (a?: any) => any;
		setDefaultHeaderText: (a?: any) => any;
		_setPage: (a?: any) => any;
		addListEntry: (a?: any, d?: any, c?: any) => any;
		_createInitContent: (a?: any) => any;
		onTurnLeftCheck: () => any;
		onTurnRightCheck: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
	}
	class LogGuiTypeBase extends ig.GuiElementBase {
		iconGui: any;
		textGui: any;
		type: any;
		constructor(b?: any);
		init: (b?: any) => any;
	}
	class SynopsisLogDisplay extends HeaderMenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		content: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
	}
	class SynopsisTaskDisplay extends HeaderMenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		task: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
	}
	class SynopsisQuestDisplay extends HeaderMenuPanel {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		questNameGui: any;
		taskGUI: any;
		quest: any;
		constructor();
		init: () => any;
		setQuest: (b?: any) => any;
		updateDrawables: (b?: any) => any;
		show: () => any;
		hide: (b?: any) => any;
	}
	class SynopsisMenu extends BaseMenu {
		hotkeyHelp: any;
		temp_button_group: any;
		helpGui: any;
		buttonGroup: any;
		buttons: {
			map: any;
			lore: any;
			trophies: any;
			records: any;
			trade: any;
			enemies: any;
			botanics: any;
			museum: any;
		};
		infoTask: any;
		infoQuest: any;
		infoLogs: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		_createButton: (a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		createHelpGui: () => any;
		onAddHotkeys: (a?: any) => any;
		commitHotKeysToTopBar: (a?: any) => any;
		onBackButtonPress: () => any;
		modelChanged: () => any;
	}
	class SolvedLine extends ig.SimpleGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		textGui: any;
		constructor();
		init: () => any;
		setSize: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class QuestBaseBox extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		levelGui: any;
		elite: number;
		constructor(a?: any, b?: any, d?: any);
		init: (a?: any, b?: any, d?: any) => any;
		updateDrawables: (a?: any) => any;
		setLevel: (a?: any) => any;
		setElite: (a?: any, b?: any) => any;
	}
	class QuestInfoBoxActive extends ig.SimpleGui {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		lineGui: any;
		taskContainer: any;
		constructor();
		init: () => any;
		setTasks: (a?: any, b?: any) => any;
		_addTask: (a?: any, b?: any, f?: any) => any;
	}
	class QuestInfoBoxSolved extends ig.SimpleGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		solvedGui: any;
		endDescription: any;
		constructor();
		init: () => any;
	}
	class QuestInfoBox extends QuestBaseBox {
		gfx: ig.Image;
		titleGui: any;
		descriptionGui: any;
		locationGui: any;
		locationText: any;
		lineGui: any;
		activeView: any;
		solvedView: any;
		constructor();
		init: () => any;
		setQuest: (a?: any) => any;
		show: () => any;
		hide: (a?: any) => any;
	}
	class QuestDialog extends QuestBaseBox {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			SMALLER: {
				state: {
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		titleGui: any;
		descriptionGui: any;
		endDescriptionGui: any;
		firstTaskGui: any;
		expGui: any;
		creditGui: any;
		cpGui: any;
		itemsGui: any;
		solvedGui: any;
		quest: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		setQuest: (a?: any) => any;
		setQuestRewards: (a?: any, d?: any, f?: any) => any;
	}
	class QuestDialogWrapper extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
					angle: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		screenInteract: any;
		buttonInteract: any;
		buttonGroup: any;
		callback: any;
		quest: any;
		questBox: any;
		buttons: any;
		acceptText: any;
		overlay: any;
		finished: boolean;
		firstQuest: any;
		subQuests: any;
		next: number;
		_characterName: any;
		_mapName: any;
		constructor(b?: any, d?: any, f?: any, g?: any, h?: any);
		init: (b?: any, d?: any, f?: any, g?: any, h?: any) => any;
		onDetach: () => any;
		onButtonPress: (a?: any) => any;
		_close: (a?: any) => any;
	}
	class QuestStartDialogButtonBox extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		acceptButton: any;
		declineButton: any;
		acceptMode: boolean;
		constructor(a?: any, b?: any, d?: any, g?: any);
		init: (a?: any, b?: any, d?: any, g?: any) => any;
		setAcceptMode: (a?: any) => any;
	}
	class QuestListBox extends ig.GuiElementBase {
		gfx: ig.Image;
		list: any;
		bg: any;
		tabs: {
			active: any;
			solved: any;
			all: any;
		};
		tabArray: any;
		tabContent: any;
		buttongroup: any;
		tabGroup: any;
		submitSound: any;
		favSound: any;
		errorSound: any;
		_prevIndex: any;
		_prevPressed: any;
		_refocusFromCycle: any;
		_lastCursorPos: any;
		_curElement: any;
		constructor();
		init: () => any;
		setFavorite: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		getCurrentSortText: () => any;
		isNonMouseMenuInput: () => any;
		onButtonTraversal: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
		_sortCacheList: (a?: any) => any;
		_createCacheList: (a?: any, b?: any, c?: any, e?: any) => any;
		_createListEntries: (a?: any, d?: any) => any;
		_findParentIndex: (a?: any) => any;
		_createTabButton: (a?: any, b?: any, c?: any, e?: any) => any;
		_rearrangeTabs: () => any;
		_resetButtons: (a?: any, b?: any) => any;
		_makeName: (a?: any) => any;
	}
	class NPCDisplayGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		npc: any;
		gameState: any;
		animSheet: any;
		size: {
			x: number;
			y: number;
		};
		displayOffset: {
			x: number;
			y: number;
		};
		hideBackground: boolean;
		entity: any;
		callback: any;
		skipIfLoaded: boolean;
		anim: string;
		effect: any;
		effectEntity: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		initGameState: () => any;
		playEffect: (b?: any, a?: any, d?: any) => any;
		clearEffects: () => any;
		onDetach: () => any;
		onLoadableComplete: (b?: any, a?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
	}
	class QuestDetailTasks extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		container: any;
		content: any;
		constructor();
		init: () => any;
		scroll: (a?: any, b?: any) => any;
		show: (a?: any, b?: any, c?: any) => any;
		hide: () => any;
	}
	class QuestDetailsSolved extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		endDescription: any;
		constructor();
		init: () => any;
		show: (a?: any) => any;
		hide: () => any;
	}
	class QuestCharacterView extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		display: any;
		container: any;
		hideBackground: boolean;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		setCharacter: (a?: any, b?: any) => any;
		centerNPC: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class QuestDetailsView extends QuestBaseBox {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		titleGui: any;
		descriptionGui: any;
		locationArea: any;
		locationMap: any;
		personTextGui: any;
		personCharGui: any;
		expGui: any;
		moneyGui: any;
		cpGui: any;
		itemsGui: any;
		atCurLevelGui: any;
		activeView: any;
		solvedView: any;
		buttongroup: any;
		taskButton: any;
		taskSwitch: any;
		lines: any;
		currentQuest: any;
		submitSound: any;
		constructor(a?: any);
		init: (a?: any) => any;
		update: () => any;
		checkTaskSwitch: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: (a?: any) => any;
		hide: () => any;
		_setQuest: (a?: any) => any;
		doButtonTraversal: () => any;
		onBackButtonPress: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class QuestMenu extends BaseMenu {
		hotkeyHelp: any;
		hotkeySort: any;
		hotkeyTask: any;
		helpGui: any;
		questInfoBox: any;
		questListBox: any;
		questDetailBox: any;
		sortMenu: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		onHotkeySortCheck: () => any;
		onHotkeyTaskCheck: () => any;
		onSortButtonPress: () => any;
		onExecuteSort: (b?: any) => any;
		createHelpGui: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		onBackButtonPress: () => any;
		_updateSortMenuButton: (b?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class TabbedPane extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		tabGroup: any;
		keys: any;
		tabs: {[key: string]: any};
		tabArray: any;
		tabContent: any;
		currentTabIndex: any;
		currentContent: any;
		tabSelectionListener: any;
		tabPressListener: any;
		tabButtonCreationCallback: any;
		cacheContent: boolean;
		menuPanel: any;
		menuHighlight: any;
		_prevIndex: any;
		_prevPressed: any;
		_refocusFromCycle: any;
		_lastCursorPos: any;
		constructor(b?: any);
		init: (b?: any) => any;
		setSize: (b?: any, a?: any) => any;
		setPanelSize: (b?: any, a?: any) => any;
		addTab: (b?: any, a?: any, d?: any) => any;
		setTab: (b?: any, a?: any, d?: any) => any;
		show: (b?: any) => any;
		hide: () => any;
		rearrangeTabs: () => any;
		resetButtons: (b?: any, a?: any) => any;
		getCurrentTabButton: () => any;
		getCurrentTabKey: () => any;
		getButtonIndex: (b?: any) => any;
		onTabSelected: () => any;
		onTabPressed: () => any;
		onTabButtonCreation: () => any;
		onTabMouseFocusLost: () => any;
		onTabChanged: () => any;
		onClearPrevContent: () => any;
		onContentCreation: () => any;
		onSetCacheContent: () => any;
	}
	class ListTabbedPane extends TabbedPane {
		currentList: any;
		currentGroup: any;
		listPadding: number;
		listPageSize: number;
		defaultSortType: number;
		containerHeightOffset: number;
		listPosOffset: number;
		listHeightOffset: number;
		bg: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		update: () => any;
		setSize: (b?: any, a?: any) => any;
		show: () => any;
		hide: () => any;
		onClearPrevContent: () => any;
		onSetCacheContent: (b?: any, a?: any, d?: any) => any;
		onContentCreation: () => any;
		sort: (b?: any) => any;
		isNonMouseMenuInput: () => any;
		onButtonTraversal: () => any;
		switchTab: (b?: any) => any;
		onInitSortType: () => any;
		onListEntryPressed: () => any;
		onListEntrySelected: () => any;
		onListMouseFocusLost: () => any;
		onLeftRightPress: () => any;
		onCreateListEntries: () => any;
	}
	class MsgSkipGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		box: any;
		personEntry: any;
		timer: number;
		constructor();
		init: () => any;
		update: () => any;
		hide: () => any;
		show: () => any;
	}
	class SideMessageHudGui extends ig.GuiElementBase {
		sideLabel: any;
		pauseMaxY: number;
		pauseBoxes: any;
		visibleBoxes: any;
		timer: number;
		pauseMode: boolean;
		messageIndex: number;
		prePauseMsgState: any;
		contentGui: any;
		skipGui: any;
		quickPop: boolean;
		skipInteractEntry: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		update: () => any;
		doMessageStep: (b?: any) => any;
		updateBottomGap: () => any;
		modelChanged: (b?: any, a?: any) => any;
		clearMessages: () => any;
		fillMessagesOnPause: () => any;
		restoreAfterLoad: () => any;
		restoreAfterPause: () => any;
		scrollMessages: (b?: any) => any;
		showNextSideMessage: () => any;
		pushMessageBottom: (b?: any, a?: any, d?: any) => any;
		isLastBlockFinished: () => any;
		popMessage: () => any;
		updateSkipGui: () => any;
		onMessageFinish: () => any;
		onSkipInteract: (b?: any) => any;
	}
	class SideMessageContentGui extends ig.GuiElementBase {
		constructor();
		init: () => any;
	}
	class SideMessageBoxGui extends SlickBoxRawGui {
		text: any;
		face: any;
		beepSound: ig.Sound;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			UPWARD: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		setContent: (b?: any, a?: any, d?: any) => any;
		setOnFinish: (b?: any) => any;
		isFinished: () => any;
		skip: () => any;
		show: (b?: any) => any;
		remove: (b?: any) => any;
	}
	class SideMessageFaceGui extends ig.GuiElementBase {
		charExpression: any;
		timer: number;
		transitions: {
			DEFAULT: {
				state: {
					scaleX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		setFace: (b?: any, a?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
	}
	class SideMessageLabelGui extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		iconText: any;
		currentIconDevice: any;
		constructor();
		init: () => any;
		update: () => any;
	}
	class EnemyDisplayGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		enemy: any;
		gameState: any;
		entity: any;
		callback: any;
		skipIfLoaded: boolean;
		displayOffset: {
			x: number;
			y: number;
		};
		anim: string;
		randomAnim: any;
		boosted: boolean;
		randomTimer: number;
		randomReset: number;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		onDetach: () => any;
		onLoadableComplete: (b?: any, a?: any) => any;
		initGameState: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
	}
	class EnemyPageGeneralInfo extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		location: any;
		kills: any;
		display: any;
		baseHp: any;
		baseAttack: any;
		baseDefense: any;
		baseFocus: any;
		resistance: any;
		expMoney: any;
		drops: any;
		constructor();
		init: () => any;
		setData: (a?: any, d?: any, f?: any, g?: any) => any;
		createStatusLine: (a?: any, b?: any, d?: any, g?: any) => any;
	}
	class EnemyPageMetaInfo extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		killMore: any;
		species: any;
		trivia: any;
		descriptions: any;
		content: any;
		constructor();
		init: () => any;
		setData: (a?: any, b?: any) => any;
		getPercent: (a?: any, b?: any) => any;
	}
	class EnemyLocation extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		location: any;
		image: any;
		constructor();
		init: () => any;
		setLocation: (a?: any, b?: any) => any;
		hide: (a?: any) => any;
	}
	class EnemyBaseParamLine extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		number: any;
		name: string;
		icon: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		setNumber: (a?: any, b?: any) => any;
		setScrambleNumbers: (a?: any) => any;
		hide: () => any;
		updateDrawables: (a?: any) => any;
	}
	class EnemyDrops extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		container: any;
		prevChances: any;
		constructor();
		init: () => any;
		setDrops: (b?: any, d?: any, f?: any) => any;
		hide: () => any;
	}
	class EnemyKillCount extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		count: any;
		image: any;
		special: any;
		constructor();
		init: () => any;
		setKills: (a?: any, b?: any) => any;
		hide: () => any;
	}
	class EnemyExpMoney extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		exp: any;
		money: any;
		constructor();
		init: () => any;
		setValues: (a?: any, b?: any, d?: any) => any;
		hide: () => any;
		updateDrawables: (a?: any) => any;
	}
	class EnemyResistence extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		res: any;
		lines: any;
		images: any;
		constructor();
		init: () => any;
		setResistance: (a?: any, b?: any) => any;
		hide: () => any;
		createNumber: (a?: any) => any;
		createLine: (a?: any) => any;
		createImage: (a?: any) => any;
		getValue: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class EnemyElementSlopeLine extends ig.GuiElementBase {
		slope: any;
		line: any;
		hasLine: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		show: (a?: any) => any;
		hide: (a?: any) => any;
	}
	class EnemyDisplayBox extends ig.BoxGui {
		display: any;
		container: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		constructor();
		init: () => any;
		setEnemy: (a?: any, b?: any, d?: any, g?: any, h?: any) => any;
		centerEnemy: (a?: any) => any;
	}
	class SocialInfoBox extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		noEntry: any;
		base: any;
		clazz: any;
		name: any;
		baseHp: any;
		baseAttack: any;
		baseDefense: any;
		baseFocus: any;
		equip: any;
		content: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		setCharacter: (a?: any) => any;
		createEquipEntry: (a?: any, b?: any, e?: any) => any;
		getBodyPartIcon: (a?: any) => any;
		createStatusLine: (a?: any, b?: any, e?: any, f?: any) => any;
	}
	class SocialPartyBox extends ig.GuiElementBase {
		lea: any;
		members: any;
		constructor();
		init: () => any;
		updatePartyMembers: () => any;
		show: (a?: any) => any;
		hide: (a?: any) => any;
	}
	class SocialPartyMember extends MenuPanel {
		gfx: ig.Image;
		headerPatch: ig.NinePatch;
		info: any;
		name: any;
		isLea: boolean;
		constructor(a?: any, b?: any, e?: any);
		init: (a?: any, b?: any, e?: any) => any;
		show: (a?: any) => any;
		hide: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class SocialBaseInfoBox extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		face: any;
		level: any;
		name: any;
		exp: any;
		hp: any;
		sp: any;
		constructor();
		init: () => any;
		show: (a?: any, b?: any) => any;
		hide: (a?: any) => any;
	}
	class SocialFace extends ig.GuiElementBase {
		charExpression: any;
		transitions: {
			DEFAULT: {
				state: {
					scaleX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		setCharacter: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class SocialEntryButton extends ListBoxButton {
		gfx2: ig.Image;
		head: any;
		status: any;
		level: any;
		key: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		focusGained: () => any;
		focusLost: () => any;
		updateMemberStatus: () => any;
		keepButtonPressed: () => any;
		unPressButton: () => any;
		getMemberName: (a?: any, b?: any) => any;
	}
	class SocialHead extends ig.GuiElementBase {
		gfx: ig.Image;
		headsGfx: ig.Image;
		index: number;
		active: boolean;
		focus: boolean;
		keepPressed: boolean;
		constructor(a?: any);
		init: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class QuestHubAvailable extends MenuPanel {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		number: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		updateDrawables: (a?: any) => any;
	}
	class QuestHubCompletion extends MenuPanel {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		percent: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		updateDrawables: (a?: any) => any;
	}
	class QuestHubListEntry extends ig.FocusGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		character: any;
		questTitle: any;
		questLocation: any;
		levelContent: any;
		level: any;
		areaContent: any;
		area: any;
		rewards: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		addImageRewardGui: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
		addItemRewardGui: (a?: any, b?: any, c?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class QuestHubRewards extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		constructor();
		init: () => any;
	}
	class QuestHubCharacterView extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		display: any;
		container: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		setCharacter: (a?: any, b?: any) => any;
		centerNPC: (a?: any) => any;
	}
	class QuestHubList extends ListTabbedPane {
		submitSound: any;
		containerHeightOffset: any;
		listPosOffset: any;
		listHeightOffset: number;
		listPageSize: number;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		getCurrentSortText: () => any;
		onLeftRightPress: () => any;
		onTabChanged: (b?: any) => any;
		onTabButtonCreation: (b?: any, a?: any, d?: any) => any;
		onTabPressed: (b?: any, a?: any) => any;
		onTabSelected: () => any;
		onTabMouseFocusLost: () => any;
		onInitSortType: () => any;
		onCreateListEntries: (b?: any, a?: any, d?: any, c?: any) => any;
		onListEntrySelected: (b?: any) => any;
		onListMouseFocusLost: () => any;
		collectQuests: (b?: any, a?: any) => any;
		sortList: (b?: any, a?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class QuestHubMenu extends ListInfoMenu {
		helpGui: any;
		completion: any;
		available: any;
		constructor();
		init: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		createHelpGui: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class EnemyListBox extends ListTabbedPane {
		submitSound: any;
		favSound: any;
		errorSound: any;
		enemies: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		getCurrentSortText: () => any;
		onLeftRightPress: (b?: any, a?: any, d?: any) => any;
		onTabChanged: (b?: any) => any;
		onTabButtonCreation: (b?: any, a?: any, d?: any) => any;
		onTabPressed: (b?: any, a?: any) => any;
		onTabSelected: () => any;
		onTabMouseFocusLost: () => any;
		onCreateListEntries: (b?: any, a?: any, d?: any, c?: any) => any;
		onListEntrySelected: (b?: any) => any;
		onListMouseFocusLost: () => any;
		getEnemyList: (b?: any, a?: any) => any;
		sortLoreList: (b?: any, a?: any) => any;
		getEnemyCategoryKey: (b?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class EnemyInfoBox extends ig.BoxGui {
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		title: any;
		level: any;
		category: any;
		display: any;
		rightButton: any;
		leftButton: any;
		pagesNumberContainer: any;
		currentPage: any;
		maxPages: any;
		pages: any;
		enemy: any;
		page: any;
		key: string;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		onRightButtonCheck: () => any;
		onLeftButtonCheck: () => any;
		onRightButtonPressed: () => any;
		onLeftButtonPressed: () => any;
		setPage: (b?: any) => any;
		switchPage: (b?: any) => any;
		setCategory: (b?: any) => any;
		setEnemy: (b?: any) => any;
	}
	class EnemyEntryButton extends ListBoxButton {
		key: any;
		level: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
	}
	class EnemyMenu extends ListInfoMenu {
		constructor();
		init: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		createHelpGui: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class LoreInfoBox extends ig.BoxGui {
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		title: any;
		category: any;
		alternativeArrow: any;
		alternative: any;
		scrollContainer: any;
		content: any;
		key: any;
		lore: any;
		buttongroup: any;
		currentButton: any;
		focus: boolean;
		scrollMemory: {[key: string]: any};
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		setFocus: (b?: any) => any;
		clearFocus: () => any;
		onButtonTraversal: () => any;
		onBackButtonPress: () => any;
		update: () => any;
		setCategory: (b?: any) => any;
		setLore: (b?: any) => any;
		_createEntry: (b?: any) => any;
		_addContent: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
	}
	class LoreEntryButton extends ListBoxButton {
		key: any;
		completion: any;
		overlay: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		setPressState: (b?: any) => any;
		clearOverlay: () => any;
		isNoPercentType: (b?: any) => any;
	}
	class LoreListBoxNew extends ListTabbedPane {
		gfx: ig.Image;
		submitSound: any;
		favSound: any;
		errorSound: any;
		completion: any;
		newList: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		getCurrentSortText: () => any;
		onListEntryPressed: (a?: any) => any;
		onLeftRightPress: (a?: any, b?: any, c?: any) => any;
		onTabChanged: (a?: any) => any;
		onTabButtonCreation: (a?: any, b?: any, c?: any) => any;
		onTabPressed: (a?: any, b?: any) => any;
		onTabSelected: () => any;
		onTabMouseFocusLost: () => any;
		onCreateListEntries: (a?: any, d?: any, c?: any, e?: any) => any;
		findParentIndex: (a?: any, b?: any) => any;
		onListEntrySelected: (a?: any) => any;
		onListMouseFocusLost: () => any;
		showLockedEntries: (a?: any) => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
		canShowCompletion: (a?: any) => any;
	}
	class LoreMenu extends BaseMenu {
		hotkeyHelp: any;
		hotkeySort: any;
		helpGui: any;
		list: any;
		info: any;
		sortMenu: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		onHotkeySortCheck: () => any;
		onSortButtonPress: () => any;
		onExecuteSort: (b?: any) => any;
		createHelpGui: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		onBackButtonPress: () => any;
		updateSortMenuButton: (b?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class StatusPageSwitch extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					offsetX: any;
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		left: any;
		right: any;
		text: any;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		show: () => any;
		hide: () => any;
		updateCurrentPageName: () => any;
		updateStatusPage: (a?: any) => any;
		onLeftPressCheck: () => any;
		onRightPressCheck: () => any;
	}
	class StatusElementSwitch extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					offsetX: any;
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		left: any;
		right: any;
		icon: any;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		show: () => any;
		hide: () => any;
		updateCurrentElementIcon: () => any;
		updateElement: (a?: any) => any;
		onLeftPressCheck: () => any;
		onRightPressCheck: () => any;
	}
	class StatusParamBar extends ig.GuiElementBase {
		gfx: ig.Image;
		name: string;
		lineID: number;
		iconID: number;
		usePercent: boolean;
		iconIndex: any;
		skipVertLine: boolean;
		base: any;
		equip: any;
		skills: any;
		equipAdd: any;
		skillAdd: any;
		description: any;
		guis: any;
		_baseRed: boolean;
		_equipRed: boolean;
		_skillsRed: boolean;
		_hideAll: boolean;
		_skillHidden: boolean;
		_noPercent: boolean;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any) => any;
		updateValues: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
		hideValues: (a?: any) => any;
		updateDrawables: (a?: any) => any;
		addTransitions: (a?: any) => any;
	}
	class StatusViewMain extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		params: any;
		equip: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: (a?: any) => any;
		updatePage: () => any;
	}
	class StatusViewMainEquipment extends MenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		bodyparts: {[key: string]: any};
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		updateValues: () => any;
		createEntry: (a?: any, b?: any, c?: any) => any;
		getEquipID: (a?: any) => any;
	}
	class StatusViewMainParameters extends MenuPanel {
		menuGfx: ig.Image;
		statusGfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		level: any;
		hpBar: any;
		spBar: any;
		expBar: any;
		baseParams: {
			hp: any;
			atk: any;
			def: any;
			foc: any;
			fire: any;
			cold: any;
			shock: any;
			wave: any;
		};
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		show: () => any;
		hide: (a?: any) => any;
		createStatusDisplay: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
		updateValues: (a?: any) => any;
	}
	class StatsScrollPane extends ScrollPane {
		contentPane: any;
		paddingTop: number;
		constructor(b?: any);
		init: (b?: any) => any;
		update: () => any;
		setSize: (b?: any, a?: any) => any;
		scroll: (b?: any, a?: any) => any;
		addEntry: (b?: any, a?: any) => any;
		clear: (b?: any) => any;
		setScrollY: (b?: any, a?: any, d?: any) => any;
		getContentHeight: (b?: any) => any;
		setContentHeight: (b?: any) => any;
	}
	class StatPercentNumber extends ig.GuiElementBase {
		gfx: ig.Image;
		number: any;
		floating: any;
		color: number;
		x: number;
		smallPercent: boolean;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		setNumber: (b?: any, a?: any) => any;
		setColor: (b?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class StatusViewParameters extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		container: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: (b?: any) => any;
		updatePage: () => any;
	}
	class StatusViewParametersContainer extends MenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		bg: any;
		list: any;
		entries: {[key: string]: any};
		constructor();
		init: () => any;
		show: () => any;
		hide: (b?: any) => any;
		updateValues: (b?: any) => any;
		updateLine: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		createParameterLines: () => any;
		createLine: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
	}
	class StatusViewModifiers extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		container: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: (b?: any) => any;
		updatePage: (b?: any) => any;
	}
	class StatusViewModifiersContainer extends MenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		bg: any;
		list: any;
		entries: {[key: string]: any};
		constructor();
		init: () => any;
		show: () => any;
		hide: (b?: any) => any;
		updateValues: (b?: any, a?: any) => any;
		updateLine: (b?: any, a?: any, d?: any, c?: any) => any;
		createParameterLines: (b?: any) => any;
		createLine: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
	}
	class StatusViewCombatArts extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		container: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: (a?: any) => any;
		updatePage: (a?: any) => any;
	}
	class StatusViewCombatArtsContainer extends MenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		bg: any;
		list: any;
		entries: {[key: string]: any};
		constructor();
		init: () => any;
		show: () => any;
		hide: (a?: any) => any;
		updateValues: (a?: any) => any;
		createArts: (a?: any) => any;
		addType: (a?: any) => any;
		addArts: (a?: any, b?: any, c?: any) => any;
		getMaxArts: (a?: any, b?: any) => any;
	}
	class StatusViewCombatArtsEntry extends ig.GuiElementBase {
		skillIcons: ig.Image;
		icon: any;
		level: any;
		sp: any;
		dmgType: any;
		stunType: any;
		condition: any;
		name: any;
		description: any;
		info: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		addText: (a?: any, b?: any, c?: any) => any;
		getDamageType: (a?: any) => any;
		getStunType: (a?: any) => any;
		getConditionType: () => any;
	}
	class StatusViewCombatArtsLine extends ig.GuiElementBase {
		gfx: ig.Image;
		text: any;
		icon: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class StatusViewCombatArtsLineSingle extends ig.GuiElementBase {
		gfx: ig.Image;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
	}
	class StatusMenu extends BaseMenu {
		hotkeyHelp: any;
		hotkeyEquip: any;
		hotkeyDiff: any;
		temp_button_group: any;
		helpGui: any;
		pages: any;
		elements: any;
		pager: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: (b?: any, a?: any) => any;
		hideMenu: (b?: any, a?: any) => any;
		exitMenu: (b?: any) => any;
		createPages: () => any;
		setCurrentPage: (b?: any, a?: any) => any;
		updateCurrentPage: (b?: any) => any;
		updateLea: (b?: any, a?: any) => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		onHotkeyEquipCheck: () => any;
		onEquipButtonPressed: () => any;
		onHotkeyDiffCheck: () => any;
		onDiffButtonPressed: () => any;
		createHelpGui: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		updateHotkeys: () => any;
		onBackButtonPress: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class MuseumMenu extends BaseMenu {
		hotkeyHelp: any;
		temp_button_group: any;
		helpGui: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		createHelpGui: () => any;
		onAddHotkeys: () => any;
		onBackButtonPress: () => any;
		modelChanged: () => any;
	}
	class StatsBaseEntryGui extends ig.GuiElementBase {
		gfx: ig.Image;
		key: any;
		keyGui: any;
		valueGui: any;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class StatsListBox extends TabbedPane {
		gfx: ig.Image;
		submitSound: any;
		bg: any;
		currentGui: any;
		tabState: any;
		_buttongroup: any;
		constructor(a?: any);
		init: (a?: any) => any;
		show: () => any;
		hide: () => any;
		switchTab: (a?: any) => any;
		onTabPressed: (a?: any, b?: any) => any;
		onTabButtonCreation: (a?: any, b?: any, c?: any) => any;
		onTabChanged: (a?: any) => any;
		onContentCreation: () => any;
		onClearPrevContent: () => any;
		onSetCacheContent: (a?: any) => any;
		modelChanged: () => any;
	}
	class StatsMenu extends BaseMenu {
		hotkeyHelp: any;
		buttongroup: any;
		helpGui: any;
		list: any;
		constructor();
		init: () => any;
		update: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		showMenu: () => any;
		hideMenu: () => any;
		exitMenu: () => any;
		onButtonTraversal: () => any;
		onHotkeyHelpCheck: () => any;
		onHelpButtonPressed: () => any;
		createHelpGui: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		onBackButtonPress: () => any;
		modelChanged: () => any;
	}
	class TrophyTabOverview extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		total: any;
		category: any;
		section: any;
		constructor();
		init: () => any;
		updateNumbers: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class TrophyTotalPoints extends MenuPanel {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		number: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		updateDrawables: (a?: any) => any;
	}
	class TrophyCompletion extends MenuPanel {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		percent: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		updateDrawables: (a?: any) => any;
	}
	class TrophySectionList extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		buttongroup: any;
		index: any;
		category: any;
		callback: any;
		active: boolean;
		currentButton: any;
		prevButton: any;
		buttons: any;
		sectionButtons: {[key: string]: any};
		switchLeft: any;
		switchRight: any;
		constructor(a?: any, b?: any, e?: any);
		init: (a?: any, b?: any, e?: any) => any;
		activate: () => any;
		deactivate: () => any;
		setActiveButton: (a?: any, b?: any) => any;
		getCurrentSection: () => any;
		getPreviousSection: () => any;
		updateDrawables: (a?: any) => any;
		addButton: (a?: any, b?: any, e?: any, f?: any, g?: any) => any;
	}
	class TrophyListEntry extends ig.FocusGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		character: any;
		title: any;
		description: any;
		progress: any;
		icon: any;
		overlay: any;
		steamID: boolean;
		key: any;
		toggleState: boolean;
		triggered: boolean;
		constructor(a?: any, b?: any, e?: any, f?: any);
		init: (a?: any, b?: any, e?: any, f?: any) => any;
		updateDrawables: (a?: any) => any;
		toggleProgress: (a?: any, b?: any) => any;
		clearOverlay: () => any;
		getTextWithColor: (b?: any, c?: any) => any;
	}
	class TrophyProgress extends ig.GuiElementBase {
		numberGfx: ig.Image;
		bar: any;
		content: any;
		constructor(a?: any);
		init: (a?: any) => any;
		show: () => any;
		hide: () => any;
		setProgress: (a?: any) => any;
		setProgressFallback: (a?: any) => any;
		setProgressForTimeType: (a?: any, b?: any, e?: any) => any;
		setProgressForValueType: (a?: any, b?: any, e?: any) => any;
	}
	class TrophyProgressBar extends ig.GuiElementBase {
		backgroundPatch: ig.NinePatch;
		ratio: number;
		ratioSmall: number;
		triggered: boolean;
		frame: number;
		constructor(a?: any);
		init: (a?: any) => any;
		updateDrawables: (a?: any) => any;
		setRatio: (a?: any) => any;
	}
	class TrophyIconGraphic extends ig.GuiElementBase {
		gfx: ig.Image;
		icons: ig.Image;
		ribbon: any;
		icon: any;
		points: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor(a?: any, b?: any, e?: any, f?: any);
		init: (a?: any, b?: any, e?: any, f?: any) => any;
		addStars: (a?: any, b?: any) => any;
		createStar: (a?: any) => any;
	}
	class TrophyList extends ListTabbedPane {
		submitSound: any;
		containerHeightOffset: any;
		listPosOffset: any;
		listHeightOffset: number;
		listPageSize: number;
		sections: any;
		sectionCache: {[key: string]: any};
		showStats: boolean;
		showProgress: boolean;
		newList: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		toggleProgress: () => any;
		onButtonTraversal: () => any;
		getCurrentSortText: () => any;
		onLeftRightPress: () => any;
		onTabChanged: (b?: any, a?: any) => any;
		onTabButtonCreation: (b?: any, a?: any, d?: any) => any;
		onTabPressed: (b?: any, a?: any) => any;
		onTabSelected: () => any;
		onTabMouseFocusLost: () => any;
		onSectionPress: (b?: any, a?: any, d?: any) => any;
		switchSection: (b?: any) => any;
		onCreateListEntries: (b?: any, a?: any, d?: any, c?: any) => any;
		onListEntrySelected: (b?: any) => any;
		onListMouseFocusLost: () => any;
		collectTrophies: (b?: any, a?: any, d?: any) => any;
		sortList: (b?: any, a?: any) => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class TrophyMenu extends ListInfoMenu {
		hotkeyStats: any;
		helpGui: any;
		sectionLeft: any;
		sectionRight: any;
		points: any;
		completion: any;
		constructor();
		init: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		onHotkeyStatsCheck: () => any;
		onStatsButtonPressed: () => any;
		createHelpGui: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class SocialList extends ListTabbedPane {
		submitSound: any;
		favSound: any;
		errorSound: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		updatePartyMembers: () => any;
		getCurrentSortText: () => any;
		onLeftRightPress: () => any;
		onTabChanged: (b?: any) => any;
		onTabButtonCreation: (b?: any, a?: any, d?: any) => any;
		onTabPressed: (b?: any, a?: any) => any;
		onTabSelected: () => any;
		onTabMouseFocusLost: () => any;
		getMemberList: (b?: any, a?: any) => any;
		sortList: (b?: any, a?: any) => any;
		onCreateListEntries: (b?: any, a?: any, d?: any, c?: any) => any;
		onListEntrySelected: (b?: any) => any;
		onListEntryPressed: (b?: any) => any;
		onListMouseFocusLost: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class SocialMenu extends ListInfoMenu {
		party: any;
		options: any;
		optionsContacts: any;
		_keepButtonFocused: any;
		constructor();
		init: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		openOptionsMenu: (b?: any, a?: any) => any;
		contactMember: (b?: any) => any;
		inviteMember: (b?: any) => any;
		removeMember: (b?: any) => any;
		onEventEndDetach: () => any;
		onOptionsExecute: (b?: any) => any;
		onOptionsBack: () => any;
		createHelpGui: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class TradeItem extends ListBoxButton {
		helperGfx: ig.Image;
		requiredGui: any;
		amount: any;
		crossGui: any;
		isTrade: boolean;
		required: number;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		updateTradeItem: (b?: any) => any;
	}
	class TradeItemBox extends ig.GuiElementBase {
		gfx: ig.Image;
		dividerColor: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		updateDrawables: (b?: any) => any;
		setContent: (b?: any, a?: any, d?: any, c?: any) => any;
		updateTradeItemButtons: (b?: any) => any;
		_isEquipped: (b?: any, a?: any, d?: any) => any;
	}
	class TradeMoneyGui extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		content: any;
		money: number;
		credit: any;
		fee: any;
		current: any;
		dividerColor: any;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		setContent: (b?: any, a?: any, d?: any, c?: any) => any;
		updateValues: () => any;
		updateDrawables: (b?: any) => any;
	}
	class TradeDialogMenu extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		buttongroup: any;
		tradeButton: any;
		getItems: any;
		requireItems: any;
		money: any;
		arrow: any;
		forText: any;
		ownedText: any;
		constructor();
		init: () => any;
		updateDrawables: (b?: any) => any;
		onSelection: (b?: any) => any;
		showMenu: () => any;
		hideMenu: () => any;
		doTrade: () => any;
		modelChanged: (b?: any, a?: any) => any;
		_onTradeButtonCheck: () => any;
		_setOffer: () => any;
		_createContent: () => any;
	}
	class TradeOfferDisplay extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					offsetY: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		offerText: any;
		cycleLeft: any;
		cycleRight: any;
		offerToken: any;
		constructor();
		init: () => any;
		updateDrawables: (b?: any) => any;
		showMenu: () => any;
		hideMenu: () => any;
		_cycleOffers: (b?: any) => any;
		onLeftPressCheck: () => any;
		onRightPressCheck: () => any;
	}
	class TradeButtonBox extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		trader: any;
		buttongroup: any;
		buttonStartIndex: number;
		buttons: any;
		character: any;
		traderName: any;
		location: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
	}
	class TradeEntryButton extends TradeItem {
		offer: number;
		trader: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any, h?: any) => any;
	}
	class TradeCharacterView extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		display: any;
		container: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		setCharacter: (b?: any, a?: any) => any;
		centerNPC: (b?: any) => any;
	}
	class TradeDetailsView extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_SCALE: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN_MOVE: {
				state: {
					alpha: number;
					offsetX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		sizeTransition: any;
		container: any;
		box: any;
		character: any;
		name: any;
		location: any;
		arrowRight: any;
		arrow: any;
		getGui: any;
		requireGui: any;
		moneyGui: any;
		_trader: any;
		constructor();
		init: () => any;
		setTraderData: (b?: any, a?: any, d?: any) => any;
		reset: () => any;
		show: (b?: any, a?: any, d?: any) => any;
		hide: (b?: any) => any;
	}
	class TradersListBox extends ListTabbedPane {
		submitSound: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		getCurrentSortText: () => any;
		onLeftRightPress: (a?: any, b?: any) => any;
		onTabChanged: () => any;
		onTabButtonCreation: (a?: any, b?: any, c?: any) => any;
		onTabPressed: (a?: any, b?: any) => any;
		onTabSelected: () => any;
		onTabMouseFocusLost: () => any;
		onCreateListEntries: (a?: any, b?: any, c?: any, e?: any) => any;
		hasAnyUpgrades: (a?: any) => any;
		onListEntrySelected: (a?: any) => any;
		onListEntryPressed: (a?: any) => any;
		onListMouseFocusLost: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class TraderMenu extends ListInfoMenu {
		detail: any;
		constructor();
		init: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		enterDetails: () => any;
		setTradeInfo: () => any;
		exitDetails: () => any;
		onDetailsBackPressed: () => any;
		createHelpGui: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class BotanicsEntryButton extends ListBoxButton {
		helperGfx: ig.Image;
		percent: any;
		plant: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
	}
	class BotanicsPreUnlockButton extends ig.FocusGui {
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		overlayNinepatch: ig.NinePatch;
		plant: any;
		text: any;
		collect: any;
		bar: any;
		constructor(b?: any, a?: any, d?: any);
		init: (b?: any, a?: any, d?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class BotanicsProgressBar extends ig.GuiElementBase {
		gfx: ig.Image;
		backgroundPatch: ig.NinePatch;
		ratio: number;
		constructor(b?: any);
		init: (b?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class BotanicsButtonBox extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		plant: any;
		buttongroup: any;
		buttonStartIndex: number;
		buttons: any;
		plantView: any;
		plantName: any;
		location: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
	}
	class BotanicsPlantView extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		display: any;
		container: any;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		setPlant: (b?: any, a?: any) => any;
		centerEntity: (b?: any) => any;
	}
	class ItemDestructDisplayGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		config: any;
		destructType: any;
		gameState: any;
		size: {
			x: number;
			y: number;
		};
		entity: any;
		callback: any;
		animSheet: any;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		onDetach: () => any;
		onLoadableComplete: (b?: any, a?: any) => any;
		initGameState: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
	}
	class BotanicsListBox extends ListTabbedPane {
		submitSound: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		getCurrentSortText: () => any;
		onLeftRightPress: (b?: any, a?: any) => any;
		onTabChanged: () => any;
		onTabButtonCreation: (b?: any, a?: any, d?: any) => any;
		onTabPressed: (b?: any, a?: any) => any;
		onTabSelected: () => any;
		onTabMouseFocusLost: () => any;
		onCreateListEntries: (b?: any, a?: any, d?: any, c?: any) => any;
		onListEntrySelected: (b?: any) => any;
		onListEntryPressed: () => any;
		onListMouseFocusLost: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class BotanicsMenu extends ListInfoMenu {
		detail: any;
		constructor();
		init: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		createHelpGui: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class ArenaCupInfoPage extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		banner: any;
		headerInfo: any;
		highscore: any;
		time: any;
		rushTime: any;
		rounds: any;
		rush: any;
		difficulty: any;
		coins: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: (b?: any) => any;
		createStatGui: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		setAnnotation: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		setData: (b?: any, a?: any) => any;
		getDifficulty: (b?: any) => any;
	}
	class ArenaBanner extends ig.GuiElementBase {
		gfx: ig.Image;
		image: any;
		imageGui: any;
		constructor(b?: any);
		init: (b?: any) => any;
		setImage: (b?: any, a?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class ArenaRoundInfoPage extends ig.GuiElementBase {
		gfx: ig.Image;
		numberGFX: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		highscore: any;
		time: any;
		coins: any;
		clearTimes: any;
		headerInfo: any;
		headerFeat: any;
		headerChallenges: any;
		medals: any;
		bonuses: any;
		challenges: any;
		noneText: any;
		leftContent: any;
		rightContent: any;
		side: boolean;
		constructor();
		init: () => any;
		onRightButtonCheck: () => any;
		onLeftButtonCheck: () => any;
		onRightButtonPressed: () => any;
		onLeftButtonPressed: () => any;
		show: () => any;
		hide: (b?: any) => any;
		togglePage: (b?: any) => any;
		setData: (b?: any, a?: any) => any;
		setChallenges: (b?: any) => any;
		setBonusPoints: (b?: any) => any;
		getBonusText: (b?: any) => any;
		getBonusPointsText: (b?: any) => any;
		createBonusEntry: (b?: any, a?: any, d?: any, c?: any) => any;
		createStatGui: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		setAnnotation: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
	}
	class ArenaChallengeEntry extends ig.GuiElementBase {
		gfx: ig.Image;
		icon: any;
		text: any;
		tiny: boolean;
		global: boolean;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		updateDrawables: (b?: any) => any;
	}
	class ArenaInfoBox extends ig.BoxGui {
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		title: any;
		category: any;
		level: any;
		pages: any;
		cup: any;
		key: string;
		round: any;
		page: number;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		switchPage: (a?: any) => any;
		setInfo: (a?: any, b?: any) => any;
		setCupInfo: (a?: any) => any;
		setRoundInfo: (a?: any, b?: any) => any;
		setCategory: (a?: any) => any;
	}
	class ArenaTopLine extends ig.GuiElementBase {
		gfx: ig.Image;
		constructor(a?: any);
		init: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class ArenaKeyValue extends ig.SimpleGui {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		keyGui: any;
		valueGui: any;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		setKey: (a?: any) => any;
		setValue: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class ArenaTinyKeyValue extends ig.SimpleGui {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		keyGui: any;
		valueGui: any;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class ArenaInfoLine extends ig.SimpleGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		textGui: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setSize: (a?: any, b?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class ArenaTotalPoints extends MenuPanel {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		number: any;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
		updateDrawables: (a?: any) => any;
	}
	class ArenaEntryButton extends ListBoxButton {
		trophyGfx: ig.Image;
		key: any;
		description: any;
		decoration: any;
		constructor(a?: any, b?: any, c?: any, e?: any);
		init: (a?: any, b?: any, c?: any, e?: any) => any;
		setDecoration: (a?: any) => any;
	}
	class ArenaRoundEntryButton extends ArenaEntryButton {
		round: any;
		dots: any;
		index: any;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any, g?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any) => any;
		updateDrawables: (a?: any) => any;
		setActive: (a?: any) => any;
	}
	class ArenaRoundList extends ListTabbedPane {
		currentCup: any;
		active: boolean;
		submit: ig.Sound;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: (a?: any) => any;
		hide: () => any;
		onTabButtonCreation: (a?: any, b?: any, c?: any) => any;
		onTabPressed: (a?: any, b?: any) => any;
		onTabSelected: () => any;
		onTabMouseFocusLost: () => any;
		onClearCurrentContent: (a?: any) => any;
		onListEntryPressed: (a?: any) => any;
		onCreateListEntries: (a?: any, b?: any) => any;
		onListEntrySelected: (a?: any) => any;
		onListMouseFocusLost: () => any;
		isRoundActive: (a?: any, b?: any) => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class ArenaCupList extends ListTabbedPane {
		submitSound: any;
		favSound: any;
		errorSound: any;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		getCurrentSortText: () => any;
		onLeftRightPress: (a?: any, b?: any, c?: any) => any;
		onTabChanged: (a?: any) => any;
		onTabButtonCreation: (a?: any, b?: any, c?: any) => any;
		onTabPressed: (a?: any, b?: any) => any;
		onTabSelected: () => any;
		onTabMouseFocusLost: () => any;
		onListEntryPressed: (a?: any) => any;
		onCreateListEntries: (a?: any, b?: any, c?: any, e?: any) => any;
		onListEntrySelected: (a?: any) => any;
		onListMouseFocusLost: () => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class ArenaMenu extends ListInfoMenu {
		hotkeyOverview: any;
		helpGui: any;
		roundList: any;
		points: any;
		overview: any;
		constructor();
		init: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		onAddHotkeys: (b?: any) => any;
		commitHotKeysToTopBar: (b?: any) => any;
		enterRoundMenu: (b?: any) => any;
		exitRoundMenu: () => any;
		onHotkeyOverviewCheck: () => any;
		onOverviewButtonPressed: () => any;
		createHelpGui: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class NewGameCart extends MenuPanel {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		points: any;
		cost: any;
		rest: any;
		enabled: boolean;
		constructor();
		init: () => any;
		resetNumbers: (b?: any) => any;
		updateCost: (b?: any) => any;
		updateDrawables: (b?: any) => any;
		show: () => any;
		hide: () => any;
	}
	class NewGameCartEntry extends ig.GuiElementBase {
		gfx: ig.Image;
		text: any;
		number: any;
		hideSymbol: boolean;
		constructor(b?: any);
		init: (b?: any) => any;
		updateDrawables: (b?: any) => any;
		setNumber: (b?: any, a?: any) => any;
	}
	class NewGameToggleSet extends ig.GuiElementBase {
		header: any;
		background: any;
		buttons: any;
		set: any;
		listIndex: number;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		updateTogglesStates: (b?: any) => any;
	}
	class NewGameOptionButton extends ListBoxButton {
		amount: any;
		set: any;
		setKey: any;
		setGui: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any, g?: any) => any;
		updateToggleState: () => any;
		setActive: (b?: any) => any;
	}
	class NewGameList extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		list: any;
		buttongroup: any;
		toggleOnSound: any;
		toggleOffSound: any;
		_curElement: any;
		constructor();
		init: () => any;
		createListEntries: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		show: () => any;
		hide: () => any;
		onGetHeightAtIndex: (b?: any, a?: any) => any;
		onItemButtonPressed: (b?: any) => any;
		isNonMouseMenuInput: () => any;
		modelChanged: () => any;
	}
	class NewGamePlusMenu extends ListInfoMenu {
		points: any;
		button: any;
		constructor();
		init: () => any;
		showMenu: () => any;
		exitMenu: () => any;
		onHotkeyBeginCheck: () => any;
		onBeginButtonPressed: () => any;
		createHelpGui: () => any;
		modelChanged: () => any;
	}
	class MenuModel extends ig.GameAddon {
		guiReference: any;
		observers: any;
		infoText: any;
		buffText: any;
		buffID: any;
		currentMenu: any;
		previousMenu: any;
		menuStack: any;
		buttonInteract: any;
		backCallbackStack: any;
		hotkeysCallbacks: any;
		currentBackCallback: any;
		leaState: any;
		menuEntered: boolean;
		currentBodyPart: any;
		previousBodyPart: any;
		currentSkillTree: any;
		previousSkillTree: any;
		skillCursor: any;
		lastSkillCursor: any;
		skillRecoverPos: any;
		skillCamera: any;
		skillDrag: boolean;
		skillWasDragged: boolean;
		skillState: any;
		skillStateOrigin: any;
		skillCursorMoved: boolean;
		currentSkillFocus: any;
		skillSwapCursor: any;
		skillSwapMoved: boolean;
		skillSwapFocus: any;
		mapDrag: boolean;
		mapWasDragged: boolean;
		mapCamera: any;
		mapFirstVisit: boolean;
		mapUnknownArea: boolean;
		mapMouseOverFloorButtons: boolean;
		mapCursor: any;
		mapLastCursor: any;
		mapCursorMoved: boolean;
		mapWorldmapActive: boolean;
		mapWorldCursor: any;
		mapWorldLastCursor: any;
		mapWmCursorMoved: boolean;
		mapAreaFocus: any;
		mapMapFocus: any;
		mapWorldFirstVisit: boolean;
		mapLoading: boolean;
		mapAreaOffset: any;
		mapStampMenu: boolean;
		mapStamps: {[key: string]: any};
		shopID: any;
		shopState: any;
		shopCoinMode: boolean;
		shopPage: number;
		shopCart: any;
		shopSellMode: boolean;
		itemCurrentTab: any;
		itemLastButtonData: any;
		optionCurrentTab: number;
		optionLastButtonData: any;
		optionsLocalMode: boolean;
		questCurrentTab: number;
		questLastButtonData: any;
		questInfo: any;
		questDetailMode: boolean;
		questsSeen: {[key: string]: any};
		tradeToggle: boolean;
		directMode: boolean;
		directMenu: number;
		loadMode: boolean;
		loadSlotID: any;
		loadClearFilesOnly: boolean;
		loreCurrentTab: number;
		synopInfo: any;
		newUnlocks: {[key: string]: any};
		logEntries: any;
		gamepadIcons: boolean;
		menuHost: number;
		statusPage: number;
		statusElement: number;
		statusDiff: boolean;
		drops: {[key: string]: any};
		dropCounts: {[key: string]: any};
		questHubID: any;
		words: any;
		helpMenuOpen: boolean;
		constructor();
		init: () => any;
		onVarAccess: (d?: any, c?: any) => any;
		dev_UnlockDrop: (a?: any) => any;
		incrementDropCount: (a?: any, b?: any) => any;
		getFoundDrops: (a?: any, b?: any) => any;
		sortDropList: (a?: any, b?: any) => any;
		getDropCount: (a?: any) => any;
		hasAnyDropFound: () => any;
		hasAnyDropInArea: (a?: any) => any;
		hasDropInArea: (a?: any) => any;
		hasAnyOtherDropFound: () => any;
		getTotalDropsFoundAndCompleted: (a?: any) => any;
		getFoundDrop: (a?: any) => any;
		getDropName: (a?: any) => any;
		getDropArea: (a?: any) => any;
		setStatusPage: (a?: any) => any;
		setStatusElement: (a?: any) => any;
		fireStatusPageEvent: () => any;
		addLog: (a?: any) => any;
		onReset: () => any;
		varsChangedOrder: number;
		onVarsChanged: () => any;
		onPostUpdate: () => any;
		onLevelLoadStart: () => any;
		onLevelLoaded: () => any;
		enterStartUpMenu: () => any;
		addNewUnlock: (a?: any, b?: any) => any;
		hasNewUnlock: (a?: any) => any;
		hasNewUnlockKey: (a?: any, b?: any) => any;
		clearNewUnlock: (a?: any, b?: any) => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
		addMapStamp: (a?: any, b?: any, e?: any, f?: any, g?: any) => any;
		editStamp: (a?: any, b?: any, e?: any) => any;
		removeStamp: (a?: any, b?: any) => any;
		getStamps: (a?: any) => any;
		getStampCount: (a?: any) => any;
		fullyEntered: () => any;
		addHotkey: (a?: any, b?: any) => any;
		commitHotkeys: (a?: any) => any;
		updateHotkeys: (a?: any) => any;
		removeHotkeys: () => any;
		pushBackCallback: (a?: any) => any;
		popBackCallback: () => any;
		invokeTopBackButton: () => any;
		pushMenu: (a?: any) => any;
		popMenu: () => any;
		enterMenu: () => any;
		setDirectMode: (a?: any, b?: any) => any;
		setHost: (a?: any) => any;
		exitMenu: () => any;
		invokePostExit: () => any;
		setInfoText: (a?: any, b?: any) => any;
		setBuffText: (a?: any, b?: any, e?: any) => any;
		moveLeaSprite: (a?: any, b?: any, e?: any, f?: any) => any;
		enterTradeDetails: () => any;
		exitTradeDetails: () => any;
		setShopState: (a?: any) => any;
		setShopPage: (a?: any) => any;
		updateCart: (a?: any, b?: any, e?: any) => any;
		getTotalCost: (a?: any, b?: any) => any;
		getItemQuantity: (a?: any, b?: any) => any;
		openShopQuantitySelect: (a?: any) => any;
		openCheckout: () => any;
		updateTotalCost: (a?: any, b?: any, e?: any) => any;
		newSlot: () => any;
		saveSlot: (a?: any) => any;
		deleteSlot: (a?: any) => any;
		loadSlot: (a?: any) => any;
		setItemInfo: (a?: any) => any;
		resetItemInfo: () => any;
		setItemTab: (a?: any) => any;
		getCurrentTabType: () => any;
		getCurrentTabSubType: () => any;
		isItemEquipTab: () => any;
		sortList: (a?: any) => any;
		setOptionTab: (a?: any) => any;
		getCurrentOptionCategory: () => any;
		openLanguagePopUp: (a?: any) => any;
		setSynoTab: () => any;
		setSynopInfo: (a?: any, b?: any) => any;
		setSynopFocus: (a?: any) => any;
		switchSynopsisPage: (a?: any) => any;
		setSynopPressed: (a?: any) => any;
		setQuestTab: (a?: any) => any;
		setQuestInfo: (a?: any, b?: any) => any;
		enterQuestDetails: (a?: any) => any;
		leaveQuestDetails: () => any;
		selectBodyPart: (a?: any) => any;
		cycleBodyPartRight: () => any;
		cycleBodyPartLeft: () => any;
		changeEquipOnCurrentBodypart: (a?: any) => any;
		ensureCurrentValues: () => any;
		exitEquipMenu: () => any;
		showSkillEffect: (a?: any, b?: any, e?: any) => any;
		showSwapSkillEffect: (a?: any) => any;
		selectSkillTree: (a?: any) => any;
		focusCursorOnNode: (a?: any, b?: any, e?: any) => any;
		unfocusCursor: (a?: any) => any;
		unfocusSwapCursor: (a?: any) => any;
		focusSwapCursor: (a?: any, b?: any, e?: any) => any;
		resetSwapCursor: () => any;
		centerOnNode: (a?: any, b?: any) => any;
		centerOnNodeCam: (a?: any, b?: any, e?: any, f?: any) => any;
		exitNodeMenu: (a?: any) => any;
		enterSwapBranches: (a?: any) => any;
		leaveSwapBranches: () => any;
		toggledInputMode: () => any;
		selectFloor: (a?: any) => any;
		enterWorldMap: () => any;
		exitWorldMap: () => any;
		focusArea: (a?: any, b?: any, e?: any, f?: any) => any;
		focusMap: (a?: any, b?: any, e?: any, f?: any) => any;
		unfocusArea: (a?: any) => any;
		unfocusMap: (a?: any) => any;
		resetWorldmapCursor: () => any;
		loadArea: (a?: any) => any;
		setAreaLoadDone: (a?: any) => any;
		openStampMenu: (a?: any) => any;
		getCurrentMenuAsName: () => any;
		getMenuAsName: (a?: any) => any;
		isStart: () => any;
		isSkills: () => any;
		isEquipment: () => any;
		isStatus: () => any;
		isSynopsis: () => any;
		isMap: () => any;
		isSave: () => any;
		isOptions: () => any;
		isShop: () => any;
		isButtonInteractActive: () => any;
	}
	class GameModel extends ig.GameAddon {
		observers: any;
		currentState: number;
		currentSubState: number;
		prevSubState: number;
		currentTask: any;
		permaTask: any;
		keepTaskDisplayed: boolean;
		taskTimer: any;
		leaConfig: PlayerConfig;
		player: any;
		message: any;
		menu: any;
		options: any;
		inputGuis: any;
		startDifficulty: any;
		skipTimer: number;
		combatMode: boolean;
		combatTimer: number;
		combatRank: number;
		inCombatTime: number;
		pauseMusicStop: boolean;
		mobilityBlock: string;
		forceCombatMode: boolean;
		starSpawner: ig.EnvParticleSpawner;
		skipBlock: boolean;
		runsTimer: boolean;
		hsTimer: number;
		highScore: any;
		highScoreObs: any;
		maxHighScore: number;
		outOfCombatDialogTimer: number;
		startHighScoreTimer: () => any;
		stopHighScoreTimer: (b?: any) => any;
		constructor();
		init: () => any;
		setCombatMode: (b?: any, a?: any) => any;
		cancelCombatCooldown: () => any;
		isCombatRankActive: () => any;
		isSRank: () => any;
		increaseCombatRank: (b?: any) => any;
		addChoiceGui: (b?: any) => any;
		removeChoiceGui: (b?: any) => any;
		notifyDreamFxChange: () => any;
		getCombatRank: () => any;
		getCombatRankLabel: () => any;
		getCombatRankByLabel: (b?: any) => any;
		getCombatRankDropRate: () => any;
		getCombatRankProgress: () => any;
		isMapLeaveBlocked: () => any;
		isCheckpointBlocked: () => any;
		isSaveBlocked: () => any;
		isTeleportBlocked: () => any;
		isAssistMode: () => any;
		setCancelButton: (b?: any) => any;
		setMobilityBlock: (b?: any) => any;
		startCombat: () => any;
		endCombat: () => any;
		updateCombatMusic: () => any;
		_isOutOfCombatDialogReadyIntern: () => any;
		isOutOfCombatDialogReady: () => any;
		onReset: () => any;
		onPreUpdate: () => any;
		onVarsChanged: () => any;
		clearTopMessage: () => any;
		skipCutscene: () => any;
		enterTitle: () => any;
		enterCutscene: (b?: any) => any;
		enterGame: () => any;
		enterRunning: (b?: any) => any;
		enterTeleport: () => any;
		enterLoading: () => any;
		enterNewGame: () => any;
		enterReset: () => any;
		enterLoadGame: () => any;
		enterLevelUp: () => any;
		enterQuestSolved: () => any;
		enterQuickMenu: () => any;
		enterOnMapMenu: () => any;
		enterPrevSubState: () => any;
		enterMenu: (b?: any) => any;
		enterPause: (b?: any) => any;
		isTitle: () => any;
		isGame: () => any;
		isCutscene: () => any;
		isRunning: () => any;
		isTeleport: () => any;
		isLoading: () => any;
		isNewGame: () => any;
		isReset: () => any;
		isLoadGame: () => any;
		isMenu: () => any;
		isPaused: () => any;
		isHUDBlocked: () => any;
		isLevelUp: () => any;
		isQuestSolved: () => any;
		isQuickMenu: () => any;
		isQuickMenuElementSwapEnabled: () => any;
		isOnMapMenu: () => any;
		isForceCombat: () => any;
		isCombatMode: () => any;
		isCombatActive: () => any;
		isCombatCooldown: () => any;
		getCombatCooldownFactor: () => any;
		isSaveAllowed: () => any;
		isPlayerControlBlocked: () => any;
		hasActiveChoice: () => any;
		startSkip: () => any;
		stopSkip: () => any;
		setTask: (b?: any, a?: any, d?: any) => any;
		setPermaTask: (b?: any) => any;
		resetMenuState: () => any;
		_setState: (b?: any) => any;
		_setSubState: (b?: any, a?: any) => any;
		onStorageSave: (b?: any) => any;
		onStoragePreLoad: (b?: any) => any;
		onStoragePostLoad: (b?: any) => any;
	}
	class Detectors extends ig.GameAddon {
		timer: number;
		onStates: any;
		detectMsg: any;
		arGui: any;
		fx: ig.EffectSheet;
		constructor();
		init: () => any;
		onLevelLoaded: () => any;
		modelChanged: (a?: any, b?: any) => any;
		checkDetectors: (a?: any) => any;
		onDeferredUpdate: () => any;
		checkDetector: (a?: any, b?: any) => any;
		clearCurrentMsg: () => any;
		startDetector: (a?: any) => any;
	}
	class ActorEntity extends ig.ActorEntity {
		soundType: string;
		stepFx: {
			frames: number;
			lastFrame: number;
			effects: ig.EffectSheet;
		};
		nav: {
			path: any;
			failTimer: number;
			lastFailCount: number;
		};
		tooHighToFall: boolean;
		stepStats: {
			terrain: number;
			centerTerrain: number;
		};
		influencer: any;
		constructor(a?: any, b?: any, c?: any, e?: any);
		init: (a?: any, b?: any, c?: any, e?: any) => any;
		update: () => any;
		onTerrainUpdate: () => any;
		onMoveEffect: any;
		onJump: (a?: any, d?: any) => any;
		onTouchGround: (a?: any) => any;
		onNavigationFailed: () => any;
		updateSprites: () => any;
	}
	class Character extends ig.JsonLoadable {
		cacheType: string;
		data: any;
		name: any;
		faceImage: any;
		constructor(b?: any);
		init: (b?: any) => any;
		getExpression: (b?: any) => any;
		onCacheCleared: () => any;
		getJsonPath: () => any;
		onload: (b?: any) => any;
		getExpressionImages: (b?: any) => any;
	}
	class CharacterExpression extends ig.Cacheable {
		cacheType: string;
		character: any;
		expression: any;
		expressionImages: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		getCacheKey: (b?: any, a?: any) => any;
		onCacheCleared: () => any;
		onLoadableComplete: (b?: any) => any;
		clone: () => any;
	}
	class Combat extends ig.GameAddon {
		listeners: any;
		actionToken: {[key: string]: any};
		freeLineCommands: any;
		activeCombatants: {[key: string]: any};
		forces: any;
		active: boolean;
		time: number;
		speed: number;
		recentlyAttacked: any;
		playerStartedCombat: boolean;
		effects: {
			hit: ig.EffectSheet;
			guard: ig.EffectSheet;
			combat: ig.EffectSheet;
			combatant: ig.EffectSheet;
			throw: ig.EffectSheet;
			mode: ig.EffectSheet;
			heal: ig.EffectSheet;
			cooldownHandle: any;
		};
		cooldownTick: {
			sounds: any;
			hasCooldown: boolean;
			currentSound: any;
			endSound: ig.Sound;
			handle: any;
		};
		stats: {
			killStreak: number;
			killedEnemies: any;
			prevRank: number;
		};
		finalDramaticEffect: any;
		respawnBlocker: any;
		enemyDataList: any;
		constructor();
		init: () => any;
		unlockAllEnemies: () => any;
		setCombatSpeed: (a?: any) => any;
		getTotalEnemiesFound: (a?: any, b?: any) => any;
		getTotalEnemyReportsFound: (a?: any, b?: any, c?: any) => any;
		getEnemyMenuOffset: (a?: any) => any;
		isEnemyAnalyzable: (a?: any) => any;
		addActiveCombatant: (a?: any) => any;
		removeActiveCombatant: (a?: any) => any;
		changeCombatantParty: (a?: any, b?: any) => any;
		getActiveCombatantCount: (a?: any, b?: any) => any;
		getActiveCombatants: (a?: any, b?: any) => any;
		isDamageIgnore: () => any;
		getEnemyTarget: () => any;
		_addPartyMember: (a?: any, b?: any, c?: any) => any;
		getPlayerTarget: (a?: any) => any;
		getActiveEnemiesNames: () => any;
		getEnemyName: (a?: any) => any;
		getEnemyCategory: (a?: any) => any;
		canShowBoosted: (a?: any) => any;
		canShowBoostedEntry: (a?: any, b?: any) => any;
		getEnemyLevel: (a?: any) => any;
		getEnemyArea: (a?: any) => any;
		getEnemyDrops: (a?: any) => any;
		setScreenEnemiesTarget: (a?: any) => any;
		removeEnemies: (a?: any, b?: any, c?: any, d?: any) => any;
		setFinalDramaticEffect: (a?: any) => any;
		onCombatantDeathHit: (a?: any, b?: any) => any;
		showCombatantLabel: (a?: any, b?: any, c?: any) => any;
		showCombatMessage: (a?: any, b?: any) => any;
		doDramaticEffect: (a?: any, b?: any, c?: any, d?: any) => any;
		sendEnemyMessage: (a?: any, b?: any) => any;
		sendGlobalEnemyEvent: (a?: any, b?: any, c?: any) => any;
		postUpdateOrder: number;
		onPostUpdate: () => any;
		onReset: () => any;
		onLevelLoadStart: () => any;
		onVarAccess: (a?: any, b?: any) => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
		addCombatForce: (a?: any) => any;
		setActive: (a?: any) => any;
		forceEnd: () => any;
		addCombatListener: (a?: any) => any;
		removeCombatListener: (a?: any) => any;
		gatherCollaborators: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
		getNearbyThreat: (a?: any, b?: any, c?: any, d?: any) => any;
		getPartyHpFactor: (a?: any) => any;
		getAssistDamageFactor: () => any;
		getAssistAttackFrequency: () => any;
		notifyCombatantDefeated: (a?: any, b?: any) => any;
		updateCombatCompletionData: () => any;
		getMultiToken: (a?: any, b?: any) => any;
		getActionToken: (a?: any, b?: any) => any;
		getGlobalDmgFactor: (a?: any) => any;
		initFrequencyTimers: (a?: any) => any;
		checkFrequency: (a?: any, b?: any) => any;
		submitFrequency: (a?: any, b?: any, c?: any) => any;
		_getTimerFrequencyFactor: (b?: any, c?: any, d?: any) => any;
		_getTokenFrequencyFactor: (b?: any, c?: any, d?: any) => any;
		addFreeLineCommand: (a?: any, b?: any) => any;
		isBlockingFreeLine: (a?: any) => any;
		showHitEffect: (a?: any, b?: any, c?: any, d?: any, i?: any, k?: any, j?: any) => any;
		showPerfectDashEffect: (a?: any) => any;
		showHealEffect: (a?: any) => any;
		showCharge: (a?: any, c?: any, d?: any) => any;
		showThrowEffect: (a?: any, c?: any, d?: any) => any;
		showModeChange: (a?: any, c?: any) => any;
		showModeAura: (a?: any, c?: any) => any;
		clearModeAura: (a?: any) => any;
		showModeDash: (a?: any, c?: any) => any;
		addRespawnBlocker: (a?: any) => any;
		isRespawnBlocked: (a?: any) => any;
		notifyNearbyEnemiesOfTarget: (a?: any, b?: any) => any;
		isInCombat: (a?: any) => any;
		isPlayerPartyInCombat: () => any;
		getEnemyAiExp: (a?: any, b?: any) => any;
		getKillCount: () => any;
		getElementMode: (a?: any) => any;
	}
	class PvpModel extends ig.GameAddon {
		observers: any;
		state: number;
		round: number;
		winPoints: number;
		points: {[key: string]: any};
		enemies: any;
		lastWinParty: any;
		blocking: boolean;
		roundGui: any;
		constructor();
		init: () => any;
		start: (b?: any, a?: any) => any;
		getDmgFactor: () => any;
		isActive: () => any;
		isKillHit: () => any;
		isBrake: () => any;
		isOver: () => any;
		isCombatantInPvP: (b?: any) => any;
		onPvpCombatantDefeat: (b?: any) => any;
		releaseBlocking: () => any;
		showKO: (b?: any) => any;
		onPostKO: (b?: any) => any;
		startNextRound: (b?: any) => any;
		finalizeRoundStart: () => any;
		stop: () => any;
		onVarAccess: (b?: any, a?: any) => any;
		onPostUpdate: () => any;
		onReset: () => any;
	}
	class CombatShield extends ig.Class {
		name: any;
		baseFactor: number;
		elementFactors: any;
		hitResist: any;
		stableOverride: any;
		duration: number;
		effect: any;
		neutralize: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		clearCached: () => any;
		onActivate: any;
		onDeactivate: any;
		isActive: () => any;
		getDamageFactor: (a?: any) => any;
		reduceSpikeDamage: () => any;
	}
	class CombatantShieldConnection extends ig.Class {
		combatant: any;
		shield: any;
		timer: number;
		perfectGuardTime: number;
		perfectTimeReset: number;
		effectHandle: any;
		constructor(a?: any, b?: any, e?: any);
		init: (a?: any, b?: any, e?: any) => any;
		update: () => any;
		isPerfect: () => any;
		resetPerfectGuardTime: () => any;
		onDetach: (a?: any) => any;
		onActionEndDetach: () => any;
		onEntityKillDetach: () => any;
	}
	class CombatForce extends ig.Class {
		combatant: any;
		combatantRoot: any;
		constructor(a?: any);
		init: (a?: any) => any;
		update: () => any;
		isRepeating: () => any;
		onActionEndDetach: () => any;
		getCombatant: () => any;
		getCombatantRoot: () => any;
		onEnd: any;
	}
	class CircleHitForce extends CombatForce {
		attackInfo: any;
		align: any;
		offset: any;
		radius: number;
		dir: any;
		yScale: number;
		zHeight: number;
		centralAngle: number;
		startAngle: number;
		duration: number;
		expandRadius: number;
		alwaysFull: boolean;
		clockwise: boolean;
		flipLeftFace: number;
		party: number;
		rectangular: boolean;
		pos: any;
		prevAngle: number;
		timer: number;
		hitEntities: any;
		hitEntitiesAngle: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
		getElement: () => any;
		getHitCenter: (a?: any, b?: any) => any;
		getHitVel: (a?: any, b?: any) => any;
		getHitDir: (a?: any, b?: any) => any;
		getCollideSide: (b?: any) => any;
		_getPos: () => any;
		isRepeating: () => any;
	}
	class DirectHitForce extends CombatForce {
		attackInfo: any;
		hitDir: any;
		align: any;
		hitCount: number;
		hitDelay: number;
		effect: any;
		victim: any;
		timer: number;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		update: () => any;
		getElement: () => any;
		getHitCenter: (a?: any, b?: any) => any;
		getHitVel: (a?: any, b?: any) => any;
		getHitDir: (a?: any, b?: any) => any;
		getCollideSide: (b?: any) => any;
	}
	class PushPullForce extends CombatForce {
		radius: number;
		fadeRadius: number;
		zHeight: number;
		influencedEntities: any;
		fxHandles: any;
		timer: number;
		pullAll: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
		_removeEntity: (a?: any) => any;
		onEnd: () => any;
		isRepeating: () => any;
	}
	class ProxyGridForce extends CombatForce {
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
	}
	class SpawnHelper extends ig.Class {
		align: any;
		offset: any;
		centralAngle: number;
		startAngle: number;
		angleVary: number;
		count: number;
		duration: number;
		clockwise: boolean;
		random: boolean;
		flipLeftFace: number;
		dir: any;
		offsetArea: any;
		circularArea: boolean;
		callback: any;
		maxGroundDistance: any;
		uniformDir: number;
		delay: number;
		yScale: number;
		repeat: boolean;
		posEntity: boolean;
		limitRangeOnColl: number;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		initData: (a?: any) => any;
		spawn: (a?: any, b?: any, k?: any, l?: any, o?: any, m?: any) => any;
		_limitRange: (a?: any, b?: any, d?: any, e?: any, f?: any) => any;
		_getPos: (a?: any, c?: any) => any;
	}
	class ProxySpawnerForce extends CombatForce {
		proxy: any;
		spawnHelper: any;
		timer: number;
		spawnData: {[key: string]: any};
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		update: () => any;
		spawnProxy: (a?: any, b?: any, c?: any, d?: any) => any;
		isRepeating: () => any;
	}
	class EnemySpawnerForce extends CombatForce {
		enemyInfo: any;
		enemyType: any;
		spawnHelper: any;
		timer: number;
		spawnData: {[key: string]: any};
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
		spawnEnemy: (a?: any, b?: any, c?: any, d?: any) => any;
		isRepeating: () => any;
	}
	class CombatStun extends ig.Class {
		preHit: any;
		start: any;
		run: () => any;
	}
	class CombatCharge extends ig.Class {
		fx: any;
		darkness: any;
		soundHandle: any;
		constructor(a?: any, b?: any, e?: any, f?: any);
		init: (a?: any, b?: any, e?: any, f?: any) => any;
		charge: (d?: any, c?: any, e?: any) => any;
		stop: () => any;
		onActionEndDetach: () => any;
		onEntityKillDetach: () => any;
	}
	class HitNumberEntityBase extends ig.Entity {
		offset: {
			x: number;
			y: number;
			z: number;
		};
		oldNumber: number;
		number: number;
		digitCount: number;
		numberSize: number;
		numberColor: number;
		numberAppendix: any;
		shuffleTime: number;
		alpha: number;
		zIndex: number;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		initSprites: () => any;
		setNumber: (a?: any, b?: any, c?: any, d?: any, f?: any, g?: any) => any;
		updateSprites: () => any;
		_setupSprite: (a?: any, d?: any, f?: any) => any;
	}
	class BasicCombatant extends ActorEntity {
		tackle: {
			attackInfo: any;
			orthoDirFactor: number;
			blocked: any;
			hitCount: number;
			cancelOnHit: number;
		};
		combo: {
			damageCeiling: any;
			hitCombatants: any;
			dmgSum: number;
			blockedDamage: number;
			blockedFactor: number;
			guardedHits: number;
			guardedEntity: any;
			hitProxy: any;
			guardTrapTime: number;
		};
		target: any;
		tmpTarget: any;
		replaceTargets: any;
		getTarget: (a?: any) => any;
		hasBlockEntity: () => any;
		setTackle: (a?: any, b?: any, c?: any, d?: any) => any;
		getElement: () => any;
		getAttackInfo: () => any;
		collideWith: (a?: any) => any;
		checkTackle: (a?: any, c?: any, d?: any) => any;
		getHitCenter: (a?: any, b?: any) => any;
		getCombatant: () => any;
		getCombatantRoot: () => any;
		getHitVel: (c?: any, d?: any) => any;
		setHitProxy: (a?: any, b?: any, c?: any, d?: any) => any;
		spawnHitProxy: (a?: any, b?: any, c?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
	}
	class ReplaceTargetHandle extends ig.Class {
		combatant: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		onActionEndDetach: (a?: any) => any;
	}
	class CombatantAnimPartEntity extends ig.AnimationPartEntity {
		isCombatant: boolean;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		damage: (a?: any, b?: any) => any;
		collideWith: (a?: any) => any;
		getCombatant: () => any;
		getCombatantRoot: () => any;
		getHitCenter: (a?: any, b?: any) => any;
		getHitVel: (a?: any, b?: any) => any;
	}
	class FoodIconEntity extends ig.Entity {
		icon: number;
		combatant: any;
		offset: any;
		state: any;
		foodSheet: ig.TileSheet;
		bubbleGfx: ig.Image;
		timer: number;
		constructor(a?: any, b?: any, d?: any, g?: any);
		init: (a?: any, b?: any, d?: any, g?: any) => any;
		initSprites: () => any;
		deferredUpdate: () => any;
		setState: (a?: any, b?: any) => any;
		onActionEndDetach: () => any;
		updateSprites: () => any;
	}
	class DropEntity extends ig.AnimatedEntity {
		effects: ig.EffectSheet;
		animSheet: ig.AnimationSheet;
		timer: number;
		target: any;
		dropType: number;
		effectValue: number;
		varIncrease: any;
		circleEffect: any;
		pickupEffect: any;
		isGeneric: boolean;
		constructor(a?: any, b?: any, e?: any, f?: any);
		init: (a?: any, b?: any, e?: any, f?: any) => any;
		update: () => any;
		doGenericPickUp: (a?: any) => any;
		doHeal: (a?: any) => any;
		followTarget: (a?: any) => any;
		findTarget: () => any;
		onTouchGround: () => any;
	}
	class ItemDropEntity extends ig.AnimatedEntity {
		gfx: ig.Image;
		effects: ig.EffectSheet;
		sounds: {
			start: ig.Sound;
			catch: ig.Sound;
			catchLow: ig.Sound;
			catchNormal: ig.Sound;
			catchRare: ig.Sound;
			catchLegendary: ig.Sound;
			catchUnique: ig.Sound;
		};
		flying: boolean;
		target: any;
		timer: number;
		startPos: any;
		startZPos: number;
		maxTime: number;
		maxHeight: number;
		item: number;
		amount: number;
		collected: boolean;
		dropType: any;
		fromCombatant: boolean;
		constructor(c?: any, d?: any, f?: any, g?: any);
		init: (c?: any, d?: any, f?: any, g?: any) => any;
		collectItem: (a?: any) => any;
		onKill: (a?: any) => any;
		onSave: () => any;
		update: () => any;
		onTouchGround: () => any;
		startRegularFly: () => any;
		startFlying: (a?: any, b?: any) => any;
	}
	class EnemyType extends ig.JsonLoadable {
		cacheType: string;
		aiGroup: any;
		aiLearnType: any;
		enduranceScale: any;
		name: string;
		params: any;
		credit: any;
		exp: number;
		level: number;
		maxSp: number;
		boss: boolean;
		hpBreaks: any;
		animSheet: any;
		attribs: {[key: string]: any};
		proxies: {[key: string]: any};
		actions: {[key: string]: any};
		states: {[key: string]: any};
		reactions: {[key: string]: any};
		trackerDef: any;
		headIdx: number;
		healDropRate: number;
		itemDrops: any;
		targetDetect: {
			onVisibleRange: number;
			onDistance: boolean;
			onCloseBattle: boolean;
			detectDistance: number;
			loseDistance: number;
			loseTime: number;
		};
		getJsonPath: () => any;
		onload: (a?: any) => any;
		onCacheCleared: () => any;
		initEntity: (a?: any) => any;
		updateParams: (a?: any) => any;
		onEntityKill: (a?: any) => any;
		getAppearAction: (a?: any) => any;
		update: (b?: any) => any;
		checkReactions: (a?: any) => any;
		applyCurrentReaction: (a?: any) => any;
		updateAction: (a?: any) => any;
		startChoice: (a?: any, b?: any) => any;
		updateTarget: (a?: any) => any;
		reselectTarget: (a?: any, b?: any, c?: any, d?: any) => any;
		assignTarget: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		damageUpdate: (a?: any, b?: any) => any;
		onNavigationFailed: (a?: any, b?: any) => any;
		onStunEnd: (a?: any) => any;
		postActionUpdate: (b?: any) => any;
		switchState: (b?: any, c?: any) => any;
		isReadyToFight: (a?: any) => any;
		resolveHpBreak: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		resolveDefeat: (a?: any) => any;
		resolveItemDrops: (a?: any) => any;
	}
	class CombatConditions extends ig.Class {
		conditions: any;
		constructor(a?: any);
		init: (a?: any) => any;
		_parseCondition: (a?: any) => any;
		check: (a?: any, b?: any, c?: any, d?: any) => any;
		onReactionActivate: (a?: any) => any;
		onPerformed: (a?: any, b?: any) => any;
	}
	class EnemyInfo extends ig.Class {
		constructor(a?: any);
		init: (a?: any) => any;
		getSettings: () => any;
		clearCached: () => any;
	}
	class EnemyState extends ig.Class {
		name: string;
		entityConfig: {[key: string]: any};
		choices: any;
		seamlessStates: any;
		appearAction: any;
		constructor(a?: any, b?: any, d?: any);
		init: (a?: any, b?: any, d?: any) => any;
		selectAction: (a?: any) => any;
	}
	class PvpRoundGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		timer: number;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		remove: () => any;
	}
	class PvpKoGui extends ig.GuiElementBase {
		transitions: {
			START: {
				state: {
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		timer: number;
		constructor();
		init: () => any;
		update: () => any;
		remove: () => any;
		updateDrawables: (b?: any) => any;
	}
	class CombatStatusBase extends ig.Class {
		id: number;
		statusBarEntry: any;
		offenseModifier: any;
		defenseModifier: any;
		effects: ig.EffectSheet;
		duration: number;
		charge: number;
		active: boolean;
		effectiveness: number;
		fxHandle: any;
		constructor();
		init: () => any;
		getInflictValue: (b?: any, a?: any, d?: any, c?: any) => any;
		inflict: (b?: any, a?: any, d?: any) => any;
		_getOffensiveFactor: (b?: any) => any;
		activate: (b?: any, a?: any, d?: any) => any;
		initEntity: (b?: any) => any;
		getEffectiveness: (b?: any) => any;
		clear: (b?: any) => any;
		update: (b?: any, a?: any, d?: any) => any;
		getLabel: () => any;
		onActivate: any;
		onInitEntity: any;
		onUpdate: any;
		onClear: any;
	}
	class EnemyCollab extends ig.Class {
		initiator: any;
		participants: any;
		vars: {[key: string]: any};
		breakType: number;
		success: boolean;
		attached: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		getVar: (a?: any) => any;
		setVar: (a?: any, b?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
		addCollabAttached: (a?: any) => any;
		removeCollabAttached: (a?: any) => any;
		setParticipantsEntity: (a?: any, b?: any) => any;
		setParticipantsPoint: (a?: any, b?: any) => any;
		getLabeledParticipant: (a?: any) => any;
		getLabeledParticipants: (a?: any) => any;
		start: () => any;
		doReaction: (a?: any, b?: any) => any;
		getCenterPos: (a?: any, d?: any, c?: any) => any;
		addParticipant: (a?: any, b?: any, c?: any) => any;
		removeParticipant: (a?: any) => any;
		onActionEndDetach: (a?: any) => any;
		cancel: () => any;
	}
	class EnemyTracker extends ig.Class {
		update: any;
		onStateChange: any;
		onReactionActivate: any;
		onConditionEval: () => any;
		onPerformed: () => any;
		reset: () => any;
	}
	class EnemyBooster extends ig.GameAddon {
		boosted: boolean;
		constructor();
		init: () => any;
		onLevelLoaded: () => any;
		modelChanged: (b?: any, a?: any) => any;
		updateBoosterState: () => any;
		updateEnemyBoostState: (b?: any) => any;
	}
	class CombatProxyEntity extends BasicCombatant {
		hp: number;
		maxHp: number;
		breakType: any;
		combatant: any;
		sourceEntity: any;
		externalEntity: any;
		party: number;
		collaboration: any;
		target: any;
		params: any;
		group: any;
		tackle: {
			attackInfo: any;
			blocked: any;
			hitCount: number;
		};
		effects: {
			onKill: any;
			handle: any;
		};
		stickToSource: number;
		wasHit: boolean;
		isThreat: boolean;
		destroyType: number;
		constructor(a?: any, b?: any, d?: any, g?: any);
		init: (a?: any, b?: any, d?: any, g?: any) => any;
		getCombatantRoot: () => any;
		getSourceEntity: () => any;
		connectExternal: (a?: any) => any;
		update: () => any;
		onActionEndDetach: () => any;
		onEntityKillDetach: () => any;
		onCollabEndDetach: () => any;
		postActionUpdate: () => any;
		detach: () => any;
		onEffectEvent: (a?: any) => any;
		destroy: (b?: any) => any;
		ballHit: (a?: any) => any;
		setMaxHp: (a?: any) => any;
		reduceHp: (b?: any) => any;
		onVarAccess: (b?: any, d?: any) => any;
	}
	class GameCode extends ig.GameAddon {
		enabled: any;
		keys: {[key: string]: any};
		constructor();
		init: () => any;
		enterCode: (b?: any, a?: any) => any;
		isEnabled: (b?: any) => any;
		onVarAccess: (b?: any, a?: any) => any;
		levelLoadedOrder: number;
		onLevelLoaded: () => any;
	}
	class InteractOverlayIcon extends ig.GuiElementBase {
		gfx: ig.Image;
		interactGui: any;
		constructor(a?: any);
		init: (a?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class MapInteract extends ig.GameAddon {
		entries: any;
		focusEntry: any;
		interacting: boolean;
		hidden: boolean;
		constructor();
		init: () => any;
		addEntry: (a?: any) => any;
		removeEntry: (a?: any) => any;
		preUpdateOrder: number;
		onPreUpdate: () => any;
		updateHideStatus: () => any;
		forceHide: () => any;
		forceShow: () => any;
	}
	class MapInteractIcon extends ig.Class {
		tiles: any;
		noAwayIcon: boolean;
		anims: {[key: string]: any};
		frameTime: number;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		hasAnim: (a?: any) => any;
		getMaxTimer: (a?: any) => any;
		updateDrawables: (a?: any, b?: any, c?: any) => any;
	}
	class MapInteractEntry extends ig.Class {
		entity: any;
		handler: any;
		offset: any;
		state: any;
		icon: any;
		interrupting: boolean;
		zCondition: any;
		gui: any;
		blockedDuringCombat: boolean;
		constructor(a?: any, b?: any, c?: any, d?: any, e?: any);
		init: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		setOffset: (a?: any, b?: any) => any;
		setIcon: (a?: any) => any;
		setSubGui: (a?: any) => any;
		setState: (a?: any) => any;
	}
	class ElevatorModel extends ig.GameAddon {
		sound: any;
		soundHandle: any;
		constructor();
		init: () => any;
		startMoveSound: (a?: any) => any;
		endMoveSound: (a?: any) => any;
		onStoragePreLoad: () => any;
	}
	class ElevatorSwitchEntity extends ig.AnimatedEntity {
		groundEntity: any;
		interactEntry: any;
		moving: boolean;
		active: boolean;
		interactIcons: {
			up: MapInteractIcon;
			down: MapInteractIcon;
		};
		showFx: any;
		constructor(a?: any, b?: any, c?: any, e?: any);
		init: (a?: any, b?: any, c?: any, e?: any) => any;
		setActive: (a?: any, b?: any) => any;
		setMoving: (a?: any) => any;
		_updateState: () => any;
		onInteraction: () => any;
		onKill: (a?: any) => any;
	}
	class IconHoverTextGui extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleX: number;
					scaleY: number;
					alpha: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		showOnNear: boolean;
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		setIconState: (b?: any) => any;
		isActive: (b?: any) => any;
		remove: () => any;
	}
	class PropInteract extends ig.Class {
		prop: any;
		icon: any;
		interactEntry: any;
		permaEffect: any;
		event: any;
		combatOkay: boolean;
		cutsceneType: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		onShow: () => any;
		onPermaUpdate: () => any;
		onHide: () => any;
		onKill: () => any;
		onInteraction: () => any;
	}
	class RhombusMapMenu extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		callback: any;
		buttonInteract: any;
		buttonGroup: any;
		locations: any;
		currentFocus: any;
		_cursorMoved: boolean;
		_gamepadActive: boolean;
		_lastDevice: number;
		_cursorPos: any;
		_worldCursor: any;
		info: any;
		help: any;
		container: any;
		infoBox: any;
		constructor(a?: any);
		init: (a?: any) => any;
		update: () => any;
		createLocationUIs: () => any;
		createLocationUI: (a?: any) => any;
		onButtonPress: (a?: any) => any;
		focusLocation: (a?: any, b?: any, c?: any) => any;
		unfocus: (a?: any) => any;
		_initCursor: (a?: any) => any;
		_limitCursorPos: () => any;
	}
	class RhombusMenuInfo extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		gfx: ig.Image;
		title: any;
		arrow: any;
		icon: any;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		show: (a?: any) => any;
		hide: (a?: any) => any;
		setData: (a?: any) => any;
		alignToBase: (a?: any) => any;
	}
	class RhombusMenuArrow extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		flipX: boolean;
		flipY: boolean;
		bottomAnchor: boolean;
		constructor();
		init: () => any;
		setPosition: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class RhombusMenuLocation extends ig.FocusGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		gfx: ig.Image;
		entity: any;
		callback: any;
		icon: number;
		origin: boolean;
		focusTimer: number;
		focusFrame: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		onButtonPress: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		isMouseOver: () => any;
		unfocus: () => any;
		getDistanceToCursor: () => any;
	}
	class MsgBoxGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			SUB: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		box: any;
		personEntry: any;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
		setPointerDown: () => any;
		setOnFinish: (b?: any) => any;
		isFinished: () => any;
		skip: () => any;
	}
	class ChoiceBoxGui extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		choices: any;
		buttons: any;
		buttonInteract: any;
		buttonGroup: any;
		bgBox: any;
		pointerOffsetX: number;
		delayTimer: number;
		columns: number;
		constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
		init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		remove: () => any;
	}
	class DreamMsgGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			TRANSPARENT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		time: number;
		constructor(a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any);
		init: (a?: any, b?: any, c?: any, e?: any, f?: any, g?: any, h?: any, i?: any) => any;
		onActionEndDetach: () => any;
		setBoxOffset: (a?: any, b?: any) => any;
		_onTextFinish: () => any;
		onInteraction: () => any;
		_close: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		_updatePos: () => any;
	}
	class PrivateMessageBGGui extends ig.GuiElementBase {
		gfx: ig.Image;
		boxNinePatch: ig.NinePatch;
		sound: {
			incoming: ig.Sound;
			outgoing: ig.Sound;
			open: ig.Sound;
			close: ig.Sound;
			drop: ig.Sound;
			handle: any;
		};
		bgPatterns: ig.ImagePatternSheet;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			PRE_HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		bgState: number;
		bgTimer: number;
		bgSilent: boolean;
		text: any;
		constructor();
		init: () => any;
		setBgState: (a?: any, b?: any) => any;
		isReady: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		modelChanged: (a?: any, b?: any, c?: any) => any;
	}
	class MsgBoardContentGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		text: any;
		constructor();
		init: () => any;
		setContent: (a?: any, c?: any, e?: any, f?: any) => any;
		isFinished: () => any;
		skip: () => any;
	}
	class MsgBoardGui extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		box: any;
		content: any;
		side: any;
		sizeTransition: {
			start: any;
			end: any;
			timer: number;
		};
		constructor();
		init: () => any;
		setSide: (a?: any) => any;
		hasSide: () => any;
		setContent: (a?: any, c?: any, e?: any, f?: any, g?: any) => any;
		skip: () => any;
		setSize: (a?: any, b?: any) => any;
		update: () => any;
		hide: (a?: any) => any;
	}
	class ScreenInteractEntry extends ig.InteractEntry {
		callbackObject: any;
		withEscape: boolean;
		autoCtrlIgnore: boolean;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		update: () => any;
	}
	class SkipInteract extends ig.GameAddon {
		entries: any;
		constructor();
		init: () => any;
		addEntry: (a?: any) => any;
		removeEntry: (a?: any) => any;
		getActiveEntry: () => any;
		triggerSkip: () => any;
	}
	class SkipInteractEntry extends ig.Class {
		handler: any;
		order: number;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		isActive: () => any;
	}
	class TradeMenu extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		info: any;
		buffInfo: any;
		topbar: any;
		back: any;
		help: any;
		toggleEquip: any;
		helpGui: any;
		tradeDialog: any;
		tradeOffer: any;
		tradeStats: any;
		tradeContent: any;
		money: any;
		moneyValue: any;
		constructor(b?: any);
		init: (b?: any) => any;
		enterTrade: () => any;
		_onHelpButtonCheck: () => any;
		_onHelpButtonPressed: () => any;
		_onBackButtonCheck: () => any;
		_onToggleButtonCheck: () => any;
		_createHelpGui: () => any;
		_exitMenu: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class NpcState extends ig.Class {
		_wm: ig.Config;
		condition: any;
		position: any;
		config: any;
		face: any;
		hidden: boolean;
		door: any;
		startAction: any;
		loopAction: any;
		reactType: any;
		npcEventObj: any;
		npcEventType: any;
		showFx: any;
		permaFx: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		clearCached: () => any;
	}
	class NPCRunnerEntity extends ActorEntity {
		npcEffects: ig.EffectSheet;
		characterName: any;
		character: any;
		configs: {[key: string]: any};
		pushTimer: number;
		effects: {
			water: ig.EffectSheet;
		};
		constructor(a?: any, c?: any, d?: any, h?: any);
		init: (a?: any, c?: any, d?: any, h?: any) => any;
		initAction: (a?: any, b?: any, c?: any, d?: any) => any;
		getDestinationEntryAndPos: (b?: any, c?: any, d?: any, h?: any) => any;
		update: () => any;
		onKill: (a?: any) => any;
	}
	class NpcRunnerSpawner extends ig.GameAddon {
		mapGroup: any;
		currentGroup: any;
		groupData: any;
		lastChars: any;
		active: boolean;
		destinations: {
			enter: any;
			enterFullProb: number;
			exit: any;
			exitFullProb: number;
		};
		timer: number;
		spawnTeamCount: number;
		currentPartySize: number;
		spawnEntrance: any;
		waypoints: any;
		spawnExit: any;
		spawnSpeed: number;
		constructor();
		init: () => any;
		cancelSpawning: () => any;
		setGroup: (a?: any) => any;
		onLoadableComplete: (a?: any, b?: any) => any;
		hasGroup: () => any;
		resetToMapGroup: () => any;
		clearGroup: () => any;
		initWayPoints: () => any;
		searchDestinations: () => any;
		spawnNpcGroup: () => any;
		spawnNpcRunner: () => any;
		getRandomDestination: (a?: any, b?: any) => any;
		getWayPoints: (a?: any, b?: any) => any;
		getRandomCharacter: () => any;
		preUpdateOrder: number;
		onPreUpdate: () => any;
		levelLoadStartOrder: number;
		onLevelLoadStart: (a?: any) => any;
		levelLoadedOrder: number;
		onLevelLoaded: () => any;
		onReset: () => any;
	}
	class PlayerCrossHairController extends ig.Class {
		gamepadMode: boolean;
		isAiming: () => any;
		getAimingDistance: (a?: any, b?: any) => any;
		onActiveChange: (a?: any) => any;
		updatePos: (a?: any) => any;
	}
	class EventCrossHairController extends ig.Class {
		targetPos: any;
		gamepadMode: boolean;
		isAiming: () => any;
		getAimingDistance: () => any;
		onActiveChange: () => any;
		updatePos: (a?: any) => any;
	}
	class PlayerLevelNotifier extends ig.Class {
		levelUpSound: ig.Sound;
		constructor();
		init: () => any;
		runLevelUpScene: (b?: any, a?: any, d?: any) => any;
		onLevelUpEventStart: () => any;
		onLevelUpEventEnd: () => any;
		getLevelUpEvent: (b?: any, a?: any) => any;
	}
	class ItemConsumption extends ig.Class {
		sounds: {
			eat: ig.Sound;
		};
		constructor();
		init: () => any;
		runItemUseAction: (b?: any, a?: any, d?: any) => any;
		activateItemEffect: (b?: any, a?: any, d?: any) => any;
		runHealChange: (b?: any) => any;
		runStatChange: (b?: any, a?: any, d?: any) => any;
		getAction: (b?: any) => any;
		createAction: (b?: any) => any;
	}
	class PlayerBaseEntity extends ig.ENTITY.Combatant {
		party: any;
		material: any;
		configs: {
			normal: any;
			aiming: any;
		};
		maxJumpHeight: any;
		guard: {
			damage: number;
			timer: number;
			fxSheet: ig.EffectSheet;
			fxHandle: any;
			currentKey: any;
		};
		stunEscapeReady: boolean;
		playerTrack: {
			startedAction: any;
			trackTimer: number;
		};
		constructor(b?: any, a?: any, d?: any, c?: any);
		init: (b?: any, a?: any, d?: any, c?: any) => any;
		doPlayerAction: (b?: any) => any;
		startGuardEffect: () => any;
		endGuardEffect: () => any;
		damageShield: (b?: any) => any;
		regenShield: (b?: any) => any;
		update: () => any;
		_addTargetedBy: (b?: any) => any;
		_removeTargetedBy: (b?: any) => any;
		updateCombatMode: () => any;
	}
	class PlayerPetEntity extends ActorEntity {
		npcEffects: ig.EffectSheet;
		petSkin: any;
		configs: {[key: string]: any};
		pushTimer: number;
		posOffset: any;
		state: number;
		respawnPos: any;
		idleTimer: number;
		idleSpecials: number;
		effects: {
			water: ig.EffectSheet;
		};
		constructor(a?: any, d?: any, f?: any, g?: any);
		init: (a?: any, d?: any, f?: any, g?: any) => any;
		show: (a?: any) => any;
		resetIdleTimer: (a?: any) => any;
		update: () => any;
		resetStartPos: () => any;
		resetPos: (a?: any, b?: any) => any;
		onNavigationFailed: (a?: any) => any;
		remove: () => any;
	}
	class PartyModel extends ig.GameAddon {
		observers: any;
		models: {[key: string]: any};
		currentParty: any;
		partyEntities: {[key: string]: any};
		contacts: {[key: string]: any};
		dungeonBlocked: boolean;
		lastAreaDungeon: boolean;
		_deferredEntityUpdate: boolean;
		keepDistance: boolean;
		strategyKeys: {
			TARGET: string;
			BEHAVIOUR: string;
			ARTS: string;
		};
		ai: {
			battle: number;
			targeting: number;
			aggressive: number;
		};
		constructor();
		init: () => any;
		getStrategy: (a?: any) => any;
		updatePartyStrategy: (a?: any, b?: any) => any;
		getStrategyKey: (a?: any, b?: any) => any;
		setContactType: (a?: any, b?: any) => any;
		setOnlineStatus: (a?: any, b?: any) => any;
		setLocked: (a?: any, b?: any) => any;
		addPartyOption: (a?: any) => any;
		initParty: (a?: any) => any;
		addPartyMember: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
		removePartyMember: (a?: any, b?: any, c?: any) => any;
		reviveAllPartyMembers: () => any;
		reviveAllPartyMemberModels: () => any;
		revivePartyMemberEntity: (a?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
		onMemberDefeat: (a?: any) => any;
		keepMapDungeon: () => any;
		onMapEnter: () => any;
		respawnMembers: () => any;
		isDungeonBlocked: () => any;
		isPartyMember: (a?: any) => any;
		isFriend: (a?: any) => any;
		isPartyMemberLocked: (a?: any) => any;
		isPartyMemberOnline: (a?: any) => any;
		isDefeated: () => any;
		getCurrentPartyIndex: (a?: any) => any;
		getPartySize: () => any;
		getPartySizeAlive: (a?: any) => any;
		getDmgFactor: () => any;
		getPartyMemberModel: (a?: any) => any;
		getPartyMemberEntity: (a?: any) => any;
		getPartyMemberEntityByIndex: (a?: any) => any;
		getPartyMemberIndex: (a?: any) => any;
		getPartyMemberModelByIndex: (a?: any) => any;
		addExperience: (b?: any, c?: any, d?: any, h?: any, i?: any) => any;
		updateEquipment: () => any;
		resetMemberPos: (a?: any) => any;
		resetAi: () => any;
		_getMemberPos: (a?: any, c?: any, d?: any) => any;
		doDeferredEntityUpdate: () => any;
		_spawnPartyMemberEntity: (a?: any, c?: any, d?: any, h?: any) => any;
		_updateEntitiesOffset: () => any;
		_removePartyMemberEntity: (a?: any, c?: any, d?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
		postUpdateOrder: number;
		onPostUpdate: () => any;
		onReset: () => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
	}
	class PlayerCameraFocusHandle extends ig.Class {
		add: boolean;
		speed: any;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		onActionEndDetach: (a?: any) => any;
	}
	class PlayerSkinBase extends ig.Class {
		skinType: any;
		name: any;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		onLoadableComplete: () => any;
		constructSkin: any;
	}
	class PlayerSkinLibrary extends ig.GameAddon {
		observers: any;
		skins: {[key: string]: any};
		itemToSkin: {[key: string]: any};
		currentSkins: {[key: string]: any};
		constructor();
		init: () => any;
		onExtensionLoaded: (a?: any) => any;
		registerSkin: (a?: any, b?: any) => any;
		updateSkins: () => any;
		updateSkinSet: (a?: any) => any;
		getCurrentSkin: (a?: any) => any;
		_createSkin: (a?: any) => any;
		_notifyLoaded: (a?: any) => any;
		checkItems: () => any;
		checkItemSet: (a?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
		levelLoadedOrder: number;
		onLevelLoaded: () => any;
	}
	class PushPullable extends ig.Class {
		entity: any;
		active: boolean;
		gripDir: any;
		deferredRelease: boolean;
		interactEntry: any;
		interactIcons: {
			vertical: MapInteractIcon;
			horizontal: MapInteractIcon;
		};
		coordDelta: any;
		targetPos: any;
		dragState: number;
		dragSpeed: number;
		speedTimer: number;
		dustTimer: number;
		rumbleHandle: any;
		gripCancelTimer: number;
		soundHandle: any;
		navBlocker: any;
		constructor(a?: any);
		init: (a?: any) => any;
		setActive: (a?: any) => any;
		isActive: () => any;
		onInteraction: () => any;
		onInteractionEnd: () => any;
		isInteractionBlocked: () => any;
		resetPos: (a?: any, b?: any) => any;
		onUpdate: () => any;
		onKill: () => any;
		onDeferredUpdate: () => any;
		updateStateFromIdle: () => any;
		stopSound: () => any;
		cancelGrip: () => any;
		onInteractObjectDrop: () => any;
		getGripPosAndFace: (a?: any) => any;
		getMovePlayerToPushableInteractibleEntityBoxThingeeAndSetGripDir: () => any;
		moveBox: (a?: any, b?: any) => any;
	}
	class BombEntity extends ig.AnimatedEntity {
		panel: any;
		timer: number;
		combatant: any;
		heatMode: boolean;
		effects: {
			bomb: ig.EffectSheet;
		};
		cameraHandle: any;
		noHeatFocus: boolean;
		constructor(a?: any, b?: any, c?: any, e?: any);
		init: (a?: any, b?: any, c?: any, e?: any) => any;
		destroy: () => any;
		onEffectEvent: (a?: any) => any;
		start: (a?: any, b?: any, c?: any, e?: any) => any;
		setLastSecond: () => any;
		explode: () => any;
		enterHeatMode: (a?: any, b?: any) => any;
		update: () => any;
		ballHit: (a?: any) => any;
		onTouchGround: (a?: any) => any;
		isBallAdjust: () => any;
		doBallAdjust: (a?: any, b?: any, c?: any) => any;
		isBallDestroyer: (a?: any, b?: any, c?: any) => any;
	}
	class WaterBubbleEntity extends ig.AnimatedEntity {
		panel: any;
		state: number;
		timer: number;
		startZ: number;
		combatant: any;
		heatMode: boolean;
		effects: {
			sheet: ig.EffectSheet;
			handle: any;
			hitHandle: any;
		};
		cameraHandle: any;
		noHeatFocus: boolean;
		target: any;
		constructor(a?: any, b?: any, c?: any, e?: any);
		init: (a?: any, b?: any, c?: any, e?: any) => any;
		isIdle: () => any;
		followTarget: (a?: any, b?: any) => any;
		bounce: (a?: any, b?: any) => any;
		setLastSecond: () => any;
		instantKill: () => any;
		burst: () => any;
		onEffectEvent: (a?: any) => any;
		steam: (a?: any, b?: any) => any;
		circularSteam: (a?: any) => any;
		turnIce: () => any;
		update: () => any;
		ballHit: (a?: any) => any;
		isBallAdjust: () => any;
		doBallAdjust: (a?: any, b?: any, c?: any) => any;
		isBallDestroyer: () => any;
	}
	class CompressedBaseEntity extends ig.AnimatedEntity {
		element: any;
		startPos: any;
		nudgeDir: any;
		nudgeTimer: number;
		killTimer: number;
		collisionList: any;
		collReleaseTimer: number;
		collReleaseTimeList: any;
		globalCount: number;
		speedFactor: number;
		effects: {
			sheet: ig.EffectSheet;
			perma: any;
			trail: any;
		};
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		_getAssistFactor: () => any;
		onKill: (a?: any) => any;
		nudge: (a?: any) => any;
		shoot: (a?: any, b?: any, c?: any) => any;
		destroy: () => any;
		update: () => any;
		collideWith: (a?: any) => any;
		onCollision: () => any;
		getHitCenter: (a?: any, b?: any) => any;
		getHitVel: (a?: any, b?: any) => any;
		getElement: () => any;
		getCombatant: () => any;
		getCombatantRoot: () => any;
		getAttackInfo: () => any;
		ballHit: (a?: any) => any;
	}
	class CompressedWaveEntity extends CompressedBaseEntity {
		_wm: ig.Config;
		phaseMode: boolean;
		phaseTraveled: number;
		phaseModeSmaller: boolean;
		wallKillTimer: number;
		enterWall: {
			timer: number;
			dir: any;
		};
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		update: () => any;
		onBallHit: (a?: any) => any;
		collideWith: (c?: any, e?: any) => any;
		isAlignCenter: (a?: any) => any;
		handleMovementTrace: (a?: any) => any;
	}
	class CompressedShockEntity extends CompressedBaseEntity {
		_wm: ig.Config;
		slidingWall: any;
		blockCheck: number;
		turnSoundTimer: number;
		wallBounces: number;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		update: () => any;
		handleMovementTrace: (a?: any) => any;
		clearWallSliding: () => any;
		shootFromWall: (a?: any, c?: any) => any;
	}
	class IceDiskEntity extends ig.AnimatedEntity {
		timer: number;
		combatant: any;
		state: number;
		effects: {
			sheet: ig.EffectSheet;
			handle: any;
			hitHandle: any;
		};
		cameraHandle: any;
		constructor(a?: any, b?: any, e?: any, f?: any);
		init: (a?: any, b?: any, e?: any, f?: any) => any;
		slide: (a?: any, b?: any) => any;
		consume: (a?: any) => any;
		onKill: (a?: any) => any;
		startMelt: () => any;
		onEffectEvent: (a?: any) => any;
		handleMovementTrace: (a?: any) => any;
		iceBreak: () => any;
		turnCooledCoals: () => any;
		update: () => any;
		ballHit: (a?: any) => any;
		onTouchGround: (b?: any) => any;
		collideWith: (a?: any) => any;
		isBallAdjust: () => any;
		doBallAdjust: (a?: any, b?: any, e?: any) => any;
		isBallDestroyer: (a?: any, b?: any, e?: any) => any;
		getHitCenter: (a?: any, b?: any) => any;
		getHitVel: (a?: any, b?: any) => any;
		getElement: () => any;
		getCombatant: () => any;
		getCombatantRoot: () => any;
		getAttackInfo: () => any;
	}
	class CooledCoals extends ig.AnimatedEntity {
		timer: number;
		effects: {
			sheet: ig.EffectSheet;
		};
		constructor(a?: any, b?: any, e?: any, f?: any);
		init: (a?: any, b?: any, e?: any, f?: any) => any;
		onKill: (a?: any) => any;
		startMelt: () => any;
		onEffectEvent: (a?: any) => any;
		update: () => any;
	}
	class BallChangerType extends ig.Class {
		icon: number;
		sphereColor: number;
		flipX: boolean;
		flipY: boolean;
		centerBall: boolean;
		waitForBallKill: boolean;
		onBallTouch: () => any;
	}
	class ElementShieldBallEntity extends ig.AnimatedEntity {
		_wm: ig.Config;
		effects: {
			sheet: ig.EffectSheet;
		};
		sounds: {
			charge: ig.Sound;
		};
		panel: any;
		state: number;
		charge: {
			current: number;
			prev: number;
			timer: number;
		};
		dischargeTimer: number;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		show: (b?: any) => any;
		onEffectEvent: (a?: any) => any;
		onActionEndDetach: () => any;
		update: () => any;
		updateSprites: () => any;
		_getVisibleCharge: () => any;
		bounce: (a?: any, b?: any, c?: any) => any;
		ballHit: (b?: any) => any;
		isBallDestroyer: () => any;
		isIdle: () => any;
		isCharged: () => any;
		isDestroyed: () => any;
		clearHitHandle: () => any;
		destroy: () => any;
	}
	class ElementShieldEntity extends ig.AnimatedEntity {
		effects: {
			sheet: ig.EffectSheet;
			handle: any;
		};
		target: any;
		timer: number;
		endWarning: boolean;
		constructor(c?: any, d?: any, g?: any, h?: any);
		init: (c?: any, d?: any, g?: any, h?: any) => any;
		onEntityKillDetach: () => any;
		_updatePos: () => any;
		deferredUpdate: () => any;
		destroy: () => any;
		onEffectEvent: (a?: any) => any;
		updateSprites: () => any;
	}
	class BounceSwitchGroups extends ig.GameAddon {
		groups: {[key: string]: any};
		effects: ig.EffectSheet;
		constructor();
		init: () => any;
		registerSwitch: (b?: any, a?: any) => any;
		registerBlock: (b?: any) => any;
		evaluateGroup: (b?: any) => any;
		resetGroup: (b?: any) => any;
		resolveGroup: (b?: any) => any;
		setCameraBall: (b?: any, a?: any) => any;
		setCameraPos: (b?: any, a?: any) => any;
		resetCamera: (b?: any) => any;
		isGroupBallConflict: (b?: any, a?: any) => any;
		isGroupResolved: (b?: any) => any;
		getEndSwitch: (b?: any) => any;
		getHitCount: (b?: any) => any;
		onBlockHit: (b?: any, a?: any) => any;
		onSwitchHit: (b?: any, a?: any) => any;
		onDeferredUpdate: () => any;
		onReset: () => any;
		onLevelLoadStart: () => any;
		getGroup: (b?: any) => any;
	}
	class SteamGlowEntity extends ig.Entity {
		lightHandle: any;
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		stop: (a?: any, b?: any) => any;
	}
	class QuickItemArrow extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		flipX: boolean;
		flipY: boolean;
		bottomAnchor: boolean;
		constructor();
		init: () => any;
		setPosition: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		updateDrawables: (a?: any) => any;
	}
	class QuickItemMenu extends ig.BoxGui {
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		base: any;
		anchor: any;
		list: any;
		arrow: any;
		buttongroup: any;
		_hidden: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		updateList: (a?: any) => any;
		show: () => any;
		hide: () => any;
		addFavoriteOverlay: (a?: any) => any;
		onSelection: (a?: any) => any;
		onPress: (a?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
	}
	class QuickMenuBuffsGui extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					offsetX: any;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		show: (a?: any, b?: any) => any;
		hide: (a?: any) => any;
	}
	class QuickBuffEntry extends ig.GuiElementBase {
		icon: any;
		description: any;
		constructor(a?: any);
		init: (a?: any) => any;
		getStatName: (a?: any, b?: any, d?: any) => any;
		getStatValue: (a?: any, b?: any, d?: any) => any;
	}
	class QuickLocationBox extends ig.BoxGui {
		ninepatch: ig.NinePatch;
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		location: any;
		hasTemp: boolean;
		constructor();
		init: () => any;
		updateDrawables: (a?: any) => any;
		show: (a?: any) => any;
		hide: (a?: any) => any;
		forceHide: () => any;
		onCutsceneStart: () => any;
		updateLocationName: () => any;
	}
	class QuickFocusScreen extends ig.GuiElementBase {
		boxes: {[key: string]: any};
		subGuis: any;
		prevType: any;
		constructor();
		init: () => any;
		registerType: (a?: any) => any;
		addSubGui: (a?: any) => any;
		show: (a?: any, b?: any, d?: any) => any;
		hide: (a?: any) => any;
		resetSubGuis: () => any;
		reset: () => any;
	}
	class QuickArrowBox extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		name: any;
		arrowOff: any;
		constructor(a?: any, b?: any, d?: any);
		init: (a?: any, b?: any, d?: any) => any;
		updateDrawables: (a?: any) => any;
		setPosition: (a?: any, d?: any) => any;
		getCenter: (a?: any) => any;
	}
	class QuickBorderArrowLevelBox extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		levelNumber: any;
		displayColor: number;
		sizeTransition: any;
		nameVisible: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		doSizeTransition: (a?: any, b?: any, d?: any, g?: any, h?: any) => any;
		getLevelColor: (a?: any) => any;
	}
	class QuickMenuTypesBase extends ig.FocusGui {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		type: any;
		entity: any;
		screen: any;
		focusable: boolean;
		showType: any;
		color: any;
		typeIcon: any;
		_fadeTimer: number;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		setSize: (a?: any, b?: any) => any;
		isMouseOver: () => any;
		focusGained: () => any;
		focusLost: () => any;
		setIconColor: (a?: any) => any;
		show: (a?: any) => any;
		hide: (a?: any) => any;
		alignGuiPosition: (a?: any, d?: any) => any;
		onAnalysisEnter: () => any;
		onAnalysisExit: () => any;
	}
	class QuickMenuAnalysisCursor extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		focusOffset: {
			x: number;
			y: number;
		};
		focus: boolean;
		_focusTimer: number;
		_focusTime: number;
		_focusOffset: number;
		_lastDevice: number;
		_gamepadActive: boolean;
		constructor();
		init: () => any;
		addObservers: () => any;
		removeObservers: () => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		focusOnNode: (b?: any, a?: any) => any;
		unfocus: () => any;
		moveTo: (b?: any, a?: any, d?: any, c?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class QuickMenuAnalysis extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		buttonGroup: any;
		cursor: any;
		entities: any;
		iconContainer: any;
		focusContainer: any;
		corners: any;
		background: any;
		_cursorPos: any;
		entered: boolean;
		constructor();
		init: () => any;
		update: () => any;
		show: () => any;
		hide: () => any;
		enter: () => any;
		exit: () => any;
		focusCenter: () => any;
		initCursor: (b?: any) => any;
		limitCursorPos: () => any;
		createCorner: (b?: any, a?: any) => any;
		modelChanged: (b?: any, a?: any) => any;
	}
	class RingMenuButton extends ig.FocusGui {
		gfx: ig.Image;
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		state: number;
		alpha: number;
		alphaTimer: number;
		endPos: any;
		origin: any;
		endPosActive: any;
		data: any;
		submitSound: any;
		blockedSound: any;
		constructor(a?: any, b?: any, c?: any);
		init: (a?: any, b?: any, c?: any) => any;
		invokeButtonPress: () => any;
		focusGained: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		show: (a?: any, b?: any) => any;
		hide: () => any;
		activate: () => any;
		deactivate: () => any;
	}
	class ItemTimerOverlay extends ig.GuiElementBase {
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		isActive: boolean;
		numberGui: any;
		button: any;
		constructor(a?: any);
		init: (a?: any) => any;
		update: () => any;
	}
	class QuickMenuButtonGroup extends ig.ButtonGroup {
		sounds: {
			focus: ig.Sound;
		};
		constructor();
		init: () => any;
		setButtons: (a?: any, b?: any, c?: any, e?: any) => any;
		isNonMouseMenuInput: () => any;
		doButtonTraversal: (a?: any) => any;
		focusCurrentButton: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		hasCD: (a?: any) => any;
	}
	class QuickRingMenu extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
					angle: number;
				};
				time: number;
				timeFunction: any;
			};
			PRE_DEFAULT: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
					angle: any;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		buttongroup: any;
		items: any;
		map: any;
		check: any;
		party: any;
		buttons: any;
		constructor();
		init: () => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		enter: () => any;
		exit: () => any;
		show: () => any;
		hide: () => any;
		createButtons: () => any;
		_unfocusAll: () => any;
		_createRingButton: (a?: any, b?: any, c?: any) => any;
		_updatePos: () => any;
		_setStateActive: (a?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
	}
	class QuickPartyStrategyMenu extends ig.BoxGui {
		gfx: ig.Image;
		ninepatch: ig.NinePatch;
		transitions: {
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		base: any;
		anchor: any;
		arrow: any;
		rows: any;
		currentText: any;
		buttongroup: any;
		_hidden: boolean;
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		update: () => any;
		updateDrawables: (a?: any) => any;
		addRow: (a?: any, b?: any) => any;
		createButton: (a?: any, b?: any, c?: any, e?: any) => any;
		show: () => any;
		hide: () => any;
		resetRow: (a?: any, b?: any) => any;
		resetButtons: (a?: any, b?: any) => any;
		getButtonIndex: (a?: any, b?: any) => any;
		onSelection: (a?: any) => any;
		onPress: (a?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
	}
	class QuickMenu extends ig.GuiElementBase {
		ringmenu: any;
		items: any;
		analysis: any;
		party: any;
		location: any;
		info: any;
		buffInfo: any;
		buffStats: any;
		backButton: any;
		constructor();
		init: () => any;
		_checkBackButtonInput: () => any;
		_enterMenu: () => any;
		_exitMenu: () => any;
		_setInfoBarAndLocation: () => any;
		modelChanged: (b?: any, a?: any, d?: any) => any;
	}
	class InputForcerGui extends ig.GuiElementBase {
		titleText: any;
		hintText: any;
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		constructor();
		init: () => any;
		show: (a?: any, b?: any) => any;
		remove: () => any;
	}
	class InputForcer extends ig.GameAddon {
		activeEntry: any;
		texts: {
			title: any;
			textKeyboard: any;
			textGamepad: any;
		};
		gui: any;
		blocked: boolean;
		darknessHandle: any;
		lightHandle: any;
		inputSubmitted: boolean;
		sounds: {
			start: ig.Sound;
		};
		constructor();
		init: () => any;
		setEntry: (a?: any, b?: any, e?: any, f?: any) => any;
		isBlocking: () => any;
		clearEntry: () => any;
		isSubmitted: () => any;
		preUpdateOrder: number;
		onPreUpdate: () => any;
		onReset: () => any;
		update: () => any;
		_startBlock: (a?: any) => any;
		_endBlock: () => any;
	}
	class TradeIconGui extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleX: number;
					scaleY: number;
					alpha: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		numberGfx: ig.Image;
		tradeInfo: any;
		tradeIcon: any;
		lineGui: any;
		entries: any;
		constructor(b?: any);
		init: (b?: any) => any;
		setIconState: (b?: any) => any;
		isActive: (b?: any) => any;
		_createContent: () => any;
		_createStatic: () => any;
		_updateTexts: () => any;
		_hasMissingItem: (b?: any) => any;
		remove: () => any;
	}
	class SavePresetData extends ig.JsonLoadable {
		cacheType: string;
		title: any;
		sub: any;
		saveSlot: any;
		onCacheCleared: () => any;
		getJsonPath: () => any;
		onload: (a?: any) => any;
	}
	class SavePreset extends ig.GameAddon {
		slots: any;
		constructor();
		init: () => any;
		load: (a?: any) => any;
	}
	class XenoDialogIcon extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {
					alpha: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					scaleX: number;
					scaleY: number;
					alpha: number;
					offsetY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		textGui: any;
		skipGui: any;
		xenoDialog: any;
		skipEntry: any;
		constructor();
		init: () => any;
		onTextFinish: () => any;
		isTextFinished: () => any;
		updateSkipIcon: () => any;
		setText: (b?: any, a?: any) => any;
		show: () => any;
		hide: () => any;
		onSkipInteract: (b?: any) => any;
		setIconState: () => any;
		isActive: (b?: any) => any;
		remove: () => any;
	}
	class QuestSubTaskBase extends ig.Class {
		type: any;
		constructor(b?: any);
		init: (b?: any) => any;
	}
	class QuestTask extends ig.Class {
		task: string;
		subTasks: any;
		containsCollect: boolean;
		subQuests: any;
		skipNotify: boolean;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
	}
	class Quest extends ig.Class {
		name: string;
		level: number;
		order: number;
		description: string;
		endDescription: string;
		tasks: any;
		rewards: any;
		id: any;
		person: any;
		personAfter: any;
		labelList: any;
		hideRewards: boolean;
		area: any;
		noTrack: boolean;
		parentQuest: any;
		elite: boolean;
		mandatory: boolean;
		hubSettings: any;
		location: {
			area: string;
			map: string;
		};
		timeStamp: number;
		character: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
	}
	class QuestModel extends ig.GameAddon {
		observers: any;
		staticQuests: {[key: string]: any};
		activeQuests: any;
		finishedQuests: {[key: string]: any};
		focusQuest: any;
		markedQuests: any;
		_activeQuestIndex: {[key: string]: any};
		_solvedQueue: any;
		_solvedTimer: number;
		_hasSolveDialogs: boolean;
		_subQuest: any;
		constructor();
		init: () => any;
		getTotalQuestsSolved: (a?: any, b?: any, d?: any, g?: any) => any;
		getTotalHubQuestsSolved: (a?: any, b?: any) => any;
		hasAreaQuests: (a?: any) => any;
		onPreUpdate: () => any;
		resetOrder: any;
		onReset: () => any;
		popInlineSolvedQuest: () => any;
		getInlineQuestResolve: (a?: any) => any;
		getQuestEvent: (a?: any) => any;
		markQuest: (a?: any) => any;
		isMarkedQuest: (a?: any) => any;
		hasQuestSolvedDialogs: () => any;
		hasSolvedQuestsStacked: () => any;
		setFavQuestOld: (a?: any) => any;
		cycleFavQuest: (a?: any, b?: any) => any;
		sendNotification: (a?: any, d?: any, f?: any) => any;
		createQuest: (a?: any) => any;
		activateStaticQuest: (a?: any, d?: any, f?: any) => any;
		solveQuestCondition: (b?: any, d?: any) => any;
		updateQuestLocation: (a?: any) => any;
		resetQuestTask: (a?: any, b?: any) => any;
		updateActiveQuests: (a?: any, b?: any) => any;
		resolveActiveQuestChanges: (a?: any, b?: any) => any;
		setQuestFinished: (b?: any, d?: any) => any;
		finishUpQuest: (a?: any) => any;
		isQuestActive: (a?: any) => any;
		isQuestSolved: (a?: any) => any;
		isQuestLabelSolved: (a?: any, b?: any) => any;
		getQuestState: (a?: any) => any;
		getSubQuests: (a?: any) => any;
		getQuestTask: (a?: any, b?: any) => any;
		getStaticQuest: (a?: any) => any;
		isTaskDone: (a?: any, b?: any) => any;
		getCurrentTask: (a?: any, b?: any) => any;
		getQuestName: (a?: any) => any;
		getQuestList: (a?: any, b?: any) => any;
		sortIDList: (a?: any) => any;
		sortQuestList: (a?: any, b?: any) => any;
		getActiveQuestID: (a?: any) => any;
		_sortOrder: (a?: any, b?: any) => any;
		getMarkedQuest: () => any;
		getCurrentMarkedQuestTaskIndex: () => any;
		isMarkedQuestDone: () => any;
		isMarkedTaskDone: (a?: any) => any;
		getMarkedTaskIndex: (a?: any) => any;
		getSubTaskState: (a?: any, b?: any, d?: any) => any;
		isSubTaskDone: (a?: any, b?: any, d?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
		onCombatEvent: (b?: any, d?: any) => any;
		onLandmarkEvent: (b?: any) => any;
		modelChanged: (b?: any, d?: any, f?: any) => any;
		_collectRewards: (a?: any) => any;
		updateTimeStamp: (a?: any, b?: any) => any;
		_setCurrentLocationAndTime: (a?: any, b?: any, d?: any) => any;
		_hasAlreadyFinished: (a?: any) => any;
		_loadStaticQuests: () => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
		checkIfSubQuests: (b?: any) => any;
	}
	class QuestState extends ig.Class {
		quest: any;
		done: any;
		currentTask: number;
		highestTask: number;
		finished: boolean;
		labels: {[key: string]: any};
		constructor(a?: any, b?: any);
		init: (a?: any, b?: any) => any;
		finalizeTask: (a?: any) => any;
		initState: (a?: any) => any;
		updateState: (a?: any, b?: any, d?: any) => any;
		increaseTaskIndex: () => any;
		resetTaskIndex: (a?: any) => any;
		hasCollectSubtask: (a?: any) => any;
		skipPreviousTask: () => any;
		checkSubTask: (a?: any, b?: any, d?: any, g?: any) => any;
		isSubTaskSolved: (a?: any) => any;
		getCurrentSubTaskValue: (a?: any, b?: any) => any;
		getCurrentTask: () => any;
		getSubTaskData: (a?: any, b?: any) => any;
		isDone: () => any;
		getSaveData: () => any;
		setLoadData: (a?: any) => any;
	}
	class PartyMemberModel extends ig.Class {
		observers: any;
		core: {[key: string]: any};
		config: any;
		animSheet: any;
		stats: any;
		params: any;
		name: any;
		clazz: any;
		character: any;
		equipLevel: number;
		level: number;
		exp: number;
		combatStyle: any;
		spLevel: number;
		allElements: boolean;
		equip: {
			head: any;
			leftArm: any;
			rightArm: any;
			torso: any;
			feet: any;
		};
		baseParams: {
			elemFactor: any;
		};
		equipParams: any;
		equipModifiers: any;
		baseConfig: any;
		elementConfigs: {[key: string]: any};
		reviveTimer: number;
		skills: any;
		healing: {
			sandwich: any;
			cooldown: number;
			needRestock: boolean;
		};
		temporary: boolean;
		noDie: boolean;
		currentElementMode: number;
		constructor(a?: any);
		init: (a?: any) => any;
		onLoadableComplete: () => any;
		getHeadIdx: () => any;
		setEquipment: (a?: any, b?: any) => any;
		clearEquipment: () => any;
		updateAutoEquip: () => any;
		_updateAutoEquip: (a?: any) => any;
		setElementMode: (a?: any) => any;
		updateStats: () => any;
		isAlive: () => any;
		onDefeat: () => any;
		revive: () => any;
		setTemporary: (a?: any) => any;
		setNoDie: (a?: any) => any;
		update: () => any;
		getCharacterName: () => any;
		getCharacterRealName: () => any;
		getAction: (a?: any) => any;
		getActionMaxLevel: (a?: any) => any;
		getCombatArtName: (a?: any) => any;
		getBalls: () => any;
		getSaveData: () => any;
		setLoadData: (a?: any) => any;
		reset: () => any;
		setSpLevel: (a?: any) => any;
		setAllElements: (a?: any) => any;
		addExperience: (a?: any, b?: any, e?: any, f?: any, g?: any) => any;
		setLevel: (a?: any, b?: any, e?: any, f?: any) => any;
		hasSandwich: () => any;
		canEatSandwich: () => any;
		restockSandwich: () => any;
		getBestSandwich: (a?: any) => any;
		consumeSandwich: (a?: any, c?: any) => any;
		getSandwichAction: (a?: any) => any;
	}
	class PartyMemberEntity extends PlayerBaseEntity {
		party: any;
		material: any;
		configs: {
			normal: any;
			aiming: any;
		};
		guard: {
			damage: number;
			timer: number;
			fxSheet: ig.EffectSheet;
			fxHandle: any;
			currentKey: any;
		};
		model: any;
		posOffset: any;
		navTarget: any;
		state: any;
		inCombat: boolean;
		targetStats: {
			distVec: any;
			distance: number;
			outOfScreenTime: number;
		};
		stateData: {[key: string]: any};
		timer: {
			action: number;
			move: number;
			attack: number;
			noAttackTime: number;
			dodge: number;
		};
		throwDirData: any;
		currentCombatArt: any;
		charging: {
			max: number;
			current: number;
			timer: number;
		};
		constructor(a?: any, b?: any, c?: any, d?: any);
		init: (a?: any, b?: any, c?: any, d?: any) => any;
		updateDefaultConfig: (a?: any) => any;
		show: (a?: any) => any;
		onPreDamageModification: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		onInstantDamage: (a?: any) => any;
		onKill: (a?: any) => any;
		leaveParty: (a?: any) => any;
		resetAttackTimer: () => any;
		startCombat: () => any;
		endCombat: () => any;
		startCombatArtCharging: () => any;
		doCombatArtCharge: () => any;
		cancelCharge: () => any;
		doCombatArt: () => any;
		setAction: (a?: any, b?: any, c?: any) => any;
		setActionBlocked: (a?: any) => any;
		hasValidTarget: () => any;
		selectTarget: () => any;
		reselectTarget: () => any;
		getBestElement: () => any;
		consumeSandwich: (a?: any) => any;
		updateElement: () => any;
		updateModelStats: () => any;
		modelChanged: (a?: any, b?: any) => any;
		selectCombatArt: () => any;
		changeState: (a?: any) => any;
		isControlBlocked: () => any;
		getDodgeProbability: (a?: any) => any;
		goToCombat: () => any;
		update: () => any;
		resetPos: (a?: any) => any;
		setNavTarget: (a?: any) => any;
		onNavigationFailed: (a?: any) => any;
	}
	class CommonEvents extends ig.GameAddon {
		events: {[key: string]: any};
		eventsByType: {[key: string]: any};
		runData: {[key: string]: any};
		delayedTriggerStack: any;
		delayedTriggerTimer: number;
		constructor();
		init: () => any;
		onReset: () => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
		onDeferredUpdate: () => any;
		_loadCommonEvents: () => any;
		triggerEvent: (a?: any, b?: any) => any;
		cancelEvent: (a?: any) => any;
		startCallEvent: (a?: any) => any;
		_forcedTriggerEvent: (a?: any, b?: any, c?: any) => any;
		_checkEventExecution: (a?: any, b?: any, c?: any) => any;
		_startCommonEvent: (a?: any) => any;
		selectEvent: (a?: any, b?: any, d?: any, i?: any) => any;
		getRunCount: (a?: any) => any;
		getTriggerCount: (a?: any) => any;
		increaseTriggerCount: (a?: any) => any;
	}
	class CommonEvent extends ig.Class {
		name: any;
		type: any;
		typeDetails: any;
		frequency: any;
		repeat: any;
		runOnTrigger: any;
		loopCount: number;
		condition: any;
		event: any;
		constructor(a?: any, c?: any);
		init: (a?: any, c?: any) => any;
		check: (a?: any) => any;
		start: (a?: any) => any;
	}
	class VoiceActing extends ig.GameAddon {
		active: boolean;
		loaded: boolean;
		voices: {[key: string]: any};
		constructor();
		init: () => any;
		toggle: () => any;
		load: () => any;
		loadConfigSounds: (b?: any) => any;
		play: (b?: any, a?: any) => any;
	}
	class CreditSectionLoadable extends ig.Loadable {
		cacheType: string;
		data: any;
		lowestFloor: number;
		constructor(b?: any);
		init: (b?: any) => any;
		loadInternal: (b?: any) => any;
		onerror: () => any;
		onload: (b?: any) => any;
	}
	class ArenaCache extends ig.Cacheable {
		cacheType: string;
		constructor();
		init: () => any;
		onCacheCleared: () => any;
		getCacheKey: () => any;
	}
	class CupAsset extends ig.Loadable {
		cacheType: string;
		data: any;
		key: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		loadInternal: (b?: any) => any;
		onerror: () => any;
		onload: (b?: any) => any;
	}
	class ArenaChallengeBase extends ig.Class {
		state: boolean;
		icon: number;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		toggle: (b?: any) => any;
	}
	class ArenaChallengePlayerBase extends ArenaChallengeBase {
		core: any;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		onToggle: () => any;
	}
	class ArenaCrowdCheerController extends ig.Class {
		soundPool: {[key: string]: any};
		update: () => any;
		play: (a?: any) => any;
		resetTimers: () => any;
		loadCache: () => any;
		clearCache: () => any;
	}
	class Arena extends ig.GameAddon {
		active: boolean;
		arenaCache: any;
		runtime: any;
		coins: number;
		coinsSpend: number;
		cups: {[key: string]: any};
		observers: any;
		partyStash: any;
		pauseOverlay: any;
		sounds: any;
		effects: ig.EffectSheet;
		_pauseBlock: boolean;
		_endRoundEnd: boolean;
		_exitCup: boolean;
		_pauseAction: number;
		_isFinalHit: boolean;
		_partySettingBehaviour: any;
		constructor();
		init: () => any;
		postUpdateOrder: number;
		onPostUpdate: () => any;
		onReset: () => any;
		levelLoadStartOrder: number;
		onLevelLoadStart: () => any;
		levelLoadedOrder: number;
		onLevelLoaded: () => any;
		onVarsChanged: () => any;
		onPreDamageModification: (a?: any, b?: any) => any;
		onTargetHit: (a?: any, b?: any, c?: any, d?: any) => any;
		onPreDamageApply: (a?: any, b?: any, c?: any, d?: any) => any;
		onPreInstantDamage: (a?: any, b?: any) => any;
		onLockEnd: (a?: any, b?: any, c?: any, d?: any) => any;
		onElementOverload: () => any;
		onPerfectDodge: () => any;
		onGuardCounter: (a?: any) => any;
		onEnemyBreak: (a?: any) => any;
		onHitKill: (a?: any) => any;
		onCombatantHeal: (a?: any, b?: any) => any;
		onCombatantDeathHit: (a?: any, b?: any) => any;
		onEnvironmentKill: (a?: any) => any;
		onFinalDeathHit: () => any;
		spawnCurrentWave: (a?: any, b?: any, c?: any) => any;
		startRound: () => any;
		endRound: () => any;
		endRoundDeath: () => any;
		startNextRound: (a?: any) => any;
		restartCup: () => any;
		prepareLobbyReturn: () => any;
		teleportToCurrentRound: () => any;
		resetRuntimeRoundStats: () => any;
		addChallengeMods: () => any;
		addBonusObjectives: () => any;
		addGui: () => any;
		addScore: (a?: any, b?: any) => any;
		addScoreIgnore: (a?: any) => any;
		removeScoreIgnore: (a?: any) => any;
		clearScoreIgnore: () => any;
		increaseChain: (a?: any) => any;
		refreshChainTimer: (a?: any) => any;
		resetChain: () => any;
		getChainMultiplier: () => any;
		enterArenaMode: (a?: any, b?: any) => any;
		exitArenaMode: () => any;
		stashPartyMembers: () => any;
		unstashPartyMembers: () => any;
		registerCup: (a?: any, b?: any) => any;
		loadCache: () => any;
		clearCache: () => any;
		initMetaData: (a?: any) => any;
		setPauseAction: (a?: any) => any;
		saveScore: (a?: any, b?: any) => any;
		saveRushScore: () => any;
		addEnemyIgnore: (a?: any) => any;
		removeArenaCoins: (a?: any) => any;
		clearProgress: (a?: any, b?: any) => any;
		_getCoinWeightMultiplier: (a?: any, b?: any) => any;
		_validateCoins: () => any;
		_clearProgress: (a?: any, b?: any) => any;
		_cleaRuntimeCache: (a?: any) => any;
		_spawnEnemy: (a?: any, b?: any, c?: any, d?: any) => any;
		_getLevelToSpawn: (a?: any, b?: any, c?: any, d?: any) => any;
		modelChanged: (a?: any, b?: any) => any;
		onLoadableComplete: (a?: any, b?: any) => any;
		onVarAccess: (a?: any, b?: any) => any;
		getTotalArenaCompletion: () => any;
		getTotalDefaultCups: (a?: any) => any;
		getTotalDefaultTrophies: (a?: any, c?: any) => any;
		isEnemyBlocked: (a?: any) => any;
		getCupCompletion: (a?: any) => any;
		getCurrentObjective: () => any;
		getChallengeMods: (a?: any, b?: any) => any;
		isStatusModifierBlocked: (a?: any) => any;
		hasAnyChallenge: () => any;
		hasChallenge: (a?: any) => any;
		isScoreNewRecord: (a?: any, b?: any, c?: any) => any;
		isPauseBlocked: () => any;
		getCurrentWave: () => any;
		getNextWave: () => any;
		getCurrentRound: () => any;
		isCurrentRoundCustom: () => any;
		isCurrentRoundLast: () => any;
		isCupSolo: (a?: any) => any;
		isCupCustom: (a?: any) => any;
		getRoundCompletionTotal: (a?: any, b?: any) => any;
		getRoundMedalRequirement: (a?: any, b?: any, c?: any, d?: any) => any;
		getMedalForCurrentRound: (a?: any, b?: any) => any;
		getTotalArenaCoins: () => any;
		getArenaCoinsObtainedInCup: (a?: any) => any;
		getArenaCoinsObtainedInRound: (a?: any, b?: any, c?: any) => any;
		getAvailableArenaCoinsInCup: (a?: any, b?: any) => any;
		getAvailableArenaCoinsInRound: (a?: any, b?: any) => any;
		getTotalPoints: (a?: any, b?: any) => any;
		getRoundPoints: (a?: any, b?: any) => any;
		getTotalTime: (a?: any) => any;
		getRoundTime: (a?: any, b?: any) => any;
		hasMedalsForTrophy: (a?: any) => any;
		getCupTrophy: (a?: any) => any;
		getCupMedal: (a?: any, b?: any) => any;
		getCupLevel: (a?: any) => any;
		getRoundsCleared: (a?: any) => any;
		isCupUnlocked: (a?: any) => any;
		getCupName: (a?: any) => any;
		getCupDescription: (a?: any) => any;
		getCupDifficultyIcon: (a?: any) => any;
		getCupProgress: (a?: any) => any;
		getCupCore: (a?: any) => any;
		getCupCoreAttrib: (a?: any, b?: any) => any;
		getCupRounds: (a?: any) => any;
		getCupData: (a?: any) => any;
		getSortedCupList: (a?: any, b?: any) => any;
		onStorageSave: (a?: any) => any;
		onStoragePreLoad: (a?: any) => any;
	}
	class ArenaMedalEffect extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		medal: number;
		isTrophy: boolean;
		display: any;
		container: any;
		effectDone: boolean;
		constructor();
		init: () => any;
		show: (b?: any, a?: any) => any;
		hide: (b?: any) => any;
		getMedalEffectName: (b?: any, a?: any) => any;
		onLoaded: (b?: any) => any;
		onEffectEvent: (b?: any) => any;
	}
	class ArenaRoundEndButtons extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		callback: any;
		buttonInteract: any;
		buttonGroup: any;
		background: any;
		buttons: any;
		info: any;
		dialogBlock: boolean;
		_playerDeath: boolean;
		_isLastRound: boolean;
		confirm: ig.Sound;
		constructor(c?: any, d?: any, f?: any);
		init: (c?: any, d?: any, f?: any) => any;
		handleRushMode: (a?: any) => any;
		handleDefaultMode: (a?: any) => any;
		getDialogText: (a?: any, b?: any) => any;
		onButtonPressed: (a?: any) => any;
		onButtonSelect: (a?: any) => any;
		onMouseFocusLost: () => any;
		show: () => any;
		hide: () => any;
	}
	class ArenaCoinsHud extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		panel: any;
		number: any;
		coins: any;
		add: number;
		constructor();
		init: () => any;
		addRushCoins: () => any;
		show: () => any;
		hide: () => any;
	}
	class ArenaMedalHud extends ig.GuiElementBase {
		ninepatch: ig.NinePatch;
		panel: any;
		text: any;
		medal: any;
		effect: any;
		callback: any;
		constructor(a?: any);
		init: (a?: any) => any;
		show: (a?: any) => any;
		hide: () => any;
	}
	class ArenaRoundEndHeader extends ig.BoxGui {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleX: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		text: any;
		constructor();
		init: () => any;
		show: (a?: any, b?: any) => any;
		hide: () => any;
	}
	class ArenaSummary extends RightHudBoxGui {
		summaryContent: any;
		scrollPanel: any;
		container: any;
		total: any;
		totalOverlay: any;
		entries: any;
		currentIndex: number;
		timer: number;
		totalValue: number;
		addEntries: boolean;
		containerHeight: number;
		done: boolean;
		callback: any;
		scoreCountSound: ig.Sound;
		scoreDotSound: ig.Sound;
		scoreDotPitch: number;
		constructor(a?: any);
		init: (a?: any) => any;
		update: () => any;
		updateScroll: () => any;
		skip: () => any;
		show: () => any;
		_addSeparator: (a?: any, b?: any) => any;
		_addBonusEntry: (a?: any, b?: any, d?: any, g?: any) => any;
		_addEntry: (a?: any, b?: any, d?: any) => any;
	}
	class ArenaCupOverview extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		interact: any;
		content: any;
		msgBox: any;
		header: any;
		medals: any;
		list: any;
		trophy: any;
		effect: any;
		total: any;
		time: any;
		rushTime: any;
		rushChain: any;
		totalOverlay: any;
		score: any;
		trophyHeader: any;
		trophyFooter: any;
		callback: any;
		entries: any;
		currentIndex: number;
		timer: number;
		totalValue: number;
		totalTime: number;
		addEntries: boolean;
		cup: any;
		trophyType: any;
		state: number;
		blockTimer: number;
		initGui: boolean;
		scoreCountSound: ig.Sound;
		scoreDotSound: ig.Sound;
		scoreDotPitch: number;
		constructor(b?: any, a?: any);
		init: (b?: any, a?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		show: (b?: any) => any;
		hide: () => any;
		addMedals: () => any;
		skip: () => any;
		onInteraction: () => any;
	}
	class ArenaRushOverview extends ig.GuiElementBase {
		gfx: ig.Image;
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		interact: any;
		content: any;
		msgBox: any;
		header: any;
		medals: any;
		list: any;
		medal: any;
		effect: any;
		total: any;
		time: any;
		totalOverlay: any;
		medalHeader: any;
		medalFooter: any;
		callback: any;
		entries: any;
		currentIndex: number;
		timer: number;
		totalValue: number;
		addEntries: boolean;
		cup: any;
		medalType: any;
		state: number;
		blockTimer: number;
		initGui: boolean;
		scoreCountSound: ig.Sound;
		scoreDotSound: ig.Sound;
		scoreDotPitch: number;
		constructor(b?: any);
		init: (b?: any) => any;
		update: () => any;
		updateDrawables: (b?: any) => any;
		show: () => any;
		hide: () => any;
		addMedals: () => any;
		skip: () => any;
		onInteraction: () => any;
	}
	class ArenaPlayerDeathOverlay extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		done: boolean;
		constructor();
		init: () => any;
		show: () => any;
		hide: () => any;
	}
	class ArenaRoundEndOverlay extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
		};
		interact: any;
		header: any;
		summary: any;
		medal: any;
		coins: any;
		buttons: any;
		info: any;
		rushChain: any;
		overview: any;
		done: boolean;
		state: number;
		waitTimer: number;
		initTimer: number;
		constructor();
		init: () => any;
		update: () => any;
		checkNewRecord: () => any;
		saveScore: () => any;
		onInteraction: () => any;
		show: () => any;
		hide: () => any;
	}
	class ArenaChainHud extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		ninepatch: ig.NinePatch;
		panel: any;
		text: any;
		number: any;
		pulsing: boolean;
		timer: any;
		initNumber: any;
		targetNumber: any;
		done: any;
		chainSound: ig.Sound;
		constructor(a?: any);
		init: (a?: any) => any;
		update: () => any;
		show: () => any;
		hide: (a?: any) => any;
		animateChainNumber: (a?: any, b?: any, c?: any) => any;
		setChainNumber: (a?: any, b?: any) => any;
		setPulse: (a?: any) => any;
		rumble: () => any;
		_getCurrentNumber: () => any;
	}
	class ArenaChallengeOverlay extends SideBoxGui {
		constructor();
		init: () => any;
		setChallengeMods: (a?: any) => any;
	}
	class ArenaRoundStartHud extends ig.GuiElementBase {
		transitions: {
			DEFAULT: {
				state: {[key: string]: any};
				time: number;
				timeFunction: any;
			};
			HIDDEN: {
				state: {
					alpha: number;
					scaleY: number;
				};
				time: number;
				timeFunction: any;
			};
		};
		timer: number;
		done: boolean;
		round: any;
		name: any;
		container: any;
		constructor();
		init: () => any;
		updateDrawables: (b?: any) => any;
		update: () => any;
	}
	class NewGamePlusModel extends ig.GameAddon {
		active: boolean;
		options: {[key: string]: any};
		observers: any;
		constructor();
		init: () => any;
		onReset: () => any;
		setActive: (b?: any) => any;
		apply: (b?: any) => any;
		toggle: (b?: any, a?: any) => any;
		get: (b?: any) => any;
		onVarAccess: (b?: any, a?: any) => any;
		onStorageSave: (b?: any) => any;
		onStoragePreLoad: (b?: any) => any;
	}
	class BetaControls extends ig.GameAddon {
		constructor();
		init: () => any;
		postUpdateOrder: number;
		onPostUpdate: () => any;
	}
	class EmptyLoader extends ig.Loader {
		draw: () => any;
	}
	class CrossCode extends ig.Game {
		mapLoader: any;
		gravity: number;
		shadowImage: ig.Image;
		transitionTimer: number;
		currentTeleportColor: {
			r: number;
			g: number;
			b: number;
		};
		teleportColor: {
			r: number;
			g: number;
			b: number;
			lighter: boolean;
			timeIn: number;
			timeOut: number;
		};
		effects: {
			dust: ig.EffectSheet;
			teleport: ig.EffectSheet;
			npc: ig.EffectSheet;
			death: ig.EffectSheet;
			speedlines: ig.EffectSheet;
		};
		sounds: {
			popup: ig.Sound;
		};
		_slotToLoad: number;
		_startMode: any;
		_teleportMessages: any;
		constructor();
		init: () => any;
		onGameLoopStart: () => any;
		update: () => any;
		draw: () => any;
		getVersion: () => any;
		addTeleportMessage: (b?: any) => any;
		start: (b?: any, a?: any) => any;
		loadStart: (b?: any) => any;
		gotoTitle: () => any;
		transitionEnded: () => any;
		hardReset: () => any;
		reloadCheckpoint: () => any;
		respawn: () => any;
		isEventStartReady: () => any;
		setTeleportColor: (b?: any, a?: any, d?: any, c?: any) => any;
		setTeleportTime: (b?: any, a?: any) => any;
		onTeleportStart: () => any;
		onTeleportEnd: () => any;
		createPlayer: () => any;
		getErrorData: (b?: any) => any;
		loadLevel: (b?: any, a?: any) => any;
		loadingComplete: () => any;
		handleLoadingComplete: () => any;
	}
	namespace Slider {
		class Thumb extends ig.GuiElementBase {
			updateDrawables: (a?: any) => any;
		}
	}
	namespace ScrollPane {
		class Container extends ig.GuiElementBase {
			scrollIndex: number;
			constructor();
			init: () => any;
			getContentWidth: () => any;
			getContentHeight: () => any;
		}
	}
	namespace BALL_BEHAVIOR {
		class FOLLOW_TARGET extends BallBehavior {
			steerDegree: number;
			adjustTime: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			onUpdate: (a?: any) => any;
		}
		class CLOSE_SELF_DESTRUCT extends BallBehavior {
			distance: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			onUpdate: (a?: any) => any;
		}
		class WIRL_SIDEWAYS extends BallBehavior {
			relWirl: number;
			wirlTime: number;
			delay: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			onUpdate: (a?: any) => any;
		}
		class SLOW_DOWN extends BallBehavior {
			speedFactor: number;
			startWait: number;
			fadeOut: number;
			fadeOutVary: number;
			pause: number;
			fadeIn: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			onInit: (a?: any) => any;
			onUpdate: (a?: any) => any;
		}
	}
	namespace PROXY_TYPE {
		class BALL extends ProxySpawnerBase {
			data: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getSize: (a?: any) => any;
			clearCached: () => any;
			spawn: (a?: any, b?: any, c?: any, d?: any, i?: any) => any;
		}
		class STONE extends ProxySpawnerBase {
			data: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			getSize: (a?: any) => any;
			clearCached: () => any;
			spawn: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
		}
		class GENERIC extends ProxySpawnerBase {
			data: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			clearCached: () => any;
			getSize: (a?: any) => any;
			spawn: (a?: any, b?: any, d?: any, g?: any, h?: any) => any;
		}
	}
	namespace MainMenu {
		class TopBar extends ig.GuiElementBase {
			hotkeys: any;
			transitions: {
				DEFAULT: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						offsetY: any;
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			_lateHotKeys: boolean;
			_hotkeyTimer: number;
			_hotkeyTime: number;
			constructor(a?: any);
			init: (a?: any) => any;
			update: () => any;
			enterMenu: () => any;
			exitMenu: () => any;
			cleanChildren: () => any;
			_addHotKeyButtons: () => any;
			_positionHotKeys: (a?: any, b?: any) => any;
			hideHotkeys: () => any;
			addHotkeysToTopBar: (a?: any) => any;
			updateHotkeys: (a?: any) => any;
		}
		class CurrentMenuDisplay extends ig.GuiElementBase {
			boxes: any;
			constructor();
			init: () => any;
			reset: () => any;
			hideDisplay: () => any;
			pushMenuDisplay: (a?: any) => any;
			popMenuDisplay: () => any;
			modelChanged: (a?: any, b?: any) => any;
		}
		class SubMenuBox extends ig.BoxGui {
			ninepatch: ig.NinePatch;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
						offsetX: any;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN_TOP: {
					state: {
						offsetY: any;
					};
					time: number;
					timeFunction: any;
				};
			};
			text: any;
			constructor(a?: any);
			init: (a?: any) => any;
		}
		class StatusLine extends ig.GuiElementBase {
			slope: any;
			line: any;
			constructor();
			init: () => any;
			showLine: (a?: any) => any;
			hideLine: () => any;
			hideLineFade: () => any;
		}
		class LeaLarge extends ig.GuiElementBase {
			gfx: ig.Image;
			skinGfx: any;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				FADE_TO_SMALL: {
					state: {
						scaleX: number;
						scaleY: number;
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				FADE_IN_ALPHA: {
					state: {
						scaleX: number;
						scaleY: number;
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			constructor();
			init: () => any;
			updateDrawables: (a?: any) => any;
		}
		class LeaSmall extends ig.GuiElementBase {
			gfx: ig.Image;
			skinGfx: any;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			constructor();
			init: () => any;
			updateDrawables: (a?: any) => any;
		}
		class Lea extends ig.GuiElementBase {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
						offsetY: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN_NO_OFFSET: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			large: any;
			small: any;
			constructor();
			init: () => any;
			moveLea: (a?: any, b?: any, e?: any, f?: any) => any;
			hideLea: () => any;
			reset: () => any;
			fadeToSmall: () => any;
			fadeToLarge: () => any;
			isSmall: () => any;
			modelChanged: (a?: any, b?: any, e?: any) => any;
		}
		class SmallRhombus extends ig.GuiElementBase {
			gfx: ig.Image;
			transitions: {
				DEFAULT: {
					state: {
						alpha: number;
						offsetY: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						offsetX: any;
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			constructor();
			init: () => any;
			updateDrawables: (a?: any) => any;
		}
	}
	namespace StartMenu {
		class LargeRhombus extends ig.GuiElementBase {
			gfx: ig.Image;
			transitions: {
				DEFAULT: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						offsetX: any;
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			constructor();
			init: () => any;
			updateDrawables: (a?: any) => any;
		}
	}
	namespace ParamHudGui {
		class Pie extends ig.GuiElementBase {
			gfx: ig.Image;
			param: string;
			offsetX: number;
			offsetY: number;
			_timer: number;
			_targetValue: number;
			_startValue: number;
			constructor(b?: any);
			init: (b?: any) => any;
			update: () => any;
			updateDrawables: (b?: any) => any;
			_getCurrentValue: () => any;
			_calcOffset: (b?: any) => any;
			modelChanged: (b?: any, a?: any) => any;
		}
		class Param extends ig.BoxGui {
			ninepatch: ig.NinePatch;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						scaleY: number;
						alpha: number;
						scaleX: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			_pie: any;
			_text: any;
			_number: any;
			_param: string;
			constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
			init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
			_setNumber: (b?: any) => any;
			modelChanged: (b?: any, a?: any) => any;
		}
		class Level extends ig.BoxGui {
			ninepatch: ig.NinePatch;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						scaleY: number;
						alpha: number;
						scaleX: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			_text: any;
			_level: any;
			constructor();
			init: () => any;
			modelChanged: (b?: any, a?: any) => any;
		}
	}
	namespace SubTaskEntry {
		class COLLECT extends SubTaskEntryBase {
			gfx: ig.Image;
			numberGui: any;
			maxNumberGui: any;
			_done: boolean;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			updateDrawables: (b?: any) => any;
			onSubTaskChange: () => any;
			createUI: () => any;
		}
		class LANDMARK extends SubTaskEntryBase {
			gfx: ig.Image;
			numberGui: any;
			maxNumberGui: any;
			_done: boolean;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			updateDrawables: (b?: any) => any;
			onSubTaskChange: () => any;
			createUI: () => any;
		}
		class KILL extends SubTaskEntryBase {
			gfx: ig.Image;
			numberGui: any;
			maxNumberGui: any;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			updateDrawables: (b?: any) => any;
			onSubTaskChange: () => any;
			createUI: () => any;
		}
		class CONDITION extends SubTaskEntryBase {
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			onSubTaskChange: () => any;
		}
		class QUEST extends SubTaskEntryBase {
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
			onSubTaskChange: () => any;
		}
	}
	namespace TitlePresetMenu {
		class SaLoButton extends ig.FocusGui {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						scaleY: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			ninepatch: ig.NinePatch;
			level: any;
			location: any;
			mainText: any;
			position: any;
			slot: any;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			focusGained: () => any;
			updateDrawables: (b?: any) => any;
		}
	}
	namespace DebugSaveLoadPanel {
		class SaLoButton extends ig.FocusGui {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						scaleY: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			ninepatch: ig.NinePatch;
			level: any;
			location: any;
			playtime: any;
			position: any;
			slot: any;
			deleteMode: boolean;
			constructor(a?: any, d?: any);
			init: (a?: any, d?: any) => any;
			focusGained: () => any;
			updateDrawables: (a?: any) => any;
			saved: () => any;
			updateInfo: () => any;
			_getVersionText: (a?: any) => any;
		}
	}
	namespace SUB_HP_EDITOR {
		class BOSS extends BigHpBar {
			labelGui: any;
			listed: boolean;
			barOrder: number;
			constructor(a?: any);
			init: (a?: any) => any;
			initWithParams: () => any;
			update: () => any;
			onDetach: () => any;
			updatePlacement: (a?: any, b?: any) => any;
		}
		class PVP extends BigHpBar {
			heads: ig.Image;
			spBGPatch: ig.NinePatch;
			constructor(a?: any);
			init: (a?: any) => any;
			updateDrawables: (a?: any) => any;
		}
	}
	namespace EquipBodyPartContainer {
		class Entry extends ig.GuiElementBase {
			numberGfx: ig.Image;
			text: any;
			button: any;
			defaultPosition: any;
			_isActiveTop: boolean;
			_hidden: boolean;
			topY: number;
			bottomY: number;
			level: any;
			constructor(b?: any, a?: any, d?: any, c?: any, e?: any, f?: any);
			init: (b?: any, a?: any, d?: any, c?: any, e?: any, f?: any) => any;
			setData: (b?: any, a?: any, d?: any) => any;
			moveToNormal: () => any;
			moveToBottom: () => any;
			moveToTop: () => any;
			reset: () => any;
			hideButton: () => any;
			showButton: () => any;
		}
	}
	namespace HELP_ANNO_TYPE {
		class INFO extends HelpAnnoBase {
			constructor(b?: any);
			init: (b?: any) => any;
		}
	}
	namespace SKILLS {
		class EMPTY extends BaseSkill {
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			apply: () => any;
			getDescription: () => any;
		}
		class MAXHP extends StatSkill {
			icon: number;
			statType: string;
		}
		class ATK extends StatSkill {
			icon: number;
			statType: string;
		}
		class DEF extends StatSkill {
			icon: number;
			statType: string;
		}
		class FOC extends StatSkill {
			icon: number;
			statType: string;
		}
		class OWN_ELEMENT_RES_HEAT extends ElementSkill {
			icon: number;
			counter: boolean;
		}
		class COUNTER_ELEMENT_RES_HEAT extends ElementSkill {
			icon: number;
			counter: boolean;
		}
		class OWN_ELEMENT_RES_COLD extends ElementSkill {
			icon: number;
			counter: boolean;
		}
		class COUNTER_ELEMENT_RES_COLD extends ElementSkill {
			icon: number;
			counter: boolean;
		}
		class OWN_ELEMENT_RES_SHOCK extends ElementSkill {
			icon: number;
			counter: boolean;
		}
		class COUNTER_ELEMENT_RES_SHOCK extends ElementSkill {
			icon: number;
			counter: boolean;
		}
		class OWN_ELEMENT_RES_WAVE extends ElementSkill {
			icon: number;
			counter: boolean;
		}
		class COUNTER_ELEMENT_RES_WAVE extends ElementSkill {
			icon: number;
			counter: boolean;
		}
		class ALL_ELEMENT_RES extends BaseSkill {
			icon: number;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			applyOnConfigs: (a?: any) => any;
			getDescription: () => any;
		}
		class RANGED_DAMAGE extends StatSkill {
			icon: number;
			statType: string;
		}
		class CHARGED_KNOCKBACK extends StatSkill {
			icon: number;
			statType: string;
		}
		class MELEE_DAMAGE extends StatSkill {
			icon: number;
			statType: string;
		}
		class ASSAULT extends StatSkill {
			icon: number;
			statType: string;
		}
		class CRITICAL_DAMAGE extends StatSkill {
			icon: number;
			statType: string;
		}
		class AIMING_SPEED extends StatSkill {
			icon: number;
			statType: string;
		}
		class AIMING_STABILITY extends StatSkill {
			icon: number;
			statType: string;
		}
		class AIMING_MOVEMENT_SPEED extends StatSkill {
			icon: number;
			statType: string;
		}
		class DASH_DISTANCE extends StatSkill {
			icon: number;
			statType: string;
		}
		class ADDITIONAL_DASH_STEP extends StatSkill {
			icon: number;
			statType: string;
		}
		class GUARD_STRENGTH extends StatSkill {
			icon: number;
			statType: string;
		}
		class ADDITIONAL_GUARD_AREA extends StatSkill {
			icon: number;
			statType: string;
		}
		class STUN_THRESHOLD extends StatSkill {
			icon: number;
			statType: string;
		}
		class STATUS_CONDITION_EFFECT_HEAT extends StatSkill {
			icon: number;
			statType: string;
		}
		class STATUS_CONDITION_EFFECT_COLD extends StatSkill {
			icon: number;
			statType: string;
		}
		class STATUS_CONDITION_EFFECT_SHOCK extends StatSkill {
			icon: number;
			statType: string;
		}
		class STATUS_CONDITION_EFFECT_WAVE extends StatSkill {
			icon: number;
			statType: string;
		}
		class STATUS_CONDITION_GUARD_HEAT extends StatSkill {
			icon: number;
			statType: string;
		}
		class STATUS_CONDITION_GUARD_COLD extends StatSkill {
			icon: number;
			statType: string;
		}
		class STATUS_CONDITION_GUARD_SHOCK extends StatSkill {
			icon: number;
			statType: string;
		}
		class STATUS_CONDITION_GUARD_WAVE extends StatSkill {
			icon: number;
			statType: string;
		}
		class STATUS_CONDITION_HEALING extends StatSkill {
			icon: number;
			statType: string;
		}
		class HP_REGENERATION extends StatSkill {
			icon: number;
			statType: string;
		}
		class OVERHEAT_REDUCTION extends StatSkill {
			icon: number;
			statType: string;
		}
		class ITEM_BOOST extends StatSkill {
			icon: number;
			statType: string;
		}
		class APPETITE extends StatSkill {
			icon: number;
			statType: string;
		}
		class SPIKE_DAMAGE extends StatSkill {
			icon: number;
			statType: string;
		}
		class CROSS_COUNTER extends StatSkill {
			icon: number;
			statType: string;
		}
		class BERSERKER extends StatSkill {
			icon: number;
			statType: string;
		}
		class ONCE_MORE extends StatSkill {
			icon: number;
			statType: string;
		}
		class GUARD_SP extends StatSkill {
			icon: number;
			statType: string;
		}
		class ACTIVE_PLACEHOLDER extends BaseSkill {
			icon: number;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			applyOnConfigs: () => any;
		}
		class THROW_SPECIAL_A extends SpecialSkill {
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
		}
		class THROW_SPECIAL_B extends SpecialSkill {
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
		}
		class ATTACK_SPECIAL_A extends SpecialSkill {
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
		}
		class ATTACK_SPECIAL_B extends SpecialSkill {
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
		}
		class DASH_SPECIAL_A extends SpecialSkill {
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
		}
		class DASH_SPECIAL_B extends SpecialSkill {
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
		}
		class GUARD_SPECIAL_A extends SpecialSkill {
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
		}
		class GUARD_SPECIAL_B extends SpecialSkill {
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
		}
	}
	namespace CrossPointsOverview {
		class Entry extends ig.GuiElementBase {
			elementGfx: ig.Image;
			gfx: ig.Image;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			number: any;
			alphaTransition: any;
			element: number;
			preElement: number;
			alpha: number;
			constructor(b?: any);
			init: (b?: any) => any;
			update: () => any;
			updateDrawables: (b?: any) => any;
			updatePoints: () => any;
			hideIcon: (b?: any, a?: any) => any;
			showIcon: (b?: any, a?: any, d?: any) => any;
			doIconTransition: (b?: any, a?: any, d?: any) => any;
		}
	}
	namespace DebugSkillLearner {
		class ItemBoxButton extends ListBoxButton {
			has: any;
			constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
			init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
		}
	}
	namespace CircuitOverviewMenu {
		class Tree extends ig.GuiElementBase {
			gfx: ig.Image;
			buffer: any;
			element: number;
			needsUpdate: boolean;
			overlay: any;
			updater: any;
			done: any;
			_timer: number;
			_alpha: number;
			_firstTime: boolean;
			constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any);
			init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
			updateDrawables: (a?: any) => any;
			show: () => any;
		}
		class FocusOverlay extends ig.FocusGui {
			gfx: ig.Image;
			rotation: number;
			neutral: boolean;
			piv: any;
			points: any;
			element: number;
			submitSound: any;
			focusable: boolean;
			constructor(a?: any, b?: any, c?: any, d?: any);
			init: (a?: any, b?: any, c?: any, d?: any) => any;
			onButtonPress: () => any;
			updateDrawables: (a?: any) => any;
			canPlayFocusSounds: () => any;
			isMouseOver: () => any;
		}
	}
	namespace CircuitTreeDetail {
		class Start extends ig.GuiElementBase {
			gfx: ig.Image;
			element: number;
			children: any;
			dirX: number;
			dirY: number;
			centerPos: number;
			constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any);
			init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any;
			updateDrawables: (b?: any) => any;
		}
		class Node extends ig.FocusGui {
			gfx: ig.Image;
			icons: ig.Image;
			parentGui: any;
			element: number;
			skill: any;
			branchSkill: any;
			coords: {
				x: number;
				y: number;
				w: number;
				h: number;
			};
			dirX: number;
			dirY: number;
			centerPos: number;
			orBranchIndex: any;
			orLevels: any;
			orLeft: boolean;
			blocked: boolean;
			blockID: number;
			submitSound: any;
			blockedSound: any;
			_iconAlpha: number;
			_player: any;
			_buttonGroup: any;
			constructor(a?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, o?: any, m?: any, n?: any);
			init: (a?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, o?: any, m?: any, n?: any) => any;
			updateIconAlpha: () => any;
			getOffsetX: () => any;
			getOffsetY: () => any;
			getDistanceToCursor: () => any;
			updateDrawables: (b?: any) => any;
			onButtonPress: () => any;
			onMouseInteract: (a?: any, b?: any) => any;
			isMouseOver: () => any;
			getNodeFocus: (a?: any) => any;
			_hasParent: (a?: any) => any;
			_checkParentForBlock: (a?: any) => any;
			_calculateAlpha: (a?: any, b?: any) => any;
		}
		class OrBranchLine extends ig.GuiElementBase {
			gfx: ig.Image;
			orSkill: any;
			skill: any;
			element: number;
			dirX: number;
			dirY: number;
			drawDir: number;
			flip: boolean;
			levelOffset: number;
			uidLeft: number;
			uidRight: number;
			uidNext: any;
			uidLeftNext: any;
			uidRightNext: any;
			hasBranchChildren: boolean;
			constructor(a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, h?: any, i?: any);
			init: (a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, h?: any, i?: any) => any;
			updateDrawables: (a?: any) => any;
		}
		class Line extends ig.GuiElementBase {
			gfx: ig.Image;
			endSkill: any;
			element: number;
			dirX: number;
			dirY: number;
			overrideDistance: boolean;
			constructor(a?: any, b?: any, c?: any, d?: any, e?: any, h?: any);
			init: (a?: any, b?: any, c?: any, d?: any, e?: any, h?: any) => any;
			updateDrawables: (a?: any) => any;
		}
	}
	namespace CircuitSwapBranches {
		class Button extends ig.FocusGui {
			gfx: ig.Image;
			submitSound: any;
			blockedSound: any;
			startUID: any;
			element: any;
			constructor(a?: any, d?: any, f?: any, g?: any);
			init: (a?: any, d?: any, f?: any, g?: any) => any;
			updateDrawables: () => any;
			onButtonPress: () => any;
			isMouseOver: () => any;
			getDistanceToCursor: () => any;
		}
	}
	namespace CircuitSwapBranchesInfoBox {
		class Skill extends ig.GuiElementBase {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HALF: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			icons: ig.Image;
			text: any;
			skill: any;
			constructor();
			init: () => any;
			setContent: (a?: any, b?: any, d?: any, g?: any) => any;
			updateDrawables: (a?: any) => any;
		}
	}
	namespace ItemStatusTrade {
		class BaseEntryType extends ig.GuiElementBase {
			gfx: ig.Image;
			tradeGfx: ig.Image;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			type: any;
			itemID: any;
			textEntry: any;
			subEntry: any;
			tradeIcon: any;
			constructor(b?: any, c?: any, e?: any, f?: any);
			init: (b?: any, c?: any, e?: any, f?: any) => any;
			addArrow: () => any;
			setIcon: (b?: any) => any;
		}
	}
	namespace ItemTabbedBox {
		class TabButton extends ig.FocusGui {
			ninepatch: ig.NinePatch;
			text: string;
			icon: string;
			data: any;
			noIcon: boolean;
			textChild: any;
			iconChild: any;
			_smallWidth: number;
			_largeWidth: number;
			constructor(b?: any, a?: any, d?: any, c?: any, e?: any);
			init: (b?: any, a?: any, d?: any, c?: any, e?: any) => any;
			setData: (b?: any) => any;
			getButtonText: () => any;
			setText: (b?: any) => any;
			setWidthToTextSize: () => any;
			updateDrawables: (b?: any) => any;
			setPressed: (b?: any) => any;
			onPressedChange: () => any;
		}
	}
	namespace LOG_GUI_TYPE {
		class LANDMARK extends LogGuiTypeBase {
			constructor(b?: any);
			init: (b?: any) => any;
		}
		class TRADER extends LogGuiTypeBase {
			constructor(b?: any);
			init: (b?: any) => any;
		}
		class LORE extends LogGuiTypeBase {
			constructor(b?: any);
			init: (b?: any) => any;
		}
		class TROPHY extends LogGuiTypeBase {
			constructor(b?: any);
			init: (b?: any) => any;
		}
		class DROP extends LogGuiTypeBase {
			constructor(b?: any);
			init: (b?: any) => any;
		}
		class QUEST extends LogGuiTypeBase {
			constructor(b?: any);
			init: (b?: any) => any;
		}
	}
	namespace StatusViewMainEquipment {
		class Entry extends ig.GuiElementBase {
			gfx: ig.Image;
			textGui: any;
			itemGui: any;
			bodypart: any;
			constructor(a?: any);
			init: (a?: any) => any;
			updateDrawables: (a?: any) => any;
			setItem: (a?: any) => any;
		}
	}
	namespace STATS_ENTRY_TYPE {
		class Time extends StatsBaseEntryGui {
			stat: any;
			map: any;
			value: any;
			updateTime: boolean;
			constructor(a?: any, b?: any, c?: any);
			init: (a?: any, b?: any, c?: any) => any;
			update: () => any;
			setTime: (a?: any, b?: any) => any;
		}
		class Percent extends StatsBaseEntryGui {
			constructor(a?: any, b?: any, c?: any);
			init: (a?: any, b?: any, c?: any) => any;
		}
		class KeyValue extends StatsBaseEntryGui {
			constructor(a?: any, d?: any, c?: any);
			init: (a?: any, d?: any, c?: any) => any;
			setValue: (a?: any, d?: any, c?: any) => any;
			setValueAsNumber: (a?: any, b?: any) => any;
		}
		class KeyCurMax extends StatsBaseEntryGui {
			constructor(a?: any, d?: any, c?: any);
			init: (a?: any, d?: any, c?: any) => any;
		}
		class KeyValuePercent extends StatsBaseEntryGui {
			numberGui: any;
			percentGui: any;
			constructor(a?: any, d?: any, c?: any);
			init: (a?: any, d?: any, c?: any) => any;
		}
		class Separator extends ig.GuiElementBase {
			separatorText: any;
			constructor(a?: any, b?: any, c?: any);
			init: (a?: any, b?: any, c?: any) => any;
		}
		class Logs extends ig.GuiElementBase {
			constructor(a?: any, b?: any, c?: any);
			init: (a?: any, b?: any, c?: any) => any;
		}
	}
	namespace TrophyTabOverview {
		class Entry extends ig.GuiElementBase {
			gfx: ig.Image;
			text: any;
			value: any;
			constructor(a?: any, b?: any, e?: any);
			init: (a?: any, b?: any, e?: any) => any;
			setValue: (a?: any) => any;
			updateDrawables: (a?: any) => any;
		}
	}
	namespace ArenaRoundInfoPage {
		class Medals extends ig.GuiElementBase {
			gfx: ig.Image;
			silver: any;
			gold: any;
			platin: any;
			platUnlocked: boolean;
			constructor();
			init: () => any;
			updateDrawables: (b?: any) => any;
			setValues: (b?: any, a?: any, d?: any, c?: any) => any;
		}
	}
	namespace COMBAT_SHIELDS {
		class DIRECTIONAL extends CombatShield {
			_wm: ig.Config;
			range: number;
			back: boolean;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			isActive: (d?: any, c?: any) => any;
			reduceSpikeDamage: () => any;
		}
		class PARTS extends CombatShield {
			_wm: ig.Config;
			parts: any;
			inverse: boolean;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			isActive: (a?: any, b?: any, e?: any, f?: any) => any;
			reduceSpikeDamage: () => any;
		}
		class PLAYER extends DIRECTIONAL {
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			isActive: (a?: any, b?: any, e?: any, f?: any, g?: any) => any;
			onActivate: (a?: any) => any;
			onDeactivate: (a?: any) => any;
			getDamageFactor: (a?: any, b?: any) => any;
			getDefenseRatio: (a?: any, b?: any) => any;
			reduceSpikeDamage: () => any;
		}
	}
	namespace COMBAT_STUN {
		class START_LOCK extends CombatStun {
			_wm: ig.Config;
			preHit: (a?: any, b?: any) => any;
		}
		class END_LOCK extends CombatStun {
			_wm: ig.Config;
			preHit: (a?: any, b?: any) => any;
		}
		class BLOCK_XY extends CombatStun {
			_wm: ig.Config;
			constructor();
			init: () => any;
			run: (a?: any) => any;
		}
		class BLOCK_FALL extends CombatStun {
			maxTime: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			run: (a?: any) => any;
		}
		class PULL extends CombatStun {
			speed: number;
			distance: number;
			maxTime: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
			run: (a?: any, d?: any) => any;
		}
		class Z_PULL extends CombatStun {
			maxSpeed: number;
			accel: number;
			offZ: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: () => any;
			run: (a?: any, b?: any) => any;
		}
		class Z_VEL extends CombatStun {
			value: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
		class Z_BOUNCINESS extends CombatStun {
			value: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			start: (a?: any) => any;
		}
	}
	namespace COMBAT_CONDITION {
		class RANDOM extends ig.Class {
			max: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any, b?: any) => any;
		}
		class HP_BELOW extends ig.Class {
			value: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class HAS_SP extends ig.Class {
			min: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class SPAWN_POINT_DISTANCE extends ig.Class {
			min: number;
			max: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (b?: any) => any;
		}
		class TARGET_REACHABLE extends ig.Class {
			distance: number;
			throwing: boolean;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class TARGET_DISTANCE extends ig.Class {
			min: number;
			max: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class TARGET_STANDING_ON_SELF extends ig.Class {
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class TARGET_OVERLAP extends ig.Class {
			ignoreZ: boolean;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class TARGET_FACE extends ig.Class {
			maxAngle: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (b?: any) => any;
		}
		class FACING_TARGET extends ig.Class {
			maxAngle: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (b?: any) => any;
		}
		class ENTITY_DISTANCE_OVER extends ig.Class {
			entity: any;
			distance: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class ENTITY_COORD_DELTA_WITHIN extends ig.Class {
			entity: any;
			distance: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class TARGET_X_DISTANCE extends ig.Class {
			min: number;
			max: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (b?: any) => any;
		}
		class TARGET_Y_DISTANCE_BELOW extends ig.Class {
			value: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class TARGET_Z_DISTANCE extends ig.Class {
			zMin: number;
			zMax: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class TARGET_ALIVE extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any) => any;
		}
		class HAS_TARGET extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any) => any;
		}
		class HP_BREAK extends ig.Class {
			min: any;
			max: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class HP_BREAK_GLOBAL extends ig.Class {
			min: any;
			max: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: () => any;
		}
		class HAS_SHIELD extends ig.Class {
			name: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class ON_GROUND extends ig.Class {
			name: any;
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any) => any;
		}
		class HAS_PROXY extends ig.Class {
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class ENTERED_STATE extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any) => any;
		}
		class CURRENT_STATE extends ig.Class {
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class ENEMY_COUNT extends ig.Class {
			count: number;
			sameType: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class TRACKER_READY extends ig.Class {
			name: number;
			noResetOnPerformed: boolean;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any, b?: any, d?: any, g?: any) => any;
			onReactionActivate: (a?: any) => any;
			onPerformed: (a?: any) => any;
		}
		class ACTION_TOKEN extends ig.Class {
			name: number;
			time: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: () => any;
		}
		class MULTI_TOKEN extends ig.Class {
			names: any;
			times: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: () => any;
		}
		class VAR_CONDITION extends ig.Class {
			condition: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class ATTRIB_IS_TRUE extends ig.Class {
			name: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class BLOCKING_FREE_LINE extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any) => any;
		}
		class BALL_CHARGE extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class BALL_SMALL extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class ATTACK_FROM_ENTITY extends ig.Class {
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class DAMAGE_FACTOR extends ig.Class {
			min: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class HAS_BLOCKED_DAMAGE extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any) => any;
		}
		class HAS_BLOCKED_HITS extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any) => any;
		}
		class HAS_BLOCKED_ENTITY extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any) => any;
		}
		class PART_HIT extends ig.Class {
			partName: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class HAS_HINT extends ig.Class {
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class IS_BALL extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class IS_SHIELDED extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class ELEMENT_HIT extends ig.Class {
			element: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class ELEMENT_HIT_ATTRIB extends ig.Class {
			element: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
		class ELEMENT_MODE extends ig.Class {
			element: any;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class COMBO_HITS extends ig.Class {
			min: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class COMBO_TIME extends ig.Class {
			min: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
			onPrePerformed: (a?: any) => any;
		}
		class STUN_ESCAPE extends ig.Class {
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
			onPrePerformed: (a?: any) => any;
		}
		class COMBO_DAMAGE extends ig.Class {
			min: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class POI_IS_CLOSE extends ig.Class {
			poiFilter: number;
			distance: number;
			_wm: ig.Config;
			constructor(a?: any);
			init: (a?: any) => any;
			check: (a?: any) => any;
		}
		class NAVIGATION_SUCCESS extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any) => any;
		}
		class COMPRESSOR_DETOUR_CONDITION extends ig.Class {
			_wm: ig.Config;
			constructor();
			init: () => any;
			check: (a?: any, b?: any, d?: any) => any;
		}
	}
	namespace ENEMY_REACTION {
		class HIT_REACTION implements ig.EnemyReactionBase {
			preAction: any;
			preSwitchState: any;
			blockFurtherHits: boolean;
			damageFactor: any;
			attackType: number;
			flyLevel: any;
			forceStable: boolean;
			conditions: any;
			dramaticEffect: any;
			alignFace: boolean;
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			onActivate: (a?: any) => any;
			needInterrupt: () => any;
			hitApply: (a?: any, b?: any, c?: any, e?: any, f?: any) => any;
			checkHit: (a?: any, b?: any, c?: any, d?: any, e?: any) => any;
		}
		class TARGET_DISTANCE implements ig.EnemyReactionBase {
			minDistance: any;
			maxDistance: any;
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			preApply: (a?: any) => any;
			check: (a?: any) => any;
			_subCheck: (a?: any, d?: any) => any;
		}
		class MOVEMENT_BLOCK implements ig.EnemyReactionBase {
			preSwitchState: any;
			angle: any;
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			preApply: (a?: any) => any;
			check: (a?: any) => any;
		}
		class COLLAB implements ig.EnemyReactionBase {
			collabKey: any;
			conditions: any;
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			isReady: (a?: any, b?: any) => any;
			apply: (a?: any, b?: any) => any;
		}
		class GUARD_COUNTER implements ig.EnemyReactionBase {
			_wm: ig.Config;
			sound: ig.Sound;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			onGuardCounterCheck: (a?: any) => any;
			onGuardCountered: (a?: any, b?: any) => any;
		}
		class ENEMY_EVENT implements ig.EnemyReactionBase {
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			checkEnemyEvent: (a?: any, b?: any, c?: any, d?: any) => any;
			onEnemyEvent: (a?: any, b?: any) => any;
		}
		class STORE_RELEASE implements ig.EnemyReactionBase {
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			onStoredRelease: (a?: any) => any;
		}
		class DODGE implements ig.EnemyReactionBase {
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			check: (a?: any) => any;
		}
		class COUNTER_COUNTER implements ig.EnemyReactionBase {
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			preApply: (a?: any) => any;
			onActivate: (a?: any) => any;
			check: (a?: any) => any;
		}
		class FALL implements ig.EnemyReactionBase {
			_wm: ig.Config;
			constructor(a?: any, b?: any);
			init: (a?: any, b?: any) => any;
			onFall: (a?: any) => any;
			checkFall: (a?: any) => any;
		}
	}
	namespace ENEMY_TRACKER {
		class TIME extends EnemyTracker {
			target: number;
			current: number;
			initRandom: number;
			resetRandom: number;
			noStateReset: boolean;
			hpBreakFactor: any;
			_wm: ig.Config;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			update: () => any;
			onStateChange: (b?: any) => any;
			onConditionEval: (b?: any) => any;
			onPerformed: (b?: any, a?: any) => any;
			_initTimer: (b?: any) => any;
			reset: (b?: any, a?: any) => any;
			_getTarget: (b?: any) => any;
		}
		class HIT extends EnemyTracker {
			target: number;
			current: number;
			notStateInit: boolean;
			hpBreakTargets: any;
			noStateReset: boolean;
			_wm: ig.Config;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			onStateChange: () => any;
			onReactionActivate: (b?: any) => any;
			onConditionEval: (b?: any, a?: any, d?: any, c?: any) => any;
			onPerformed: (b?: any) => any;
			reset: (b?: any, a?: any) => any;
			_getTarget: (b?: any) => any;
		}
		class HP extends EnemyTracker {
			target: number;
			hpReduced: number;
			notStateInit: boolean;
			_wm: ig.Config;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			onStateChange: () => any;
			onReactionActivate: (b?: any) => any;
			onConditionEval: (b?: any, a?: any, d?: any, c?: any) => any;
			onPerformed: (b?: any) => any;
			reset: (b?: any, a?: any) => any;
		}
	}
	namespace PLAYER_SKIN {
		class Appearance extends PlayerSkinBase {
			animSheet: any;
			fx: any;
			guiImage: any;
			constructSkin: (a?: any) => any;
			clearCached: () => any;
		}
		class StepEffect extends PlayerSkinBase {
			fx: any;
			constructSkin: (a?: any) => any;
			clearCached: () => any;
		}
		class Aura extends PlayerSkinBase {
			fx: any;
			constructSkin: (a?: any) => any;
			clearCached: () => any;
		}
		class Pet extends PlayerSkinBase {
			animSheet: any;
			walkAnims: any;
			petOffsets: any;
			actorConfig: any;
			constructSkin: (a?: any) => any;
			clearCached: () => any;
		}
	}
	namespace BALL_CHANGER_TYPE {
		class CHANGE_DIR extends BallChangerType {
			_wm: ig.Config;
			dir: any;
			sound: ig.Sound;
			constructor(a?: any);
			init: (a?: any) => any;
			onBallTouch: (a?: any) => any;
		}
		class CHANGE_SPEED extends BallChangerType {
			_wm: ig.Config;
			factor: any;
			waitForBallKill: boolean;
			sound: {
				speedUp: ig.Sound;
				slowDown: ig.Sound;
			};
			constructor(a?: any);
			init: (a?: any) => any;
			onBallTouch: (a?: any) => any;
		}
		class RESET_SPEED extends BallChangerType {
			_wm: ig.Config;
			factor: any;
			sound: {
				reset: ig.Sound;
				speedUp: ig.Sound;
				slowDown: ig.Sound;
			};
			constructor();
			init: () => any;
			onBallTouch: (a?: any) => any;
		}
		class CHANGE_ELEMENT extends BallChangerType {
			_wm: ig.Config;
			element: any;
			effects: ig.EffectSheet;
			fxKey: any;
			constructor(a?: any);
			init: (a?: any) => any;
			onBallTouch: (a?: any, b?: any) => any;
		}
	}
	namespace QUICK_INFO_BOXES {
		class Enemy extends ig.BoxGui {
			ninepatch: ig.NinePatch;
			transitions: {
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
			};
			title: any;
			arrow: any;
			baseHp: any;
			baseAttack: any;
			baseDefense: any;
			baseFocus: any;
			resistance: any;
			anchor: any;
			enemy: any;
			active: boolean;
			constructor();
			init: () => any;
			updateDrawables: (a?: any) => any;
			show: (a?: any) => any;
			hide: (a?: any) => any;
			setData: (b?: any, e?: any) => any;
			createStatusLine: (a?: any, b?: any, d?: any, g?: any) => any;
			alignToBase: (a?: any) => any;
		}
	}
	namespace QUICK_MENU_TYPES {
		class Analyzable extends QuickMenuTypesBase {
			nameGui: any;
			displayNameAllTime: boolean;
			constructor(a?: any, b?: any, c?: any);
			init: (a?: any, b?: any, c?: any) => any;
			onAnalysisEnter: () => any;
			onAnalysisExit: () => any;
			focusGained: () => any;
			focusLost: () => any;
			alignGuiPosition: () => any;
		}
		class NPC extends QuickMenuTypesBase {
			color: any;
			nameGui: any;
			displayNameAllTime: boolean;
			constructor(a?: any, b?: any, c?: any);
			init: (a?: any, b?: any, c?: any) => any;
			onAnalysisEnter: () => any;
			onAnalysisExit: () => any;
			focusGained: () => any;
			focusLost: () => any;
			alignGuiPosition: () => any;
		}
		class Enemy extends QuickMenuTypesBase {
			color: any;
			level: any;
			constructor(a?: any, b?: any, c?: any);
			init: (a?: any, b?: any, c?: any) => any;
			alignGuiPosition: () => any;
		}
	}
	namespace QUEST_SUB_TASK {
		class COLLECT extends QuestSubTaskBase {
			_wm: ig.Config;
			item: number;
			amount: number;
			keepItems: boolean;
			hideName: boolean;
			hideMax: boolean;
			constructor(b?: any);
			init: (b?: any) => any;
			initState: (b?: any) => any;
			updateState: (b?: any, a?: any, d?: any, c?: any) => any;
			getCurrentValue: (b?: any, a?: any) => any;
			finalize: () => any;
			isFulfilled: (b?: any) => any;
			reset: () => any;
		}
		class KILL extends QuestSubTaskBase {
			_wm: ig.Config;
			enemy: number;
			amount: number;
			constructor(b?: any);
			init: (b?: any) => any;
			initState: (b?: any) => any;
			updateState: (b?: any, a?: any) => any;
			getCurrentValue: (b?: any, a?: any) => any;
			isFulfilled: (b?: any) => any;
			reset: (b?: any) => any;
		}
		class CONDITION extends QuestSubTaskBase {
			_wm: ig.Config;
			text: any;
			short: any;
			label: any;
			constructor(b?: any);
			init: (b?: any) => any;
			initState: (b?: any) => any;
			updateState: (b?: any, a?: any, d?: any) => any;
			getCurrentValue: (b?: any, a?: any) => any;
			isFulfilled: (b?: any) => any;
			reset: (b?: any, a?: any) => any;
		}
		class QUEST extends QuestSubTaskBase {
			_wm: ig.Config;
			quest: any;
			text: any;
			short: any;
			constructor(b?: any);
			init: (b?: any) => any;
			initState: (b?: any) => any;
			updateState: (b?: any, a?: any, d?: any, c?: any) => any;
			getCurrentValue: (b?: any, a?: any) => any;
			isFulfilled: (b?: any) => any;
		}
		class LANDMARK extends QuestSubTaskBase {
			_wm: ig.Config;
			area: number;
			amount: number;
			constructor(b?: any);
			init: (b?: any) => any;
			initState: (b?: any) => any;
			updateState: (b?: any, a?: any, d?: any, c?: any) => any;
			getCurrentValue: (b?: any, a?: any) => any;
			isFulfilled: (b?: any) => any;
		}
	}
	namespace ArenaSummary {
		class Entry extends ig.SimpleGui {
			gfx: ig.Image;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			keyGui: any;
			valueGui: any;
			extraKey: any;
			extraValue: any;
			constructor(a?: any, b?: any, d?: any, g?: any, h?: any, i?: any, j?: any, k?: any);
			init: (a?: any, b?: any, d?: any, g?: any, h?: any, i?: any, j?: any, k?: any) => any;
			updateDrawables: (a?: any) => any;
		}
	}
	namespace ArenaCupOverview {
		class MedalEntry extends ig.GuiElementBase {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			gfx: ig.Image;
			medal: number;
			medalGui: any;
			overlay: any;
			rush: any;
			constructor(b?: any, a?: any, d?: any, c?: any);
			init: (b?: any, a?: any, d?: any, c?: any) => any;
		}
	}
	namespace ArenaChainHud {
		class Number extends ig.GuiElementBase {
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			one: any;
			ten: any;
			hun: any;
			constructor(a?: any);
			init: (a?: any) => any;
			setChainNumber: (a?: any) => any;
			setPulse: (a?: any) => any;
			rumble: () => any;
		}
		class Digit extends ig.GuiElementBase {
			gfx: ig.Image;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
				LIT: {
					state: {
						scaleX: number;
						scaleY: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			digit: any;
			timer: number;
			rumbleHandle: number;
			pulsing: boolean;
			pulseAfter: boolean;
			rush: boolean;
			constructor(a?: any);
			init: (a?: any) => any;
			setDigit: (a?: any, b?: any) => any;
			setPulse: (a?: any) => any;
			rumble: () => any;
			update: () => any;
			updateDrawables: (a?: any) => any;
		}
	}
	namespace ArenaRoundStartHud {
		class ChallengeEntry extends ig.GuiElementBase {
			gfx: ig.Image;
			transitions: {
				DEFAULT: {
					state: {[key: string]: any};
					time: number;
					timeFunction: any;
				};
				HIDDEN: {
					state: {
						alpha: number;
					};
					time: number;
					timeFunction: any;
				};
			};
			icon: number;
			challenge: any;
			global: boolean;
			constructor(b?: any, a?: any);
			init: (b?: any, a?: any) => any;
			updateDrawables: (b?: any) => any;
		}
	}
}
