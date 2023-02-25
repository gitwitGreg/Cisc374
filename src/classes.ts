/**
 * (1) Define the following class:
 *
 * BankAccount
 *
 *  Attributes
 *      amount: number // The amount of money in the bank account
 *      name: string // The name given to this bank account.
 *
 *  Methods
 *      constructor(name: string): BankAccount
 *          Creates a new bank account with the given name.
 *      deposit(added_amount: number): number
 *          Consumes the amount the user is depositing into their account, to be added to the amount.
 *          Returns the new balance.
 *      withdraw(amount_requested: number): number
 *          Consumes the amount the user is attempting to withdraw. If the amount in the account
 *          is less than the amount requested, set the account's amount to be 0 and return
 *          however much was in the account before then.
 *      isEmpty(): boolean
 *          Returns whether the account is empty (i.e., at zero).
 *
 *
 */
class bankAccount{
    money : number;
    name : string;

    bankAccount(name: string){
        this.name = name;
        this.money = 0;
    }

    deposit(added_amount: number){
        this.money = this.money + added_amount;
        console.log("you added $" +added_amount + "your new total is " + this.money);
    }
    withdrawl(withdrawl_amount: number){
        if ( this.money << withdrawl_amount){
            console.log("Please withdrawl amount lass than the account balance");
        }
        else{
            this.money = this.money - withdrawl_amount;
            console.log("new balance is " + this.money)
        }
    }
    isEmpty(){
        if (this.money === 0){
            return (this.money === 0);
        }
    }
}
/**
 * (2) Make 3 sample bank accounts and demonstrate withdrawing and depositing money into them.
 */
    let banker1 = new bankAccount();
    let banker2 = new bankAccount();
    let banker3 = new bankAccount();
    banker1.bankAccount("greg");
    banker2.bankAccount("macy");
    banker3.bankAccount("julz")

    banker1.deposit(500);
    banker1.withdrawl(100);
    banker1.isEmpty();

/**
 * (3) Define the following class:
 *
 * SpaceShip
 *
 *     Attributes:
 *         x: number // horizontal position on game grid
 *         y: number // vertical position on game grid
 *         callSign: string // Cool name for this ship
 *         onFire: boolean // Whether or not the ship is on fire
 *         ammo: number // How much ammo the ship has
 *         friends: Array<SpaceShip> // Other ships that this ship has met
 *
 *     Methods:
 *         constructor(): SpaceShip
 *             Spaceships start off at (0, 0), not on fire, with 0 ammo, and no friends.
 *         shoot(): void
 *             If there is ammo, decrease it by one and console.log a message about shooting.
 *             If there is no ammo, set the ship on fire.
 *         collectAmmo(clipAmount: number): void
 *             Add the clipAmount to the ammo
 *         makeFriend(newFriend: SpaceShip): boolean
 *             If the new friend has the same X and Y positions, add the newFriend to this
 *             ship's friends.
 *         pingFriends(): void
 *             Print out a message saying hello to each friend, referring to their callsign.
 *         moveTo(x: number, y: number): void
 *             Update the ship's position to the new location.
 *
 */
    class spaceShip{
        x: number;
        y: number;
        freinds : Array<spaceShip>;
        callSign: string;
        ammo : number;
        onFire: boolean;
        spaceShip(){
            this.x = 0;
            this.y = 0;
            this.ammo = 0;
            this.freinds = [];
        }
        shoot():void{
            if (this.ammo > 0){
                this.ammo = this.ammo -1;
                console.log("you have fired a shot");
            }
            else{
                this.onFire = true;
            }
        }
        collectAmmo(clipAmount: number):void{
            this.ammo = this.ammo + clipAmount;
        }
        makeNewFreind(freind :spaceShip): boolean {
            let freinds = new spaceShip();
            freinds.spaceShip();
            this.freinds.push(freinds);
            return (true);
        }
    }
/**
 * (4) Make 3 example ships, ensure that at least two of them are friends, and try
 * calling each of the methods.
 */