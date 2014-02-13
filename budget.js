function SalesCtrl($scope) {
    $scope.GetCurrentSalaries = function() {
        var total = 0.0;
        $scope.employees.forEach(function(employee){
            if (employee.employed) total += employee.salary;
        });

        return total;
    };

    $scope.GetAverageSalary = function() {
        var total = $scope.GetCurrentSalaries();
        var num_employees = 0.0;

        $scope.employees.forEach(function(employee){
            if (employee.employed) num_employees += 1;
        });

        return total / num_employees;
    };

    $scope.employees = [
        {'title': 'Sales Director', 'salary': 177000, 'employed': true },
        {'title': 'Secretary', 'salary' : 51000, 'employed': true },
        {'title': 'Mechandising Manager', 'salary': 93200, 'employed': true },
        {'title': 'Marketing Assistant', 'salary': 55200, 'employed': true },
        {'title': 'North Sales Manager', 'salary': 90000, 'employed': true },
        {'title': 'North Salesperson', 'salary': 75000, 'employed': true },
        {'title': 'North Salesperson', 'salary': 75000, 'employed': true },
        {'title': 'North Salesperson', 'salary': 75000, 'employed': true },
        {'title': 'North Salesperson', 'salary': 75000, 'employed': true },
        {'title': 'South Sales Manager', 'salary': 90000, 'employed': true },
        {'title': 'South Salesperson', 'salary': 75000, 'employed': true },
        {'title': 'South Salesperson', 'salary': 75000, 'employed': true },
        {'title': 'South Salesperson', 'salary': 75000, 'employed': true },
        {'title': 'South Salesperson', 'salary': 75000, 'employed': true },
        {'title': 'East Sales Manager', 'salary': 90000, 'employed': true },
        {'title': 'East Salesperson', 'salary':  75000, 'employed': true },
        {'title': 'East Salesperson', 'salary':  75000, 'employed': true },
        {'title': 'East Salesperson', 'salary':  75000, 'employed': true },
        {'title': 'East Salesperson', 'salary':  75000, 'employed': true },
        {'title': 'West Sales Manager', 'salary': 90000, 'employed': true },
        {'title': 'West Sales Person', 'salary': 75000, 'employed': true },
        {'title': 'West Sales Person', 'salary': 75000, 'employed': true },
        {'title': 'West Sales Person', 'salary': 75000, 'employed': true },
        {'title': 'West Sales Person', 'salary': 75000, 'employed': true }];
};


function LogisticsCtrl($scope){
    $scope.GetCurrentSalaries = function() {
        var total = 0.0;
        $scope.employees.forEach(function(employee){
            if (employee.employed) total += employee.salary;
        });

        return total;
    };

    $scope.GetAverageSalary = function() {
        var total = $scope.GetCurrentSalaries();
        var num_employees = 0.0;

        $scope.employees.forEach(function(employee){
            if (employee.employed) num_employees += 1;
        });

        return total / num_employees;
    };

    $scope.employees = [
        {'title': 'Logistics Manager', 'salary': 135000, 'employed': true },
        {'title': 'Cafeteria Staff', 'salary': 41200, 'employed': true },
        {'title': 'Cafeteria Staff', 'salary': 41200, 'employed': true },
        {'title': 'Cafeteria Staff', 'salary': 41200, 'employed': true },
        {'title': 'Secretary', 'salary': 48000, 'employed': true },
        {'title': 'Supervisor Receiving', 'salary': 75600, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Security Staff', 'salary': 58600, 'employed': true },
        {'title': 'Security Staff', 'salary': 58600, 'employed': true },
        {'title': 'Supervisor', 'salary': 75600, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Supervisor', 'salary': 75600, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Supervisor', 'salary': 75600, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed': true },
        {'title': 'Supervisor Shipping', 'salary': 75600 , 'employed':true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed':true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed':true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed':true },
        {'title': 'Stock Staff', 'salary': 50400, 'employed':true },
        {'title': 'Driver', 'salary': 60000, 'employed':true },
        {'title': 'Driver', 'salary': 60000, 'employed':true }];
};

function FinanceCtrl($scope) {
    $scope.GetCurrentSalaries = function() {
        var total = 0.0;
        $scope.employees.forEach(function(employee){
            if (employee.employed) total += employee.salary;
        });

        return total;
    };

    $scope.GetAverageSalary = function() {
        var total = $scope.GetCurrentSalaries();
        var num_employees = 0.0;

        $scope.employees.forEach(function(employee){
            if (employee.employed) num_employees += 1;
        });

        return total / num_employees;
    };

    $scope.employees = [
        {'title': 'Finance Director', 'salary': 151000, 'employed': true },
        {'title': 'Accountant', 'salary': 102000, 'employed': false},
        {'title': 'Secretary', 'salary': 48000, 'employed': true},
        {'title': 'Administration Manager', 'salary': 102000, 'employed': true},
        {'title': 'Cashier / Payroll', 'salary': 67800, 'employed': true},
        {'title': 'Accounts Assistant', 'salary': 51000, 'employed': true},
        {'title': 'IT Support', 'salary': 45000, 'employed': true},
        {'title': 'Buying Assistant', 'salary': 67200, 'employed': true},
        {'title': 'Stock Control', 'salary': 42000, 'employed': true},
        {'title': 'Admin Assistant', 'salary': 40400, 'employed': true},
        {'title': 'Telephone Reception', 'salary': 37800, 'employed': true},
        {'title': 'Order Processor', 'salary': 41200, 'employed': true},
        {'title': 'Order Processor', 'salary': 41200, 'employed': true}];
};
