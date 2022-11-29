import NodeMediaServer from "node-media-server";
import { BINARY_PATH, MEDIA_PATH } from "./path";
import * as path from "path";

const nms = new NodeMediaServer({
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30,
  },
  http: {
    port: 8000,
    allow_origin: "*",
    mediaroot: MEDIA_PATH,
  },
  trans: {
    ffmpeg: path.join(BINARY_PATH, "ffmpeg"),
    tasks: [
      {
        app: "live",
        hls: true,
        hlsFlags: "[hls_time=1hls_list_size=10:hls_flags=delete_segments]",
      },
    ],
  },
});

nms.run();
