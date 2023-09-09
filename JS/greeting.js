function greetings(name) {
    const date = new Date();
    const hour = date.getHours();

    const message =
        hour >= 3 && hour <= 11
            ? `Good morning ${name}`
            // 0300 - 1100
            : hour >= 12 && hour <= 16
                ? `Good afternoon ${name}`
                // 1200 - 1600
                : hour >= 17 && hour <= 19
                    ? `Good evening ${name}`
                    // 1700 - 1900
                    : hour >= 20 && hour <= 2
                        ? `Good night ${name}`
                        // 2000 - 0200
                        : `Something went wrong`;

    console.log(message);
}

greetings("Bob");
