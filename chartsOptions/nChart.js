export const options1 = {
  responsive: true,
  plugins: {
    Legend: {
      display: true,
    },
    title: {
      display: true,
      text: "  Nitrogen",
      color: "white",
      font: {
        size: 18,
      },
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: "red",
      fill: "start",
    },
    point: {
      radius: 1,
      hitRadius: 1,
    },
  },
  scales: {
    x: {
      display: true,
      ticks: {
        color: "white",
      },
    },
    y: {
      display: true,
      ticks: {
        color: "white",
      },
    },
  },
};
