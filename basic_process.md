Component
- The interface
- Uses function (props) from dispatch (container)
Container
- Grabs function from Action, send to Component via dispatch
Action
- actions {type, payload} Type is capitalized text of action name
- issued with thunk (action creators), 
    - calls util function   (sends data to backend)
        - (later) issues actions        (receives data from backend)
Util
- ajax call with Method, address, and data
-----------------------------------
Controller
- Changes data according to Method
- Changes done according to model

Model
- Defines relationship with data types
- Defines type's characteristics

Schema
- Define data characteristics

View/jbuilder
- Returns data
-----------------------------------
<!-- Store
- Takes data from action -->
Action
- issues action (second part of thunk)
Reducer
- Takes state, filters depending on action type
Container
- Sends filtered state to component via mapSTP
