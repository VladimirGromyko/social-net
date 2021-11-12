import React from 'react';
import profileReducer, {addPostAC, deletePostAC} from "./profile-reducer";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 2},
        {id: 2, message: "Hi, what are you doing?", likesCount: 5},
        {id: 3, message: "It's my first post.", likesCount: 4},
    ],
    profile: {
        "aboutMe": "",
        "contacts": {
            "facebook": "",
            "website": null,
            "vk": "",
            "twitter": "",
            "instagram": "",
            "youtube": null,
            "github": "",
            "mainLink": null
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": "",
        "fullName": "",
        "userId": "2",
        "photos": {
            "small": "",
            "large": ""
        }
    },
    status: ""
}

test('length of post should be incremented', () => {

    // 1.test data
    let action = addPostAC("Study hard TS")

    // 2. action
    let newState = profileReducer(initialState, action)

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

test('message of new post should be correct', () => {

    // 1.test data
    let action = addPostAC("Study hard TS")

    // 2. action
    let newState = profileReducer(initialState, action)

    // 3. expectation
    expect(newState.posts[3].message).toBe("Study hard TS");
});

test('after deleting length of messages should be decrement', () => {

    // 1.test data
    let action = deletePostAC(1)

    // 2. action
    let newState = profileReducer(initialState, action)

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

test(`after deleting length of messages shouldn't be decrement if id is incorrect`  , () => {

    // 1.test data
    let action = deletePostAC(1000)

    // 2. action
    let newState = profileReducer(initialState, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});