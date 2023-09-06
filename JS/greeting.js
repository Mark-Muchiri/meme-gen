function greeting(name) {
    const date = new Date();
    const hour = date.getHours();
    // Condition
    (hour >= 4 && hour <= 11) ? console.log(`Good morning ${name}`) : (hour >= 12 && hour <= 16) ? console.log(`Good afternoon ${name}`) : (hour >= 17 && hour <= 19) ? console.log(`Good evening ${name}`) : (hour >= 20 && hour <= 3) ? console.log(`Good morning ${name}`) : console.log(`default`);
}
greeting("Bob");