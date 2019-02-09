import React from "react";
import { Link } from "gatsby";
import Title from "../globals/Title";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, qui autem ut alias vero quod, ullam facilis dolor
              minima reprehenderit a vitae consectetur deserunt harum sit,
              doloremque ea nam. Asperiores harum enim modi, expedita
              necessitatibus ex facilis doloribus temporibus! Officia accusamus,
              porro non inventore dicta laudantium nobis sapiente itaque iure?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
