import * as path from "path";

// TODO : 파일 경로 환경변수로 분리하기
export const BASE_PATH = path.join(__dirname, "..");

export const MEDIA_PATH = path.join(BASE_PATH, "media");
export const BINARY_PATH = path.join(BASE_PATH, "bin");
