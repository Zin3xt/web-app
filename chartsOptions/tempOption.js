export const options4 = {
  responsive: true,
  plugins: {
    Legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Temperature",
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
      borderColor: "gray",
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
