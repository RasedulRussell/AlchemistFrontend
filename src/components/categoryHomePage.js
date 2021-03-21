import React from 'react'

class CategoryHomePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentDidMount(){
    fetch(this.props.url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div>
        <center><h1>{this.props.title}</h1></center>
        {this.state.contacts.map((contact) => (
          <div class="card">
            <img 
                src= {contact.mediaurl}
               alt="new"
            />
            <div class="card-body">
              <h6>{contact.title}</h6>
              <p> {contact.details} </p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default CategoryHomePage