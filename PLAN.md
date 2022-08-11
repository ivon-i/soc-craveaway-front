## Plan

- central alignment of cards on homepage ✅
- hero changing on full screen to figma design on mobile with repositioning input ✅
- styling navbar draw
- alignment of cards on profile page ✅
- alignment of shopping list chips on profile page
- add plus button to recipepage ingredients that can add items to shoppingList on user profile ❌ requires backend table ❌
- resizing image on dev2 branch for cards and for recipepage when card is clicked on ✅
- delete input from navbar on everypage except for homepage: How? ❌

---

tuesday 9th august

- change +create recipe button and submit recipe button on all instances:
  - AddRecipeButton component
    - Hero component: Up & Down
  - create recipe page
  - to have rounded border-radius at least 50% of the height of the element. This is to be consistent with the tone of voice of the app: welcoming, appetising and quality and all other elements have rounded corners. ✅

\*\*\*\* Homepage

- change the yellow of the star to the brand yellow ✅

\*\*\*\* Create recipe page

- see if an icon or illustration looks better before the page title inline with the title (something food related to add approachability)

\*\*\*\* Recipe page

- place the heart icon ✅
- place the nutrition icon ✅
- make sure the image comes through from the data and populate and cover the image area ✅
- see the Creator on a seperate line from the icon and author name ✅
- space the icon strip centrally ✅
- size the icons and the text to be slightly larger ✅
- make sure ingredients are contained within the width of the box and they wrap to a new line no matter how many ingredients added
- see if an icon or illustration looks better before the page title inline with the title (something food related to add approachability)
- position the image centrally and to the top

\*\*\*\* User profile page

- add navbar to user profile page
- consult figma design for layout
- copy and paste code over from style branch for whole page to see if it fits

<!-- limit top recipes to 12 and add show all recipes button
1. array method - slice first 12 top recipes array (payload)
2.

 -->

const [limit, setLimit] = useState(12);

{payload.slice(0, limit ? limit : payload.length).map(item => <Cards data={limit} />)};

<button onClick={() => setLimit(null)}>All recipes</button>

---

When you click the chip "all" in the Categories Component we want to populate the cards area in Cards Component with all of the cards from the data

- we need to clear the current set of cards and render the new set of cards

- we also need to change the 'Top recipes' headline to 'All recipes'

++

- add image to home page ✅
- fix image on mobile screen size mobile hero (ask team what they think it looks like)
- place the all button on mobile ✅
- make the opacity of the required lighter ✅
- align nav hamburger menu icon to left (use material icon for it to get rid of the misalignment)
