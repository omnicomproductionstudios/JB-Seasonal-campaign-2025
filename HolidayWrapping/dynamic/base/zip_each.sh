#!/bin/bash

# Current directory ke saare folders loop me
for folder in */ ; do
  # Folder ke naam se .zip banao
  zip -r "${folder%/}.zip" "$folder"
done

echo "Sabhi folders ke alag-alag zip ban gaye ✅"

