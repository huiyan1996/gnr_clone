export default async function ({redirect, req, query, store}) {
    if (query.exp) { // forced expire session
        return Promise.resolve() 
    }

    // if (store.state.user.loggedIn) 
    //     return redirect('/dashboard')
    
    return Promise.resolve() 
}