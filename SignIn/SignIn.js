import React,{Component} from "react";
import "./background.css" ;

class Signin extends Component {
  constructor(props){
    super(props);
    this.state={
        signInEmail:'',
        signInPassword:''
      }
    }
    onEmailChange=(event)=>{
      this.setState({signInEmail:event.target.value});
  }

     onPasswordChange=(event)=>{
      this.setState({signInPassword:event.target.value});
  }

     onSubmitsignIn=(event)=>{
       fetch('http://localhost:3000/signin',{
        method:'post',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify({
              email:this.state.signInEmail,
              password:this.state.signInPassword,
        })
   })
      .then(response => response.json())
      .then(user => {
        if(user.id){
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
    }

  render(){
    return (
        <div>
          <article className="br10 ba mv4 w-100 w-50-m w-25-l mw5 shadow-10 center ma5">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0 br10">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                      <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                    </div>
                  </fieldset>
                  <div className="">
                    <input  onClick={this.onSubmitsignIn}  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                  </div>
                  <div className="">
                    <input  onClick={()=>this.props.onRouteChange("register")} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                  </div>
                </div>
              </main>
            </article> 
        </div>
       );}}
export default Signin;
      






