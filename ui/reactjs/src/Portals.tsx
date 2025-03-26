import ReactDOM from "react-dom";

export function Modal({ children, domId }) {
  const domElement = document.getElementById(domId);
  // console.log({ document, domElement, domId });

  /**
   * @description
   * unable to get the DOM element here
   * from codesandbox
   */
  return (
    <>
      <p>
        Sorry, Unable to read the DOM element via codesandbox. So, this example
        will not works!
      </p>
      <code>ReactDOM.createPortal(children, domElement);</code>
    </>
  );
  // return ReactDOM.createPortal(children, domElement);
}

export function PortalExample(props) {
  return (
    <>
      <button>show modal</button>
      <Modal domId="modal-container">
        <div>Hi, I am modal</div>
        <button>close</button>
      </Modal>
    </>
  );
}
