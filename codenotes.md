Reservation Notes
.bk__main {
    display: grid;
    grid-template-columns: none;
    grid-template-rows: auto;
    grid-template-areas: 
    "header"
    "section"
    "footer";

    width: 100%;

    
}

    
.bk__header {
    grid-area: header;
    grid-row: 1;
    min-height: 60rem;
    position: relative;

    background-image: url(/images/homepage/ready-bg-mobile.jpg);
    background-image: image-reset(url(/images/homepage/ready-bg-mobile.jpg) 1x,
        url(/images/homepage/ready-bg-mobile@2x.jpg) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &--container {
        min-width: 32.7rem;
        min-height: 40rem;
        @include flex (column, space-evenly);
        align-content: space-between;
        margin: 5rem 0 auto;

        .bk__header--title {
           padding: 2rem 2rem 0;
           margin: 0 auto; 
        }

        .bk__header--paragraph {
            padding: 0 3rem;
        }

        .bk__header--button {
            margin-bottom: 2rem;
        }
    }   
    
}

.reservation {
    grid-area: section;
    grid-row: 2;
    min-height: 58.5rem;
    position: relative;
    color: $primary-cod-gray;

    &__container {
        width: 80%;
        max-width: 54rem;
        margin: 0 auto;
        position: relative;
    }

    &__form {
        max-height: 58.5rem;
        max-width: 54rem;
        height: 58.5rem;
        background: $color-white;
        padding: 3.2rem;
        margin-top: -10rem;
        margin-bottom: 10rem;
        box-shadow: $bshadow-1;
        @include flex(column, center);
    }

    .form {
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
        // Set margin-bottom of form field sections
        &__field {
            margin: 0 auto;
            margin-bottom: 3.2rem;
        }

        &__field--text {
            width: 100%;
            // Styles form text sections
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
                //text-align: left;
                margin-right: 20rem;
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
        &__field-box {
            position: relative;
            @include flex(row, center);
        }
        &__field--people {
            width: 100%;
            text-align: center;
            border: none;
            vertical-align: middle;

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

        .icon-count {
            cursor: pointer;
            width: 1.5rem;
            vertical-align: middle;
            padding: 1rem;
        }

        .form__input--arrow .active {
            transform: rotate(180deg);
        }
    }

    
   
}



.bk__footer {
    grid-area: footer;
    grid-row: 3;
    max-height: 44rem;
    height: 100%;
}

Hero Code
/* Mobile First Design */

.hero {
   grid-area: hero;
   grid-row: 1;
   background-image: url(/images/homepage/hero-bg-mobile.jpg);
   background-repeat: no-repeat;
   background-size: cover;
   background-position: top;
   min-height: 74.8rem;
   text-align: center;

   &__container {
     height: 38.4rem;
     position: relative;
     top: 23.2rem;  
     //@include flex (column, space-evenly);
      //align-content: center;

      
     
   }

   &__logo {
      padding-top: 2rem;
      width: 10.3rem;
      height: 4rem;
   }

   &__title {
      padding-left: 2rem;
      padding-right: 2rem;
   }

   &__text{
      padding-left: 2rem;
      padding-right: 2rem;
   }

   &__button {
      
   }

}

/* Media Queries */ 
 @media screen and (min-width: $bp-start-tablet) {
    .hero {
       height: 99.2rem;
       background-image: url(/images/homepage/hero-bg-tablet.jpg);
    }
 }

 Events Code

.events {
    grid-area: events;
    grid-row: 4;
    min-height: 104.6rem;
    width: 37.5rem;
    margin: auto;

    &__container {
        @include flex (column, space-between);
        align-items: space-between;

        .event__photos img {
            position: relative;
        }

         .event-photo {
             display: none;
             box-shadow: $bshadow-1;
         }

         .event-photo--active {
             max-width: 40rem;
             display: inline-block;
             margin-bottom: 4rem;
             z-index: 1;
         }

         .events__items {
             padding: 0;
         }

         .events__list {
             text-transform: uppercase;
             position: relative;
             margin-bottom: 3rem;

             .event__item {
                 opacity: 0.7;
                 cursor: pointer;
                 padding-bottom: 1.5rem;
                 margin: auto;
               // -webkit-transition: transform 0.5s 0s ease-in;
               // -moz-transition: transform 0.5s 0s ease-in;
               // -o-transition: transform 0.5s 0s ease-in;
                transition: transform 0.5s 0s ease-in; 
             }

             .event__item--active {
                 color: $secondary-ebony-clay;
                 opacity: 1;
                 transform: translateY(1rem);
             }

             .two {
                 margin-bottom: 0.5rem;
             }

             .event__line {
                 width: 4.8rem;
                 height: .1rem;
                 background-color: $primary-beaver;
                 visibility: hidden;
                 margin: 0 auto;
                 padding: 0;
             }

             .event__line--active {
                 visibility: visible;
                 z-index: -5;
             }

             
         }

         .event__content {
             display: none;
         }

         .event__content--active {
             display: block;
         }

         .event__paragraph {
             padding: 2rem 1rem;
         }
    }
    

}

Features Code

.features {
    grid-area: features;
    grid-row: 2;
    min-height: 144.6rem;
    @include flex (column, space-between);
    text-align: center;

    &__container {
        min-height: 68.3rem;
    }
    .features-title {
        width: 30rem;
        margin: auto;
    }
    .features-text {
        width: 36rem;
        margin: auto;
        padding: 2rem 0;
    }

    picture {
        margin-top: -7.2rem;
        position: relative;
        
        img {
            box-shadow: $bshadow-1;
        }
    }

    .pattern {
        margin: 2rem 0;
    }
       
}


Footer Code
.footer {
    grid-area: footer;
    grid-row: 6;
    max-height: 44rem;
    height: 100%;
    margin: 0 auto;
    padding: 8rem 2.4rem;
    text-align: center;
    &__container {
        @include flex(column, space-between);

        &--logo,
        &--address,
        &--hours {
            padding-bottom: 2rem;
        }

        p {
            text-transform: uppercase;
        }
    }


    /* Attribution */
    .attribution {
        height: 5rem;
        margin-top: 5rem;
        padding-top: 3rem;
        background-color: $primary-cod-gray;
        font-size: 11px;
        text-align: center;
        color: white;

    }

    .attribution a {
        color: white;
    }
    
}

Highlights Code 

.highlights {
    grid-area: highlights;
    grid-row: 3;
    //min-width: 37.5rem;
    min-height: 172rem;
    text-align: center;
    padding: 5rem 0;
    margin: 3rem 0;
    //@include flex (column, space-between);

    &__container {
        margin: auto;
        @include flex (column, space-between);
        padding: 0 2rem;

        .menu-header {
            margin-top: .5rem;
            margin-bottom: 6rem;
            .menu-title {
                padding: 0 2rem;
            }
            .menu-text {
                padding: 0 2rem;
            }
        }

        .menu__content {
            margin-top: -2rem;
            .menu-photo {
                box-shadow: $bshadow-4;
            }
            .menu-items {
                border-bottom: 1px solid $secondary-shuttle-gray;
                margin-top: 2rem;
                margin-bottom: 4rem;
                padding: 0 1rem;
                &:last-of-type {
                    border-bottom: none;
                }
                .menu-items--title {
                    margin-top: 4rem;
                }
                .menu-paragraph{
                    padding:  0rem 4rem 3rem;
                    margin-bottom: 2rem;
                }
            }
            
        }

    
        
    }
    
     
}

CTA code

.cta {
    grid-area: cta;
    grid-row: 5;
    height: 32.8rem;
    color: $color-white;
    @include flex(column, center);
    text-align: center;

    background-image: url(/images/homepage/ready-bg-mobile.jpg);
        background-image: image-reset(
            url(/images/homepage/ready-bg-mobile.jpg) 1x,
            url(/images/homepage/ready-bg-mobile@2x.jpg) 2x
        );
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
}