function data(state, action) {
  switch (action.type){
    case 'SEARCH_VIDEO':{
      let results=[]
      if(action.payload.query){
        const list = state.data.categories
        const categories = list.map(category => 
          category.playlist.filter(item =>
            `${item.author} ${item.title}`.toLowerCase().includes(
                action.payload.query.toLowerCase()
            )
          )
        )
        results = categories.flat()
      }
      return {
          ...state,
          search: results
      }
    }
    default:
      return state
  }
}

export default data