import assert from "node:assert/strict";
import { getInlineMedia } from "../src/utils/media.mjs";

assert.equal(getInlineMedia("https://youtu.be/91WK10WI6Ug")?.embedUrl, "https://www.youtube-nocookie.com/embed/91WK10WI6Ug?rel=0");
assert.equal(getInlineMedia("https://open.spotify.com/intl-es/track/abc123")?.embedUrl, "https://open.spotify.com/embed/track/abc123?utm_source=generator&theme=0");
assert.equal(getInlineMedia("https://example.com"), null);
