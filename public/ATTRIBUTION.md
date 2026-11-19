# UNSCROLL assets and content

The app, original teaching guides, exercises, explanatory diagrams, and original Ink fox artwork are provided under the project's MIT license. Character and film names are used only for factual commentary and learning references. No franchise artwork, copyrighted film stills, or copyrighted speech excerpts are bundled.

## Fonts
- Barlow Condensed, designed by Jeremy Tribby and contributors. SIL Open Font License 1.1. Distributed locally through @fontsource/barlow-condensed. The full license is in licenses/barlow-condensed-OFL.txt.
- DM Sans, designed by Colophon Foundry and contributors. SIL Open Font License 1.1. Distributed locally through @fontsource/dm-sans. The full license is in licenses/dm-sans-OFL.txt.

asset-licenses.json contains the source file, license, byte size, and SHA-256 for each bundled font, generated icon, and all 604 teaching diagrams. The build refreshes these records and the test suite verifies them.

## Teaching illustrations
All teaching SVGs in lesson-visuals are original explanatory artwork. There are 97 bespoke primary diagrams: camera, light/editing, color/type, UI/UX, drawing, and the two approved sample illustrations. Other diagrams are generated from lesson-specific values, relationships, and dialogue. Hypothetical figures are not empirical results, drawings are not photographs, and visual layouts do not establish live interface behavior or accessibility conformance. SVG title/description text is retained alongside readable captions and HTML detail lists.

## Pictures by other people
Some lessons show a photograph, an artwork, a frame from a public-domain film, or a diagram made by someone else. These files are in lesson-photos. They are not original UNSCROLL artwork and are not covered by the MIT license. Each one is in the public domain or under a Creative Commons CC0, Attribution, or Attribution-ShareAlike license, as recorded by Wikimedia Commons when the file was added. Each was resized or cropped as its record states and converted to WebP. The credit under each picture names its author and license and links to its source. lesson-photos/CREDITS.md lists every file with its work title, author, license, source and changes, and src/teaching/photos.json holds the same records with byte counts and SHA-256 values that the tests verify. A credit does not mean that the author endorses UNSCROLL. Captions are original UNSCROLL text.

## Icons
Lucide icons use the ISC license, available in the lucide-react package. They are bundled as inline SVG components. The custom fox brand artwork is original UNSCROLL artwork, not a franchise character.

## External discovery text
Downloaded Wikipedia extracts are attributed to Wikipedia contributors and licensed under Creative Commons Attribution-ShareAlike 4.0. Each extract retains its source article, history link, license link, and edition date. Extracts may be shortened and formatted as plain text. Their license does not change when included in a local backup.

Original lessons summarize linked references in original words. A linked source does not imply that its author endorses UNSCROLL or tested the app's exercises.