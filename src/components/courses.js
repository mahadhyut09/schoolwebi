import React from 'react';
import './courses.css';
import { Link, useNavigate } from 'react-router-dom';
import math from '../images/math.avif';
import physics from '../images/physics.avif';
import chemistry from '../images/chemistry.jpg';

function Courses() {
  
  return (
    <div className="container mt-5 ">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
                <div className="col-lg-4">
                  <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={math} alt="Math" />
                    <div className="card-body">
                      <h5 className="card-title">Math Course</h5>
                      <p className="card-text">Explore the fascinating world of mathematics.</p>
                      <Link to={"/course?s=maths"} className="btn btn-primary">Goto Course</Link>
                    </div>
                  </div>
                </div>
              <div className="col-lg-4">
                <div className="card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={physics} alt="Physics" />
                  <div className="card-body">
                    <h5 className="card-title">Physics Course</h5>
                    <p className="card-text">Dive into the principles of physics and its applications.</p>
                    <Link to={"/course?s=physics"} className="btn btn-primary">Goto Course</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={chemistry} alt="Chemistry" />
                  <div className="card-body">
                    <h5 className="card-title">Chemistry Course</h5>
                    <p className="card-text">Discover the wonders of chemistry and its real-world implications.</p>
                    <Link to={"/course?s=chemistry"} className="btn btn-primary">Goto Course</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-4 offset-lg-4">
                <div className="card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={chemistry} alt="Hidden Chemistry" />
                  <div className="card-body">
                    <h5 className="card-title">Hidden Subject Course</h5>
                    <p className="card-text">This course is hidden in the carousel.</p>
                    <button type="submit" className="btn btn-primary">Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only ">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Courses;
