const mongoose = require("mongoose");
/**
 * Module contains all database models
 * @module Models
 */

/**
 * User Schema
 * @class
 * @name UserSchema
 */
const UserSchema = new mongoose.Schema({
  /**
   * User's fullname
   * @memberof UserSchema
   * @name name
   */
  name: {
    type: String,
    select: true
  },
  /**
   * User's email
   * @memberof UserSchema
   * @name email
   */
  email: {
    type: String,
    select: true,
    unique: true
  },
  /**
   * User's password
   * @memberof UserSchema
   * @name password
   */
  password: {
    type: String,
    select: false
  }
});
/**
 * Conversation Schema
 * @class
 * @name ConversationSchema
 */
const ConversationSchema = new mongoose.Schema({
  /**
   * Conversation's name
   * @memberof ConversationSchema
   * @name name
   */
  name: {
    type: String,
    select: true
  },
  /**
   * Users join in conversation, referenced by their Ids
   * @memberof ConversationSchema
   * @name users
   */
  users: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }]
  }
});
/**
 * Message Schema
 * @class
 * @name MessageSchema
 */
const MessageSchema = new mongoose.Schema({
  /**
   * userId sending this message
   * @memberof MessageSchema
   * @name fromUser
   */
  fromUser: mongoose.SchemaTypes.ObjectId,
  /**
   * content of the message
   * @memberof MessageSchema
   * @name content
   */
  content: mongoose.SchemaTypes.String,
  /**
   * the time sending this message
   * @memberof MessageSchema
   * @name createdAt
   */
  createdAt: mongoose.SchemaTypes.Date,
  /**
   * conversationId this message belongs to
   * @memberof MessageSchema
   * @name conversationId
   */
  conversationId: {
    type: mongoose.Types.ObjectId,
    ref: "Conversation"
  }
});

const User = mongoose.model("User", UserSchema);
const Conversation = mongoose.model("Conversation", ConversationSchema);
const Message = mongoose.model("Message", MessageSchema);
module.exports = {
  User,
  Conversation,
  Message
};
