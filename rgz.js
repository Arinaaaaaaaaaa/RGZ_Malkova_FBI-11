function table_stock() {
    let table = document.getElementById('stock');
    let data_stock = ['28.04.2023', '27.04.2023', '26.04.2023', '25.04.2023', '24.04.2023',
                    '21.04.2023','20.04.2023', '19.04.2023', '18.04.2023', '17.04.2023',
                    '14.04.2023', '13.04.2023', '12.04.2023', '11.04.2023', '10.04.2023',
                    '07.04.2023', '06.04.2023','05.04.2023', '04.04.2023', '03.04.2023']
    let stock_exchange = [750.00, 762.50, 763.00, 764.50, 773.00, 778.50, 761.00, 768.00, 761.00, 769.00, 
                        750.00, 735.00, 740.00, 742.00, 748.50, 747.00, 755.00, 755.00, 758.50, 745.00];

    for(let i = 0; i < data_stock.length; i++) {
        let tr_data = document.createElement('tr');
        let td_data = document.createElement('td');
        let td_stock = document.createElement('td');
        td_data.innerHTML = data_stock[i];
        td_stock.innerHTML = stock_exchange[i];
        tr_data.appendChild(td_data);
        tr_data.appendChild(td_stock);
        table.appendChild(tr_data);
    }
        let maximum = Math.max(...stock_exchange);
        document.getElementById('lenta_max').innerHTML = 'Максимальная цена: ' + maximum;
        let minimum = Math.min(...stock_exchange);
        document.getElementById('lenta_min').innerHTML = 'Минимальная цена: ' + minimum;
        let sum = stock_exchange.reduce(function(sum, elem) {
            return sum + elem;
        }, 0);
            let average = (sum / stock_exchange.length);
            let stock_exchange_1 = stock_exchange.map(i => (i - average)**2);
            let variance = stock_exchange_1.reduce(function(sum, elem) {
                return sum + elem;
            }, 0)/stock_exchange_1.length;

            let root_of_variance = (Math.sqrt(variance)).toFixed(3);
            document.getElementById('lenta_variance').innerHTML = 'Среднеквадратическое отклонение цены: ' + root_of_variance;
}