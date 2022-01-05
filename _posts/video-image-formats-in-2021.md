---
title: 'List of Video/Image Formats in 2021 Supporting Alpha Channels'
subtitle: A list of modern video formats that support alpha channels (aka “transparency layers”)
excerpt: Almost every forum I’ve reviewed references an article that has not been updated since 2008. Since it is now 2021 and over a decade later, I figured I would try to provide an updated version. This should be especially useful for Twitch streamers (stream overlays) and OBS/Streamlabs users.
# Cover Photos MUST be 4x3 resolution
coverImage: /img/blog/ExampleOfAlphaLayers.png
date: '2021-01-21'
categories: ['education', 'announcements']
tags: ['adobe premier', 'after effects', 'alpha channels', 'Apple Pro res 4444', 'OBS/Streamlabs', 'transparency', 'Twitch', 'video codecs', 'video production']
author:
  name: Jordan Lambrecht
  picture: /img/placeholder01.png
  profileURL: '/'
ogImage:
  url: /img/blog/ExampleOfAlphaLayers.png
---
What an odd thing: I've been scouring the internet recently trying to find modern video formats that support [alpha](https://en.wikipedia.org/wiki/Alpha_compositing) channels (aka "transparency layers"). Almost every forum I've reviewed references [an article that has not been updated since 2008](https://www.digitalrebellion.com/blog/posts/list_of_video_formats_supporting_alpha_channels). Since it is now 2021 and over a decade later, I figured I would try to provide an updated version. This should be especially useful for Twitch streamers (stream overlays) and OBS/Streamlabs users.

What are alpha channels?
------------------------

Alpha channels are essentially layers of transparency on an image or video. They're color components representing the degree of transparency (or opacity) of a color (i.e., the red, green and blue channels). They are used to determine how specific pixels are rendered when blended with other pixels. Generally, alpha channels are represented by a white and gray checkerboard or a solid black background.

What are alpha channels used for?
---------------------------------

So. Many. Things. They're used for compositing images and footage, making memes and product cutouts, or in my case - displaying a video on the web on top of a colored background (this is an issue that deserves its own blog post).

Straight versus premultiplied
-----------------------------

There are two ways of depicting an alpha channel. Straight (also called "unmatted," or "unassociated") and premultiplied ("matted," or "associated"). These only affect the color channels, and actually aren't related to the alpha channel itself.

Straight alpha channels can only be loaded in applications that support it, otherwise, it'll appear as a black screen. However, they retain more accurate color information than pre-multiplied alpha channels do. Straight channels retain more accurate color information than premultiplied channels. This is because it separates the RGB color values from the alpha values and stores them independently of each other - hence the term "unassociated". It doesn't matter what you place the image on, it'll look the same. You'll want to use straight alpha channels 98% of the time.

Premultiplied alpha channels work a bit differently. It mixes the alpha channels with the RGB color values ahead of time upon export. The upside to this is the image or video can be viewed agnostically on almost anything. However, it has a big negative side effect: since the image's alpha is already determined upon export, it'll take whatever the background WAS in the program you used to create it and mix it with the image, leaving a halo-like edge around your cut-out. This happens because the colors of semitransparent areas are shifted toward the background color in proportion to their degree of transparency, aka "matted" onto the image. Certain programs like After Effects have the ability to "unmult" layers, removing this effect for you.

If you're interested in the color science behind it all, I recommend checking out [this article](https://www.provideocoalition.com/alpha-channels-premultiplied-vs-straight/). It's a bit lengthy, but it provides extremely well-written in-depth information.

Okay, Now Onto The List
-----------------------

Please let me know if I'm missing any in the comments below. This is absolutely an incomplete list. I've removed several obscure and unsupported types from the original post.

| File Format / Codec | Maximum Alpha Bit-Depth | Browser Support | Media Type | Pros & Cons / Notes |
| Apple Pro res 4444 | 16-bit | none | Video / .mov | Massive, uncompressed videos. Generally used for storing masters. |
| HEVC / h.265 | 10-bit | [Limited to Safari](https://caniuse.com/hevc) | video / .HEVC | Meant to be the successor to h.264 |
| WebM (VP8 or VP9 video codecs) | 12-bit | [Pretty Decent](https://caniuse.com/webm) | Video / .WebM | Note: Only Chrome will display alpha. Good info [here](https://stackoverflow.com/questions/56532287/video-with-transparency-how-to-display-alpha-channel-of-webm-files-correctly-on) |
| OpenEXR | 32-bit | none | Image / .exr | has largest HDR spread |
| PNG | 16-bit | [Completely Supported](https://caniuse.com/png-alpha) | Image / .png | Fun fact, you [can animate PNGs](https://ezgif.com/help/making-animated-png). |
| TIFF | 32-bit | None | Image / .tiff | Lossy |
| Animated PNG | 24-bit | [Pretty Decent](https://caniuse.com/apng) | Image / .apng | Way better option than Gifs |
| GIF | 8-bit | Commonly Supported | Image / .gif | Note: Browsers generally do not support gif alpha layers. Generally are bulky with terrible compression. |

Note: h.264 AKA MP4 does NOT support alpha channels.

Additional Note: I've decided to not include FLV on this list. It's an old, sunset format riddled with security issues and vulnerabilities.
