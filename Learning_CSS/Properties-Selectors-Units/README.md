# CSS-Properties
   cheat sheet: https://css-tricks.com/almanac/
# CSS-Selectors
   Cascading Style Sheets at the most basic level it indicates that the order of CSS rules matter. 
      
      .class
      #id
      *
      element
      element, element
      element1 element2      : select all element2 inside element1
      element1 > element2    : select all element2 that have parent of element1
      element1 + element2    : select any element2 that exatcly after element1
      A ~ B                  : selects all B that follow a A
      :hover
      :last-child
      :first-child
      !important (not recommended)    note : it will break all cascading style
   What seletors win out in the cascade depends on:
   
   - Specificity       note : for calculate https://specificity.keegan.st/
   
   - Importance
   
   - Source Order
# CSS-Units
   em : values are relative to the font-size of the nearest parent element.
      
      Example: <div>The font-size of the div element is set to 30px. <span>The span element inside the div element has a font-size of 0.5em, which equals to 0.5x30 =       
               15px</span>.</div>
   rem : values are relative to the root font-size, or the font-size of the html.

      Example: https://www.w3schools.com/cssref/tryit.php?filename=trycss_unit_rem
