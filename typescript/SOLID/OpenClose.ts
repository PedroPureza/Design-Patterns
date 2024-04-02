//Open for extension, closed for modification

class WrongDiscount {
  giveDiscount(customType: "premium" | "regular"): number {
    if (customType === "premium") {
      return 20;
    } else if (customType === "regular") {
      return 10;
    }
    return 0;
  }
}
// What if we want to add another type of customer? We would have to modify the Discount class. This violates the Open/Closed principle.

//Solution
interface Customer {
  giveDiscount(): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}

class NewCustomer implements Customer {
  giveDiscount(): number {
    return 5;
  }
}

class RightDiscount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

let premiumCustomer: PremiumCustomer = new PremiumCustomer();
let discount: RightDiscount = new RightDiscount();

discount.giveDiscount(premiumCustomer); // 20
