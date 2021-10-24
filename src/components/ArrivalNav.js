import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArrivalNav extends Component {
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
  links = [
    {
      id: 1,
      text: "All",
    },
    {
      id: 2,
      text: "Women's",
      link: "women",
    },
    {
      id: 3,
      text: "Men's",
      link: "men",
    },
    {
      id: 4,
      text: "Kid's",
      link: "kids",
    },
    {
      id: 5,
      text: "Accesories",
      link: "accesories",
    },
    {
      id: 6,
      text: "Shoes",
      link: "sjhoes",
    },
    {
      id: 7,
      text: "Perfume",
      link: "perfume",
    },
  ];
  render() {
    return (
      <div>
        <div className="flex bg-gray-400 md:flex-row md:ml-32 flex-col my-4">
          <div className="font-bold text-white text-xl"> NEW ARRIVALS </div>
          <div className="md:ml-80">
            <ul className="flex flex-col md:flex-row">
              {this.links.map((link) => (
                <Link
                  to={link.link}
                  key={link.id}
                  className="md:bg-gray-400 cursor-pointer px-6 py-2 text-white text-sm"
                >
                  {link.text}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ArrivalNav;
