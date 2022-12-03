const path = require("path");

// TODO : 파일 경로 환경변수로 분리하기
const BASE_PATH = path.join(__dirname, "..");

const MEDIA_PATH = path.join(BASE_PATH, "media");
const BINARY_PATH = process.env.FFMPEG_PATH || path.join(BASE_PATH, "bin/ffmpeg");

module.exports = { BASE_PATH, MEDIA_PATH, BINARY_PATH };
