import React, { Component } from 'react'
import { Button } from '@essua/v1-sticks'

class ButtonPage extends Component {
  render() {
    return (
      <div style={{width: "100vw", height: "100vh", backgroundColor: "black"}}>
        <Button onClick={() => {alert("Button works!")}}>This is a Button exampleeeeeeeeeeeeedsahjdgsuaygduysagdyfsatdfsatgy</Button>
      </div>
    )
  }
}

export default ButtonPage
