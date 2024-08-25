import { inputData, outputData } from './data';
import {model} from './model';

document.addEventListener('DOMContentLoaded', () => {
    const send = document.querySelector('#send');
    const weight = document.querySelector('#weight');
    const height = document.querySelector('#height');
    const units = document.querySelector('#units');
    const activation = document.querySelector('#activation');
    const optimizer = document.querySelector('#optimizer');
    const epochs = document.querySelector('#epochs');
    const result = document.querySelector('#result');

    send.addEventListener('click', async () => {
        try {
            send.innerHTML = "Cargando...";
            send.disabled = true;

            const testData = [[parseInt(weight.value), parseFloat(height.value)]];

            const optimizerValue = optimizer.value ? optimizer.value : "sgd";
            const activationValue = activation.value ? activation.value : "relu";
            const unitsValue = parseInt(units.value) && parseInt(units.value) > 0 && parseInt(units.value) < 31 ? parseInt(units.value) : 20;
            const epochsValue = parseInt(epochs.value) && parseInt(epochs.value) > 0 && parseInt(epochs.value) < 5001 ? parseInt(epochs.value) : 500;

            const options = {
                units: unitsValue,
                activation: activationValue,
                optimizer: optimizerValue,
                epochs: epochsValue
            };

            const prediction  = await model(inputData, outputData, testData, options);
            result.value = prediction.toFixed(2);
            if (prediction) {
                send.innerHTML = "Enviar";
                send.disabled = false;
            }
        } catch (error) {
            console.error('Error durante predicción: ', error);
            send.innerHTML = "Enviar";
            send.disabled = false;
        }
    });
});