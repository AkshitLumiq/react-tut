// const ErrorHandler = (props) => {
const ErrorHandler = ({errorMessage}) => {
  return (  
    <div className="Error">
      {/* <h2>{props.errorMessage}</h2> */}
      <h2>{errorMessage} ...</h2>
    </div>
  );
}
 
export default ErrorHandler;