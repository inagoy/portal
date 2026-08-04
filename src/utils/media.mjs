/** @typedef {{ platform: "spotify" | "youtube", embedUrl: string, height?: number }} InlineMedia */

/** @returns {InlineMedia | null} */
export function getInlineMedia(projectUrl) {
  try {
    const parsedUrl = new URL(projectUrl);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");

    if (hostname === "open.spotify.com") {
      const segments = parsedUrl.pathname.split("/").filter(Boolean);
      const mediaIndex = segments.findIndex((segment) =>
        ["album", "track", "playlist", "episode", "show"].includes(segment),
      );
      const mediaType = segments[mediaIndex];
      const mediaId = segments[mediaIndex + 1];

      if (mediaType && mediaId) {
        return {
          platform: "spotify",
          embedUrl: `https://open.spotify.com/embed/${mediaType}/${mediaId}?utm_source=generator&theme=0`,
          height: mediaType === "track" || mediaType === "episode" ? 152 : mediaType === "album" ? 480 : 352,
        };
      }
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return {
          platform: "youtube",
          embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`,
        };
      }
    }

    if (hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.split("/").filter(Boolean)[0];

      if (videoId) {
        return {
          platform: "youtube",
          embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`,
        };
      }
    }
  } catch {
    return null;
  }

  return null;
}
