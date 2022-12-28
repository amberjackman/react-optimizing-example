import './App.css';
import React,{useState, useRef} from 'react';
import Modal from './Components/Modal';
import MyInput from './Components/Myinput';

// function App() {

//   const [visible,setVisible] = useState(false);

//   const open = () =>{
//     setVisible(true)
//   }

//   const close = () => {
//     setVisible(false);
//   }

//   return (<div>
//     <button onClick={open}>open</button>
//     {visible && (
//     <Modal>
//       <div style={{
//         width: '100vw',
//         height: '100vh',
//         background: 'rgba( 0, 0, 0, 0.5)'
//       }}
//       onClick={close}>hello</div>
//       </Modal>
//       )}
//   </div>
//   )
// }

//////////////////////////////////////////////////

function App() {
  const myInputRef = useRef();

  const click =() => {
    console.log(myInputRef.current.value)
  }
  return <div>
    <MyInput ref= {myInputRef} />
    <button onClick={click}> send </button>
  </div>
}

export default App;

/////////////////////////////////////////////


// function Person({name, age}) {

//     console.log("Person render");
//     return <div>
//       {name} / {age}
//     </div>;
// }
  // shouldComponentUpdate(previosProps) {
  //   for(const key in this.props) {
  //     if (perviesProps[key] !== this.props[key]) {
  //       return true
  //     }
  //   }
  //   return false;
  // }

    // componentDidMount() {
  //   console.log('Foo component Didmount', this.props.children);
  // }
  // componentWillUnmount() {
  //   console.log('Foo component willunmount');
  // }

  // static getDerivedStateFromProps(nextProps, prevProps) {
  //   console.log("Foo getDerivedStateFromProps", nextProps, prevProps)
  //   return {};  
  // }


// class App extends React.Component {




//   state = {
//     text :"",
//     persons: [
//       {id: 1, name: 'Mark', age: 39},
//       {id: 2, name: 'anna', age: 29}
//     ]
//   };

//   // componentDidMount() {
//   //   setInterval(() => {
//   //     this.setState({count: this.state.count + 1 })
//   //   },1000)
//   // }

//   render() {
//     const {text, persons} = this.state;
//     return (<div>
//       <input type = "text" value={text} onChange={this._change} />
//       <ul>
//         {persons.map(person => {
//           return <Person {...person} key={person.id} 
//           onClick= {this.toPersonClcik} />
//         })}
//       </ul>
//     </div>)
//   }

//   _change = e => {
//     this.setState({
//       ...this.state,
//       text: e.target.value
//     })
//   };

//   toPersonClcik = () =>{

//   }
// }
// 







  // render() {
  //   if (this.state.count % 2 === 0 ) {
  //     return <ul>
  //       <Foo key="2">sec</Foo>
  //       <Foo key="3">thi</Foo>
  //     </ul>
  //     }

  //     return <ul>
  //       <Foo key="1">first</Foo>
  //       <Foo key="2">sec</Foo>
  //       <Foo key="3">thi</Foo>

  //     </ul>
  // }

  

