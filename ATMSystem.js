
class account {
    constructor(name, password, ammount)
    {
        this.name = name;
        this.password = password;
        this.ammount = ammount;
    }

}

class atm {
    constructor(accounts = [], status)
    {
        this.accounts = accounts;
        this.status = status;
        this.accounts.push(new account("Kate", "password", 2700));
        this.accounts.push(new account("shrek", "password2", 0));
        this.status = null;
        
    }


    register() {
        console.log("Thank you for choosing to bank with us! Every new member gets a $50 reward for signing up with us")
        let name = prompt("Please enter a username");
        let password = prompt("Let enter a password");
        let newAccount = new account(name, password, 50);
        this.accounts.push(newAccount)
        console.log(this.accounts)
        console.log("You have been register")
    }


    Login() {
        
        if ( this.status === null)
        {
            let nameLogin = prompt("Please enter in your username");
            let passwordLogin = prompt("Please enter in your password");

            for (var i = 0; i < this.accounts.length; i++)
            {
                if (this.accounts[i].name === nameLogin)
                {
                    break;  
                }
                else {
                    console.log("I'm sorry your account login is incorrect");
                    i="no luck jimmy"
                    break;
                }
            }
            for (var p = 0; p < this.accounts.length; p++) {
                if (this.accounts[p].password === passwordLogin)
                {
                    break;
                 }
                else {
                    console.log("I'm sorry your password is incorrect");
                    p="stop trying to hack in man"
                    break;
                }
            }
           
            if ( p === i)
            {
                this.status = i;
                console.log(`${this.accounts[this.status].name}, you have login in`);
                
                let goOn = true;
                while (goOn === true) {
                    let input = prompt("What would you like to do? Check balance (1), Withdraw (2), Despoit(3), Logout and Exit (4)");
                    if (input === "1") {
                        a.CheckBalance();
                    }
                    else if (input === "2") {
                        a.Withdraw();
                    }
                    else if (input === "3") {
                        a.Deposit();
                    }
                    else if (input == "4") {
                        a.LogOut();
                        break;
                    }
                    else {
                        console.log("not a valid response try again");
                    }
                }
            }
            else
            {
                console.log("Sorry, that did not match any of our accounts");
            }
        }
        else
        {
            console.log("This ATM is currently in use, please try again later");
        }

        
    }

    CheckBalance()
    {
        if (this.status !== null) {
            console.log(`Balance: ${this.accounts[this.status].ammount}`);
        }
        else {
            console.log("You are not logged in")
        }
    }

    LogOut()
    {
        if (this.accounts.status !== null) {
            console.log(`${this.accounts[this.status].name} has beeen logged out`)
        }
        
    }

    Deposit()
    {
        if (this.accounts.status !== null) {
            console.log(this.status);
            let despoit = prompt("How much are you adding to your account today?");
            let des = parseFloat(this.accounts[this.status].ammount) + parseFloat(despoit);
            this.accounts[this.status].ammount = des;
            console.log(`balance: ${this.accounts[this.status].ammount}`);
        }
        else {
            console.log("Sorry, you are not logged in");
        }
    }

    Withdraw() {
        if (this.accounts.status !== null) {
            let withdraw = parseFloat(prompt("how much would you like to take out today"));
            if (parseFloat(this.accounts[this.status].ammount) > withdraw) {
                let newBal = parseFloat(this.accounts[this.status].ammount) - withdraw;
                this.accounts[this.status].ammount = newBal;
                console.log(`balance: ${ this.accounts[this.status].ammount }`);
            }
            else {
                console.log("sorry, you do not have enough funds for that")
            }

        }
    }
}

let a = new atm;

let con = true;
while (con === true) {
    let input = prompt("would you like to (1) register another account, (2) login, or (3) exit?")
    if (input === "1") {
        a.register();
        con = true;
    }
    else if (input === "2") {
        a.Login();
        con = true;
    }
    else if (input === "3") {
        break;
    }
    else {
        console.log("not a valid response try again")
        con = true;
    }
}