import React from 'react';

export function GradientGenerator() {
  const [colors, setColors] = React.useState(['#FFD500', '#FF0040']);

  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function removeColor() {
    if (colors.length === 2) {
      window.alert('You cannot have less than 2 colors!');
      return;
    }

    const nextColors = [...colors];
    nextColors.pop();
    setColors(nextColors);
  }

  function addColor() {
    if (colors.length === 5) {
      window.alert('You cannot add more than 5 colors!');
      return;
    }

    const nextColors = [...colors];
    nextColors.push('#FF0000');
    setColors(nextColors);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>Remove color</button>
        <button onClick={addColor}>Add color</button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={() => {
                    const nextColors = [...colors];
                    nextColors[index] = event.target.value;
                    setColors(nextColors);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
