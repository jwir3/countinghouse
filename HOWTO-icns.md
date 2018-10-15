How to create .icns images from PNGs
=================

1. Create a folder on the desktop - `logo.iconset`.
2. Open the PNG image (in 1024x1024 resolution) you want to create in Preview.
3. Save the PNG image with name `icon_512x512@2x.png` in the `logo.iconset` directory.
4. Click the markdown button in preview to open the markdown toolbar.
5. Click the resize button.
6. Resize the image to 512x512 (50 percent).
7. Use `CMD-Shift-S` to save a copy. Name this copy `icon_512x512.png`.
8. Create another copy and save it, called `icon_256x256@2x.png`.
9. Repeat for `icon_256x256.png`, `icon_128x128@2x.png`, `icon_128x128.png`, `icon_32x32@2x.png`, `icon_32x32.png`, `icon_16x16@2x.png`, and `icon_16x16.png`. You should have 10 files in the directory.
10. On the command line, run `iconutil -c icns ~/Desktop/logo.iconset`. You should now have a `logo.icns` file on your desktop. You can view this file to verify accuracy using Preview.
