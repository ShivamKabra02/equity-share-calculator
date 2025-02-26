function calculate() {
    let land = parseFloat(document.getElementById('land').value) || 0;
    let plant = parseFloat(document.getElementById('plant').value) || 0;
    let assets = parseFloat(document.getElementById('assets').value) || 0;
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    let inventory = parseFloat(document.getElementById('inventory').value) || 0;
    let debtors = parseFloat(document.getElementById('debtors').value) || 0;
    let creditors = parseFloat(document.getElementById('creditors').value) || 0;
    let employee_payments = parseFloat(document.getElementById('employee_payments').value) || 0;
    let utility_payments = parseFloat(document.getElementById('utility_payments').value) || 0;
    let other_liabilities = parseFloat(document.getElementById('other_liabilities').value) || 0;
    let preference_shares = parseFloat(document.getElementById('preference_shares').value) || 0;
    let secured_loan = parseFloat(document.getElementById('secured_loan').value) || 0;
    let equity_shares = parseFloat(document.getElementById('equity_shares').value) || 1;
    let land_realizable = parseFloat(document.getElementById('land_realizable').value) || 0;
    let plant_realizable = parseFloat(document.getElementById('plant_realizable').value) || 0;
    let assets_realizable = parseFloat(document.getElementById('assets_realizable').value) || 0;
    let inventory_realizable = parseFloat(document.getElementById('inventory_realizable').value) || 0;
    let debtors_realizable = parseFloat(document.getElementById('debtors_realizable').value) || 0;

    let total_assets = land + plant + assets + cash + inventory + debtors;
    let third_party_liabilities = creditors + employee_payments + utility_payments + other_liabilities;
    let book_value = total_assets - third_party_liabilities - preference_shares;
    let net_adjusted_asset_value = book_value - secured_loan;
    let value_per_equity_share = net_adjusted_asset_value / equity_shares;

    let realizable_value_of_assets = land_realizable + plant_realizable + assets_realizable + inventory_realizable + debtors_realizable + cash;
    let adjusted_book_value = realizable_value_of_assets - third_party_liabilities - preference_shares;
    let net_adjusted_asset_value1 = adjusted_book_value - secured_loan;
    let value_per_equity_share1 = net_adjusted_asset_value1 / equity_shares;

    document.getElementById('results').innerHTML = `
        <p>Total Assets: ${total_assets}</p>
        <p>Third Party Liabilities: ${third_party_liabilities}</p>
        <p>Book Value: ${book_value}</p>
        <p>Net Adjusted Asset Value: ${net_adjusted_asset_value}</p>
        <p>Value per Equity Share: ${value_per_equity_share.toFixed(2)}</p>
        <p>Realizable Value of Assets: ${realizable_value_of_assets}</p>
        <p>Adjusted Book Value: ${adjusted_book_value}</p>
        <p>Net Adjusted Asset Value1: ${net_adjusted_asset_value1}</p>
        <p>Value per Equity Share1: ${value_per_equity_share1.toFixed(2)}</p>
    `;
}
