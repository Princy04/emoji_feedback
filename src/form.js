
import React from 'react';
import './App.css';
import axios from 'axios'
class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   fields: {},
    //   errors: {}
    // }
  }


  // handleValidation() {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let formIsValid = true;

  //   //Name
  //   if (!fields["name"]) {
  //     formIsValid = false;
  //     errors["name"] = "Cannot be empty";
  //   }

  //   if (typeof fields["name"] !== "undefined") {
  //     if (!fields["name"].match(/^[a-zA-Z]+$/)) {
  //       formIsValid = false;
  //       errors["name"] = "Only letters";
  //     }
  //   }

  //   //Email
  //   if (!fields["email"]) {
  //     formIsValid = false;
  //     errors["email"] = "Cannot be empty";
  //   }

  //   if (typeof fields["email"] !== "undefined") {
  //     let lastAtPos = fields["email"].lastIndexOf('@');
  //     let lastDotPos = fields["email"].lastIndexOf('.');

  //     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
  //       formIsValid = false;
  //       errors["email"] = "Email is not valid";
  //     }
  //   }



  //   this.setState({ errors: errors });
  //   return formIsValid;
  // }

  // contactSubmit(e) {
  //   e.preventDefault();
  //   if (this.handleValidation()) {
  //     alert("Form submitted");
  //   } else {
  //     alert("Form has errors.")
  //   }

  // }

  // handleChange(field, e) {
  //   let fields = this.state.fields;
  //   fields[field] = e.target.value;
  //   this.setState({ fields });
  // }

  render() {
    const success = () => {
      alert("CALM DOWN! Coz life is short")
    }
    return (
      <div>

        {/* <form name="contactform" className="contactform" onSubmit={this.contactSubmit.bind(this)}>
          <div className="col-md-6">
            <fieldset>
              <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
              <span className="error">{this.state.errors["name"]}</span>
              <br />
              <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
              <span className="error">{this.state.errors["email"]}</span>
              <br />
              <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} />
              <br />
              <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]} />
              <br />
            </fieldset>
          </div>
          <div className="col-md-6">
            <fieldset>
              <textarea refs="message" cols="28" rows="10"
                className="comments" placeholder="Message" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
            </fieldset>
          </div>
          <div className="col-md-12">
            <fieldset>
              <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>
            </fieldset>
          </div>
        </form> */}
        <div className="intercom-reaction-picker" dir="ltr">
          <div className="intercom-reaction-prompt">How's Your Mood Today ? </div>
          <button id="zoom" className="intercom-reaction" data-reaction-text="smiley" tabIndex={0} aria-label="Smiley Reaction">
            <span data-emoji="smiley" title="Smiley">😃</span>
          </button>
          <button id="zoom" className="intercom-reaction" data-reaction-text="neutral_face" tabIndex={0} aria-label="Neutral face Reaction">
            <span data-emoji="neutral_face" title="Neutral face">😐</span>
          </button>
          <button id="zoom" className="intercom-reaction" data-reaction-text="disappointed" tabIndex={0} aria-label="Disappointed Reaction">
            <span data-emoji="disappointed" title="Disappointed">😞</span>
          </button>
          <button id="zoom" className="intercom-reaction" tabIndex={0} aria-label="Disappointed Reaction"
            onClick={() => { success(); }}>
            <span className="intercom-reaction" tabIndex={0} data-emoji="smiley" title="Angry">😡 </span>
          </button>
        </div >
      </div >
    )
  }
}

export default App;