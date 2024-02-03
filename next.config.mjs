import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  // Your other options,
  fallbacks: {
    // Failed page requests fallback to this.
    document: "/~offline",
    // This is for /_next/.../.json files.
    data: "/fallback.json",
    // This is for images.
    image: "/fallback.webp",
    // This is for audio files.
    audio: "/fallback.mp3",
    // This is for video files.
    video: "/fallback.mp4",
    // This is for fonts.
    font: "/ha.woff2",
  },
});

export default withPWA({
  // Your Next.js config
});