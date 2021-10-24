import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import logo from "../Shopy.svg";
import "../styles/Navbar.css";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

class AlternativeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  componentDidMount() {
    this.setState({
      isOpen: false,
    });
  }
  componentWillUnmount() {
    this.setState({
      isOpen: false,
    });
  }

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  registerModalRef = ({handleROpenModal}) => {
    this.showRModal = handleROpenModal;
  };
  onRegisterClick = () => {
    this.showRModal();
  };
  loginModalRef = ({handleLOpenModal}) => {
    this.showLModal = handleLOpenModal;
  };

  onLoginClick = () => {
    this.showLModal();
  };

  links = [
    {
      id: 1,
      text: "Home",
      link: "/home"
    },
    {
      id: 2,
      text: "Shop",
      link: "/shop"
    },
    {
      id: 3,
      text: "About",
      link: "/about"
    },
    {
      id: 4,
      text: "Contact",
      link: "/contact"
    },
    {
      id: 5,
      text: "Discount",
      link: "discount"
    },
  ];
  render() {
    return (
      <nav className="bg-white fixed z-4 top-0 w-full shadow-md">
        <div className="container px-6 py-2">
          <LoginPage loginModalRef={this.loginModalRef} />
          <RegisterPage registerModalRef={this.registerModalRef} />
          <div className="flex items-center justify-around">
            <div className="flex-shrink-0">
              <img className="h-16 w-16" src={logo} alt="Shoppy App" />
            </div>
            <div className="hidden flex md:block">
              <div className="flex justify-end">
                {this.links.map((link) => (
                  <Link
                  to={link.link}
                    key={link.id}
                    className="pt-2 cursor-pointer hover:bg-blue-100 hover:no-underline text-black px-4 text-md font-medium"
                  >
                    {link.text}
                  </Link>
                ))}
                <button
                  onClick={this.onRegisterClick}
                  className="-mt-1 md:ml-24 px-8 bg-black cursor-pointer block py-2 items-center text-white text-sm font-medium"
                >
                  Register
                </button>
                <button
                  onClick={this.onLoginClick}
                  className="-mt-1 px-12 md:ml-8 bg-black cursor-pointer block py-2 items-center text-white text-sm font-medium"
                >
                  Login
                </button>
                </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={this.toggleNav}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-end rounded-md text-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!this.state.isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <Transition
            show={this.state.isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {() => (
              <div className="block space-y-1" id="mobile-menu">
                {this.links.map((link) => (
                  <Link
                  to={link.link}
                    key={link.id}
                    className="cursor-pointer hover:bg-blue-100 block px-32 text-black text-sm font-medium"
                  >
                    {link.text}
                  </Link>
                ))}
                  <button onClick={this.onRegisterClick} className="-mt-1 ml-32 bg-black px-2 cursor-pointer block px-4 py-2 items-center text-white text-sm font-medium">
                    Register
                  </button>
                  <button onClick={this.onLoginClick} className="-mt-1 ml-32 bg-black px-4 cursor-pointer block px-4 py-2 items-center text-white text-sm font-medium">
                    Login
                  </button>
              </div>
            )}
          </Transition>
        </div>
      </nav>
    );
  }
}

export default AlternativeNav;
