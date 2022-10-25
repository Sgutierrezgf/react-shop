import React from "react";
import "@styles/error404page.scss";

const NotFound = () => {
  return (
    <div className="body">
      <section className="notFound">
        <div className="img">
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <img
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </div>
        <div className="text">
          <h1 data-testid="error404__title">no encontramos esta página.</h1>
          <h1 className="h1">404</h1>
          <h2 className="h2">PAGE NOT FOUND</h2>
          <h3 className="h3">BACK TO HOME?</h3>
          <a href="/home" className="yes">
            YES
          </a>
          <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo" className="no">
            NO
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
