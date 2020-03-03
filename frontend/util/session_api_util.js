export const signup = ({firstName, lastName, password, email}) => {

  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {
      user: {
        email,
        password,
        first_name: firstName,
        last_name: lastName
      }
    }
  })
};

export const login = user => (
  $.ajax({
    url: `/api/session`,
    method: `POST`,
    data: {user}
  })
);

export const logout = () => (
  $.ajax({
    url: `/api/session`,
    method: "DELETE"
  })
)