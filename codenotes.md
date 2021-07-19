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
                text-align: left;
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



onclick="rotateArrow()"
/*function rotateArrow() {
  icon.classList.toggle('active');
}*/

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

&__container {
        position: relative;
        width: 100vw;
        height: 100%;
        margin: auto; 
        padding-bottom: 6rem;
        @include flex(column, space-around);

        .features__family, 
        .features__locally {
            width: 90%;
            height: 47%;
            margin: 0 auto;
            padding-bottom: 4rem;
        }

        .features__family {
            transform: translateY(-7.2rem);

            @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
                transform: translateY(-9.6rem);
            }

            @media (min-width: $bp-desktop) {
                transform: translateY(-7rem);
            }
        }

        .features__locally {
            @media (min-width: $bp-desktop) {
                transform: translateY(8rem);
            }
        }

        .features__content {
            &--pattern {
                padding-top: 2.5rem;
            }
            &--title {
                margin: 2rem 0;
                padding: 0 5.5rem; 
            }

            &--text {
                padding: 1rem 3.2rem 0;
            }
        }

        picture .feature__photo {
            box-shadow: $bshadow-1;
        }
    }
************
Feature Code 2
.features {
    background-color: $color-white;
    //height: 145.5rem;
    text-align: center;

    @media (min-width: $bp-tablet-end) {
        text-align: left;
    }


    &__container {
        padding: 0 2.4rem 8rem;

        @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
            padding: 0 9.7rem 12rem;
        }

        @media (min-width: $bp-desktop) {
            max-width: 111rem;
            margin: 0 auto;
        }

        .features__enjoyable {
            margin-bottom: .8rem;

            @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
                margin-bottom: 2.4rem;
            }

            @media (min-width: $bp-desktop) {
                @include flex (row, space-between);
                margin-bottom: -2.9rem;
            } 

            .features__card-one {
                transform: translateY(-7.2rem);

                @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
                    transform: translateY(-9.6rem);
                }

                @media (min-width: $bp-desktop) {
                    transform: translateY(-7rem);
                }   
            }
            
            .features__image-one {
                @media (max-width: $bp-mobile) {
                    
                    background-image: url(/images/homepage/enjoyable-place-mobile@2x.jpg);
                }
                
                @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
                    background-image: url(/images/homepage/enjoyable-place-tablet@2x.jpg);
                }

                @media (min-width: $bp-desktop){
                    background-image: url(/images/homepage/enjoyable-place-desktop@2x.jpg);
                }
            }

            
        }

        .features__locally {
            position: relative;

            @media (min-width: $bp-desktop) {
                @include flex (row-reverse, space-between);
            }

            .features__card-two {
                @media (min-width: $bp-desktop) {
                    transform: translateY(8rem);
                }
            }

            .features__image-two {
                @media (max-width: $bp-mobile){
                    background-image: url(/images/homepage/locally-sourced-mobile@2x.jpg);
                }

                @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
                    background-image: url(/images/homepage/locally-sourced-tablet@2x.jpg);
                }

                @media (min-width: $bp-desktop) {
                    background-image: url(/images/homepage/locally-sourced-desktop@2x.jpg);
                }
            }
        }

        .features__card {
          @media (min-width: $bp-desktop){
              min-width: 54rem;
              height: 72rem;   
          }  
        }
        
        .features__image {
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;

            @media (max-width: $bp-mobile){
                min-height: 40rem;
                background-position: center center;
            }

            @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
                min-height: 36rem;
            }

            @media (min-width: $bp-desktop) {
                min-height: 72rem;
            }
        }

    }
}
    
    

    
    
    
    
    
    
}





*****************
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
    
/* Food Section */

