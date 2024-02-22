import styled from "styled-components";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Slider() {
  const [rangeValue, setRangeValue] = useState(50);
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };
  function Emoji() {
    const decNumber = rangeValue / 2.55;
    console.log("decNumber", decNumber);
    if (decNumber <= 23) {
      return <StyledEmoji>😭</StyledEmoji>;
    }
    if (decNumber >= 23 && decNumber <= 41) {
      return <StyledEmoji>😢</StyledEmoji>;
    }
    if (decNumber >= 42 && decNumber <= 59) {
      return <StyledEmoji>😇</StyledEmoji>;
    }
    if (decNumber >= 60 && decNumber <= 73) {
      return <StyledEmoji>😃</StyledEmoji>;
    }
    if (decNumber > 73) {
      return <StyledEmoji>🥳</StyledEmoji>;
    }
  }
  console.log("rangeValue", rangeValue);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const rangeInputValue = event.target.elements.rangeInput.value;
          const [colorValue, setColorValue] = useState([]);
          setColorValue([{ id: nanoid(), rating, comment }, ...reviews]);
        }}
      >
        <label>How do you feel about this website?</label>
        <input
          type="range"
          min={0}
          max={255}
          name="rangeInput"
          value={rangeValue}
          onChange={handleRangeChange}
        />
      </form>
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
