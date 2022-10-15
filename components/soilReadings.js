export function calculateAvarage(read) {
  var total = 0;
  var count = 0;

  read.forEach(function (item, index) {
    total += item;
    count++;
  });
  return total / count;
}
export function nitrogenAnalysis(Nitrogen) {
  let evaluation = null;
  if (Nitrogen >= 0 && Nitrogen <= 280.0) {
    evaluation = "low";
  } else if (Nitrogen >= 281 && Nitrogen <= 560) {
    evaluation = "medium";
  } else if (Nitrogen >= 561 && Nitrogen <= 580) {
    evaluation = "high";
  } else {
    evaluation = 0;
  }

  return evaluation;
}
export function phosphorusAnalysis(Phosphorus) {
  let evaluation = null;
  if (Phosphorus >= 0.0 && Phosphorus <= 10.0) {
    evaluation = "low";
  } else if (Phosphorus >= 10.1 && Phosphorus <= 24.0) {
    evaluation = "medium";
  } else if (Phosphorus >= 24.1 && Phosphorus <= 31.0) {
    evaluation = "high";
  } else {
    evaluation = 0;
  }
  return evaluation;
}
export function potassiumsAnalysis(potassium) {
  let evaluation = null;
  if (potassium >= 0.0 && potassium <= 35.0) {
    evaluation = "low";
  } else if (potassium >= 35.1 && potassium <= 276.0) {
    evaluation = "medium";
  } else if (potassium >= 275.1 && potassium <= 395.0) {
    evaluation = "high";
  } else {
    evaluation = 0;
  }
  return evaluation;
}
