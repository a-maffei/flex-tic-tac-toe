export default function Status({ winner, xIsNext }) {
  let status;

  if (winner) {
    status = `Winner ${winner}`;
  } else {
    status = `Next player ${xIsNext ? "X" : "0"}`;
  }

  return <div className="status">{status}</div>;
}
