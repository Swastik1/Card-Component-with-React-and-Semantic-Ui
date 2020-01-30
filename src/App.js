import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';
// function getButtonText(){
//   return "Click On Me!"
// }

const App = () => {
  // const buttonText = {text: "Click me"}
  // const labelText = "Enter name: "
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
        <h1>Warning!!!</h1>
        <h3>Are you sure ?</h3>
        </div>
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail 
      author="Swastik" 
      date="Today at 5:00PM" 
      comment="Debugged the dev project!"
      avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail author="Amit"
       date="Today at 6:00PM" 
       comment="Take the dev to UAT repo!"
       avatar={faker.image.avatar()} />
       </ApprovalCard>

      <ApprovalCard>
      <CommentDetail author="Raj" 
      date="Today at 7:00PM" 
      comment="Make it to the production ASAP!"
      avatar={faker.image.avatar()} />
      </ApprovalCard>
      
</div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

{/* <label className="label" htmlFor="name">
      {labelText}
      </label>
      <input id="name" type="text" />
  <button style={{backgroundColor: 'blue', color:'white'}}>{buttonText.text}</button> */}
