import React from 'react'

const Quotation = (props) => {
  return (
    <div>
     <blockquote>
      <h2 id= "text">"{props.text}</h2>
      <footer id= "author">{props.author}</footer>
     </blockquote>
    </div>
  )
}

export default Quotation
