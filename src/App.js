import React, { Component } from 'react';

const User = (props) => {
  return <div>Hi, Iam {props.name}, and {props.age} years old !</div>
}

User.defaultProps = {
  age: 1
}

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 35 },
    { name: "mako" }
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
