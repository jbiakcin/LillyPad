export const signup = ({firstName, lastName, password, email, age, city, gender}) => {

  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {
      user: {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        city: city,
        age: age,
        gender: gender
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