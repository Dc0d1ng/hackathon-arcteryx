import "./landing.scss";
import { useState, useEffect } from "react";
import background from "../../assets/images/background.png";
import background2 from "../../assets/images/background2.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";

const apiUrl = "http://localhost:8080";

function Landing() {
  async function fetchData() {
    try {
      const response = await axios.get(`${apiUrl}/clothing-size/214`);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  fetchData();

  // Modal.setAppElement('#main');
  const [modalStates, setModalStates] = useState(true);

  const openModal = () => {
    setModalStates(true);
  };

  const closeModal = () => {
    setModalStates(false);
  };

  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [sleeveCm, setSleeveCm] = useState("");
  const [chestCm, setChestCm] = useState("");
  const [waistCm, setWaistCm] = useState("");
  const [bustCm, setBustCm] = useState("");
  const [hipCm, setHipCm] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.get(`${apiUrl}/clothing-size/1`);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(modalStates);

  return (
    <>
      <img id="main" src={background} onClick={openModal} />
      <img src={background2} />
      <Modal
        isOpen={modalStates}
        onRequestClose={() => closeModal()}
        contentLabel="Sizing Fit"
        className={"modal__window"}
        overlayClassName={"modal-overlay"}
        shouldCloseOnOverlayClick={true}
      >
        {/* <button
          className="modal__close-btn"
          onClick={() => closeModal()}
        >
          Close window
        </button> */}
        <div className="modal__content">
          <h1 className="modal__title">Please input your sizes</h1>
          <form className="modal__copy">
            <input
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="gender"
              required
            ></input>
            <input
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="height"
              required
            ></input>
            <input
              name="sleeve_cm"
              value={sleeveCm}
              onChange={(e) => setSleeveCm(e.target.value)}
              placeholder="sleeve_cm"
              required
            ></input>
            <input
              name="chest_cm"
              value={chestCm}
              onChange={(e) => setChestCm(e.target.value)}
              placeholder="chest_cm"
              required
            ></input>
            <input
              name="waist_cm"
              value={waistCm}
              onChange={(e) => setWaistCm(e.target.value)}
              placeholder="waist_cm"
              required
            ></input>
            <input
              name="bust_cm"
              value={bustCm}
              onChange={(e) => setBustCm(e.target.value)}
              placeholder="bust_cm"
              required
            ></input>
            <input
              name="hip_cm"
              value={hipCm}
              onChange={(e) => setHipCm(e.target.value)}
              placeholder="hip_cm"
              required
            ></input>
          </form>
        </div>
        <div className="modal__actions">
          <button className="button primary">Fit Me</button>

          <button className="button secondary" onClick={() => closeModal()}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Landing;
