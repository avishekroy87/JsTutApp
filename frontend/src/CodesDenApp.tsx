import useCounter from "./hooks/useCounter"



function CodesDenApp() {
    var result = useCounter(1);
    console.log(result.increment());
  return (
    <div>CodesDenApp</div>
  )
}

export default CodesDenApp