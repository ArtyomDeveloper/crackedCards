document.addEventListener('DOMContentLoaded', () => {

    // Information
    const tableData = [
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '03/27', name: 'DAVID ***', country: 'US', state: 'CA', address: 'Yes', zip: '92***', extra: 'Phone, Email, IP', bank: 'NAVY F.C.U', price: '$35' },
        { type: 'MASTERCARD', subtype: 'DEBIT STANDARD', expiry: '07/26', name: 'EMILY ***', country: 'US', state: 'NY', address: 'Yes', zip: '10***', extra: 'Email', bank: 'CHASE BANK', price: '$30' },
        { type: 'AMEX', subtype: 'CREDIT GOLD', expiry: '11/28', name: 'JASON ***', country: 'US', state: 'TX', address: 'Yes', zip: '75***', extra: 'Phone, Email', bank: 'AMERICAN EXPRESS', price: '$40' },
        { type: 'VISA', subtype: 'DEBIT PLATINUM', expiry: '02/29', name: 'LAURA ***', country: 'US', state: 'FL', address: 'Yes', zip: '33***', extra: 'IP', bank: 'WELLS FARGO', price: '$78' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '06/27', name: 'RYAN ***', country: 'US', state: 'IL', address: 'Yes', zip: '60***', extra: 'Phone', bank: 'BANK OF AMERICA', price: '$36' },
        { type: 'VISA', subtype: 'CREDIT SIGNATURE', expiry: '12/26', name: 'SOPHIA ***', country: 'US', state: 'NV', address: 'Yes', zip: '89***', extra: 'Email, IP', bank: 'US BANK', price: '$34' },
        { type: 'MASTERCARD', subtype: 'DEBIT GOLD', expiry: '04/28', name: 'ASHANTI ***', country: 'US', state: 'OH', address: 'Yes', zip: '43***', extra: 'Phone, Email', bank: 'PNC BANK', price: '$46' },
        { type: 'AMEX', subtype: 'CREDIT PLATINUM', expiry: '09/27', name: 'HANNAH ***', country: 'US', state: 'GA', address: 'Yes', zip: '30***', extra: 'Email', bank: 'AMERICAN EXPRESS', price: '$69' },
        { type: 'VISA', subtype: 'DEBIT CLASSIC', expiry: '01/25', name: 'DANIEL ***', country: 'US', state: 'AZ', address: 'Yes', zip: '85***', extra: 'Phone, Email, IP', bank: 'BANK OF THE WEST', price: '$27' },
        { type: 'MASTERCARD', subtype: 'CREDIT PLATINUM', expiry: '08/29', name: 'ELIZIBETH ***', country: 'US', state: 'MI', address: 'Yes', zip: '48***', extra: 'Phone', bank: 'ALLY BANK', price: '$112' },
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '05/26', name: 'OLIVER ***', country: 'UK', state: 'LND', address: 'Yes', zip: 'SW1***', extra: 'Phone, Email', bank: 'BARCLAYS', price: '$32' },
        { type: 'MASTERCARD', subtype: 'DEBIT PREPAID', expiry: '10/28', name: 'CHARLOTTE ***', country: 'UK', state: 'ENG', address: 'Yes', zip: 'E2***', extra: 'Email', bank: 'N/A', price: '$106' },
        { type: 'VISA', subtype: 'CREDIT GOLD', expiry: '07/27', name: 'BENJAMIN ***', country: 'UK', state: 'SCT', address: 'Yes', zip: 'EH1***', extra: 'Phone, Email, IP', bank: 'LLOYDS BANK', price: '$45' },
        { type: 'MASTERCARD', subtype: 'CREDIT PLATINUM', expiry: '11/29', name: 'AMELIA ***', country: 'UK', state: 'WLS', address: 'Yes', zip: 'CF1***', extra: 'Phone', bank: 'NATWEST', price: '$68' },
        { type: 'VISA', subtype: 'DEBIT PLATINUM', expiry: '03/25', name: 'GEORGE ***', country: 'UK', state: 'NIR', address: 'Yes', zip: 'BT1***', extra: 'Email, IP', bank: 'BANK OF IRELAND UK', price: '$91' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '09/27', name: 'ISLA ***', country: 'UK', state: 'ENG', address: 'Yes', zip: 'M1***', extra: 'Phone, Email', bank: 'TSB BANK', price: '$33' },
        { type: 'VISA', subtype: 'CREDIT SIGNATURE', expiry: '06/26', name: 'HARRY ***', country: 'UK', state: 'LND', address: 'Yes', zip: 'EC2***', extra: 'Phone, Email', bank: 'SANTANDER UK', price: '$35' },
        { type: 'MASTERCARD', subtype: 'DEBIT GOLD', expiry: '08/28', name: 'MIA ***', country: 'UK', state: 'ENG', address: 'Yes', zip: 'B1***', extra: 'Phone, IP', bank: 'VIRGIN MONEY UK', price: '$30' },
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '04/27', name: 'LEO ***', country: 'UK', state: 'SCT', address: 'Yes', zip: 'G1***', extra: 'Email', bank: 'COUTTS', price: '£50' },
        { type: 'AMEX', subtype: 'CREDIT PLATINUM', expiry: '12/29', name: 'GRACE ***', country: 'UK', state: 'ENG', address: 'Yes', zip: 'SE1***', extra: 'Phone, Email', bank: 'AMERICAN EXPRESS UK', price: '$59' },
        { type: 'VISA', subtype: 'DEBIT STANDARD', expiry: '01/26', name: 'NOAH ***', country: 'CA', state: 'ON', address: 'Yes', zip: 'M5***', extra: 'Phone, IP', bank: 'ROYAL BANK OF CANADA', price: '$33' },
        { type: 'MASTERCARD', subtype: 'CREDIT CLASSIC', expiry: '05/27', name: 'AVA ***', country: 'CA', state: 'BC', address: 'Yes', zip: 'V6***', extra: 'Email', bank: 'TD CANADA TRUST', price: '$34' },
        { type: 'VISA', subtype: 'CREDIT GOLD', expiry: '07/28', name: 'LUCAS ***', country: 'CA', state: 'QC', address: 'Yes', zip: 'H3***', extra: 'Phone, Email', bank: 'BANK OF MONTREAL', price: '$32' },
        { type: 'MASTERCARD', subtype: 'DEBIT PLATINUM', expiry: '02/29', name: 'ELLA ***', country: 'CA', state: 'AB', address: 'Yes', zip: 'T2***', extra: 'IP', bank: 'SCOTIABANK', price: '$89' },
        { type: 'VISA', subtype: 'CREDIT WORLD', expiry: '10/26', name: 'ETHAN ***', country: 'CA', state: 'MB', address: 'Yes', zip: 'R3***', extra: 'Phone, Email', bank: 'CIBC', price: '$35' },
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '09/27', name: 'JULIA ***', country: 'AU', state: 'NSW', address: 'Yes', zip: '20**', extra: 'Phone', bank: 'COMMONWEALTH BANK', price: '$33' },
        { type: 'MASTERCARD', subtype: 'DEBIT STANDARD', expiry: '03/25', name: 'JACK ***', country: 'AU', state: 'VIC', address: 'Yes', zip: '30**', extra: 'Email', bank: 'WESTPAC', price: '$31' },
        { type: 'VISA', subtype: 'CREDIT GOLD', expiry: '06/28', name: 'SOPHIE ***', country: 'AU', state: 'QLD', address: 'Yes', zip: '40**', extra: 'Phone, IP', bank: 'ANZ BANK', price: '$74' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '12/29', name: 'LIAM ***', country: 'AU', state: 'WA', address: 'Yes', zip: '60**', extra: 'Phone, Email', bank: 'NAB', price: '$36' },
        { type: 'VISA', subtype: 'CREDIT PLATINUM', expiry: '08/27', name: 'OLIVIA ***', country: 'AU', state: 'SA', address: 'Yes', zip: '50**', extra: 'Email, IP', bank: 'BENDIGO BANK', price: '$92' },
        { type: 'VISA', subtype: 'DEBIT CLASSIC', expiry: '04/26', name: 'MARTIN ***', country: 'DE', state: 'BE', address: 'Yes', zip: '10***', extra: 'Phone, Email', bank: 'DEUTSCHE BANK', price: '$30' },
        { type: 'MASTERCARD', subtype: 'CREDIT PLATINUM', expiry: '07/27', name: 'HANNE ***', country: 'DE', state: 'BW', address: 'Yes', zip: '70***', extra: 'Email, IP', bank: 'COMMERZBANK', price: '$67' },
        { type: 'VISA', subtype: 'CREDIT GOLD', expiry: '11/28', name: 'PETER ***', country: 'DE', state: 'NRW', address: 'Yes', zip: '40***', extra: 'Phone', bank: 'DZ BANK', price: '$64' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '02/29', name: 'ANNA ***', country: 'DE', state: 'BY', address: 'Yes', zip: '80***', extra: 'Phone, Email', bank: 'N/A', price: '$31' },
        { type: 'VISA', subtype: 'CREDIT SIGNATURE', expiry: '09/26', name: 'MARKUS ***', country: 'DE', state: 'HE', address: 'Yes', zip: '60***', extra: 'IP', bank: 'ING GERMANY', price: '$35' },
        { type: 'MASTERCARD', subtype: 'DEBIT GOLD', expiry: '06/27', name: 'FABIEN ***', country: 'FR', state: 'IDF', address: 'Yes', zip: '75***', extra: 'Phone', bank: 'BNP PARIBAS', price: '$50' },
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '12/28', name: 'CAMILLE ***', country: 'FR', state: 'NAQ', address: 'Yes', zip: '33***', extra: 'Email, IP', bank: 'SOCIETE GENERALE', price: '$31' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '05/26', name: 'ANTOINE ***', country: 'FR', state: 'PAC', address: 'Yes', zip: '13***', extra: 'Phone, Email', bank: 'CREDIT AGRICOLE', price: '$33' },
        { type: 'VISA', subtype: 'CREDIT PLATINUM', expiry: '03/29', name: 'MARIE ***', country: 'FR', state: 'ARA', address: 'Yes', zip: '69***', extra: 'Phone, IP', bank: 'LA BANQUE POSTALE', price: '$83' },
        { type: 'MASTERCARD', subtype: 'CREDIT SIGNATURE', expiry: '08/27', name: 'LOUIS ***', country: 'FR', state: 'OCC', address: 'Yes', zip: '31***', extra: 'Email', bank: 'CREDIT MUTUEL', price: '$34' },
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '03/27', name: 'DAVID ***', country: 'US', state: 'CA', address: 'Yes', zip: '92***', extra: 'Phone, Email, IP', bank: 'NAVY F.C.U', price: '$35' },
        { type: 'MASTERCARD', subtype: 'DEBIT STANDARD', expiry: '07/26', name: 'EMILY ***', country: 'US', state: 'NY', address: 'Yes', zip: '10***', extra: 'Email', bank: 'N/A', price: '$30' },
        { type: 'AMEX', subtype: 'CREDIT GOLD', expiry: '11/28', name: 'JASON ***', country: 'US', state: 'TX', address: 'Yes', zip: '75***', extra: 'Phone, Email', bank: 'AMERICAN EXPRESS', price: '$47' },
        { type: 'VISA', subtype: 'DEBIT PLATINUM', expiry: '02/29', name: 'LAURA ***', country: 'US', state: 'FL', address: 'Yes', zip: '33***', extra: 'IP', bank: 'WELLS FARGO', price: '$84' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '06/27', name: 'RYAN ***', country: 'US', state: 'IL', address: 'Yes', zip: '60***', extra: 'Phone', bank: 'BANK OF AMERICA', price: '$36' },
        { type: 'VISA', subtype: 'CREDIT SIGNATURE', expiry: '12/26', name: 'SOPHIA ***', country: 'US', state: 'NV', address: 'Yes', zip: '89***', extra: 'Email, IP', bank: 'US BANK', price: '$34' },
        { type: 'MASTERCARD', subtype: 'DEBIT GOLD', expiry: '04/28', name: 'MATT ***', country: 'US', state: 'OH', address: 'Yes', zip: '43***', extra: 'Phone, Email', bank: 'PNC BANK', price: '$56' },
        { type: 'AMEX', subtype: 'CREDIT PLATINUM', expiry: '09/27', name: 'HANNAH ***', country: 'US', state: 'GA', address: 'Yes', zip: '30***', extra: 'Email', bank: 'AMERICAN EXPRESS', price: '$59' },
        { type: 'VISA', subtype: 'DEBIT CLASSIC', expiry: '01/25', name: 'DANIEL ***', country: 'US', state: 'AZ', address: 'Yes', zip: '85***', extra: 'Phone, Email, IP', bank: 'BANK OF THE WEST', price: '$27' },
        { type: 'MASTERCARD', subtype: 'CREDIT PLATINUM', expiry: '08/29', name: 'KAREN ***', country: 'US', state: 'MI', address: 'Yes', zip: '48***', extra: 'Phone', bank: 'ALLY BANK', price: '$66' },
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '05/26', name: 'OLIVER ***', country: 'UK', state: 'LND', address: 'Yes', zip: 'SW1***', extra: 'Phone, Email', bank: 'BARCLAYS', price: '$29' },
        { type: 'MASTERCARD', subtype: 'DEBIT STANDARD', expiry: '10/28', name: 'CHARLOTTE ***', country: 'UK', state: 'ENG', address: 'Yes', zip: 'E2***', extra: 'Email', bank: 'N/A', price: '$27' },
        { type: 'VISA', subtype: 'CREDIT GOLD', expiry: '07/27', name: 'BENJAMIN ***', country: 'UK', state: 'SCT', address: 'Yes', zip: 'EH1***', extra: 'Phone, Email, IP', bank: 'LLOYDS BANK', price: '$49' },
        { type: 'MASTERCARD', subtype: 'CREDIT PLATINUM', expiry: '11/29', name: 'AMELIA ***', country: 'UK', state: 'WLS', address: 'Yes', zip: 'CF1***', extra: 'Phone', bank: 'NATWEST', price: '$67' },
        { type: 'VISA', subtype: 'DEBIT PLATINUM', expiry: '03/25', name: 'GEORGE ***', country: 'UK', state: 'NIR', address: 'Yes', zip: 'BT1***', extra: 'Email, IP', bank: 'BANK OF IRELAND UK', price: '$1' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '09/27', name: 'ISLA ***', country: 'UK', state: 'ENG', address: 'Yes', zip: 'M1***', extra: 'Phone, Email', bank: 'TSB BANK', price: '$33' },
        { type: 'VISA', subtype: 'CREDIT SIGNATURE', expiry: '06/26', name: 'HARRY ***', country: 'UK', state: 'LND', address: 'Yes', zip: 'EC2***', extra: 'Phone, Email', bank: 'SANTANDER UK', price: '$35' },
        { type: 'MASTERCARD', subtype: 'DEBIT GOLD', expiry: '08/28', name: 'MIA ***', country: 'UK', state: 'ENG', address: 'Yes', zip: 'B1***', extra: 'Phone, IP', bank: 'VIRGIN MONEY UK', price: '$30' },
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '04/27', name: 'LEO ***', country: 'UK', state: 'SCT', address: 'Yes', zip: 'G1***', extra: 'Email', bank: 'COUTTS', price: '£50' },
        { type: 'AMEX', subtype: 'CREDIT PLATINUM', expiry: '12/29', name: 'GRACE ***', country: 'UK', state: 'ENG', address: 'Yes', zip: 'SE1***', extra: 'Phone, Email, IP, User-Agent, ATM Pin', bank: 'AMERICAN EXPRESS UK', price: '$143' },
        { type: 'VISA', subtype: 'DEBIT STANDARD', expiry: '01/26', name: 'NOAH ***', country: 'CA', state: 'ON', address: 'Yes', zip: 'M5***', extra: 'Phone, IP', bank: 'ROYAL BANK OF CANADA', price: '$33' },
        { type: 'MASTERCARD', subtype: 'CREDIT CLASSIC', expiry: '05/27', name: 'AVA ***', country: 'CA', state: 'BC', address: 'Yes', zip: 'V6***', extra: 'Email', bank: 'TD CANADA TRUST', price: '$34' },
        { type: 'VISA', subtype: 'CREDIT GOLD', expiry: '07/28', name: 'LUCAS ***', country: 'CA', state: 'QC', address: 'Yes', zip: 'H3***', extra: 'Phone, Email', bank: 'BANK OF MONTREAL', price: '$32' },
        { type: 'MASTERCARD', subtype: 'DEBIT PLATINUM', expiry: '02/29', name: 'ELLA ***', country: 'CA', state: 'AB', address: 'Yes', zip: 'T2***', extra: 'IP', bank: 'SCOTIABANK', price: '$68' },
        { type: 'VISA', subtype: 'CREDIT WORLD', expiry: '10/26', name: 'ETHAN ***', country: 'CA', state: 'MB', address: 'Yes', zip: 'R3***', extra: 'Phone, Email', bank: 'CIBC', price: '$35' },
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '09/27', name: 'JULIA ***', country: 'AU', state: 'NSW', address: 'Yes', zip: '20**', extra: 'Phone', bank: 'COMMONWEALTH BANK', price: '$33' },
        { type: 'MASTERCARD', subtype: 'DEBIT STANDARD', expiry: '03/25', name: 'JACK ***', country: 'AU', state: 'VIC', address: 'Yes', zip: '30**', extra: 'Email', bank: 'WESTPAC', price: '$31' },
        { type: 'VISA', subtype: 'CREDIT GOLD', expiry: '06/28', name: 'SOPHIE ***', country: 'AU', state: 'QLD', address: 'Yes', zip: '40**', extra: 'Phone, IP', bank: 'ANZ BANK', price: '$34' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '12/29', name: 'LIAM ***', country: 'AU', state: 'WA', address: 'Yes', zip: '60**', extra: 'Phone, Email', bank: 'NAB', price: '$36' },
        { type: 'VISA', subtype: 'CREDIT PLATINUM', expiry: '08/27', name: 'OLIVIA ***', country: 'AU', state: 'SA', address: 'Yes', zip: '50**', extra: 'Email, IP', bank: 'BENDIGO BANK', price: '$79' },
        { type: 'VISA', subtype: 'DEBIT CLASSIC', expiry: '04/26', name: 'MARTIN ***', country: 'DE', state: 'BE', address: 'Yes', zip: '10***', extra: 'Phone, Email', bank: 'DEUTSCHE BANK', price: '$30' },
        { type: 'MASTERCARD', subtype: 'CREDIT PLATINUM', expiry: '07/27', name: 'HANNE ***', country: 'DE', state: 'BW', address: 'Yes', zip: '70***', extra: 'Email, IP', bank: 'COMMERZBANK', price: '$95' },
        { type: 'VISA', subtype: 'CREDIT GOLD', expiry: '11/28', name: 'PETER ***', country: 'DE', state: 'NRW', address: 'Yes', zip: '40***', extra: 'Phone', bank: 'DZ BANK', price: '$64' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '02/29', name: 'ANNA ***', country: 'DE', state: 'BY', address: 'Yes', zip: '80***', extra: 'Phone, Email', bank: 'N/A', price: '$31' },
        { type: 'VISA', subtype: 'CREDIT SIGNATURE', expiry: '09/26', name: 'MARKUS ***', country: 'DE', state: 'HE', address: 'Yes', zip: '60***', extra: 'IP', bank: 'ING GERMANY', price: '$35' },
        { type: 'MASTERCARD', subtype: 'DEBIT GOLD', expiry: '06/27', name: 'FABIEN ***', country: 'FR', state: 'IDF', address: 'Yes', zip: '75***', extra: 'Phone', bank: 'BNP PARIBAS', price: '$53' },
        { type: 'VISA', subtype: 'CREDIT CLASSIC', expiry: '12/28', name: 'CAMILLE ***', country: 'FR', state: 'NAQ', address: 'Yes', zip: '33***', extra: 'Email, IP', bank: 'SOCIETE GENERALE', price: '$31' },
        { type: 'MASTERCARD', subtype: 'CREDIT WORLD', expiry: '05/26', name: 'ANTOINE ***', country: 'FR', state: 'PAC', address: 'Yes', zip: '13***', extra: 'Phone, Email', bank: 'CREDIT AGRICOLE', price: '$33' },
        { type: 'VISA', subtype: 'CREDIT PLATINUM', expiry: '03/29', name: 'MARIE ***', country: 'FR', state: 'ARA', address: 'Yes', zip: '69***', extra: 'Phone, IP', bank: 'LA BANQUE POSTALE', price: '$87' },
        { type: 'MASTERCARD', subtype: 'CREDIT SIGNATURE', expiry: '08/27', name: 'LOUIS ***', country: 'FR', state: 'OCC', address: 'Yes', zip: '31***', extra: 'Email', bank: 'CREDIT MUTUEL', price: '$34' },

        
    ];
    
    
    const existingRows = tableData.length;
    for (let i = existingRows + 1; i <= 50; i++) {
        tableData.push({ type: `Type ${i}`, subtype: `Subtype ${i}`, expiry: `Expiry ${i}`, name: `Name ${i}`, country: `Country ${i}`, state: `State ${i}`, address: `Address ${i}`, zip: `ZIP ${i}`, extra: `Extra ${i}`, bank: `Place ${i}`, price: `Price ${i}` });
    }


    // --- Tab Switching Logic ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.dataset.tab;
            tabLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            tabContents.forEach(content => content.id === tabId ? content.classList.add('active') : content.classList.remove('active'));
        });
    });

    // --- Modal Functionality ---
    const modal = document.getElementById('paymentModal');
    const closeButton = document.querySelector('.close-button');
    const purchaseDetailsContainer = document.getElementById('purchaseDetails');
    closeButton.onclick = () => modal.style.display = "none";
    window.onclick = event => { if (event.target == modal) modal.style.display = "none"; };
    document.getElementById('copyButton').addEventListener('click', () => {
        const btcAddressInput = document.getElementById('btcAddress');
        btcAddressInput.select();
        btcAddressInput.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(btcAddressInput.value);
        alert("Copied the address: " + btcAddressInput.value);
    });

    // --- Function to build the table from the data array ---
    const tableBody = document.querySelector('table tbody');
    const headers = { 'Type': 'type', 'Subtype': 'subtype', 'Expiry': 'expiry', 'Name': 'name', 'Country': 'country', 'State': 'state', 'Full Address': 'address', 'ZIP': 'zip', 'Extra': 'extra', 'Bank': 'bank', 'Price': 'price' };

    tableData.forEach(rowData => {
        const row = document.createElement('tr');
        
        // Create cells in the correct order based on headers
        Object.values(headers).forEach(key => {
            const cell = document.createElement('td');
            cell.textContent = rowData[key] || ''; 
            row.appendChild(cell);
        });

        row.addEventListener('click', () => {
            purchaseDetailsContainer.innerHTML = '';
            // Populate modal from the original data object
            for (const [header, key] of Object.entries(headers)) {
                const detailElement = document.createElement('p');
                detailElement.innerHTML = `<strong>${header}:</strong> ${rowData[key] || ''}`;
                purchaseDetailsContainer.appendChild(detailElement);
            }
            modal.style.display = 'block';
        });
        tableBody.appendChild(row);
    });
});
