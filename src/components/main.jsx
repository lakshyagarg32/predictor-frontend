import { useRef } from "react";
import { NavLink, Link, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import "./main.css";
import ProgressBar from "./progressBar";

function Main() {
  const navigate = useNavigate();
  const slidePage = useRef(null);
  const progressText = useRef([]);
  const progressCheck = useRef([]);
  const bullet = useRef([]);
  let current = 1;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const rank = event.target.rank.value;
    const gender = event.target.gender.value;
    const category = event.target.category.value;
    const domicile_state = event.target.domicile_state.value;
    try {
      const res = await axios.post("/api/test", {
        rank: rank,
        gender: gender,
        category: category,
        domicile_state: domicile_state,
      });
      const { Rank, Gender, Category, Domicile_state, Result } = res.data;
      console.log(Rank, Gender, Category, Domicile_state);
      navigate("/result", {
        state: {
          result:Result
        },
      });
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <header>College Predictor</header>
      <ProgressBar
        progressCheck={progressCheck}
        progressText={progressText}
        bullet={bullet}
      />
      <div className="form-outer">
        <form onSubmit={handleSubmit}>
          <div ref={slidePage} className="page slide-page">
            <div className="title">Enter JEE Main Rank</div>
            <div className="field">
              <input name="rank" type="number" placeholder="Rank"></input>
            </div>
            <div className="field">
              <button
                type="button"
                className="firstNext next"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-25%";
                  progressText.current[current - 1].classList.add("active");
                  bullet.current[current - 1].classList.add("active");
                  progressCheck.current[current - 1].classList.add("active");
                  current += 1;
                }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="page">
            <div className="title">Seat Pool</div>

            <div className="field">
              <select name="gender">
                <option>Gender Neutral</option>
                <option>Female Only</option>
                <option>Both</option>
              </select>
            </div>
            <div className="field btns">
              <button
                type="button"
                className="prev-1 prev"
                onClick={() => {
                  slidePage.current.style.marginLeft = "0%";
                  bullet.current[current - 2].classList.remove("active");
                  progressCheck.current[current - 2].classList.remove("active");
                  progressText.current[current - 2].classList.remove("active");
                  current -= 1;
                }}
              >
                Previous
              </button>
              <button
                type="button"
                className="next-1 next"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-50%";
                  bullet.current[current - 1].classList.add("active");
                  progressCheck.current[current - 1].classList.add("active");
                  progressText.current[current - 1].classList.add("active");
                  current += 1;
                }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="page">
            <div className="title">Category</div>
            <div className="field">
              <select name="category">
                <option>General</option>
                <option>General {"(PWD)"}</option>
                <option>EWS</option>
                <option>EWS {"(PWD)"}</option>
                <option>OBC-NCL</option>
                <option>OBC-NCL {"(PWD)"}</option>
                <option>SC</option>
                <option>SC {"(PWD)"}</option>
                <option>ST</option>
                <option>ST {"(PWD)"}</option>
              </select>
            </div>
            <div className="field btns">
              <button
                type="button"
                className="prev-2 prev"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-25%";
                  bullet.current[current - 2].classList.remove("active");
                  progressCheck.current[current - 2].classList.remove("active");
                  progressText.current[current - 2].classList.remove("active");
                  current -= 1;
                }}
              >
                Previous
              </button>
              <button
                type="button"
                className="next-2 next"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-75%";
                  bullet.current[current - 1].classList.add("active");
                  progressCheck.current[current - 1].classList.add("active");
                  progressText.current[current - 1].classList.add("active");
                  current += 1;
                }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="page">
            <div className="title">Domicile</div>
            <div className="field">
              <select name="domicile_state">
                <option>Choose Domicile State</option>
                <option>Andaman Nicobar Islands</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chandigarh</option>
                <option>Chhattisgarh</option>
                <option>Dadra And Nagar Haveli</option>
                <option>Daman &amp; Diu</option>
                <option>Delhi</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jammu and Kashmir</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Lakshadweep</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Orissa</option>
                <option>Pondicherry</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
              </select>
            </div>
            <div className="field btns">
              <button
                type="button"
                className="prev-3 prev"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-50%";
                  bullet.current[current - 2].classList.remove("active");
                  progressCheck.current[current - 2].classList.remove("active");
                  progressText.current[current - 2].classList.remove("active");
                  current -= 1;
                }}
              >
                Previous
              </button>
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
