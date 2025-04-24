function Progress() {
  return (
    <>
      <>
        <div
          className="progress"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar text-bg-success"
            style={{ width: "25%" }}
          >
            25%
          </div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Info example"
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="progress-bar text-bg-info" style={{ width: "50%" }}>
            50%
          </div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Warning example"
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar text-bg-warning"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Danger example"
          aria-valuenow={100}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar text-bg-danger"
            style={{ width: "100%" }}
          >
            100%
          </div>
        </div>
      </>
      <>
        <a
          href="#"
          className="btn btn-primary disabled"
          tabIndex={-1}
          role="button"
          aria-disabled="true"
        >
          Primary link
        </a>
        <a
          href="#"
          className="btn btn-secondary disabled"
          tabIndex={-1}
          role="button"
          aria-disabled="true"
        >
          Link
        </a>
      </>
    </>
  );
}

export default Progress;
