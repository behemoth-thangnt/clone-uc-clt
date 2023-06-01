export const adminsLogin = `
mutation AdminsSignIn(
  $email: String!
  $password: String!
  $rememberMe: Boolean
) {
  adminsSignIn(email: $email, password: $password, rememberMe: $rememberMe) {
    token
    message
  }
}
`;
