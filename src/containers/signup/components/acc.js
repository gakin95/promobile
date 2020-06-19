import React,{useState} from 'react'

const Testing = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName:''
  });
  const add = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(state)
  };
  const send = e => {
    e.preventDefault();
    console.log(state)
  }
  return (
    <div>
      <form action="submit" onSubmit={send}>
      <input type='text' name='firstName' value={state.firstName} onChange={add}/><br/>
      <input type='text' name='lastName' value={state.lastName} onChange={add}/><br/>
      <button>save</button>
      </form>
    </div>
  )
}

export default Testing