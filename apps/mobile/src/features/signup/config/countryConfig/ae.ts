/** Configs for common features used across multiple countries
 * For ex: Signup could be a feature used across countries - all the changes applicable to the signup for a different country to be configured here
 * */
export default {
  validations: {
    username: {
      required: true,
      type: 'pattern',
      value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,}$/,
      message: 'signup.validation.alphanumeric5',
    },
    password: {
      required: true,
      type: 'pattern',
      value: /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
    },
  },
  endpoints: {
    usernameAvailability:
      'https://example.com/ae-user-service/username-available',
    signup: 'https://example.com/ae-user-service/signup',
  },
};
