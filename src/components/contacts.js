import React from 'react'

class Contacts extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentDidMount(){
    fetch('http://localhost:8080/articles')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div>
        <center><h1>News Details</h1></center>
        {this.state.contacts.map((contact) => (
          <div class="card">
            <div class="card-body">
              <h6>{contact.title}</h6>
              <p> {contact.details} </p>
              <a href="url">{contact.url}</a>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Contacts