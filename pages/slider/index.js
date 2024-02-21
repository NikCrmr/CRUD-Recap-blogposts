import styled from "styled-components";
import { useState } from "react";

export default function Slider() {
  const [rangeValue, setRangeValue] = useState(50);
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  return (
    <>
      <label>How do you feel about this website?</label>
      <input
        type="range"
        min={0}
        max={100}
        value={rangeValue}
        onChange={handleRangeChange}
      />
      <StyledColorRange rangeValue={rangeValue}></StyledColorRange>
    </>
  );
}

const StyledColorRange = styled.div`
  background-color: ${(props) =>
    `rgb(${255 - props.rangeValue}, ${props.rangeValue}, 0)`};
  height: 100px;
  width: 80vh;
`;
