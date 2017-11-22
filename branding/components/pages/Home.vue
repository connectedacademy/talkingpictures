<template lang="pug">
  .home-page
    a#brand-label(href="https://worldpressphoto.org" target="_blank")
      img(src="https://www.worldpressphoto.org/sites/redesign/themes/wpp/logo.png")
      //-| WORLD PRESS PHOTO

    .row#header-row
      .fixed-width
        .col.text-left
          img(src="./WPP_Develop_logo.svg" height="100")
        .col.text-right
          #partnership
            h5 In partnership with
            h1 Connected Academy
        .clearfix

    .row#image-row
      .abstract-background
      .fixed-width
        img(v-for="(image, index) in images" v-bind:key="index" v-bind:src="image")

    .row#info-row
      .fixed-width
        .col
          .tile.padded-tile.white-tile(style="padding-left: 20px")
            h1 Talking Pictures
            h3.subtle Starting January 2018
            p An open course in critical visual storytelling. Designed and run in association with the World Press Photo Foundation.
        .col
          .tile.padded-tile.red-tile#interest-tile
            h2 Register your interest
            p Drop your email in the box below and we will keep you updated on the course.
            form(v-bind:class="{ active: (email.length > 0) }" action="//connectedacademy.us15.list-manage.com/subscribe/post?u=dbb44795016061543fc6914c2&id=81bfb1b426" method="post" target="_blank")
              input(v-model="email" placeholder="Your email address" type="email" name="EMAIL" required)
              button(type="submit") Submit
              .clearfix
        .clearfix

    .row#text-row
      .abstract-background
      .fixed-width
        .tile.padded-tile.darkest-grey-tile
          h1 Future Learning
          p Experience a new learning experience

    .row#stats-row
      .fixed-width
        .col.col-4
          .tile.padded-tile.stat-tile.text-center
            h1 3
            h3 Classes
        .col.col-4
          .tile.padded-tile.stat-tile.text-center
            h1 16
            h3 Speakers
        .col.col-4
          .tile.padded-tile.stat-tile.text-center
            h1 5
            h3 Countries
        .clearfix

    .row#text-row
      .fixed-width
        .tile.padded-tile.red-tile
          h1 Join the Course
          p The course is now available, dive in by clicking the button below.
          router-link.button(v-bind:to="{ name: 'schedule' }") Course Schedule

</template>

<script>
import PageStyle from '@/mixins/PageStyle'

export default {
  name: 'home-page',
  mixins: [ PageStyle ],
  data() {
    return {
      pageStyle: { type: 'home', visible: false, minimized: true },
      images: [
        'https://talkingpictures.connectedacademy.io/course/content/media/medium/week1-picture2.jpg',
        'https://talkingpictures.connectedacademy.io/course/content/media/medium/week2-example2.jpg',
        'https://talkingpictures.connectedacademy.io/course/content/media/medium/week2-example1.jpg'
      ],
      email: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
// Stand alone component

// Colors
$color-grey = #999
$color-darkest-grey = #222
$color-text-grey = #CCC
$color-red = #C4002D
$color-border = #f2f2f2

// Mixins
box-sizing()
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

animate()
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

// Common
.clearfix
  clear both
  float none

.text-left
  text-align left

.text-right
  text-align right

.text-center
  text-align center

// Layout
.abstract-background
  background-image url('./WPP_Develop_background.svg')
  background-position right
  background-size cover
  height 0
  padding-bottom 800px
  position absolute
  top -50%
  bottom -50%
  left -30%
  right 0
  z-index -1
  width 100%
.row
  margin-top 30px
  position relative
  .fixed-width
    margin 0 auto
    max-width 960px
    position relative
  .col
    float left
    width 50%
    &.col-4
      width calc(100% / 3)

  @media(max-width: 568px)
    .col, .col-4
      width 100% 

// Tiles
.tile
  background-color white
  box-sizing border-box
  &.padded-tile
    padding 50px
  &.darkest-grey-tile
    background-color $color-darkest-grey
    color white
  &.grey-tile
    background-color $color-grey
    color white
  &.red-tile
    background-color $color-red
    color white
  &.white-tile
    background-color white
    color $color-darkest-grey
    h1, h2, h3, h4, h5
      &.subtle
        color $color-text-grey
  h1, h2, h3, h4, h5
    margin 0
    padding 0

// Page
.home-page
  max-width 100%
  overflow hidden
  padding-bottom 100px
  a#brand-label
    background-color $color-red
    bottom 0
    color white
    font-weight bold
    padding 0
    position fixed
    right 50px
    text-decoration none
    z-index 50
    img
      height 44px
    

// Header Row
.row#header-row
  height 100px
  margin 0
  .col
    width 50% !important
  #partnership
    padding 40px
    h1, h5
      margin 0
      padding 0
    h5
      line-height 10px
      font-size 0.7em
    h1
      line-height 30px
      font-size 1.0em

// Image Row
.row#image-row
  .fixed-width
    height 400px
    position relative
    @media(max-width: 568px)
      height 250px
      img
        max-height 250px
    img
      background-color $color-darkest-grey
      max-height 300px
      width 50%
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%) rotate(-5deg)
      &:nth-child(1)
        transform translate(-160%, -50%) rotate(-5deg)
      &:nth-child(2)
        transform translate(60%, -50%) rotate(-5deg)

// Text Row
.row#text-row
  .button
    background-color white
    border none
    color $color-red
    display inline-block
    margin-top 20px
    padding 10px 30px
    text-decoration none

// Stats Row
.row#stats-row
  margin-top 20px
  .fixed-width
    max-width 980px
  .col
    padding 0 10px
    @media(max-width: 568px)
      padding 0 20px
      width 100% 
    .stat-tile
      @media(max-width: 568px)
        margin-bottom 20px
// Tiles
#interest-tile
  form
    overflow hidden
    position relative
    input
      background-color darken($color-red, 10%)
      border none
      box-sizing border-box
      color white
      font-size 1.1em
      outline 0
      line-height 20px
      padding 20px
      padding-right 110px
      width 100%
      &::-webkit-input-placeholder
        color alpha(white, 0.5)
      &::-moz-placeholder
        color alpha(white, 0.5)
      &:-ms-input-placeholder
        color alpha(white, 0.5)
      &:-moz-placeholder
        color alpha(white, 0.5)
    button[type="submit"]
      animate()
      background-color darken($color-red, 10%)
      border none
      border-left $color-red 2px solid
      border-radius 0px
      color white
      font-size 1.1em
      float right
      line-height 60px
      outline 0
      padding 0 20px
      position absolute
      right -110px
      top 0
      width 110px
      text-align center
      &:hover
        background-color darken($color-red, 20%)
        cursor pointer
    &.active
      button[type="submit"]
        right 0
</style>
