import PriceOption from "../PriceOption/PriceOption";


const Price = () => {
 const price =   [
        {
          "id": "basic-membership",
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Fitness classes (limited)",
            "Free water",
            "Discounted guest passes",
            "Monthly fitness assessment"
          ]
        },
        {
          "id": "premium-membership",
          "name": "Premium Membership",
          "price": 49.99,
          "features": [
            "Unlimited access to gym equipment",
            "Full locker room amenities",
            "Unlimited fitness classes",
            "Personal trainer sessions (2/month)",
            "Free towel service",
            "Nutrition consultation",
            "Sauna and steam room access",
            "Access to swimming pool"
          ]
        },
        {
          "id": "student-membership",
          "name": "Student Membership",
          "price": 19.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Fitness classes (limited)",
            "Valid student ID required",
            "Student-only fitness classes",
            "Discounted personal training sessions"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h1 className="text-3xl">Best Price</h1>
           <div className="grid md:grid-cols-3 gap-6">
           {
             price.map(option => <PriceOption key={option.id} option={option}></PriceOption> )
            }
           </div>
            
        </div>
    );
};

export default Price;