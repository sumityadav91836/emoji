// import {Component} from 'react'
import './index.css'

const Feedback = props => {
  const {resources} = props
  const {name, imageUrl} = resources
  console.log(name)
  console.log(imageUrl)

  return (
    <div className="bg-container">
      <div className="feedback-card">
        <h1 className="heading">
          How Satisfied are you with our customer support performance?
        </h1>
        <div className="emojis-container">
          <div className="emoji-container">
            <img src={imageUrl} alt="name" className="emoji" />
            <p className="emoji-name">{name}</p>
          </div>
          <div className="emoji-container">
            <img src={imageUrl} alt="name" className="emoji" />
            <p className="emoji-name">{name}</p>
          </div>
          <div className="emoji-container">
            <img src={imageUrl} alt="name" className="emoji" />
            <p className="emoji-name">{name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
