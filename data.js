// Datos de entrada: Peso y altura
export const inputData = [
    [80, 1.79], [90, 1.80], [100, 1.60], [50, 1.60], [50, 1.80], [60, 1.28], [78, 1.78],
    [65, 1.65], [85, 1.70], [55, 1.50], [95, 1.85], [72, 1.76], [68, 1.72], [110, 1.90],
    [59, 1.64], [77, 1.74], [82, 1.80], [73, 1.68], [92, 1.88], [67, 1.63], [88, 1.82],
    [79, 1.75], [60, 1.55], [70, 1.70], [76, 1.77], [69, 1.71], [87, 1.86], [64, 1.66],
    [74, 1.73], [81, 1.79], [91, 1.83], [66, 1.62], [83, 1.81], [54, 1.52], [94, 1.87],
    [61, 1.58], [102, 1.92], [58, 1.61], [75, 1.78], [71, 1.67],
    [82, 1.84], [74, 1.69], [97, 1.82], [60, 1.50], [65, 1.55], [79, 1.73], [85, 1.80],
    [78, 1.76], [88, 1.90], [100, 1.85], [95, 1.83], [72, 1.75], [67, 1.70], [81, 1.77],
    [63, 1.60], [110, 1.95], [68, 1.68], [75, 1.74], [90, 1.88], [105, 1.89], [55, 1.57],
    [69, 1.65], [77, 1.80], [83, 1.82], [99, 1.87], [70, 1.66], [62, 1.58], [98, 1.91],
    [71, 1.72], [84, 1.83], [66, 1.63], [87, 1.85], [73, 1.70], [60, 1.54], [93, 1.81],
    [89, 1.86], [55, 1.51], [58, 1.56], [64, 1.61], [101, 1.88], [107, 1.93]
];

// Datos de salida: Calculo de IMC
export const outputData = inputData.map(([weight, height]) => weight / (height * height));