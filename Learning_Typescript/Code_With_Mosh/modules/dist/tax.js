/**
 * Calculates income tax based on a fixed percentager
 * @param {number} income - net income after qualifying expenses are considered
 * @return {number}
 */
export default function calculateTax(income) {
    return income * 0.2;
}
