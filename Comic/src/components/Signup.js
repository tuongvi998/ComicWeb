import React from 'react';
import { Link } from "react-router-dom";
import './Signup.css';
import { signup } from '../actions/SignupAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        let { username, email, password, repass } = this.state;
        if (password === repass) {
            this.props.signup(username, email, password, 0);
            localStorage.setItem('signup', 'success');
        }
        else {
            alert("Password incorrect!!")
        }

    }


    render() {
        var image_s = {
            width: "250px"
        }
        var d_s = {
            textAlign: "center",
            border: "1px solid #fff",
            padding: "20px 20px 10px 10px",
        }
        var sign = {
            color: "teal",
            fontWeight: " bold",
        }
        var p = {
            textAlign: "left",
            fontWeight: " 600",
            fontVariant: "ordinal"
        }
        var input = {
            width: "400px",
            marginLeft: " 40px"
        }
        let { username, email, password, repass } = this.state;
        let { isSignup } = this.props
        return (
            <>
                <div className="containers h-100">
                    <div className="row h-100 justify-content-center align-items-center">


                    </div>
                </div>
                <form className="row h-100 justify-content-center align-items-center" onSubmit={this.onSubmit}>
                    <div className="relative z-1 mw6-l center-l">
                        <div className="box">
                            <div className="row mt-5" style={{width:"1100px", border: "1px solid teal", borderRadius: "8px", backgroundImage: "url('https://www.megoras.com.tr/wp-content/uploads/2019/04/BACK12.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                                <div className="col-md-4 justify-content-center align-items-center phanTrai">
                                    <Link className="logo" to="/">
                                        <button id="logo_but1">TVT</button>
                                    </Link>
                                    <div style={{paddingTop: "1em"}}>
                                    <strong><Link to="/Signin" className="ddan"><i className="fas fa-sign-in-alt"></i> Go to Sign in </Link></strong>
                                    </div>
                                    
                                        
                                </div>
                                <div className="col-md-8">
                                    <div className="bg" id="thi" style={d_s}>
                                        <h1 style={sign}>SIGN UP</h1>
                                        <form className="thi">
                                            <div className="form-group">
                                                <p style={p} ><i className="far fa-user"></i> User Name</p>
                                                <input style={input} type="text" required className="form-control"
                                                    placeholder="MuGiWara" onChange={e => this.setState({ username: e.target.value })} value={username} required />
                                            </div>
                                            <div className="form-group">
                                                <p style={p} ><i className="fas fa-at"></i> Email</p>
                                                <input style={input} type="text" className="form-control"
                                                    placeholder="abcdef@gmail.com" onChange={e => this.setState({ email: e.target.value })} value={email} required />
                                            </div>
                                            <div className="form-group">
                                                <p style={p}><i className="fas fa-lock"></i> PassWord</p>
                                                <input style={input} type="password" className="form-control"
                                                    placeholder="***********" onChange={e => this.setState({ password: e.target.value })} value={password} required />
                                            </div>
                                            <div className="form-group">
                                                <p style={p}><i className="fas fa-lock"></i>Confirm PassWord</p>
                                                <input style={input} type="password" className="form-control"
                                                    placeholder="***********" onChange={e => this.setState({ repass: e.target.value })} value={repass} required />
                                            </div>
                                            <button type="submit" className="btn-signin">Sign up</button>
                                            {this.Routing()}
                                        </form>
                                        <br>
                                        </br><br></br>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
    Routing() {
        if (localStorage.getItem('signup') === 'success') return <Redirect to='/Signin' />
    }
}

const mapStateToProps = (state) => {
    return {
        isSignup: state.signup
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (username, email, password, role) => dispatch(signup(username, email, password, role))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);