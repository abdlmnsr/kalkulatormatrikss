function getMatrixValues(prefix) {
    return [
        [parseInt(document.getElementById(`${prefix}00`).value, 10), parseInt(document.getElementById(`${prefix}01`).value, 10)],
        [parseInt(document.getElementById(`${prefix}10`).value, 10), parseInt(document.getElementById(`${prefix}11`).value, 10)]
    ];
}

function setResult(matrix) {
    document.getElementById('result').innerHTML = `
        ${matrix[0][0]} ${matrix[0][1]}<br>
        ${matrix[1][0]} ${matrix[1][1]}
    `;
}

function addMatrices() {
    const matrixA = getMatrixValues('a');
    const matrixB = getMatrixValues('b');
    const result = [
        [matrixA[0][0] + matrixB[0][0], matrixA[0][1] + matrixB[0][1]],
        [matrixA[1][0] + matrixB[1][0], matrixA[1][1] + matrixB[1][1]]
    ];
    setResult(result);
}

function subtractMatrices() {
    const matrixA = getMatrixValues('a');
    const matrixB = getMatrixValues('b');
    const result = [
        [matrixA[0][0] - matrixB[0][0], matrixA[0][1] - matrixB[0][1]],
        [matrixA[1][0] - matrixB[1][0], matrixA[1][1] - matrixB[1][1]]
    ];
    setResult(result);
}

function multiplyMatrices() {
    const matrixA = getMatrixValues('a');
    const matrixB = getMatrixValues('b');
    const result = [
        [
            matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0],
            matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1]
        ],
        [
            matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0],
            matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1]
        ]
    ];
    setResult(result);
}
