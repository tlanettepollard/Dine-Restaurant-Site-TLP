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
05/16/2021: Started working on file after time away. Started again. Erased code I had already. Won't do pull request yet. 
05/22/2021: Just read an article about using custom HTML Tags instead of divs. Thought this would be a great time to give it a try. However, I decided to continue as I was going. 
https://levelup.gitconnected.com/death-to-div-creating-a-better-html-4775793270fc

05/29/2021: Learned about using px for root/html, then rem for components and em for text elements 
 Used 62.5% for html font-size based on 16px default size; set body to 10px in case 16px isn't recognized; modules (main elements) should be rem; text elements are em;
 https://css-tricks.com/rems-ems/

05/30/2021: Starting my page styling over. I feel like an imposter. I need to make it my own. I decided to use CSS Grid this time. I'm learning that I need to let flex box work for me when I am positioning elements. 

05/31/2021: Continuing with styling highlights and the rest of the page.

06/02/2021: used a transitions generator for Events section list items; I love flex box and grid. It has made sizing the sections more easier. 
https://makingcss.com/transition

06/03/2021: Had to change my class names on the reservations page so that they wouldn't conflict with the home page. 

06/04/2021: 




Reservations.scss
.reservation {
    position: relative;
    min-height: 53.5rem;
    color: $primary-cod-gray;
    @include flex (column, center);
    
    &__form {
        height: 58.5rem;
        max-width: 32.7rem;
        margin-top: -10rem;
        margin-bottom: 10rem;
        background: $color-white;
        padding: 2.2rem;

    }

}

.curve {
    display: none;
}

.lines {
    display: none;
}

.form {
    /*padding: 0 2.6rem;*/
    &__input {
        border: none;
        border-bottom: 1px solid $secondary-ebony-clay;
        font-size: 1.8rem;
        line-height: 2.8rem;
        letter-spacing: -0.225px;
        color: inherit;
        cursor: pointer;
    }

    &__input::placeholder {
        font-size: 1.8rem;
        line-height: 2.8rem;
        letter-spacing: -0.225px;
        color: inherit;
    }

    &__field {
        margin: 0 auto;
        margin-bottom: 1.2rem; 
    }

    &__field--text {
        width: 100%;

        .form__input {
            display: block;
            width: 100%;
            height: 4.5rem;
            padding: 0.5rem 0;
        }
    }

    &__field--number {
        width: 100%;
        /*height: 8.1rem;*/
        position: relative;

        label {
            color: inherit;
            font-family: inherit;
            font-size: 1.8rem;
            line-height: 2.5rem;
            letter-spacing: -0.225px;
            text-align: left;
        }

        .form__input {
            width: 30%;
            padding: 0.5rem;
            margin: 0 0.3rem;
            text-align: left;
            cursor: pointer;

            &--arrow {
                position: relative;
                min-width: 8.8rem;
                border-bottom: none;

                &:after {
                    content: "\f078";
                    font: normal normal normal 2rem/1 FontAwesome;
                    color: $primary-beaver;
                    right: 2rem;
                    top: 1rem;
                    height: 3.4rem;
                    position: absolute;
                }

                select {
                    appearance: none;
                    width: 100%;
                    max-width: 30rem;
                    height: 4rem;
                    line-height: 2.5rem;
                    font-size: inherit;
                    font-weight: 400;
                    color: inherit;
                    border: none;
                    border-bottom: 1px solid $secondary-ebony-clay;
                }
            }
        }
    }
    &__field-box {
        position: relative;
        @include flex (row, center);
    }
    &__field--people {
        width: 100%;
        text-align: center;
        padding-bottom: 1rem;
        border-bottom: 1px solid $secondary-ebony-clay;
        .form__input {
            width: 70%;
            text-align: center;
            border: none;
            padding-bottom: 1rem;
            vertical-align: middle;
            font-weight: $weight-bold;
        }
    }
    
    &__message {
        display: block;
        visibility: hidden;
        font-weight: bold;
    }
}

.time, .date{
    margin-top: -10px;
}

