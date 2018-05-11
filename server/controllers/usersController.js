/**
 * Module contains Controller for User
 */
const { User } = require("../models");
const mongoose = require("mongoose");
/**
 * Controller for User
 * @class
 * @name UsersController
 */
const controller = {
  /**
   * @param  {Object} newUser - New user to be created
   * @param {boolean} toObject - true to get plain user, false to get mongoose instance
   * @return {Promise}
   *  A Promise resolved with User model instance when success
   *  A Promise resolved with Error when fail
   */
  createUser: (newUser, toObject) => {
    console.log("[UsersController] - createUser");
    return User.create(newUser)
      .then(user => {
        console.log("[UsersController] - create success");
        if (toObject) {
          return Promise.resolve(user.toObject());
        } else {
          return Promise.resolve(user);
        }
      })
      .catch(err => {
        console.log("[UsersController] - create fail");
        console.log(err);
      });
  }
};

module.exports = controller;
