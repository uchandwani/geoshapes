		#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <width> <height>"
  exit 1
fi

WIDTH=$1
HEIGHT=$2
OUTPUT="DP-1"

MODELINE=$(cvt $WIDTH $HEIGHT | grep Modeline | cut -d' ' -f 2-)

NAME=$(echo $MODELINE | awk '{print $1}')

xrandr --newmode $MODELINE
xrandr --addmode $OUTPUT $NAME
xrandr --output $OUTPUT --mode $NAME

echo "Resolution set to ${WIDTH}x${HEIGHT} on ${OUTPUT}"

