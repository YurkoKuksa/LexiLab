// config/assets.js
export const AssetsConfig = {
  images: {
    getUrl: ({ topicSlug, key }) => `/assets/images/${topicSlug}/${key}.webp`,
  },

  sounds: {
    getUrl: ({ lang, key }) => `/assets/sounds/${lang}/${key}.mp3`,
  },
};
