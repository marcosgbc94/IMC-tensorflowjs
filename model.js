import * as tf from '@tensorflow/tfjs';

// Definir el modelo y la función de predicción
export async function model(inputData, outputData, testData, options = {}) {
    try {
        // Crear y configurar el modelo
        const model = tf.sequential();
        model.add(tf.layers.dense({inputShape: [2], units: options.units, activation: options.activation})); // Capa oculta
        model.add(tf.layers.dense({units: 1}));
        model.compile({loss: "meanSquaredError", optimizer: options.optimizer});

        // Procesar datos
        const data = tf.tensor2d(inputData, [inputData.length, 2]);
        const results = tf.tensor2d(outputData, [outputData.length, 1]);

        // Entrenamiento
        await model.fit(data, results, {epochs: options.epochs});

        // Realizar la predicción
        const testDataTensor = tf.tensor2d(testData, [testData.length, 2]);
        const prediction = model.predict(testDataTensor);
        const predictionArray = await prediction.array();

        console.log('======================================================');
        console.log("Peso: " + testData[0][0], "Altura: " + testData[0][1]);
        console.log("Opciones: ", options);
        console.log("Predicciones: ", predictionArray[0][0]);

        return predictionArray[0][0];
    } catch (error) {
        console.error('Error durante predicción: ', error);
    }
}
