Coding Notes
10/31/2020: Finally worked on page after a 2 month break to focus on work; worked on adjusting the positioning of the Features section card "Image Locally"; card-right was keeping the subsection from displaying as flex, column instead of  flex, row in mobile;
What I Learned -using the picture element with srcset and img to account or responsive sizes and hi-def. -using background-position-x and background-position-y.

02/19/2021: Restarted project; learned about image-set (css) and picture element. 
The image-set() CSS function notation is a method of letting the browser pick the most appropriate CSS image from a given set, primarily for high pixel density screens.

Resolution and bandwidth differ by device and network access. The image-set() function delivers the most appropriate image resolution for a user’s device, providing a set of image options — each with an associated resolution declaration — from which the browser picks the most appropriate for the device and settings.


Learned about Mixins and using values for flex mix in. You set the values based on what you want to do. 
02/21/2021
learned not to make certain tasks over difficult; My events section doesn't need a slideshow. I just need to remove and add classes

02/23/2021
buttons: transparent for dark colored backgrounds and dark for white colored backgrounds

2/24/2021: Learned their is a difference between visibility: hidden and displayed: none. 

3/07/2021: Learned that appearance: none removes the arrow on the selector. 

05/13/2021: Will add an updated Css Reset

/* Reset */

:root {
    color-scheme: light dark;
}

html {
    height: 100%;
    width: 100%;
}

html:focus-within {
    scroll-behavior: smooth;
}

body, 
#root,
#root *,
#root ::before,
#root ::after {
    box-sizing: border-box;
    margin: 0;
    display: grid;
    place-content: center;
    text-align: center;
    position: relative;
    overflow-wrap: break-word;
    min-width: 0;
}

body,
#root {
    min-height: 100%;
    min-width: 100%;
}

body {
    margin: 0;
    font-family: system-ui;
    text-rendering: optimizeSpeed;
    line-height: 1.2;
}

a {
    text-decoration-skip-ink: auto;
}

ul[role="list"],
ol[role="list"] {
    list-style: none;
}

img {
    max-width: 100%;
    display: block;
}

input,
button, 
textarea,
select {
    font: inherit;
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}