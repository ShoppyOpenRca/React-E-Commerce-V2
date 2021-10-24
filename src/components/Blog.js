import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="grid gap-4 md:grid-cols-3 grid-cols-1 static">
      <div className="static">
        <div className="ml-8 -mb-4 obsolute px-4 w-24 text-white bg-black font-bold border-white">
          <p className="font-bold text-xl">07</p>
          <p className="font-bold">MAR</p>
        </div>
        <img className="object-cover" src="/img/blog1.png" alt="" />
        <h3 className="text-2xl">The Disco Collar on the Street</h3>
        <p>
          Typography is the work of typesetters, compositors, typographers,
          graphic designers, art directors,
        </p>
        <Link to="">Read more</Link>
      </div>
      <div className="static">
        <div className="ml-8 -mb-4 obsolute px-4 w-24 text-white bg-black font-bold border-white">
          <p className="font-bold text-xl">07</p>
          <p className="font-bold">MAR</p>
        </div>
        <img className="object-cover" src="/img/blog2.png" alt="" />
        <h3 className="text-2xl">The Disco Collar on the Street</h3>
        <p>
          Typography is the work of typesetters, compositors, typographers,
          graphic designers, art directors,
        </p>
        <Link to="">Read more</Link>
      </div>
      <div className="static">
        <div className="ml-8 -mb-4 obsolute px-4 w-24 text-white bg-black font-bold border-white">
          <p className="font-bold text-xl">07</p>
          <p className="font-bold">MAR</p>
        </div>
        <img className="object-cover" src="/img/blog3.png" alt="" />
        <h3 className="text-2xl">The Disco Collar on the Street</h3>
        <p>
          Typography is the work of typesetters, compositors, typographers,
          graphic designers, art directors,
        </p>
        <Link to="">Read more</Link>
      </div>
    </div>
  );
}

export default Blog;
