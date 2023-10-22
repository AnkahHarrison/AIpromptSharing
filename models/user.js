// import {Schema, model,models} from 'mongoose';

// const userSchema = new Schema({
//     email: {
//         type: String,
//         unique:[ true, 'Email already exists'],
//     required:[ true, 'Email is required'],
//         trim: true,
//         maxlength: 32,

//     },

//     username: {
//         type: String,
//         required: [true, 'Name is required'],
//         trim: true,
//         maxlength: 32,
//         match: [/^[a-zA-Z0-9]+$/, 'Name is invalid'],
//     },

//     image: {
//         type: String,
//         // default: 0,
//     },
//     // password: {
//     //     type: String,
//     //     required: true,
//     //     trim: true,
//     //     maxlength: 32,
//     // },

//     // purchases: {
//     //     type: Array,
//     //     default: [],
//     // },
// });

// const User = models.User || ("user", userSchema);

// export default User;

import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
