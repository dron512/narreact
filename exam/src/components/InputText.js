import { useRef, useState } from "react";

function InputText() {
  const [text, setText] = useState("입력하셔야합니다");
  const p1Input = useRef();
  const p2Input = useRef();
  //   setText("입력하셔야합니다");
  const onChange = (e) => {
    console.log(p1Input.current.value);
    console.log(p2Input.current.value);
    console.log(p1Input.current.value.length);
    if (p1Input.current.value.length < 1) {
      console.log("여기 걸림?");
      setText("입력하셔야합니다");
    } else if (p1Input.current.value === p2Input.current.value) {
      setText("비번 같음");
    } else {
      setText("비번 틀림");
    }
  };
  return (
    <div>
      <input name="name" onChange={onChange} ref={p1Input} />
      <input name="name" onChange={onChange} ref={p2Input} />
      <span>{text}</span>
      {/* <button onClick={onClick}>버튼</button> */}
    </div>
  );
}

export default InputText;
