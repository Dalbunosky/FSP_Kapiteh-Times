Sass advantages:
$variables that you can reuse throughout
Nesting, allowing css to be more easily read
---------------------------------------
CSS levels:
* universal
tags (<div>, <body>, etc)
class (.classname)
ID (#ID)
inline(PAIN IN ASS)
The physically closer tag will take presidence
!important (Overrides)
---------------------------------------
color: text-color

---------------------------------------
DISPLAY: Sizing elements within Div
block: 
- elements within affected by width and height
- No element will be put to its right/left
- keeps everything vertical
inline:
- elements within are only as big as need be
- stacks horizontal if possible
inline-block:
- elements within affected by width and height
- allow horizontal positioning if possible (vs vertical only for blocky)
flex:
- deal with this later. JUSTIFY-CONTENT
none:

---------------------------------------
FLOAT: Where an element is placed within
- left, 

CLEARFIX: If using float, parent element will not take you into account and thus shrink under you. Clearfix fixes that

---------------------------------------
padding: space between content and border
border: goes around content
margin: space between border and next element
---------------------------------------
CONTENT-BOX: width only includes content
BORDER-BOX: width/height includes everything including margin
---------------------------------------
(display: flex)
FLEX BOX: how elements are arranged within parent
- flex-direction
---------------------------------------

JUSTIFY-CONTENT: where to put element within div


---------------------------------------
POSITION element within parent
- static: will sit within and take close. Other elements will work around it. NOT AFFECTED by left, right, etc
- relative: can be repositoned using left, top, etc
- fixed: fixed RELATIVE to SCREEN, can be repositoned using left, top, etc
- absolute: position ... see example common with navbars