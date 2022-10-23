# frontend-mentor-interactive-rating-component

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

Card layout was created using HTML and CSS flexbox. Card was centered on the page using CSS flexbox.

Switching cards after rating submission was achieved with JS.

## What I learned

To revert all styling back to CSS stylesheet from ones set in JavaScript, set the style to null.

If this is not done, styles set in CSS on the :hover pseudo-class for the target will not display.

In this particular example, the background color of the rating buttons would not change to orange on hover after they had already been clicked. Setting the styles to null in JS fixed the issue.

```js
selected.style.color = null;
selected.style.background = null;
```
