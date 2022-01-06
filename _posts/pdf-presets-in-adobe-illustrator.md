---
title: 'PDF Presets in Adobe Illustrator. Which one should you use?'
subtitle: An in-depth analysis on the science behind Adobe Illustrator's PDF presets
excerpt: An in-depth analysis on the science behind Adobe Illustrator's PDF presets
# Cover Photos MUST be 4x3 resolution
coverImage: /img/blog/Illustrator_export_pdf_presets.jpg
date: '2021-02-26'
categories: ['Research', 'education']
tags:
  [
    'adobe',
    ' Adobe PDF Presets',
    'export settings',
    'Flatten Transparency',
    'illustrator',
    'Illustrator Tutorial',
    'Outline Text',
    'PDF',
    'PDF:X-1a:2001',
    'PDF:X-3:2002',
    'PDF:X-4:2008',
    'PDF/x',
  ]
author:
  name: Jordan Lambrecht
ogImage:
  url: /img/blog/Illustrator_export_pdf_presets.jpg
---

Today after critique in my Typography II class I asked my students to turn in PDF deliverables. One of my students asked me what the proper way of exporting to PDF from Illustrator was. I rambled off some passed-down knowledge of long-forgotten origin that a design professor from a different life must have maybe told me: PDF/X-1a:2001. As I was driving home I had a realization. I've been both professionally using AND teaching x-1a:2001 as a standard for almost a decade and I have no idea why, what it means, and if it's still even relevant.

Design Research is a fundamental principle that I try to instill into my students. Understanding the inner-workings of the tools and methodologies we use is the natural Great Filter of the design industry. That being, the most successful are those who have a deep comprehension and command of visual language. Then there are those who never wade deeper than regurgitating Instagram trends and putting random borders around their work because they just "thought it looked empty without it". I start every semester off with the same lengthy soapbox about how hard drives and pixels work, and blah blah blah. Today I felt like a total hypocrite.

## Turns out, there really isn't a lot of easily digestible information on the internet.

Apparently, people don't find PDF export standards sexy enough to write about. Who knew?

I'll save you a ton of research and time. While I'm not overly technical in this article, I know a lot of people want to get to the meat and potatoes. Scroll down if you just care about my findings and not the journey I took to get there.

For me, I hold three big things super important. This may not be what computer scientists care about or what your printer will necessarily want, so take it with a grain of salt.

## Too Long, Didn't Read:

Key takeaways:

- X-1a:2001 if you're sending it to Moo, Sticker Mule, or a printer that cares about file size
- Use Press Quality if you're sending it to a commercial printer
- Use High-Quality Print if you're sending it to the printer in your bathroom
- X-4:2008 if you're sending it to a client. Or if you intend on printing but you don't use any weird transparency-altering effects like drop shadows etc. This is still the best choice overall, but be sure to flatten transparency yourself if you're sending it to print.
- X-3:2002 if you're too lazy to flatten your transparency yourself.
- If it's non-interactive and you have a plan for accessibility, outline your type before exporting.

## Auto outline Illustrator text upon PDF export

![You can create a Adobe Illustrator PDF custom export option that outlines text automatically upon export](/img/blog/PixelBakery.com_Outline-text-export-pdf-preset-edited.png)
_You can create a Adobe Illustrator PDF custom export option that outlines text automatically upon export_

Creating a custom PDF export preset that automatically outlines all of your text

Generally speaking, it's a good idea to outline all of your text when you export PDFs in Illustrator. This is a huge pain for dynamic content. You essentially have to have two copies -- one that you've outlined and one that you can keep as a working version.

