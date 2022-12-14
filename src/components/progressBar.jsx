function ProgressBar({ progressCheck, progressText, bullet }) {
  return (
    <div className="progress-bar">
      <div className="step">
        <p
          ref={(element) => {
            progressText.current[0] = element;
          }}
        >
          Rank
        </p>
        <div
          className="bullet"
          ref={(element) => {
            bullet.current[0] = element;
          }}
        >
          <span>1</span>
        </div>
        <div
          className="check fas fa-check"
          ref={(element) => {
            progressCheck.current[0] = element;
          }}
        ></div>
      </div>
      <div className="step">
        <p
          ref={(element) => {
            progressText.current[1] = element;
          }}
        >
          Gender
        </p>
        <div
          className="bullet"
          ref={(element) => {
            bullet.current[1] = element;
          }}
        >
          <span>2</span>
        </div>
        <div
          className="check fas fa-check"
          ref={(element) => {
            progressCheck.current[1] = element;
          }}
        ></div>
      </div>
      <div className="step">
        <p
          ref={(element) => {
            progressText.current[2] = element;
          }}
        >
          Category
        </p>
        <div
          className="bullet"
          ref={(element) => {
            bullet.current[2] = element;
          }}
        >
          <span>3</span>
        </div>
        <div
          className="check fas fa-check"
          ref={(element) => {
            progressCheck.current[2] = element;
          }}
        ></div>
      </div>
      <div className="step">
        <p
          ref={(element) => {
            progressText.current[3] = element;
          }}
        >
          Domicile
        </p>
        <div
          className="bullet"
          ref={(element) => {
            bullet.current[3] = element;
          }}
        >
          <span>4</span>
        </div>
        <div
          className="check fas fa-check"
          ref={(element) => {
            progressCheck.current[3] = element;
          }}
        ></div>
      </div>
    </div>
  );
}
export default ProgressBar;
