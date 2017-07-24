import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import ParentComponent from './ParentComponent';

import '../styles/App.css';

// class Header extends Component {
//   render() {
//     return (
//       <nav>I am the Navigation Bar</nav>
//     );
//   }
// }

// class Footer extends Component {
//   render() {
//     return (
//       <footer>I am the Footer</footer>
//     );
//   }
// }

// class BaseLayout extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>This should house Header and Footer components and be able to house any children components.
//         <Header />
//         {this.props.children}
//         <Footer />
//       </div>
//
//     );
//   }
// }

// class ParentComponent extends Component {
//   constructor(props){
//     super(props);
//
//     this.handleInput = this.handleInput.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//
//     this.state = {
//       whatToSay: "",
//       whatWasSaid: "",
//     }
//   }
//   handleInput(e) {
//     e.preventDefault();
//     //set the state on input change
//     this.setState({whatToSay: e.target.value});
//     // console.log(whatToSay);
//
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     //check console to see if firing
//     console.log("fired");
//     //set the state for props and for value (prevents output from appearing when typing)
//     this.setState({whatToSay: "", whatWasSaid: this.state.whatToSay});
//     //clear our input by resetting state
//     // this.setState({whatToSay: ""});
//
//   }
//   render() {
//     return (
//       <div>Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
//         <div>
//           <input onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" value={this.state.whatToSay} />
//         </div>
//         <div>
//           <ChildComponent onClick={this.handleSubmit}/>
//           <DisplayComponent sayWhat={this.state.whatWasSaid} />
//         </div>
//       </div>
//     );
//   }
// }

// class ChildComponent extends Component {
//   constructor(props){
//     super(props);
//
//   }
//   render() {
//     return (
//       <div>Dumb Component receiving Props
//         <div>
//           <input type="submit" onClick={this.props.onClick}/>
//         </div>
//       </div>
//     );
//   }
// }

// class DisplayComponent extends Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//       <div>{this.props.sayWhat}</div>
//     );
//   }
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
