const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator =  require('validator')

const userSchema = new Schema({
  badgeID: {
    type: Number,
    required: 'Badge ID cannot be empty',
    unique: true
  },
  firstName: {
    type: String,
    required: 'Name cannot be empty',
  },
  surname: {
    type: String,
    required: 'Name cannot be empty',
  },
  password : {
    type: String,
    required: 'Cannot be empty'
  },
  rank: {
    type: String,
    required: 'Rank cannot be empty',
  },
  profilePic: {
    type: String,
    required: 'Photo cannot be empty',
  },
  location: {
    type: String,
    required: 'Location cannot be empty',
  },
  zone: {
    type: String,
  },
  sub_division: {
    type: String,
  },
  police_station: {
    type: Number,
  },
  phoneNo: {
    type: String,
    required: 'PhoneNo cannot be empty'
  },
  emailId: {
    type: String,
    required: 'EmailId cannot be empty',
    // validate: {
    //   validator: validator.isEmail,
    //   message: 'Please provide a valid email'
    // },
    unique: true,
  },
  gender: {
    type: String,
    required: 'Gender cannot be empty',
  },
  sessions: [{
    session: {
      type: Schema.Types.ObjectId,
      ref: 'Session',
    },
    attended: {
      type: Boolean,
      default: false,
    },
  }],
  issues: [{
    issue: {
      badgeID: {
        type: Number,
        ref: 'User',
        required: 'Badge ID cannot be empty',
      },
      issueID: {
        type: Number,
        required: 'ID cannot be empty',
      },
      issueText: {
        type: String,
        required: 'Issue cannot be empty',
      },
      raised: {
        type: Date,
        required: 'Enter raised date',
      },
      resolved: Date,
    },
    pertaining: Boolean,
  }],
  sos: [{
    sosId: {
      type: Number,
      required: 'sosId cannot be empty',
    },
    desc: {
      type: String,
      required: 'Cannot be empty',
    },
  }],
  reportsTo: Number,
});

module.exports = mongoose.model('User', userSchema);
