import React, { Component } from "react";
import "../styles/Forms.module.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showLogin: false,
      values: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleLOpenModal = this.handleLOpenModal.bind(this);
    this.handleLCloseModal = this.handleLCloseModal.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
  }
  handleLOpenModal() {
    this.setState({ showLogin: true });
  }

  handleLCloseModal() {
    this.setState({ showLogin: false });
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  componentDidMount() {
    this.props.loginModalRef(this);
  }

  fields = [
    {
      placeholder: "Enter your username or email",
      label: "username",
      type: "text",
      component: "username",
      _uid: "1",
    },
    {
      placeholder: "Enter your password",
      label: "password",
      type: "password",
      component: "password",
      _uid: "2",
    },
  ];

  render() {
    const { values, showLogin } = this.state;
    return (
      <Modal
        className="flex"
        open={showLogin}
        onClose={this.handleLCloseModal}
        center
      >
        <div className="flex flex-col md:flex-row -p-40">
          <div className="md:h-auto py-4 pr-32 pl-8 rounded-lg bg-black md:w-1/2 px-24">
            <div className="w-full py-32 px-8">
              <h3 className="text-4xl font-weight-bold text-white">
                Welcome Back to Shoppy
              </h3>
              <span className="text-white text-sm">
                Login for more privileges
              </span>
            </div>
          </div>
          <div className="flex px-16 rounded-lg bg-white px-32 justify-end p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="my-4 text-2xl font-bold text-center text-gray-700">
                Sign up
              </h1>

              {this.fields.map((field) => (
                <div className="my-4" key={field._uid}>
                  <label className="block text-sm">{field.label}</label>
                  <input
                    type={field.type}
                    value={values[field._uid]}
                    onChange={this.handleChange.bind(this, field._uid)}
                    className="w-full h-10 px-3 text-base placeholder-gray-500 border rounded-xl focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-black border border-transparent rounded-xl active:bg-black-600 hover:bg-black-700 focus:outline-none focus:shadow-outline-black"
                href="#"
              >
                Sign up
              </button>
              <div className="my-4 text-center">
                <p className="text-sm">Forgot Password?</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default LoginPage;
