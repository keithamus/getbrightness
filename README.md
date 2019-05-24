## getBrightness

This is a mini module to get the [Rec.601 Luma][wiki] value of a given hex
colour. But that sounds boring and not useful, so instead it's called
`getBrightness` which sounds more useful.

This function takes a hex string (or hex number) and returns a number between 0
and 1, which can identify if a colour is "dark" or "light". A dark-ish colour
is likely to have a value of 0.5 or less, while a light-ish colour will likely
have a value of 0.5 or more.

You might use this to determine if a foreground text color should be white or
black given a random hex colour. For example:

```js
import getBrightness from 'getbrightness'
randomBackground = el => {
  const hex = '#' + Math.floor(Math.random()*16777215).toString(16);
  el.style.backgroundColor = hex
  // Should the foreground be black or white? Let's ask getBrightness!
  el.style.color = getBrightness(hex) > 0.6 ? 'black' : 'white'
}
```


[wiki]: https://en.wikipedia.org/wiki/Luma_(video)#Rec._601_luma_versus_Rec._709_luma_coefficients