Example: We print our business cards through [Moo](https://moo.com/). Moo doesn't have our primary brand typefaces, Big John Pro and Gilroy, on their press computers because it's a licensed font. They need to receive a press-ready PDF that outlines text containing those fonts, otherwise, it'll default to a system font. It doesn't know how to render it.

You can't edit text after it's been outlined. The problem: we hire new employees. This means we create a lot of different business cards and update the working file every time we onboard someone new.

This leaves us with two copies, as mentioned above. The solution: build a custom export profile that automatically does this for us. We get the best of both worlds -- print-compliant files and editability.

** Edit > Adobe PDF Presets... > **

then create a new preset by hitting the + button, choose an initial format that supports transparency flattening such as X-1a:2001

Then, under the advanced tab, hit 'custom' to the right of 'Preset'. This will open your 'Custom Transparency Flattener Options' tab. This is where you'll select 'Convert All Text to Outlines'. I always select 'Convert All Strokes to Outlines' to be on the safe side as well.

Set any other settings you want and save it. Out of sight, out of mind.

In case you're feeling lazy, I've created the preset for you that you can [download here](https://media.pixelbakery.com/pb/Adobe_PDF_Export_Preset_Outline_Text.joboptions).

## Here's what I care about in no particular order:

- File Sizes
- Not having to outline all my text in the working file (discussed above)
- Compression Quality
- Color accuracy
- Accessibility and standardization

### File Size

There's really nothing worse than having an upset client call you because you unknowingly sent them a link to an 85Mb PDF and they tried to download it on their phone. This is, after a lot of reflection, the primary reason I've always stuck with X-1a:2001. It takes very very large files and makes them very very small. I never questioned it. DISCLAIMER: We're just talking digital, non-mission-critical files here. Your printer is 100% going to want those 85Mb files.

### Compression Quality

Yeah, small files are great. But what good are small files if they look like dog shit? We need them to be small AND retain a level of quality.

### Color Accuracy

Color science is already a fickle mistress and adding the pain of color management into our PDF workflow sounds excruciatingly terrible. I want my PDFs to be as color-accurate to my original specs as humanly possible, regardless of which screen it's viewed on, the position of the sun, or if we forgot [to turn Night Shift off](https://www.colorduels.com/what-is-simultaneous-contrast/) while we were grading. Is it print? Sweet, CMYK. Is it digital? Dope, [sRGB, or rec709](https://www.richardlackey.com/choosing-video-color-space/).

### Accessibility and standardization

Correction: Nothing sucks more than a client thinking you're an incompetent designer because you only used Calibri. But you didn't. You sent a PDF with a typeface that they don't have locally installed on their computer so it did the best it could. RIP.

## Things I Don't Give A Shit About (But Maybe Should? Idk, man, life is too short)

After doing a few passes through the settings, these are some things I concluded that I don't really care about. What I care about is determined solely off of use-cases in the past five years of my professional career. i.e little to none.

- Acrobat and Adobe versions. All of the presets are compatible with Acrobat 7, which was released in 2004. I don't want to work with the type of client that is using Acrobat 6. Additionally, I'd be shocked if there's a respectable printer anywhere in the world using a program old enough to go off to war.
- Create Acrobat Layers from Top-Level Layers. First of all, what a terribly un-user-friendly description. I had to look it up on [Adobe's Illustrator documentation](https://helpx.adobe.com/illustrator/kb/optimize-native-pdf-file-sizes.html): "This option saves the Illustrator top-level layers as Acrobat layers in the PDF file. It allows users to generate multiple versions of the document from a single file. For example, if you plan to publish a document in multiple languages, you can place the text for each language in a different layer." I understand how that might be useful in rare circumstances, but I've never remotely come across a use case for that. If we did, we would most likely create separate documents for version control. Thusly, I don't care.
- Optimize for Fast Web View. This option is great for users who need to host their PDFs on their website for viewing and downloading but that's not us. I've always had mixed results and don't trust it. I don't care if do -- fight me.
- Embed Page Thumbnails. Smells like file size bloat and is something almost every native PDF viewer does automatically upon open.
- Security. This is Adobe Illustrator, not the nuclear launch codes. We don't have a lot of HIPPA compliance passing through our shop, so I don't really care.
- Compression. Just.... leave it be. Illustrator does a good job with the default settings and you'll go down an "ADHD Optimization Rabbit Hole", as I like to call it.
- Smallest File Size. Seems like a bad idea. We sent a drone to Mars the other day, I think we can splurge on a little bit of bandwidth and put some Regular Unleaded in our PDFs.

[![Adobe Illustrator default PDF export compression settings ](/img/blog/Illustrator_Default_Compression_Options-1346x1080.png)](/img/blog/Illustrator_Default_Compression_Options.png)

Adobe Illustrator default PDF export compression settings

## High-Quality Print Vs. Press Quality

Again, this seems like sloppy user design on Adobe's part. The names are almost identical and it's extremely pedantic. Simply put, the High-Quality Print option is great if you're printing from your home-office printer or at a Kinkos. Whereas the Press Quality option is for a professional printer's production pipeline (alliteration, hot). This would be something you send off to have someone more experienced than you do the printing. There are actually a few really important differentials between the two:

- The High-Quality Print option will downsample any grayscale and color image to 300 pixels per inch for any images set at a higher resolution than 300px. Press Quality does this too but is....reversible by a printer? We'll chalk that up for "info we don't care about right now"
- Press Quality will automatically convert RGB color images to CMYK whereas High-Quality will not. This shouldn't matter, because you passed GD101 and know better than to design in the wrong color profile.

My two cents: Just use Press Quality. Remember, this is only in regards to printing. We're after them meat and potatoes -- digital PDFS.

## The Main Illustrator PDF Presets

Once we decide we're not going to press and we get past all the bullshit, we're left with three primary options. PDF:X-1a:2001, PDF:X-3:2004, and PDF:X-4:2008. I spent hours scouring over [technical documents](https://www.loc.gov/preservation/digital/formats/fdd/fdd000124.shtml) with misleading titles such as "[PDFs in a Nutshell](https://www.pdfa.org/wp-content/uploads/2017/05/PDFX-in-a-Nutshell.pdf)" (Spoiler: That's a really big and boring nut). The first draft of this post droned on and on about ISO standards, [SWOPs](https://en.wikipedia.org/wiki/Specifications_for_Web_Offset_Publications), [Raster Image Processors](https://www.globalgraphics.com/products/harlequin), and a ton of other factoids that were beyond our scope. But then I remembered the second ingredient to being a good designer: knowing when to stop. There's a limit to how deep we need to go. Here's what I learned:

NOTE: Every PDF/X version builds upon the last and retains the same compliance policies as its mom and dad. PDF/X can be viewed, essentially, as a bunch of rules that PDFs have to comply to.

## PDF:X-1a:2001

- PDF/X-1A requires all fonts to be embedded and images to be designated as CMYK or spot colors. This means IF WE'RE NOT PRINTING, WE DON'T WANT TO USE THIS.  I lied to my students and was wrong. Egg on my face.

- RGB images will convert to CMYK
- This is the best choice if you're uploading your work to an online printing service such as [Moo](https://www.moo.com/us/) or [Sticker Mule](https://stickermule.com/).

## PDF:X-3:2002

- Hooray, we now have Harry Potter and the Chamber of Secrets, the No Child Left Behind act, and the first native PDF/X support for RGB colors.
- Flattens transparency.
- Needs a color management-aware workflow. (tricky business)
- Europe is more into it than the US

- For the kindred spirits out there: [CEILAB is also supported](https://en.wikipedia.org/wiki/CIELAB_color_space#Where_CIELAB_is_used)

## PDF:X-4:2008

- The use of transparency is allowed. This allows for non-destructive PDF creation. When we flatten a PDF, we lose a lot of data. Which is great for file size, bad for editing. The biggest issue that comes with not flattening transparency is an unintentional end product. Some effects such as drop shadows might not render correctly if you do not flatten your transparency. It may not look like we want it to. I recommend flattening your PDFs, but with caution and taking care to do a side-by-side comparison of the working file and the export.
- Device-independent color spaces. COLOR PROFILES! This satisfies one of my important factors, color accuracy.
- Support for content layers. This means you can boot up Illustrator, open a PDF, and edit the gunk inside of it. You can also save your AI files as PDFs and open them back up as AI files. This is confusing.
- All fonts and images are embedded in the file

## Checking File Sizes

I took one of my student's gargantuan Illustrator files and ran every PDF preset option to compare results. All of the PDF/X results were pretty comparable. Here are the results:

[![Folder of exported PDFs](/img/blog/Illustrator_PDF_Preset_Comparison.png)](/img/blog/Illustrator_PDF_Preset_Comparison.png)

Folder of exported PDFs

## Family Trivia Night

A few other random factoids that I learned along the way. None of these are really super important, but your mom will think you're cool if you know them.

- PDF stands for Portable Document Format
- They must have been a little distracted at the end of 2001 (for some reason), because they named this version wrong and accidentally never published PDF/X-2. Oops.
- PDF/X Standards versions are referred to as 'flavors'. How spunky and fun.

## Huge Takeaway: Outline your Text

Don't let some standards department that you've never heard of control your destiny. Outline all of your text before you export it as a PDF and send it off. This ensures maximum readability. However, there is a downside. This isn't compliant with modern accessibility standards. Consider sending two deliverables: a primary pdf and a version that contains a common typeface such as Arial for accessibility.

[![Illustrator error Font embed failure when exporting a pdf](/img/blog/Illustrator_PDF_Font_Embed_Fail.png)](/img/blog/Illustrator_PDF_Font_Embed_Fail.png) _Illustrator error Font embed failure when exporting a pdf_

Error that appears when someone tries to open a PDF that contains a font that they do not have a license for.

Other References:

- <https://graphicdesign.stackexchange.com/questions/77073/what-is-transparency-flattening>
- <https://creativepro.com/for-position-only-the-pdf-x-files/>
- <https://www.pdfa.org/whats-the-difference-between-pdf-x-1a-and-pdf-x-4/>
- <https://creativepro.com/choosing-the-right-pdf-preset/>
- <https://www.prepressure.com/pdf/basics/pdfx-4>
- <https://community.adobe.com/t5/illustrator/auto-outline-illustrator-text-on-pdf-save/m-p/8402578>
