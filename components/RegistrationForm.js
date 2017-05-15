// class RegistrationForm extends React.Component {
//   render() {
//     return React.createElement('div', {}, [
//       React.createElement('form', {}, [
//         React.createElement('input', { type: 'text' }),
//         React.createElement('input', { type: 'password' }),
//         React.createElement('button', { type: 'submit' })
//       ])
//     ])
//   }
// }

import React from 'react';



class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit"></button>
      </form>
    )
  }
}

export default RegistrationForm;
