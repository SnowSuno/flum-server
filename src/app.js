const NodeMediaServer = require("node-media-server");
const { BINARY_PATH, MEDIA_PATH } = require("./path");

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
    ffmpeg: BINARY_PATH,
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
