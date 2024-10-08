# Style Guide

https://www.figma.com/design/dO6Zdu5MUOWGqAAmgMJ8Sz/Sitemap?node-id=0-1&t=hcvMHs4tfSB4OX6Q-1

### Colors

|NAME									|COLOR|
|---------------------|-------
|Background         	|#161515|
|Card Color         	|#361C16|
|Foreground						|#FFFFFF|
|Foreground Untoggled |#6D382C|
|Title  	 					|#F1C21A|

### Fonts

|NAME						|FONT|
|---------------|-------
|Title					|DM Serif Text|
|Subtitle				|DM Serif Text|
|Generic Text   |Inter|


### Font Sizes

|NAME						|FONT SIZE|
|---------------|-------
|Title					|36|
|Subtitle				|24|
|Generic Text   |12|


### Components

* Navbar
* Footer
* Store Item Card
* Event Card
* Employee Card
* Filter Card


### Structure

Every page must have a navbar that is locked to the top of the screen, a foooter and a title (the home page does not require a title). Paragraphs and sections of the page are separated by horizontal lines, accompanied by a subtitle or title. Titles are centered, whereas subtitles are aligned to the left. Cards are arranged in a grid, aligned from left to right. 

### Design

**Margin**: All body content rendered on desktop screens should span 3/5ths of the screen, with the remaining 2/5ths of the viewport split equally into margins on each side of the content. Components exempt from this rule include carousels, background images and footer. This ensures that the content of the page is presented in a legible format.

**Rounding**: The first layer above the background, "the cards," is non-rounded, with a small 6px drop shadow. Images are also non-rounded. Buttons are fully rounded, while input fields have slight rounding. The different visuals help differentiate different components with separate actions from each other. The selected visual patterns are also prevalent in many other UI/UX systems.

**Shape**: The cards must be rectangular,placed verticaly to allow more cards to be next to each other. Side-image must be rectangular, placed vertically. Background image and carousel images must be placed horizontaly. These primitives allow for easy adaptation of content in a responsive design, where a pleothora of viewports must be supported, which may become a future goal after further development of the main product.

