/*!
 * AEML Jukebox - config.js
 * (c) 2026 AEML, NTUST. All rights reserved.
 * Site settings. Keep this file pure ASCII; put any CJK text in index.html.
 */
window.AEML_JUKEBOX_CONFIG = {
  // Where the player lives (GitHub Pages). Used by the pop-out button.
  baseUrl: 'https://chuntaoc.github.io/jukebox/',

  // Default playlist (Google Sheet shared as "Anyone with the link can view").
  // Columns: artist | title | YouTube link  (+ optional genre, mood, start, end, lrc, enabled)
  defaultSheet: { id: '1aN7oW0jNO83rgAvHOzm6gHhRxZrQu0E4zFrPjZwXDtk', gid: '0' },

  // Visitor requests: Google Form -> responses sheet -> only rows ticked "approved" are shown.
  // Fill these in after creating the form (see README). Leave empty to hide the feature.
  requestFormUrl: '',
  requestSheet: { id: '', gid: '' },

  // Sites allowed to control the player through postMessage (Blogger pages that embed it).
  // Matching is by hostname suffix. Add your custom blog domain here if you use one.
  allowedParents: ['blogspot.com', 'blogger.com', 'chuntaoc.github.io', 'localhost', '127.0.0.1'],

  defaults: {
    lang: 'zh',          // 'zh' | 'both' | 'en'
    theme: 'neon',       // 'neon' | 'vinyl' | 'minimal' | 'pixel' | 'cassette'
    video: false,        // video off by default (audio mode)
    mode: 'loop',        // 'seq' | 'loop' | 'one' | 'shuffle' | 'smart'
    crossfade: 3,        // seconds (0 = off). Automatically off on phones.
    gapless: true,
    visualizer: true,
    showRequests: true,
    volume: 80
  },

  // When a song has no "LRC URL", search LRCLIB (lrclib.net) by artist + title for time-synced lyrics.
  autoLyrics: true,

  popup: { width: 440, height: 840, name: 'aeml_jukebox' }
};