Hero Section
background-image: url(/images/homepage/hero-bg-mobile.jpg);
    background-image: image-set(
        url(/images/homepage/hero-bg-mobile.jpg) 1x,
        url(/images/homepage/hero-bg-mobile@2x.jpg) 2x
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;

@include md-breakpoint {
        background-image: url(/images/homepage/hero-bg-tablet.jpg);
        background-image: image-set(
            url(/images/homepage/hero-bg-tablet.jpg) 1x,
            url(/images/homepage/hero-bg-tablet@2x.jpg) 2x
        );
        min-height: 992px;
    }

    @include lg-breakpoint {
        background-image: url(/images/homepage/locally-sourced-desktop.jpg);
        background-image: image-set(
            url(/images/homepage/hero-bg-desktop.jpg) 1x,
            url(/images/homepage/hero-bg-desktop@2x.jpg) 2x
        );
        min-height: 820px;
        text-align: left;
    }


    
    div sizes: 
grid-template-rows: 74.8rem 145.5rem 171.8rem 104.6rem 32.8rem 44rem;

.bk__header {
        grid-area: bk__header;
        grid-row: 1;
        min-height: 60rem;
        width: 100%; 

        background-image: url(/images/homepage/ready-bg-mobile.jpg);
        background-image: image-reset(url(/images/homepage/ready-bg-mobile.jpg) 1x,
            url(/images/homepage/ready-bg-mobile@2x.jpg) 2x);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; 
        }

        ********************************
        Form
        &__input {
            border: none;
            border-bottom: 1px solid $secondary-ebony-clay;
            font-size: 1.8rem;
            line-height: 2.8rem;
            letter-spacing: -0.225px;
            color: inherit;
            cursor: pointer;
        }

        &__input::placeholder {
            font-size: 1.8rem;
            line-height: 2.8rem;
            letter-spacing: -0.225px;
            color: inherit;
        }

        &__field {
            margin: 0 auto;
            margin-bottom: 3.2rem;
        }

        &__field--text {
            width: 100%;

            .form__input {
                display: block;
                width: 100%;
                height: 4.5rem;
                padding: 0.5rem 0;
            }
        }

        &__field--number {
            width: 100%;
            height: 8.1rem;
            position: relative;

            label {
                color: inherit;
                font-family: inherit;
                font-size: 1.8rem;
                line-height: 2.8rem;
                letter-spacing: -0.225px;
                text-align: left;
            }

            .form__input {
                width: 30%;
                padding: 0.5rem;
                margin: 0 0.3rem;
                text-align: left;
                cursor: pointer;

                &--arrow {
                    position: relative;
                    min-width: 8.8rem;
                    border-bottom: none;

                    &::after {
                        content: "\f078";
                        font: normal normal normal 2rem/1 FontAwesome;
                        color: $primary-beaver;
                        right: 2rem;
                        top: 1rem;
                        height: 3.4rem;
                        position: absolute;
                        
                    }

                    select {
                        appearance: none;
                        width: 100%;
                        max-width: 30rem;
                        height: 4rem;
                        line-height: 2.8rem;
                        font-size: inherit;
                        font-weight: $weight-regular;
                        color: inherit;
                        border: none;
                        border-bottom: 1px solid $secondary-ebony-clay;
                    }
                }

 
            }

        }
        // Set up for reservation time
        &__field-box {
            position: relative;
            @include flex (row, center);
        }

        &__field--people {
            width: 100%;
            text-align: center;
            border: none;
            vertical-align: middle;
            // For number of people section
            .form__input {
                width: 70%;
                text-align: center;
                border: none;
                vertical-align: middle;
            }
        }

        &__message {
            display: block;
            visibility: hidden;
            font-weight: $weight-bold;
            padding-top: 0.7rem;
            font-size: 1rem;
            text-align: left;
            color: $color-error;
        }

        &__message--error {
            visibility: visible;
        }

        &__input--error {
            border-bottom: 1px solid $color-error;
            color: $color-error;
        }
         // Styles icons to add/subtract people
    .icon-count {
        cursor: pointer;
        width: 1.5rem;
        vertical-align: middle;
        padding: 1rem;
    }

    .form__input--arrow .active {
        transform: rotate(180deg);
    }