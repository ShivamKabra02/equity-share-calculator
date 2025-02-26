function calculate() {
    let totalAssets = getSum(['land', 'plant', 'assets', 'cash', 'inventory', 'debtors']);
    let thirdPartyLiabilities = getSum(['creditors', 'employee_payments', 'utility_payments', 'other_liabilities']);
    let bookValue = totalAssets - thirdPartyLiabilities - getValue('preference_shares');
    let netAdjustedAssetValue = bookValue - getValue('secured_loan');
    let equityShares = getValue('equity_shares') || 1;
    let valuePerEquityShare = netAdjustedAssetValue / equityShares;

    let realizableAssets = getSum(['land_realizable', 'plant_realizable', 'assets_realizable', 'inventory_realizable', 'debtors_realizable', 'cash']);
    let adjustedBookValue = realizableAssets - thirdPartyLiabilities - getValue('preference_shares');
    let netAdjustedAssetValue1 = adjustedBookValue - getValue('secured_loan');
    let valuePerEquityShare1 = netAdjustedAssetValue1 / equityShares;

    let resultText = `
        <b>Total Assets:</b> ${totalAssets}<br>
        <b>Third Party Liabilities:</b> ${thirdPartyLiabilities}<br>
        <b>Book Value:</b> ${bookValue}<br>
        <b>Net Adjusted Asset Value:</b> ${netAdjustedAssetValue}<br>
        <b>Number of Equity Shares:</b> ${equityShares}<br>
        <b>Value per Equity Share:</b> ${valuePerEquityShare.toFixed(2)}<br>
        <b>Realizable Value of Assets:</b> ${realizableAssets}<br>
        <b>Adjusted Book Value:</b> ${adjustedBookValue}<br>
        <b>Net Adjusted Asset Value1:</b> ${netAdjustedAssetValue1}<br>
        <b>Value per Equity Share1:</b> ${valuePerEquityShare1.toFixed(2)}
    `;

    document.getElementById('result-text').innerHTML = resultText;
    document.getElementById('results').style.display = 'block';
}

function getValue(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function getSum(ids) {
    return ids.reduce((sum, id) => sum + getValue(id), 0);
}

function resetForm() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('results').style.display = 'none';
}