.food {
    position: relative;
    height: 100%;
    text-align: center;
    padding: 5rem 0;

    &__container {
        height: 100%;
        margin: auto;
        @include flex (column, space-around);

        

        .food__header {
            min-height: 26rem;
            transform: translateY(-1.2rem);

            .food-pattern {
                padding-top: 1rem;
                padding-bottom: 4.5rem;
            }

            .food__heading {
                padding: 0.5rem 6rem;
            }

            .food__text {
                padding: 0 6rem;
            }
        }

        .food__items {
            min-height: 131rem;
            margin-top: 2rem;
            padding: 0 5rem;
            @include flex (column, space-around);

            

            .food__item {
                height: 42rem;
                margin-bottom: 4rem;
                border-bottom: 1px solid $secondary-shuttle-gray;

                &:last-of-type {
                    border-bottom: none;
                }

                @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
                    @include flex(row, space-between);
                }
                
                picture .food-photo {
                    -webkit-box-shadow: $bshadow-4;
                    box-shadow: $bshadow-4;
                }

                &--heading {
                    margin-top: 4rem;
                }

                &--paragraph {
                    padding: 2rem 4.3rem 3rem;
                }
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

*****************************************
<picture class="features__image-enjoyable">
                    <source srcset="/images/homepage/enjoyable-place-desktop.jpg 1x, 
                    /images/homepage/enjoyable-place-desktop@2x.jpg 2x" media="(min-width: 1024px)"/>

                    <source srcset="/images/homepage/enjoyable-place-tablet.jpg 1x, 
                    /images/homepage/enjoyable-place-tablet@2x.jpg 2x" media="(min-width: 768px)"/>

                    <source srcset="/images/homepage/enjoyable-place-mobile.jpg 1x, 
                    /images/homepage/enjoyable-place-mobile@2x.jpg 2x" media="(min-width: 300px)" />

                    <img src="images/homepage/enjoyable-place-mobile.jpg" alt="enjoyable place landscape">
            </picture> 

<picture class="features__image-locally">
                    <source srcset="/images/homepage/locally-sourced-desktop.jpg 1x, 
                    /images/homepage/locally-sourced-desktop@2x.jpg 2x" media="(min-width: 1025px)"/>

                    <source srcset="/images/homepage/locally-sourced-tablet.jpg 1x, 
                    /images/homepage/locally-sourced-tablet@2x.jpg 2x" media="(min-width: 768px) and ((max-width: 1024px)"/>

                    <source srcset="/images/homepage/locally-sourced-mobile.jpg 1x, 
                    /images/homepage/locally-sourced-mobile@2x.jpg 2x" media="(min-width: 300px) and (max-width: 767px)"/>
                    <img src="images/homepage/locally-sourced-mobile.jpg" alt="locally sourced food">
            </picture>

<picture class="menu-items--picture">
                            <source srcset="/images/homepage/salmon-desktop-tablet.jpg 1x, 
                            /images/homepage/salmon-desktop-tablet@2x.jpg 2x" media="(min-width: 48rem)"/>

                            <source srcset="/images/homepage/salmon-mobile.jpg 1x, 
                            /images/homepage/      salmon-mobile@2x.jpg 2x" media="(min-width: 18.75rem)"/>
</picture>

<picture class="menu-items--picture">
                            <source srcset="/images/homepage/beef-desktop-tablet.jpg 1x, 
                            /images/homepage/beef-desktop-tablet@2x.jpg 2x" media="(min-width: 48rem)"/>

                            <source srcset="/images/homepage/beef-mobile.jpg 1x, 
                            /images/homepage/      beef-mobile@2x.jpg 2x" media="(min-width: 18.75rem)"/>
</picture>

<picture class="menu-items--picture">
                            <source srcset="/images/homepage/chocolate-desktop-tablet.jpg 1x, 
                            /images/homepage/chocolate-desktop-tablet@2x.jpg 2x" media="(min-width: 48rem)"/>

                            <source srcset="/images/homepage/chocolate-mobile.jpg 1x, 
                            /images/homepage/      chocolate-mobile@2x.jpg 2x" media="(min-width: 18.75rem)"/>
</picture>
<picture class="event-photo event-photo--active" id="photo-1">
                        <source srcset="/images/homepage/family-gathering-desktop.jpg 1x,
                        /images/homepage/family-gathering-desktop@2x.jpg 2x" media="(min-width: 64rem)">
                        <source srcset="/images/homepage/family-gathering-tablet.jpg 1x, 
                        /images/homepage/family-gathering-tablet@2x.jpg 2x" media="(min-width: 48rem)">
                        <source srcset="/images/homepage/family-gathering-mobile.jpg 1x,
                        /images/homepage/family-gathering-mobile@2x.jpg 2x" media="(min-width: 18.75rem)">
</picture>

<picture class="event-photo" id="photo-2">
                        <source srcset="/images/homepage/special-events-desktop.jpg 1x,
                        /images/homepage/special-events-desktop@2x.jpg 2x" media="(min-width: 64rem)">
                        <source srcset="/images/homepage/special-events-tablet.jpg 1x, 
                        /images/homepage/special-events-tablet@2x.jpg 2x" media="(min-width: 48rem)">
                        <source srcset="/images/homepage/special-events-mobile.jpg 1x,
                        /images/homepage/special-events-mobile@2x.jpg 2x" media="(min-width: 18.75rem)">
</picture>

<picture class="event-photo" id="photo-3">
                        <source srcset="/images/homepage/social-events-desktop.jpg 1x,
                        /images/homepage/social-events-desktop@2x.jpg 2x" media="(min-width: 64rem)">
                        <source srcset="/images/homepage/social-events-tablet.jpg 1x, 
                        /images/homepage/social-events-tablet@2x.jpg 2x" media="(min-width: 48rem)">
                        <source srcset="/images/homepage/social-events-mobile.jpg 1x,
                        /images/homepage/social-events-mobile@2x.jpg 2x" media="(min-width: 18.75rem)">
</picture>
*****************************
js
main
// Toggle Event List - Home Page

function toggleItem(toggleItem) {
    for (let i = 1; i < 4; i++) {
        const photo = document.getElementById(`photo-${i}`);
        const event = document.getElementById(`event-${i}`);
        const line = document.getElementById(`line-${i}`);
        const content = document.getElementById(`content-${i}`);

        photo.classList.remove("event__photo--active");
        event.classList.remove("event__item--active");
        line.classList.remove("event__line--active");
        content.classList.remove("event__content--active");

        if (i === toggleItem) {
            photo.classList.add("event__photo--active");
            event.classList.add("event__item--active");
            line.classList.add("event__line--active");
            content.classList.add("event__content--active");
        }
    }
}

document.getElementById("event-1").addEventListener("click", () => {
    toggleItem(1);
});

document.getElementById("event-2").addEventListener("click", () => {
    toggleItem(2);
});

document.getElementById("event-3").addEventListener("click", () => {
    toggleItem(3);
});


reservation
// booking page reservation form
// Variables for Form Elements
const form = document.getElementById('form');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');

const date = document.getElementById('date');
const month = document.getElementById('month');
const day = document.getElementById('day');
const year = document.getElementById('year');

const time = document.getElementById('time');
const hour = document.getElementById('hour');
const min = document.getElementById('min');

const arrow = document.getElementById('arrow');

// Variables for Number Picker
const people = document.getElementById('people');
const iconMinus = document.getElementById('icon-minus');
const iconPlus = document.getElementById('icon-plus');

function showMsgAlert (input) {
    input.className = 'form__input form__input--error';

    if (input === formName || input === formEmail) {
      let formField = input.parentElement;
      let errorMessage = formField.querySelector('.form__message');
      errorMessage.className = 'form__message form__message--error';
      errorMessage.innerText = 'This field is required';
    } else if (input === month || input === day || input === year){
      let errorMessage = date.querySelector('.form__message');
      errorMessage.className = 'form__message form__message--error';
      errorMessage.innerText = 'This field is incomplete';
    } else if (input === hour || input === min) {
      let errorMessage = time.querySelector('form__message');
      errorMessage.className = 'form__message form__message--error';
      errorMessage.innerText = 'This field is incomplete';
    }
}

function removeMsgAlert(input){
  input.className = 'form__input';

  if (input === formName || input === formEmail) {
    let formField = input.parentElement;
    let errorMessage = formField.querySelector('.form__message');
    errorMessage.className = 'form__message';
  } else if (input === month || input === day || input || year){
    let errorMessage = date.querySelector('.form__message');
    errorMessage.className = 'form__message';
  } else if (input === hour || input === min) {
    let errorMessage = time.querySelector('.form__message');
    errorMessage.className = 'form__message';
  }
}

// Check email input

function checkEmail(input) {
  let regEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (regEx.test(input.value.trim())) {
    removeMsgAlert(input);
  } else {
    showMsgAlert(input);
  }
}

function checkFormInputs(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showMsgAlert(input);
    } else {
      removeMsgAlert(input);
    }
  });
}

function checkAmtPeople (people) {
  if (people.value > 0){
    return true;
  }
}

function rotateArrow() {
  arrow.classList.toggle('active');
}

iconMinus.addEventListener('click', () => {
  people.value = parseInt(people.value) - 1;
});

iconPlus.addEventListener('click', () => {
  people.value = parseInt(people.value) + 1;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFormInputs([formName, formEmail, month, day, year, hour, min]);
  checkEmail(formEmail);
  checkAmtPeople(people);
});



Hero Photo Desktop media="(max-width: 139.9rem)

<!-- <picture>
        <source srcset="/images/homepage/hero-bg-desktop.jpg 1x,
          /images/homepage/hero-bg-desktop@2x.jpg 2x"
          media="(min-width: 120rem)"/>
        <source srcset="/images/homepage/hero-bg-tablet.jpg 1x,
          /images/homepage/hero-bg-tablet@2x.jpg 2x"
          media="(min-width: 99.2rem)" />
        <source srcset="/images/homepage/hero-bg-mobile.jpg 1x, 
          /images/homepage/hero-bg-mobile@2x.jpg 2x"
          media="(min-width: 30rem)" />
        <img src="/images/homepage/hero-bg-mobile.jpg" class="hero__bg" alt="Home Hero background" />
      </picture> -->

Food 
<!--<picture>
                <source srcset="/images/homepage/salmon-desktop-tablet.jpg 1x, 
                /images/homepage/salmon-desktop-tablet@2x.jpg 2x" media="(min-width: 99.2rem)"/>
                <source srcset="/images/homepage/salmon-mobile.jpg 1x, 
                /images/homepage/salmon-mobile@2x.jpg 2x" media="(min-width: 30rem)"/>
                <img class="food-photo" src="/images/homepage/salmon-mobile.jpg" alt="Salmon"/>
            </picture>-->

            <picture>
                  <source srcset="/images/homepage/beef-desktop-tablet.jpg 1x, 
                  /images/homepage/beef-desktop-tablet@2x.jpg 2x" media="(min-width: 99.2rem)"/>
                  <source srcset="/images/homepage/beef-mobile.jpg 1x, 
                  /images/homepage/beef-mobile@2x.jpg 2x" media="(min-width: 30rem)"/>
                  <img class="food-photo" src="/images/homepage/beef-mobile.jpg" alt="Beef"/>
                </picture>

                <picture>
                <source srcset="/images/homepage/chocolate-desktop-tablet.jpg 1x, 
               /images/homepage/chocolate-desktop-tablet@2x.jpg 2x" media="(min-width: 99.2rem)"/>
                <source srcset="/images/homepage/ chocolate-mobile.jpg 1x, 
                /images/homepage/chocolate-mobile@2x.jpg 2x" media="(min-width: 30rem)"/>
                <img class="food-photo" src="/images/homepage/chocolate-mobile.jpg" alt="Chocolate"/>
              </picture>


Events

<picture>
            <source srcset="/images/homepage/family-gathering-desktop.jpg 1x,
               /images/homepage/family-gathering-desktop@2x.jpg 2x" media="(min-width: 120rem)">
            <source srcset="/images/homepage/family-gathering-tablet.jpg 1x, 
               /images/homepage/family-gathering-tablet@2x.jpg 2x" media="(min-width: 76.8rem)">
            <source srcset="/images/homepage/family-gathering-mobile.jpg 1x,
                /images/homepage/family-gathering-mobile@2x.jpg 2x" media="(min-width: 30rem)">
            <img class="event__photo event__photo--active event__photo--family" id="photo-1" src="/images/homepage/family-gathering-mobile.jpg" alt="Family Gathering">
          </picture> 
          <picture>
            <source srcset="/images/homepage/special-events-desktop.jpg 1x,
              /images/homepage/special-events-desktop@2x.jpg 2x" media="(min-width: 120rem)">
            <source srcset="/images/homepage/special-events-tablet.jpg 1x, 
              /images/homepage/special-events-tablet@2x.jpg 2x" media="(min-width: 76.8rem)">
            <source srcset="/images/homepage/special-events-mobile.jpg 1x,
              /images/homepage/special-events-mobile@2x.jpg 2x" media="(min-width: 30rem)">
              <img class="event__photo event__photo--special" id="photo-2" src="/images/homepage/special-events-mobile.jpg" alt="Special Events">
          </picture>
          <picture>
            <source srcset="/images/homepage/social-events-desktop.jpg 1x,
              /images/homepage/social-events-desktop@2x.jpg 2x" media="(min-width: 120rem)">
            <source srcset="/images/homepage/social-events-tablet.jpg 1x, 
               /images/homepage/social-events-tablet@2x.jpg 2x" media="(min-width: 76.8rem)">
            <source srcset="/images/homepage/social-events-mobile.jpg 1x,
               /images/homepage/social-events-mobile@2x.jpg 2x" media="(min-width: 30rem)">
               <img class="event__photo event__photo--social" id="photo-3" src="/images/homepage/social-events-mobile.jpg" alt="Social Events">
          </picture>


Form Zuolizhu
.form__container {
        position: relative;
        width: 100%;
        background-color: $color-white;

        @media (max-width: $bp-mobile) {
            height: 53.5rem;
        }

        @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
            height: 43.3rem;
        }

        @media (min-width: $bp-desktop) {
            height: 32rem;
        }
        
        .form {
            box-shadow: $bshadow-1;
            background-color: $color-white;
            position: relative;
            margin: auto;

            @media (max-width: $bp-mobile) {
                height: 58.5rem;
                width: 32.7rem;
                transform: translateY(-10rem);
                
            }

            @media (min-width: $bp-tablet-start) and (max-width: $bp-tablet-end) {
                height: 54.5rem;
                width: 54rem;
                transform: translateY(-22rem);
            }

            @media (min-width: $bp-desktop) {
                height: 56rem;
                width: 54rem;
                transform: translateX(20rem) translateY(-32rem);
            }

            .error-message {
                display: block;
                font-size: 1rem;
                font-weight: $weight-bold;
                line-height: 1.2;
                padding-top: .7rem;
                text-align: left;
                letter-spacing: -0.012rem;
                color: $color-error;
                visibility: hidden;

                &--text {
                    visibility: visible;
                }
            }

            &__field {
                &--text {
                    margin-bottom: 3.2rem;
                }
            }

            &__field--datetime {
                margin-bottom: 3.2rem;

                @media (max-width: $bp-mobile) {
                    @include flex (column, space-between);
                }

                @media (min-width: $bp-tablet-start) {
                    @include flex (row, space-between);
                }

                .input-containers {
                    @include flex (row, space-between);
                    @media (min-width: $bp-tablet-start) {
                        width: 28.9rem;
                    }
                }

                .input-box {
                    width: 100%;
                    caret-color: $primary-beaver;
                    opacity: 0.5;
                    border: none;
                    padding-left: 1.6rem;
                    padding-bottom: 1.6rem;
                    border-bottom: 1px solid #8e8e8e;
                    transition: $transition-2, border-color, $transition-2, opacity;
                    cursor: pointer;
                    &:focus {
                        opacity: 1;
                        border-bottom: 1px solid $primary-cod-gray;
                        outline: none;
                        &::placeholder {
                            opacity: 1;
                        }
                    }
                    &::placeholder {
                        color: $primary-cod-gray;
                        opacity: 0.5;
                        transition: $transition-2 opacity;
                    }

                    &--small {
                        @media (max-width: $bp-mobile) {
                            width: 7.3rem;
                        }
                        @media (min-width: $bp-tablet-start) {
                            width: 8rem;
                        }
                    }

                    &--large {
                        @media (max-width: $bp-mobile) {
                            width: 8.8rem;
                        }
                        @media (min-width: $bp-tablet-start) {
                            width: 9.7rem;
                        }
                    }
                }
                
            }

            &__number-people {
                @include flex (row, space-between);
                padding-bottom: 1.6rem;
                border-bottom: 1px solid $primary-cod-gray;
                margin-bottom: 3.2rem;

                @media (max-width: $bp-mobile) {
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                @media (min-width: $bp-tablet-start) {
                    padding-left: 2.2rem;
                    padding-right: 2.2rem;
                }
            }

        }

        .date-field--name {
            @media (max-width: $bp-mobile) {
                margin-bottom: .8rem;
            }
        }


    }

    &__dropdown {
        @media (max-width: $bp-mobile) {
            width: 8.8rem;
        }
    }