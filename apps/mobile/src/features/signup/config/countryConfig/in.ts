/** Configs for common features used across multiple countries */
export default {
  validations: {
    username: {
      required: true,
      type: 'regex',
      value: /^(?=.*[a-zA-Z])[a-zA-Z]\w{5,}$/,
      message: 'signup.validation.alphanumeric6',
    },
    password: {
      type: 'regex',
      value: /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
    },
  },
  endpoints: {
    usernameAvailability:
      'https://example.com/in-user-service/username-available',
    signup: 'https://example.com/in-user-service/signup',
  },
};
