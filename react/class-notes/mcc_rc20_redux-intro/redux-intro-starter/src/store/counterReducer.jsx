const initialState = {
  count: 3,
  }
 
  //^^ TO DEFINE TYPES AS CONSTANTS (via "rxconst" snippet):
  const INC = "INC";
  const DEC = "DEC";
  const CLR = "CLR";


  //^^ ACTION CREATORS:
  export const increment = () => ({ type: INC });
  export const decrement = () => ({ type: DEC });
  export const clear     = () => ({ type: CLR });

export const counterReducer = (state = initialState, action) => {

    switch (action.type) {
      case increment:
        return { count: state.count + 1};
    
      case decrement:
        return ((state.count > 1) && {count: state.count - 1}) || {count: 0};
        
      case clear:
        return { count: 0};

      default:
        return state;
    }}

        