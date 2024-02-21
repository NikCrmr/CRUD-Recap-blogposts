import styled from "styled-components";
import { useState } from "react";

export default function Slider() {
  const [rangeValue, setRangeValue] = useState(50);
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  function Emoji() {
    const decNumber = rangeValue / 2.55;
    console.log("decNumber", decNumber);
    if (decNumber <= 41) {
      return <StyledEmoji>😢</StyledEmoji>;
    }
    if (decNumber >= 42 && decNumber < 59) {
      return <StyledEmoji>😇</StyledEmoji>;
    }
    if (decNumber > 59) {
      return <StyledEmoji>🥳</StyledEmoji>;
    }
  }
  console.log("rangeValue", rangeValue);
  return (
    <>
      <label>How do you feel about this website?</label>
      <input
        type="range"
        min={0}
        max={255}
        value={rangeValue}
        onChange={handleRangeChange}
      />
      <StyledColorRange rangeValue={rangeValue}></StyledColorRange>
      <Emoji />
    </>
  );
}

const StyledColorRange = styled.div`
  background-color: ${
    (props) => `hsl(${(props.rangeValue / 255) * 120}, 100%, 50%)`
    //`rgb(${255 - props.rangeValue}, ${props.rangeValue}, 0)`
  };
  height: 100px;
  width: 80vh;
`;

const StyledEmoji = styled.span`
  font-size: 4rem;
`;
