import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  return <div>Hi, Iam {props.name}, and {props.age} years old !</div>
}
// デフォルト値を設定
// User.defaultProps = {
//   age: 1
// }


User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired //isRequired: 必須の場合は付与する
}

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 35 },
    { name: "Noname" }
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )

}

export default App;
