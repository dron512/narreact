// function Tail(props) {
//     const mytailiam = props.iam;
//     return (
//       <div>
//         Tail 부분시작
//         <br />
//         {mytailiam.firstName}입니다.
//         <br />
//         Tail 부분끝
//         <br />
//       </div>
//     );
//   }

function Tail({ iam }) {
  return (
    <div>
      Tail 부분시작
      <br />
      {iam.firstName}입니다.
      <br />
      Tail 부분끝
      <br />
    </div>
  );
}

export default Tail;
