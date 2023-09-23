function language(country) {
    switch (country) {
        case 'Spain':
        case 'Mexico':
        case 'Argentina':
            console.log('Spanish');
            break;
        case 'England':
        case 'USA':
            console.log('English');
            break;
        default:
            console.log('unknown');
            break;
    }
}


language('English');