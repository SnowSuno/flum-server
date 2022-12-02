# mp4로 변환해주는 코드
# 대충 이거 노드로 구현하면 됩니다
cp "./media/live/test2/index.m3u8" "./media/live/test2/copy.m3u8" \
&& echo "#EXT-X-ENDLIST" >> ./media/live/test2/copy.m3u8 \
&& ffmpeg -i "./media/live/test2/copy.m3u8" -bsf:a aac_adtstoasc -vcodec copy -c copy "file.mp4"
