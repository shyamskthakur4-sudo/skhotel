PUT YOUR HOTEL PHOTOS HERE
==========================

Drop the images from your Google Drive folder into THIS folder
(public/images/), then point the site at them.

HOW TO SWAP IN YOUR OWN PHOTOS
------------------------------
1. Copy your photos here, e.g.:
     public/images/hero.jpg
     public/images/room-executive.jpg
     public/images/room-deluxe.jpg
     public/images/room-super-deluxe.jpg
     public/images/restaurant.jpg
     public/images/banquet.jpg
     public/images/temple.jpg

2. Open  src/data/images.js  and replace the stock URLs with local paths.
   Example — change:
     hero: u('1566073771259-6a8506099945', 2000),
   to:
     hero: '/images/hero.jpg',

   (A path that starts with /images/ is served from this folder.)

3. Do the same for the GALLERY list at the bottom of that file.

That's it — the whole site updates automatically. No other file needs editing.

TIP: use landscape photos (approx 1600px wide) and keep each under ~400 KB
for fast loading. JPG or WebP both work.
