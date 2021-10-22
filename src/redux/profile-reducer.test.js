import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
};

it('new post should be added', () => {
    
    let action = addPostActionCreator('it-kamasutra')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {
    
    let action = addPostActionCreator('it-kamasutra')

    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe('it-kamasutra')
})

it('after deleting length of messages should be decrement', () => {
    
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it("shouldn't change length if there is no correct id ", () => {
    
    let action = deletePost(1000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})