import React, { Component } from "react";
import "../styles/Forms.module.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

class RegisterPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      submitted: false,
      showRegister: false,
      values: [],
    };
    this.handleROpenModal = this.handleROpenModal.bind(this);
    this.handleRCloseModal = this.handleRCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
  }

  handleROpenModal() {
    this.setState({ showRegister: true });
  }

  handleRCloseModal() {
    this.setState({ showRegister: false });
  }

  componentDidMount() {
    this.props.registerModalRef(this);
  }

  fields = [
    {
      placeholder: "Enter your fullname",
      label: "Full Name",
      type: "text",
      component: "fullname",
      _uid: "1",
    },
    {
      placeholder: "Enter your username",
      label: "User Name",
      type: "text",
      component: "username",
      _uid: "2",
    },
    {
      placeholder: "Enter your email",
      label: "Email",
      type: "email",
      component: "email",
      _uid: "3",
    },
    {
      placeholder: "Enter your password",
      label: "Password",
      type: "password",
      component: "password",
      _uid: "4",
    },
  ];

  render() {
    const { values, showRegister } = this.state;
    return (
      <Modal
        className="flex"
        open={showRegister}
        onClose={this.handleRCloseModal}
        center
      >
        <div className="flex flex-col md:flex-row -p-40">
          <div className="md:h-auto py-4 pr-32 pl-4 rounded-md bg-black md:w-1/2 px-24">
            <div className="w-full py-40 px-8">
              <h3 className="text-4xl font-weight-bold text-white">
                Welcome To Shoppy
              </h3>
              <span className="text-white text-sm">
                Login for more privileges
              </span>
            </div>
          </div>
          <div className="flex px-16 rounded-2xl bg-white px-32 justify-end p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                Sign up
              </h1>

              {this.fields.map((field) => (
                <div className="mt-2" key={field._uid}>
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
              <div className="text-center">
                <p className="text-sm py-2">Forgot Password?</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default RegisterPage;
