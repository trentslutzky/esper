#!/bin/bash


CUR_DISPLAY=$(swaymsg -t get_tree | jq -r --unbuffered --compact-output '
(
    select(.name == "root") |
        first(.focus[]) )')

CUR_WORKSPACE=$(swaymsg -t get_tree | jq -r --unbuffered --compact-output "
(
    select(.name == \"root\") |
    .nodes[] |
    select(.id == $CUR_DISPLAY) |
    .current_workspace )")

TO_WORKSPACE=$CUR_WORKSPACE

if [ $1 == "prev" ]; then
    TO_WORKSPACE=$(expr $CUR_WORKSPACE - 1)
elif [ $1 == "next" ]; then
    TO_WORKSPACE=$(expr $CUR_WORKSPACE + 1)
fi

if [ $TO_WORKSPACE -eq 9 ]; then
    TO_WORKSPACE=1
elif [ $TO_WORKSPACE -eq 10 ]; then
    TO_WORKSPACE=13
elif [ $TO_WORKSPACE -eq 14 ]; then
    TO_WORKSPACE=11
elif [ $TO_WORKSPACE -eq 0 ]; then
    TO_WORKSPACE=8
fi

swaymsg workspace number $TO_WORKSPACE
