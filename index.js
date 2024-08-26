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
    const resultCorrect = document.querySelector('#result-correct');
    const history = document.querySelector('#history');

    send.addEventListener('click', async () => {
        try {
            send.innerHTML = "Cargando...";
            send.disabled = true;
            const IMCCorrect = (parseInt(weight.value) / (parseFloat(height.value) * parseFloat(height.value))).toFixed(2);
            resultCorrect.value = IMCCorrect;

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
            const predictionValue = prediction.toFixed(2);
            result.value = predictionValue;
            if (prediction) {
                send.innerHTML = "Enviar";
                send.disabled = false;
                const countLinesHistory = history.querySelectorAll('tbody > tr').length + 1;
                const relativeError = Math.abs((IMCCorrect - predictionValue) / IMCCorrect) * 100;
                const porcentEqual = (100 - relativeError).toFixed(2);
                history.querySelector('tbody').innerHTML += `
                <tr>
                    <th scope='row'>${countLinesHistory}</th>
                    <td>${weight.value}</td>
                    <td>${height.value}</td>
                    <td>${options.units}</td>
                    <td>${options.activation}</td>
                    <td>${options.optimizer}</td>
                    <td>${options.epochs}</td>
                    <td>${predictionValue}</td>
                    <td>${IMCCorrect}</td>
                    <td>${porcentEqual}%</td>
                </tr>
                `;
            }
        } catch (error) {
            console.error('Error durante predicción: ', error);
            send.innerHTML = "Enviar";
            send.disabled = false;
        }
    });
});